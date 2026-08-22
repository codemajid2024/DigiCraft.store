import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Mentions Légales - DigiCraft.store",
  description: "Mentions légales de DigiCraft.store.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-cream">
      <Header />
      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-amber-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l&apos;accueil</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-stone-100 pb-6">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Transparence & Mentions Légales
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-stone-900">
              Mentions Légales
            </h1>
            <p className="text-xs text-stone-500">
              Édition du site DigiCraft.store
            </p>
          </div>

          <div className="prose prose-stone max-w-none text-sm text-stone-700 space-y-6 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                1. Éditeur du site
              </h2>
              <p>
                Le site <strong>DigiCraft.store</strong> est édité par l&apos;équipe DigiCraft Editions, spécialisée dans la publication de contenus éducatifs et d&apos;outils d&apos;accompagnement à la parentalité.
              </p>
              <p>
                Contact email : <strong>{siteConfig.supportEmail}</strong>
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                2. Hébergement
              </h2>
              <p>
                Le site est hébergé sur l&apos;infrastructure sécurisée de <strong>Vercel Inc.</strong><br />
                Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA<br />
                Site web : https://vercel.com
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                3. Avertissement médical & éducatif
              </h2>
              <p>
                Le guide <em>« Mon enfant pleure à l&apos;école »</em> et l&apos;ensemble des documents associés sont fournis à titre exclusivement pédagogique et informatif. Ils visent à apporter des repères de bon sens et des conseils d&apos;accompagnement parental bienveillant. En cas d&apos;angoisse sévère, de troubles persistants ou de souffrance chez l&apos;enfant, la consultation d&apos;un pédiatre ou d&apos;un psychologue spécialisé reste indispensable.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
