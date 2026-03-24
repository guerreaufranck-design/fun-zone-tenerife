import SplitHero from '@/components/home/SplitHero';
import ExperienceCards from '@/components/home/ExperienceCards';
import StatsSection from '@/components/home/StatsSection';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import Gallery from '@/components/home/Gallery';

export default function HomePage() {
  return (
    <>
      <SplitHero />

      <section className="py-20 lg:py-24">
        <ExperienceCards />
      </section>

      <StatsSection />

      <section className="py-20 lg:py-24">
        <HowItWorks />
      </section>

      <section className="py-20 lg:py-24">
        <Testimonials />
      </section>

      <CTASection />

      <section className="py-20 lg:py-24">
        <Gallery />
      </section>
    </>
  );
}
