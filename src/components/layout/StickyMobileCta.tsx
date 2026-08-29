"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA once scrolled past hero (approx 300px)
      const scrollPosition = window.scrollY;
      const pricingSection = document.getElementById("commander");
      
      let isOverPricing = false;
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        isOverPricing = rect.top <= window.innerHeight && rect.bottom >= 0;
      }

      setIsVisible(scrollPosition > 350 && !isOverPricing);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barre d'action rapide"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-amber-200/80 p-3 sm:hidden shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wide">
            Guide PDF (29 p.) + 2 Bonus
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black text-stone-900 font-display">
              {siteConfig.pricing.amountStr} {siteConfig.pricing.currencySymbol}
            </span>
            <span className="text-xs text-stone-400 line-through">{siteConfig.pricing.originalPrice} €</span>
          </div>
        </div>

        <a
          href="#commander"
          className="btn-shimmer flex-1 max-w-[200px] flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-warmth-500 text-white text-sm font-black py-2.5 px-4 rounded-xl shadow-md shadow-amber-500/30"
        >
          <Sparkles className="w-4 h-4 text-yellow-200" />
          <span>Commander</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
