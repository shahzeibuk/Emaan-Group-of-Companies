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
  href: "/logistics",
} as const;

export const softTech = {
  name: "Emaan Soft Tech",
  domain: "emaansofttech.com",
  url: "https://emaansofttech.com",
  email: "hello@emaansofttech.com",
  href: "/soft-tech",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/logistics", label: "Logistics" },
  { href: "/soft-tech", label: "Soft Tech" },
  { href: "/enclave", label: "Enclave" },
  { href: "/housing", label: "Housing" },
  { href: "/contact", label: "Contact" },
] as const;

export const pages = [
  { href: "/", label: "Home" },
  ...nav,
] as const;

export const businesses = [
  { value: "group", label: "Emaan Group of Companies", email: group.email },
  { value: "logistics", label: "Emaan Logistics", email: logistics.email },
  { value: "soft-tech", label: "Emaan Soft Tech", email: softTech.email },
  { value: "enclave", label: "Emaan Enclave", email: group.email },
  { value: "housing", label: "Emaan Housing", email: group.email },
] as const;

export type BusinessValue = (typeof businesses)[number]["value"];

export function businessByValue(value: string) {
  return businesses.find((item) => item.value === value);
}
