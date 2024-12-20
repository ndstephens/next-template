import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import './main.css';

const sans = Inter({ subsets: ['latin'], variable: '--custom-sans' });

export const metadata: Metadata = {
  title: {
    template: '%s | Next Template',
    default: 'Default Title',
  },
  description: 'Generated by create next app',
  metadataBase: new URL('https://www.siteurl.com'),
  keywords: ['next', 'template', 'typescript', 'react'],
  openGraph: {
    title: 'Next Template',
    description: 'Generated by create next app',
    siteName: 'Next Template',
    url: 'https://www.siteurl.com',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${sans.variable}`}>
      <body className="flex min-h-dvh flex-col bg-gray-800 font-sans text-gray-200 antialiased selection:bg-gray-300 selection:text-gray-900">
        <header>Header</header>
        <main className="grow">{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
