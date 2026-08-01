// src/app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const translations = {
  de: { home: 'Startseite', about: 'Über uns', youth: 'CEC-Jugend', events: 'Veranstaltungen', rediet: 'Rediet' },
  en: { home: 'Home', about: 'About', youth: 'CEC-Youth', events: 'Events', rediet: 'Rediet' }
};

export default function Navbar() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const nav = translations[lang];

  return (
    <header className="bg-[#182736] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Brand Logo / Text */}
        <Link href="/" className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-slate-100/10 border border-slate-400/30 flex items-center justify-center text-amber-400 font-bold text-xl flex-shrink-0">
            ✝
          </div>
          <div>
            <p className="text-xs md:text-sm text-slate-300 font-serif tracking-wide">
              የክርስቶስ ወንጌላዊት ቤተክርስቲያን በሙኒክ
            </p>
            <h1 className="text-base md:text-xl font-bold tracking-wide text-white leading-tight">
              Christ’s Evangelical Church in Munich
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8 text-base font-semibold text-slate-100">
            <Link href="/" className="hover:text-amber-400 transition-colors">{nav.home}</Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors">{nav.about}</Link>
            <Link href="/youth" className="hover:text-amber-400 transition-colors">{nav.youth}</Link>
            <Link href="/events" className="hover:text-amber-400 transition-colors">{nav.events}</Link>
            <Link href="/rediet" className="hover:text-amber-400 transition-colors">{nav.rediet}</Link>
          </nav>

          {/* Language Switcher */}
          <div className="flex border border-slate-600 rounded overflow-hidden text-sm font-bold">
            <button
              onClick={() => setLang('de')}
              className={`px-3 py-1.5 transition ${lang === 'de' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              DE
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 transition ${lang === 'en' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-200 p-2 rounded hover:bg-slate-800"
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
          <nav className="flex flex-col space-y-4 text-base font-medium text-slate-200">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">{nav.home}</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">{nav.about}</Link>
            <Link href="/youth" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">{nav.youth}</Link>
            <Link href="/events" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">{nav.events}</Link>
            <Link href="/rediet" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">{nav.rediet}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}