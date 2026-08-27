import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { buyerEmail, buyerName, orderId, amount } = body;

    if (!buyerEmail || !orderId) {
      return NextResponse.json(
        { error: "Email de l'acheteur ou identifiant de commande manquant." },
        { status: 400 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.alldigicraft.fr";
    const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "contact@alldigicraft.fr";

    // Lien de récupération direct vers la page de téléchargement
    const downloadLink = `${siteUrl}/merci?orderId=${encodeURIComponent(
      orderId
    )}&payer=${encodeURIComponent(buyerName || "Parent")}&amount=${encodeURIComponent(
      amount || "7.90"
    )}`;

    // Configuration du transporteur SMTP (si configuré dans .env.local)
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpSecure = process.env.SMTP_SECURE === "true";

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn(
        `[EMAIL SIMULATION] SMTP non configuré dans .env.local. Email simulé pour ${buyerEmail} avec lien: ${downloadLink}`
      );
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Email simulé avec succès (SMTP en attente de configuration)",
        downloadLink,
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Votre commande - alldigicraft.fr</title>
</head>
<body style="margin:0;padding:0;background-color:#fbfaf8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#292524;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#fbfaf8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:20px;border:1px solid #e7e5e4;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.05);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg, #1c1917, #292524);padding:32px 24px;text-align:center;">
              <span style="display:inline-block;font-size:24px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">
                <span style="color:#fbbf24;">All</span>DigiCraft
              </span>
              <p style="margin:8px 0 0;color:#d6d3d1;font-size:13px;">
                Votre guide numérique et bonus prêts à télécharger
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 28px;">
              <h2 style="margin:0 0 16px;font-size:20px;font-weight:800;color:#1c1917;">
                Merci pour votre confiance, ${buyerName || "Cher Parent"} ! 💛
              </h2>
              <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#57534e;">
                Votre commande a été confirmée avec succès. Vous trouverez ci-dessous votre accès sécurisé permanent pour télécharger votre guide PDF <strong>« Mon enfant pleure à l'école »</strong> ainsi que tous vos bonus offerts.
              </p>

              <!-- Order Details Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#fef3c7;border:1px solid #fde68a;border-radius:12px;margin:20px 0;padding:16px;">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#92400e;text-transform:uppercase;">
                      Détails de la commande
                    </p>
                    <p style="margin:0;font-size:13px;color:#78350f;">
                      <strong>Référence :</strong> ${orderId}<br/>
                      <strong>Montant :</strong> ${amount ? `${amount} €` : "7,90 €"}<br/>
                      <strong>Format :</strong> Fichiers PDF Universels (Haute Résolution)
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;">
                <tr>
                  <td align="center">
                    <a href="${downloadLink}" target="_blank" style="display:inline-block;background:#f59e0b;color:#ffffff;font-size:15px;font-weight:800;text-decoration:none;padding:14px 28px;border-radius:12px;box-shadow:0 4px 12px rgba(245,158,11,0.35);">
                      📥 Télécharger mon Guide & Mes Bonus
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Recovery Link -->
              <p style="margin:20px 0 0;font-size:12px;line-height:1.5;color:#78716c;">
                <strong>Conseil :</strong> Conservez précieusement cet e-mail. Si vous perdez vos fichiers, vous pourrez toujours les ré-accéder grâce à ce lien :<br/>
                <a href="${downloadLink}" style="color:#d97706;word-break:break-all;">${downloadLink}</a>
              </p>
            </td>
          </tr>

          <!-- What's included list -->
          <tr>
            <td style="background:#fafaf9;padding:24px 28px;border-top:1px solid #f5f5f4;">
              <h3 style="margin:0 0 12px;font-size:14px;font-weight:800;color:#1c1917;">
                Ce que comprend votre achat :
              </h3>
              <ul style="margin:0;padding-left:20px;font-size:13px;line-height:1.7;color:#57534e;">
                <li><strong>Guide complet PDF (29 pages)</strong> : Comprendre et apaiser l'angoisse de séparation</li>
                <li><strong>Bonus #1</strong> : Check-list « Rentrée Sereine » à imprimer (format frigo)</li>
                <li><strong>Bonus #2</strong> : Cartes de « Mots Doux & Lunchbox » à découper</li>
                <li><strong>Bonus #3</strong> : Fiche « À propos de ce guide & Conseils »</li>
              </ul>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 28px;text-align:center;font-size:12px;color:#a8a29e;border-top:1px solid #f5f5f4;">
              <p style="margin:0 0 8px;">
                Une question ou besoin d'assistance ? Répondez directement à cet e-mail ou écrivez à <a href="mailto:${supportEmail}" style="color:#d97706;text-decoration:none;">${supportEmail}</a>
              </p>
              <p style="margin:0;">
                © 2026 AllDigiCraft — <a href="${siteUrl}" style="color:#78716c;">www.alldigicraft.fr</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    await transporter.sendMail({
      from: `"AllDigiCraft" <${process.env.SMTP_FROM || smtpUser || supportEmail}>`,
      to: buyerEmail,
      subject: `💛 Vos fichiers PDF : Guide « Mon enfant pleure à l'école » (${orderId})`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Email de confirmation et de téléchargement envoyé avec succès.",
    });
  } catch (error: any) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer l'email.", details: error.message },
      { status: 500 }
    );
  }
}
