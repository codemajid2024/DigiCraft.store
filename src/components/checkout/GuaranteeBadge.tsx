"use client";

import React from "react";
import { ShieldCheck, Download, Lock, CheckCircle2, Smartphone, Printer } from "lucide-react";

export const GuaranteeBadge: React.FC = () => {
  const trustPoints = [
    {
      icon: Download,
      title: "Téléchargement Immédiat",
      desc: "Accès instantané 24h/24 dès la validation",
    },
    {
      icon: Lock,
      title: "Paiement 100% Sécurisé",
      desc: "Chiffrement bancaire SSL via PayPal",
    },
    {
      icon: Smartphone,
      title: "Tous Appareils",
      desc: "iPhone, Android, iPad, Mac, PC, Liseuse",
    },
    {
      icon: Printer,
      title: "Prêt à Imprimer",
      desc: "Format PDF HD A4 avec fiches à découper",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 my-6">
      {trustPoints.map((point, index) => {
        const Icon = point.icon;
        return (
          <div
            key={index}
            className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-left transition-all hover:bg-amber-100/50"
          >
            <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-700 shrink-0 mt-0.5">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-stone-900 leading-tight">
                {point.title}
              </h5>
              <p className="text-[11px] text-stone-600 leading-tight mt-0.5">
                {point.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
