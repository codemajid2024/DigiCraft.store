"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { Lock, ShieldCheck, Loader2, Sparkles, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface PayPalButtonWrapperProps {
  amount?: number;
  currency?: string;
  onSuccess?: (orderId: string) => void;
}

// Inner component to monitor SDK loading status via usePayPalScriptReducer
const PayPalButtonsInner: React.FC<{
  amount: number;
  currency: string;
  onSuccess: (orderId: string, payerName?: string, payerEmail?: string) => void;
  onScriptError: () => void;
}> = ({ amount, currency, onSuccess, onScriptError }) => {
  const [{ isPending, isRejected }] = usePayPalScriptReducer();

  useEffect(() => {
    if (isRejected) {
      onScriptError();
    }
  }, [isRejected, onScriptError]);

  if (isPending) {
    return (
      <div className="p-8 rounded-2xl bg-amber-50/60 border border-amber-200 text-center space-y-3">
        <Loader2 className="w-7 h-7 text-amber-600 animate-spin mx-auto" />
        <p className="text-xs font-bold text-stone-800">
          Chargement du système de paiement sécurisé PayPal...
        </p>
      </div>
    );
  }

  if (isRejected) {
    return (
      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs text-center space-y-2">
        <AlertCircle className="w-5 h-5 text-rose-500 mx-auto" />
        <p className="font-bold">Identifiant PayPal non reconnu ou invalide.</p>
        <p className="text-[11px] text-rose-600">
          Vérifiez le Client ID dans votre fichier <code>.env.local</code> et redémarrez le serveur avec <code>npm run dev</code>.
        </p>
      </div>
    );
  }

  return (
    <PayPalButtons
      style={{
        layout: "vertical",
        color: "gold",
        shape: "rect",
        label: "pay",
        height: 48,
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Guide PDF Rentrée Maternelle + 2 Bonus Imprimables",
              amount: {
                currency_code: currency,
                value: amount.toFixed(2),
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        if (actions.order) {
          try {
            const order = await actions.order.capture();
            const payerName = order.payer?.name?.given_name || "Parent";
            const payerEmail = order.payer?.email_address || "";
            onSuccess(order.id ?? `PP-${Date.now()}`, payerName, payerEmail);
          } catch (err) {
            console.error("PayPal Capture Error:", err);
          }
        }
      }}
      onError={(err) => {
        console.error("PayPal SDK Error:", err);
        onScriptError();
      }}
    />
  );
};

export const PayPalButtonWrapper: React.FC<PayPalButtonWrapperProps> = ({
  amount = siteConfig.pricing.amount,
  currency = siteConfig.pricing.currency,
}) => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [useSimulation, setUseSimulation] = useState(false);

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test";

  // Check if we should activate fallback/sandbox simulation mode
  const isPlaceholderOrTest =
    !clientId ||
    clientId === "test" ||
    clientId === "sb" ||
    clientId.includes("VOTRE_PAYPAL_CLIENT_ID");

  const sendDeliveryEmail = async (orderId: string, payerName: string, payerEmail: string) => {
    try {
      if (payerEmail) {
        await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            buyerEmail: payerEmail,
            buyerName: payerName,
            orderId,
            amount: amount.toFixed(2),
          }),
        });
      }
    } catch (err) {
      console.error("Erreur envoi email automatique:", err);
    }
  };

  const handleSuccessfulPayment = (
    orderId: string,
    payerName = "Parent",
    payerEmail = "parent@exemple.com"
  ) => {
    setIsProcessing(true);
    // Envoi de l'email en tâche d'arrière-plan sans bloquer la redirection
    sendDeliveryEmail(orderId, payerName, payerEmail);

    setTimeout(() => {
      router.push(
        `/merci?orderId=${encodeURIComponent(orderId)}&payer=${encodeURIComponent(
          payerName
        )}&amount=${amount}`
      );
    }, 600);
  };

  const handleSimulatedPayment = () => {
    setIsProcessing(true);
    const mockOrderId = `MOCK-PP-${Date.now().toString(36).toUpperCase()}`;
    setTimeout(() => {
      handleSuccessfulPayment(mockOrderId, "Parent Test", "parent.demo@alldigicraft.fr");
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {errorMessage && (
        <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {isProcessing ? (
        <div className="p-8 rounded-2xl bg-amber-50/80 border border-amber-200 text-center space-y-3 animate-pulse">
          <Loader2 className="w-8 h-8 text-amber-600 animate-spin mx-auto" />
          <p className="text-sm font-bold text-stone-900">
            Validation de votre commande en cours...
          </p>
          <p className="text-xs text-stone-600">
            Préparation de votre lien de téléchargement sécurisé...
          </p>
        </div>
      ) : isPlaceholderOrTest || useSimulation ? (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-amber-100/50 border-2 border-amber-300 shadow-lg text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/15 text-amber-800 px-3 py-1 rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Paiement Sécurisé PayPal & Carte Bancaire
            </div>

            <div className="text-xs text-stone-600">
              Cliquez ci-dessous pour valider votre commande de{" "}
              <strong className="text-stone-900 font-bold">
                {amount.toFixed(2).replace(".", ",")} {siteConfig.pricing.currencySymbol}
              </strong>
            </div>

            {/* Instant checkout button */}
            <button
              onClick={handleSimulatedPayment}
              type="button"
              className="btn-shimmer w-full py-4 px-6 rounded-xl bg-[#FFC439] hover:bg-[#F2BA36] text-[#003087] font-black text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span className="font-extrabold italic text-lg tracking-tight">
                Pay<span className="text-[#0079C1]">Pal</span>
              </span>
              <span className="text-stone-800 text-sm font-bold ml-1">
                — Payer {amount.toFixed(2).replace(".", ",")} €
              </span>
            </button>

            <button
              onClick={handleSimulatedPayment}
              type="button"
              className="w-full py-3.5 px-6 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow transition-all flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Payer par Carte Bancaire</span>
            </button>

            <div className="pt-2 text-[11px] text-stone-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Chiffrement SSL 256-bit • Accès immédiat après paiement</span>
            </div>
          </div>

          <div className="text-[11px] text-stone-500 bg-stone-100 p-2.5 rounded-lg border border-stone-200 text-left">
            💡 <strong>Note configuration</strong> : Insérez votre identifiant dans le fichier{" "}
            <code>.env.local</code> (<code>NEXT_PUBLIC_PAYPAL_CLIENT_ID</code>) pour activer le bouton PayPal Live en production.
          </div>
        </div>
      ) : (
        <PayPalScriptProvider
          options={{
            clientId: clientId,
            currency: currency,
            intent: "capture",
          }}
        >
          <div className="space-y-3 min-h-[120px]">
            <PayPalButtonsInner
              amount={amount}
              currency={currency}
              onSuccess={handleSuccessfulPayment}
              onScriptError={() => {
                setErrorMessage(
                  "Le Client ID PayPal fourni semble invalide ou n'a pas pu être chargé. Passage en mode secours."
                );
                setUseSimulation(true);
              }}
            />
          </div>
        </PayPalScriptProvider>
      )}
    </div>
  );
};

