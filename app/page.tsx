'use client';

import { useState, useEffect } from 'react';
import SermonsSection from './components/SermonsSection';

const slides = [
  {
    type: 'welcome',
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
    type: 'community',
    image: '/Slide2.jpg', // Replace with your image path
    enTitle: 'Faith & Fellowship',
    deTitle: 'Glaube & Gemeinschaft',
    amTitle: 'እምነት እና ህብረት',
    enSub: 'Growing together in Christ’s love and grace.',
    deSub: 'Gemeinsam im Glauben und in der Liebe Christi wachsen.',
  },
  {
    type: 'invitation',
    image: '/Slide3.jpg', // Replace with your image path
    enTitle: 'Join Us This Sunday',
    deTitle: 'Besuchen Sie uns am Sonntag',
    amTitle: 'እሑድ ከእኛ ጋር ይሁኑ',
    enSub: 'Sunday Service at 11:00 AM | Dachau-Ost',
    deSub: 'Gottesdienst jeden Sonntag um 11:00 Uhr',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

      {/* Hero Section */}
      <section className="relative h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden text-white bg-black">
        
        {/* Background Image Carousel */}
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

            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/45 z-10" />

            {/* Centered Overlay Content */}
            <div className="relative z-20 max-w-4xl mx-auto text-center space-y-4 px-4 drop-shadow-lg">
              {slide.type === 'welcome' && (
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-white font-medium">
                    እንኳን ደህና መጡ <span className="text-slate-300">|</span> Welcome <span className="text-slate-300">|</span> Willkommen
                  </h2>
                  <p className="text-base md:text-2xl font-serif text-slate-200 pt-2 tracking-wide">
                    የክርስቶስ ወንጌላዊት ቤተክርስቲያን በሙኒክ | Christ&apos;s Evangelical Church in Munich
                  </p>
                </div>
              )}

              {slide.type === 'verse' && (
                <div className="space-y-4 max-w-3xl mx-auto">
                  <p className="text-xl md:text-3xl font-serif italic text-amber-200 leading-relaxed">
                    {slide.enVerse}
                  </p>
                  <p className="text-sm md:text-lg font-serif text-slate-300">
                    {slide.amVerse}
                  </p>
                  <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-slate-400 pt-2">
                    — {slide.enRef} / {slide.amRef} —
                  </p>
                </div>
              )}

              {slide.type === 'community' && (
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-white font-medium">
                    {slide.amTitle} <span className="text-slate-300">|</span> {slide.enTitle}
                  </h2>
                  <p className="text-base md:text-xl font-serif text-amber-200 pt-2">
                    {slide.enSub}
                  </p>
                  <p className="text-sm md:text-base text-slate-300 italic">
                    {slide.deSub}
                  </p>
                </div>
              )}

              {slide.type === 'invitation' && (
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-white font-medium">
                    {slide.enTitle}
                  </h2>
                  <p className="text-lg md:text-2xl font-serif text-amber-200">
                    {slide.amTitle}
                  </p>
                  <p className="text-sm md:text-lg text-slate-200 font-medium pt-2">
                    {slide.enSub}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Left / Right Carousel Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all focus:outline-none"
          aria-label="Previous Slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all focus:outline-none"
          aria-label="Next Slide"
        >
          ›
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-4 z-30 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-amber-400 w-6' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* YouTube Sermons Section */}
      <SermonsSection lang="de" />

      {/* Location & Services Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Unser Standort in München / Dachau</h2>
          <p className="text-slate-600 text-sm md:text-base mt-2">Herzlich willkommen zu unseren Gottesdiensten</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Adresse</h3>
                  <p className="text-slate-700 font-semibold">Christ&apos;s Evangelical Church</p>
                  <p className="text-slate-800 font-medium text-sm mt-1">Rudolf-Diesel-Straße 9</p>
                  <p className="text-slate-500 text-sm">85221 Dachau-Ost (München)</p>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="flex items-start space-x-4">
                <span className="text-2xl">🕒</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Gottesdienstzeiten</h3>
                  <p className="text-indigo-950 font-bold text-base mt-1">Jeden Sonntag: 11:00 - 13:00 Uhr</p>
                  <p className="text-slate-600 text-sm">Gebetstreffen: Donnerstag 18:30 Uhr</p>
                </div>
              </div>
            </div>
          </div>

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

    </div>
  );
}