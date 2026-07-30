'use client';

import { useState } from 'react';

// Translation Dictionaries
const translations = {
  de: {
    topNav: { contact: 'Kontakt', give: 'Spenden' },
    mainNav: {
      home: 'Startseite',
      about: 'Über uns',
      events: 'Veranstaltungen',
      sermons: 'Predigten & Lehre',
      involved: 'Mitmachen',
    },
    hero: {
      welcome: 'Herzlich Willkommen',
      subtitle: 'Äthiopische Evangelische Gemeinde in Deutschland',
      verse: '„Seid fröhlich in Hoffnung, geduldig in Trübsal, beharrlich im Gebet.“ – Römer 12:12',
      joinBtn: 'Nächsten Gottesdienst besuchen',
    },
    livestream: {
      title: 'Aktueller Livestream',
      subtitle: 'Nehmen Sie online an unseren Gottesdiensten teil',
    },
    welcomeSection: {
      title: 'Willkommen in unserer Gemeinde',
      desc: 'Erleben Sie lebendigen Lobpreis, warme Gemeinschaft und geistliches Wachstum. Wir laden Sie herzlich ein, Teil unserer Gemeindefamilie zu werden.',
    },
    services: {
      title: 'Gemeinschaft erleben',
      sundayTitle: 'Sonntagsgottesdienst',
      sundayDesc: 'Inspiriender Lobpreis, Predigt und Gemeinschaft.',
      sundayTime: 'Jeden Sonntag: 10:00 Uhr',
      prayerTitle: 'Wöchentliches Gebetstreffen',
      prayerDesc: 'Gemeinsames Gebet und Austausch am Donnerstagabend.',
      prayerTime: 'Jeden Donnerstag: 19:00 Uhr',
      ministryTitle: 'Dienste & Gruppen',
      ministryDesc: 'Entdecken Sie verschiedene Gruppen für Jugend, Frauen und Kinder.',
      scheduleBtn: 'Programm ansehen →',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
  },
  en: {
    topNav: { contact: 'Contact', give: 'Give' },
    mainNav: {
      home: 'Home',
      about: 'Who We Are',
      events: 'Events',
      sermons: 'Sermons & Teaching',
      involved: 'Get Involved',
    },
    hero: {
      welcome: 'Welcome',
      subtitle: 'Ethiopian Evangelical Church in Germany',
      verse: '“Be joyful in hope, patient in affliction, faithful in prayer.” – Romans 12:12',
      joinBtn: 'Join Our Next Service',
    },
    livestream: {
      title: 'Recent Live Stream',
      subtitle: 'Watch our latest Sunday service and worship live',
    },
    welcomeSection: {
      title: 'Welcome to Our Church',
      desc: 'Experience vibrant worship, warm fellowship, and spiritual growth. Join us in person or online as we serve together.',
    },
    services: {
      title: 'Join Our Community',
      sundayTitle: 'Sunday Worship Service',
      sundayDesc: 'Inspiring worship, fellowship, and spiritual growth in a welcoming environment.',
      sundayTime: 'Every Sunday: 10:00 AM',
      prayerTitle: 'Weekly Prayer Meeting',
      prayerDesc: 'Join us every Thursday for a dedicated time of prayer and fellowship.',
      prayerTime: 'Every Thursday: 7:00 PM',
      ministryTitle: 'Ministry Groups',
      ministryDesc: 'Explore diverse ministries for youth, women, and children.',
      scheduleBtn: 'View Schedule →',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-6 flex justify-between items-center border-b border-slate-800">
        <div>📍 Hauptstraße 10, 80331 München | 📧 info@evangelische-gemeinde.de</div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="hover:underline">{t.topNav.contact}</a>
          <a href="#give" className="bg-amber-600 text-white px-3 py-1 rounded font-bold hover:bg-amber-500">{t.topNav.give}</a>
          
          {/* Language Switcher Toggle */}
          <div className="flex border border-slate-700 rounded overflow-hidden">
            <button
              onClick={() => setLang('de')}
              className={`px-2 py-0.5 text-xs font-semibold ${lang === 'de' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
            >
              DE
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 text-xs font-semibold ${lang === 'en' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
              ✝
            </div>
            <div>
              <h1 className="font-bold text-lg text-indigo-950 leading-tight">EECG</h1>
              <p className="text-xs text-slate-500">Gemeinde Deutschland</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-slate-700">
            <a href="#home" className="hover:text-indigo-600">{t.mainNav.home}</a>
            <a href="#about" className="hover:text-indigo-600">{t.mainNav.about}</a>
            <a href="#events" className="hover:text-indigo-600">{t.mainNav.events}</a>
            <a href="#sermons" className="hover:text-indigo-600">{t.mainNav.sermons}</a>
            <a href="#services" className="hover:text-indigo-600">{t.mainNav.involved}</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {t.hero.welcome}
          </h2>
          <p className="text-lg md:text-xl text-indigo-200 font-medium">
            {t.hero.subtitle}
          </p>
          <div className="py-4 border-y border-indigo-800/60 max-w-2xl mx-auto">
            <p className="italic text-slate-300 font-serif text-sm md:text-base">{t.hero.verse}</p>
          </div>
          <div>
            <a href="#services" className="inline-block px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow hover:bg-amber-500 transition">
              {t.hero.joinBtn}
            </a>
          </div>
        </div>
      </section>

      {/* Welcome & Livestream Section */}
      <section id="sermons" className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-indigo-950 mb-4">{t.welcomeSection.title}</h3>
          <p className="text-slate-600 leading-relaxed mb-6">{t.welcomeSection.desc}</p>
          <div className="p-4 bg-indigo-50 border-l-4 border-indigo-600 text-indigo-900 rounded-r text-sm">
            <strong>{t.services.sundayTitle}:</strong> {t.services.sundayTime}
          </div>
        </div>

        {/* Video Player Container */}
        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800">
          <div className="aspect-video w-full bg-slate-800 flex items-center justify-center">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/live_stream?channel=YOUR_YOUTUBE_CHANNEL_ID"
              title="Church Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4 text-white">
            <h4 className="font-bold text-sm">{t.livestream.title}</h4>
            <p className="text-xs text-slate-400">{t.livestream.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Community & Services Grid */}
      <section id="services" className="bg-slate-100 py-16 px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-indigo-950 mb-12">{t.services.title}</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-amber-600 text-2xl mb-2">⛪</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{t.services.sundayTitle}</h4>
                <p className="text-slate-600 text-sm mb-4">{t.services.sundayDesc}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-indigo-900 mb-3">{t.services.sundayTime}</p>
                <a href="#calendar" className="text-xs font-semibold text-amber-600 hover:underline">{t.services.scheduleBtn}</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-amber-600 text-2xl mb-2">🙏</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{t.services.prayerTitle}</h4>
                <p className="text-slate-600 text-sm mb-4">{t.services.prayerDesc}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-indigo-900 mb-3">{t.services.prayerTime}</p>
                <a href="#calendar" className="text-xs font-semibold text-amber-600 hover:underline">{t.services.scheduleBtn}</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-amber-600 text-2xl mb-2">👥</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{t.services.ministryTitle}</h4>
                <p className="text-slate-600 text-sm mb-4">{t.services.ministryDesc}</p>
              </div>
              <div>
                <a href="#groups" className="text-xs font-semibold text-amber-600 hover:underline">{t.services.scheduleBtn}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-400 py-10 px-6 text-sm border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="text-white font-bold mb-3">EECG</h5>
            <p className="text-xs text-slate-400">Äthiopische Evangelische Gemeinde in Deutschland.</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-3">Links</h5>
            <ul className="space-y-1 text-xs">
              <li><a href="#home" className="hover:underline">{t.mainNav.home}</a></li>
              <li><a href="#about" className="hover:underline">{t.mainNav.about}</a></li>
              <li><a href="#sermons" className="hover:underline">{t.mainNav.sermons}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-3">Kontakt</h5>
            <p className="text-xs">Hauptstraße 10, 80331 München</p>
            <p className="text-xs mt-1">info@evangelische-gemeinde.de</p>
          </div>
        </div>
        <div className="text-center text-xs text-slate-600 border-t border-slate-900 pt-6">
          © {new Date().getFullYear()} EECG. {t.footer.rights}
        </div>
      </footer>
    </div>
  );
}