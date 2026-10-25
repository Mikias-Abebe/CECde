'use client';

import { useState, useEffect } from 'react';
import SermonsSection from './components/SermonsSection';
import { useLanguage } from './context/LanguageContext';

const translations = {
  de: {
    locationTitle: 'Unser Standort in München / Dachau',
    locationSub: 'Herzlich willkommen zu unseren Gottesdiensten',
    addressHeader: 'Adresse',
    serviceHeader: 'Gottesdienstzeiten',
    sundayService: 'Jeden Sonntag: 11:00 - 13:00 Uhr',
    prayerMeeting: 'Gebetstreffen: Donnerstag 18:30 Uhr',
  },
  en: {
    locationTitle: 'Our Location in Munich / Dachau',
    locationSub: 'Welcome to our services',
    addressHeader: 'Address',
    serviceHeader: 'Service Times',
    sundayService: 'Every Sunday: 11:00 AM - 1:00 PM',
    prayerMeeting: 'Prayer Meeting: Thursday 6:30 PM',
  },
  am: {
    locationTitle: 'አድራሻችን በሙኒክ / ዳካው',
    locationSub: 'ወደ አምልኮ ፕሮግራሞቻችን በደህና መጡ',
    addressHeader: 'አድራሻ',
    serviceHeader: 'የአምልኮ ጊዜያት',
    sundayService: 'እሁድ ሁሉ: ከጠዋቱ 11:00 - 1:00 ሰዓት',
    prayerMeeting: 'የጸሎት ጊዜ: ሐሙስ 18:30 (ከቀኑ 12:30)',
  },
};

const slides = [
  {
    type: 'welcome',
    image: '/Slide1.png',
  },
  {
    type: 'verse',
    image: '/Slide4.png',
    deVerse: '„Denn so sehr hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab...“',
    deRef: 'Johannes 3:16',
    enVerse: '"For God so loved the world that he gave his one and only Son..."',
    enRef: 'John 3:16',
    amVerse: '«በእርሱ የሚያምን ሁሉ የዘላለም ሕይወት እንዲኖረው እንጂ እንዲጠፋ እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና»',
    amRef: 'ዮሐንስ 3:16',
  },
  {
    type: 'community',
    image: '/Slide2.png',
    deTitle: 'Glaube & Gemeinschaft',
    enTitle: 'Faith & Fellowship',
    amTitle: 'እምነት እና ህብረት',
    deSub: 'Gemeinsam im Glauben und in der Liebe Christi wachsen.',
    enSub: "Growing together in Christ's love and grace.",
    amSub: 'በክርስቶስ ፍቅርና ጸጋ አብረን ማደግ።',
  },
  {
    type: 'invitation',
    image: '/Slide3.png',
    deTitle: 'Besuchen Sie uns am Sonntag',
    enTitle: 'Join Us This Sunday',
    amTitle: 'እሁድ ከእኛ ጋር ይሁኑ',
    deSub: 'Gottesdienst jeden Sonntag um 11:00 Uhr | Dachau-Ost',
    enSub: 'Sunday Service at 11:00 AM | Dachau-Ost',
    amSub: 'የእሁድ አምልኮ ከጠዋቱ 11:00 ሰዓት | ዳካው-ኦስት',
  },
];

export default function Home() {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentLang = (lang ? String(lang).toLowerCase() : 'de') as 'de' | 'en' | 'am';
  const t = translations[currentLang] || translations.de;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Hero Carousel Section */}
      <section className="relative h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden text-white bg-black">
        
        {/* Carousel Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center p-6 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {slide.image && (
              <img
                src={slide.image}
                alt={`Church background slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            )}

            {/* Dark contrast overlay */}
            <div className="absolute inset-0 bg-black/55 z-10" />

            {/* Overlay Text Content */}
            <div className="relative z-20 max-w-4xl mx-auto text-center space-y-4 px-4 drop-shadow-lg">
              
              {/* Slide 1: Welcome Header */}
              {slide.type === 'welcome' && (
                <div className="flex flex-col items-center justify-center text-center space-y-3 max-w-4xl mx-auto px-4 drop-shadow-md">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-wide text-white flex items-center justify-center flex-wrap gap-x-3 gap-y-1">
                    <span>
                      {currentLang === 'de'
                        ? 'Willkommen'
                        : currentLang === 'am'
                        ? 'እንኳን ደህና መጡ'
                        : 'Welcome'}
                    </span>
                    <span className="text-slate-300 font-extralight mx-1">|</span>
                    <span>
                      {currentLang === 'am' ? 'ወደ ቤተክርስቲያናችን' : "Christ's Evangelical Church"}
                    </span>
                  </h2>

                  <p className="text-sm sm:text-lg md:text-xl font-light text-slate-200 tracking-wider flex items-center justify-center space-x-2 pt-1">
                    <span className="text-slate-300 font-extralight">|</span>
                    <span>
                      {currentLang === 'de'
                        ? 'Freie evangelische Christus Gemeinde in München'
                        : currentLang === 'am'
                        ? 'የክርስቶስ ወንጌላዊት ቤተክርስቲያን በሙኒክ'
                        : 'Christ’s Evangelical Church in Munich'}
                    </span>
                  </p>
                </div>
              )}

              {/* Slide 2: Bible Verse */}
              {slide.type === 'verse' && (
                <div className="space-y-4 max-w-3xl mx-auto">
                  <p className="text-xl md:text-3xl font-serif italic text-amber-200 leading-relaxed">
                    {currentLang === 'de'
                      ? slide.deVerse
                      : currentLang === 'am'
                      ? slide.amVerse
                      : slide.enVerse}
                  </p>
                  <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-slate-300 pt-2">
                    —{' '}
                    {currentLang === 'de'
                      ? slide.deRef
                      : currentLang === 'am'
                      ? slide.amRef
                      : slide.enRef}{' '}
                    —
                  </p>
                </div>
              )}

              {/* Slide 3: Community */}
              {slide.type === 'community' && (
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-white font-medium">
                    {currentLang === 'de'
                      ? slide.deTitle
                      : currentLang === 'am'
                      ? slide.amTitle
                      : slide.enTitle}
                  </h2>
                  <p className="text-base md:text-xl font-serif text-amber-200 pt-2">
                    {currentLang === 'de'
                      ? slide.deSub
                      : currentLang === 'am'
                      ? slide.amSub
                      : slide.enSub}
                  </p>
                </div>
              )}

              {/* Slide 4: Service Invitation */}
              {slide.type === 'invitation' && (
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-white font-medium">
                    {currentLang === 'de'
                      ? slide.deTitle
                      : currentLang === 'am'
                      ? slide.amTitle
                      : slide.enTitle}
                  </h2>
                  <p className="text-sm md:text-lg text-slate-200 font-medium pt-2">
                    {currentLang === 'de'
                      ? slide.deSub
                      : currentLang === 'am'
                      ? slide.amSub
                      : slide.enSub}
                  </p>
                </div>
              )}

            </div>
          </div>
        ))}

        {/* Carousel Arrow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all"
          aria-label="Previous Slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all"
          aria-label="Next Slide"
        >
          ›
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 z-30 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-amber-400 w-6' : 'bg-white/50 w-3 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* Dynamic YouTube Sermons Component */}
      <SermonsSection lang={currentLang} />

      {/* Dynamic Location & Services Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            {t.locationTitle}
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2">
            {t.locationSub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Address & Service Times */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{t.addressHeader}</h3>
                  <p className="text-slate-700 text-sm mt-1">Rudolf-Diesel-Straße 9</p>
                  <p className="text-slate-700 text-sm">85221 Dachau, Germany</p>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="flex items-start space-x-4">
                <span className="text-2xl">🕒</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{t.serviceHeader}</h3>
                  <p className="text-indigo-950 font-bold text-base mt-1">
                    {t.sundayService}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {t.prayerMeeting}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
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
            />
          </div>

        </div>
      </section>

    </div>
  );
}