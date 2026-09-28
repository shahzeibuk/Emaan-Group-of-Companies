import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { group, logistics, pages, softTech } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <p className="brand-name">Emaan</p>
          <p className="footer-kicker">Group of Companies</p>
          <p className="footer-note">
            Faith, trust, and integrity — held as a standard of delivery across logistics, software,
            and residential development.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="footer-title">Pages</p>
          <ul>
            {pages.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer-title">Domains</p>
          <ul>
            <li>
              <ExternalLink href={group.url}>{group.domain}</ExternalLink>
            </li>
            <li>
              <ExternalLink href={logistics.url}>{logistics.domain}</ExternalLink>
            </li>
            <li>
              <ExternalLink href={softTech.url}>{softTech.domain}</ExternalLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Write</p>
          <ul>
            <li>
              <a href={`mailto:${group.email}`}>{group.email}</a>
            </li>
            <li>
              <a href={`mailto:${logistics.email}`}>{logistics.email}</a>
            </li>
            <li>
              <a href={`mailto:${softTech.email}`}>{softTech.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-legal">
        <p>© {year} Emaan Group of Companies</p>
        <nav aria-label="Legal">
          <Link href="/terms">Terms and conditions</Link>
          <Link href="/privacy">Privacy policy</Link>
        </nav>
      </div>
    </footer>
  );
}
