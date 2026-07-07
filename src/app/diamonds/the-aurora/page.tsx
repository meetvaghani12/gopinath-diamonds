'use client';

import { useEffect } from 'react';
import { useThemeStore, applyTheme } from '@/stores/theme';
import { DetailNav } from '@/components/detail/DetailNav';
import { StoneHero } from '@/components/detail/StoneHero';
import { GradeBreakdown } from '@/components/detail/GradeBreakdown';
import { ProportionsSection } from '@/components/detail/ProportionsSection';
import { CertificateSection } from '@/components/detail/CertificateSection';
import { ViewingForm } from '@/components/detail/ViewingForm';
import { DiamondShapes } from '@/components/detail/DiamondShapes';
import { RelatedStones } from '@/components/detail/RelatedStones';
import { Footer } from '@/components/layout/Footer';
import { SparkleField } from '@/components/layout/SparkleField';
import { PaletteSwitcher } from '@/components/layout/PaletteSwitcher';

export default function AuroraDetailPage() {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <>
      <SparkleField />
      <PaletteSwitcher />
      <DetailNav />
      <main>
        <StoneHero />
        <GradeBreakdown />
        <ProportionsSection />
        <CertificateSection />
        <DiamondShapes />
        <ViewingForm />
        <RelatedStones />
      </main>
      <Footer />
    </>
  );
}
