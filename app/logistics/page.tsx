import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { RouteMark } from "@/components/Marks";
import { PageIntro } from "@/components/PageIntro";
import { Related } from "@/components/Related";
import { logistics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Emaan Logistics",
  description:
    "Emaan Logistics handles import, export, freight forwarding, and documentation support. This page is the group’s introduction; the public brand site is emaanlogistics.com.",
};

export default function LogisticsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Emaan Logistics"
        title="Cargo, paperwork, and the space between them."
        lede="Emaan Logistics handles import, export, and freight forwarding. The work is the movement of goods and the documents that let that movement finish cleanly."
      />

      <section className="section">
        <div className="wrap side-figure">
          <figure className="figure-panel figure-sticky">
            <RouteMark />
            <figcaption>
              A diagram of handoffs — origin, forwarder, destination, file. It is not a lane map and
              not a promise of timing.
            </figcaption>
          </figure>
          <div>
            <ol className="steps">
              <li>
                <h2>Import</h2>
                <p>
                  Bringing goods in means more than a booking. It means the steps a shipment needs
                  at the border and beyond, arranged so the receiver is not left reconstructing the
                  file after the cargo has arrived. We coordinate those steps and say, plainly, what
                  still depends on the shipper, the carrier, or an authority.
                </p>
              </li>
              <li>
                <h2>Export</h2>
                <p>
                  Sending goods out deserves the same attention. What leaves should match what was
                  declared. Packing, papers, and the handoff to a carrier are treated as one piece
                  of work, so an export does not stall because a document was assumed to be someone
                  else’s problem.
                </p>
              </li>
              <li>
                <h2>Freight forwarding</h2>
                <p>
                  Forwarding is coordination: mode, handoff, and a clear account of where a
                  consignment stands. Emaan Logistics arranges carriage and keeps the parties to a
                  shipment pointed at the same facts. A specific lane is discussed against the
                  actual cargo, not against a slogan on a website.
                </p>
              </li>
              <li>
                <h2>Documentation support</h2>
                <p>
                  Commercial invoices, packing lists, and the accompanying papers a shipment depends
                  on are part of the job. Documentation is not an afterthought filed at the dock. If
                  a paper is missing, the useful response is to name it early, not to discover it
                  when the goods are already waiting.
                </p>
              </li>
            </ol>
            <div className="callout">
              <strong>This page is the group’s introduction.</strong>
              <p>
                The public brand site is{" "}
                <ExternalLink href={logistics.url}>{logistics.domain}</ExternalLink>. For a live
                enquiry, write to{" "}
                <a href={`mailto:${logistics.email}`}>{logistics.email}</a> or{" "}
                <Link href="/contact?business=logistics">prepare a logistics note</Link>. We do not
                publish transit-time guarantees here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Related
        links={[
          { href: "/about", label: "The group", note: "Why logistics sits beside software and development." },
          { href: "/contact?business=logistics", label: "Contact logistics", note: logistics.email },
        ]}
      />
    </>
  );
}
