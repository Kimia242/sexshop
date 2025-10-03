'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Heart, ShoppingCart, User, Menu, Search, Eye, EyeOff } from 'lucide-react';

interface HeaderProps {
  isDiscreetMode?: boolean;
  onToggleDiscreetMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDiscreetMode = false,
  onToggleDiscreetMode,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Boutique', href: '/boutique' },
    { name: 'Catégories', href: '/categories' },
    { name: 'Blog', href: '/blog' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isDiscreetMode
        ? 'bg-neutral-800/95 backdrop-blur-md'
        : 'bg-white/95 backdrop-blur-md'
    } border-b border-neutral-200`}>
      <div className="container-sensual">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center ${
              isDiscreetMode ? 'bg-love-pink' : 'bg-gradient-love'
            }`}>
              <Heart className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </div>
            <span className={`font-serif font-bold text-lg lg:text-xl ${
              isDiscreetMode ? 'text-white' : 'text-gradient'
            }`}>
              Boutique Intime
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:scale-105 ${
                  isDiscreetMode
                    ? 'text-neutral-300 hover:text-white'
                    : 'text-trust-blue hover:text-love-red'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Discreet Mode Toggle */}
            <button
              onClick={onToggleDiscreetMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDiscreetMode
                  ? 'bg-love-pink text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
              title={isDiscreetMode ? 'Désactiver le mode discret' : 'Activer le mode discret'}
            >
              {isDiscreetMode ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDiscreetMode
                  ? 'text-neutral-300 hover:text-white'
                  : 'text-neutral-600 hover:text-love-red'
              }`}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Cart */}
            <Link
              href="/panier"
              className={`p-2 rounded-full transition-colors duration-300 relative ${
                isDiscreetMode
                  ? 'text-neutral-300 hover:text-white'
                  : 'text-neutral-600 hover:text-love-red'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-love-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* User Account */}
            <Link
              href="/mon-compte"
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDiscreetMode
                  ? 'text-neutral-300 hover:text-white'
                  : 'text-neutral-600 hover:text-love-red'
              }`}
            >
              <User className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
                isDiscreetMode
                  ? 'text-neutral-300 hover:text-white'
                  : 'text-neutral-600 hover:text-love-red'
              }`}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${
            isDiscreetMode ? 'border-neutral-700 bg-neutral-800' : 'border-neutral-200 bg-white'
          }`}>
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 ${
                    isDiscreetMode
                      ? 'text-neutral-300 hover:text-white'
                      : 'text-trust-blue hover:text-love-red'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className={`py-4 border-t ${
            isDiscreetMode ? 'border-neutral-700 bg-neutral-800' : 'border-neutral-200 bg-white'
          }`}>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className={`flex-1 px-4 py-2 rounded-full border-2 transition-colors duration-300 ${
                  isDiscreetMode
                    ? 'border-neutral-600 bg-neutral-700 text-white placeholder-neutral-400'
                    : 'border-neutral-200 bg-white text-neutral-700 placeholder-neutral-400'
                } focus:outline-none focus:border-love-red`}
              />
              <Button variant={isDiscreetMode ? 'secondary' : 'primary'}>
                Rechercher
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};