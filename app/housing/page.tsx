import type { Metadata } from "next";
import Link from "next/link";
import { HousingMark } from "@/components/Marks";
import { PageIntro } from "@/components/PageIntro";
import { Related } from "@/components/Related";
import { group } from "@/lib/site";

export const metadata: Metadata = {
  title: "Emaan Housing",
  description:
    "Emaan Housing is a planned residential community under Emaan Group’s development arm, oriented toward practical family homes and straightforward daily access. Availability is shared on request.",
};

export default function HousingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Development · Emaan Housing"
        title="Homes planned for ordinary days."
        lede="Emaan Housing is a planned residential community under the group’s development arm. Where Emaan Enclave is conceived as a quieter, inward neighbourhood, Housing is oriented toward practical family homes and straightforward access."
      />

      <section className="figure-band figure-band-forest" aria-label="Diagram of Emaan Housing">
        <div className="wrap">
          <figure className="figure-panel">
            <HousingMark tone="paper" />
            <figcaption>
              A diagram of intent — homes along a street, with room to come and go. It is not a
              surveyed elevation, and it is not drawn to scale.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2>A community you can read</h2>
          <div className="stack">
            <p>
              The aim is clarity. A resident should be able to understand how the community is laid
              out: where one arrives, how a home relates to a street, and where everyday movement
              happens. Emaan Housing is organised around daily coming and going — school, work,
              errands — rather than around a single enclosed court.
            </p>
            <p>
              That is a different emphasis from{" "}
              <Link href="/enclave">Emaan Enclave</Link>, which turns inward toward shared green
              and a clear edge. Both are planned residential communities under the same development
              arm. Choosing between them, or asking whether either has something available, is a
              conversation — not a conclusion this page can make for you.
            </p>
            <p>
              As with Enclave, this page describes character. It does not list homes, quote a rate,
              or imply that a particular plot is waiting. If you are enquiring for a family, say
              so, and say what you need the place to make easy. The answer will be as specific as
              the facts allow.
            </p>
            <div className="callout">
              <strong>Detailed availability is shared on request.</strong>
              <p>
                Use the <Link href="/contact?business=housing">contact page</Link> and choose Emaan
                Housing, or write to <a href={`mailto:${group.email}`}>{group.email}</a> and name
                the development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="housing-limits">
        <div className="wrap split">
          <h2 id="housing-limits">The same limit, stated again</h2>
          <div>
            <p>
              Both developments follow one rule: this website does not invent particulars to sound
              complete. The rows below are the same standard applied to Housing.
            </p>
            <table className="spec">
              <caption>Held back until it can be confirmed</caption>
              <tbody>
                <tr>
                  <th scope="row">Prices</th>
                  <td>Not published. Availability and terms are discussed on request.</td>
                </tr>
                <tr>
                  <th scope="row">Sizes and areas</th>
                  <td>Not stated. The drawing is a character study, not a floor plan.</td>
                </tr>
                <tr>
                  <th scope="row">Completion</th>
                  <td>No date is given on this site.</td>
                </tr>
                <tr>
                  <th scope="row">Registration</th>
                  <td>No registration or approval number is claimed here.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Related
        links={[
          { href: "/enclave", label: "Emaan Enclave", note: "The inward neighbourhood." },
          { href: "/contact?business=housing", label: "Ask about Housing", note: group.email },
        ]}
      />
    </>
  );
}
