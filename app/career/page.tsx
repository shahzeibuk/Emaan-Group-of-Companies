import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Careers at Emaan Group of Companies in Karachi, across housing, marketing, trade, software, and agriculture.",
};

const areas = [
  {
    name: "Housing and marketing",
    text: "Site, sales, and client roles for Emaan Housing and Emysh Marketing. The work is explaining a property accurately and following the enquiry through.",
  },
  {
    name: "Trade",
    text: "Coordination roles in import and export: suppliers, documents, and the shipment itself. Care with papers matters as much as care with the goods.",
  },
  {
    name: "Software",
    text: "Design, engineering, and delivery roles at Emaan Softech. We hire people who can build a system and leave it usable by the client’s team.",
  },
  {
    name: "Agriculture",
    text: "Field, supply, and commercial roles for cultivation and fresh produce. The standard is the same: deliver what was described.",
  },
] as const;

export default function CareerPage() {
  return (
    <>
      <PageIntro
        eyebrow="Career"
        title="Build a career with Emaan Group of Companies."
        lede="We hire in Karachi and for work that reaches clients in Pakistan, the United States, Tanzania, Saudi Arabia, the UAE, and Oman. Openings sit inside the companies of the group, not in a separate brand."
      />

      <figure className="page-hero">
        <Image
          src="/careers/workplace.jpg"
          alt="People working together in a bright office."
          fill
          priority
          sizes="100vw"
        />
      </figure>

      <section className="section" aria-labelledby="areas-title">
        <div className="wrap split">
          <div>
            <h2 id="areas-title">Where people work</h2>
            <div className="stack">
              {areas.map((area) => (
                <div key={area.name}>
                  <h3>{area.name}</h3>
                  <p>{area.text}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="page-photo">
            <Image
              src="/pages/meeting.jpg"
              alt="A professional team in discussion around a table."
              fill
              sizes="(max-width: 899px) 100vw, 50vw"
            />
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="apply-title">
        <div className="wrap split">
          <h2 id="apply-title">How to apply</h2>
          <div className="stack">
            <p>
              Send a short note with the company you want to join and the work you do. Use the
              contact page and choose Emaan Group of Companies, or email
              info@emaangroupofcompanies.com. You can also call 0306-2787898.
            </p>
            <p>
              Our office is at A-317, Saadabad co-operative housing society, Jinnah Avenue,
              Karachi.
            </p>
            <p className="meta-links">
              <Link href="/contact">Apply now</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
