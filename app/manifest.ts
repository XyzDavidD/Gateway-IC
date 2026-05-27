import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gateway International Consultancy",
    short_name: "Gateway IC",
    description:
      "Aviation engineering advisory, training solutions, regulatory support, and strategic partnerships across the Middle East and international markets.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3F6FB",
    theme_color: "#001A3D",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
