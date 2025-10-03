# Boutique Intime - E-commerce Premium

Une boutique en ligne moderne et élégante dédiée aux produits pour adultes, conçue avec une attention particulière à la confidentialité, au design premium et à l'expérience utilisateur.

## 🌟 Fonctionnalités Principales

### Design & UX
- **Design Premium** : Interface élégante avec les couleurs de l'amour (rouge passion, rose tendre)
- **Mode Discret** : Navigation en mode incognito pour plus de confidentialité
- **Responsive Design** : Optimisé pour tous les appareils (mobile-first)
- **Animations Fluides** : Transitions et effets visuels subtils

### E-commerce Complet
- **Catalogue Produits** : Gestion avancée des produits avec filtres et recherche
- **Panier d'Achat** : Interface intuitive avec gestion des quantités
- **Paiement Sécurisé** : Intégration Stripe avec support multi-devises
- **Gestion des Stocks** : Suivi en temps réel des inventaires

### Base de Données & Authentification
- **Supabase** : Base de données PostgreSQL scalable avec authentification intégrée
- **Gestion Utilisateurs** : Profils clients avec préférences personnalisées
- **Système de Reviews** : Avis et notations produits vérifiés

### SEO & Performance
- **SEO Optimisé** : Balises meta, structure Hn, URLs optimisées
- **Performance** : Chargement rapide avec Next.js et optimisation images
- **Analytics** : Suivi des conversions et comportement utilisateur

## 🎨 Charte Graphique

### Palette de Couleurs
- **Rouge Passion** : `#E50914` - Couleur principale des call-to-action
- **Rose Tendre** : `#FF3366` - Accent et éléments de mise en valeur
- **Bleu Confiance** : `#1D3557` - Navigation et éléments de confiance
- **Violet Découverte** : `#6A0572` - Éléments de mystère et découverte

### Typographie
- **Titres** : Playfair Display (serif élégant)
- **Corps** : Inter (sans-serif moderne et lisible)

## 🚀 Technologies Utilisées

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour plus de sécurité
- **Tailwind CSS** - Framework CSS utilitaire personnalisé
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes

### Backend & Base de Données
- **Supabase** - Backend-as-a-Service avec PostgreSQL
- **Stripe** - Solution de paiement sécurisé
- **NextAuth.js** - Authentification utilisateur

### Déploiement
- **Vercel** - Plateforme de déploiement optimisée pour Next.js
- **Railway** - Hébergement de base de données (optionnel)

## 📁 Structure du Projet

```
sexshop/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Styles globaux personnalisés
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Page d'accueil
│   ├── components/         # Composants React
│   │   ├── ui/            # Composants de base (Button, Card, etc.)
│   │   └── layout/        # Composants de mise en page (Header, Footer)
│   ├── lib/               # Utilitaires et configurations
│   │   ├── supabase.ts    # Client Supabase
│   │   └── utils.ts       # Fonctions utilitaires
│   └── types/             # Définitions TypeScript
│       └── database.ts    # Types de base de données
├── supabase-schema.sql    # Schéma de base de données
├── tailwind.config.ts     # Configuration Tailwind personnalisée
├── .env.local            # Variables d'environnement
└── README.md             # Documentation
```

## 🛠️ Installation & Configuration

### Prérequis
- Node.js 18+
- npm ou yarn
- Compte Supabase
- Compte Stripe (pour les paiements)

### Installation

1. **Cloner le projet**
   ```bash
   git clone <votre-repo>
   cd sexshop
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration de l'environnement**
   ```bash
   cp .env.local .env.local
   ```

   Renseigner les variables suivantes :
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anonyme
   SUPABASE_SERVICE_ROLE_KEY=votre_clé_service

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=votre_clé_publiable_stripe
   STRIPE_SECRET_KEY=votre_clé_secrète_stripe

   # Site
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Configuration de la base de données**
   ```bash
   # Exécuter le schéma SQL dans Supabase
   # Aller dans l'éditeur SQL de votre projet Supabase
   # Copier/coller le contenu de supabase-schema.sql
   ```

5. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

   Le site sera accessible sur `http://localhost:3000`

## 📊 Schéma de Base de Données

### Tables Principales

#### `products`
- Gestion complète du catalogue produits
- Support des variantes, images multiples
- SEO optimisé avec métadonnées

#### `users`
- Extension de l'authentification Supabase
- Préférences utilisateur et mode discret

#### `orders` & `order_items`
- Gestion des commandes et articles
- Support des retours et remboursements

#### `product_reviews`
- Système d'avis avec modération
- Vérification automatique des achats

#### `blog_posts`
- Articles éducatifs et guides
- SEO optimisé pour le contenu

## 🎯 Fonctionnalités Avancées

### Mode Discret
- Interface grisée pour plus de confidentialité
- Navigation privée activable d'un clic
- Mémorisation des préférences utilisateur

### SEO Complet
- Structure de données optimisée
- Métadonnées automatiques
- Sitemap et robots.txt générés

### Performance
- Images optimisées avec Next.js Image
- Lazy loading automatique
- Cache intelligent des données

### Sécurité
- Validation des données côté serveur
- Protection CSRF
- Headers de sécurité avancés

## 🚀 Déploiement

### Production avec Vercel

1. **Connecter à Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Configuration des variables d'environnement**
   - Aller dans le dashboard Vercel
   - Ajouter les variables d'environnement
   - Configurer le domaine personnalisé

3. **Déploiement automatique**
   ```bash
   git push origin main
   ```

### Base de Données en Production

Pour la production, vous pouvez :
- Utiliser Supabase Cloud (recommandé)
- Héberger votre propre instance PostgreSQL
- Utiliser Railway ou autre service

## 📈 Fonctionnalités à Venir

- [ ] Application mobile React Native
- [ ] Programme de fidélité avancé
- [ ] Chat en direct avec conseillers
- [ ] Réalité augmentée pour essayer les produits
- [ ] Intégration avec les assistants vocaux
- [ ] Marketplace pour créateurs indépendants

## 🤝 Contribution

Nous accueillons les contributions ! Merci de :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est propriétaire. Tous droits réservés à Boutique Intime.

## 🆘 Support

Pour toute question ou support :
- Email : support@boutique-intime.fr
- Téléphone : +33 1 23 45 67 89
- Chat en direct sur le site web

---

**Boutique Intime** - Découvrez l'art du plaisir, en toute confiance. 💕
