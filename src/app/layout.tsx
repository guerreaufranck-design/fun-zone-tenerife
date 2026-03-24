import type { Metadata, Viewport } from 'next';
import { spaceGrotesk, inter } from '@/lib/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'Fun Zone Tenerife',
  description: 'Four unique experiences in one place: Axe Throwing, Quiz Room, Darts & Escape Game in Playa Las Americas, Tenerife.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
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
        {children}
      </body>
    </html>
  );
}
