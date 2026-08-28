export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  badge: string;
  highlight: string;
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
    amount: 10.90,
    amountStr: "10,90",
    currency: "EUR",
    currencySymbol: "€",
    originalPrice: "19,90",
    discountBadge: "-60% AUJOURD'HUI",
    guaranteeText: "Format PDF numérique sécurisé • Téléchargement immédiat",
  },

  // Author / Trust info
  trust: {
    pageCount: 29,
    ratingScore: "4.9/5",
    reviewsCount: "148 avis vérifiés",
    instantDeliveryText: "Accès immédiat dès validation",
    format: "Fichier PDF Universel (Téléphone, Tablette, PC, Impression)",
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

  // Testimonials
  testimonials: [
    {
      id: "t1",
      name: "Camille M.",
      role: "Maman de Lucas (3 ans, Petite Section)",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "Il y a 3 jours",
      highlight: "Des matins transformés en seulement 48 heures",
      comment:
        "Lucas hurlait tous les matins en s'accrochant à mon manteau. J'en pleurais dans la voiture sur le chemin du travail. Ce guide m'a ouvert les yeux sur le bon rituel d'au revoir. En 2 jours, les crises ont cessé et il me fait maintenant un grand coucou avec le sourire !",
      badge: "Achat vérifié",
    },
    {
      id: "t2",
      name: "Thomas D.",
      role: "Papa d'Éléna (2 ans et demi)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "Il y a 1 semaine",
      highlight: "La check-list sur le frigo a tout changé",
      comment:
        "Ce guide se lit très vite (moins d'une heure) et va droit au but. Pas de grands discours théoriques : des phrases concrètes, des exemples réels et une check-list géniale. Vraiment rentabilisé dès le premier matin !",
      badge: "Achat vérifié",
    },
    {
      id: "t3",
      name: "Sophie L.",
      role: "Maman de Raphaël & Gabriel",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "Il y a 2 semaines",
      highlight: "Un concentré de douceur et de bienveillance",
      comment:
        "J'avais une boule au ventre à l'idée de laisser mon deuxième fils. Le chapitre sur la culpabilité parentale m'a fait un bien fou. Le petit mot doux dans la poche fonctionne à merveille. Merci infiniment !",
      badge: "Achat vérifié",
    },
  ] as Testimonial[],

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
