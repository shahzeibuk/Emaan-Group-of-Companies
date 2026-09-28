import Link from "next/link";

export function Related({
  links,
}: {
  links: { href: string; label: string; note: string }[];
}) {
  return (
    <aside className="related" aria-label="Related pages">
      <div className="wrap">
        <p className="eyebrow">Also in the group</p>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span>{link.label}</span>
                <small>{link.note}</small>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
