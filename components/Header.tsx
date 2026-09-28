"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const panelId = useId();
  const open = openPath === pathname;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1040px)");
    const onChange = () => {
      if (media.matches) setOpenPath(null);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            E
          </span>
          <span className="brand-text">
            <span className="brand-name">Emaan</span>
            <span className="brand-sub">Group of Companies</span>
          </span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
          {open ? "Close" : "Menu"}
        </button>
        <nav id={panelId} className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary">
          {nav.map((item) => {
            const current = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                onClick={() => setOpenPath(null)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
