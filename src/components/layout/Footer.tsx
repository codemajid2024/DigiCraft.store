"use client";

import React from "react";
import Link from "next/link";
import { HeartHandshake, ShieldCheck, Lock, Mail, FileText, Heart } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 sm:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-warmth-500 flex items-center justify-center text-white shadow-md">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                DigiCraft<span className="text-amber-400">.store</span>
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              Le guide de référence pour apaiser l&apos;angoisse de séparation et transformer les matins
              d&apos;école en moments sereins. Conçu avec bienveillance pour accompagner les parents et
              leurs tout-petits.
            </p>
            <div className="flex items-center gap-4 text-xs text-stone-400 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                Paiement 100% Chiffré SSL
              </span>
              <span className="inline-flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Téléchargement Direct
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#benefices" className="hover:text-amber-400 transition-colors">
                  Ce que vous apprendrez
                </a>
              </li>
              <li>
                <a href="#sommaire" className="hover:text-amber-400 transition-colors">
                  Sommaire détaillé (29 pages)
                </a>
              </li>
              <li>
                <a href="#avis" className="hover:text-amber-400 transition-colors">
                  Avis de parents
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Questions fréquentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#commander" className="text-amber-400 font-semibold hover:underline">
                  Télécharger le Guide ({siteConfig.pricing.amountStr} €)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Informations Légales
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cgv" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-stone-500" />
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-stone-500" />
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-stone-500" />
                  Mentions Légales
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  Support : {siteConfig.supportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center md:text-left">
          <p>
            © {currentYear} DigiCraft.store — Tous droits réservés. Produit numérique à téléchargement immédiat.
          </p>
          <p className="flex items-center gap-1">
            Fait avec <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> pour tous les parents et leurs enfants.
          </p>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-stone-800/40 border border-stone-800 text-[11px] text-stone-500 text-center">
          ⚠️ <strong>Avis légal produit numérique</strong> : Ce guide est un document éducatif et informatif au format PDF. Il ne se substitue pas à un avis médical ou psychologique personnalisé.
        </div>
      </div>
    </footer>
  );
};
