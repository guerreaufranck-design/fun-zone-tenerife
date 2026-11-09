import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Compass, Puzzle, ShieldCheck, Ticket,
  Map, Globe, Star, Layers,
} from 'lucide-react';
import { getAlternates, type Locale } from '@/lib/seo';

const aboutMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'About Fun Zone Tenerife | Your Guide to the Best Things to Do',
    description: 'Fun Zone Tenerife is your honest guide to the best things to do in Tenerife: handpicked tours and activities plus our own self-guided outdoor escape games.',
  },
  es: {
    title: 'Sobre Fun Zone Tenerife | Tu Guía de Qué Hacer en la Isla',
    description: 'Fun Zone Tenerife es tu guía honesta de las mejores cosas que hacer en Tenerife: tours y actividades seleccionados y nuestros escape games al aire libre.',
  },
  fr: {
    title: 'À Propos de Fun Zone Tenerife | Votre Guide des Activités',
    description: 'Fun Zone Tenerife est votre guide honnête des meilleures choses à faire à Tenerife : excursions et activités sélectionnées et nos escape games outdoor.',
  },
  de: {
    title: 'Über Fun Zone Teneriffa | Dein Guide für Aktivitäten',
    description: 'Fun Zone Teneriffa ist dein ehrlicher Guide für die besten Aktivitäten auf Teneriffa: handverlesene Touren plus unsere eigenen Outdoor-Escape-Games.',
  },
  nl: {
    title: 'Over Fun Zone Tenerife | Jouw Gids voor Activiteiten',
    description: 'Fun Zone Tenerife is jouw eerlijke gids voor de leukste dingen om te doen op Tenerife: zorgvuldig gekozen tours plus onze eigen outdoor escape games.',
  },
  it: {
    title: 'Chi Siamo, Fun Zone Tenerife | La Tua Guida alle Attività',
    description: 'Fun Zone Tenerife è la tua guida onesta alle migliori cose da fare a Tenerife: tour ed esperienze selezionati e i nostri escape game all\'aperto.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = aboutMeta[l] ?? aboutMeta['en'];
  const alternates = getAlternates('/about');
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: alternates.canonical, languages: alternates.languages },
    openGraph: { title: m.title, description: m.description, url: alternates.canonical },
  };
}

const features = [
  {
    icon: Compass,
    title: 'Handpicked, not padded out',
    description: 'We do not list everything under the sun. We pick the tours and experiences that are actually worth your time and money, so you spend less time comparing and more time enjoying the island.',
    color: '#00d4ff',
  },
  {
    icon: Puzzle,
    title: 'Our own outdoor escape games',
    description: 'Fun Zone runs self-guided outdoor escape games across real Tenerife towns. No venue, no fixed times. You play at your own pace, any day, with your phone and the streets as the board.',
    color: '#8b5cf6',
  },
  {
    icon: ShieldCheck,
    title: 'Honest recommendations',
    description: 'We only point you to operators we would send our own friends to. When something is a tourist trap, we leave it off. The goal is a trip you remember for the right reasons.',
    color: '#00ff88',
  },
  {
    icon: Ticket,
    title: 'Easy, secure booking',
    description: 'Most activities are booked through GetYourGuide, with free cancellation on many of them. Our escape games are booked directly. Either way it takes a couple of minutes.',
    color: '#ff6b00',
  },
];

const stats = [
  { icon: Layers, value: '4', label: 'Activity Categories' },
  { icon: Map, value: '4', label: 'Escape Game Towns' },
  { icon: Globe, value: '6', label: 'Languages' },
  { icon: Star, value: 'Island-wide', label: 'Coverage' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-[#00d4ff]/5 blur-[120px]" />
        <div className="absolute right-1/3 top-2/3 h-[400px] w-[400px] rounded-full bg-[#8b5cf6]/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h1 className="neon-glow mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            About Fun Zone Tenerife
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Your guide to the best things to do in Tenerife, from the people who actually live the island.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-border/50 bg-[#111118]">
            <CardContent className="space-y-6 p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fun Zone Tenerife started with a simple frustration. Planning a trip to the island meant wading through endless listings, fake reviews and tours that looked nothing like the photos. We wanted one place that just told you, honestly, what is worth doing.
                </p>
                <p>
                  So that is what we built. A curated guide to the best activities in Tenerife, from whale watching and Teide at sunset to boat trips, jet skis and the parks the kids will not stop talking about. We point you to the operators we trust, and you book in a couple of taps.
                </p>
                <p>
                  Alongside the guide we run our own thing too: self-guided outdoor escape games across towns like Los Cristianos, La Laguna, Puerto de la Cruz and Garachico. They turn an ordinary walk into a hunt for clues and hidden stories, played at your own pace, any day of the week. No screens, no walls, just you and the island.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="neon-glow mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="group border-border/50 bg-[#111118] transition-all duration-300 hover:border-[color:var(--feat-color)]/30 hover:shadow-[0_0_25px_var(--feat-glow)]"
                  style={{
                    '--feat-color': feature.color,
                    '--feat-glow': `${feature.color}10`,
                  } as React.CSSProperties}
                >
                  <CardContent className="flex gap-5 p-6 sm:p-8">
                    <div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110"
                      style={{
                        borderColor: `${feature.color}30`,
                        backgroundColor: `${feature.color}10`,
                      }}
                    >
                      <Icon className="h-7 w-7" style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent" />
        <div className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00d4ff]/[0.02] via-transparent to-[#00d4ff]/[0.02]" />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex flex-col items-center text-center">
                    <Icon className="mb-3 h-8 w-8 text-[#00d4ff]/50" />
                    <div className="neon-glow mb-2 text-4xl font-bold text-[#00d4ff] sm:text-5xl">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent" />
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="neon-glow mb-6 text-3xl font-bold text-white sm:text-4xl">
            Ready to explore Tenerife?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Browse the island&apos;s best activities, or turn a town into your own adventure with an outdoor escape game.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="neon" size="xl" asChild>
              <Link href="/activities">See all activities</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/escape-game">Outdoor escape games</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
