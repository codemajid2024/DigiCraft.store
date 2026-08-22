"use client";

import React from "react";
import {
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Clock,
  FileCheck,
  MessageCircleHeart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap: Record<string, React.ElementType> = {
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Clock,
  FileCheck,
  MessageCircleHeart,
};

export const Benefits: React.FC = () => {
  return (
    <section id="benefices" className="py-20 bg-stone-50/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Ce Que Vous Allez Découvrir
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Les clés concrètes pour transformer les matins d&apos;école
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Fini les matins dans les pleurs et la culpabilité. Découvrez des méthodes douces, testées et
            approuvées par les spécialistes de la petite enfance et des centaines de parents.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.benefits.map((item, index) => {
            const Icon = iconMap[item.icon] || HeartHandshake;
            return (
              <div
                key={item.id}
                className="group p-7 rounded-3xl bg-white border border-amber-100/80 shadow-card hover:shadow-xl hover:border-amber-300 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-warmth-100 text-amber-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-stone-900 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-amber-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Inclus dans le guide (29 p.)</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout inside section */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-600 to-warmth-500 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-black text-xl sm:text-2xl">
              Besoin d&apos;apaiser la situation dès demain matin ?
            </h4>
            <p className="text-amber-100 text-sm max-w-xl">
              Le guide se lit en moins d&apos;une heure ce soir, pour mettre en place le nouveau rituel dès demain à 8h.
            </p>
          </div>
          <a
            href="#commander"
            className="btn-shimmer whitespace-nowrap px-6 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-stone-900 font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <span>Obtenir l&apos;accès immédiat ({siteConfig.pricing.amountStr} €)</span>
            <ArrowRight className="w-4 h-4 text-amber-600" />
          </a>
        </div>
      </div>
    </section>
  );
};
