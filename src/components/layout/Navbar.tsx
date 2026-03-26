'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, Globe, ChevronDown } from 'lucide-react';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MobileMenu } from '@/components/layout/MobileMenu';

const languages = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'nl', label: 'NL', flag: '🇳🇱' },
  { code: 'it', label: 'IT', flag: '🇮🇹' },
] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Track scroll position for navbar bg opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleSwitch = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const expSegments: Record<string, string> = {
      en: 'experiences', es: 'experiencias', fr: 'experiences',
      de: 'erlebnisse', nl: 'ervaringen', it: 'esperienze',
    };
    const expMatch = currentPath.match(/^\/[a-z]{2}\/(?:experiences|experiencias|erlebnisse|ervaringen|esperienze)\/(.+)$/);
    if (expMatch) {
      window.location.href = `/${newLocale}/${expSegments[newLocale] ?? 'experiences'}/${expMatch[1]}`;
      setLangDropdownOpen(false);
      return;
    }
    // Handle escape-game/[slug] routes
    const escapeMatch = currentPath.match(/^\/[a-z]{2}\/escape-game\/(.+)$/);
    if (escapeMatch) {
      window.location.href = `/${newLocale}/escape-game/${escapeMatch[1]}`;
      setLangDropdownOpen(false);
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace(pathname as any, { locale: newLocale });
    setLangDropdownOpen(false);
  };

  const currentLang = languages.find((l) => l.code === locale);

  const navLinks = [
    { href: '/experiences' as const, label: t('experiences') },
    { href: '/faq' as const, label: t('faq') },
    { href: '/contact' as const, label: t('contact') },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-border/30 bg-[#0a0a12]/90 backdrop-blur-xl'
            : 'bg-[#0a0a12]/50 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/images/logo-funzone.png"
              alt="Fun Zone Tenerife"
              width={40}
              height={40}
              className="h-9 w-9 rounded-full object-contain sm:h-10 sm:w-10"
              priority
            />
            <div className="flex flex-col items-start">
              <span className="font-heading text-lg font-bold tracking-wider text-neon-orange transition-all duration-300 group-hover:text-white neon-glow sm:text-xl">
                FUN ZONE
              </span>
              <span className="text-[9px] font-medium tracking-[0.35em] text-muted-foreground transition-colors duration-300 group-hover:text-neon-orange sm:text-[10px]">
                TENERIFE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-neon-orange"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon-orange transition-all duration-300 hover:w-full" />
                </span>
              </Link>
            ))}

            {/* Book Now CTA */}
            <Button asChild variant="default" size="sm" className="ml-2 !bg-neon-orange !text-white !border-neon-orange/60 font-bold shadow-[0_0_15px_rgba(255,140,0,0.4)] hover:!bg-neon-orange/90 hover:shadow-[0_0_25px_rgba(255,140,0,0.6)]">
              <Link href="/book">{t('book')}</Link>
            </Button>

            {/* Language Selector */}
            <div className="relative ml-3" ref={langRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 rounded-lg border border-border/50 px-3 py-2 text-sm text-muted-foreground transition-all duration-200 hover:border-neon-orange/40 hover:text-foreground"
                aria-label={t('language')}
                aria-expanded={langDropdownOpen}
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs font-medium">
                  {currentLang?.flag} {currentLang?.label}
                </span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Language Dropdown */}
              <div
                className={`absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-border/50 bg-[#110f18]/95 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-200 ${
                  langDropdownOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-2 opacity-0'
                }`}
              >
                <div className="p-1.5">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLocaleSwitch(lang.code)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-150 ${
                        locale === lang.code
                          ? 'bg-neon-orange/10 text-neon-orange'
                          : 'text-foreground/70 hover:bg-secondary hover:text-foreground'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span className="font-medium">{lang.label}</span>
                      {locale === lang.code && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-neon-orange shadow-[0_0_6px_rgba(255,140,0,0.6)]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all duration-200 hover:border-neon-orange/50 hover:text-neon-orange lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
