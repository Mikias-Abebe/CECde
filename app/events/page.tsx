'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  ExternalLink, 
  Clock, 
  Youtube, 
  ChevronRight, 
  ChevronLeft, 
  Heart,
  CalendarDays
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  de: {
    sectionTag: 'EVENTS',
    title: 'Anstehende Veranstaltungen',
    subtitle: 'Nehmen Sie an unseren Gottesdiensten, Bibelseminaren und besonderen Veranstaltungen teil. Seien Sie Teil dessen, was Gott in unserer Gemeinde tut.',
    serviceTimesTitle: 'Unsere Gottesdienstzeiten',
    serviceTimesSub: 'Jeden Sonntag um 11:00 Uhr • Dachau-Ost',
    youtubeBtn: 'Unseren YouTube-Kanal besuchen',
    youtubeSub: 'Predigten & Lehren ansehen',
    navEvents: 'Veranstaltungen',
    navEventsSub: 'Alle anstehenden Termine',
    calendarTitle: 'Veranstaltungskalender',
    welcomeBoxTitle: 'Alle sind herzlich willkommen!',
    welcomeBoxSub: 'Kommen Sie vorbei, wachsen Sie im Glauben und dienen Sie gemeinsam mit uns.',
    directions: 'Anfahrt',
    events: [
      {
        id: 1,
        month: 'OKT',
        day: '27',
        dayName: 'DI',
        time: '19:30',
        badge: 'BIBELSEMINAR',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        title: 'Wöchentliches Bibelseminar / የኤፌሶን መጽሐፍ ጥናት (Online)',
        desc: 'Wöchentliche Bibelstudienserie – Der Brief an die Epheser. Jeden Dienstag für ein bereicherndes Bibelstudium.',
        location: 'Online (Zoom)',
        type: 'Online',
        image: '/Slide2.png',
        darkBadge: true,
      },
      {
        id: 2,
        month: 'OKT',
        day: '29',
        dayName: 'DO',
        time: '18:30',
        badge: 'GEBET',
        badgeColor: 'bg-purple-100 text-purple-800',
        title: 'Wöchentliches Gebet / የጾም ጸሎት ፕሮግራም',
        desc: 'Gemeinsames Gebet für Gemeinde, persönliche Anliegen und die Stadt München.',
        location: 'Rudolf-Diesel-Straße 9, 85221 Dachau',
        type: 'Vor Ort',
        image: '/Slide4.png',
        darkBadge: false,
      },
      {
        id: 3,
        month: 'OKT',
        day: '31',
        dayName: 'SA',
        time: '17:00',
        badge: 'JUGEND',
        badgeColor: 'bg-amber-100 text-amber-800',
        title: 'Jugendgottesdienst & Anbetungsabend / የወጣቶች ምሽት',
        desc: 'Ein besonderer Abend mit Lobpreis, Wort und Gemeinschaft für Jugendliche und junge Erwachsene.',
        location: 'Rudolf-Diesel-Straße 9, 85221 Dachau',
        type: 'Vor Ort',
        image: '/Slide3.png',
        darkBadge: true,
      },
      {
        id: 4,
        month: 'NOV',
        day: '03',
        dayName: 'DI',
        time: '19:30',
        badge: 'BIBELSEMINAR',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        title: 'Wöchentliches Bibelseminar / የኤፌሶን መጽሐፍ ጥናት (Online)',
        desc: 'Fortsetzung unserer Studienreihe zum Epheserbrief mit vertiefenden Impulsen.',
        location: 'Online (Zoom)',
        type: 'Online',
        image: '/Slide1.png',
        darkBadge: true,
      },
      {
        id: 5,
        month: 'NOV',
        day: '05',
        dayName: 'DO',
        time: '18:30',
        badge: 'GEBET',
        badgeColor: 'bg-purple-100 text-purple-800',
        title: 'Wöchentliches Gebet / የጾም ጸሎት ፕሮግራም',
        desc: 'Seien Sie dabei, wenn wir gemeinsam im Gebet vor Gott stehen.',
        location: 'Rudolf-Diesel-Straße 9, 85221 Dachau',
        type: 'Vor Ort',
        image: '/Slide2.png',
        darkBadge: false,
      },
    ],
  },
  en: {
    sectionTag: 'EVENTS',
    title: 'Upcoming Events',
    subtitle: 'Join us for our services, bible seminars and special events. Be part of what God is doing through our church community.',
    serviceTimesTitle: 'Our Service Times',
    serviceTimesSub: 'Sunday 11:00 AM • Dachau-Ost',
    youtubeBtn: 'Visit Our YouTube Channel',
    youtubeSub: 'Watch sermons, teaching & more',
    navEvents: 'Events',
    navEventsSub: 'See upcoming events',
    calendarTitle: 'Event Calendar',
    welcomeBoxTitle: 'All are welcome!',
    welcomeBoxSub: 'Come, grow and serve together.',
    directions: 'Directions',
    events: [
      {
        id: 1,
        month: 'OCT',
        day: '27',
        dayName: 'TUE',
        time: '7:30 PM',
        badge: 'BIBLE SEMINAR',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        title: 'Weekly Bible Seminar / የኤፌሶን መጽሐፍ ተከታታይ ትምህርት(Online)',
        desc: 'Weekly Bible teaching series – The Book of Ephesians. Join us for an enriching Bible study.',
        location: 'Online',
        type: 'Online',
        image: '/Slide2.png',
        darkBadge: true,
      },
      {
        id: 2,
        month: 'OCT',
        day: '29',
        dayName: 'THU',
        time: '6:30 PM',
        badge: 'PRAYER',
        badgeColor: 'bg-purple-100 text-purple-800',
        title: 'Weekly Prayer / የጾም ጸሎት ፕሮግራም',
        desc: 'Join us for corporate prayer, fellowship, and intercession.',
        location: 'Rudolf-Diesel-Straße 9, 85221 Dachau',
        type: 'In Person',
        image: '/Slide4.png',
        darkBadge: false,
      },
      {
        id: 3,
        month: 'OCT',
        day: '31',
        dayName: 'SAT',
        time: '5:00 PM',
        badge: 'YOUTH',
        badgeColor: 'bg-amber-100 text-amber-800',
        title: 'Youth Service & Worship Night / የወጣቶች ምሽት',
        desc: 'Energetic worship, gospel teaching tailored for young adults, and fellowship.',
        location: 'Rudolf-Diesel-Straße 9, 85221 Dachau',
        type: 'In Person',
        image: '/Slide3.png',
        darkBadge: true,
      },
      {
        id: 4,
        month: 'NOV',
        day: '03',
        dayName: 'TUE',
        time: '7:30 PM',
        badge: 'BIBLE SEMINAR',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        title: 'Weekly Bible Seminar / የኤፌሶን መጽሐፍ ተከታታይ ትምህርት(Online)',
        desc: 'Continuing our study series in Ephesians with Pastor and leaders.',
        location: 'Online',
        type: 'Online',
        image: '/Slide1.png',
        darkBadge: true,
      },
      {
        id: 5,
        month: 'NOV',
        day: '05',
        dayName: 'THU',
        time: '6:30 PM',
        badge: 'PRAYER',
        badgeColor: 'bg-purple-100 text-purple-800',
        title: 'Weekly Prayer / የጾም ጸሎት ፕሮግራም',
        desc: 'Diving into prayer and seeking God for our city and community.',
        location: 'Rudolf-Diesel-Straße 9, 85221 Dachau',
        type: 'In Person',
        image: '/Slide2.png',
        darkBadge: false,
      },
    ],
  },
  am: {
    sectionTag: 'ሁነቶች',
    title: 'የሚመጡ መርሃ ግብሮች',
    subtitle: 'በአምልኮ ፕሮግራሞቻችን፣ በመጽሐፍ ቅዱስ ጥናቶቻችን እና በልዩ ሁነቶች ላይ ይካፈሉ። እግዚአብሔር በቤተክርስቲያናችን የሚያደርገው ነገር ተካፋይ ይሁኑ።',
    serviceTimesTitle: 'የአምልኮ ጊዜያቶቻችን',
    serviceTimesSub: 'እሁድ ከጠዋቱ 11:00 ሰዓት • ዳካው-ኦስት',
    youtubeBtn: 'የዩቲዩብ ቻናላችንን ይጎብኙ',
    youtubeSub: 'ትምህርቶችን እና ስብከቶችን ይመልከቱ',
    navEvents: 'ሁነቶች',
    navEventsSub: 'የሚመጡ ፕሮግራሞችን ይመልከቱ',
    calendarTitle: 'የሁነቶች ካላንደር',
    welcomeBoxTitle: 'ሁሉም በደስታ ተጋብዘዋል!',
    welcomeBoxSub: 'ይምጡ፣ በእምነት ያድጉ፣ አብረንም እናገልግል።',
    directions: 'አድራሻ',
    events: [
      {
        id: 1,
        month: 'ጥቅም',
        day: '27',
        dayName: 'ማክሰ',
        time: '19:30',
        badge: 'መጽሐፍ ቅዱስ ጥናት',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        title: 'የኤፌሶን መጽሐፍ ተከታታይ ትምህርት (Online)',
        desc: 'የኤፌሶን መጽሐፍ ተከታታይ ትምህርት በየሳምንቱ ማክሰኞ ከምሽቱ 19:30 ጀምሮ በኦንላይን ይከታተሉ።',
        location: 'ኦንላይን (Zoom)',
        type: 'Online',
        image: '/Slide2.png',
        darkBadge: true,
      },
      {
        id: 2,
        month: 'ጥቅም',
        day: '29',
        dayName: 'ሐሙስ',
        time: '18:30',
        badge: 'ጸሎት',
        badgeColor: 'bg-purple-100 text-purple-800',
        title: 'የጾም ጸሎት ፕሮግራም',
        desc: 'ለቤተክርስቲያን፣ ለግል ጉዳዮች እና ለከተማችን በጋራ የሚደረግ የጸሎት ጊዜ።',
        location: 'Rudolf-Diesel-Straße 9, 85221 Dachau',
        type: 'በአካል',
        image: '/Slide4.png',
        darkBadge: false,
      },
      {
        id: 3,
        month: 'ጥቅም',
        day: '31',
        dayName: 'ቅዳሜ',
        time: '17:00',
        badge: 'ወጣቶች',
        badgeColor: 'bg-amber-100 text-amber-800',
        title: 'የወጣቶች አምልኮና ህብረት ምሽት',
        desc: 'በህያው አምልኮ፣ ለወጣቶች በሚሆን የእግዚአብሔር ቃል እና በህብረት ጊዜ አብረን እናሳልፋለን።',
        location: 'Rudolf-Diesel-Straße 9, 85221 Dachau',
        type: 'በአካል',
        image: '/Slide3.png',
        darkBadge: true,
      },
      {
        id: 4,
        month: 'ህዳር',
        day: '03',
        dayName: 'ማክሰ',
        time: '19:30',
        badge: 'መጽሐፍ ቅዱስ ጥናት',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        title: 'የኤፌሶን መጽሐፍ ተከታታይ ትምህርት (Online)',
        desc: 'የመጽሐፍ ቅዱስ ጥናት ትምህርታችን የቀጣይ ክፍል ጥናት።',
        location: 'ኦንላይን (Zoom)',
        type: 'Online',
        image: '/Slide1.png',
        darkBadge: true,
      },
      {
        id: 5,
        month: 'ህዳር',
        day: '05',
        dayName: 'ሐሙስ',
        time: '18:30',
        badge: 'ጸሎት',
        badgeColor: 'bg-purple-100 text-purple-800',
        title: 'የጾም ጸሎት ፕሮግራም',
        desc: 'በጋራ በእግዚአብሔር ፊት የምንቀርብበት የጸሎት ጊዜ።',
        location: 'Rudolf-Diesel-Straße 9, 85221 Dachau',
        type: 'በአካል',
        image: '/Slide2.png',
        darkBadge: false,
      },
    ],
  },
};

export default function EventsPage() {
  const { lang } = useLanguage();
  const currentLang = (lang ? String(lang).toLowerCase() : 'en') as 'de' | 'en' | 'am';
  const t = translations[currentLang] || translations.en;

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-800 font-sans py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center space-x-2 text-amber-600 text-xs font-bold uppercase tracking-widest">
            <CalendarIcon className="w-4 h-4" />
            <span>{t.sectionTag}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#0f1d2a] tracking-tight">
            {t.title}
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-3xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Main Grid: Left Event Stream (2 cols) | Right Sidebar Widgets (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Event List */}
          <div className="lg:col-span-2 space-y-6">
            
            {t.events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* Left Date Block */}
                <div
                  className={`md:w-32 shrink-0 p-6 flex flex-col items-center justify-center text-center space-y-1 ${
                    event.darkBadge
                      ? 'bg-[#0f1d2a] text-white'
                      : 'bg-[#f7f6f2] text-slate-900 border-r border-slate-200/60'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                    {event.month}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold font-serif leading-none">
                    {event.day}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-80 pt-1">
                    {event.dayName}
                  </span>
                  <div className="flex items-center space-x-1 text-[11px] opacity-75 pt-2">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Center Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${event.badgeColor}`}
                    >
                      {event.badge}
                    </span>

                    <h3 className="text-lg md:text-xl font-serif font-bold text-[#0f1d2a] leading-snug">
                      {event.title}
                    </h3>

                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {event.desc}
                    </p>

                    <div className="flex items-center space-x-2 text-xs text-amber-700 pt-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Directions Button for In-Person events */}
                  {event.type !== 'Online' && (
                    <div>
                      <a
                        href="https://maps.google.com/?q=Rudolf-Diesel-Straße+9+85221+Dachau"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                        <span>{t.directions}</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Image Banner & Location Tag */}
                <div className="relative md:w-52 h-44 md:h-auto shrink-0 bg-slate-100 overflow-hidden m-3 md:m-4 rounded-xl border border-slate-200/60">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-medium flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{event.type}</span>
                  </div>
                </div>

              </div>
            ))}

            {/* Pagination Controls */}
            <div className="flex items-center justify-center space-x-2 pt-8 text-sm">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-200 transition"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => setCurrentPage(1)}
                className={`w-8 h-8 rounded-lg font-bold text-xs transition ${
                  currentPage === 1
                    ? 'bg-[#0f1d2a] text-white'
                    : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`w-8 h-8 rounded-lg font-bold text-xs transition ${
                  currentPage === 2
                    ? 'bg-[#0f1d2a] text-white'
                    : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                2
              </button>
              <button
                onClick={() => setCurrentPage(3)}
                className={`w-8 h-8 rounded-lg font-bold text-xs transition ${
                  currentPage === 3
                    ? 'bg-[#0f1d2a] text-white'
                    : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                3
              </button>

              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-200 transition"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Sidebar Widgets */}
          <div className="space-y-6">
            
            {/* 1. Service Times Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#0f1d2a] text-sm">{t.serviceTimesTitle}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{t.serviceTimesSub}</p>
              </div>
            </div>

            {/* 2. Visit YouTube Channel Action Card */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f1d2a] text-white p-5 rounded-2xl shadow-md hover:bg-[#16283b] transition flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                  <Youtube className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-amber-300 transition">
                    {t.youtubeBtn}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">{t.youtubeSub}</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition shrink-0 ml-2" />
            </a>

            {/* 3. Events Navigation Card */}
            <Link
              href="/events"
              className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:border-amber-400/80 transition flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <CalendarDays className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-slate-900 group-hover:text-amber-600 transition">
                    {t.navEvents}
                  </h5>
                  <p className="text-[11px] text-slate-500">{t.navEventsSub}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition" />
            </Link>

            {/* 4. Mini Calendar Widget */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-2 text-slate-900 font-serif font-bold text-sm">
                  <CalendarDays className="w-4 h-4 text-amber-600" />
                  <span>{t.calendarTitle}</span>
                </div>
              </div>

              {/* Month Header */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <ChevronLeft className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-800" />
                <span>October 2026</span>
                <ChevronRight className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-800" />
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-slate-400">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>

                {/* Calendar Days */}
                <span className="py-1 text-slate-300">27</span>
                <span className="py-1 text-slate-300">28</span>
                <span className="py-1 text-slate-300">29</span>
                <span className="py-1 text-slate-300">30</span>
                <span className="py-1 text-slate-700">1</span>
                <span className="py-1 text-slate-700">2</span>
                <span className="py-1 text-slate-700">3</span>

                <span className="py-1 text-slate-700">4</span>
                <span className="py-1 text-slate-700">5</span>
                <span className="py-1 text-slate-700">6</span>
                <span className="py-1 text-slate-700">7</span>
                <span className="py-1 text-slate-700">8</span>
                <span className="py-1 text-slate-700">9</span>
                <span className="py-1 text-slate-700">10</span>

                <span className="py-1 text-slate-700">11</span>
                <span className="py-1 text-slate-700">12</span>
                <span className="py-1 text-slate-700">13</span>
                <span className="py-1 text-slate-700">14</span>
                <span className="py-1 text-slate-700">15</span>
                <span className="py-1 text-slate-700">16</span>
                <span className="py-1 text-slate-700">17</span>

                <span className="py-1 text-slate-700">18</span>
                <span className="py-1 text-slate-700">19</span>
                <span className="py-1 text-slate-700">20</span>
                <span className="py-1 text-slate-700">21</span>
                <span className="py-1 text-slate-700">22</span>
                <span className="py-1 text-slate-700">23</span>
                <span className="py-1 text-slate-700">24</span>

                <span className="py-1 text-slate-700">25</span>
                <span className="py-1 text-slate-700">26</span>
                <span className="py-1 bg-amber-100 text-amber-900 rounded-md font-bold">27</span>
                <span className="py-1 text-slate-700">28</span>
                <span className="py-1 bg-amber-100 text-amber-900 rounded-md font-bold">29</span>
                <span className="py-1 text-slate-700">30</span>
                <span className="py-1 bg-amber-100 text-amber-900 rounded-md font-bold">31</span>
              </div>
            </div>

            {/* 5. "All are welcome" Greeting Box */}
            <div className="bg-[#fffdfa] p-4 rounded-2xl border border-amber-200/60 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <h5 className="font-bold text-xs text-slate-900">{t.welcomeBoxTitle}</h5>
                <p className="text-[11px] text-slate-500">{t.welcomeBoxSub}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}