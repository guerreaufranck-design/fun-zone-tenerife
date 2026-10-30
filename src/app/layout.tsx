import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
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
    'Fun Zone Tenerife: your guide to the best things to do in Tenerife — top tours and activities, self-guided outdoor escape games and island travel tips.',
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
        {/* GetYourGuide integration analyzer: renders widgets and tracks views/
            clicks on all GYG links (static cards included), tied to our partner id. */}
        <Script
          id="gyg-analytics"
          src="https://widget.getyourguide.com/dist/pa.umd.production.min.js"
          data-gyg-partner-id="VHOM8VQ"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
