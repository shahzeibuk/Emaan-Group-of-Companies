import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { group, logistics, softTech } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Emaan Group of Companies, Emaan Logistics, or Emaan Soft Tech. The form prepares an email on your device; it does not store the message.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Write to the right desk."
        lede="Tell us who you are and which business you are asking about. The form checks the note in your browser, then opens an email so you can send it yourself."
      />
      <section className="section">
        <div className="wrap contact-grid">
          <Suspense fallback={<p className="fine">The form is loading.</p>}>
            <ContactForm />
          </Suspense>
          <aside>
            <h2 className="desks-title">Desks</h2>
            <ul className="desks">
              <li>
                <h3>The group</h3>
                <p>General questions, Enclave, Housing, or if you are not sure which company.</p>
                <p>
                  <a href={`mailto:${group.email}`}>{group.email}</a>
                </p>
              </li>
              <li>
                <h3>{logistics.name}</h3>
                <p>Import, export, freight forwarding, and documentation.</p>
                <p>
                  <a href={`mailto:${logistics.email}`}>{logistics.email}</a>
                </p>
              </li>
              <li>
                <h3>{softTech.name}</h3>
                <p>Custom software, websites, and business systems.</p>
                <p>
                  <a href={`mailto:${softTech.email}`}>{softTech.email}</a>
                </p>
              </li>
            </ul>
            <p className="fine desk-note">
              Enclave and Housing enquiries use the group address. Choose the matching business in
              the form so the subject line names the development.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
