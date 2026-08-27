import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Politique de Confidentialité & Protection des Données Personnelles (RGPD) - alldigicraft.fr",
  description: "Politique de Confidentialité & Protection des Données Personnelles (RGPD) de alldigicraft.fr.",
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
              Vie Privée &amp; RGPD
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-stone-900">
              Politique de Confidentialité &amp; Protection des Données Personnelles (RGPD)
            </h1>
            <p className="text-xs text-stone-500">
              Dernière mise à jour : 2026 — alldigicraft.fr — Tous droits réservés.
            </p>
          </div>

          <div className="prose prose-stone max-w-none text-sm text-stone-700 space-y-8 leading-relaxed">

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                1. RESPONSABLE DU TRAITEMENT DES DONNÉES
              </h2>
              <p>
                Le site <strong>alldigicraft.fr</strong> s&apos;engage à protéger la vie privée des utilisateurs de son site et de ses clients, conformément au
                Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) et à la loi Informatique et Libertés.
              </p>
              <p>
                Pour toute question relative à la gestion de vos données personnelles, vous pouvez contacter le responsable à l&apos;adresse
                suivante : <strong>contact@alldigicraft.fr</strong>
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                2. DONNÉES COLLECTÉES &amp; FINALITÉS
              </h2>
              <p>
                Dans le cadre de l&apos;exploitation du site et de la vente de produits numériques, nous collectons les données strictes et
                nécessaires aux finalités suivantes :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Gestion des commandes et livraison des produits :</strong> Nom, prénom, adresse e-mail, adresse de facturation. Ces
                  données sont indispensables pour vous envoyer vos accès ou vos fichiers PDF téléchargeables.
                </li>
                <li>
                  <strong>Paiement sécurisé :</strong> Les informations de paiement (carte bancaire) sont traitées de manière totalement chiffrée par
                  nos prestataires de paiement sécurisé (Stripe/PayPal). Aucune donnée bancaire n&apos;est stockée sur nos serveurs.
                </li>
                <li>
                  <strong>Support client &amp; Communication :</strong> Historique de vos échanges avec notre support par e-mail pour nous permettre d&apos;assurer un suivi
                  personnalisé.
                </li>
                <li>
                  <strong>Newsletter &amp; Offres promotionnelles :</strong> Avec votre consentement explicite, votre adresse e-mail peut être utilisée
                  pour vous envoyer des conseils et informations. Vous pouvez vous désinscrire à tout moment via le lien figurant en
                  bas de chaque e-mail.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                3. BASE LÉGALE DU TRAITEMENT
              </h2>
              <p>La collecte de vos données repose sur les bases légales suivantes :</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>L&apos;exécution du contrat :</strong> Nécessaire pour traiter et livrer votre commande de produits numériques.
                </li>
                <li>
                  <strong>Le consentement :</strong> Notamment pour l&apos;envoi d&apos;e-mails d&apos;information ou de newsletters.
                </li>
                <li>
                  <strong>L&apos;obligation légale :</strong> Pour la conservation des factures et pièces comptables.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                4. DESTINATAIRES &amp; PARTAGE DES DONNÉES
              </h2>
              <p>
                Vos données personnelles ne sont <strong>jamais vendues, louées ou cédées à des tiers</strong> à des fins commerciales. Elles sont
                transmises uniquement à nos sous-traitants techniques intervenant dans le fonctionnement du site (hébergeur web,
                plateforme de paiement, outil d&apos;envoi d&apos;e-mails) soumis aux obligations strictes de confidentialité du RGPD.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                5. DURÉE DE CONSERVATION DES DONNÉES
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Données relatives aux commandes :</strong> Conservées pendant la durée légale comptable (10 ans).
                </li>
                <li>
                  <strong>Données de prospection / Newsletter :</strong> Conservées pendant 3 ans à compter du dernier contact ou jusqu&apos;à votre
                  demande de désinscription.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                6. VOS DROITS (RGPD)
              </h2>
              <p>
                Conformément à la réglementation européenne, vous disposez des droits suivants concernant vos données
                personnelles :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Droit d&apos;accès, de rectification et de mise à jour.</li>
                <li>Droit à l&apos;effacement (droit à l&apos;oubli) de vos données.</li>
                <li>Droit à la limitation ou à l&apos;opposition au traitement.</li>
                <li>Droit à la portabilité de vos données.</li>
              </ul>
              <p>
                Pour exercer l&apos;un de ces droits, il vous suffit de nous envoyer un e-mail à :{" "}
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-amber-600 font-semibold hover:underline"
                >
                  {siteConfig.supportEmail}
                </a>
              </p>
            </section>

            {/* Footer note */}
            <div className="pt-6 border-t border-stone-100 text-xs text-stone-400 flex flex-wrap justify-between gap-2">
              <span>
                <Link href="/" className="hover:text-amber-600 transition-colors">alldigicraft.fr</Link>
                {" → "}
                <Link href="/confidentialite" className="hover:text-amber-600 transition-colors">Politique de Confidentialité</Link>
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
