import type { Metadata } from "next";
import Link from "next/link";
import { DrawingSheet } from "@/components/DrawingSheet";
import { ExternalLink } from "@/components/ExternalLink";
import { EnclaveMark, HousingMark, RouteMark, SystemMark } from "@/components/Marks";
import { group, logistics, softTech } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "Emaan Group of Companies holds logistics, software, and residential development to one standard: describe the work plainly, and stand behind it.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Emaan Group of Companies</p>
            <h1 id="hero-title">The work should be worthy of the name.</h1>
            <p className="lede">
              Emaan means faith, trust, and integrity. Across logistics, software, and residential
              development, the group treats that as a working standard: describe the work plainly,
              then stand behind what was described.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/about">
                About the group
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                Contact a desk
              </Link>
            </div>
            <ol className="hero-index">
              <li>
                <span>01</span>
                Logistics
              </li>
              <li>
                <span>02</span>
                Software
              </li>
              <li>
                <span>03</span>
                Development
              </li>
            </ol>
          </div>
          <DrawingSheet />
        </div>
      </section>

      <section className="section" aria-labelledby="promise-title">
        <div className="wrap promise">
          <p className="eyebrow" id="promise-title">
            The promise
          </p>
          <p className="promise-text">
            A shipment, a system, or a home should be easy to follow. The group keeps one standard
            for all three: plain words, and delivery that matches them.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="companies-title">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Sister companies</p>
            <h2 id="companies-title">Two operating companies, and a development arm.</h2>
          </header>
          <article className="band-logistics">
            <div className="band-copy">
              <p className="index-num">01</p>
              <h3>Emaan Logistics</h3>
              <p>
                Import, export, and freight forwarding, with documentation treated as part of the
                shipment — not a file assembled at the last hour.
              </p>
              <p className="meta-links">
                <Link href={logistics.href}>Logistics on this site</Link>
                <ExternalLink href={logistics.url}>{logistics.domain}</ExternalLink>
              </p>
            </div>
            <figure className="figure-panel">
              <RouteMark />
              <figcaption>A diagram of a forwarding path, not a live route map.</figcaption>
            </figure>
          </article>
        </div>
      </section>

      <section className="band-soft" aria-labelledby="soft-title">
        <div className="wrap band-soft-grid">
          <div className="band-copy">
            <p className="index-num">02</p>
            <h3 id="soft-title">Emaan Soft Tech</h3>
            <p>
              A software house for custom software, websites, and the business systems a company
              actually runs on — built so the people who use them can understand them.
            </p>
            <p className="meta-links">
              <Link href={softTech.href}>Soft Tech on this site</Link>
              <ExternalLink href={softTech.url}>{softTech.domain}</ExternalLink>
            </p>
          </div>
          <figure className="figure-panel">
            <SystemMark tone="paper" />
            <figcaption>An abstract of a business system, not a product screenshot.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="dev-title">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Development</p>
            <h2 id="dev-title">Two residential communities, described by character.</h2>
            <p className="section-intro">
              Emaan Enclave and Emaan Housing are planned residential communities under the
              group’s development arm. They are not the same plan. Detailed availability is shared
              on request.
            </p>
          </header>
          <div className="dev-grid">
            <article className="dev-card dev-enclave">
              <figure>
                <EnclaveMark />
                <figcaption>Diagram of intent — a court, homes, and an edge.</figcaption>
              </figure>
              <div className="dev-body">
                <p className="index-num">03a</p>
                <h3>Emaan Enclave</h3>
                <p>
                  A quieter neighbourhood planned to turn inward: homes gathered around shared
                  green, with a clear edge.
                </p>
                <Link href="/enclave">View Enclave</Link>
              </div>
            </article>
            <article className="dev-card dev-housing">
              <figure>
                <HousingMark tone="paper" />
                <figcaption>Diagram of intent — homes along a street.</figcaption>
              </figure>
              <div className="dev-body">
                <p className="index-num">03b</p>
                <h3>Emaan Housing</h3>
                <p>
                  Practical family homes and straightforward daily access — a community organised
                  around ordinary coming and going.
                </p>
                <Link href="/housing">View Housing</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">How we hold the work</p>
            <h2 id="values-title">Three habits, not a slogan wall.</h2>
          </header>
          <ol className="values">
            <li>
              <span className="values-num">01</span>
              <h3>Keep the word</h3>
              <p>
                A scope, a handover, or a date is something to be met. If it changes, the change is
                said out loud.
              </p>
            </li>
            <li>
              <span className="values-num">02</span>
              <h3>Show the work</h3>
              <p>
                People should be able to follow what is happening — a shipment, a system, a plan —
                without asking twice.
              </p>
            </li>
            <li>
              <span className="values-num">03</span>
              <h3>Stay accountable</h3>
              <p>
                Each company has its own desk. The group name still stands behind the work that
                leaves it.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="cta-title">
        <div className="wrap cta-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="cta-title">Write to the group.</h2>
            <p>
              Name the business you are asking about. The note goes to the desk that can answer it.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-light" href={`mailto:${group.email}`}>
              {group.email}
            </a>
            <Link className="btn btn-ghost btn-ghost-light" href="/contact">
              Open the contact page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
