import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  fullName?: string;
  email?: string;
  organization?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
  const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "hello@gatewayic.com";

  if (!resendApiKey || !contactFromEmail) {
    return NextResponse.json(
      {
        error: "Email service is not configured yet. Add the Resend environment variables and redeploy.",
      },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const fullName = normalizeField(payload.fullName);
  const email = normalizeField(payload.email);
  const organization = normalizeField(payload.organization);
  const message = normalizeField(payload.message);

  if (!fullName || !email || !message) {
    return NextResponse.json(
      { error: "Full name, email address, and message are required." },
      { status: 400 }
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safeOrganization = escapeHtml(organization || "Not provided");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
      subject: `New website enquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0B2245;">
          <h2 style="margin-bottom: 16px;">New website enquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Organisation:</strong> ${safeOrganization}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
      text: [
        "New website enquiry",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Organisation: ${organization || "Not provided"}`,
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend contact form error", error);

    return NextResponse.json(
      { error: "We could not send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}