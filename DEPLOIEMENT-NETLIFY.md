# 🚀 Déploiement sur Netlify

Ce guide explique comment déployer votre boutique en ligne sur Netlify en quelques étapes simples.

## 📋 Prérequis

- Compte Netlify (gratuit)
- Repository Git (GitHub, GitLab, ou Bitbucket)
- Variables d'environnement configurées

## 🎯 Étapes de Déploiement

### Étape 1 : Préparer le Repository

1. **Créer un repository Git** sur GitHub, GitLab ou Bitbucket
2. **Ajouter le code source** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Boutique Intime e-commerce"
   git remote add origin <votre-url-git>
   git push -u origin main
   ```

### Étape 2 : Configuration Netlify

1. **Se connecter à Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - Se connecter avec GitHub, GitLab, Bitbucket ou email

2. **Importer le projet**
   - Cliquer sur "Add new site" → "Import an existing project"
   - Choisir votre provider Git (GitHub/GitLab/Bitbucket)
   - Sélectionner le repository de votre boutique

3. **Configuration du Build**
   - **Base directory** : (laisser vide)
   - **Build command** : `npm run build`
   - **Publish directory** : `.next`

### Étape 3 : Variables d'Environnement

Dans le dashboard Netlify, aller dans **Site settings** → **Environment variables** et ajouter :

```env
# Supabase (obligatoire)
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anonyme
SUPABASE_SERVICE_ROLE_KEY=votre_clé_service

# Stripe (pour les paiements)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=votre_clé_publiable_stripe
STRIPE_SECRET_KEY=votre_clé_secrète_stripe

# Configuration du site
NEXT_PUBLIC_SITE_URL=https://votre-site.netlify.app
NEXT_PUBLIC_SITE_NAME=Boutique Intime - Plaisir & Confiance

# Sécurité
NEXTAUTH_SECRET=votre_secret_nextauth
NEXTAUTH_URL=https://votre-site.netlify.app
```

### Étape 4 : Déploiement

1. **Cliquer sur "Deploy site"**
2. **Attendre la fin du build** (2-3 minutes)
3. **Récupérer l'URL générée** (ex: `https://random-name.netlify.app`)

## 🔧 Configuration Avancée

### Build Settings Personnalisés

Si besoin, créer un fichier `netlify.toml` à la racine :

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Fonctions Serverless (optionnel)

Pour les fonctions backend, créer un dossier `netlify/functions/` :

```
netlify/
  functions/
    stripe-webhook.js
    contact-form.js
```

## 🚨 Résolution des Problèmes Courants

### Erreur de Build

**Problème** : `Cannot find module 'next'`
**Solution** : Vérifier que toutes les dépendances sont installées :
```bash
npm install
npm run build
```

**Problème** : Variables d'environnement manquantes
**Solution** : Vérifier que toutes les variables sont définies dans Netlify

### Performance

**Optimisations automatiques** :
- Netlify compresse automatiquement les assets
- CDN global intégré
- Cache optimisé pour les assets statiques

## 📊 Analytics et Monitoring

### Analytics Intégrés
- **Netlify Analytics** : Activé par défaut
- **Google Analytics** : Ajouter le script dans `layout.tsx`
- **Monitoring** : Logs de build disponibles dans le dashboard

### SEO et Performance
- **Sitemap** : Généré automatiquement par Next.js
- **robots.txt** : Créer à la racine si nécessaire
- **Performance** : Outil de monitoring intégré

## 🔒 Sécurité

### Headers de Sécurité
Netlify ajoute automatiquement :
- HTTPS forcé
- Headers de sécurité (XSS, CSRF protection)
- Protection contre le clickjacking

### Authentification
- Utiliser NextAuth.js avec providers OAuth
- Configurer les callbacks d'authentification
- Gestion sécurisée des sessions

## 🚀 Commandes Utiles

```bash
# Build local pour tester
npm run build

# Démarrer en développement
npm run dev

# Build de production
npm run build
npm start

# Logs Netlify
netlify logs --site-id=votre-site-id
```

## 📞 Support

- **Documentation Netlify** : [docs.netlify.com](https://docs.netlify.com)
- **Support communautaire** : [community.netlify.com](https://community.netlify.com)
- **Status** : [status.netlify.com](https://status.netlify.com)

## 🎯 Prochaines Étapes Après Déploiement

1. **Configurer le domaine personnalisé** (optionnel)
2. **Ajouter Google Analytics**
3. **Configurer le monitoring d'erreurs**
4. **Optimiser les performances** (CDN, images)
5. **Ajouter un certificat SSL personnalisé**

---

**🎉 Félicitations !** Votre boutique est maintenant déployée sur Netlify et accessible au monde entier !

Votre URL : `https://votre-site.netlify.app`

N'oubliez pas de configurer Supabase et Stripe pour activer toutes les fonctionnalités.