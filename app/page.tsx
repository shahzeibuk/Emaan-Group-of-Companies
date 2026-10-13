import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-barlow",
});

const divisions = [
  {
    name: "Emaan Housing",
    src: "/panels/housing.jpg",
    items: ["Emaan Homes", "Emaan Residency and Resorts", "Emaan Greens", "Emaan Icon"],
  },
  {
    name: "Emysh Marketing",
    src: "/panels/marketing.jpg",
    items: ["Real estate marketing", "Consultancy"],
  },
  {
    name: "Emaan Import and Exports",
    src: "/panels/imports.jpg",
    items: ["Exotic fruits", "Bed sheets", "Mineral ores", "Industrial imports and exports"],
  },
  {
    name: "Emaan Softech",
    src: "/panels/softech.jpg",
    items: ["Custom software", "Websites", "Business systems"],
  },
  {
    name: "Emaan Agriculture",
    src: "/panels/agriculture.jpg",
    items: ["Cultivation", "Fresh produce", "Farm supply"],
  },
] as const;

const places = [
  { name: "USA", x: "22%", y: "35%" },
  { name: "Tanzania", x: "55.5%", y: "62%" },
  { name: "Saudi Arabia", x: "59.5%", y: "39.5%" },
  { name: "UAE", x: "62.5%", y: "42.5%" },
  { name: "Oman", x: "63.2%", y: "44.2%" },
  { name: "Pakistan", x: "67.2%", y: "41%" },
] as const;

export const metadata: Metadata = {
  description:
    "Emaan Group of Companies holds logistics, software, and residential development to one standard: describe the work plainly, and stand behind it.",
};

export default function HomePage() {
  return (
    <>
      <section className="panel-strip" aria-label="Divisions">
        {divisions.map((division) => (
          <article key={division.name} className="panel" tabIndex={0}>
            <Image
              className="panel-photo"
              src={division.src}
              alt=""
              fill
              sizes="(max-width: 899px) 80vw, 40vw"
              priority
            />
            <div className="panel-caption">
              <ul className="panel-list">
                {division.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="panel-label">{division.name}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={`about-us ${barlow.variable}`} aria-labelledby="about-us-title">
        <div className="wrap about-us-grid">
          <div className="about-us-copy">
            <h2 id="about-us-title">About us</h2>
            <p>
              Emaan Group of Companies works across housing, real estate marketing, import and
              export, software, and agriculture.
            </p>
            <p>Emaan means faith, trust, and integrity, held as a standard of delivery.</p>
            <Link href="/who-we-are">Read more</Link>
          </div>
          <figure className="about-us-photo">
            <Image
              className="about-us-img"
              src="/about/courtyard.jpg"
              alt="Modern buildings around a courtyard."
              fill
              sizes="(max-width: 899px) 100vw, 40vw"
            />
          </figure>
        </div>
      </section>

      <section className={`network ${barlow.variable}`} aria-labelledby="network-title">
        <div className="wrap">
          <header className="network-head">
            <p className="network-eyebrow">We serve around the world</p>
            <h2 id="network-title">Global network of clients.</h2>
            <p>
              The group’s work reaches clients through housing, real estate marketing, import and
              export, software, and agriculture.
            </p>
          </header>
          <figure className="network-map">
            <div className="network-map-frame">
              <img src="/network/map.png" alt="" />
              {places.map((place) => (
                <button
                  key={place.name}
                  type="button"
                  className="network-dot"
                  style={{ left: place.x, top: place.y }}
                >
                  <span>{place.name}</span>
                </button>
              ))}
            </div>
            <figcaption className="visually-hidden">
              A world map. Focus or hover a mark to read the location. The marks are not a list of
              offices.
            </figcaption>
          </figure>
          <ul className="network-columns">
            <li>
              <h3>Housing</h3>
              <p>Planned residential communities, with availability shared on request.</p>
            </li>
            <li>
              <h3>Trade</h3>
              <p>Import and export of fruits, bed sheets, ores, and industrial goods.</p>
            </li>
            <li>
              <h3>Software and agriculture</h3>
              <p>Custom software and business systems, and cultivation of fresh produce.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={`careers ${barlow.variable}`} aria-labelledby="careers-title">
        <Image
          className="careers-photo"
          src="/careers/workplace.jpg"
          alt=""
          fill
          sizes="100vw"
        />
        <div className="wrap careers-inner">
          <div className="careers-copy">
            <h2 id="careers-title">Careers</h2>
            <p>Join Emaan Group of Companies.</p>
          </div>
          <Link className="careers-apply" href="/career">
            Apply now
          </Link>
        </div>
      </section>
    </>
  );
}
