"use client";

import React from "react";
import { Sparkles, Zap, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-warmth-500 text-white text-xs sm:text-sm font-medium py-2.5 px-4 text-center shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <span className="inline-flex items-center gap-1.5 bg-black/15 px-2.5 py-0.5 rounded-full text-xs font-semibold backdrop-blur-sm">
          <Zap className="w-3.5 h-3.5 text-yellow-200 fill-yellow-200" />
          Pack Complet
        </span>
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-yellow-200 hidden sm:inline" />
          <span>
            Guide complet de 29 pages + 2 Bonus inclus à{" "}
            <strong>
              {siteConfig.pricing.amountStr} {siteConfig.pricing.currencySymbol}
            </strong>
          </span>
        </span>
        <span className="hidden md:inline-flex items-center gap-1 text-xs opacity-90 border-l border-white/30 pl-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
          Téléchargement immédiat
        </span>
      </div>
    </div>
  );
};
