'use client';

import Link from 'next/link';
import { Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  de: {
    title: "Christ's Evangelical Church in Munich",
    address: 'Rudolf-Diesel-Straße 9, 85221 Dachau-Ost (München)',
    email: 'info@cecmunich.de',
    quickLinks: 'Quick Links',
    home: 'Startseite',
    about: 'Über uns',
    youth: 'CEC-Jugend',
    events: 'Veranstaltungen',
    rediet: 'Rediet',
    connect: 'Verbinden Sie sich mit uns',
    worship: 'Jeden Sonntag um 11:00 Uhr zum Gottesdienst dabei sein',
    rights: 'Alle Rechte vorbehalten.',
  },
  en: {
    title: "Christ's Evangelical Church in Munich",
    address: 'Rudolf-Diesel-Straße 9, 85221 Dachau-Ost (München)',
    email: 'info@cecmunich.de',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About',
    youth: 'CEC Youth',
    events: 'Events',
    rediet: 'Rediet',
    connect: 'Connect With Us',
    worship: 'Join us for worship every Sunday at 11:00 AM',
    rights: 'All rights reserved.',
  },
  am: {
    title: 'የክርስቶስ ወንጌላዊት ቤተክርስቲያን በሙኒክ',
    address: 'Rudolf-Diesel-Straße 9, 85221 Dachau-Ost (München)',
    email: 'info@cecmunich.de',
    quickLinks: 'ፈጣን ማገናኛዎች',
    home: 'መነሻ',
    about: 'ስለ እኛ',
    youth: 'ወጣቶች',
    events: 'ሁነቶች',
    rediet: 'ረድኤት',
    connect: 'ከእኛ ጋር ይገናኙ',
    worship: 'እሁድ ሁሉ ከጠዋቱ 11:00 ሰዓት በአምልኮ ከእኛ ጋር ይሁኑ',
    rights: 'መብቱ በህግ የተጠበቀ ነው።',
  },
};

export default function Footer() {
  const { lang } = useLanguage();
  // Safe language key extraction
  const currentLang = (lang ? String(lang).toLowerCase() : 'de') as keyof typeof translations;
  const f = translations[currentLang] || translations.de;

  return (
    <footer className="bg-[#14202c] text-slate-300 pt-12 pb-8 border-t border-slate-800/60 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1: Church Name & Contact */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg font-sans tracking-wide">
            {f.title}
          </h3>
          <div className="space-y-2.5 text-slate-300 text-sm">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{f.address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <a href={`mailto:${f.email}`} className="hover:text-amber-400 transition-colors">
                {f.email}
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg font-sans tracking-wide">
            {f.quickLinks}
          </h3>
          <nav className="flex flex-col space-y-2 text-slate-300 text-sm">
            <Link href="/" className="hover:text-amber-400 transition-colors w-fit">{f.home}</Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors w-fit">{f.about}</Link>
            <Link href="/youth" className="hover:text-amber-400 transition-colors w-fit">{f.youth}</Link>
            <Link href="/events" className="hover:text-amber-400 transition-colors w-fit">{f.events}</Link>
            <Link href="/rediet" className="hover:text-amber-400 transition-colors w-fit">{f.rediet}</Link>
          </nav>
        </div>

        {/* Column 3: Connect With Us & Social Icons */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg font-sans tracking-wide">
            {f.connect}
          </h3>
          
          <div className="flex items-center space-x-5 text-slate-300 pt-1">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <p className="text-slate-300 text-sm pt-2 leading-relaxed">
            {f.worship}
          </p>
        </div>

      </div>

      {/* Bottom Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Christ's Evangelical Church in Munich. {f.rights}
      </div>
    </footer>
  );
}