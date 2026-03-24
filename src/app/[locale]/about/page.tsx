import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Monitor, GraduationCap, Sparkles, Package,
  Target, Users, Star, Gamepad2,
} from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Monitor,
    title: 'Interactive Digital Targets',
    description: '17+ game modes on state-of-the-art digital targets. From zombie apocalypse to tic-tac-toe, every throw is an immersive experience with real-time scoring and animations.',
    color: '#00d4ff',
  },
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Our certified coaches guide you from your very first throw to advanced techniques. Whether you are a beginner or looking to compete, our team ensures you get the most from every session.',
    color: '#8b5cf6',
  },
  {
    icon: Sparkles,
    title: 'Premium Venue & Atmosphere',
    description: 'Step into an immersive, nightclub-inspired arena with neon lighting, premium sound system, and a vibe that sets us apart. This is not your average activity center.',
    color: '#ff6b00',
  },
  {
    icon: Package,
    title: 'All-Inclusive Experiences',
    description: 'Everything is included: equipment, coaching, safety gear, and in our premium packages, drinks and snacks. Just show up and throw. We handle the rest.',
    color: '#00ff88',
  },
];

const stats = [
  { icon: Gamepad2, value: '17+', label: 'Interactive Games' },
  { icon: Target, value: '4', label: 'Throwing Lanes' },
  { icon: Users, value: '5,000+', label: 'Happy Throwers' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
];

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-[#00d4ff]/5 blur-[120px]" />
        <div className="absolute right-1/3 top-2/3 h-[400px] w-[400px] rounded-full bg-[#8b5cf6]/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h1 className="neon-glow mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            {t('title')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {t('subtitle')}
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
                  Born from a passion for adrenaline and unforgettable experiences, Axe Throwing Tenerife opened its doors in the heart of Playa Las Americas to bring something truly unique to the island. We are not just an activity venue; we are a destination where ancient warrior traditions meet cutting-edge entertainment technology.
                </p>
                <p>
                  Our founders envisioned a space where anyone, from complete beginners to competitive throwers, could experience the thrill of axe throwing in a premium, immersive environment. Inspired by the gaming arcades and nightlife culture of Tenerife, we designed a venue that feels more like stepping into a futuristic arena than a traditional activity center.
                </p>
                <p>
                  Located in the vibrant Zentral Center, our venue features state-of-the-art interactive digital targets, professional-grade throwing equipment, and an atmosphere that turns every visit into an event. Whether you are celebrating a birthday, bonding with your team, or simply looking for something extraordinary to do, we have created the perfect space for it.
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

      {/* Team Photo */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/50">
            <Image
              src="/images/about-team.jpg"
              alt="Axe Throwing Tenerife Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
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
            Ready to Experience the Thrill?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Book your axe throwing session today and discover why we are Tenerife&apos;s number one rated activity venue.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="neon" size="xl" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/experiences">Our Experiences</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
