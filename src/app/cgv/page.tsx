import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Conditions Generales de Vente (CGV) - alldigicraft.fr",
  description: "Conditions Generales de Vente pour les produits numeriques de alldigicraft.fr.",
};

export default function CGVPage() {
  return (
    <main className="min-h-screen flex flex-col bg-cream">
      <Header />
      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-amber-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Retour a la page principale</span>
        </Link>
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-stone-100 pb-6">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Mentions Contractuelles</span>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-stone-900">Conditions Generales de Vente (CGV)</h1>
            <p className="text-xs text-stone-500">Conditions Generales de Vente (CGV) - Produits Numeriques</p>
          </div>
          <div className="prose prose-stone max-w-none text-sm text-stone-700 space-y-8 leading-relaxed">

            {/* Article 1 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                ARTICLE 1 &mdash; OBJET &amp; CHAMP D&apos;APPLICATION
              </h2>
              <p>
                Les pr&eacute;sentes Conditions G&eacute;n&eacute;rales de Vente (CGV) r&eacute;gissent l&apos;ensemble des ventes conclues sur le site Internet
                <strong> alldigicraft.fr</strong> concernant l&apos;achat de produits (e-guides, e-books) et tout contenu d&apos;une offre de vente allant de l&apos;obtention de Clien des produits CGV.
              </p>
              <p>
                Toute commande pass&eacute;e sur le site implique l&apos;acceptation pleine et enti&egrave;re des pr&eacute;sentes CGV par le Client lors de la validation de la commande.
              </p>
            </section>

            {/* Article 2 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                ARTICLE 2 &mdash; PRODUITS &amp; CARACT&Eacute;RISTIQUES
              </h2>
              <p>
                Les produits propos&eacute;s &agrave; la vente sont des <strong>biens num&eacute;riques immat&eacute;riels t&eacute;l&eacute;chargeables</strong>. Les caract&eacute;ristiques essentielles
                de chaque produit sont pr&eacute;sent&eacute;es sur la page de vente d&eacute;di&eacute;e du site.
              </p>
              <p>
                Les guides sont fournis &agrave; titre informatif et d&apos;accompagnement parental. Ils ne constituent en aucun cas des avis, diagnostics ou
                traitements m&eacute;dicaux, p&eacute;diatriques ou psychologiques.
              </p>
            </section>

            {/* Article 3 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                ARTICLE 3 &mdash; PRIX &amp; MODALIT&Eacute;S DE PAIEMENT
              </h2>
              <p>
                Les prix des produits sont indiqu&eacute;s en Euros (&euro;) toutes taxes comprises (TTC). L&apos;&eacute;diteur se r&eacute;serve le droit de modifier ses prix
                &agrave; tout moment, le prix applicable &eacute;tant celui indiqu&eacute; au moment de la validation de la commande par le Client.
              </p>
              <p>
                Le r&egrave;glement s&apos;effectue en ligne de fa&ccedil;on s&eacute;curis&eacute;e par <strong>carte bancaire ou compte PayPal</strong> via la plateforme s&eacute;curis&eacute;e
                (Stripe / PayPal). Aucune donn&eacute;e bancaire du Client n&apos;est stock&eacute;e sur les serveurs du site.
              </p>
              <p>
                La commande est d&eacute;finitivement enregistr&eacute;e et le contrat conclu d&egrave;s r&eacute;ception du paiement int&eacute;gral confirm&eacute; par le prestataire de paiement.
              </p>
            </section>

            {/* Article 4 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                ARTICLE 4 &mdash; LIVRAISON &amp; ACC&Egrave;S AUX FICHIERS
              </h2>
              <p>
                Les produits num&eacute;riques t&eacute;l&eacute;chargeables b&eacute;n&eacute;ficient de modalit&eacute;s d&apos;ex&eacute;cution particuli&egrave;res adapt&eacute;es au paiement. Le Client
                re&ccedil;oit l&apos;acc&egrave;s &agrave; ses fichiers via :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Un lien de confirmation contenant le lien d&apos;acc&egrave;s aux fichiers PDF activ&eacute;.</li>
                <li>La page de confirmation de commande sur <strong>alldigicraft.fr</strong> qui affiche le lien de t&eacute;l&eacute;chargement directement accessible.</li>
              </ul>
              <p>
                En cas de probl&egrave;me lors du t&eacute;l&eacute;chargement, le Client peut contacter le support &agrave;{" "}
                <a href={`mailto:${siteConfig.supportEmail}`} className="text-amber-600 font-semibold hover:underline">
                  {siteConfig.supportEmail}
                </a>
              </p>
            </section>

            {/* Article 5 */}
            <section className="space-y-3 p-5 rounded-2xl bg-amber-50 border border-amber-200">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                ARTICLE 5 &mdash; R&Eacute;TRACTATION &amp; REMBOURSEMENT
              </h2>
              <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-xs text-amber-900">
                <p className="font-bold mb-1">&#9888;&#65039; Absence de droit de r&eacute;tractation (Produits Num&eacute;riques) :</p>
                <p>
                  Conform&eacute;ment &agrave; l&apos;article L221-28 du Code de la consommation, le droit de r&eacute;tractation ne peut &ecirc;tre exerc&eacute; pour
                  les contrats de fourniture d&apos;un contenu num&eacute;rique non fourni sur un support mat&eacute;riel d&egrave;s lors que l&apos;ex&eacute;cution a
                  commenc&eacute; avec l&apos;accord pr&eacute;alable expr&egrave;s du consommateur et renoncement express&eacute;ment &agrave; son droit de r&eacute;tractation. En validant
                  la commande, le Client accepte expressément ce renoncement et reconnaît l&apos;ex&eacute;cution imm&eacute;diate du contrat de fourniture du
                  contenu num&eacute;rique d&egrave;s l&apos;acc&egrave;s au lien de t&eacute;l&eacute;chargement.{" "}
                  <strong>Aucun remboursement, retour ou &eacute;change ne sera effectu&eacute; apr&egrave;s achat.</strong>
                </p>
              </div>
            </section>

            {/* Article 6 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                ARTICLE 6 &mdash; PROPRI&Eacute;T&Eacute; INTELLECTUELLE
              </h2>
              <p>
                L&apos;ensemble des contenus (textes, visuels, mise en page, fichiers PDF) des produits vendus sur <strong>alldigicraft.fr</strong> sont
                prot&eacute;g&eacute;s par le droit d&apos;auteur et sont la propri&eacute;t&eacute; exclusive de l&apos;&eacute;diteur et sont prot&eacute;g&eacute;s par les lois relatives &agrave; la propri&eacute;t&eacute;
                intellectuelle fran&ccedil;aise et internationale. Toute reproduction, revente, partage ou diffusion non autoris&eacute;e est strictement
                interdite sous peine de poursuites judiciaires.
              </p>
              <p>
                L&apos;achat d&apos;un produit num&eacute;rique sur <strong>alldigicraft.fr</strong> conf&egrave;re exclusivement un droit d&apos;usage personnel, non commercial
                et non transf&eacute;rable du produit achet&eacute;.
              </p>
            </section>

            {/* Article 7 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                ARTICLE 7 &mdash; RESPONSABILIT&Eacute; &amp; GARANTIE
              </h2>
              <p>
                L&apos;&eacute;diteur met tout en &oelig;uvre pour fournir des produits de qualit&eacute;. Sa responsabilit&eacute; ne saurait &ecirc;tre engag&eacute;e quant &agrave;
                l&apos;interpr&eacute;tation possible ou l&apos;utilisation des conseils contenus dans les guides, ni en cas de dommages indirects r&eacute;sultant de
                l&apos;utilisation des produits num&eacute;riques.
              </p>
              <p>
                Les contenus sont fournis &agrave; titre p&eacute;dagogique et informatif, con&ccedil;us comme des outils d&apos;accompagnement parental et ne remplacent
                pas une consultation m&eacute;dicale ou professionnelle aupr&egrave;s de personnes qualifi&eacute;es (p&eacute;diatre, p&eacute;dopsychiatre, m&eacute;decin de famille).
              </p>
            </section>

            {/* Page break */}
            <div className="border-t border-stone-100 pt-2 flex justify-between text-xs text-stone-400">
              <span>alldigicraft.fr &mdash; Conditions G&eacute;n&eacute;rales de Vente</span>
              <span>Page 1 / 2</span>
            </div>

            {/* Article 8 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-base text-stone-900 uppercase tracking-wide">
                ARTICLE 8 &mdash; DROIT APPLICABLE &amp; LITIGES
              </h2>
              <p>
                Les pr&eacute;sentes CGV sont soumises au droit fran&ccedil;ais. En cas de litige, une solution amiable sera recherch&eacute;e avant toute action
                judiciaire. &Agrave; d&eacute;faut d&apos;accord amiable, les tribunaux fran&ccedil;ais seront seuls comp&eacute;tents.
              </p>
            </section>

            {/* Contact */}
            <div className="bg-stone-50 rounded-xl p-5 text-center text-sm text-stone-600 space-y-1">
              <p>
                Pour toute information compl&eacute;mentaire, veuillez nous contacter &agrave; :{" "}
                <a href={`mailto:${siteConfig.supportEmail}`} className="text-amber-600 font-semibold hover:underline">
                  {siteConfig.supportEmail}
                </a>
              </p>
              <p className="text-xs text-stone-400">Derni&egrave;re mise &agrave; jour : 2026 &mdash; alldigicraft.fr &mdash; Tous droits r&eacute;serv&eacute;s.</p>
            </div>

            {/* Footer note */}
            <div className="pt-4 border-t border-stone-100 text-xs text-stone-400 flex flex-wrap justify-between gap-2">
              <span>
                <Link href="/" className="hover:text-amber-600 transition-colors">alldigicraft.fr</Link>
                {" \u2014 "}
                <Link href="/cgv" className="hover:text-amber-600 transition-colors">Conditions G&eacute;n&eacute;rales de Vente</Link>
              </span>
              <span>Page 2 / 2</span>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
