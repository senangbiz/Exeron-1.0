import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import StatsSection from '../sections/StatsSection';
import CTASection from '../sections/CTASection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}
