import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services from Emaan Group of Companies: housing, real estate marketing, import and export, software, and agriculture.",
};

const services = [
  {
    name: "Housing",
    company: "Emaan Housing",
    image: "/pages/housing.jpg",
    alt: "Aerial view of Emaan Housing plots with houses under construction.",
    text: "We plan and present residential communities: Emaan Homes, Emaan Residency and Resorts, Emaan Greens, and Emaan Icon. Clients receive a clear description of the property and a direct answer on availability.",
  },
  {
    name: "Real estate marketing",
    company: "Emysh Marketing",
    image: "/pages/marketing.jpg",
    alt: "A model house held in front of a residential street.",
    text: "Marketing and consultancy for property. We prepare the story of a site for buyers and investors, and we keep that story tied to the property itself.",
  },
  {
    name: "Import and export",
    company: "Emaan Import and Exports",
    image: "/pages/trade.jpg",
    alt: "Port activity at Dar es Salaam, Tanzania.",
    text: "Trade in exotic fruits, bed sheets, mineral ores, and industrial goods. We handle the commercial coordination and the documents a shipment needs to clear.",
  },
  {
    name: "Software",
    company: "Emaan Softech",
    image: "/pages/software.jpg",
    alt: "A laptop on a desk in a software studio.",
    text: "Custom software, websites, and business systems built for the people who will use them. The work is scoped, built, and handed over so the client’s team can run it.",
  },
  {
    name: "Agriculture",
    company: "Emaan Agriculture",
    image: "/pages/agriculture.jpg",
    alt: "A green cultivated field under a bright sky.",
    text: "Cultivation, fresh produce, and farm supply. We supply what the season and the agreement actually cover, and we say so before the order is placed.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Five services, delivered by the companies of the group."
        lede="Emaan Group of Companies serves clients through housing, real estate marketing, international trade, software, and agriculture. You work with the company responsible for that service, under one group standard."
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

      <section className="section" aria-labelledby="services-title">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow">What we do</p>
            <h2 id="services-title">Choose the service. We name the company.</h2>
          </header>
          <ul className="company-grid">
            {services.map((service) => (
              <li key={service.name}>
                <figure>
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
                </figure>
                <div>
                  <h3>{service.name}</h3>
                  <p className="service-company">{service.company}</p>
                  <p>{service.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="meta-links service-cta">
            <Link href="/contact">Request a service</Link>
          </p>
        </div>
      </section>
    </>
  );
}
