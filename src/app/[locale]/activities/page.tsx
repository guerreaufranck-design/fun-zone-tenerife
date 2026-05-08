import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';
import { activities, activityCategories, type ActivityCategory } from '@/data/activities';
import { getAlternates, type Locale } from '@/lib/seo';

const activitiesMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Things to Do in Tenerife | Best Activities & Experiences 2025',
    description:
      'Discover the best activities in Tenerife: whale watching, axe throwing, quiz room, Teide cable car, catamaran cruises, jet ski, escape games and more. Book directly or via GetYourGuide.',
  },
  es: {
    title: 'Qué Hacer en Tenerife | Mejores Actividades y Experiencias 2025',
    description:
      'Descubre las mejores actividades en Tenerife: avistamiento de ballenas, lanzamiento de hachas, quiz room, teleférico del Teide, cruceros en catamarán, jet ski, escape games y más.',
  },
  fr: {
    title: 'Que Faire à Tenerife | Meilleures Activités & Expériences 2025',
    description:
      'Découvrez les meilleures activités à Tenerife : observation des baleines, lancer de haches, quiz room, téléphérique du Teide, croisières catamaran, jet ski, escape games et plus encore.',
  },
  de: {
    title: 'Aktivitäten auf Teneriffa | Beste Erlebnisse & Ausflüge 2025',
    description:
      'Entdecken Sie die besten Aktivitäten auf Teneriffa: Walbeobachtung, Beilwerfen, Quiz Room, Teide-Seilbahn, Katamaranausflüge, Jetski, Escape Games und vieles mehr.',
  },
  nl: {
    title: 'Activiteiten op Tenerife | Beste Ervaringen & Uitjes 2025',
    description:
      'Ontdek de beste activiteiten op Tenerife: walvissen spotten, bijl gooien, quiz room, Teide kabelbaan, catamaranreizen, jetski, escape games en meer.',
  },
  it: {
    title: 'Cosa Fare a Tenerife | Le Migliori Attività ed Esperienze 2025',
    description:
      "Scopri le migliori attività a Tenerife: avvistamento balene, lancio delle asce, quiz room, funivia del Teide, crociere in catamarano, moto d'acqua, escape games e altro ancora.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = activitiesMeta[l] ?? activitiesMeta['en'];
  const alternates = getAlternates('/activities');
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: alternates.canonical, languages: alternates.languages },
    openGraph: {
      title: m.title,
      description: m.description,
      url: alternates.canonical,
      images: [{ url: 'https://funzonetenerife.com/images/og-image.jpg', width: 1200, height: 630 }],
    },
  };
}

const categoryEmoji: Record<ActivityCategory, string> = {
  'Indoor Fun': '🎮',
  'Water & Sea': '🌊',
  'Nature & Adventure': '🏔️',
  'Parks & Attractions': '🎡',
  'Evenings & Shows': '🌙',
};

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00d4ff]/5 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h1 className="neon-glow mb-4 text-4xl font-bold text-white sm:text-5xl">
            Things to Do in Tenerife
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Handpicked activities for every taste — from indoor thrills to epic outdoor adventures.
            Fun Zone experiences featured first, all other activities bookable via GetYourGuide.
          </p>
        </div>
      </section>

      {/* Activities by category */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {activityCategories.map((category) => {
            const categoryActivities = activities.filter((a) => a.category === category);
            if (categoryActivities.length === 0) return null;
            return (
              <div key={category}>
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
                  <span className="text-3xl">{categoryEmoji[category]}</span>
                  {category}
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryActivities.map((activity) => (
                    <Link
                      key={activity.slug}
                      href={{ pathname: '/activities/[slug]' as const, params: { slug: activity.slug } }}
                      className="group block"
                    >
                      <Card className="h-full overflow-hidden border-border/50 bg-[#111118] transition-all duration-300 hover:border-[#00d4ff]/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]">
                        {/* Card image */}
                        <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${activity.gradient}`}>
                          {activity.image ? (
                            <Image
                              src={activity.image}
                              alt={activity.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-5xl">{activity.emoji}</span>
                            </div>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#111118] to-transparent" />
                          {activity.isFunZone && (
                            <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-neon-orange px-2.5 py-1 text-xs font-bold text-white shadow-[0_0_10px_rgba(255,140,0,0.5)]">
                              <Star className="h-3 w-3 fill-white" />
                              Fun Zone
                            </div>
                          )}
                        </div>

                        <CardContent className="p-4">
                          <p className="mb-1 text-xs font-medium text-[#00d4ff]">{activity.location}</p>
                          <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-[#00d4ff]">
                            {activity.name}
                          </h3>
                          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                            {activity.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-white">{activity.price}</span>
                            <span className="flex items-center gap-1 text-sm font-medium text-[#00d4ff]">
                              {activity.isFunZone ? 'Book Direct' : 'See Details'}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
