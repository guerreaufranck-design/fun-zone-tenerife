import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Mail, MessageCircle, Instagram, ExternalLink, Clock, Compass, Puzzle,
} from 'lucide-react';
import { getAlternates, type Locale } from '@/lib/seo';

const contactMeta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Contact Fun Zone Tenerife | Activities & Escape Games',
    description: 'Get in touch with Fun Zone Tenerife. Questions about the best things to do in Tenerife, your booking or our outdoor escape games? Email or WhatsApp us.',
  },
  es: {
    title: 'Contacto Fun Zone Tenerife | Actividades y Escape Games',
    description: 'Ponte en contacto con Fun Zone Tenerife. ¿Dudas sobre qué hacer en Tenerife, tu reserva o nuestros escape games al aire libre? Escríbenos por email o WhatsApp.',
  },
  fr: {
    title: 'Contact Fun Zone Tenerife | Activités & Escape Games',
    description: 'Contactez Fun Zone Tenerife. Une question sur les activités à Tenerife, votre réservation ou nos escape games outdoor ? Email ou WhatsApp.',
  },
  de: {
    title: 'Kontakt Fun Zone Teneriffa | Aktivitäten & Escape Games',
    description: 'Kontaktieren Sie Fun Zone Teneriffa. Fragen zu Aktivitäten auf Teneriffa, Ihrer Buchung oder unseren Outdoor-Escape-Games? E-Mail oder WhatsApp.',
  },
  nl: {
    title: 'Contact Fun Zone Tenerife | Activiteiten & Escape Games',
    description: 'Neem contact op met Fun Zone Tenerife. Vragen over activiteiten op Tenerife, je boeking of onze outdoor escape games? Mail of WhatsApp ons.',
  },
  it: {
    title: 'Contatti Fun Zone Tenerife | Attività & Escape Games',
    description: 'Contatta Fun Zone Tenerife. Domande sulle attività a Tenerife, sulla tua prenotazione o sui nostri escape game all\'aperto? Scrivici via email o WhatsApp.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const m = contactMeta[l] ?? contactMeta['en'];
  const alternates = getAlternates('/contact', undefined, locale);
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: alternates.canonical, languages: alternates.languages },
    openGraph: { title: m.title, description: m.description, url: alternates.canonical },
  };
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@funzonetenerife.com',
    href: 'mailto:info@funzonetenerife.com',
    color: '#00d4ff',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+34 623 362 229',
    href: 'https://wa.me/34623362229',
    color: '#25D366',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'We usually reply within a few hours, 7 days a week.',
    color: '#ff6b00',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00d4ff]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h1 className="neon-glow mb-4 text-4xl font-bold text-white sm:text-5xl">
            Get in touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Questions about things to do in Tenerife, your booking, or our outdoor escape games? We are happy to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.label} className="border-border/50 bg-[#111118]">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border"
                        style={{
                          borderColor: `${item.color}30`,
                          backgroundColor: `${item.color}10`,
                        }}
                      >
                        <Icon className="h-6 w-6" style={{ color: item.color }} />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-white">{item.label}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground transition-colors hover:text-[#00d4ff]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="whitespace-pre-line text-muted-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Social Links */}
              <Card className="border-border/50 bg-[#111118]">
                <CardContent className="pt-6">
                  <h3 className="mb-4 font-semibold text-white">Follow us</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com/funzonetenerife"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-[#0a0a0f] transition-all duration-300 hover:border-[#00d4ff]/30 hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-white/70" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/34623362229"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 p-6 transition-all duration-300 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)]"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]/20">
                  <MessageCircle className="h-7 w-7 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-white">Chat on WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick response guaranteed. Tap to send us a message.
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-[#25D366] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Planning your trip */}
            <div>
              <Card className="h-full border-border/50 bg-[#111118]">
                <CardContent className="flex h-full flex-col justify-center gap-6 p-8 sm:p-10">
                  <h2 className="text-2xl font-bold text-white">Planning your trip?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You do not need to email us to book. Browse the island&apos;s best activities or jump straight into one of our outdoor escape games.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button variant="neon" size="lg" asChild>
                      <Link href="/activities">
                        <Compass className="mr-2 h-5 w-5" />
                        See all activities
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/escape-game">
                        <Puzzle className="mr-2 h-5 w-5" />
                        Outdoor escape games
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp floating button (mobile) */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a
          href="https://wa.me/34623362229"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </a>
      </div>
    </div>
  );
}
