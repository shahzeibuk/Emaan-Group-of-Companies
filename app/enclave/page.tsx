import type { Metadata } from "next";
import Link from "next/link";
import { EnclaveMark } from "@/components/Marks";
import { PageIntro } from "@/components/PageIntro";
import { Related } from "@/components/Related";
import { group } from "@/lib/site";

export const metadata: Metadata = {
  title: "Emaan Enclave",
  description:
    "Emaan Enclave is a planned residential community under Emaan Group’s development arm: an enclosed neighbourhood arranged around shared green. Availability is shared on request.",
};

export default function EnclavePage() {
  return (
    <>
      <PageIntro
        eyebrow="Development · Emaan Enclave"
        title="A neighbourhood planned to turn inward."
        lede="Emaan Enclave is a planned residential community under the group’s development arm. The idea is an enclosed neighbourhood: homes arranged with privacy in mind, shared green rather than leftover ground, and streets that belong to the people who live on them."
      />

      <section className="figure-band" aria-label="Diagram of Emaan Enclave">
        <div className="wrap">
          <figure className="figure-panel">
            <EnclaveMark />
            <figcaption>
              A diagram of intent — plots gathered around a court, with a way in. It is not a
              surveyed plan, and it is not drawn to scale.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2>The character of the place</h2>
          <div className="stack">
            <p>
              An enclave, in the plain sense, is a place with a clear edge. The plan for Emaan
              Enclave follows that meaning. It is conceived as a residential community with a
              composed layout: homes gathered around shared open space, rather than a strip of
              buildings along a through-road.
            </p>
            <p>
              The character we are aiming for is quiet, legible, and cared for. A resident should
              be able to tell where the neighbourhood begins, where the shared ground is, and how
              their home sits in relation to both. Privacy is part of the plan, not an accident of
              a high wall added later.
            </p>
            <p>
              Emaan Housing, the group’s other named community, is oriented differently — toward
              practical family homes and everyday access. They are both residential. They are not
              the same plan.{" "}
              <Link href="/housing">Read about Emaan Housing</Link>.
            </p>
            <div className="callout">
              <strong>Detailed availability is shared on request.</strong>
              <p>
                Write via the <Link href="/contact?business=enclave">contact page</Link> and choose
                Emaan Enclave, or email{" "}
                <a href={`mailto:${group.email}`}>{group.email}</a> and name the development. Do
                not treat this page as an offer for sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="limits-title">
        <div className="wrap split">
          <h2 id="limits-title">What this page will not pretend</h2>
          <div>
            <p>
              Facts that belong in issued project documents are not invented here to make a
              marketing page feel complete.
            </p>
            <table className="spec">
              <caption>Held back until it can be confirmed</caption>
              <tbody>
                <tr>
                  <th scope="row">Prices</th>
                  <td>Not published. Ask, and we will share what is actually available to say.</td>
                </tr>
                <tr>
                  <th scope="row">Sizes and areas</th>
                  <td>Not stated. A diagram of intent is not a measurement.</td>
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
          { href: "/housing", label: "Emaan Housing", note: "The other community: homes for ordinary days." },
          { href: "/contact?business=enclave", label: "Ask about Enclave", note: group.email },
        ]}
      />
    </>
  );
}
