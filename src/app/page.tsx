import CertificationRouteSection from "@/components/certificationRouteSection/CertificationRouteSection";
import CommunityCtaSection from "@/components/communityCtaSection/CommunityCtaSection";
import CoreCurriculumSection from "@/components/coreCurriculumSection/CoreCurriculumSection";
import HandsOnLabsSection from "@/components/handsOnLabsSection/HandsOnLabsSection";
import HeroSection from "@/components/heroSection/HeroSection";

export default function Home() {
  return (
    <div className="min-h-lvh">
      <HeroSection />
      <CoreCurriculumSection />
      <HandsOnLabsSection />
      <CertificationRouteSection />
      <CommunityCtaSection />
    </div>
  );
}
