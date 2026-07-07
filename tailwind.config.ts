import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg)',
        'bg-deep': 'var(--bg-deep)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        text: 'var(--text)',
        'text-soft': 'var(--text-soft)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-bright': 'var(--accent-bright)',
      },
      transitionDuration: {
        '600': '600ms',
      },
    },
  },
  plugins: [],
};

export default config;
