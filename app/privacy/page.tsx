import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { group, logistics, softTech } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Privacy policy for the Emaan Group of Companies marketing site: what the contact form collects, no sale of personal data, and how to ask a privacy question.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Privacy policy"
        lede="What this marketing site does with personal information, what it deliberately does not collect, and how to reach us about either."
      />
      <section className="section">
        <article className="wrap legal">
          <p className="updated">Last updated 28 September 2026.</p>
          <p>
            This policy describes how the marketing website of Emaan Group of Companies handles
            personal information. It applies to this site. It does not describe every system that{" "}
            {logistics.name} or {softTech.name} may operate for clients, shipments, or software
            projects. If one of those engagements collects personal data, that collection should be
            explained in the terms of that work.
          </p>

          <h2>Who is responsible</h2>
          <p>
            The site is operated by Emaan Group of Companies. A postal address and any registration
            number will be published here when they are confirmed. They are omitted on purpose
            rather than invented. For privacy questions, write to{" "}
            <a href={`mailto:${group.email}`}>{group.email}</a>.
          </p>

          <h2>What the contact form collects</h2>
          <p>If you use the contact form, your browser holds what you type:</p>
          <ul>
            <li>your name;</li>
            <li>your email address;</li>
            <li>a phone number, if you choose to give one;</li>
            <li>a company name, if you choose to give one;</li>
            <li>which business you are asking about;</li>
            <li>your message.</li>
          </ul>
          <p>
            The form checks those fields on your device. It does not send them to a server run by
            the group, and it does not write them to a database. If you choose “Open email”, your
            device opens a mail draft addressed to the relevant desk, with those fields placed in
            the message. From that point the information is handled by your email provider and, if
            you send the message, by the inbox you addressed.
          </p>
          <p>
            If you close the page without sending the email, the group does not receive the form.
            There is no partial submission sitting on a server, because there was no submission.
          </p>

          <h2>Email you send directly</h2>
          <p>You may also write to us without using the form:</p>
          <ul>
            <li>
              <a href={`mailto:${group.email}`}>{group.email}</a> — the group, including Enclave
              and Housing
            </li>
            <li>
              <a href={`mailto:${logistics.email}`}>{logistics.email}</a> — Emaan Logistics
            </li>
            <li>
              <a href={`mailto:${softTech.email}`}>{softTech.email}</a> — Emaan Soft Tech
            </li>
          </ul>
          <p>
            Those messages contain whatever you choose to include. Please do not send sensitive
            identifiers or account passwords in a first enquiry. If a later step truly needs a
            document, ask which channel to use.
          </p>

          <h2>How email is used</h2>
          <p>
            When an email arrives at one of the addresses above, people at the relevant desk read
            it in order to reply and to do the work you asked about — a logistics enquiry, a
            software conversation, or a question about Emaan Enclave or Emaan Housing. The details
            you send are used for that correspondence and for ordinary record-keeping of the
            enquiry. They are not used to build a marketing list that is sold to anyone else.
          </p>
          <p>
            We may forward a message inside the group if it was sent to the wrong desk — for
            example, a housing question that arrived at the logistics address — so that the person
            who can answer it sees it. We do not forward enquiries casually outside the group.
          </p>

          <h2>Analytics and cookies</h2>
          <p>
            This frontend does not run analytics, advertising trackers, or third-party marketing
            pixels. If analytics are added later, this policy will be updated first, and it will
            say what is collected and why.
          </p>
          <p>
            The site does not ask you to create an account, and it does not set a login cookie.
            The host that serves the site may use a strictly necessary technical measure to
            deliver the pages. We do not use cookies on this site to profile visitors or to follow
            them across other websites.
          </p>

          <h2>No sale of personal data</h2>
          <p>
            We do not sell personal data. We do not share contact-form entries with data brokers.
            The form entries never arrive as a site submission, so there is nothing of that kind
            to sell. Email you choose to send is business correspondence, not a product.
          </p>

          <h2>Retention</h2>
          <p>
            Because the on-site form does not store submissions, there is no form database to
            retain or to purge. What you typed exists in your browser until you leave or reset the
            page, and in your email application if you opened a draft.
          </p>
          <p>
            Messages that do arrive by email are kept for as long as the conversation, and any
            work that follows from it, reasonably requires — and for a further period so that the
            same question can be understood if you write again. They are not kept forever out of
            habit. If you ask us to delete a message, and we are not obliged to retain it (for
            example because of an unresolved dispute, or a legal duty we have been advised applies),
            we will delete it or reduce it so that it no longer identifies you.
          </p>

          <h2>Children</h2>
          <p>
            The site is a corporate marketing site. It is not directed at children, and we do not
            knowingly collect personal information from them. If you believe a child has written
            to one of the addresses above, tell us and we will delete that message unless we are
            required to keep it.
          </p>

          <h2>Other sites</h2>
          <p>
            Links to {logistics.domain}, {softTech.domain}, and any other external site leave this
            policy behind. Read the privacy notice on the site you visit. We are not responsible
            for the privacy practices of a site we do not operate.
          </p>

          <h2>Security</h2>
          <p>
            Email is a practical way to start a conversation. It is not a sealed vault. Use an
            address and a device you trust. People who read these inboxes are expected to treat
            enquiries as business correspondence, not as material to pass around.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If the site begins to collect, store, or measure personal information differently —
            including if analytics are added — we will update this page and change the date above.
            The version you are reading describes a static marketing site whose contact form stays
            on your device until you send an email yourself.
          </p>

          <h2>Contact</h2>
          <p>
            Privacy questions: <a href={`mailto:${group.email}`}>{group.email}</a>.
          </p>
        </article>
      </section>
    </>
  );
}
