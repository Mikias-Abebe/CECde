'use client';

import { useState, createContext, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Globe } from 'lucide-react';

// Language Context for Rediet Sub-pages
const RedietLangContext = createContext<{
  lang: 'en' | 'am';
  setLang: (lang: 'en' | 'am') => void;
}>({
  lang: 'en',
  setLang: () => {},
});

export const useRedietLang = () => useContext(RedietLangContext);

export default function RedietLayout({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<'en' | 'am'>('en');
  const pathname = usePathname();

  const navLinks = [
    { href: '/rediet', labelEn: 'Home', labelAm: 'ዋና ገጽ' },
    { href: '/rediet/about', labelEn: 'About Us', labelAm: 'ስለ እኛ' },
    { href: '/rediet/team', labelEn: 'Our Team', labelAm: 'ቡድናችን' },
    { href: '/rediet/projects', labelEn: 'Projects', labelAm: 'ፕሮጀክቶች' },
  ];

  return (
    <RedietLangContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        
        {/* Custom Rediet Sub-Header / Nav */}
        <header className="bg-[#111c26] border-b border-slate-800 text-white sticky top-0 z-40 shadow-md">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            
            {/* Rediet Logo / Branding */}
            <Link href="/rediet" className="flex items-center space-x-2 text-amber-400 font-serif font-bold text-xl">
              <Heart className="w-5 h-5 fill-amber-400" />
              <span>REDIET</span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-amber-400 font-semibold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {lang === 'en' ? link.labelEn : link.labelAm}
                  </Link>
                );
              })}
            </nav>

            {/* Language Switcher Button */}
            <button
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 text-amber-300 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'አማርኛ (AM)' : 'English (EN)'}</span>
            </button>
          </div>

          {/* Mobile Nav Bar */}
          <div className="md:hidden flex items-center justify-around bg-slate-900/90 py-2 border-t border-slate-800 text-xs">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1 ${pathname === link.href ? 'text-amber-400 font-bold' : 'text-slate-300'}`}
              >
                {lang === 'en' ? link.labelEn : link.labelAm}
              </Link>
            ))}
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main>{children}</main>

      </div>
    </RedietLangContext.Provider>
  );
}