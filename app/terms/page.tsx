import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { group, logistics, softTech } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description:
    "Terms of use for the Emaan Group of Companies website: acceptable use, intellectual property, no professional advice, and limitation of liability.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Terms and conditions"
        lede="How this website may be used, what it does not promise, and how to ask a question about these terms."
      />
      <section className="section">
        <article className="wrap legal">
          <p className="updated">Last updated 28 September 2026.</p>
          <p>
            These terms govern use of the website operated by Emaan Group of Companies and intended
            for the domain {group.domain} (the “site”). By using the site you agree to these terms.
            If you do not agree, please leave the site.
          </p>

          <h2>The operator</h2>
          <p>
            The site is operated by Emaan Group of Companies. Formal registered details — including
            any company registration number, registered office, and the legal form of the operator —
            will be published on this page when they are confirmed. They are not stated here,
            because this page will not invent them.
          </p>

          <h2>Using the site</h2>
          <p>
            You may use the site to read about the group, its sister companies, and the named
            developments, and to prepare a message to the relevant desk. You agree not to misuse
            it. In particular, you agree not to:
          </p>
          <ul>
            <li>attempt to disrupt, overload, or gain unauthorised access to the site or its host;</li>
            <li>scrape or copy the site in a way that impairs access for other people;</li>
            <li>use the site to send unlawful, misleading, or abusive communications;</li>
            <li>present the site, or any part of it, as your own commercial property.</li>
          </ul>
          <p>
            The site is a marketing presence. It is not a portal for tracking shipments, signing
            contracts, reserving homes, or paying for services. Nothing you do on the site, by
            itself, creates a contract for logistics, software, or property.
          </p>

          <h2>Information on this site</h2>
          <p>
            We aim to describe the group accurately and to avoid specifics we cannot stand behind.
            Pages for Emaan Enclave and Emaan Housing describe character and intent. They are not
            offers for sale, not allotment letters, and not a substitute for documents issued for a
            particular plot or home.
          </p>
          <p>
            Availability, pricing, measurements, and timelines — where they exist — are shared on
            request and may change. Nothing on the site is a warranty that a particular good,
            system, or home is available on particular terms. If a statement on the site conflicts
            with a document issued for a specific engagement or property, the issued document
            governs that engagement.
          </p>

          <h2>Sister companies and other websites</h2>
          <p>
            The site refers to {logistics.name} ({logistics.domain}) and {softTech.name} (
            {softTech.domain}). Those are separate public sites. When you leave this site, the
            destination’s own terms apply. A link is not an endorsement of every page on that
            destination, and it is not a promise that the destination will remain unchanged.
          </p>
          <p>
            Emaan Logistics and Emaan Soft Tech are named as sister companies of the group. This
            page does not, by itself, describe the shareholding, the contracting entity, or the
            limits of liability between them. Those matters belong in the agreement for a
            particular piece of work, once the correct entity is confirmed.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Unless a notice says otherwise, the text, layout, and original illustrations on this
            site are owned by Emaan Group of Companies or used with permission. You may not copy
            them for commercial use, republish them as your own, or remove notices, without prior
            written consent from the operator.
          </p>
          <p>
            You may share links to the site, and you may quote a short passage with attribution
            for ordinary commentary, news, or private study. That permission does not extend to
            reproducing pages, diagrams, or the visual design as a template for another business.
          </p>
          <p>
            The names Emaan, Emaan Group of Companies, Emaan Logistics, Emaan Soft Tech, Emaan
            Enclave, and Emaan Housing are used to identify the group and its work. Use of a name
            on this site does not grant you a licence to use it in your own trade, domain, or
            advertising.
          </p>

          <h2>No professional advice</h2>
          <p>
            Content on the site is general information. It is not legal, financial, tax,
            engineering, architectural, logistics, or software-implementation advice, and it is not
            a recommendation to rely on for a specific decision. Freight arrangements, software
            scopes, and property decisions depend on facts this site does not collect.
          </p>
          <p>
            Obtain advice suited to your situation before you act. A diagram on a development page
            is a picture of intent. It is not a survey, a structural drawing, or a planning
            approval.
          </p>

          <h2>The contact form</h2>
          <p>
            The contact form checks entries in your browser and can open a draft in your email
            application. The site does not transmit the form to a server operated by the group, and
            it does not store what you type. A message reaches the group only if you send it by
            email. The privacy policy explains that in more detail. You are responsible for the
            truth of what you send, and for not including information you are not entitled to
            share.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by applicable law, the site is provided as a general
            information service. Emaan Group of Companies, and the people acting for it in
            publishing the site, are not liable for loss or damage arising from your use of the
            site, your inability to use it, or your reliance on general marketing text — except
            where liability cannot lawfully be excluded.
          </p>
          <p>
            Nothing in these terms excludes or limits liability for death or personal injury caused
            by negligence, or for fraud, or for any other liability that applicable law does not
            allow to be excluded. We do not exclude a liability that a court of competent
            jurisdiction holds cannot be excluded.
          </p>
          <p>
            Because a formal governing-law clause depends on the operator’s confirmed legal seat,
            this page does not name a statute, a court, or a jurisdiction. That wording should be
            confirmed with counsel and published when the operator’s registered details are
            confirmed. Until then, these terms are a plain-language account of how the site is
            offered, not a substitute for advice on which law applies to you.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms as the site changes. The date at the top will change when we
            do. Continued use of the site after an update is acceptance of the revised terms for
            use from that point forward. A change does not rewrite correspondence you have already
            sent.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${group.email}`}>{group.email}</a>.
          </p>
        </article>
      </section>
    </>
  );
}
