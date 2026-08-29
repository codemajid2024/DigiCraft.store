export interface ParentArgument {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Chapter {
  number: string;
  title: string;
  pageCount: string;
  description: string;
  keyPoints: string[];
}

export const siteConfig = {
  name: "AllDigiCraft",
  title: "Guide PDF Rentrée Maternelle | Gérer Pleurs et Angoisse de Séparation",
  subtitle: "Comprendre et apaiser l'angoisse de séparation, du premier jour aux semaines qui suivent",
  hook: "Mon enfant pleure à l'école 💛",
  description:
    "Votre enfant s'accroche à vous le matin, pleure à l'entrée de l'école et vous repartez le cœur serré ? Ce guide illustré de 29 pages est votre allié bienveillant pour transformer les matins difficiles en moments de sérénité partagée.",
  
  // Pricing
  pricing: {
    amount: 19.90,
    amountStr: "19,90",
    currency: "EUR",
    currencySymbol: "€",
    guaranteeText: "Format PDF numérique sécurisé • Téléchargement immédiat",
  },

  // Author / Trust info (100% conformes et légaux)
  trust: {
    pageCount: 29,
    readingTime: "35 à 45 min",
    instantDeliveryText: "Accès immédiat 24h/24 dès validation",
    format: "Fichier PDF Universel (Téléphone, Tablette, PC, Impression)",
    commitmentText: "Méthode bienveillante, actionnable & prête à l'emploi",
  },

  // Tags SEO
  keywords: [
    "rentrée scolaire",
    "angoisse séparation",
    "guide parents pdf",
    "ebook parentalité",
    "pleurs école",
    "maternelle rentrée",
    "checklist imprimable",
    "cadeau jeune parent",
    "guide numérique enfant",
    "rentrée maternelle",
    "parentalité positive",
    "doudou objet transitionnel",
    "premiers pas école",
  ],

  // Inclusions & Bonuses
  includedBonuses: [
    {
      title: "Ebook complet de 29 pages",
      subtitle: "Illustré, mis en couleurs et rédigé avec empathie pour une lecture rapide et actionnable.",
      tag: "Guide Principal",
    },
    {
      title: "Check-list « Rentrée Sereine » à imprimer",
      subtitle: "La routine du matin pas-à-pas pour éviter le rush, les oublis et les tensions avant de partir.",
      tag: "Bonus Offert #1",
    },
    {
      title: "Cartes de « Mots Doux & Lunchbox »",
      subtitle: "À découper pour créer un ancrage rassurant dans le cartable, doudou ou boîte à goûter.",
      tag: "Bonus Offert #2",
    },
    {
      title: "Fiche « Transparence & Conseils »",
      subtitle: "Recommandations concrètes, repères et conseils d'accompagnement bienveillants.",
      tag: "Bonus Offert #3",
    },
  ],

  // Chapters & Table of Contents
  chapters: [
    {
      number: "01",
      title: "Comprendre les larmes à la grille",
      pageCount: "p. 04 - 08",
      description: "Décoder ce que vit réellement votre enfant lors de la séparation et pourquoi ce n'est JAMAIS un caprice ni de votre faute.",
      keyPoints: [
        "Le pic normal de l'angoisse de séparation à 2-4 ans",
        "La notion de temps chez le tout-petit",
        "Ce que ses larmes expriment vraiment",
      ],
    },
    {
      number: "02",
      title: "Préparer la rentrée en amont sans stress",
      pageCount: "p. 09 - 13",
      description: "Les jeux, lectures et repères visuels à installer à la maison les jours précédents pour familiariser l'enfant en douceur.",
      keyPoints: [
        "Visiter et verbaliser les lieux à l'avance",
        "L'histoire du doudou protecteur et son rôle clé",
        "Le piège des fausses promesses à éviter",
      ],
    },
    {
      number: "03",
      title: "Le rituel d'au revoir magique : que faire & dire",
      pageCount: "p. 14 - 18",
      description: "Les 4 étapes du départ réussi : les phrases exactes qui rassurent, les gestes clés et l'erreur courante de partir en cachette.",
      keyPoints: [
        "La formule d'au revoir courte et chaleureuse",
        "Pourquoi ne JAMAIS fuir en douce",
        "Le rôle du relais avec l'enseignant·e ou l'ATSEM",
      ],
    },
    {
      number: "04",
      title: "Ce qui se passe une fois la porte fermée",
      pageCount: "p. 19 - 22",
      description: "L'envers du décor en classe : combien de temps durent les larmes et comment les professionnels accueillent votre enfant.",
      keyPoints: [
        "La règle des 5 minutes observée par les maîtresses",
        "Comment les activités captent rapidement son attention",
        "Pourquoi l'enfant peut à nouveau pleurer en vous revoyant le soir",
      ],
    },
    {
      number: "05",
      title: "Gérer vos propres émotions de parent",
      pageCount: "p. 23 - 26",
      description: "Soulager votre culpabilité, tristesse et anxiété de transmission. Vous avez le droit d'avoir le cœur serré.",
      keyPoints: [
        "La contagion émotionnelle : comment diffuser du calme",
        "Exercice de respiration d'1 minute avant d'arriver à l'école",
        "Déculpabiliser : vous faites déjà de votre mieux",
      ],
    },
    {
      number: "06",
      title: "Signes d'alerte, check-lists & fiches pratiques",
      pageCount: "p. 27 - 29",
      description: "Distinguer l'adaptation normale d'un réel blocage, quand consulter et accès aux fiches prêtes à imprimer.",
      keyPoints: [
        "Quand demander conseil (sommeil, appétit, régression)",
        "Check-list matinale imprimable",
        "Modèle de cartes-mots doux pour le cartable",
      ],
    },
  ] as Chapter[],

  // What you will learn
  benefits: [
    {
      id: "b1",
      icon: "HeartHandshake",
      title: "Dédramatiser & Déculpabiliser",
      description: "Comprenez précisément les mécanismes neurologiques de l'angoisse de séparation pour ne plus jamais culpabiliser.",
    },
    {
      id: "b2",
      icon: "Sparkles",
      title: "Le Rituel d'Au Revoir en 3 Minutes",
      description: "Découvrez les mots exacts à dire et les gestes à adopter pour partir sans drame ni déchirement.",
    },
    {
      id: "b3",
      icon: "ShieldCheck",
      title: "Apaiser Vos Propres Émotions",
      description: "Des techniques concrètes pour transformer votre anxiété en un ancrage solide et rassurant pour votre enfant.",
    },
    {
      id: "b4",
      icon: "Clock",
      title: "La Vérité sur les 5 Premières Minutes",
      description: "Comprenez ce qui se passe réellement une fois la porte fermée et pourquoi 95% des enfants jouent 2 min après.",
    },
    {
      id: "b5",
      icon: "FileCheck",
      title: "Check-list Matinale Imprimable",
      description: "Une fiche prête à coller sur le frigo pour une organisation fluide sans cris ni retards.",
    },
    {
      id: "b6",
      icon: "MessageCircleHeart",
      title: "Le 'Mot Doux' de Transition",
      description: "Une astuce éprouvée pour laisser à votre enfant une trace chaleureuse et réconfortante dans sa poche.",
    },
  ] as Benefit[],

  // Target audience
  audiences: [
    {
      title: "Première rentrée en Maternelle",
      desc: "Petite Section (PS) : le passage du cocon familial à la grande école peut être impressionnant.",
      icon: "School",
      badge: "Indispensable",
    },
    {
      title: "Entrée en Crèche ou chez la Nounou",
      desc: "Idéal dès les premiers mois pour instaurer les bonnes habitudes de séparation bienveillante.",
      icon: "Baby",
      badge: "Dès 6 mois",
    },
    {
      title: "Reprise après les vacances",
      desc: "Toussaint, Noël ou été : surmonter facilement la réadaptation après de longues semaines ensemble.",
      icon: "Calendar",
      badge: "Toute l'année",
    },
    {
      title: "Cadeau utile pour Jeunes Parents",
      desc: "Le guide rassurant à offrir à une future maman, un papa ou des amis qui appréhendent la rentrée.",
      icon: "Gift",
      badge: "Cadeau Idéal",
    },
  ],

  // Pourquoi ce guide convainc les parents (100% légal & conforme)
  parentArguments: [
    {
      id: "arg1",
      icon: "Clock",
      title: "Pratique & Direct : Moins de 40 min de lecture",
      subtitle: "Zéro blabla théorique, 100% actionnable",
      description:
        "Conçu pour les parents occupés. Vous n'avez pas le temps de lire un pavé de 300 pages : ce guide va droit au but avec des phrases concrètes à dire et des étapes simples à appliquer dès demain matin.",
      tag: "Efficacité Immédiate",
    },
    {
      id: "arg2",
      icon: "Heart",
      title: "Approche Bienveillante & Déculpabilisante",
      subtitle: "Comprendre les émotions sans jamais brusquer",
      description:
        "Découvrez la véritable cause de l'angoisse de séparation. Vous apprendrez à poser un cadre sécurisant et chaleureux, tout en apaisant votre propre anxiété parentale sans aucun sentiment de culpabilité.",
      tag: "Sécurité Affective",
    },
    {
      id: "arg3",
      icon: "FileCheck",
      title: "Boîte à Outils Complète Prête à Imprimer",
      subtitle: "La Check-list Frigo + Les Cartes Mots Doux",
      description:
        "Ne partez plus dans le stress et la précipitation. La check-list visuelle structure le rituel du matin et les cartes de mots doux créent un pont affectif rassurant dans la poche ou le doudou de votre enfant.",
      tag: "Zéro Charge Mentale",
    },
    {
      id: "arg4",
      icon: "Sparkles",
      title: "Des Solutions Concrètes pour Chaque Situation",
      subtitle: "Petite Section, Crèche, Nounou & Retours de Vacances",
      description:
        "Que ce soit pour le tout premier jour ou un blocage apparu après plusieurs semaines, vous disposez de repères clairs, de rituels d'au revoir éprouvés et d'indicateurs précis pour savoir quand consulter.",
      tag: "Polyvalent & Éprouvé",
    },
  ] as ParentArgument[],

  // FAQ
  faqs: [
    {
      id: "f1",
      question: "Comment vais-je recevoir mon guide après l'achat ?",
      answer:
        "Instantanément ! Dès la validation sécurisée de votre paiement par PayPal (ou carte bancaire via PayPal), vous êtes automatiquement redirigé·e vers votre page de téléchargement privée pour enregistrer le fichier PDF en 1 clic. Vous recevez également les instructions de sauvegarde.",
    },
    {
      id: "f2",
      question: "Sur quels appareils puis-je lire ce guide ?",
      answer:
        "Sur absolument tous vos appareils : smartphone (iPhone, Android), tablette (iPad, Galaxy Tab), ordinateur (Mac, PC, Linux) ou liseuse compatible PDF. Aucune application payante n'est nécessaire : vous pouvez l'ouvrir directement dans votre navigateur, dans l'application Livres / Fichiers, ou l'imprimer.",
    },
    {
      id: "f3",
      question: "Puis-je imprimer la check-list et les bonus ?",
      answer:
        "Oui, tout à fait ! Le fichier PDF a été mis en page au format universel A4 en haute définition. Vous pouvez imprimer l'intégralité du guide ou uniquement les fiches pratiques (Check-list matinale et cartes de mots doux) en noir et blanc ou en couleur.",
    },
    {
      id: "f4",
      question: "Combien de temps faut-il pour lire le guide ?",
      answer:
        "Environ 35 à 45 minutes. Il fait 29 pages, conçu spécialement pour les parents débordés avec des explications claires, des encadrés visuels et des résumés pratiques pour aller droit à l'essentiel dès ce soir.",
    },
    {
      id: "f5",
      question: "Le paiement par PayPal est-il 100% sécurisé ?",
      answer:
        "Oui, totalement. Les transactions sont gérées via les serveurs sécurisés et chiffrés SSL de PayPal. Vous pouvez payer en toute confiance avec votre compte PayPal ou directement par Carte Bancaire sans créer de compte.",
    },
    {
      id: "f6",
      question: "Est-ce un livre physique envoyé par la poste ?",
      answer:
        "Non, il s'agit d'un produit 100% numérique (Ebook PDF + Fiches imprimables). Aucun colis physique ne sera expédié par la poste, ce qui vous permet d'en disposer immédiatement, même à 22h la veille de la rentrée !",
    },
    {
      id: "f7",
      question: "Quelle est la politique de remboursement ?",
      answer:
        "Conformément à la réglementation sur les contenus numériques délivrés immédiatement et téléchargeables, aucun remboursement n'est possible après accès au fichier. Cependant, nous avons apporté le plus grand soin à la qualité du contenu pour vous garantir une satisfaction totale.",
    },
  ] as FaqItem[],

  // Contact / Support
  supportEmail: "contact@alldigicraft.fr",
};
