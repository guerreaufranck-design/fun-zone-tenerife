'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="relative border-t border-border/20 bg-[#0d0d14]">
      {/* Neon accent line at top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-blue/60 to-transparent" />

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Logo + Description + Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group inline-flex flex-col items-start">
              <span className="font-heading text-xl font-bold tracking-wider text-neon-blue transition-all duration-300 group-hover:text-white neon-glow">
                FUN ZONE
              </span>
              <span className="text-[10px] font-medium tracking-[0.35em] text-muted-foreground transition-colors duration-300 group-hover:text-neon-blue">
                TENERIFE
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t('description')}
            </p>

            {/* Social links */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                {t('followUs')}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/axethrowingtenerife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 text-muted-foreground transition-all duration-200 hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_10px_rgba(0,212,255,0.15)]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@axethrowingtenerife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 text-muted-foreground transition-all duration-200 hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_10px_rgba(0,212,255,0.15)]"
                  aria-label="TikTok"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.44c.98-.98 1.66-2.2 1.93-3.52V9.39a8.16 8.16 0 004.65 1.46v-3.5a4.83 4.83 0 01-1-.66z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/axethrowingtenerife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 text-muted-foreground transition-all duration-200 hover:border-neon-blue/50 hover:text-neon-blue hover:shadow-[0_0_10px_rgba(0,212,255,0.15)]"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/experiences' as const, label: tNav('experiences') },
                { href: '/book' as const, label: tNav('book') },
                { href: '/gift-voucher' as const, label: tNav('giftVoucher') },
                { href: '/faq' as const, label: tNav('faq') },
                { href: '/about' as const, label: tNav('about') },
                { href: '/blog' as const, label: tNav('blog') },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-neon-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('contactInfo')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-neon-blue" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {t('address')}
                </span>
              </li>
              <li>
                <a
                  href="tel:+34623362229"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-neon-blue"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-neon-blue" />
                  +34 623 362 229
                </a>
              </li>
              <li>
                <a
                  href="mailto:axethrowingtenerife@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-neon-blue"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-neon-blue" />
                  <span className="break-all">axethrowingtenerife@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours + Map */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('hours')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-neon-blue" />
                <div>
                  <p className="text-sm font-medium text-foreground/90">
                    {t('openHours')}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t('closed')}
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/axe+throwing+tenerife/@28.0579526,-16.7335001,17z/data=!3m2!4b1!5s0xc6a977ea71caa8b:0xf6c775e17f313020!4m6!3m5!1s0xc6a971a1b1e98ab:0x875a801337f2167e!8m2!3d28.057948!4d-16.7286292!16s%2Fg%2F11lv_fs566"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border/50 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-neon-blue/40 hover:text-neon-blue hover:shadow-[0_0_10px_rgba(0,212,255,0.1)]"
              >
                <MapPin className="h-4 w-4" />
                {t('directions')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Fun Zone Tenerife. {t('copyright')}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors duration-200 hover:text-neon-blue"
            >
              {t('privacy')}
            </a>
            <a
              href="/terms"
              className="text-xs text-muted-foreground transition-colors duration-200 hover:text-neon-blue"
            >
              {t('terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
