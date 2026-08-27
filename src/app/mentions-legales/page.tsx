import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Mentions Légales, CGV & Politique de Confidentialité - alldigicraft.fr",
  description: "Mentions légales, conditions générales de vente et politique de confidentialité (RGPD) de alldigicraft.fr.",
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
              Transparence &amp; Mentions Légales
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-stone-900">
              Mentions Légales
            </h1>
            <p className="text-xs text-stone-500">
              Mentions légales, CGV &amp; Politique de Confidentialité — Produit Numérique
            </p>
          </div>

          <div className="prose prose-stone max-w-none text-sm text-stone-700 space-y-8 leading-relaxed">
            {/* Clarification remboursement */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900">
              <p className="font-bold mb-1">⚠️ Clarification sur l&apos;absence de délai / remboursement :</p>
              <p>
                Conformément à l&apos;article L221-28 du Code de la consommation, les produits vendus sur <strong>alldigicraft.fr</strong> étant des
                contenus numériques fournis sur support immatériel et téléchargeables immédiatement après achat, <strong>le droit de
                rétractation et tout remboursement sont légalement exclus</strong> dès lors que le client a téléchargé ou pu voir le
                fichier ou commencé son utilisation.
              </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                1. MENTIONS LÉGALES &amp; IDENTIFICATION
              </h2>

              <h3 className="font-semibold text-stone-800 text-sm">Éditeur et Exploitant du Site</h3>
              <p>
                Le site accessible à l&apos;adresse <strong>https://www.alldigicraft.fr</strong> est édité et exploité sous le nom commercial
                <strong> alldigicraft.fr</strong>.
              </p>
              <ul className="list-none space-y-1 text-sm pl-2">
                <li><strong>• Nom commercial :</strong> alldigicraft.fr</li>
                <li>
                  <strong>• Activité :</strong> Vente de guides et contenus pédagogiques téléchargeables au format PDF.
                </li>
                <li>
                  <strong>• Contact support client :</strong> contact@alldigicraft.fr
                </li>
                <li>
                  <strong>• Informations légales de l&apos;hébergeur :</strong> Les coordonnées complètes de l&apos;entité légale ou du statut de l&apos;exploitant
                  peuvent être communiquées sur simple demande adressée à l&apos;e-mail du support.
                </li>
              </ul>

              <h3 className="font-semibold text-stone-800 text-sm mt-4">Hébergement du Site</h3>
              <p>
                Le site est hébergé sur des infrastructures d&apos;hébergement cloud assurant la haute disponibilité et l&apos;intégrité
                des données.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                2. CONDITIONS GÉNÉRALES DE VENTE &amp; EXÉCUTION NUMÉRIQUE
              </h2>

              <h3 className="font-semibold text-stone-800 text-sm">Objet Des Prestations</h3>
              <p>
                alldigicraft.fr commercialise des biens dématérialisés (fichiers au format PDF téléchargeables). Aucun produit
                physique n&apos;est expédié. Les guides sont accessibles via le lien de téléchargement fourni après achat.
              </p>

              <h3 className="font-semibold text-stone-800 text-sm mt-3">Absence de Droit de Rétractation et Absence de Remboursement</h3>

              <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-xs space-y-2">
                <p className="font-semibold text-stone-800">Article L.221-28 du Code de la Consommation</p>
                <p>
                  Le droit de rétractation de 14 jours ne peut pas être exercé pour les contrats de fourniture d&apos;un contenu numérique
                  non fourni sur un support matériel dont l&apos;exécution a commencé après accord préalable exprès du consommateur et
                  renoncement expressément à son droit de rétractation.
                </p>
              </div>

              <p>En validant sa commande et en procédant au paiement sur <strong>alldigicraft.fr</strong>, l&apos;acheteur :</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Consent expressément et en toute connaissance de cause à l&apos;exécution immédiate du contrat numérique.
                </li>
                <li>
                  Renonce explicitement à son droit de rétractation de 14 jours à compter de la date de la commande valide et du lien de
                  téléchargement généré.
                </li>
              </ul>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Aucune demande de retour, d&apos;échange, d&apos;annulation ou de remboursement ne peut être effectuée une fois les fichiers
                  téléchargés.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                3. CLAUSE DE NON-RESPONSABILITÉ (DISCLAIMER PÉDAGOGIQUE)
              </h2>

              <h3 className="font-semibold text-stone-800 text-sm">Nature des contenus et limites</h3>
              <p>
                Les guides, conseils et documents téléchargeables sur <strong>alldigicraft.fr</strong> sont des outils éducatifs et
                d&apos;accompagnement parental. Ils s&apos;appuient sur des principes généraux de pédagogie, de développement de l&apos;enfant
                (Montessori, approche positive, attachement, etc).
              </p>
              <p>
                Ils ne constituent en aucun cas un diagnostic médical, psychologique ou thérapeutique et ne remplacent pas
                une consultation auprès d&apos;un professionnel de santé diplômé (pédiatre, pédopsychiatre, médecin de famille).
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                4. POLITIQUE DE CONFIDENTIALITÉ (RGPD)
              </h2>

              <h3 className="font-semibold text-stone-800 text-sm">Données Personnelles</h3>
              <p>
                Les données personnelles collectées sont l&apos;e-mail de l&apos;acheteur à des fins de livraison et à la délivrance de l&apos;accès
                automatique au lien de téléchargement (conformément au paiement). Aucune donnée bancaire n&apos;est stockée ni traitée
                directement par alldigicraft.fr.
              </p>

              <h3 className="font-semibold text-stone-800 text-sm mt-3">Droits des Utilisateurs</h3>
              <p>
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données
                personnelles sur simple demande envoyée à :{" "}
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
                Document légal mis à jour — 2026 © alldigicraft.fr — Documents réservés
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
