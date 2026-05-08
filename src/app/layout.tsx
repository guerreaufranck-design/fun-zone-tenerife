import type { Metadata, Viewport } from 'next';
import { spaceGrotesk, inter } from '@/lib/fonts';
import { Analytics } from '@/components/Analytics';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://funzonetenerife.com'),
  title: {
    default: 'Fun Zone Tenerife',
    template: '%s | Fun Zone Tenerife',
  },
  description:
    'Fun Zone Tenerife: 4 unique indoor experiences in Playa Las Americas — Quiz Room, Axe Throwing, Escape Game & Darts.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
