import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  MapPin, Phone, Mail, Clock, MessageCircle,
  Instagram, Facebook, Navigation, ExternalLink,
} from 'lucide-react';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.17V11.9a4.84 4.84 0 01-3.77-1.44V6.69h3.77z" />
    </svg>
  );
}

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Avenida Arquitecto Gomez Cuesta 22, Zentral Center, Playa Las Americas, Arona 38650',
    color: '#00d4ff',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+34 623 362 229',
    href: 'tel:+34623362229',
    color: '#8b5cf6',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@axethrowingtenerife.com',
    href: 'mailto:info@axethrowingtenerife.com',
    color: '#00d4ff',
  },
  {
    icon: Clock,
    label: 'Opening Hours',
    value: 'Tue - Sun: 2PM - 8PM\nClosed on Mondays',
    color: '#ff6b00',
  },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/axethrowingtenerife', color: '#E1306C' },
  { icon: TikTokIcon, label: 'TikTok', href: 'https://tiktok.com/@axethrowingtenerife', color: '#ffffff' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/axethrowingtenerife', color: '#1877F2' },
];

export default function ContactPage() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00d4ff]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h1 className="neon-glow mb-4 text-4xl font-bold text-white sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('subtitle')}
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
                  <h3 className="mb-4 font-semibold text-white">{tFooter('followUs')}</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-[#0a0a0f] transition-all duration-300 hover:border-[#00d4ff]/30 hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5 text-white/70" />
                        </a>
                      );
                    })}
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

            {/* Map */}
            <div className="space-y-4">
              <Card className="overflow-hidden border-border/50 bg-[#111118]">
                <div className="aspect-square w-full sm:aspect-video lg:aspect-square">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.5!2d-16.7286292!3d28.057948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a971a1b1e98ab%3A0x875a801337f2167e!2sAxe%20Throwing%20Tenerife!5e0!3m2!1sen!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Axe Throwing Tenerife Location"
                  />
                </div>
              </Card>

              <Button variant="outline" size="lg" className="w-full" asChild>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=28.057948,-16.7286292"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  {t('getDirections')}
                </a>
              </Button>
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
