"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Star,
  Download,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-amber-100/60 via-warmth-50/40 to-transparent pointer-events-none rounded-b-[4rem] -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-5 w-80 h-80 bg-warmth-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & High Conversion Hook */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Social Proof & Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 border border-amber-200/80 shadow-sm px-4 py-1.5 rounded-full backdrop-blur-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-stone-800">
                {siteConfig.trust.ratingScore}
              </span>
              <span className="text-stone-300 text-xs">•</span>
              <span className="text-xs text-stone-600 font-medium">
                {siteConfig.trust.reviewsCount}
              </span>
            </div>

            {/* Main Catchy Hook & Headline */}
            <div className="space-y-3">
              <div className="inline-block text-amber-700 font-display font-extrabold text-sm sm:text-base uppercase tracking-wider bg-amber-100/70 px-3.5 py-1 rounded-lg">
                💛 {siteConfig.hook}
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15]">
                Comprendre et apaiser{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-warmth-600">
                  l&apos;angoisse de séparation
                </span>
                , du premier jour aux semaines suivantes.
              </h1>
            </div>

            {/* Empathetic Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Votre enfant s&apos;accroche à vous le matin, pleure à l&apos;entrée de l&apos;école et vous
              repartez le cœur serré ? Vous n&apos;êtes pas seul·e. Ce guide pratique de <strong>29 pages</strong> a
              été conçu comme un compagnon rassurant pour transformer les matins difficiles en moments
              d&apos;apaisement.
            </p>

            {/* Quick Benefits Bullet Points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0 text-left text-sm text-stone-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Le rituel d&apos;au revoir apaisant en 3 min</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ce qui se passe vraiment après votre départ</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Check-list matinale « Rentrée Sereine » offerte</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Téléchargement PDF instantané sur mobile & PC</span>
              </li>
            </ul>

            {/* Call to Action Button & Price */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#commander"
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-warmth-500 hover:from-amber-600 hover:to-warmth-600 text-white font-display font-black text-lg px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-5 h-5 text-yellow-200" />
                <span>Télécharger le Guide ({siteConfig.pricing.amountStr} €)</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="text-left text-xs text-stone-500 flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1.5 font-bold text-stone-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Paiement sécurisé PayPal & CB</span>
                </div>
                <span>Accès direct • Aucune attente postale</span>
              </div>
            </div>

            {/* Micro reassurance quote */}
            <div className="pt-2 text-xs text-stone-500 italic max-w-lg mx-auto lg:mx-0">
              « Merci de votre confiance — vous faites déjà de votre mieux, et c&apos;est déjà énorme. 🤍 »
            </div>
          </div>

          {/* Right Column: Real Ebook Cover Image with 3D Effect */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] book-container">

              {/* Floating "2 Bonus" badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-emerald-600 text-white text-xs font-black uppercase tracking-wider py-1.5 px-3 rounded-full shadow-lg flex items-center gap-1 animate-bounce">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>2 Bonus Inclus</span>
              </div>

              {/* Floating checklist thumbnail (bottom-left) */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 z-20 bg-white shadow-xl border border-amber-200 rounded-2xl overflow-hidden w-28 sm:w-32">
                <Image
                  src="/assets/checklist-preview.jpg"
                  alt="Check-list Rentrée Sereine imprimable - Bonus Offert"
                  width={128}
                  height={170}
                  className="object-cover w-full h-full"
                />
                <div className="bg-amber-500 py-1 text-center text-[10px] font-black text-white uppercase tracking-wide">
                  Bonus #1 📋
                </div>
              </div>

              {/* Floating page-count badge (top-left) */}
              <div className="absolute top-4 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md border border-amber-200 text-stone-800 text-xs font-bold py-2 px-3 rounded-xl shadow-lg flex items-center gap-1.5">
                <div className="p-1 rounded bg-amber-100 text-amber-700">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-stone-900 font-bold text-xs">29 Pages</div>
                  <div className="text-[10px] text-stone-500">PDF Illustré</div>
                </div>
              </div>

              {/* Real Ebook Cover — 3D tilt applied via book-3d CSS class */}
              <div className="book-3d rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/ebook-cover.jpg"
                  alt="Couverture du guide PDF Mon Enfant Pleure à l'École — DigiCraft"
                  width={720}
                  height={960}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
