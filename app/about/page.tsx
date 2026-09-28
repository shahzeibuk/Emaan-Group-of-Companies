import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Related } from "@/components/Related";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Emaan Group of Companies is, what the name means in the work, and the three lines of business: logistics, software, and property development.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About the group"
        title="A group named for the standard it intends to keep."
        lede="Emaan Group of Companies is a business group with three lines of work: logistics, software, and property development. The companies share a name and a way of being accountable. They are not one department with one inbox."
      />

      <section className="section" aria-labelledby="name-title">
        <div className="wrap split">
          <h2 id="name-title">What the name is doing here</h2>
          <div className="stack">
            <p>
              Emaan is a word for faith, trust, and integrity. On this website it is a business
              claim, and a narrow one. Trust is earned when delivery matches the description: a
              shipment whose papers are complete, a system a team can run without a translator in
              the room, a residential plan that does not borrow numbers it does not have.
            </p>
            <p>
              Integrity, here, is the habit of not saying more than can be stood behind. We do not
              use the name as a sermon, and we do not use it as decoration. If a page cannot
              confirm a price, a date, a measurement, or a registration, the page says so.
            </p>
            <p>
              The public home of the group is emaangroupofcompanies.com. Sister companies keep
              their own domains, because a client should be able to find the desk they actually
              need.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="lines-title">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Lines of business</p>
            <h2 id="lines-title">Logistics, software, and property.</h2>
          </header>
          <ol className="lines">
            <li>
              <p className="line-num">01</p>
              <div>
                <h3>Emaan Logistics</h3>
                <p>
                  Import, export, freight forwarding, and the documentation that lets a shipment
                  finish cleanly. The work is coordination and care with papers, not a promise of a
                  transit time printed before the cargo is known.
                </p>
                <p className="meta-links">
                  <Link href="/logistics">Read about logistics</Link>
                </p>
              </div>
            </li>
            <li>
              <p className="line-num">02</p>
              <div>
                <h3>Emaan Soft Tech</h3>
                <p>
                  A software house. Custom software, websites, and business systems for clients who
                  need the tool to fit the operation. The test is whether the people who live in
                  the system can run it.
                </p>
                <p className="meta-links">
                  <Link href="/soft-tech">Read about Soft Tech</Link>
                </p>
              </div>
            </li>
            <li>
              <p className="line-num">03</p>
              <div>
                <h3>Property development</h3>
                <p>
                  The group is also a builder and developer. Two communities are named: Emaan
                  Enclave, planned as a quieter inward neighbourhood, and Emaan Housing, planned
                  around practical family homes and daily access. Both are described here by
                  character. Availability is shared on request.
                </p>
                <p className="meta-links">
                  <Link href="/enclave">Emaan Enclave</Link>
                  <Link href="/housing">Emaan Housing</Link>
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="read-title">
        <div className="wrap split">
          <h2 id="read-title">How to read this site</h2>
          <div className="stack">
            <p>
              Company pages say what kind of work each desk does. Enclave and Housing say what kind
              of place is intended. They are not inventories, offers, or allotment letters.
            </p>
            <p>
              When you are ready to ask about a shipment, a system, or whether a home is available,
              use the contact page and name the business. The form prepares a note in your browser.
              It reaches us when you send the email.
            </p>
            <p className="meta-links">
              <Link href="/contact">Write to a desk</Link>
            </p>
          </div>
        </div>
      </section>

      <Related
        links={[
          { href: "/logistics", label: "Emaan Logistics", note: "Import, export, freight, documents." },
          { href: "/soft-tech", label: "Emaan Soft Tech", note: "Custom software and business systems." },
          { href: "/enclave", label: "Emaan Enclave", note: "A neighbourhood planned to turn inward." },
          { href: "/housing", label: "Emaan Housing", note: "Homes planned for ordinary days." },
        ]}
      />
    </>
  );
}
