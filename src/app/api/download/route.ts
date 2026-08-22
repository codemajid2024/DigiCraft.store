import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Mapping of secure virtual file keys to protected local filenames
const PROTECTED_FILES: Record<string, { fileName: string; downloadName: string }> = {
  guide: {
    fileName: "mon_enfant_pleure_a_ecole.pdf",
    downloadName: "Mon-Enfant-Pleure-A-L-Ecole-Guide-Complet.pdf",
  },
  checklist: {
    fileName: "Check-List.pdf",
    downloadName: "Check-list-Rentree-Sereine.pdf",
  },
  motsdoux: {
    fileName: "mots_doux_lunchbox.pdf",
    downloadName: "Cartes-Mots-Doux-Sac-Et-Lunchbox.pdf",
  },
  cards: {
    fileName: "mots_doux_lunchbox.pdf",
    downloadName: "Cartes-Mots-Doux-Sac-Et-Lunchbox.pdf",
  },
  apropos: {
    fileName: "a_propos_de_ce_guide.pdf",
    downloadName: "A-Propos-Et-Conseils-D-Utilisation.pdf",
  },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { fileType, orderId } = body;

    // Validate request
    if (!fileType || !PROTECTED_FILES[fileType]) {
      return NextResponse.json(
        { error: "Fichier introuvable ou non autorise" },
        { status: 400 }
      );
    }

    // Require an order reference (orderId)
    if (!orderId || typeof orderId !== "string" || orderId.trim().length < 3) {
      return NextResponse.json(
        { error: "Commande non valide ou acces expire" },
        { status: 403 }
      );
    }

    const targetFile = PROTECTED_FILES[fileType];
    const filePath = path.join(
      process.cwd(),
      "storage",
      "private_downloads",
      targetFile.fileName
    );

    // Read protected file securely from server storage
    const fileBuffer = await fs.readFile(filePath);

    // Return binary stream with secure non-cachable attachment headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${targetFile.downloadName}"`,
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "private, no-store, no-cache, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Secure Download Error:", error);
    return NextResponse.json(
      { error: "Erreur lors du telechargement securise du fichier." },
      { status: 500 }
    );
  }
}

// Block any unauthorized direct GET requests without order context
export async function GET() {
  return NextResponse.json(
    { error: "Acces interdit. Telechargement uniquement autorise apres commande valide." },
    { status: 403 }
  );
}
