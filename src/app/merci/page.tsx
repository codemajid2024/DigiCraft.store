"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  Download,
  FileCheck,
  Smartphone,
  Printer,
  Mail,
  Heart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function MerciContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || `CMD-${Math.floor(100000 + Math.random() * 900000)}`;
  const payerName = searchParams.get("payer") || "Cher Parent";
  const [downloadCount, setDownloadCount] = useState(0);

  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  useEffect(() => {
    // Launch celebratory confetti upon successful purchase
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F59E0B", "#F97316", "#10B981", "#E11D48"],
      });
    } catch (e) {
      console.log("Confetti effect skipped");
    }
  }, []);

  const handleSecureDownload = async (
    fileType: "guide" | "checklist" | "motsdoux" | "cards" | "apropos",
    defaultFileName: string
  ) => {
    try {
      setDownloadingFile(fileType);
      setDownloadError(null);

      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileType,
          orderId,
        }),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(
          errJson.error || "Échec du téléchargement sécurisé. Veuillez réessayer."
        );
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = defaultFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      setDownloadCount((prev) => prev + 1);
    } catch (err: any) {
      console.error("Secure download error:", err);
      setDownloadError(err.message || "Une erreur est survenue.");
    } finally {
      setDownloadingFile(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Success Badge & Headline */}
      <div className="text-center space-y-4 mb-10">
        <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10 animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3.5 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          Paiement Confirmé avec Succès
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
          Merci {payerName} pour votre confiance ! 💛
        </h1>
        <p className="text-stone-600 text-base max-w-xl mx-auto leading-relaxed">
          Votre commande a bien été validée. Vos fichiers PDF sont prêts et disponibles ci-dessous en téléchargement direct et sécurisé.
        </p>
      </div>

      {/* Main Download Card */}
      <div className="bg-white rounded-3xl border-2 border-amber-300 shadow-xl overflow-hidden p-6 sm:p-8 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2 pb-6 border-b border-stone-100">
          <div>
            <span className="text-xs text-stone-400 font-medium">Référence commande :</span>
            <div className="font-mono font-bold text-sm text-stone-800">{orderId}</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              Accès protégé & direct
            </span>
          </div>
        </div>

        {/* Download Buttons Section */}
        <div className="py-6 space-y-4">
          <h3 className="font-display font-black text-lg text-stone-900">
            📥 Vos fichiers à télécharger :
          </h3>

          {downloadError && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
              {downloadError}
            </div>
          )}

          {/* Main Ebook Download */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left w-full sm:w-auto">
              <div className="relative w-16 h-20 rounded-xl overflow-hidden shadow-md shrink-0 border border-amber-300">
                <Image
                  src="/assets/ebook-cover.jpg"
                  alt="Guide PDF"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                  Guide Ebook « Mon enfant pleure à l&apos;école »
                </h4>
                <p className="text-xs text-stone-500">
                  Fichier PDF complet (29 pages) • Haute Résolution Sécurisée
                </p>
              </div>
            </div>

            <button
              onClick={() => handleSecureDownload("guide", "Mon-Enfant-Pleure-A-L-Ecole-Guide-Complet.pdf")}
              disabled={downloadingFile === "guide"}
              className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-warmth-500 hover:from-amber-600 hover:to-warmth-600 disabled:opacity-60 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>
                {downloadingFile === "guide" ? "Téléchargement en cours..." : "Télécharger le Guide PDF"}
              </span>
            </button>
          </div>

          {/* Bonus #1: Checklist */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left w-full sm:w-auto">
              <div className="relative w-14 h-18 rounded-lg overflow-hidden shadow-sm shrink-0 border border-stone-300">
                <Image
                  src="/assets/checklist-preview.jpg"
                  alt="Check-list Rentrée"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h5 className="font-bold text-stone-900 text-sm">
                  Bonus #1 : Check-list « Rentrée Sereine » à imprimer
                </h5>
                <p className="text-[11px] text-stone-500">Format A4 prêt à coller sur le frigo</p>
              </div>
            </div>

            <button
              onClick={() => handleSecureDownload("checklist", "Check-list-Rentree-Sereine.pdf")}
              disabled={downloadingFile === "checklist"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-60 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>
                {downloadingFile === "checklist" ? "Chargement..." : "Télécharger la Check-list"}
              </span>
            </button>
          </div>

          {/* Bonus #2: Notes doux & Lunchbox */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left w-full sm:w-auto">
              <div className="relative w-14 h-18 rounded-lg overflow-hidden shadow-sm shrink-0 border border-stone-300">
                <Image
                  src="/assets/mockup-phone.jpg"
                  alt="Mots doux cartable et lunchbox"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h5 className="font-bold text-stone-900 text-sm">
                  Bonus #2 : Cartes de « Mots Doux & Lunchbox »
                </h5>
                <p className="text-[11px] text-stone-500">À découper pour le cartable, doudou ou boîte à goûter</p>
              </div>
            </div>

            <button
              onClick={() => handleSecureDownload("motsdoux", "Cartes-Mots-Doux-Sac-Et-Lunchbox.pdf")}
              disabled={downloadingFile === "motsdoux"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-60 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>
                {downloadingFile === "motsdoux" ? "Chargement..." : "Télécharger les Cartes"}
              </span>
            </button>
          </div>

          {/* Bonus #3 / Resource: A propos & Transparence */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left w-full sm:w-auto">
              <div className="relative w-14 h-18 rounded-lg overflow-hidden shadow-sm shrink-0 border border-stone-300">
                <Image
                  src="/assets/mockup-ipad.jpg"
                  alt="Fiche conseils et transparence"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h5 className="font-bold text-stone-900 text-sm">
                  Fiche Bonus #3 : « À propos de ce guide & Conseils »
                </h5>
                <p className="text-[11px] text-stone-500">Transparence, repères et conseils pratiques d&apos;utilisation</p>
              </div>
            </div>

            <button
              onClick={() => handleSecureDownload("apropos", "A-Propos-Et-Conseils-D-Utilisation.pdf")}
              disabled={downloadingFile === "apropos"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-60 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>
                {downloadingFile === "apropos" ? "Chargement..." : "Télécharger la Fiche"}
              </span>
            </button>
          </div>
        </div>

        {downloadCount > 0 && (
          <div className="mt-2 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Votre téléchargement a commencé ! Vérifiez votre dossier &quot;Téléchargements&quot;.</span>
          </div>
        )}
      </div>

      {/* Reading & Device Instructions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-sm space-y-3">
          <div className="flex items-center gap-2.5 text-amber-700 font-bold text-sm">
            <Smartphone className="w-5 h-5" />
            <span>Lire sur Smartphone ou Tablette</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Ouvrez simplement le fichier téléchargé avec votre application par défaut (Fichiers, Apple Livres, Adobe Reader ou Google Drive). Vous pouvez également l&apos;ajouter à votre écran d&apos;accueil.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-sm space-y-3">
          <div className="flex items-center gap-2.5 text-amber-700 font-bold text-sm">
            <Printer className="w-5 h-5" />
            <span>Imprimer la Check-list</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Pour la check-list du matin, nous vous conseillons de l&apos;imprimer au format A4 en couleur ou noir et blanc, et de la plastifier ou l&apos;aimanter sur votre réfrigérateur.
          </p>
        </div>
      </div>

      {/* Email Fallback & Support Notice */}
      <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 text-center space-y-3">
        <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center">
          <Mail className="w-5 h-5" />
        </div>
        <h4 className="font-display font-bold text-stone-900 text-base">
          Besoin d&apos;aide ou lien non reçu ?
        </h4>
        <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
          Enregistrez cette page dans vos favoris. Si vous rencontrez la moindre difficulté pour ouvrir votre fichier, écrivez-nous à{" "}
          <a
            href={`mailto:${siteConfig.supportEmail}?subject=Support Téléchargement Guide ${orderId}`}
            className="font-bold text-amber-700 underline"
          >
            {siteConfig.supportEmail}
          </a>{" "}
          en mentionnant votre référence <strong>{orderId}</strong>.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-amber-600 transition-colors"
          >
            <span>Retourner à l&apos;accueil du site</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function MerciPage() {
  return (
    <main className="min-h-screen flex flex-col bg-cream">
      <Header />
      <div className="flex-1">
        <Suspense
          fallback={
            <div className="py-24 text-center text-stone-500">
              Chargement de votre commande...
            </div>
          }
        >
          <MerciContent />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
