import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, MapPin, Clock, Tag, CheckCircle2, ExternalLink, Star } from 'lucide-react';
import { activities } from '@/data/activities';
import { getAlternates } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) return { title: 'Activity | Fun Zone Tenerife' };

  const title = `${activity.name} in Tenerife | Fun Zone Tenerife`;
  const description = activity.description.slice(0, 160);
  const alternates = getAlternates('/activities/[slug]', slug);

  return {
    title,
    description,
    alternates: { canonical: alternates.canonical, languages: alternates.languages },
    openGraph: {
      title,
      description,
      url: `https://funzonetenerife.com/${locale}/activities/${slug}`,
      images: [{ url: 'https://funzonetenerife.com/images/og-image.jpg', width: 1200, height: 630 }],
    },
  };
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) notFound();

  const related = activities
    .filter((a) => a.slug !== slug && a.category === activity.category)
    .slice(0, 3);

  const isExternal = !activity.isFunZone;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero gradient */}
      <section className="relative overflow-hidden">
        <div className={`relative aspect-[21/9] w-full bg-gradient-to-br ${activity.gradient} sm:aspect-[3/1]`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl opacity-30">{activity.emoji}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <Button variant="ghost" size="sm" asChild className="mb-4">
                <Link href="/activities">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All Activities
                </Link>
              </Button>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge variant="neonBlue">{activity.category}</Badge>
                {activity.isFunZone && (
                  <span className="flex items-center gap-1 rounded-full bg-neon-orange px-2.5 py-0.5 text-xs font-bold text-white">
                    <Star className="h-3 w-3 fill-white" />
                    Fun Zone Tenerife
                  </span>
                )}
              </div>
              <h1 className="neon-glow mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                {activity.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {activity.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {activity.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag className="h-4 w-4" />
                  {activity.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Description */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground">{activity.description}</p>

            {/* Highlights */}
            <div className="rounded-xl border border-border/50 bg-[#111118] p-6">
              <h2 className="mb-4 text-lg font-bold text-white">What's included</h2>
              <ul className="space-y-3">
                {activity.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00d4ff]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-xl border border-[#00d4ff]/20 bg-gradient-to-br from-[#00d4ff]/5 to-[#111118] p-6 text-center">
              <p className="mb-2 text-lg font-bold text-white">{activity.price}</p>
              <p className="mb-6 text-sm text-muted-foreground">{activity.duration} · {activity.location}</p>
              {activity.isFunZone ? (
                <Button asChild size="lg" className="!bg-neon-orange !text-white font-bold shadow-[0_0_20px_rgba(255,140,0,0.4)] hover:shadow-[0_0_30px_rgba(255,140,0,0.6)]">
                  <Link href="/book">Book Direct — Best Price</Link>
                </Button>
              ) : (
                <a
                  href={activity.bookUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#00d4ff] px-6 py-3 font-semibold text-[#0a0a0f] transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                >
                  Book on GetYourGuide
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {!activity.isFunZone && (
                <p className="mt-3 text-xs text-muted-foreground/60">
                  You'll be redirected to GetYourGuide to complete your booking.
                </p>
              )}
            </div>
          </div>

          {/* Related activities */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold text-white">More in {activity.category}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={{ pathname: '/activities/[slug]' as const, params: { slug: rel.slug } }}
                    className="group block"
                  >
                    <Card className="overflow-hidden border-border/50 bg-[#111118] transition-all duration-300 hover:border-[#00d4ff]/20">
                      <div className={`relative aspect-video bg-gradient-to-br ${rel.gradient}`}>
                        <div className="absolute inset-0 flex items-center justify-center text-4xl">
                          {rel.emoji}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#111118] to-transparent" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="mb-1 text-sm font-bold text-white transition-colors group-hover:text-[#00d4ff]">
                          {rel.name}
                        </h3>
                        <span className="flex items-center gap-1 text-xs text-[#00d4ff]">
                          See details
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
