import { HeroSektion } from "@/components/landing/HeroSektion";
import { ProblemLoesungSektion } from "@/components/landing/ProblemLoesungSektion";
import { FeaturesSektion } from "@/components/landing/FeaturesSektion";
import { TerminalDemo } from "@/components/landing/TerminalDemo";
import { PreiseSektion } from "@/components/landing/PreiseSektion";
import { TelegramCtaSektion } from "@/components/landing/TelegramCtaSektion";
import { RoadmapSektion } from "@/components/landing/RoadmapSektion";

export default function LandingPage() {
  return (
    <main>
      <HeroSektion />
      <ProblemLoesungSektion />
      <FeaturesSektion />
      <TerminalDemo />
      <PreiseSektion />
      <TelegramCtaSektion />
      <RoadmapSektion />
    </main>
  );
}
