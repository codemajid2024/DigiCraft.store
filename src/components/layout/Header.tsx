"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Sparkles, Menu, X, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ce que vous apprendrez", href: "#benefices" },
    { name: "Sommaire (29p.)", href: "#sommaire" },
    { name: "Pour qui ?", href: "#public" },
    { name: "Avis Parents", href: "#avis" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-amber-100/60 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-warmth-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display font-black text-lg sm:text-xl text-stone-900 tracking-tight block leading-tight">
                DigiCraft<span className="text-amber-500">.store</span>
              </span>
              <span className="text-[11px] font-medium text-stone-500 block leading-tight">
                Guide Rentrée Maternelle 💛
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-amber-600 text-sm font-semibold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#commander"
              className="btn-shimmer inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-600 to-warmth-500 hover:from-amber-600 hover:to-warmth-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/35 hover:-translate-y-0.5 transition-all"
            >
              <Sparkles className="w-4 h-4 text-yellow-200" />
              <span>Obtenir mon Guide ({siteConfig.pricing.amountStr} €)</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-amber-100 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-700 hover:text-amber-600 hover:bg-amber-50/70 font-semibold text-base px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#commander"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-warmth-500 text-white font-bold px-5 py-3 rounded-xl shadow-md text-center"
            >
              <BookOpen className="w-4 h-4" />
              <span>Télécharger le Guide ({siteConfig.pricing.amountStr} €)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
