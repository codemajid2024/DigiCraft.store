# 📚 DigiCraft.store — Guide PDF Rentrée Maternelle

Site de vente d'ebook numérique PDF construit avec **Next.js 14 (App Router)**, **React**, **TypeScript**, **Tailwind CSS** et **PayPal Smart Buttons** — prêt à être déployé sur **Vercel** en quelques minutes.

---

## 🚀 Démarrage Rapide

```bash
# 1. Cloner / ouvrir le projet
cd DigiCraft.store

# 2. Installer les dépendances
npm install

# 3. Copier le fichier d'environnement
cp .env.example .env.local

# 4. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## ⚙️ Configuration des Variables d'Environnement

Ouvrez le fichier `.env.local` et renseignez vos valeurs :

| Variable | Description | Exemple |
|---|---|---|
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | Votre Client ID PayPal (Sandbox ou Live) | `AaBbCcDdEeFf...` |
| `NEXT_PUBLIC_SITE_URL` | URL complète de votre site en production | `https://digicraft.store` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Email de support affiché aux clients | `contact@digicraft.store` |

> En **développement local**, laissez `NEXT_PUBLIC_PAYPAL_CLIENT_ID="test"` pour utiliser le mode simulation (aucune vraie transaction).

---

## 💳 Configuration PayPal

### Étape 1 : Créer un compte PayPal Développeur (Sandbox)

1. Rendez-vous sur [developer.paypal.com](https://developer.paypal.com)
2. Connectez-vous avec votre compte PayPal
3. Dans le tableau de bord → **Apps & Credentials** → **Create App**
4. Copiez le **Client ID Sandbox** et collez-le dans `.env.local`

### Étape 2 : Tester le Tunnel d'Achat (Sandbox)

1. Avec le Client ID Sandbox inséré, le vrai bouton PayPal apparaît
2. Utilisez les comptes de test Sandbox disponibles sur developer.paypal.com
3. Validez une commande test → vous serez redirigé vers `/merci`

### Étape 3 : Passer en Production (Live)

1. Sur developer.paypal.com → **Apps & Credentials** → onglet **Live**
2. Copiez le **Client ID Live** et remplacez-le dans `.env.local` (ou variable Vercel)
3. Déployez sur Vercel

> ⚠️ **Note de sécurité importante** : Le modèle actuel valide le paiement côté client uniquement (`onApprove`). Pour une production sécurisée, il est fortement recommandé d'implémenter une **API Route Next.js** (`/api/paypal/capture`) qui appelle l'API PayPal côté serveur pour capturer et vérifier la commande avant de délivrer le lien de téléchargement. Cela empêche les tentatives d'accès frauduleux via manipulation des URLs.

---

## 📧 Configuration de l'Email Automatique (Optionnel)

Pour envoyer automatiquement un email de confirmation avec le lien de téléchargement après chaque achat :

### Option A : Resend (Recommandé)
```bash
npm install resend
```
Créez `src/app/api/send-confirmation/route.ts` :
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, orderId, payerName } = await req.json();
  await resend.emails.send({
    from: 'contact@digicraft.store',
    to: email,
    subject: 'Votre guide PDF est prêt ! 📚',
    html: `<p>Bonjour ${payerName}, votre guide est disponible ici...</p>`,
  });
  return Response.json({ success: true });
}
```

### Option B : EmailJS (Frontend-only, sans backend)
- Inscrivez-vous sur [emailjs.com](https://emailjs.com)
- Installez : `npm install @emailjs/browser`
- Appelez `emailjs.send()` dans `onApprove` du composant PayPal

---

## 🔒 Protection & Sécurité des Fichiers PDF

Tous vos fichiers PDF payants sont stockés dans un **dossier sécurisé côté serveur** (`storage/private_downloads/`), totalement inaccessible depuis le web et invisible dans l'inspecteur d'éléments :

```
storage/
└── private_downloads/
    ├── guide-mon-enfant-pleure-a-lecole.pdf  ← Guide complet (29 pages)
    ├── checklist-rentree-sereine.pdf         ← Check-list imprimable A4
    └── mots-doux-cartable.pdf                ← Cartes de mots doux
```

### Comment fonctionne la protection :
1. **Zéro fichier dans `/public/`** : Aucun visiteur ne peut deviner ou accéder directement à une URL `.pdf`.
2. **Invisible dans l'Inspecteur** : Les boutons de téléchargement n'ont aucun lien `href="...pdf"`. Ils appellent l'API Route interne `/api/download`.
3. **Flux mémoire sécurisé** : L'API vérifie la validité de la commande (`orderId`), lit le fichier depuis le serveur et l'envoie sous forme de flux binaire chiffré directement dans le navigateur du client.
4. **Accès direct bloqué** : Tout accès direct non autorisé (ex: requête GET) retourne un code `403 Forbidden`.

---

## 🌍 Déploiement sur Vercel

### Méthode rapide (Interface Vercel)

1. Poussez votre code sur **GitHub**
2. Connectez-vous sur [vercel.com](https://vercel.com)
3. **New Project** → Importez votre repo GitHub
4. Ajoutez vos **variables d'environnement** dans les paramètres Vercel
5. Cliquez sur **Deploy** → Votre site est en ligne !

### Via la CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🗂️ Structure du Projet

```
DigiCraft.store/
├── public/
│   ├── sample-guide.pdf            ← PDF exemple (à remplacer par le vrai)
│   └── assets/                     ← Vos images de couverture
├── src/
│   ├── app/
│   │   ├── layout.tsx              ← SEO, polices, Schema.org JSON-LD
│   │   ├── page.tsx                ← Landing page one-page complète
│   │   ├── merci/page.tsx          ← Page de confirmation & téléchargement
│   │   ├── cgv/page.tsx            ← Conditions Générales de Vente
│   │   ├── confidentialite/        ← Politique de confidentialité
│   │   └── mentions-legales/       ← Mentions légales
│   ├── components/
│   │   ├── layout/                 ← Header, Footer, TopBanner, StickyMobileCta
│   │   ├── sections/               ← Hero, Benefits, BookPreview, Testimonials...
│   │   └── checkout/               ← PayPalButtonWrapper, GuaranteeBadge
│   ├── config/
│   │   └── siteConfig.ts           ← 🎛️ CONFIGURATION CENTRALE (prix, FAQ, témoignages)
│   └── styles/globals.css
├── .env.example                    ← Template variables d'env
├── .env.local                      ← Variables locales (ne pas committer)
└── README.md
```

---

## 🎨 Personnalisation

Toute la configuration du site se trouve dans **un seul fichier** : [`src/config/siteConfig.ts`](./src/config/siteConfig.ts)

Vous pouvez y modifier :
- ✅ Le prix (`pricing.amount`)
- ✅ Les témoignages (`testimonials`)
- ✅ Les chapitres et le sommaire (`chapters`)
- ✅ Les bénéfices et avantages (`benefits`)
- ✅ La FAQ complète (`faqs`)
- ✅ Le public cible (`audiences`)
- ✅ Les bonus inclus (`includedBonuses`)
- ✅ Les mots-clés SEO (`keywords`)

---

## 📝 Checklist de Mise en Production

- [ ] Remplacer `sample-guide.pdf` par les vrais fichiers PDF
- [ ] Configurer `NEXT_PUBLIC_PAYPAL_CLIENT_ID` avec le vrai Client ID Live
- [ ] Ajouter le logo et les vraies images dans `/public/assets/`
- [ ] Mettre à jour `NEXT_PUBLIC_SITE_URL` avec l'URL Vercel
- [ ] Tester un vrai paiement Sandbox via developer.paypal.com
- [ ] Configurer un service d'email (Resend ou EmailJS) pour la confirmation automatique
- [ ] Activer le Webhook PayPal pour la validation côté serveur (production avancée)
- [ ] Mettre à jour les mentions légales avec vos informations personnelles

---

*Fait avec ❤️ pour tous les parents et leurs petits bouts d'école 💛*
