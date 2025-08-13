import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Notes app',
  description: 'notes app',
  openGraph: {
    title: 'Notes app',
    description: 'notes app',
    siteName: 'NoteHub',
    url: 'https://08-zustand-livid.vercel.app/',
    images: {
      url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
      width: 1200,
      height: 630,
      alt: 'NoteHub',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notes app',
    description: 'Note app',
    images: ['https://ac.goit.global/fullstack/react/og-meta.jpg'],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {modal}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
