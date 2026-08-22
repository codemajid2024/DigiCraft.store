"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  CheckCircle2,
  FileCheck,
  Heart,
  Sparkles,
  Layers,
  ChevronRight,
  Gift,
  Printer,
  Smartphone,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const BookPreview: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section id="sommaire" className="py-20 bg-white relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            Structure & Sommaire (29 Pages)
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Un guide clair, étape par étape, pensé pour les parents occupés
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Chaque chapitre a été conçu pour être lu en 5 à 10 minutes avec des solutions directement applicables.
          </p>
        </div>

        {/* Interactive Chapters Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chapter Selector (List) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-stone-400 uppercase tracking-wider px-2">
              Cliquez pour explorer les chapitres :
            </div>
            {siteConfig.chapters.map((chap, idx) => (
              <button
                key={chap.number}
                onClick={() => setActiveChapter(idx)}
                type="button"
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                  activeChapter === idx
                    ? "bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-500/20 scale-[1.02]"
                    : "bg-stone-50/70 hover:bg-amber-50/50 text-stone-800 border-stone-200/80 hover:border-amber-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-display font-black text-xs shrink-0 ${
                      activeChapter === idx
                        ? "bg-white/20 text-white"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {chap.number}
                  </span>
                  <div>
                    <h4
                      className={`text-sm font-bold leading-snug ${
                        activeChapter === idx ? "text-white" : "text-stone-900"
                      }`}
                    >
                      {chap.title}
                    </h4>
                    <span
                      className={`text-xs ${
                        activeChapter === idx ? "text-amber-100" : "text-stone-500"
                      }`}
                    >
                      {chap.pageCount}
                    </span>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    activeChapter === idx ? "rotate-90 text-white" : "text-stone-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Chapter Detail View */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-warmth-50/50 border border-amber-200/80 shadow-card space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-amber-500 text-white text-xs font-black px-3 py-1 rounded-full">
                  Chapitre {siteConfig.chapters[activeChapter].number}
                </span>
                <span className="text-xs font-bold text-stone-500 bg-white px-3 py-1 rounded-full border border-stone-200">
                  {siteConfig.chapters[activeChapter].pageCount}
                </span>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl text-stone-900 mb-2">
                  {siteConfig.chapters[activeChapter].title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {siteConfig.chapters[activeChapter].description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Au programme dans cette section :
                </h5>
                <div className="space-y-2.5">
                  {siteConfig.chapters[activeChapter].keyPoints.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-amber-100 text-sm text-stone-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonus Tag Highlight inside book preview */}
              <div className="p-4 rounded-2xl bg-amber-100/60 border border-amber-200 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500 text-white shrink-0">
                  <Gift className="w-5 h-5" />
                </div>
                <div className="text-xs text-stone-700">
                  <strong>Inclus avec ce chapitre :</strong> fiches pratiques récapitulatives et modèles prêts à être utilisés dès ce soir.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Included Gifts & Bonus Section Cards */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-display font-bold text-2xl text-stone-900">
              🎁 Ce qui est inclus dans votre téléchargement
            </h3>
            <p className="text-sm text-stone-600">
              Un pack complet 100% numérique pour vous outiller sans stress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.includedBonuses.map((bonus, i) => {
              const imgSrc = i === 0
                ? "/assets/ebook-cover.jpg"
                : i === 1
                ? "/assets/checklist-preview.jpg"
                : i === 2
                ? "/assets/mockup-phone.jpg"
                : "/assets/mockup-ipad.jpg";

              return (
                <div
                  key={i}
                  className="rounded-2xl bg-gradient-to-b from-stone-50 to-amber-50/40 border border-amber-200/70 shadow-sm overflow-hidden flex flex-col"
                >
                  {/* Visual thumbnail */}
                  <div className="relative w-full h-48 overflow-hidden bg-amber-100/40">
                    <Image
                      src={imgSrc}
                      alt={bonus.title}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1 space-y-3">
                    <div className="space-y-3">
                      <span className="inline-block bg-amber-500/15 text-amber-800 font-bold text-xs px-2.5 py-1 rounded-md">
                        {bonus.tag}
                      </span>
                      <h4 className="font-display font-bold text-lg text-stone-900">
                        {bonus.title}
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {bonus.subtitle}
                      </p>
                    </div>

                    <div className="pt-4 mt-2 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500">
                      <span className="flex items-center gap-1">
                        <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Format PDF HD
                      </span>
                      <span className="flex items-center gap-1">
                        <Printer className="w-3.5 h-3.5 text-amber-600" />
                        Imprimable A4
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compatibility Info Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-900 text-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-stone-800 text-amber-400 shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Compatible 100% Téléphones, Tablettes, PC & Liseuses
              </div>
              <div className="text-xs text-stone-400">
                Aucune application spéciale nécessaire. Ouvrez le PDF directement dans votre navigateur ou imprimez-le.
              </div>
            </div>
          </div>
          <a
            href="#commander"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors"
          >
            Acheter le guide ({siteConfig.pricing.amountStr} €)
          </a>
        </div>
      </div>
    </section>
  );
};
