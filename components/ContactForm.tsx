"use client";

import { useId, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { businesses, businessByValue } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  business: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  company: "",
  business: "",
  message: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const phone = fields.phone.trim();
  const company = fields.company.trim();
  const message = fields.message.trim();

  if (name.length < 2) errors.name = "Enter your name.";
  else if (name.length > 80) errors.name = "Use a shorter name.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
    errors.email = "Enter a valid email address.";
  }

  if (phone) {
    if (/[^0-9+\-().\s]/.test(phone)) {
      errors.phone = "Use digits, spaces, and + ( ) - . only.";
    } else {
      const digits = phone.replace(/\D/g, "").length;
      if (digits < 7 || digits > 15) errors.phone = "Check the phone number.";
    }
  }

  if (company.length > 120) errors.company = "Use a shorter company name.";

  if (!businessByValue(fields.business)) {
    errors.business = "Choose which business you are asking about.";
  }

  if (message.length < 20) errors.message = "Write at least a sentence or two.";
  else if (message.length > 4000) errors.message = "Shorten the message and send the rest by email.";

  return errors;
}

function mailtoHref(fields: Fields) {
  const business = businessByValue(fields.business);
  const to = business?.email ?? "";
  const label = business?.label ?? fields.business;
  const lines = [
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    fields.phone.trim() ? `Phone: ${fields.phone.trim()}` : null,
    fields.company.trim() ? `Company: ${fields.company.trim()}` : null,
    `Business: ${label}`,
    "",
    fields.message.trim(),
  ].filter((line): line is string => line !== null);

  const href = `mailto:${to}?subject=${encodeURIComponent(`Enquiry: ${label}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
  return { href, to, label };
}

function ContactFormFields({ preset }: { preset: string }) {
  const baseId = useId();
  const [fields, setFields] = useState<Fields>({ ...empty, business: preset });
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState<Fields | null>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = (Object.keys(next) as (keyof Fields)[]).find((key) => next[key]);
      if (first) {
        document.getElementById(`${baseId}-${first}`)?.focus();
      }
      return;
    }
    setReady(fields);
  }

  if (ready) {
    const mail = mailtoHref(ready);
    return (
      <div className="thanks" role="status">
        <p className="eyebrow">Prepared, not stored</p>
        <h2>Your note is ready to send.</h2>
        <p>
          This website does not keep what you typed and does not deliver it for you. Open your email
          to send it to {mail.to}. If the mail app does not open, copy the note below.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={mail.href}>
            Open email to {mail.to}
          </a>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => {
              setReady(null);
              setFields(empty);
              setErrors({});
            }}
          >
            Write another note
          </button>
        </div>
        <dl className="preview">
          <div>
            <dt>To</dt>
            <dd>{mail.to}</dd>
          </div>
          <div>
            <dt>Business</dt>
            <dd>{mail.label}</dd>
          </div>
          <div>
            <dt>Name</dt>
            <dd>{ready.name.trim()}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{ready.email.trim()}</dd>
          </div>
          {ready.phone.trim() ? (
            <div>
              <dt>Phone</dt>
              <dd>{ready.phone.trim()}</dd>
            </div>
          ) : null}
          {ready.company.trim() ? (
            <div>
              <dt>Company</dt>
              <dd>{ready.company.trim()}</dd>
            </div>
          ) : null}
          <div>
            <dt>Message</dt>
            <dd>{ready.message.trim()}</dd>
          </div>
        </dl>
      </div>
    );
  }

  const errorList = (Object.keys(errors) as (keyof Fields)[]).filter((key) => errors[key]);

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <p className="fine" id={`${baseId}-hint`}>
        Fields marked * are required. The form checks your note on this device. Nothing is stored
        here.
      </p>
      {errorList.length > 0 ? (
        <div className="form-alert" role="alert">
          <p>Please correct the following:</p>
          <ul>
            {errorList.map((key) => (
              <li key={key}>{errors[key]}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="form-row">
        <div className="field">
          <label htmlFor={`${baseId}-name`}>
            Name <span className="req" aria-hidden="true">*</span>
            <span className="visually-hidden"> required</span>
          </label>
          <input
            id={`${baseId}-name`}
            name="name"
            autoComplete="name"
            value={fields.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
            onChange={(event) => update("name", event.target.value)}
          />
          {errors.name ? (
            <p className="field-error" id={`${baseId}-name-error`}>
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor={`${baseId}-email`}>
            Email <span className="req" aria-hidden="true">*</span>
            <span className="visually-hidden"> required</span>
          </label>
          <input
            id={`${baseId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
            onChange={(event) => update("email", event.target.value)}
          />
          {errors.email ? (
            <p className="field-error" id={`${baseId}-email-error`}>
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor={`${baseId}-phone`}>Phone (optional)</label>
          <input
            id={`${baseId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? `${baseId}-phone-error` : undefined}
            onChange={(event) => update("phone", event.target.value)}
          />
          {errors.phone ? (
            <p className="field-error" id={`${baseId}-phone-error`}>
              {errors.phone}
            </p>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor={`${baseId}-company`}>Company (optional)</label>
          <input
            id={`${baseId}-company`}
            name="company"
            autoComplete="organization"
            value={fields.company}
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={errors.company ? `${baseId}-company-error` : undefined}
            onChange={(event) => update("company", event.target.value)}
          />
          {errors.company ? (
            <p className="field-error" id={`${baseId}-company-error`}>
              {errors.company}
            </p>
          ) : null}
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${baseId}-business`}>
          Which business <span className="req" aria-hidden="true">*</span>
          <span className="visually-hidden"> required</span>
        </label>
        <select
          id={`${baseId}-business`}
          name="business"
          value={fields.business}
          aria-invalid={errors.business ? true : undefined}
          aria-describedby={errors.business ? `${baseId}-business-error` : undefined}
          onChange={(event) => update("business", event.target.value)}
        >
          <option value="">Select a business</option>
          {businesses.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {errors.business ? (
          <p className="field-error" id={`${baseId}-business-error`}>
            {errors.business}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor={`${baseId}-message`}>
          Message <span className="req" aria-hidden="true">*</span>
          <span className="visually-hidden"> required</span>
        </label>
        <textarea
          id={`${baseId}-message`}
          name="message"
          rows={7}
          value={fields.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${baseId}-message-error` : `${baseId}-hint`}
          onChange={(event) => update("message", event.target.value)}
        />
        {errors.message ? (
          <p className="field-error" id={`${baseId}-message-error`}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <button className="btn btn-primary" type="submit">
        Prepare email
      </button>
    </form>
  );
}

export function ContactForm() {
  const params = useSearchParams();
  const requested = params.get("business") ?? "";
  const preset = businessByValue(requested)?.value ?? "";
  return <ContactFormFields key={requested} preset={preset} />;
}
