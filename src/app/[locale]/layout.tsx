import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Fun Zone Tenerife | Axe Throwing & Quiz Room',
  description:
    'Two unique experiences in one place! Axe Throwing and QuizzaBoom Quiz Room in Playa Las Americas, Tenerife. Book your session for an unforgettable adventure.',
  metadataBase: new URL('https://funzonetenerife.com'),
  openGraph: {
    title: 'Fun Zone Tenerife | Axe Throwing & Quiz Room',
    description:
      'Two unique experiences in one place! Axe Throwing and QuizzaBoom Quiz Room in Playa Las Americas, Tenerife.',
    type: 'website',
    siteName: 'Fun Zone Tenerife',
  },
};

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
