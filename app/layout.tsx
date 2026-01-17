import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { TopBar } from '@/components/TopBar';
import { Dock } from '@/components/Dock';
import { SocialRail } from '@/components/SocialRail';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hub',
  description: 'Community Hub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={outfit.className}>
        <div id="app">
          <div className="app-layout">
            <div className="content-wrapper">
              <TopBar />
              {children}
            </div>
            <Dock />
            <SocialRail />
          </div>
        </div>
      </body>
    </html>
  );
}
