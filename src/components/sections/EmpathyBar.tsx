"use client";

import React from "react";
import { Heart, Compass, Smile, Sparkles } from "lucide-react";

export const EmpathyBar: React.FC = () => {
  const stats = [
    {
      icon: Heart,
      title: "1 parent sur 2",
      desc: "ressent un déchirement ou de la culpabilité lors des premières séparations.",
    },
    {
      icon: Compass,
      title: "4 étapes clés",
      desc: "pour structurer un rituel d'au revoir clair, apaisant et reproductible.",
    },
    {
      icon: Smile,
      title: "Moins de 5 min",
      desc: "c'est le temps moyen après lequel un enfant apaisé commence à jouer.",
    },
    {
      icon: Sparkles,
      title: "29 pages concrètes",
      desc: "pensées pour aller droit au but sans jargon ni théorie inutile.",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-amber-50/50 border-y border-amber-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-amber-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400 to-warmth-500 text-white shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-black text-stone-900 text-base">
                    {stat.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
