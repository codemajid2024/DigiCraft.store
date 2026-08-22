import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Politique de Confidentialité - AllDigiCraft",
  description: "Politique de protection des données personnelles et respect de la vie privée.",
};

export default function ConfidentialitePage() {
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
              Vie Privée & RGPD
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-stone-900">
              Politique de Confidentialité
            </h1>
            <p className="text-xs text-stone-500">
              Dernière mise à jour : 21 Août 2026
            </p>
          </div>

          <div className="prose prose-stone max-w-none text-sm text-stone-700 space-y-6 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                1. Données collectées
              </h2>
              <p>
                Nous collectons uniquement les informations strictement indispensables au traitement de votre commande et à la délivrance de votre guide numérique (adresse email, nom/prénom transmis lors de la transaction sécurisée PayPal).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                2. Traitement des paiements
              </h2>
              <p>
                Aucune coordonnée bancaire (numéro de carte de crédit, cryptogramme) n&apos;est stockée sur nos serveurs. L&apos;ensemble du traitement financier est délégué à notre prestataire de paiement sécurisé <strong>PayPal</strong>, certifié conforme aux normes de sécurité PCI-DSS.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                3. Finalité de l&apos;utilisation des données
              </h2>
              <p>
                Vos informations sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Générer et vous délivrer l&apos;accès à votre fichier PDF</li>
                <li>Assurer le service après-vente et le support technique par email</li>
                <li>Respecter nos obligations légales et comptables</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-display font-bold text-lg text-stone-900">
                4. Vos droits (RGPD)
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer ce droit à tout moment par simple email à : <strong>{siteConfig.supportEmail}</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
