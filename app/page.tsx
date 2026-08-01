'use client';

import { useState, useEffect } from 'react';
import SermonsSection from './components/SermonsSection';

// Language Translations for Interface Elements
const translations = {
  de: {
    nav: { home: 'Startseite', about: 'Über uns', youth: 'CEC-Jugend', events: 'Veranstaltungen', rediet: 'Rediet'
     }, 
    location: {
      title: 'Unser Standort in München / Dachau',
      subtitle: 'Herzlich willkommen zu unseren Gottesdiensten',
      addressTitle: 'Adresse',
      street: 'Rudolf-Diesel-Straße 9',
      city: '85221 Dachau-Ost (München)',
      timeTitle: 'Gottesdienstzeiten',
      sundayTime: 'Jeden Sonntag: 11:00 - 13:00 Uhr',
      prayerTime: 'Gebetstreffen: Donnerstag 18:30 Uhr',
    },
    welcome: {
      deTitle: 'Willkommen in der Gemeinde',
      enTitle: 'Welcome to Christ’s Evangelical Church',
      amTitle: 'እንኳን ወደ የክርስቶስ ወንጌላዊት ቤተክርስቲያን በሰላም መጡ',
      subtitle: 'Eine Gemeinschaft des Glaubens, der Hoffnung und der Liebe in München.',
    },
    footer: { rights: 'Alle Rechte vorbehalten.' }
  },
  en: {
    nav: { home: 'Home', about: 'About', youth: 'CEC-Youth', events: 'events', rediet: 'Rediet' },
    location: {
      title: 'Our Location in Munich / Dachau',
      subtitle: 'We warmly welcome you to join our worship services',
      addressTitle: 'Address',
      street: 'Rudolf-Diesel-Straße 9',
      city: '85221 Dachau-Ost (Munich area)',
      timeTitle: 'Service Times',
      sundayTime: 'Every Sunday: 10:00 AM - 12:30 PM',
      prayerTime: 'Prayer Meeting: Thursday 6:30 PM',
    },
    welcome: {
      deTitle: 'Willkommen in der Gemeinde',
      enTitle: 'Welcome to Christ’s Evangelical Church',
      amTitle: 'እንኳን ወደ የክርስቶስ ወንጌላዊት ቤተክርስቲያን በሰላም መጡ',
      subtitle: 'A community of faith, hope, and love in Munich.',
    },
    footer: { rights: 'All rights reserved.' }
  }
};

// Bible Verse Slides
const slides = [
  {
    type: 'welcome', // Slide 1: Trilingual Welcome Banner
    image: '/Slide1.jpg',
  },
  {
    type: 'verse',
    deVerse: '„Denn so sehr hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab...“',
    deRef: 'Johannes 3:16',
    enVerse: '“For God so loved the world that he gave his one and only Son...”',
    enRef: 'John 3:16',
    amVerse: '“በእርሱ የሚያምን ሁሉ የዘላለም ሕይወት እንዲኖረው እንጂ እንዳይጠፋ እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና።”',
    amRef: 'ዮሐንስ 3:16',
  },
  {
    type: 'verse',
    deVerse: '„Seid fröhlich in Hoffnung, geduldig in Trübsal, beharrlich im Gebet.“',
    deRef: 'Römer 12:12',
    enVerse: '“Be joyful in hope, patient in affliction, faithful in prayer.”',
    enRef: 'Romans 12:12',
    amVerse: '“በተስፋ ደስ ይበላችሁ፤ በመከራ ታገሡ፤ በጸሎት ጽኑ፤”',
    amRef: 'ሮሜ 12:12',
  },
  {
    type: 'verse',
    deVerse: '„Der Herr ist mein Hirte, mir wird nichts mangeln.“',
    deRef: 'Psalm 23:1',
    enVerse: '“The Lord is my shepherd, I lack nothing.”',
    enRef: 'Psalm 23:1',
    amVerse: '“እግዚአብሔር እረኛዬ ነው፥ የሚያጎድልብኝም የለኝም።”',
    amRef: 'መዝሙር 23:1',
  }
];

export default function Home() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang];

  // Auto-advance slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. Header & Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Church Brand Name & Amharic Subtitle */}
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-indigo-950 tracking-tight leading-tight">
              Christ’s Evangelical Church in Munich
            </h1>
            <p className="text-xs md:text-base font-semibold text-amber-700">
              የክርስቶስ ወንጌላዊት ቤተክርስቲያን
            </p>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6 text-sm font-bold text-slate-700">
              <a href="#home" className="hover:text-indigo-600 transition">{t.nav.home}</a>
              <a href="#about" className="hover:text-indigo-600 transition">{t.nav.about}</a>
              <a href="#youth" className="hover:text-indigo-600 transition">{t.nav.youth}</a>
              <a href="#events" className="hover:text-indigo-600 transition">{t.nav.events}</a>
              <a href="#rediet" className="hover:text-indigo-600 transition">{t.nav.rediet}</a>
            </nav>

            {/* Desktop Language Switcher */}
            <div className="flex border border-slate-300 rounded-md overflow-hidden text-xs font-bold">
              <button
                onClick={() => setLang('de')}
                className={`px-3 py-1.5 transition ${lang === 'de' ? 'bg-indigo-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                DE
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 transition ${lang === 'en' ? 'bg-indigo-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-800 p-2 rounded-lg hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Drop-down Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-4 shadow-lg animate-fadeIn">
            <nav className="flex flex-col space-y-3 font-semibold text-slate-700">
              <a 
                href="#home" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-indigo-600 py-1 border-b border-slate-50"
              >
                {t.nav.home}
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-indigo-600 py-1 border-b border-slate-50"
              >
                {t.nav.about}
              </a>
              <a 
                href="#youth" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-indigo-600 py-1 border-b border-slate-50"
              >
                {t.nav.youth}
              </a>
              <a 
                href="#events" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-indigo-600 py-1"
              >
                {t.nav.events}
              </a>
               <a 
                href="#rediet" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-indigo-600 py-1"
              >
                {t.nav.rediet}
              </a>
            </nav>

            {/* Mobile Language Switcher */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs font-bold text-slate-500">Sprache / Language:</span>
              <div className="flex border border-slate-300 rounded-md overflow-hidden text-xs font-bold">
                <button
                  onClick={() => { setLang('de'); setIsMobileMenuOpen(false); }}
                  className={`px-3 py-1.5 transition ${lang === 'de' ? 'bg-indigo-900 text-white' : 'bg-slate-100 text-slate-600'}`}
                >
                  DE
                </button>
                <button
                  onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }}
                  className={`px-3 py-1.5 transition ${lang === 'en' ? 'bg-indigo-900 text-white' : 'bg-slate-100 text-slate-600'}`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      
{/* 2. Hero Photo & Verse Slider */}
<section id="home" className="relative h-[480px] md:h-[560px] flex items-center justify-center overflow-hidden text-white">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center p-6 ${
        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      {/* 1. Background Image */}
      {slide.image && (
        <img
          src={slide.image}
          alt="Church background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* 2. Light Overlay - Just enough to boost text contrast while keeping photo vivid */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* 3. Text directly over the image (no container box) */}
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-4">
              
              {/* SLIDE 1: Trilingual Welcome Banner */}
              {slide.type === 'welcome' && (
                <div className="space-y-4 bg-slate-900/60 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50">
                  <div className="space-y-2">
                    <h2 className="text-xl md:text-3xl font-extrabold text-amber-400">
                      {t.welcome.deTitle}
                    </h2>
                    <h3 className="text-lg md:text-2xl font-bold text-slate-100">
                      {t.welcome.enTitle}
                    </h3>
                    <h3 className="text-lg md:text-2xl font-bold text-amber-300">
                      {t.welcome.amTitle}
                    </h3>
                  </div>
                  <p className="text-xs md:text-base text-slate-300 max-w-2xl mx-auto pt-2">
                    {t.welcome.subtitle}
                  </p>
                </div>
              )}

              {/* SLIDES 2, 3, 4: Scripture Verses */}
              {slide.type === 'verse' && (
                <div className="space-y-6 max-w-3xl mx-auto px-4">
                  <div className="space-y-3">
                    <p className="text-base md:text-2xl font-serif italic text-amber-200">
                      {lang === 'de' ? slide.deVerse : slide.enVerse}
                    </p>
                    <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-slate-400">
                      — {lang === 'de' ? slide.deRef : slide.enRef} —
                    </p>
                  </div>

                  {/* Amharic Verse */}
                  <div className="pt-4 border-t border-slate-700/60">
                    <p className="text-sm md:text-xl font-serif text-slate-200">
                      {slide.amVerse}
                    </p>
                    <p className="text-xs font-semibold text-amber-400 mt-1">
                      — {slide.amRef} —
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 z-20 flex space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 3. Location & Worship Schedule Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-950">{t.location.title}</h2>
          <p className="text-slate-600 text-sm md:text-base mt-2">{t.location.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Service Hours & Address Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{t.location.addressTitle}</h3>
                  <p className="text-slate-700 font-semibold">Christ’s Evangelical Church</p>
                  <p className="text-slate-800 font-medium text-sm mt-1">{t.location.street}</p>
                  <p className="text-slate-500 text-sm">{t.location.city}</p>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="flex items-start space-x-4">
                <span className="text-2xl">🕒</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{t.location.timeTitle}</h3>
                  <p className="text-indigo-900 font-bold text-base mt-1">{t.location.sundayTime}</p>
                  <p className="text-slate-600 text-sm">{t.location.prayerTime}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium">
              💡 <strong>Willkommen / Welcome:</strong> We conduct services in Amharic with translation available. Everyone is welcome to join!
            </div>
          </div>

          {/* Map showing Rudolf-Diesel-Straße 9, 85221 Dachau */}
          <div className="bg-slate-200 rounded-2xl overflow-hidden min-h-[320px] shadow-sm border border-slate-300">
            <iframe
              className="w-full h-full min-h-[320px]"
              src="https://maps.google.com/maps?q=Rudolf-Diesel-Stra%C3%9Fe%209%2C%2085221%20Dachau&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      {/* 4. YouTube Sermons Section */}
      <SermonsSection lang={lang} />

      {/* 5. Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-6 text-center text-xs border-t border-slate-900">
        <p className="font-semibold text-slate-300">Christ’s Evangelical Church in Munich | የክርስቶስ ወንጌላዊት ቤተክርስቲያን</p>
        <p className="mt-1 text-slate-400">Rudolf-Diesel-Straße 9, 85221 Dachau-Ost</p>
        <p className="mt-2 text-slate-500">© {new Date().getFullYear()} CEC Munich. {t.footer.rights}</p>
      </footer>

    </div>
  );
}