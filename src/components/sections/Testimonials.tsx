"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Heart, Quote } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const Testimonials: React.FC = () => {
  return (
    <section id="avis" className="py-20 bg-white relative scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            Témoignages & Avis Vérifiés
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Ils ont transformé les pleurs du matin en sourires
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-stone-800 text-sm">
              {siteConfig.trust.ratingScore} sur {siteConfig.trust.reviewsCount}
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-stone-50/80 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                {/* Header of review */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {t.badge}
                  </span>
                </div>

                {/* Highlight quote */}
                <div className="font-display font-black text-stone-900 text-base">
                  « {t.highlight} »
                </div>

                {/* Comment body */}
                <p className="text-sm text-stone-600 leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-5 mt-6 border-t border-stone-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-stone-500">{t.role}</p>
                </div>
                <span className="text-[11px] text-stone-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Banner */}
        <div className="mt-12 text-center text-xs text-stone-500">
          💡 Tous les témoignages sont issus de parents ayant téléchargé le guide PDF.
        </div>
      </div>
    </section>
  );
};
