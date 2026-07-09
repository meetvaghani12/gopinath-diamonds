'use client';

import { useEffect, useRef } from 'react';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { useThemeStore, applyTheme } from '@/stores/theme';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SparkleField } from '@/components/layout/SparkleField';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme);
  const applied = useRef(false);

  useEffect(() => {
    applyTheme(theme);
    applied.current = true;
  }, [theme]);

  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <SparkleField />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
