type LinkedInIconProps = {
  className?: string;
};

export function LinkedInIcon({ className }: LinkedInIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M5.35 7.18A2.18 2.18 0 1 0 5.35 2.82a2.18 2.18 0 0 0 0 4.36ZM3.48 21.18h3.74V9.16H3.48v12.02ZM9.55 9.16h3.58v1.64h.05c.5-.94 1.72-1.94 3.54-1.94 3.79 0 4.49 2.49 4.49 5.73v6.59h-3.73v-5.84c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.52-2.24 3.08v5.94H9.55V9.16Z" />
    </svg>
  );
}
