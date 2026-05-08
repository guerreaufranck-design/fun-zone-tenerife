import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { defaultMeta, getAlternates, type Locale } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const meta = defaultMeta[l] ?? defaultMeta['en'];
  const alternates = getAlternates('/');

  return {
    title: {
      default: meta.title,
      template: '%s | Fun Zone Tenerife',
    },
    description: meta.description,
    verification: {
      google: 'TRPmuhCscyzIybPKovZQ5ZgCdTuYFFfD8M_JrDtpnb4',
    },
    alternates: {
      canonical: `https://funzonetenerife.com/${locale}`,
      languages: alternates.languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://funzonetenerife.com/${locale}`,
      siteName: 'Fun Zone Tenerife',
      locale: locale,
      type: 'website',
      images: [
        {
          url: 'https://funzonetenerife.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Fun Zone Tenerife — Quiz Room, Axe Throwing, Escape Game & Darts',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['https://funzonetenerife.com/images/og-image.jpg'],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming locale parameter is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Fetch messages for the current locale
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </NextIntlClientProvider>
  );
}
