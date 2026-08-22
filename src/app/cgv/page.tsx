import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Conditions Générales de Vente (CGV) - AllDigiCraft",
  description: "Conditions Générales de Vente pour le guide numérique et ebook PDF DigiCraft.",
};

export default function CGVPage() {
  return (
    <main className="min-h-screen flex flex-col bg-cream">
      <Header />
      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-amber-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à la page principale</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-stone-100 pb-6">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Mentions Contractuelles
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-stone-900">
              Conditions Générales de Vente (CGV)
            </h1>
            <p className="text-xs text-stone-500">
              Dernière mise à jour : 21 Août 2026 • Produits Numériques
            </p>
          </div>

          <div className="prose prose-stone max-w-none text-sm text-stone-700 space-y-6 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                1. Objet et champ d&apos;application
              </h2>
              <p>
                Les présentes Conditions Générales de Vente régissent l&apos;ensemble des ventes conclues sur le site <strong>AllDigiCraft</strong> concernant l&apos;achat du guide numérique au format PDF : <em>« Mon enfant pleure à l&apos;école »</em> et ses bonus associés.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                2. Nature du produit et livraison
              </h2>
              <p>
                Le produit vendu est un <strong>contenu numérique téléchargeable (fichier PDF)</strong>. Aucun support matériel ou livre papier n&apos;est expédié par voie postale.
              </p>
              <p>
                La mise à disposition s&apos;effectue immédiatement après validation du paiement en ligne via un lien de téléchargement direct accessible sur la page de confirmation de commande.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                3. Prix et modalités de paiement
              </h2>
              <p>
                Le prix du produit est indiqué en Euros (€) Toutes Taxes Comprises (TTC). Le montant en vigueur est de <strong>{siteConfig.pricing.amountStr} €</strong>.
              </p>
              <p>
                Le règlement s&apos;effectue en ligne de manière sécurisée par carte bancaire ou compte PayPal via la plateforme sécurisée de paiement PayPal.
              </p>
            </section>

            <section className="space-y-2 p-5 rounded-2xl bg-amber-50/80 border border-amber-200">
              <h2 className="font-display font-bold text-lg text-stone-900">
                4. Droit de rétractation et produits numériques
              </h2>
              <p className="text-xs sm:text-sm text-stone-800">
                Conformément à l&apos;article L. 221-28 13° du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d&apos;un contenu numérique sans support matériel dont l&apos;exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.
              </p>
              <p className="text-xs sm:text-sm font-bold text-stone-900 pt-1">
                En validant votre achat et en accédant au téléchargement immédiat du PDF, vous acceptez expressément que l&apos;exécution commence dès la confirmation et renoncez à votre droit de rétractation. Aucun remboursement ne pourra être accordé après livraison du lien de téléchargement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                5. Propriété intellectuelle et usage personnel
              </h2>
              <p>
                L&apos;ensemble des textes, illustrations, maquettes et contenus du guide PDF sont protégés par le droit d&apos;auteur. L&apos;achat confère un droit d&apos;utilisation strictement personnel et privé. Toute reproduction, revente, partage public ou diffusion non autorisée est formellement interdite.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                6. Service client et contact
              </h2>
              <p>
                Pour toute question ou demande d&apos;assistance liée au téléchargement de votre guide, notre support est à votre disposition par courrier électronique : <strong>{siteConfig.supportEmail}</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
