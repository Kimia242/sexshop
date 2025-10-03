import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs de l'amour (rouge, rose)
        'love-red': '#E50914',
        'love-pink': '#FF3366',
        'love-rose': '#FF69B4',

        // Couleurs de la confiance (bleu profond)
        'trust-blue': '#1D3557',
        'trust-navy': '#2C3E50',
        'trust-slate': '#34495E',

        // Couleurs de la découverte (violet / dégradés subtils)
        'discovery-purple': '#6A0572',
        'discovery-violet': '#8E44AD',
        'discovery-lavender': '#9B59B6',

        // Palette neutre élégante
        'neutral-50': '#FAFAFA',
        'neutral-100': '#F5F5F5',
        'neutral-200': '#E5E5E5',
        'neutral-300': '#D4D4D4',
        'neutral-400': '#A3A3A3',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',

        // Palette de succès et d'alerte
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'elegant': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-love': 'linear-gradient(135deg, #E50914 0%, #FF3366 50%, #FF69B4 100%)',
        'gradient-trust': 'linear-gradient(135deg, #1D3557 0%, #2C3E50 100%)',
        'gradient-discovery': 'linear-gradient(135deg, #6A0572 0%, #8E44AD 50%, #9B59B6 100%)',
        'gradient-sensual': 'linear-gradient(135deg, #FF3366 0%, #6A0572 50%, #1D3557 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'sensual': '0 10px 30px rgba(229, 9, 20, 0.1)',
        'trust': '0 10px 30px rgba(29, 53, 87, 0.1)',
        'discovery': '0 10px 30px rgba(106, 5, 114, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config