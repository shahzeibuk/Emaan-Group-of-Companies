import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Who we are",
  description:
    "Emaan Group of Companies is a Karachi-based group in housing, real estate marketing, import and export, software, and agriculture.",
};

const companies = [
  {
    name: "Emaan Housing",
    image: "/pages/housing.jpg",
    alt: "A modern house with a landscaped front garden.",
    text: "Residential communities and homes, including Emaan Homes, Emaan Residency and Resorts, Emaan Greens, and Emaan Icon. We describe each property in plain terms and confirm availability when you enquire.",
  },
  {
    name: "Emysh Marketing",
    image: "/pages/marketing.jpg",
    alt: "A model house held in front of a residential street.",
    text: "Real estate marketing and consultancy. We present a property to the people who may live in it or invest in it, and we advise from the facts of the site.",
  },
  {
    name: "Emaan Import and Exports",
    image: "/pages/trade.jpg",
    alt: "Port activity at Dar es Salaam, Tanzania.",
    text: "International trade in exotic fruits, bed sheets, mineral ores, and industrial goods. We coordinate the shipment and the documents so the goods and the paperwork arrive together.",
  },
  {
    name: "Emaan Softech",
    image: "/pages/software.jpg",
    alt: "A laptop on a desk in a software studio.",
    text: "Custom software, websites, and business systems. A system is ready when the team that uses it can run it without a specialist sitting beside them.",
  },
  {
    name: "Emaan Agriculture",
    image: "/pages/agriculture.jpg",
    alt: "A green cultivated field under a bright sky.",
    text: "Cultivation, fresh produce, and farm supply. We sell the crop and the supply around it as they will actually be delivered.",
  },
] as const;

export default function WhoWeArePage() {
  return (
    <>
      <PageIntro
        eyebrow="Who we are"
        title="A professional group with five companies and one standard."
        lede="Emaan Group of Companies is based in Karachi and works with clients in Pakistan, the United States, Tanzania, Saudi Arabia, the UAE, and Oman. Each company has its own work. The group holds every one of them to the same standard: describe the work clearly, and deliver what was described."
      />

      <figure className="page-hero">
        <Image
          src="/pages/headquarters.jpg"
          alt="Contemporary office towers in a city business district."
          fill
          priority
          sizes="100vw"
        />
      </figure>

      <section className="section" aria-labelledby="name-title">
        <div className="wrap split">
          <div>
            <h2 id="name-title">The name is the standard</h2>
            <div className="stack">
              <p>
                Emaan means faith, trust, and integrity. We treat that as an operating rule. A
                client should be able to compare the promise with the result: a home, a marketing
                brief, a shipment, a system, or a harvest.
              </p>
              <p>
                Our office is at A-317, Saadabad co-operative housing society, Jinnah Avenue,
                Karachi. Enquiries can be sent through the contact page or by phone on
                0306-2787898.
              </p>
              <p className="meta-links">
                <Link href="/contact">Speak with the group</Link>
              </p>
            </div>
          </div>
          <figure className="page-photo">
            <Image
              src="/pages/meeting.jpg"
              alt="Professionals in a meeting around a conference table."
              fill
              sizes="(max-width: 899px) 100vw, 50vw"
            />
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="companies-title">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">Our companies</p>
            <h2 id="companies-title">The work of the group.</h2>
          </header>
          <ul className="company-grid">
            {companies.map((company) => (
              <li key={company.name}>
                <figure>
                  <Image src={company.image} alt={company.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
                </figure>
                <div>
                  <h3>{company.name}</h3>
                  <p>{company.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
