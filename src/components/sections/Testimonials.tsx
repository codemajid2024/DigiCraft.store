"use client";

import React from "react";
import {
  Clock,
  Heart,
  FileCheck,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Download,
  BookOpen,
  Smile,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-6 h-6 text-amber-600" />,
  Heart: <Heart className="w-6 h-6 text-rose-500 fill-rose-100" />,
  FileCheck: <FileCheck className="w-6 h-6 text-emerald-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-500" />,
};

export const Testimonials: React.FC = () => {
  return (
    <section id="pourquoi-ce-guide" className="py-20 bg-white relative scroll-mt-16 overflow-hidden">
      {/* Background soft ambient shapes */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-warmth-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Pourquoi choisir ce guide ?
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Tout pour transformer les pleurs du matin en sourires
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Une méthode bienveillante, actionnable et conçue spécifiquement pour soulager l&apos;angoisse des parents et sécuriser les tout-petits.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {siteConfig.parentArguments.map((arg) => (
            <div
              key={arg.id}
              className="p-8 rounded-3xl bg-stone-50/80 border border-stone-200/80 hover:border-amber-300 hover:bg-amber-50/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-amber-200/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {iconMap[arg.icon] || <Sparkles className="w-6 h-6 text-amber-600" />}
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100/80 border border-amber-200 px-3 py-1 rounded-full">
                    {arg.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-black text-xl text-stone-900">
                    {arg.title}
                  </h3>
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                    {arg.subtitle}
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {arg.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-stone-200/60 flex items-center gap-2 text-xs font-semibold text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Inclus immédiatement dans votre téléchargement</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Box : Before vs After */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-stone-800 mb-12">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
              Impact Réel au Quotidien
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Ce qui change dès le premier matin
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              La différence entre improviser sous tension et disposer d&apos;un rituel clair et rassurant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Without Guide */}
            <div className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800/80 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wide">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>Sans repères structurés</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Matins stressants, réveils dans l&apos;urgence et départs précipités</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Enfant qui s&apos;accroche à la grille, pleurs déchirants et séparation difficile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Culpabilité parentale et journée au travail avec une boule au ventre</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Conseils contradictoires trouvés au hasard sur Internet</span>
                </li>
              </ul>
            </div>

            {/* With Guide */}
            <div className="p-6 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-stone-950 font-black text-[10px] uppercase px-3 py-0.5 rounded-bl-lg">
                Recommandé
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Avec le Guide AllDigiCraft</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-200">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Check-list sur le frigo pour une routine matinale fluide et sans cris</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Rituel d&apos;au revoir apaisant en 3 min : l&apos;enfant se sent en sécurité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Mots doux dans le sac ou doudou pour garder un ancrage rassurant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Déculpabilisation totale : vous partez serein·e et confiant·e</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800 text-center">
            <a
              href="#commander"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-warmth-500 hover:from-amber-600 hover:to-warmth-600 text-white font-display font-black text-base px-8 py-3.5 rounded-2xl shadow-xl shadow-amber-500/20 transition-all"
            >
              <Download className="w-4 h-4 text-yellow-200" />
              <span>Télécharger mon Pack Complet ({siteConfig.pricing.amountStr} €)</span>
            </a>
          </div>
        </div>

        {/* Guarantees Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
            <Zap className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
            <div className="font-bold text-stone-900 text-xs">Accès Immédiat 24/7</div>
            <div className="text-[11px] text-stone-500">Téléchargement direct en 1 clic</div>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
            <BookOpen className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
            <div className="font-bold text-stone-900 text-xs">29 Pages Synthétiques</div>
            <div className="text-[11px] text-stone-500">Lecture rapide en 35 minutes</div>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
            <FileCheck className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
            <div className="font-bold text-stone-900 text-xs">2 Bonus Prêts à Imprimer</div>
            <div className="text-[11px] text-stone-500">Check-list frigo + mots doux</div>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
            <div className="font-bold text-stone-900 text-xs">Paiement Sécurisé</div>
            <div className="text-[11px] text-stone-500">Chiffrement SSL PayPal & CB</div>
          </div>
        </div>
      </div>
    </section>
  );
};
