'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { X, Globe, ChevronDown, Instagram } from 'lucide-react';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';

const languages = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'nl', label: 'NL', flag: '🇳🇱' },
  { code: 'it', label: 'IT', flag: '🇮🇹' },
] as const;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLocaleSwitch = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const expSegments: Record<string, string> = {
      en: 'experiences', es: 'experiencias', fr: 'experiences',
      de: 'erlebnisse', nl: 'ervaringen', it: 'esperienze',
    };
    const actSegments: Record<string, string> = {
      en: 'activities', es: 'actividades', fr: 'activites',
      de: 'aktivitaeten', nl: 'activiteiten', it: 'attivita',
    };
    const expMatch = currentPath.match(/^\/[a-z]{2}\/(?:experiences|experiencias|erlebnisse|ervaringen|esperienze)\/(.+)$/);
    if (expMatch) {
      window.location.href = `/${newLocale}/${expSegments[newLocale] ?? 'experiences'}/${expMatch[1]}`;
      setLangOpen(false);
      onClose();
      return;
    }
    const actMatch = currentPath.match(/^\/[a-z]{2}\/(?:activities|actividades|activites|aktivitaeten|activiteiten|attivita)\/(.+)$/);
    if (actMatch) {
      window.location.href = `/${newLocale}/${actSegments[newLocale] ?? 'activities'}/${actMatch[1]}`;
      setLangOpen(false);
      onClose();
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace(pathname as any, { locale: newLocale });
    setLangOpen(false);
    onClose();
  };

  const currentLang = languages.find((l) => l.code === locale);

  const navLinks = [
    { href: '/activities' as const, label: t('activities') },
    { href: '/escape-game' as const, label: 'Escape Games' },
    { href: '/celebrations' as const, label: t('celebrations') },
    { href: '/audio-guide-canaries' as const, label: 'Audio Guide' },
    { href: '/blog' as const, label: t('blog') },
    { href: '/faq' as const, label: t('faq') },
    { href: '/contact' as const, label: t('contact') },
    { href: '/about' as const, label: t('about') },
  ];

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex h-full flex-col bg-[#0a0a0f]/95 backdrop-blur-xl">
          {/* Header with close button */}
          <div className="flex items-center justify-between border-b border-border/50 px-6 py-5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo-funzone.png"
                alt="Fun Zone Tenerife"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-contain"
              />
              <div>
                <span className="font-heading text-lg font-bold tracking-wider text-neon-orange neon-glow">
                  FUN ZONE
                </span>
                <span className="block text-[10px] font-medium tracking-[0.3em] text-muted-foreground">
                  TENERIFE
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all duration-200 hover:border-neon-blue/50 hover:text-neon-blue"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  className={`transform transition-all duration-300 ${
                    isOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
                  }`}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center rounded-lg px-4 py-4 font-heading text-lg font-medium text-foreground/90 transition-all duration-200 hover:bg-secondary hover:text-neon-blue"
                  >
                    <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/40 transition-all duration-200 group-hover:bg-neon-blue group-hover:shadow-[0_0_6px_rgba(0,212,255,0.5)]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language selector */}
            <div className="mt-8 border-t border-border/50 pt-8">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground"
              >
                <span className="flex items-center gap-3">
                  <Globe className="h-5 w-5" />
                  <span className="font-medium">{t('language')}</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-sm">
                    {currentLang?.flag} {currentLang?.label}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      langOpen ? 'rotate-180' : ''
                    }`}
                  />
                </span>
              </button>

              <div
                className={`mt-2 grid grid-cols-3 gap-2 overflow-hidden transition-all duration-300 ${
                  langOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLocaleSwitch(lang.code)}
                    className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                      locale === lang.code
                        ? 'border border-neon-blue/50 bg-neon-blue/10 text-neon-blue'
                        : 'border border-border/50 text-muted-foreground hover:border-neon-blue/30 hover:text-foreground'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Bottom section with social links */}
          <div className="border-t border-border/50 px-6 py-6">
            <p className="mb-4 text-xs text-muted-foreground">
              Tenerife, Canary Islands
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/funzonetenerife"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all duration-200 hover:border-neon-blue/50 hover:text-neon-blue"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
