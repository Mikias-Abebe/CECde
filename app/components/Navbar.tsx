'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage, Language } from '../context/LanguageContext';

const translations = {
  de: { home: 'Startseite', about: 'Über uns', youth: 'CEC-Jugend', events: 'Veranstaltungen', rediet: 'Rediet' },
  en: { home: 'Home', about: 'About', youth: 'CEC-Youth', events: 'Events', rediet: 'Rediet' },
  am: { home: 'መነሻ', about: 'ስለ እኛ', youth: 'ወጣቶች', events: 'ሁነቶች', rediet: 'ረድኤት' },
};

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const nav = translations[lang] || translations.de;

  return (
    <header className="bg-[#182736] text-white shadow-lg sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        
        {/* Left: Logo Badge & Dual Title */}
        <Link href="/" className="flex items-center space-x-3.5 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-amber-400/80 flex items-center justify-center shrink-0 overflow-hidden shadow-md">
            {!logoFailed ? (
              <img
                src="/images/logo.png"
                alt="Freie evangelische Christus Gemeinde Logo"
                className="w-full h-full object-contain p-0.5"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <span className="font-serif text-amber-500 font-bold text-xl">✝</span>
            )}
          </div>

          <div className="flex flex-col justify-center space-y-0.5">
            <p className="text-xs md:text-sm font-medium tracking-wide text-amber-100 leading-tight">
              የክርስቶስ ወንጌላዊት ቤተክርስቲያን በሙኒክ
            </p>
            <h1 className="text-sm md:text-base font-serif font-black tracking-wide text-[#fef08a] leading-tight">
              Christ’s Evangelical Church in Munich
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation & Pill Language Switcher */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <nav className="flex space-x-6 lg:space-x-8 text-base font-semibold text-slate-100">
            <Link href="/" className="hover:text-amber-400 transition-colors">{nav.home}</Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors">{nav.about}</Link>
            <Link href="/youth" className="hover:text-amber-400 transition-colors">{nav.youth}</Link>
            <Link href="/events" className="hover:text-amber-400 transition-colors">{nav.events}</Link>
            <Link href="/rediet" className="hover:text-amber-400 transition-colors">{nav.rediet}</Link>
          </nav>

          <div className="h-6 w-px bg-slate-700/80" />

          {/* Pill Language Switcher */}
          <div className="flex items-center border border-slate-600 rounded-full p-1 bg-slate-800/80 text-xs font-bold">
            {(['de', 'en', 'am'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full uppercase transition-all ${
                  lang === l
                    ? 'bg-white text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {l === 'am' ? 'አማ' : l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-200 p-2 rounded hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#14202c] border-t border-slate-800 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-4 text-base font-semibold text-slate-200">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">{nav.home}</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">{nav.about}</Link>
            <Link href="/youth" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">{nav.youth}</Link>
            <Link href="/events" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">{nav.events}</Link>
            <Link href="/rediet" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">{nav.rediet}</Link>
          </nav>

          <div className="flex items-center border border-slate-600 rounded-full p-1 bg-slate-800 w-fit text-xs font-bold">
            {(['de', 'en', 'am'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-3 py-1 rounded-full uppercase transition-all ${
                  lang === l
                    ? 'bg-white text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {l === 'am' ? 'አማርኛ' : l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}