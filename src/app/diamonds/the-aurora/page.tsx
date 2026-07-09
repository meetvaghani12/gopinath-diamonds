import { Suspense } from 'react';
import { DetailNav } from '@/components/detail/DetailNav';
import { StoneHero } from '@/components/detail/StoneHero';
import { GradeBreakdown } from '@/components/detail/GradeBreakdown';
import { ProportionsSection } from '@/components/detail/ProportionsSection';
import { CertificateSection } from '@/components/detail/CertificateSection';
import { ViewingForm } from '@/components/detail/ViewingForm';
import { DiamondShapes } from '@/components/detail/DiamondShapes';
import { RelatedStones } from '@/components/detail/RelatedStones';

export default function AuroraDetailPage() {
  // The global layout supplies SparkleField, Footer and the theme.
  // This page only adds its back-nav and the stone sections.
  return (
    <>
      <DetailNav />
      <Suspense fallback={null}>
        <StoneHero />
        <GradeBreakdown />
        <ProportionsSection />
        <CertificateSection />
        <DiamondShapes />
        <ViewingForm />
        <RelatedStones />
      </Suspense>
    </>
  );
}
