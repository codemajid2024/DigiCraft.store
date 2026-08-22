"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-stone-50/70 relative scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Questions Fréquentes
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Tout ce que vous devez savoir avant de commander
          </h2>
          <p className="text-stone-600 text-base">
            Une question sur le format, la livraison ou le paiement ? Retrouvez toutes les réponses ici.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-stone-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-stone-900 hover:text-amber-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-amber-500 text-white rotate-180"
                        : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support helper */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-amber-100/50 border border-amber-200">
          <p className="text-sm text-stone-700">
            Une autre question ? Notre équipe vous répond avec bienveillance à{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-bold text-amber-700 hover:underline"
            >
              {siteConfig.supportEmail}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
