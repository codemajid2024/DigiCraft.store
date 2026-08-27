import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Avertissement Légal, Transparence & Clause de Non-Responsabilité (Disclaimer) - alldigicraft.fr",
  description: "Avertissement légal, transparence et clause de non-responsabilité (Disclaimer) de alldigicraft.fr.",
};

export default function DisclaimerPage() {
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
              Légal &amp; Transparence
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-stone-900">
              Avertissement Légal, Transparence &amp; Clause de Non-Responsabilité (Disclaimer)
            </h1>
          </div>

          <div className="prose prose-stone max-w-none text-sm text-stone-700 space-y-8 leading-relaxed">

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide text-amber-700">
                1. TRANSPARENCE &amp; ORIGINE DU GUIDE
              </h2>
              <p>
                Ce guide a été conçu avec la volonté d&apos;offrir un accompagnement clair, chaleureux et <strong>bienveillant</strong> pour traverser les
                étapes importantes du développement de votre enfant (telles que l&apos;entrée à l&apos;école ou l&apos;angoisse de séparation). Il
                s&apos;appuie sur des idées reconnues en psychologie de l&apos;enfant et en théorie de l&apos;attachement (notamment la notion
                de « base sécurisante » ou le développement émotionnel des tout-petits).
              </p>

              <div className="bg-stone-50 border-l-4 border-stone-300 rounded-r-lg p-4 text-xs text-stone-600 space-y-2">
                <p className="font-semibold text-stone-800">Information en toute transparence :</p>
                <p>
                  Le contenu de ce guide a été rédigé avec l&apos;assistance d&apos;outils d&apos;intelligence artificielle, puis soigneusement
                  révisé, structuré, vérifié et mis en page. Ce document ne constitue pas un avis médical, n&apos;a pas été rédigé ni
                  approuvé par un professionnel de santé nommé et ne cite pas d&apos;étude scientifique spécifique.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide text-amber-700">
                2. USAGE &amp; LIMITES DE RESPONSABILITÉ
              </h2>
              <p>
                Ce guide est pensé comme un compagnon pratique pour les parents : il propose des repères, des rituels et des
                conseils bienveillants. Il est destiné à <strong>compléter</strong> le bon sens parental ainsi que l&apos;expérience des enseignants et
                éducateurs, mais il ne s&apos;y <strong>substitue en aucun cas</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Absence de diagnostic :</strong> Les informations fournies ne remplacent jamais une consultation médicale ou
                  psychologique.
                </li>
                <li>
                  <strong>Conseil de prudence :</strong> Si les difficultés ou les pleurs de votre enfant persistent sur plusieurs semaines, ou s&apos;ils
                  s&apos;accompagnent de troubles du sommeil, d&apos;un refus de s&apos;alimenter ou d&apos;un repli sur soi, consultez votre pédiatre
                  ou un spécialiste de l&apos;enfance.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide text-amber-700">
                3. ABSENCE DE DROIT DE RÉTRACTATION ET DE REMBOURSEMENT
              </h2>

              <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 text-sm text-amber-900 space-y-2">
                <p className="font-bold">⚠️ Information sur les produits numériques téléchargeables :</p>
                <p>
                  Conformément à l&apos;article L221-28 du Code de la consommation, s&apos;agissant d&apos;un contenu numérique fourni
                  sur un support immatériel et accessible en téléchargement immédiat après achat, l&apos;acheteur renonce
                  expressément à son droit de rétractation de 14 jours lors de la commande.{" "}
                  <strong>Aucun remboursement, retour ou échange n&apos;est possible une fois le produit mis à disposition.</strong>
                </p>
              </div>
            </section>

            {/* Contact */}
            <div className="bg-stone-50 rounded-xl p-5 text-center text-sm text-stone-600 space-y-1">
              <p>
                Besoin d&apos;aide ou d&apos;information complémentaire ? Écrivez-nous à :{" "}
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-amber-600 font-semibold hover:underline"
                >
                  {siteConfig.supportEmail}
                </a>
              </p>
              <p className="text-xs text-stone-400">© 2026 alldigicraft.fr — Tous droits réservés.</p>
            </div>

            {/* Footer note */}
            <div className="pt-4 border-t border-stone-100 text-xs text-stone-400 flex flex-wrap justify-between gap-2">
              <span>
                <Link href="/" className="hover:text-amber-600 transition-colors">alldigicraft.fr</Link>
                {" — "}
                <Link href="/disclaimer" className="hover:text-amber-600 transition-colors">Disclaimer &amp; Transparence</Link>
              </span>
              <span>Page 1 / 1</span>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
