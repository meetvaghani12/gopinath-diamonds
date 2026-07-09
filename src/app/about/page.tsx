import { DetailNav } from '@/components/detail/DetailNav';
import { FounderHero } from '@/components/founder/FounderHero';
import { FounderStory } from '@/components/founder/FounderStory';
import { FounderTimeline } from '@/components/founder/FounderTimeline';
import { FounderCreed } from '@/components/founder/FounderCreed';

export default function FounderPage() {
  return (
    <>
      <DetailNav />
      <FounderHero />
      <FounderStory />
      <FounderTimeline />
      <FounderCreed />
    </>
  );
}
