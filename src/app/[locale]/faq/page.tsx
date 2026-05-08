import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { getAlternates, type Locale } from '@/lib/seo';

const faqMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'FAQ — Fun Zone Tenerife',
    description: 'All your questions about Fun Zone Tenerife answered: age requirements, group bookings, how QuizzaBoom works, escape game difficulty, cancellation policy and more.',
  },
  es: {
    title: 'Preguntas Frecuentes — Fun Zone Tenerife',
    description: 'Todas tus preguntas sobre Fun Zone Tenerife: edad mínima, reservas de grupo, cómo funciona QuizzaBoom, dificultad del escape game, cancelaciones y más.',
  },
  fr: {
    title: 'FAQ — Fun Zone Tenerife',
    description: 'Toutes vos questions sur Fun Zone Tenerife : âge minimum, réservations de groupe, fonctionnement de QuizzaBoom, difficulté de l\'escape game, annulations et plus.',
  },
  de: {
    title: 'FAQ — Fun Zone Teneriffa',
    description: 'Alle Fragen zu Fun Zone Teneriffa: Mindestalter, Gruppenbuchungen, wie QuizzaBoom funktioniert, Escape Game Schwierigkeit, Stornierungsbedingungen und mehr.',
  },
  nl: {
    title: 'FAQ — Fun Zone Tenerife',
    description: 'Al je vragen over Fun Zone Tenerife beantwoord: leeftijdsvereisten, groepsboekingen, hoe QuizzaBoom werkt, moeilijkheid escape game, annuleringsbeleid en meer.',
  },
  it: {
    title: 'FAQ — Fun Zone Tenerife',
    description: 'Tutte le domande su Fun Zone Tenerife: età minima, prenotazioni di gruppo, come funziona QuizzaBoom, difficoltà dell\'escape game, cancellazione e altro.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = faqMeta[l] ?? faqMeta['en'];
  const alternates = getAlternates('/faq');
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: alternates.canonical, languages: alternates.languages },
    openGraph: { title: m.title, description: m.description, url: alternates.canonical },
  };
}

const faqIds = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11'];

export default function FAQPage() {
  const t = useTranslations('faq');

  const faqItems = faqIds.map((id) => ({
    id,
    question: t(id as 'q1'),
    answer: t(`a${id.slice(1)}` as 'a1'),
  }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00d4ff]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10">
            <HelpCircle className="h-8 w-8 text-[#00d4ff]" />
          </div>
          <h1 className="neon-glow mb-4 text-4xl font-bold text-white sm:text-5xl">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-lg border border-border/50 bg-[#111118] px-6 transition-all duration-300 hover:border-[#00d4ff]/20 data-[state=open]:border-[#00d4ff]/30 data-[state=open]:shadow-[0_0_15px_rgba(0,212,255,0.08)]"
              >
                <AccordionTrigger className="text-left text-base font-medium text-white hover:text-[#00d4ff] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-[#111118] to-[#0d0d1a] p-8 text-center sm:p-12">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10">
              <MessageCircle className="h-6 w-6 text-[#8b5cf6]" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white">
              {t('stillQuestions')}
            </h2>
            <p className="mb-6 text-muted-foreground">
              {t('stillQuestionsSubtitle')}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="neon" size="lg" asChild>
                <Link href="/contact">{t('contactUs')}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/34623362229" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
