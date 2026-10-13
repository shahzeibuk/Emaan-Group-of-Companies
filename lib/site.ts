export const group = {
  name: "Emaan Group of Companies",
  domain: "emaangroupofcompanies.com",
  url: "https://emaangroupofcompanies.com",
  email: "info@emaangroupofcompanies.com",
} as const;

export const logistics = {
  name: "Emaan Logistics",
  domain: "emaanlogistics.com",
  url: "https://emaanlogistics.com",
  email: "logistics@emaanlogistics.com",
} as const;

export const softTech = {
  name: "Emaan Soft Tech",
  domain: "emaansofttech.com",
  url: "https://emaansofttech.com",
  email: "hello@emaansofttech.com",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who we are" },
  { href: "/services", label: "Services" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
] as const;

export const pages = nav;

export const businesses = [
  { value: "group", label: "Emaan Group of Companies", email: group.email },
  { value: "housing", label: "Emaan Housing", email: group.email },
  { value: "marketing", label: "Emysh Marketing", email: group.email },
  { value: "trade", label: "Emaan Import and Exports", email: logistics.email },
  { value: "softech", label: "Emaan Softech", email: softTech.email },
  { value: "agriculture", label: "Emaan Agriculture", email: group.email },
] as const;

export type BusinessValue = (typeof businesses)[number]["value"];

export function businessByValue(value: string) {
  return businesses.find((item) => item.value === value);
}
