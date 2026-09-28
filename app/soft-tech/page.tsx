import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { SystemMark } from "@/components/Marks";
import { PageIntro } from "@/components/PageIntro";
import { Related } from "@/components/Related";
import { softTech } from "@/lib/site";

export const metadata: Metadata = {
  title: "Emaan Soft Tech",
  description:
    "Emaan Soft Tech is the group’s software house: custom software, websites, and business systems. The public brand site is emaansofttech.com.",
};

export default function SoftTechPage() {
  return (
    <>
      <PageIntro
        eyebrow="Emaan Soft Tech"
        title="Software a business can live in."
        lede="Emaan Soft Tech is the group’s software house. It designs and builds custom software, websites, and business systems for clients who need the tool to fit the work."
      />

      <section className="figure-band" aria-label="Abstract system diagram">
        <div className="wrap">
          <figure className="figure-panel">
            <SystemMark />
            <figcaption>
              Lines of a working system: a frame, a record, a task. This is not a screenshot, and
              it is not a product catalogue.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="builds-title">
        <div className="wrap split">
          <h2 id="builds-title">What the house builds</h2>
          <div className="stack">
            <h3>Custom software</h3>
            <p>
              Systems shaped around a real operation — the steps people already take, the records
              they must keep, and the exceptions that show up on an ordinary Tuesday. The point is
              not a tour of technology. The point is software that matches the work it is asked to
              hold.
            </p>
            <h3>Web</h3>
            <p>
              Sites and web applications that explain a company clearly and, where needed, let a
              customer or a member of staff finish a task. A page should say what the business
              does, who it is for, and how to begin. Decoration that hides those three things is
              not the work.
            </p>
            <h3>Business systems</h3>
            <p>
              Internal tools that hold orders, records, or workflows. Quiet software. The kind that
              is judged by whether Monday morning is calmer, and by whether a new colleague can
              follow it without a private lesson from the person who commissioned it.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="engagement-title">
        <div className="wrap split">
          <h2 id="engagement-title">How an engagement tends to run</h2>
          <ol className="timeline">
            <li>
              <h3>Listen to the operation</h3>
              <p>
                Before a screen is drawn, the work itself is described: who does what, what must be
                true at the end of a day, and where the current method fails.
              </p>
            </li>
            <li>
              <h3>Name the scope in writing</h3>
              <p>
                What will be built, and what will not, is written down. A change of scope is a
                change that is said, not a surprise at handover.
              </p>
            </li>
            <li>
              <h3>Leave it runnable</h3>
              <p>
                The people who will use the system see it while it is being made. The engagement is
                finished when they can run it, not when a demonstration has been admired once.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="callout">
            <strong>This page does not list a client roster.</strong>
            <p>
              The public brand site is{" "}
              <ExternalLink href={softTech.url}>{softTech.domain}</ExternalLink>. If you need a
              system, write with the problem. Email{" "}
              <a href={`mailto:${softTech.email}`}>{softTech.email}</a> or{" "}
              <Link href="/contact?business=soft-tech">prepare a Soft Tech note</Link>.
            </p>
          </div>
        </div>
      </section>

      <Related
        links={[
          { href: "/about", label: "The group", note: "Soft Tech beside logistics and development." },
          { href: "/contact?business=soft-tech", label: "Contact Soft Tech", note: softTech.email },
        ]}
      />
    </>
  );
}
