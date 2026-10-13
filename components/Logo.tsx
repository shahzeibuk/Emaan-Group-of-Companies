import Link from "next/link";

type LogoProps = {
  tone?: "green" | "light";
};

export function Logo({ tone = "green" }: LogoProps) {
  const onDark = tone === "light";

  return (
    <Link href="/" className={onDark ? "brand brand-on-dark" : "brand"}>
      <img
        className="brand-mark"
        src={onDark ? "/brand/mark-light.svg" : "/brand/mark.svg"}
        alt=""
      />
      <span className="brand-rule" aria-hidden="true" />
      <span className="brand-word">
        <span className="brand-name">EMAAN</span>
        <span className="brand-sub">GROUP OF COMPANIES</span>
      </span>
    </Link>
  );
}
