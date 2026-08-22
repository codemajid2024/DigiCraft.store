"use client";

import React from "react";
import { School, Baby, Calendar, Gift, Check, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap: Record<string, React.ElementType> = {
  School,
  Baby,
  Calendar,
  Gift,
};

export const TargetAudience: React.FC = () => {
  return (
    <section id="public" className="py-20 bg-amber-50/40 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
            <Baby className="w-3.5 h-3.5 text-amber-600" />
            Pour Qui Est Fait Ce Guide ?
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Idéal pour toutes les étapes de transition de votre tout-petit
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Que vous prépariez une première rentrée ou surmontiez une reprise délicate, ce guide s&apos;adapte
            à votre situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.audiences.map((aud, i) => {
            const Icon = iconMap[aud.icon] || School;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100/70 text-amber-800 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">
                      {aud.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-stone-900 leading-snug">
                    {aud.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {aud.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Conseils adaptés inclus</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
