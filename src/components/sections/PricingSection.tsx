"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  Download,
  Lock,
  ShieldAlert,
  Zap,
  Gift,
  FileCheck,
  HeartHandshake,
  Star,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { PayPalButtonWrapper } from "@/components/checkout/PayPalButtonWrapper";
import { GuaranteeBadge } from "@/components/checkout/GuaranteeBadge";

export const PricingSection: React.FC = () => {
  const [acceptedCGV, setAcceptedCGV] = useState(false);
  const [acceptedRetractation, setAcceptedRetractation] = useState(false);
  const bothAccepted = acceptedCGV && acceptedRetractation;

  return (
    <section
      id="commander"
      className="py-20 bg-gradient-to-b from-amber-50/50 via-warmth-50/40 to-amber-100/40 relative scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-500 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
            <Zap className="w-3.5 h-3.5 text-yellow-200 fill-yellow-200" />
            Accès Immédiat & Téléchargement Sécurisé
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Offrez-vous des matins sereins dès demain
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Téléchargez le guide complet de 29 pages ainsi que tous les bonus imprimables en quelques secondes.
          </p>
        </div>

        {/* Pricing & Checkout Box Card */}
        <div className="bg-white rounded-3xl border-2 border-amber-300 shadow-2xl overflow-hidden relative">
          {/* Top highlight ribbon */}
          <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-warmth-500 text-white text-center py-2.5 px-4 font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-200" />
            <span>Offre Spéciale Rentrée • Téléchargement Direct Après Paiement</span>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left col: What you get */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-100/70 px-2.5 py-1 rounded-md">
                    Pack Complet Rentrée Maternelle
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-stone-900 leading-tight">
                    Guide PDF + Bonus Imprimables
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Tout le nécessaire pour comprendre, apaiser et surmonter l&apos;angoisse de séparation en toute bienveillance.
                  </p>
                </div>

                {/* Pack Visual Banner */}
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md border border-amber-200 bg-amber-50">
                  <Image
                    src="/assets/mockup-ipad.jpg"
                    alt="Aperçu du pack complet : Guide Ebook + Check-list Rentrée"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                    Pack Numérique Immédiat
                  </div>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-baseline gap-3">
                  <div className="font-display font-black text-4xl sm:text-5xl text-stone-900 tracking-tight">
                    {siteConfig.pricing.amountStr} {siteConfig.pricing.currencySymbol}
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-stone-400 line-through block">
                      {siteConfig.pricing.originalPrice} €
                    </span>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block">
                      {siteConfig.pricing.discountBadge}
                    </span>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Ce que vous allez recevoir immédiatement :
                  </div>
                  <ul className="space-y-2.5 text-sm text-stone-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Ebook PDF de 29 pages</strong> illustré et mis en couleur
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Check-list « Rentrée Sereine »</strong> prête à imprimer pour le frigo
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Modèle de petit mot doux</strong> pour le sac ou le doudou
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Lecture universelle (iPhone, Android, iPad, Mac, PC, Liseuse)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Téléchargement immédiat</strong> + Envoi automatique d&apos;une copie par e-mail
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Accès permanent à vie</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right col: PayPal Button and checkout area */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-inner space-y-4">
                  <div className="text-center space-y-1">
                    <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Finaliser votre commande
                    </div>
                    <div className="text-lg font-black text-stone-900 font-display">
                      Montant total : {siteConfig.pricing.amountStr} € TTC
                    </div>
                  </div>

                  {/* Legal Checkboxes — obligatoires avant paiement */}
                  <div className="space-y-3 pt-1 pb-2">
                    {/* Case 1 : CGV + Confidentialité */}
                    <label
                      htmlFor="accept-cgv"
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        acceptedCGV
                          ? "bg-emerald-50 border-emerald-300"
                          : "bg-white border-stone-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        id="accept-cgv"
                        type="checkbox"
                        checked={acceptedCGV}
                        onChange={(e) => setAcceptedCGV(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-amber-500 cursor-pointer"
                      />
                      <span className="text-[11px] text-stone-700 leading-relaxed">
                        J&apos;accepte les{" "}
                        <a href="/cgv" target="_blank" className="text-amber-600 font-semibold underline hover:text-amber-700">
                          Conditions Générales de Vente
                        </a>{" "}et la{" "}
                        <a href="/confidentialite" target="_blank" className="text-amber-600 font-semibold underline hover:text-amber-700">
                          Politique de Confidentialité
                        </a>.
                      </span>
                    </label>

                    {/* Case 2 : Renonciation au droit de rétractation */}
                    <label
                      htmlFor="accept-retractation"
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        acceptedRetractation
                          ? "bg-emerald-50 border-emerald-300"
                          : "bg-white border-stone-200 hover:border-amber-300"
                      }`}
                    >
                      <input
                        id="accept-retractation"
                        type="checkbox"
                        checked={acceptedRetractation}
                        onChange={(e) => setAcceptedRetractation(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-amber-500 cursor-pointer"
                      />
                      <span className="text-[11px] text-stone-700 leading-relaxed">
                        J&apos;accepte le démarrage <strong>immédiat</strong> de la fourniture du contenu numérique et je{" "}
                        <strong>renonce expressément</strong> à mon droit de rétractation de 14 jours{" "}
                        (art. L221-28 Code de la consommation). Aucun remboursement ne sera possible
                        après accès au fichier.
                      </span>
                    </label>

                    {/* Message d'alerte si cases non cochées */}
                    {!bothAccepted && (
                      <p className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-center font-medium">
                        ☝️ Veuillez cocher les deux cases ci-dessus pour finaliser votre commande.
                      </p>
                    )}
                  </div>

                  {/* PayPal Interactive Component — bloqué si cases non cochées */}
                  <div className={`relative transition-all duration-300 ${
                    !bothAccepted ? "opacity-40 pointer-events-none select-none" : ""
                  }`}>
                    <PayPalButtonWrapper
                      amount={siteConfig.pricing.amount}
                      currency={siteConfig.pricing.currency}
                    />
                    {!bothAccepted && (
                      <div className="absolute inset-0 rounded-xl cursor-not-allowed" />
                    )}
                  </div>
                </div>

                {/* Digital Product & Refund Disclaimer */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-stone-600 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-stone-800">
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Information importante sur votre commande</span>
                  </div>
                  <p className="leading-relaxed">
                    ⚠️ <strong>Produit 100% numérique (PDF)</strong> : Aucun article physique ne sera expédié par la poste.
                    En raison de la nature numérique et de l&apos;accès immédiat au fichier après achat, aucun remboursement
                    ne sera possible une fois le téléchargement délivré.
                  </p>
                </div>

                {/* High-converting Value & Reassurance Card (100% Légal & Conforme) */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 text-white shadow-xl space-y-4 border border-stone-800">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-bold text-amber-300">Votre Pack Sérénité Immédiat</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/50">
                      Accès 24h/7
                    </span>
                  </div>

                  {/* Value Highlights */}
                  <div className="space-y-2">
                    <p className="text-xs text-stone-200 leading-relaxed font-medium">
                      💡 <strong>Pourquoi investir 19,90 € aujourd&apos;hui ?</strong>
                    </p>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Pour remplacer des semaines de pleurs, de doutes et de culpabilité au moment de la séparation par un rituel rassurant et apaisé dès demain matin.
                    </p>
                  </div>

                  {/* Fast Reassurance Checklist */}
                  <div className="pt-3 border-t border-stone-800/80 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-stone-300">
                      <Download className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Accès instantané 24h/7</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-300">
                      <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Cryptage SSL 256-bit</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-300">
                      <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Support 7j/7 dédié</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Fichier PDF universel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom trust badges */}
            <div className="mt-8 pt-6 border-t border-stone-200/70">
              <GuaranteeBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
