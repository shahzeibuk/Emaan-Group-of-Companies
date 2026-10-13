import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { Logo } from "@/components/Logo";
import { group, logistics, pages, softTech } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo tone="light" />
          <p className="footer-note">
            Faith, trust, and integrity — held as a standard of delivery across the group.
          </p>
          <p className="footer-title footer-visit">Visit</p>
          <ul>
            <li>A-317, Saadabad co-operative housing society, Jinnah Avenue, Karachi.</li>
            <li>
              <a href="tel:+923062787898">0306-2787898</a>
            </li>
          </ul>
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
