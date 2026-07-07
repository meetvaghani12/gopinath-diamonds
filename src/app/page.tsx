import { HeroSection } from '@/components/home/HeroSection';
import { MarqueeStrip } from '@/components/home/MarqueeStrip';
import { CollectionsGrid } from '@/components/home/CollectionsGrid';
import { JewelleryTypes } from '@/components/home/JewelleryTypes';
import { FancyColors } from '@/components/home/FancyColors';
import { FourCsSection } from '@/components/home/FourCsSection';
import { CraftSection } from '@/components/home/CraftSection';
import { SignatureShowcase } from '@/components/home/SignatureShowcase';
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';
import { BespokeSection } from '@/components/home/BespokeSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <CollectionsGrid />
      <JewelleryTypes />
      <FancyColors />
      <FourCsSection />
      <CraftSection />
      <SignatureShowcase />
      <TestimonialsCarousel />
      <BespokeSection />
      <ContactSection />
    </>
  );
}
