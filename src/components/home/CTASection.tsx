import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Users, PartyPopper } from 'lucide-react';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-[#8b5cf6]/10 to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[#0a0a0f]/60" />

      {/* Radial glows */}
      <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-[#00d4ff]/5 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#8b5cf6]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl py-20 text-center sm:py-24">
        {/* Heading */}
        <h2 className="neon-glow mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {t('title')}
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {t('subtitle')}
        </p>

        {/* Primary CTA */}
        <div className="mb-8">
          <Button variant="neon" size="xl" asChild>
            <Link href="/book">{t('bookNow')}</Link>
          </Button>
        </div>

        {/* Secondary links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/contact"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#00d4ff]"
          >
            <Users size={16} className="transition-colors group-hover:text-[#00d4ff]" />
            {t('teamBuilding')}
          </Link>
          <span className="text-border">|</span>
          <Link
            href="/contact"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#8b5cf6]"
          >
            <PartyPopper size={16} className="transition-colors group-hover:text-[#8b5cf6]" />
            {t('bachelorParties')}
          </Link>
        </div>
      </div>
    </section>
  );
}
