'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MapPin, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="relative border-t border-border/20 bg-[#0d0d14]">
      {/* Neon accent line at top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-orange/60 to-transparent" />

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Column 1: Logo + Description + Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-3">
              <Image
                src="/images/logo-funzone.png"
                alt="Fun Zone Tenerife"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-contain"
              />
              <div className="flex flex-col items-start">
                <span className="font-heading text-xl font-bold tracking-wider text-neon-orange transition-all duration-300 group-hover:text-white neon-glow">
                  FUN ZONE
                </span>
                <span className="text-[10px] font-medium tracking-[0.35em] text-muted-foreground transition-colors duration-300 group-hover:text-neon-orange">
                  TENERIFE
                </span>
              </div>
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
                  href="https://www.instagram.com/funzonetenerife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 text-muted-foreground transition-all duration-200 hover:border-neon-blue/50 hover:text-neon-orange hover:shadow-[0_0_10px_rgba(255,140,0,0.15)]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
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
                { href: '/activities' as const, label: tNav('activities') },
                { href: '/escape-game' as const, label: 'Escape Games' },
                { href: '/audio-guide-canaries' as const, label: 'Audio Guide' },
                { href: '/blog' as const, label: tNav('blog') },
                { href: '/faq' as const, label: tNav('faq') },
                { href: '/about' as const, label: tNav('about') },
                { href: '/gift-voucher' as const, label: tNav('giftVoucher') },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-neon-orange"
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
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-neon-orange" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Tenerife, Canary Islands, Spain
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@funzonetenerife.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-neon-orange"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-neon-orange" />
                  <span className="break-all">info@funzonetenerife.com</span>
                </a>
              </li>
            </ul>
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
              className="text-xs text-muted-foreground transition-colors duration-200 hover:text-neon-orange"
            >
              {t('privacy')}
            </a>
            <a
              href="/terms"
              className="text-xs text-muted-foreground transition-colors duration-200 hover:text-neon-orange"
            >
              {t('terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
