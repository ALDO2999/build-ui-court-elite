"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Instagram, Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { useScrolled } from "@/hooks/useScrolled";
import { BRAND_NAME, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Navbar() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "text-xl font-bold tracking-[0.2em] uppercase transition-colors duration-300",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            {BRAND_NAME}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const cls = cn(
                "text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-70",
                scrolled ? "text-foreground" : "text-white"
              );
              return link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={cls}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle - Animated Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "absolute h-0.5 w-6 rounded-full transition-all duration-300",
                scrolled ? "bg-foreground" : "bg-white",
                mobileOpen ? "rotate-45" : "-translate-y-2"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-6 rounded-full transition-all duration-300",
                scrolled ? "bg-foreground" : "bg-white",
                mobileOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-6 rounded-full transition-all duration-300",
                scrolled ? "bg-foreground" : "bg-white",
                mobileOpen ? "-rotate-45" : "translate-y-2"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Full screen dark overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-20 bg-foreground z-50 transition-all duration-500",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col justify-between h-full px-8 py-12">
          {/* Nav Links */}
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => {
              const cls = cn(
                "text-3xl font-bold uppercase tracking-wider text-white/70 hover:text-white transition-all duration-500 py-3 border-b border-white/10",
                mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              );
              const style = { transitionDelay: mobileOpen ? `${i * 75 + 100}ms` : "0ms" };
              return link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className={cls}
                  style={style}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cls}
                  style={style}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Bottom section - Social & Brand */}
          <div
            className={cn(
              "flex items-center justify-between pt-8 border-t border-white/10 transition-all duration-500",
              mobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: mobileOpen ? "500ms" : "0ms" }}
          >
            <p className="text-xs text-white/30 uppercase tracking-wider">
              {BRAND_NAME}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
