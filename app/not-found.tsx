import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-intro">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>This page is not on the site.</h1>
        <p className="lede">
          The address may be mistyped, or the page may have moved. The group’s work is still on the
          pages linked from here.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/">
            Home
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
