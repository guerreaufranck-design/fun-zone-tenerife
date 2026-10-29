import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Headphones, MapPin, Clock, Wifi } from 'lucide-react';
import { getAlternates, type Locale } from '@/lib/seo';
import { audioGuide, LUME_URL } from '@/data/audio-guide';

const LOCALES: Locale[] = ['en', 'es', 'fr', 'de', 'nl', 'it'];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (locale as Locale) in audioGuide ? (locale as Locale) : 'en';
  const c = audioGuide[l];
  const alternates = getAlternates('/audio-guide-canaries');

  return {
    title: c.seoTitle,
    description: c.seoDescription,
    keywords: c.keywords,
    alternates: { canonical: `https://funzonetenerife.com/${l}/${c.slug}`, languages: alternates.languages },
    openGraph: {
      title: c.seoTitle,
      description: c.seoDescription,
      url: `https://funzonetenerife.com/${l}/${c.slug}`,
      siteName: 'Fun Zone Tenerife',
      locale: l,
      type: 'website',
      images: [{ url: 'https://funzonetenerife.com/images/og-image.jpg', width: 1200, height: 630 }],
    },
  };
}

const BENEFIT_ICONS = [Clock, Headphones, Wifi, MapPin];

export default async function AudioGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = (locale as Locale) in audioGuide ? (locale as Locale) : 'en';
  const c = audioGuide[l];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-1/4 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#00d4ff]/5 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff]">
            <Headphones size={14} /> Canary Islands
          </span>
          <h1 className="neon-glow-blue mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{c.h1}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{c.subtitle}</p>
          <div className="mt-8">
            <a
              href={LUME_URL}
              target="_blank"
              rel="noopener nofollow sponsored"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00d4ff] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0a0a0f] transition-all hover:bg-[#33ddff]"
            >
              <Headphones size={18} /> {c.ctaButton}
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-white/70">{c.intro}</p>
      </section>

      {/* BENEFITS */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-[#00d4ff]">{c.benefitsTitle}</h2>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {c.benefits.map((item, i) => {
              const Icon = BENEFIT_ICONS[i] ?? Headphones;
              return (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-border/50 bg-[#111118] p-4 text-sm text-white/85">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00d4ff]/10 text-[#00d4ff]">
                    <Icon size={16} />
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#00d4ff]/20 bg-gradient-to-br from-[#00d4ff]/5 to-[#111118] p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-white">{c.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75">{c.ctaText}</p>
          <div className="mt-7">
            <a
              href={LUME_URL}
              target="_blank"
              rel="noopener nofollow sponsored"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00d4ff] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0a0a0f] transition-all hover:bg-[#33ddff]"
            >
              <Headphones size={18} /> {c.ctaButton}
            </a>
          </div>
          <p className="mt-4 text-xs text-white/40">lume.travel</p>
        </div>
      </section>
    </div>
  );
}
