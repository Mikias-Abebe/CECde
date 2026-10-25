'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Heart, Users, FileText, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const content = {
  de: {
    heroTitle: 'Wer Wir Sind',
    heroSub: 'CEC München strebt danach, eine lebendige, multikulturelle Kirche zu sein, in der Menschen aller Herkünfte gemeinsam Gott anbeten und im Glauben wachsen.',
    breadcrumb: 'Über uns',
    tabs: {
      story: 'Unsere Geschichte',
      mission: 'Unsere Mission',
      values: 'Werte',
      beliefs: 'Glaubensbekenntnis',
    },
    storyContent: [
      'Christ’s Evangelical Church in München (CEC) wurde gegründet, um den geistlichen Bedürfnissen der gläubigen Gemeinschaft in München und Dachau zu dienen.',
      'Heute ist CEC ein Ort der Anbetung, der Gemeinschaft und des Dienstes an Nächsten. Wir heißen jeden willkommen, der seinen Glauben vertiefen möchte.',
    ],
    missionContent: [
      'Unsere Mission ist es, das Evangelium von Jesus Christus zu verkünden, Jünger zu machen und eine liebevolle Gemeinschaft aufzubauen.',
      'Wir setzen uns dafür ein, Hoffnung zu spenden und praktische Nächstenliebe in unserer Region auszuüben.',
    ],
    valuesContent: [
      '• Liebe & Gemeinschaft: Wir leben eine offene und füreinander sorgende Gemeinschaft.',
      '• Bibeltreue: Gottes Wort ist das Fundament unseres Glaubens und Handelns.',
      '• Lobpreis: Gemeinschaftlicher Lobpreis steht im Zentrum unserer Treffen.',
    ],
    beliefsContent: [
      'Wir glauben an den einen dreifaltigen Gott (Vater, Sohn und Heiliger Geist), an die Errettung durch Jesus Christus und an die Autorität der Heiligen Schrift.',
    ],
    sidebarTitle: 'Über CEC München',
    sidebarLinks: [
      { label: 'Glaubensbekenntnis', href: '/about' },
      { label: 'Satzung & Ordnung', href: '/about' },
      { label: 'Gemeindeleitung', href: '/about' },
    ],
    ctaTitle: 'Werde Teil unserer Gemeinschaft',
    ctaSub: 'Wir laden dich herzlich ein, Teil unserer Gemeindefamilie zu werden.',
    ctaBtn1: 'Mitmachen',
    ctaBtn2: 'Kontaktieren Sie uns',
  },
  en: {
    heroTitle: 'Who We Are',
    heroSub: 'CEC Munich strives to be a vibrant, multicultural church where people from all backgrounds can worship together and grow in faith!',
    breadcrumb: 'Who We Are',
    tabs: {
      story: 'Our Story',
      mission: 'Mission',
      values: 'Values',
      beliefs: 'Beliefs',
    },
    storyContent: [
      'Christ’s Evangelical Church in Munich (CEC) was established to serve the spiritual needs of believers in Munich and Dachau.',
      'Today, CEC continues to be a place of worship, fellowship, and community service, welcoming all who seek to grow in their faith.',
    ],
    missionContent: [
      'Our mission is to spread the Gospel of Jesus Christ, make disciples, and build a loving Christian community.',
      'We are committed to sharing hope and practicing active Christian love in our local society.',
    ],
    valuesContent: [
      '• Love & Fellowship: Cultivating an open and caring environment for all.',
      '• Biblical Truth: Grounding our lives and actions in God’s Word.',
      '• Worship: Centering our gatherings on praise and prayer.',
    ],
    beliefsContent: [
      'We believe in one God in three Persons (Father, Son, and Holy Spirit), salvation through Jesus Christ, and the authority of the Holy Bible.',
    ],
    sidebarTitle: 'About CEC Munich',
    sidebarLinks: [
      { label: 'Our Statement of Faith', href: '/about' },
      { label: 'Our Constitution', href: '/about' },
      { label: 'Our Leadership', href: '/about' },
    ],
    ctaTitle: 'Join Our Community',
    ctaSub: 'We invite you to become part of our church family and grow with us in faith and fellowship.',
    ctaBtn1: 'Get Involved',
    ctaBtn2: 'Contact Us',
  },
  am: {
    heroTitle: 'ስለ እኛ',
    heroSub: 'የክርስቶስ ወንጌላዊት ቤተክርስቲያን በሙኒክ ሁሉም በክርስቶስ ፍቅር አብረው የሚያመልኩበትና በእምነት የሚያድጉበት ህያው ቤተክርስቲያን ነው!',
    breadcrumb: 'ስለ እኛ',
    tabs: {
      story: 'የእኛ ታሪክ',
      mission: 'ተልዕኮ',
      values: 'እሴቶች',
      beliefs: 'እምነታችን',
    },
    storyContent: [
      'የክርስቶስ ወንጌላዊት ቤተክርስቲያን በሙኒክ በሙኒክና በዳካው የሚኖሩ አማኞችን መንፈሳዊ ፍላጎት ለማገልገል የተመሰረተች ናት።',
      'ዛሬም ቤተክርስቲያናችን የአምልኮ፣ የህብረት እና የቁርጠኝነት አገልግሎት ስፍራ በመሆን እግዚአብሔርን የሚሹትን ሁሉ በደስታ ትቀበላለች።',
    ],
    missionContent: [
      'ተልዕኳችን የኢየሱስ ክርስቶስን ወንጌል መስበክ፣ ደቀ መዛሙርትን ማፍራት እና ፍቅር የተሞላበት ክርስቲያናዊ ህብረት መገንባት ነው።',
    ],
    valuesContent: [
      '• ፍቅር እና ህብረት: እርስ በእርስ የሚረዳዱበትን ክፍት ህብረት መፍጠር።',
      '• የእግዚአብሔር ቃል: ህይወታችንን እና አገልግሎታችንን በመጽሐፍ ቅዱስ እውነት ላይ መመሥረት።',
    ],
    beliefsContent: [
      'በአንድ አምላክ በአብ በወልድ በመንፈስ ቅዱስ፣ በኢየሱስ ክርስቶስ የማዳን ሥራ እና በመጽሐፍ ቅዱስ ባለስልጣንነት እናምናለን።',
    ],
    sidebarTitle: 'ስለ ቤተክርስቲያናችን',
    sidebarLinks: [
      { label: 'የእምነት መግለጫ', href: '/about' },
      { label: 'የቤተክርስቲያኗ መዋቅር', href: '/about' },
      { label: 'የመሪዎች ስብስብ', href: '/about' },
    ],
    ctaTitle: 'የህብረታችን አካል ይሁኑ',
    ctaSub: 'የቤተክርስቲያናችን ቤተሰብ በመሆን በእምነትና በህብረት አብረውን እንዲያድጉ እንጋብዝዎታለን።',
    ctaBtn1: 'ተሳታፊ ይሁኑ',
    ctaBtn2: 'ያግኙን',
  },
};

export default function AboutPage() {
  const { lang } = useLanguage();
  const currentLang = (lang ? String(lang).toLowerCase() : 'en') as 'de' | 'en' | 'am';
  const t = content[currentLang] || content.en;

  const [activeTab, setActiveTab] = useState<'story' | 'mission' | 'values' | 'beliefs'>('story');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. Hero Header Banner */}
      <section className="relative h-[280px] md:h-[340px] bg-slate-950 flex items-center justify-center overflow-hidden text-white text-center px-6">
        <img
          src="/Slide3.png"
          alt="Church Fellowship Background"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/80" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide">
            {t.heroTitle}
          </h1>
          <p className="text-slate-200 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* 2. Breadcrumb Trail */}
      <div className="bg-white border-b border-slate-200/80 py-3 px-6 md:px-12 text-xs md:text-sm text-slate-500">
        <div className="max-w-6xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-amber-500 transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-medium">{t.breadcrumb}</span>
        </div>
      </div>

      {/* 3. Main Content Container */}
      <main className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Interactive Section */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Pill Tab Switcher */}
          <div className="bg-slate-100 p-1.5 rounded-xl flex flex-wrap gap-1 border border-slate-200/80 text-xs md:text-sm font-medium">
            <button
              onClick={() => setActiveTab('story')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all ${
                activeTab === 'story'
                  ? 'bg-white text-indigo-950 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>{t.tabs.story}</span>
            </button>

            <button
              onClick={() => setActiveTab('mission')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all ${
                activeTab === 'mission'
                  ? 'bg-white text-indigo-950 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Heart className="w-4 h-4 text-emerald-600" />
              <span>{t.tabs.mission}</span>
            </button>

            <button
              onClick={() => setActiveTab('values')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all ${
                activeTab === 'values'
                  ? 'bg-white text-indigo-950 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4 text-amber-600" />
              <span>{t.tabs.values}</span>
            </button>

            <button
              onClick={() => setActiveTab('beliefs')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all ${
                activeTab === 'beliefs'
                  ? 'bg-white text-indigo-950 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>{t.tabs.beliefs}</span>
            </button>
          </div>

          {/* Active Tab Content Card */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            
            <div className="flex items-center space-x-3 text-indigo-950 pb-2 border-b border-slate-100">
              <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
                {activeTab === 'story' && <BookOpen className="w-5 h-5" />}
                {activeTab === 'mission' && <Heart className="w-5 h-5 text-emerald-600" />}
                {activeTab === 'values' && <Users className="w-5 h-5 text-amber-600" />}
                {activeTab === 'beliefs' && <BookOpen className="w-5 h-5 text-blue-600" />}
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold">
                {t.tabs[activeTab]}
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base pt-2">
              {activeTab === 'story' &&
                t.storyContent.map((paragraph, i) => <p key={i}>{paragraph}</p>)}

              {activeTab === 'mission' &&
                t.missionContent.map((paragraph, i) => <p key={i}>{paragraph}</p>)}

              {activeTab === 'values' &&
                t.valuesContent.map((paragraph, i) => <p key={i}>{paragraph}</p>)}

              {activeTab === 'beliefs' &&
                t.beliefsContent.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>

          </div>

        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
              {t.sidebarTitle}
            </h3>

            <div className="space-y-3">
              {t.sidebarLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex items-center space-x-3 text-slate-700 hover:text-amber-600 text-sm font-medium transition-colors p-2 rounded-lg hover:bg-slate-50"
                >
                  <FileText className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* 4. Bottom Call To Action Banner */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-[#0f1d2a] text-white rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-4xl font-serif font-bold tracking-wide">
              {t.ctaTitle}
            </h2>
            <p className="text-slate-300 text-sm md:text-base font-light">
              {t.ctaSub}
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/events"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-2.5 rounded-lg text-sm transition-all shadow-md"
              >
                {t.ctaBtn1}
              </Link>
              <Link
                href="/about"
                className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/30 px-6 py-2.5 rounded-lg text-sm transition-all"
              >
                {t.ctaBtn2}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}