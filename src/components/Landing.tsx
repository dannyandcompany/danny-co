import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { CTASection } from '@/components/sections/CTASection';

/**
 * Shared landing composition rendered identically across every domain
 * (Option B — same UI). Per-domain branding is applied by the layout chrome.
 */
export function Landing() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <EcosystemSection />
      <CTASection />
    </>
  );
}
