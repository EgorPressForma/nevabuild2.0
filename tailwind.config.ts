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
        nb: {
          dark:        '#16221C',
          'dark-deep': '#0F1813',
          'dark-card': '#1E3528',
          'dark-border':'#2A4736',
          green:       '#12B669',
          'green-dark':'#0E9355',
          'green-muted':'#5FE0A2',
          lime:        '#a9ec46',
          'lime-dark': '#8dd62e',
          red:         '#E11B22',
          'red-dark':  '#C01018',
          'bg-light':  '#F4FAF6',
          'bg-lighter':'#EAF8F0',
          border:      '#E4EFE8',
          muted:       '#9FB3A8',
          'muted-dark':'#6F8378',
          'nav-text':  '#2C3A33',
        },
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        mulish:  ['var(--font-mulish)',  'sans-serif'],
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(to bottom, rgba(15,24,19,0.72) 0%, rgba(15,24,19,0.55) 60%, rgba(15,24,19,0.85) 100%)',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'fade-in':   'fadeIn 0.5s ease both',
        'count-up':  'countUp 0.4s ease both',
        'scroll-x':       'scrollX 32s linear infinite',
        'scroll-x-slow':  'scrollX 55s linear infinite',
        'scroll-x-slow2': 'scrollX 70s linear infinite',
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        countUp: { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        scrollX: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
