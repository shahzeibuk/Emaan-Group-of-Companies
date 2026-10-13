import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { group, logistics, softTech } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Emaan Group of Companies in Karachi. Write about housing, marketing, trade, software, or agriculture.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Write to Emaan Group of Companies."
        lede="Tell us which company you need and what you want done. The form prepares an email on your device. We receive it when you send that email."
      />
      <figure className="page-hero">
        <Image
          src="/pages/office.jpg"
          alt="A bright professional office with a long work table."
          fill
          priority
          sizes="100vw"
        />
      </figure>
      <section className="section">
        <div className="wrap contact-grid">
          <Suspense fallback={<p className="fine">The form is loading.</p>}>
            <ContactForm />
          </Suspense>
          <aside>
            <h2 className="desks-title">Our office</h2>
            <p>
              A-317, Saadabad co-operative housing society, Jinnah Avenue, Karachi.
            </p>
            <p>
              <a href="tel:+923062787898">0306-2787898</a>
            </p>
            <ul className="desks">
              <li>
                <h3>The group</h3>
                <p>Housing, real estate marketing, agriculture, and general enquiries.</p>
                <p>
                  <a href={`mailto:${group.email}`}>{group.email}</a>
                </p>
              </li>
              <li>
                <h3>Emaan Import and Exports</h3>
                <p>Trade, shipments, and documentation.</p>
                <p>
                  <a href={`mailto:${logistics.email}`}>{logistics.email}</a>
                </p>
              </li>
              <li>
                <h3>Emaan Softech</h3>
                <p>Custom software, websites, and business systems.</p>
                <p>
                  <a href={`mailto:${softTech.email}`}>{softTech.email}</a>
                </p>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
