'use client';

import { useState, useEffect } from 'react';

// Language Translations for Interface Elements
const translations = {
  de: {
    nav: { home: 'Startseite', about: 'Über uns', youth: 'CEC-Jugend', sermons: 'Predigten' },
    location: {
      title: 'Unser Standplatz in München',
      subtitle: 'Herzlich willkommen zu unseren Gottesdiensten',
      addressTitle: 'Adresse',
      address: 'München, Deutschland',
      timeTitle: 'Gottesdienstzeiten',
      sundayTime: 'Jeden Sonntag: 10:00 - 12:30 Uhr',
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
    nav: { home: 'Home', about: 'About', youth: 'CEC-Youth', sermons: 'Sermons' },
    location: {
      title: 'Our Location in Munich',
      subtitle: 'We warmly welcome you to join our worship services',
      addressTitle: 'Address',
      address: 'Munich, Germany',
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
    type: 'welcome', // Slide 1 is the Trilingual Welcome Slide
    bg: 'bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900'
  },
  {
    type: 'verse',
    deVerse: '„Denn so sehr hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab...“',
    deRef: 'Johannes 3:16',
    enVerse: '“For God so loved the world that he gave his one and only Son...”',
    enRef: 'John 3:16',
    amVerse: '“በእርሱ የሚያምን ሁሉ የዘላለም ሕይወት እንዲኖረው እንጂ እንዳይጠፋ እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና።”',
    amRef: 'ዮሐንስ 3:16',
    bg: 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900'
  },
  {
    type: 'verse',
    deVerse: '„Seid fröhlich in Hoffnung, geduldig in Trübsal, beharrlich im Gebet.“',
    deRef: 'Römer 12:12',
    enVerse: '“Be joyful in hope, patient in affliction, faithful in prayer.”',
    enRef: 'Romans 12:12',
    amVerse: '“በተስፋ ደስ ይበላችሁ፤ በመከራ ታገሡ፤ በጸሎት ጽኑ፤”',
    amRef: 'ሮሜ 12:12',
    bg: 'bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900'
  },
  {
    type: 'verse',
    deVerse: '„Der Herr ist mein Hirte, mir wird nichts mangeln.“',
    deRef: 'Psalm 23:1',
    enVerse: '“The Lord is my shepherd, I lack nothing.”',
    enRef: 'Psalm 23:1',
    amVerse: '“እግዚአብሔር እረኛዬ ነው፥ የሚያጎድልብኝም የለኝም።”',
    amRef: 'መዝሙር 23:1',
    bg: 'bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950'
  }
];

export default function Home() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [currentSlide, setCurrentSlide] = useState(0);
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
            <h1 className="text-xl md:text-2xl font-bold text-indigo-950 tracking-tight">
              Christ’s Evangelical Church in Munich
            </h1>
            <p className="text-sm md:text-base font-semibold text-amber-700">
              የክርስቶስ ወንጌላዊት ቤተክርስቲያን
            </p>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6 text-sm font-bold text-slate-700">
              <a href="#home" className="hover:text-indigo-600 transition">{t.nav.home}</a>
              <a href="#about" className="hover:text-indigo-600 transition">{t.nav.about}</a>
              <a href="#youth" className="hover:text-indigo-600 transition">{t.nav.youth}</a>
              <a href="#sermons" className="hover:text-indigo-600 transition">{t.nav.sermons}</a>
            </nav>

            {/* Language Switcher */}
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
        </div>
      </header>

      {/* 2. Hero Photo & Verse Slider */}
      <section id="home" className="relative min-h-[420px] md:min-h-[500px] flex items-center justify-center overflow-hidden text-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center p-6 ${slide.bg} ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              {/* SLIDE 1: Trilingual Welcome Banner */}
              {slide.type === 'welcome' && (
                <div className="space-y-4 bg-slate-900/60 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400">
                      {t.welcome.deTitle}
                    </h2>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100">
                      {t.welcome.enTitle}
                    </h3>
                    <h3 className="text-xl md:text-2xl font-bold text-amber-300">
                      {t.welcome.amTitle}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto pt-2">
                    {t.welcome.subtitle}
                  </p>
                </div>
              )}

              {/* SLIDES 2, 3, 4: Scripture Verses */}
              {slide.type === 'verse' && (
                <div className="space-y-6 max-w-3xl mx-auto px-4">
                  <div className="space-y-3">
                    <p className="text-lg md:text-2xl font-serif italic text-amber-200">
                      {lang === 'de' ? slide.deVerse : slide.enVerse}
                    </p>
                    <p className="text-sm font-bold tracking-widest uppercase text-slate-400">
                      — {lang === 'de' ? slide.deRef : slide.enRef} —
                    </p>
                  </div>

                  {/* Amharic Verse displayed alongside */}
                  <div className="pt-4 border-t border-slate-700/60">
                    <p className="text-base md:text-xl font-serif text-slate-200">
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

        {/* Carousel Indicators (Dots) */}
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
          <h2 className="text-3xl font-bold text-indigo-950">{t.location.title}</h2>
          <p className="text-slate-600 mt-2">{t.location.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Service Hours & Address Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{t.location.addressTitle}</h3>
                  <p className="text-slate-700 font-semibold">Christ’s Evangelical Church</p>
                  <p className="text-slate-500 text-sm">München, Deutschland</p>
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

          {/* Interactive Munich Map */}
          <div className="bg-slate-200 rounded-2xl overflow-hidden min-h-[300px] shadow-sm border border-slate-300">
            <iframe
              className="w-full h-full min-h-[320px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170453.7663233856!2d11.41164627236526!3d48.15488427771746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sMunich!5e0!3m2!1sen!2sde!4v1710000000000!5m2!1sen!2sde"
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

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-xs border-t border-slate-900">
        <p className="font-semibold text-slate-300">Christ’s Evangelical Church in Munich | የክርስቶስ ወንጌላዊት ቤተክርስቲያን</p>
        <p className="mt-2 text-slate-500">© {new Date().getFullYear()} EECG. {t.footer.rights}</p>
      </footer>

    </div>
  );
}