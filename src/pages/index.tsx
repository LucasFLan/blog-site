import { FeatureSection } from "@/components/future-section";
import { HeroSection } from "@/components/hero-section/hero-section";
import { SupportSection } from "@/components/support-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
      </article>
    </>
  );
}
