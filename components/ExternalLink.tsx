import type { ReactNode } from "react";

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href}>
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}
