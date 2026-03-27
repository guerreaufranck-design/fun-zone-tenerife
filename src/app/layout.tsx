import type { Metadata, Viewport } from 'next';
import { spaceGrotesk, inter } from '@/lib/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'Fun Zone Tenerife',
  description: 'Outdoor escape games, axe throwing, quiz room & darts in Playa de las Américas, Tenerife. Self-guided city games through historic towns with GPS puzzles and real history.',
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
