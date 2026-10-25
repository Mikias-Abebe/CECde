'use client';

import Link from 'next/link';
import { Calendar, Clock, MapPin, Heart, BookOpen, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  de: {
    badge: 'CEC-Jugenddienst',
    heroTitle: 'Aufstehen in Glauben, Liebe & Berufung',
    heroSub: 'Die junge Generation in München stärken, um Christus zu kennen, in der Gemeinschaft zu wachsen und die Welt zu verändern.',
    drivesTitle: 'Was uns antreibt',
    drivesSub: 'Ein starkes Fundament bauen, das auf Gottes Wort und einer authentischen Gemeinschaft verwurzelt ist.',
    pillar1Title: 'Wort & Wahrheit',
    pillar1Desc: 'Wir vertiefen die Schrift gemeinsam, um alltägliche Herausforderungen, Glauben, Studium und Beziehungen mit Weisheit zu meistern.',
    pillar2Title: 'Echte Gemeinschaft',
    pillar2Desc: 'Keine Verstellung – nur ehrliche Freundschaften, in denen junge Menschen einander unterstützen und ermutigen.',
    pillar3Title: 'Anbetung & Dienst',
    pillar3Desc: 'Unseren Glauben durch leidenschaftliche Anbetung leben, unserer Gemeinde dienen und München erreichen.',
    eventsTitle: 'Jugendveranstaltungen & Treffen',
    eventsSub: 'Jeder im Alter von 13–30 Jahren ist herzlich zu unseren Treffen eingeladen!',
    ctaTitle: 'Möchtest du dich mit der CEC-Jugend verbinden?',
    ctaSub: 'Egal ob du neu in München bist, studierst oder ein geistliches Zuhause suchst – wir heißen dich herzlich willkommen.',
    ctaBtn1: 'Jugendleitung kontaktieren',
    ctaBtn2: 'Gesamten Kalender ansehen',
    youthEvents: [
      {
        title: 'Jugendgemeinschaft & Anbetungsabend',
        date: 'Jeden 2. & 4. Samstag',
        time: '17:00 - 19:30 Uhr',
        location: 'CEC Gemeindesaal, Dachau',
        description: 'Komm vorbei für lebendige Anbetung, biblische Impulse für junge Erwachsene und Gemeinschaft.',
      },
      {
        title: 'Bibelkreis & Kleingruppen',
        date: 'Jeden Donnerstag',
        time: '18:30 - 20:00 Uhr',
        location: 'Online (Zoom) / Vor Ort',
        description: 'Tief in Gottes Wort eintauchen, lebensnahe Themen besprechen und füreinander beten.',
      },
      {
        title: 'Jugend-Sommerfreizeit',
        date: '14. - 16. August 2026',
        time: 'Ganzes Wochenende',
        location: 'Bayerische Alpen',
        description: 'Ein Wochenende abseits des Alltags, um Gott zu begegnen, Freundschaften zu vertiefen und Natur zu genießen.',
      },
    ],
  },
  en: {
    badge: 'CEC Youth Ministry',
    heroTitle: 'Rising Up in Faith, Love & Purpose',
    heroSub: 'Empowering the young generation in Munich to know Christ, grow in community, and impact the world around them.',
    drivesTitle: 'What Drives Us',
    drivesSub: "Building a strong foundation rooted in God's Word and authentic community.",
    pillar1Title: 'Word & Truth',
    pillar1Desc: 'We unpack Scripture together to navigate real-world challenges, faith, academics, and relationships with wisdom.',
    pillar2Title: 'Authentic Fellowship',
    pillar2Desc: 'No pretense—just genuine friendships where young people support, encourage, and sharpen one another.',
    pillar3Title: 'Worship & Service',
    pillar3Desc: 'Living out our faith through passionate worship, serving our church, and reaching out to the Munich community.',
    eventsTitle: 'Youth Events & Gatherings',
    eventsSub: 'Everyone aged 13–30 is welcome to join our meetings!',
    ctaTitle: 'Want to Connect with CEC Youth?',
    ctaSub: 'Whether you are new in Munich, studying, or looking for a vibrant spiritual home, we would love to welcome you.',
    ctaBtn1: 'Contact Youth Leaders',
    ctaBtn2: 'View Full Calendar',
    youthEvents: [
      {
        title: 'Youth Fellowship & Worship Night',
        date: 'Every 2nd & 4th Saturday',
        time: '17:00 - 19:30',
        location: 'CEC Church Hall, Dachau',
        description: 'Join us for energetic worship, biblical teaching tailored for young adults, and fellowship.',
      },
      {
        title: 'Bible Study & Small Groups',
        date: 'Every Thursday',
        time: '18:30 - 20:00',
        location: 'Online (Zoom) / In-Person',
        description: 'Diving deep into the Word of God, discussing real-life topics, and praying for one another.',
      },
      {
        title: 'Youth Summer Retreat',
        date: 'August 14 - 16, 2026',
        time: 'Full Weekend',
        location: 'Bavarian Alps',
        description: 'A weekend away from routine to connect with God, build lasting friendships, and enjoy outdoor activities.',
      },
    ],
  },
  am: {
    badge: 'የወጣቶች አገልግሎት',
    heroTitle: 'በእምነት፣ በፍቅርና በዓላማ መነሳት',
    heroSub: 'በሙኒክ የሚገኙ ወጣቶች ክርስቶስን እንዲያውቁ፣ በህብረት እንዲያድጉና አካባቢያቸውን እንዲለውጡ ማበቃት።',
    drivesTitle: 'አላማችን',
    drivesSub: 'በእግዚአብሔር ቃልና በእውነተኛ ህብረት ላይ የተመሰረተ ጠንካራ መሰረት መገንባት።',
    pillar1Title: 'ቃል እና እውነት',
    pillar1Desc: 'የህይወት፣ የእምነት እና የትምህርት ጥያቄዎችን በእግዚአብሔር ቃል ጥበብ ለመመለስ አብረን እንማራለን።',
    pillar2Title: 'እውነተኛ ህብረት',
    pillar2Desc: 'ወጣቶች እርስ በእርሳቸው የሚደጋገፉበትና የሚበረቱበት እውነተኛ ክርስቲያናዊ ወንድማማችነት።',
    pillar3Title: 'አምልኮ እና አገልግሎት',
    pillar3Desc: 'በእውነተኛ አምልኮና አገልግሎት እምነታችንን በህይወት መግለጥ።',
    eventsTitle: 'የወጣቶች መርሃ ግብሮች',
    eventsSub: 'ከ13–30 ዓመት የሆናችሁ ወጣቶች በሙሉ በደስታ ተጋብዛችኋል!',
    ctaTitle: 'ከCEC ወጣቶች ጋር መቀላቀል ይፈልጋሉ?',
    ctaSub: 'በሙኒክ አዲስ ተማሪ ከሆኑ ወይም መንፈሳዊ ቤተሰብ የሚፈልጉ ከሆነ በደስታ እንቀበልዎታለን።',
    ctaBtn1: 'የወጣቶች መሪዎችን ያግኙ',
    ctaBtn2: 'ሙሉ መርሃ ግብሩን ይመልከቱ',
    youthEvents: [
      {
        title: 'የወጣቶች አምልኮና ህብረት ምሽት',
        date: 'በየወሩ 2ኛ እና 4ኛ ቅዳሜ',
        time: 'ከቀኑ 17:00 - 19:30',
        location: 'የCEC አዳራሽ፣ ዳካው',
        description: 'በህያው አምልኮ፣ ለወጣቶች በሚሆን የእግዚአብሔር ቃል እና በህብረት ጊዜ አብረን እናሳልፋለን።',
      },
      {
        title: 'የመጽሐፍ ቅዱስ ጥናት',
        date: 'በየሳምንቱ ሐሙስ',
        time: 'ከምሽቱ 18:30 - 20:00',
        location: 'በኦንላይን (Zoom) / በአካል',
        description: 'የእግዚአብሔርን ቃል በጥልቀት ማጥናት፣ በህይወት ዙሪያ መወያየትና እርስ በእርስ መጸለይ።',
      },
      {
        title: 'የወጣቶች የበጋ ካምፕ',
        date: 'ነሐሴ 14 - 16, 2026',
        time: 'ሙሉ ቅዳሜና እሁድ',
        location: 'የባቫሪያ ተሞች',
        description: 'ከዕለት ተዕለት ውጥረት ወጥቶ ከእግዚአብሔርና ከወጣቶች ጋር ጊዜ የማሳለፊያ ልዩ ፕሮግራም።',
      },
    ],
  },
};

export default function YouthPage() {
  const { lang } = useLanguage();
  const currentLang = (lang ? String(lang).toLowerCase() : 'en') as 'de' | 'en' | 'am';
  const t = translations[currentLang] || translations.en;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Hero Section with Background Photo */}
      <section className="relative h-[420px] md:h-[500px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        
        {/* Background Image */}
        <img
          src="/Slide6.png" // Replace with your desired image in public/ (e.g. /youth-hero.jpg)
          alt="CEC Youth Ministry"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/80 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center px-6 space-y-4">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </span>

          <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            {t.heroTitle}
          </h1>

          <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* Core Values / What We Do */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            {t.drivesTitle}
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
            {t.drivesSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{t.pillar1Title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.pillar1Desc}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{t.pillar2Title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.pillar2Desc}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{t.pillar3Title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.pillar3Desc}
            </p>
          </div>

        </div>
      </section>

      {/* Upcoming Youth Gatherings */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {t.eventsTitle}
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              {t.eventsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.youthEvents.map((event, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <div className="bg-[#182736] text-white rounded-3xl p-8 md:p-12 space-y-6 shadow-xl">
          <h2 className="text-2xl md:text-4xl font-serif font-bold">
            {t.ctaTitle}
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            {t.ctaSub}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:youth@cecmunich.de"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors text-sm shadow-md"
            >
              {t.ctaBtn1}
            </a>
            <Link
              href="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-semibold hover:bg-slate-700 transition-colors text-sm"
            >
              {t.ctaBtn2}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}