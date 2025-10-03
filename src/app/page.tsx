'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Heading';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Heart,
  Star,
  Shield,
  Truck,
  Gift,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function HomePage() {
  const [isDiscreetMode, setIsDiscreetMode] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: 'Ensemble Lingerie Dentelle',
      price: 89.90,
      originalPrice: 129.90,
      image: '/placeholder-product-1.jpg',
      rating: 4.8,
      isNew: true,
    },
    {
      id: 2,
      name: 'Coffret Plaisir Couple',
      price: 149.90,
      originalPrice: 189.90,
      image: '/placeholder-product-2.jpg',
      rating: 4.9,
      isNew: false,
    },
    {
      id: 3,
      name: 'Huile de Massage Sensuelle',
      price: 34.90,
      originalPrice: 44.90,
      image: '/placeholder-product-3.jpg',
      rating: 4.7,
      isNew: false,
    },
  ];

  const categories = [
    {
      name: 'Lingerie Sexy',
      description: 'Dentelle fine et matières premium',
      image: '/placeholder-category-1.jpg',
      productCount: 156,
    },
    {
      name: 'Sextoys Femme',
      description: 'Découvrez de nouvelles sensations',
      image: '/placeholder-category-2.jpg',
      productCount: 89,
    },
    {
      name: 'Pour Couples',
      description: 'Partagez des moments complices',
      image: '/placeholder-category-3.jpg',
      productCount: 67,
    },
    {
      name: 'Accessoires',
      description: 'Tout pour sublimer vos instants',
      image: '/placeholder-category-4.jpg',
      productCount: 134,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Confidentialité Garantie',
      description: 'Emballage discret et livraison sécurisée',
    },
    {
      icon: Truck,
      title: 'Livraison Rapide',
      description: '24/48h en France métropolitaine',
    },
    {
      icon: Heart,
      title: 'Sélection Premium',
      description: 'Produits de qualité, marques reconnues',
    },
    {
      icon: Gift,
      title: 'Cadeaux Surprise',
      description: 'Goodies offerts dès 100€ d\'achat',
    },
  ];

  return (
    <div className={`min-h-screen ${isDiscreetMode ? 'discreet-mode' : ''}`}>
      <Header
        isDiscreetMode={isDiscreetMode}
        onToggleDiscreetMode={() => setIsDiscreetMode(!isDiscreetMode)}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-sensual">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container-sensual py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="heading-elegant mb-6">
                Découvrez l'art du plaisir,
                <br />
                <span className="text-white">en toute confiance</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Boutique premium dédiée aux adultes modernes en quête de sensations uniques.
                Discrétion, qualité et plaisir garantis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Explorer la Collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-trust-blue">
                  Conseils d'Experts
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-bounce-subtle">
          <Sparkles className="w-6 h-6 text-love-pink opacity-60" />
        </div>
        <div className="absolute top-1/3 right-16 animate-bounce-subtle" style={{ animationDelay: '1s' }}>
          <Heart className="w-8 h-8 text-white opacity-40" />
        </div>
        <div className="absolute bottom-1/4 left-20 animate-bounce-subtle" style={{ animationDelay: '2s' }}>
          <Star className="w-5 h-5 text-love-rose opacity-50" />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container-sensual">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Pourquoi nous choisir ?
            </Heading>
            <p className="text-sensual max-w-2xl mx-auto">
              Une expérience d'achat unique alliant qualité, discrétion et expertise
              pour votre satisfaction totale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center card-elegant" hover>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-love rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-4 text-trust-blue">
                    {feature.title}
                  </h3>
                  <p className="text-sensual">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-sensual">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Explorez nos univers
            </Heading>
            <p className="text-sensual max-w-2xl mx-auto">
              Découvrez notre sélection organisée par thématiques pour trouver
              exactement ce qui vous fait envie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="card-product group cursor-pointer" hover>
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-love-pink/20 to-love-red/20 rounded-t-2xl flex items-center justify-center">
                    <Heart className="w-16 h-16 text-love-red opacity-50" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-semibold text-xl mb-2 text-trust-blue">
                      {category.name}
                    </h3>
                    <p className="text-sensual mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">
                        {category.productCount} produits
                      </span>
                      <ArrowRight className="w-4 h-4 text-love-red group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container-sensual">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Nos coups de cœur
            </Heading>
            <p className="text-sensual max-w-2xl mx-auto">
              Sélection exclusive de produits plébiscités par notre communauté
              pour leur qualité exceptionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="card-product group cursor-pointer" hover>
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-love-pink/10 to-love-red/10 rounded-t-2xl flex items-center justify-center relative">
                    <Heart className="w-20 h-20 text-love-red opacity-30" />
                    {product.isNew && (
                      <span className="absolute top-4 left-4 bg-love-red text-white text-xs px-2 py-1 rounded-full">
                        Nouveau
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-semibold text-lg mb-2 text-trust-blue">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-neutral-600 ml-1">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg text-love-red">
                          {product.price}€
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-neutral-400 line-through">
                            {product.originalPrice}€
                          </span>
                        )}
                      </div>
                      <Button size="sm">
                        Découvrir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Voir toute la collection
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-trust-blue text-white">
        <div className="container-sensual">
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2} className="mb-6 text-white">
              Votre satisfaction, notre priorité
            </Heading>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Plus de 50 000 clients satisfaits nous font confiance.
              Rejoignez notre communauté et découvrez pourquoi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-love-pink mb-2">98%</div>
                <div className="text-blue-100">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-love-pink mb-2">24h</div>
                <div className="text-blue-100">Livraison express</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-love-pink mb-2">100%</div>
                <div className="text-blue-100">Discret & sécurisé</div>
              </div>
            </div>

            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-trust-blue">
              Rejoindre la communauté
            </Button>
          </div>
        </div>
      </section>

      <Footer isDiscreetMode={isDiscreetMode} />
    </div>
  );
}
