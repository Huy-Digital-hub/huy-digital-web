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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Huy Digital",
            url: "https://huy-digital.com",
            description:
              "Trading Intelligence Platform. Regime-Erkennung, Sentiment, COT und Smart Money auf einer Plattform.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Mittelstrasse 5",
              addressLocality: "Oberburg",
              postalCode: "3414",
              addressCountry: "CH",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "marcel@huy-digital.com",
              contactType: "customer service",
            },
          }),
        }}
      />
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
