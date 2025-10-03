import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  isDiscreetMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDiscreetMode = false }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    boutique: [
      { name: 'Lingerie Sexy', href: '/categories/lingerie-sexy' },
      { name: 'Sextoys Femme', href: '/categories/sextoys-femme' },
      { name: 'Sextoys Homme', href: '/categories/sextoys-homme' },
      { name: 'Pour Couples', href: '/categories/couples' },
      { name: 'Accessoires', href: '/categories/accessoires' },
    ],
    support: [
      { name: 'Guide des tailles', href: '/guide-tailles' },
      { name: 'Modes de livraison', href: '/livraison' },
      { name: 'Retours & échanges', href: '/retours' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
    ],
    entreprise: [
      { name: 'À propos', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Carrières', href: '/carrieres' },
      { name: 'Presse', href: '/presse' },
      { name: 'Partenaires', href: '/partenaires' },
    ],
    legal: [
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'CGV', href: '/cgv' },
      { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
      { name: 'Cookies', href: '/cookies' },
    ],
  };

  return (
    <footer className={`${
      isDiscreetMode ? 'bg-neutral-900' : 'bg-trust-blue'
    } text-white`}>
      <div className="container-sensual">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-love flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-serif font-bold text-xl">Boutique Intime</span>
              </div>
              <p className={`mb-6 leading-relaxed ${
                isDiscreetMode ? 'text-neutral-300' : 'text-blue-100'
              }`}>
                Découvrez l'art du plaisir en toute confiance. Notre boutique propose une sélection
                premium de produits pour adultes, dans le respect de votre intimité.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isDiscreetMode
                      ? 'bg-neutral-800 text-neutral-300 hover:bg-love-pink hover:text-white'
                      : 'bg-blue-600 text-blue-100 hover:bg-love-pink hover:text-white'
                  }`}
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isDiscreetMode
                      ? 'bg-neutral-800 text-neutral-300 hover:bg-love-pink hover:text-white'
                      : 'bg-blue-600 text-blue-100 hover:bg-love-pink hover:text-white'
                  }`}
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isDiscreetMode
                      ? 'bg-neutral-800 text-neutral-300 hover:bg-love-pink hover:text-white'
                      : 'bg-blue-600 text-blue-100 hover:bg-love-pink hover:text-white'
                  }`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Boutique Links */}
            <div>
              <h3 className="font-serif font-semibold text-lg mb-6">Boutique</h3>
              <ul className="space-y-3">
                {footerLinks.boutique.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`transition-colors duration-300 hover:text-love-pink ${
                        isDiscreetMode ? 'text-neutral-300' : 'text-blue-100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-serif font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`transition-colors duration-300 hover:text-love-pink ${
                        isDiscreetMode ? 'text-neutral-300' : 'text-blue-100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif font-semibold text-lg mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-love-pink flex-shrink-0" />
                  <span className={`text-sm ${isDiscreetMode ? 'text-neutral-300' : 'text-blue-100'}`}>
                    contact@boutique-intime.fr
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-love-pink flex-shrink-0" />
                  <span className={`text-sm ${isDiscreetMode ? 'text-neutral-300' : 'text-blue-100'}`}>
                    +33 1 23 45 67 89
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-love-pink flex-shrink-0" />
                  <span className={`text-sm ${isDiscreetMode ? 'text-neutral-300' : 'text-blue-100'}`}>
                    Paris, France
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`py-8 border-t ${isDiscreetMode ? 'border-neutral-700' : 'border-blue-600'}`}>
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-serif font-semibold text-xl mb-4">
              Restez dans la confidence
            </h3>
            <p className={`mb-6 ${isDiscreetMode ? 'text-neutral-300' : 'text-blue-100'}`}>
              Inscrivez-vous à notre newsletter pour découvrir nos nouveautés en avant-première.
            </p>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-full bg-white text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-love-pink"
              />
              <Button variant="outline" className="px-6">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={`py-6 border-t ${isDiscreetMode ? 'border-neutral-700' : 'border-blue-600'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`text-sm ${isDiscreetMode ? 'text-neutral-400' : 'text-blue-200'}`}>
              © {currentYear} Boutique Intime. Tous droits réservés.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 hover:text-love-pink ${
                    isDiscreetMode ? 'text-neutral-400' : 'text-blue-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};