"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a1628]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="w-9 h-9 transition-transform group-hover:scale-110" />
          <span className="font-bold text-lg tracking-tight">Deep End Ventures</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a1628]/95 backdrop-blur-xl">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-6 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
