import type { Metadata } from 'next';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Christ’s Evangelical Church in Munich | የክርስቶስ ወንጌላዊት ቤተክርስቲያን በሙኒክ',
  description: 'Freie evangelische Christus Gemeinde in München / Dachau',
  icons: {
    icon: [
      { url: '/images/logo.png', href: '/images/logo.png' },
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="any" />
      </head>
      <body className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}