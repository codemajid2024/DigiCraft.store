const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

function sanitizeText(str) {
  if (!str) return '';
  return str
    .replace(/[«»]/g, '"')
    .replace(/[—–]/g, '-')
    .replace(/[•]/g, '-')
    .replace(/[’']/g, "'")
    .replace(/[éèêë]/g, 'e')
    .replace(/[àâä]/g, 'a')
    .replace(/[îï]/g, 'i')
    .replace(/[ôö]/g, 'o')
    .replace(/[ùûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ÉÈÊË]/g, 'E')
    .replace(/[ÀÂÄ]/g, 'A')
    .replace(/[ÎÏ]/g, 'I')
    .replace(/[ÔÖ]/g, 'O')
    .replace(/[ÙÛÜ]/g, 'U')
    .replace(/[Ç]/g, 'C')
    .replace(/[💛💖🌟✨📋□]/g, '');
}

async function createProtectedPDFs() {
  const outputDir = path.join(__dirname, '..', 'storage', 'private_downloads');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 1. CREATE MAIN 29-PAGE GUIDE PDF
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  function addPageWithHeader(title, chapterNum, pageNum) {
    const page = pdfDoc.addPage([595.28, 841.89]); // A4
    const { width, height } = page.getSize();

    page.drawRectangle({
      x: 0,
      y: height - 8,
      width: width,
      height: 8,
      color: rgb(0.96, 0.62, 0.04),
    });

    if (chapterNum) {
      page.drawText(sanitizeText(chapterNum.toUpperCase()), {
        x: 45,
        y: height - 40,
        size: 10,
        font: fontBold,
        color: rgb(0.85, 0.45, 0.1),
      });
    }

    if (title) {
      page.drawText(sanitizeText(title), {
        x: 45,
        y: height - 60,
        size: 16,
        font: fontBold,
        color: rgb(0.55, 0.15, 0.25),
      });
    }

    page.drawText(String(pageNum), {
      x: width / 2 - 5,
      y: 35,
      size: 10,
      font: fontRegular,
      color: rgb(0.5, 0.5, 0.5),
    });

    return page;
  }

  function drawWrappedText(page, rawText, startY, maxWidth = 505, options = {}) {
    const fontSize = options.size || 10.5;
    const font = options.font || fontRegular;
    const color = options.color || rgb(0.18, 0.18, 0.18);
    const lineHeight = options.lineHeight || 16;
    const x = options.x || 45;

    const sanitized = sanitizeText(rawText);
    const paragraphs = sanitized.split('\n');
    let y = startY;

    for (const para of paragraphs) {
      if (!para.trim()) {
        y -= lineHeight * 0.6;
        continue;
      }
      const words = para.split(' ');
      let currentLine = '';

      for (const word of words) {
        const testLine = currentLine ? currentLine + ' ' + word : word;
        const width = font.widthOfTextAtSize(testLine, fontSize);
        if (width > maxWidth) {
          page.drawText(currentLine, { x, y, size: fontSize, font, color });
          y -= lineHeight;
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) {
        page.drawText(currentLine, { x, y, size: fontSize, font, color });
        y -= lineHeight;
      }
    }
    return y;
  }

  // PAGE 1 : Transparence
  {
    const page = addPageWithHeader("A propos de ce guide", "TRANSPARENCE", 1);
    let y = 730;
    y = drawWrappedText(page, "Merci d'avoir choisi \"Mon enfant pleure a l'ecole\". Cette page a pour but d'etre honnete et transparente avec vous sur la facon dont ce guide a ete cree, et sur la maniere de l'utiliser au mieux.", y, 505, { lineHeight: 18 });
    y -= 15;
    page.drawText("Comment ce guide a ete cree", { x: 45, y, size: 12, font: fontBold, color: rgb(0.2, 0.35, 0.55) });
    y -= 20;
    y = drawWrappedText(page, "Le contenu de ce guide a ete redige avec l'assistance d'une intelligence artificielle, puis relu, organise et mis en forme par le createur de ce document. Les informations qu'il contient s'appuient sur des notions largement reconnues et enseignees en psychologie du developpement de l'enfant et en theorie de l'attachement.", y);
    y -= 15;

    page.drawRectangle({
      x: 45,
      y: y - 80,
      width: 505,
      height: 85,
      color: rgb(0.98, 0.94, 0.96),
      borderColor: rgb(0.9, 0.7, 0.8),
      borderWidth: 1,
    });
    page.drawText("Ce que ce guide n'est pas", { x: 60, y: y - 18, size: 11, font: fontBold, color: rgb(0.7, 0.15, 0.3) });
    drawWrappedText(page, "Ce guide n'est pas un avis medical, ni un document redige par un medecin. Il ne remplace en aucun cas une consultation avec un pediatre, un psychologue ou un pedopsychiatre.", y - 35, 475, { size: 9.5, lineHeight: 14 });
    y -= 100;

    page.drawText("Comment l'utiliser", { x: 45, y, size: 12, font: fontBold, color: rgb(0.2, 0.35, 0.55) });
    y -= 20;
    drawWrappedText(page, "Ce guide est pense comme un compagnon pratique : des reperes clairs, des rituels concrets et des messages rassurants.", y);
  }

  // PAGE 2 : Engagement
  {
    const page = addPageWithHeader("Notre engagement", "", 2);
    let y = 730;
    page.drawRectangle({
      x: 45,
      y: y - 75,
      width: 505,
      height: 80,
      color: rgb(0.93, 0.96, 0.99),
      borderColor: rgb(0.7, 0.8, 0.9),
      borderWidth: 1,
    });
    page.drawText("Quand consulter un professionnel", { x: 60, y: y - 18, size: 11, font: fontBold, color: rgb(0.15, 0.35, 0.6) });
    drawWrappedText(page, "Si les pleurs persistent plus de quelques semaines avec des troubles du sommeil ou d'alimentation, n'hesitez pas a consulter votre pediatre.", y - 35, 475, { size: 9.5, lineHeight: 14 });
    y -= 110;

    page.drawText("Nos engagements :", { x: 45, y, size: 12, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
    y -= 20;
    y = drawWrappedText(page, "- Transparence totale sur la creation du contenu.", y);
    y -= 8;
    y = drawWrappedText(page, "- Conseils bases sur des reperes educatifs bienveillants et eprouves.", y);
    y -= 8;
    y = drawWrappedText(page, "- Support a votre ecoute pour toute question.", y);
    y -= 35;
    drawWrappedText(page, "Merci de votre confiance. Vous faites deja de votre mieux, et c'est deja enorme.", y, 505, { font: fontOblique, color: rgb(0.4, 0.4, 0.4) });
  }

  // PAGE 3 : Sommaire
  {
    const page = addPageWithHeader("Sommaire", "", 3);
    let y = 720;
    const chaptersList = [
      { num: "1", title: "Comprendre les pleurs de la separation", p: "p. 5" },
      { num: "2", title: "Se preparer avant la rentree", p: "p. 9" },
      { num: "3", title: "Le jour J : gerer la separation", p: "p. 12" },
      { num: "4", title: "Apres le depart : aider l'enfant", p: "p. 15" },
      { num: "5", title: "Gerer ses propres emotions de parent", p: "p. 17" },
      { num: "6", title: "Situations particulieres", p: "p. 20" },
      { num: "7", title: "Temoignages et conseils de parents", p: "p. 23" },
      { num: "-", title: "Conclusion", p: "p. 26" },
      { num: "-", title: "Check-list de la veille de rentree", p: "p. 28" },
      { num: "-", title: "Petit mot a glisser dans le sac", p: "p. 29" },
    ];
    for (const item of chaptersList) {
      page.drawText(`${item.num}.  ${item.title}`, { x: 50, y, size: 11, font: fontBold, color: rgb(0.2, 0.2, 0.2) });
      page.drawText(item.p, { x: 490, y, size: 11, font: fontRegular, color: rgb(0.5, 0.5, 0.5) });
      y -= 30;
    }
  }

  // PAGE 4 : Introduction
  {
    const page = addPageWithHeader("Introduction", "OUVERTURE", 4);
    let y = 730;
    y = drawWrappedText(page, "Votre enfant entre a l'ecole. Au moment de le laisser, il pleure, s'accroche, et vous repartez le coeur serre. Cette scene, des millions de parents la vivent chaque annee. Ce guide est concu pour vous apporter des reponses claires et un plan d'action rassurant.", y);
    y -= 15;
    y = drawWrappedText(page, "Chaque chapitre est court, pratique et pense pour une lecture rapide et immediate.", y);
    y -= 25;
    page.drawRectangle({
      x: 45,
      y: y - 65,
      width: 505,
      height: 70,
      color: rgb(0.99, 0.97, 0.93),
      borderColor: rgb(0.95, 0.8, 0.6),
      borderWidth: 1,
    });
    drawWrappedText(page, "Pleurer a la separation n'est pas un echec : c'est une reaction normale d'attachement, le signe que le lien affectif existe.", y - 18, 475, { font: fontOblique, size: 10, color: rgb(0.4, 0.25, 0.1) });
  }

  // PAGES 5 TO 29
  const fullContentPages = [
    { num: 5, ch: "CHAPITRE 1", title: "Comprendre les pleurs", h1: "1.1 L'angoisse de separation", t1: "L'angoisse de separation est une reaction normale vers 2 a 4 ans. L'enfant exprime sa peur que vous ne reveniez pas. Il a besoin de reperes stables pour integrer la notion de retrouvailles." },
    { num: 6, ch: "CHAPITRE 1", title: "Developpement emotionnel", h1: "1.2 Les grandes etapes", t1: "De 0 a 18 mois : dependance complete.\nDe 18 mois a 3 ans : decouverte de la permanence de l'objet.\nDe 3 a 5 ans : developpement du langage et interiorisation de la presence des parents." },
    { num: 7, ch: "CHAPITRE 1", title: "L'ecole, un grand changement", h1: "1.3 Pourquoi c'est intense", t1: "Passage du cocon familial au groupe. L'enfant apprend les regles collectives et le partage de l'adulte. C'est un effort d'adaptation majeur qui demande patience et bienveillance." },
    { num: 8, ch: "CHAPITRE 1", title: "Signes d'alerte", h1: "1.4 Quand s'inquieter", t1: "Des pleurs durant quelques semaines sont normaux. Si les crises de panique durent plus de 6 semaines sans evolution, demandez conseil a l'equipe pedagogique ou a un professionnel." },
    { num: 9, ch: "CHAPITRE 2", title: "Preparer la rentree", h1: "2.1 Parler positivement de l'ecole", t1: "Decrivez la journee : jeux, repas, sieste, puis retrouvailles. La previsibilite rassure. Evitez les promesses excessives." },
    { num: 10, ch: "CHAPITRE 2", title: "Familiarisation", h1: "2.2 Visites et histoires", t1: "Passer devant l'ecole, visiter les locaux lors des portes ouvertes, et lire des livres sur la rentree permettent a l'enfant d'anticiper sereinement." },
    { num: 11, ch: "CHAPITRE 2", title: "Routines rassurantes", h1: "2.4 Le rythme a la maison", t1: "Regler le sommeil 2 semaines a l'avance. Mettre en place un rituel du matin fluide et sans precipitation." },
    { num: 12, ch: "CHAPITRE 3", title: "Le jour J : la separation", h1: "3.1 Creer un rituel d'au revoir court", t1: "Calin, bisou, phrase cle invariante. Un rituel de 2 minutes maximum donne un cadre clair et securisant." },
    { num: 13, ch: "CHAPITRE 3", title: "Si l'enfant s'accroche", h1: "3.2 Accueillir sans ceder", t1: "Gardez une posture calme. Dites : 'Je sais que tu as du chagrin, mais tu es en securite et je reviens apres l'ecole'. Confiez-le a l'adulte et partez." },
    { num: 14, ch: "CHAPITRE 3", title: "Partir sans se retourner", h1: "3.3 L'importance de la continuite", t1: "Se retourner relance les pleurs. Ne jamais partir en cachette : cela brise la confiance." },
    { num: 15, ch: "CHAPITRE 4", title: "Apres le depart", h1: "4.1 Ce qui se passe en classe", t1: "Dans la majorite des cas, les larmes cessent en 3 a 5 minutes. Les activites et les camarades captent l'attention." },
    { num: 16, ch: "CHAPITRE 4", title: "Le doudou & l'enseignant", h1: "4.4 Objets transitionnels", t1: "Le doudou ou un mouchoir avec votre odeur sert de pont affectif rassurant tout au long de la journee." },
    { num: 17, ch: "CHAPITRE 5", title: "Emotions des parents", h1: "5.1 La culpabilite parentale", t1: "Ressentir un pincement au coeur est tout a fait naturel. L'ecole permet a l'enfant de developper son autonomie." },
    { num: 18, ch: "CHAPITRE 5", title: "Rester confiant", h1: "5.2 Contagion emotionnelle", t1: "Votre enfant ressent votre calme. Respirez profondement avant d'arriver au portail de l'ecole." },
    { num: 19, ch: "CHAPITRE 5", title: "Prendre soin de soi", h1: "5.4 Relativiser et souffler", t1: "Accordez-vous un moment de detente apres la separation. Echanger avec d'autres parents aide a relativiser." },
    { num: 20, ch: "CHAPITRE 6", title: "Situations particulieres", h1: "6.1 Pleurs persistants", t1: "Observer si les pleurs durent toute la journee ou seulement 5 minutes a l'accueil. Dialogue constant avec l'enseignant." },
    { num: 21, ch: "CHAPITRE 6", title: "Refus scolaire", h1: "6.2 Ecoute et etapes", t1: "Comprendre l'origine du blocage sans dramatiser. Un retour progressif peut etre etabli si necessaire." },
    { num: 22, ch: "CHAPITRE 6", title: "Sommeil et regressions", h1: "6.3 Les reactions a la maison", t1: "Poussee d'agrippement ou cauchemars temporaires. Maintenez des moments calmes et des calins au retour." },
    { num: 23, ch: "CHAPITRE 7", title: "Temoignages", h1: "7.1 Retours d'experience", t1: "Sophie (maman de Lea) : 'En appliquant un rituel tres court, les pleurs ont cesse au bout de deux semaines.'\nThomas (papa d'Elena) : 'Le doudou confie a la maitresse a ete notre declic.'" },
    { num: 24, ch: "CHAPITRE 7", title: "Astuces eprouvees", h1: "7.2 La boite a outils", t1: "- Le bisou depose dans la paume a garder toute la journee.\n- La photo de famille dans le cartable.\n- Le tableau de routine avec des dessins sur le refrigerateur." },
    { num: 25, ch: "CHAPITRE 7", title: "Messages d'encouragement", h1: "7.3 Vous faites de votre mieux", t1: "Chaque enfant s'adapte a son propre rythme. Cette phase est temporaire et bientot votre enfant entrera avec le sourire !" },
    { num: 26, ch: "CONCLUSION", title: "Conclusion", h1: "Vers des matins sereins", t1: "Vous avez desormais tous les outils concrets pour accompagner votre enfant avec douceur, clarte et fermete bienveillante." },
    { num: 27, ch: "CONCLUSION", title: "Ressources & Suite", h1: "Un jour apres l'autre", t1: "Bravo pour votre demarche de parent attentif. N'hesitez pas a relire ces fiches des que le besoin s'en fait sentir." },
    { num: 28, ch: "RESSOURCE #1", title: "Check-list Matin", h1: "Check-list Rentrée Sereine", t1: "1. Avant de partir : Habillage au calme, sac pret avec doudou, petit-dejeuner serein.\n2. A l'ecole : Rituel d'au revoir (calin + bisou + phrase cle), relais maitresse, depart sans retour." },
    { num: 29, ch: "RESSOURCE #2", title: "Petit Mot Doux", h1: "Mot a decouper pour le sac", t1: "'Mon petit tresor, je pense a toi toute la journee. Tu es courageux et je suis fier de toi. Je viens te chercher apres l'ecole ! Gros bisous.'" }
  ];

  for (const pageData of fullContentPages) {
    const page = addPageWithHeader(pageData.title, pageData.ch, pageData.num);
    let y = 720;
    page.drawText(sanitizeText(pageData.h1), { x: 45, y, size: 12, font: fontBold, color: rgb(0.2, 0.35, 0.55) });
    y -= 22;
    drawWrappedText(page, pageData.t1, y, 505, { lineHeight: 17 });
  }

  const pdfBytes = await pdfDoc.save();
  const mainPdfPath = path.join(outputDir, 'guide-mon-enfant-pleure-a-lecole.pdf');
  fs.writeFileSync(mainPdfPath, pdfBytes);
  console.log('✅ Guide principal 29 pages créé avec succès :', mainPdfPath);

  // 2. BONUS #1 CHECKLIST PDF
  const bonusDoc1 = await PDFDocument.create();
  const bonusPage1 = bonusDoc1.addPage([595.28, 841.89]);
  bonusPage1.drawRectangle({
    x: 0,
    y: 841.89 - 12,
    width: 595.28,
    height: 12,
    color: rgb(0.96, 0.62, 0.04),
  });
  bonusPage1.drawText("MA CHECK-LIST DU MATIN - RENTREE SEREINE", {
    x: 45,
    y: 780,
    size: 16,
    font: fontBold,
    color: rgb(0.15, 0.35, 0.55),
  });
  bonusPage1.drawText("A imprimer et coller sur le refrigerateur", {
    x: 45,
    y: 755,
    size: 11,
    font: fontOblique,
    color: rgb(0.5, 0.5, 0.5),
  });

  const checklistItems = [
    { title: "1. AVANT DE PARTIR", items: ["Mon enfant est habille et chausse sans precipitation", "Le sac est pret : doudou, photo, petit mot doux", "Le petit-dejeuner est pris calmement", "On a parle de l'ecole de facon positive et rassurante"] },
    { title: "2. AU MOMENT DE LA SEPARATION", items: ["Je fais le rituel etabli : calin, bisou, phrase cle", "Je dis : 'Je reviens te chercher apres l'ecole'", "Je pars d'un pas assure sans me retourner", "Je respire profondement avant de partir"] },
    { title: "3. POUR MOI, PARENT", items: ["Je me repete : 'Mon enfant est en securite'", "Je ne culpabilise pas de mes propres emotions", "Je ne reste pas cache devant l'ecole", "Je m'accorde un moment pour souffler apres la depose"] },
    { title: "4. APRES L'ECOLE", items: ["J'accueille mon enfant avec un chaleureux calin", "Je felicite chaque petit progres realise", "Je partage un moment agreable de jeu ou de gouter", "Je prepare le lendemain avec lui dans la bonne humeur"] },
  ];

  let checkY = 700;
  for (const block of checklistItems) {
    bonusPage1.drawText(block.title, { x: 45, y: checkY, size: 12, font: fontBold, color: rgb(0.85, 0.45, 0.1) });
    checkY -= 20;
    for (const item of block.items) {
      bonusPage1.drawText(`[   ]  ${item}`, { x: 55, y: checkY, size: 10.5, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
      checkY -= 18;
    }
    checkY -= 12;
  }
  const bonus1Bytes = await bonusDoc1.save();
  const bonus1Path = path.join(outputDir, 'checklist-rentree-sereine.pdf');
  fs.writeFileSync(bonus1Path, bonus1Bytes);
  console.log('✅ Bonus #1 Check-list créé :', bonus1Path);

  // 3. BONUS #2 LOVE NOTES PDF
  const bonusDoc2 = await PDFDocument.create();
  const bonusPage2 = bonusDoc2.addPage([595.28, 841.89]);
  bonusPage2.drawText("CARTES DE MOTS DOUX A DECOUPER", {
    x: 45,
    y: 780,
    size: 16,
    font: fontBold,
    color: rgb(0.7, 0.2, 0.35),
  });
  bonusPage2.drawText("Glissez une carte dans son sac ou aupres de son doudou", {
    x: 45,
    y: 755,
    size: 11,
    font: fontOblique,
    color: rgb(0.5, 0.5, 0.5),
  });

  const cards = [
    "Mon petit tresor, je pense a toi toute la journee. Je viens te chercher apres l'ecole ! Gros bisou",
    "Tu es fort et courageux ! Amuse-toi bien avec tes copains. A tout a l'heure !",
    "Voici un bisou magique enferme dans cette carte pour te donner du courage quand tu en as besoin",
    "Je t'aime tres fort. Papa et Maman ont hate d'ecouter tes belles histoires ce soir"
  ];

  let cardY = 680;
  for (const cardText of cards) {
    bonusPage2.drawRectangle({
      x: 45,
      y: cardY - 60,
      width: 505,
      height: 65,
      color: rgb(0.99, 0.96, 0.97),
      borderColor: rgb(0.85, 0.5, 0.6),
      borderWidth: 1,
    });
    drawWrappedText(bonusPage2, `\" ${cardText} \"`, cardY - 20, 480, { font: fontRegular, size: 10.5, color: rgb(0.3, 0.2, 0.2) });
    cardY -= 95;
  }
  const bonus2Bytes = await bonusDoc2.save();
  const bonus2Path = path.join(outputDir, 'mots-doux-cartable.pdf');
  fs.writeFileSync(bonus2Path, bonus2Bytes);
  console.log('✅ Bonus #2 Mots Doux créé :', bonus2Path);
}

createProtectedPDFs().catch(console.error);
