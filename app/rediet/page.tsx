'use client';

import { useState } from 'react';

type Lang = 'de' | 'en' | 'am';

const translations = {
  de: {
    heroTitle: 'Rediet Helfende Hände e.V.',
    heroSub: 'Unterstützung von Waisen, Witwen und bedürftigen Menschen in Äthiopien und Eritrea seit 2003.',
    
    // 1. About Us
    aboutTag: 'Wer wir sind',
    aboutTitle: 'Über Uns',
    p1: 'Rediet ist eine eingetragene Nichtregierungsorganisation (NGO), die 2003 mit dem Ziel gegründet wurde, Waisen und Witwen in Äthiopien zu unterstützen. Die Organisation wurde ursprünglich von vier Mitgliedern derselben Kirche im Raum München gegründet, um zehn Waisen und fünf Witwen zu helfen. Schnell weckte sie das Interesse weiterer Menschen innerhalb und außerhalb der Kirche.',
    p2: 'Als Verein der KEK München konnte die Organisation ihre Unterstützungsbasis und ihr Angebot erweitern. Neben ihrem Kernziel, Waisen und älteren Menschen zu helfen, konnte Rediet Fonds für Bildungsförderung und die Finanzierung von Kleinstunternehmen einrichten. Rediet konnte seine Reichweite auch über Äthiopien hinaus ausweiten und begann 2013 mit der Unterstützung Bedürftiger in Eritrea.',
    p3: 'Da das Interesse an Rediet und der Bedarf an zusätzlichen Mitteln wuchsen, wurde Rediet 2017 als NGO registriert. 2022 eröffnete die Organisation zudem ein Landesbüro in Äthiopien, um ihre Wirkung und Präsenz durch die Nähe zum Problem zu stärken.',

    // 2. Team
    teamTag: 'Unser Team',
    teamTitle: 'Mitglieder & Vorstände',
    executives: 'Executive Members',
    board: 'Board of Trustees',

    // 3. Projects
    projectsTag: 'Engagement',
    projectsTitle: 'Laufende Projekte',
    projectsSub: 'Es gibt vier Kategorien von Entwicklungsprojekten, die sich an hilflose Jugendliche und ältere Menschen richten.',
    rhpTitle: 'Rediet Homes Program (RHP)',
    rhpDesc: 'Ziel dieses Fonds ist es, Waisenkindern die Unterstützung zu bieten, die sie benötigen, um ein integrierter Teil der Gesellschaft zu werden. Rediet versucht, dieses Ziel zu erreichen, indem es ihnen Unterkunft und Betreuung sowie alle Lebenshaltungskosten (z. B. Ernährung, Gesundheitsversorgung, Bildung, Kleidung usw.) zur Verfügung stellt, bis die Kinder selbstständig sind.',
    fospTitle: 'Focus On School Program (FOSP)',
    fospDesc: 'Ziel dieses Fonds ist es, begabten Schülern, die zur Kinderarbeit gezwungen werden, zu helfen, ihre Eltern zu unterstützen und so ihre Ausbildungskosten zu decken. Strategie: Halbjährliche Bereitstellung von Unterrichtsmaterialien und monatlicher finanzieller Unterstützung.',
    eprpTitle: 'Elderly Poverty Relief Program (EPRP)',
    eprpDesc: 'Dieses Programm bietet älteren Frauen mit geringem oder keinem Einkommen finanzielle Unterstützung zur Deckung ihrer monatlichen Grundausgaben.',
    mbspTitle: 'Mikro-Unternehmensgründungsprogramm (MBSP)',
    mbspDesc: 'Dieses Programm bietet Frauen Startkapital und grundlegende Schulungen, um sie in die Gründung eigener Kleinunternehmen zu befähigen. Diese Unternehmen sind für die Zielfrauen oft leicht zu führen (Gemüse verkaufen, Brot backen usw.) und generieren gleichzeitig ausreichend Einkommen, um sich und ihre Familie zu ernähren.',
    
    // Metrics
    duration: 'Laufzeit',
    metrics: 'Kennzahlen',
    annualBudget: 'Jahresbudget',
    totalBudget: 'Gesamtbudget',

    // 4. Contact & Bank
    contactTag: 'Unterstützen',
    contactTitle: 'Bankverbindung & Kontakt',
    bankTitle: 'Spendenkonto (IBAN)',
    bankName: 'Bank',
    addressTitle: 'Postanschrift',
    contactDetails: 'Kontakt'
  },
  en: {
    heroTitle: 'Rediet Helping Hands e.V.',
    heroSub: 'Supporting orphans, widows, and vulnerable communities in Ethiopia and Eritrea since 2003.',
    
    // 1. About Us
    aboutTag: 'Who We Are',
    aboutTitle: 'About Us',
    p1: 'Rediet is a registered non-governmental organization (NGO) founded in 2003 with the mission of supporting orphans and widows in Ethiopia. It was originally started by four members of the same church in the Munich region to support 10 orphans and 5 widows, quickly gaining support both inside and outside the church community.',
    p2: 'As an association connected to KEK Munich, the organization expanded its core support. Beyond helping orphans and elderly people, Rediet launched funds for education sponsorship and micro-business financing. In 2013, Rediet expanded its reach beyond Ethiopia to support those in need in Eritrea.',
    p3: 'To accommodate growing support and community needs, Rediet was formally registered as an NGO in 2017. In 2022, Rediet established a country office in Ethiopia to maximize ground presence and direct local impact.',

    // 2. Team
    teamTag: 'Our Team',
    teamTitle: 'Leadership & Board',
    executives: 'Executive Members',
    board: 'Board of Trustees',

    // 3. Projects
    projectsTag: 'Our Impact',
    projectsTitle: 'Active Programs',
    projectsSub: 'Four core categories of development initiatives targeted towards vulnerable youth and elders.',
    rhpTitle: 'Rediet Homes Program (RHP)',
    rhpDesc: 'Provides complete orphan support including housing, healthcare, nutrition, and schooling until full independence.',
    fospTitle: 'Focus On School Program (FOSP)',
    fospDesc: 'Helps gifted children vulnerable to child labor remain in school through semi-annual school supply kits and direct monthly stipends.',
    eprpTitle: 'Elderly Poverty Relief Program (EPRP)',
    eprpDesc: 'Provides direct financial aid for low-income elderly women to cover essential living costs.',
    mbspTitle: 'Micro-Business Start Program (MBSP)',
    mbspDesc: 'Empowers vulnerable women through micro-seed funding and business training to start local micro-enterprises.',

    // Metrics
    duration: 'Duration',
    metrics: 'Key Stats',
    annualBudget: 'Annual Budget',
    totalBudget: 'Total Budget',

    // 4. Contact & Bank
    contactTag: 'Get In Touch',
    contactTitle: 'Bank Details & Contact',
    bankTitle: 'Donation Account (IBAN)',
    bankName: 'Bank',
    addressTitle: 'Mailing Address',
    contactDetails: 'Contact Details'
  },
  am: {
    heroTitle: 'ረድኤት ረዳት እጆች ማህበር',
    heroSub: 'ከ2003 ጀምሮ በኢትዮጵያ እና ኤርትራ የሚገኙ ወላጅ አልባ ህጻናትን እና ባልቴቶችን መደገፍ።',
    
    // 1. About Us
    aboutTag: 'ስለ እኛ',
    aboutTitle: 'ስለ ረድኤት',
    p1: 'ረድኤት በ2003 ዓ.ም በሙኒክ አካባቢ በሚገኙ አራት የቤተክርስቲያን አባላት 10 ወላጅ አልባ ህጻናትን እና 5 ባልቴቶችን ለመደገፍ የተመሰረተ ግብረሰናይ ድርጅት ነው።',
    p2: 'ከሙኒክ ክርስቶስ ወንጌላዊት ቤተክርስቲያን ጋር በመተባበር አገልግሎቱን በማስፋት የትምህርት እና የትንሽ ንግድ ስራዎች ድጋፍ ፈንድ ማቋቋም ተችሏል። በ2013 ዓ.ም አገልግሎቱ ወደ ኤርትራም ተስፋፍቷል።',
    p3: 'በ2017 NGO ሆኖ የተመዘገበ ሲሆን በ2022 ዓ.ም በኢትዮጵያ ዋና ቢሮ በመክፈት አገልግሎቱን በቀጥታ እያቀረበ ይገኛል።',

    // 2. Team
    teamTag: 'ቡድናችን',
    teamTitle: 'የስራ አመራር እና የቦርድ አባላት',
    executives: 'የስራ አስፈጻሚ አባላት',
    board: 'የቦርድ አባላት (Board of Trustees)',

    // 3. Projects
    projectsTag: 'የምናከናውናቸው ስራዎች',
    projectsTitle: 'ተቋማዊ ፕሮጀክቶች',
    projectsSub: 'ህጻናትን እና አረጋውያንን ለመደገፍ የተዘጋጁ አራት ዋና ዋና ፕሮጀክቶች።',
    rhpTitle: 'Rediet Homes Program (RHP)',
    rhpDesc: 'ወላጅ አልባ ህጻናት ራሳቸውን እስኪችሉ ድረስ መጠለያ፣ ምግብ፣ የህክምና እና የትምህርት አቅርቦት ማሟላት።',
    fospTitle: 'Focus On School Program (FOSP)',
    fospDesc: 'ተስፋ ያላቸውን ህጻናት ከጉልበት ብዝበዛ በመጠበቅ የትምህርት ቁሳቁስ እና ወርሃዊ የገንዘብ ድጋፍ ማድረግ።',
    eprpTitle: 'Elderly Poverty Relief Program (EPRP)',
    eprpDesc: 'ገቢ የሌላቸውን አረጋውያን እናቶች ወርሃዊ መሰረታዊ ወጪ መሸፈን።',
    mbspTitle: 'Micro-Business Start Program (MBSP)',
    mbspDesc: 'እናቶች ራሳቸውን እና ቤተሰባቸውን እንዲያስተዳድሩ የካፒታል እና የንግድ ስልጠና ድጋፍ መስጠት።',

    // Metrics
    duration: 'ጊዜ',
    metrics: 'ተጠቃሚዎች',
    annualBudget: 'ዓመታዊ በጀት',
    totalBudget: 'ጠቅላላ በጀት',

    // 4. Contact & Bank
    contactTag: 'እገዛ ያድርጉ',
    contactTitle: 'የባንክ እና የእውቂያ መረጃ',
    bankTitle: 'የለጋሽነት ባንክ ሂሳብ (IBAN)',
    bankName: 'ባንክ',
    addressTitle: 'አድራሻ',
    contactDetails: 'ስልክ እና ኢሜይል'
  }
};

const execTeam = [
  { name: 'Dr. Tewodros A. Beyene', role: 'Executive Director', image: '/images/rediet/tewodros.jpg' },
  { name: 'Wuttet Assaminew', role: 'Programs Manager', image: '/images/rediet/wuttet.jpg' },
  { name: 'Dr. Edengenetch M. Dejene', role: 'Fund Raising Manager', image: '/images/rediet/edengenetch.jpg' },
  { name: 'Emebet Markos', role: 'General Manager', image: '/images/rediet/emebet.jpg' },
];

const boardMembers = [
  { name: 'Worku Alemu', role: 'Chairperson of the Board', image: '/images/rediet/worku.jpg' },
  { name: 'Behailu Getahun', role: 'Secretary of the Board', image: '/images/rediet/behailu.jpg' },
  { name: 'Atakilt Sibhatu', role: 'Board Member', image: '/images/rediet/atakilt.jpg' },
  { name: 'Elizabeth Wube', role: 'Board Member', image: '/images/rediet/elizabeth.jpg' },
  { name: 'Romi Amlak', role: 'Board Member', image: '/images/rediet/romi.jpg' },
  { name: 'Yeshi Bereda', role: 'Board Member', image: '/images/rediet/yeshi.jpg' },
  { name: 'Lydia Woldemariam', role: 'Board Member', image: '/images/rediet/lydia.jpg' },
];

export default function RedietPage() {
  const [lang, setLang] = useState<Lang>('de');
  const [copied, setCopied] = useState(false);
  const t = translations[lang];

  const handleCopyIban = () => {
    navigator.clipboard.writeText('DE31760100850116232856');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      
      {/* Header / Hero Section with Background Image */}
      <section 
        className="relative pt-20 pb-16 px-6 bg-cover bg-center bg-no-repeat border-b border-slate-800 overflow-hidden"
        style={{
          // Change this URL path to match where you save your background image
          backgroundImage: "url('/images/rediet/hero-bg.jpg')",
        }}
      >
        {/* Dark Overlay to guarantee text readability over the image */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          
          {/* Language Switcher (Positioned Top Right) */}
          <div className="flex justify-end mb-6">
            <div className="inline-flex bg-slate-900/90 p-1 rounded-lg border border-slate-700/80 space-x-1 shadow-lg backdrop-blur-md">
              {(['de', 'en', 'am'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-md font-bold text-xs tracking-wider uppercase transition-all ${
                    lang === l
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l === 'am' ? 'አማርኛ' : l}
                </button>
              ))}
            </div>
          </div>

          {/* Title Container with Icon Logo */}
          <div className="text-center space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              
              {/* Logo Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 flex-shrink-0">
                <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide drop-shadow-md">
                {t.heroTitle}
              </h1>
            </div>

            <p className="text-slate-200 max-w-2xl mx-auto text-sm md:text-base leading-relaxed pt-2 drop-shadow">
              {t.heroSub}
            </p>
          </div>

        </div>
      </section>

      {/* 1. ABOUT US */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="text-amber-400 text-xs font-mono uppercase tracking-widest">{t.aboutTag}</span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mt-1">{t.aboutTitle}</h2>
        </div>
        <div className="space-y-6 text-slate-300 text-base leading-relaxed bg-slate-800/50 p-8 rounded-2xl border border-slate-700/60 shadow-xl backdrop-blur-sm">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
        </div>
      </section>

      {/* 2. TEAM */}
      <section className="py-20 px-6 bg-slate-950/60 border-y border-slate-800">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <span className="text-amber-400 text-xs font-mono uppercase tracking-widest">{t.teamTag}</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mt-1">{t.teamTitle}</h2>
          </div>

          {/* Executive Members */}
          <div>
            <h3 className="text-lg font-mono text-amber-400/90 uppercase tracking-wider mb-8 text-center">{t.executives}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {execTeam.map((m, i) => (
                <div key={i} className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-xl text-center flex flex-col items-center hover:border-amber-500/40 transition-all">
                  <div className="w-28 h-28 rounded-full bg-slate-700 border-2 border-amber-400/40 mb-4 overflow-hidden flex items-center justify-center text-slate-400 font-bold">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span>{m.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-bold text-white text-base">{m.name}</h4>
                  <p className="text-xs text-amber-400 mt-1">{m.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Board of Trustees */}
          <div>
            <h3 className="text-lg font-mono text-amber-400/90 uppercase tracking-wider mb-8 text-center">{t.board}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {boardMembers.map((bm, i) => (
                <div key={i} className="bg-slate-800/40 border border-slate-800 p-6 rounded-xl text-center flex flex-col items-center hover:border-slate-700 transition-all">
                  <div className="w-24 h-24 rounded-full bg-slate-700 border-2 border-slate-600 mb-4 overflow-hidden flex items-center justify-center text-slate-400 font-bold">
                    <img
                      src={bm.image}
                      alt={bm.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span>{bm.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-semibold text-slate-200 text-base">{bm.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">{bm.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-10">
        <div>
          <span className="text-amber-400 text-xs font-mono uppercase tracking-widest">{t.projectsTag}</span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mt-1">{t.projectsTitle}</h2>
          <p className="text-slate-400 text-sm mt-2">{t.projectsSub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* RHP */}
          <div className="bg-slate-800/50 border border-slate-700/80 p-6 rounded-2xl space-y-4 hover:border-slate-600 transition-all">
            <h3 className="text-xl font-bold text-amber-400">{t.rhpTitle}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{t.rhpDesc}</p>
            <div className="border-t border-slate-700/60 pt-4 grid grid-cols-2 gap-4 text-xs">
              <div><span className="text-slate-400">{t.duration}:</span> <p className="text-white font-semibold">2003 – laufend</p></div>
              <div><span className="text-slate-400">{t.metrics}:</span> <p className="text-white font-semibold">22 Begünstigte (2024)</p></div>
              <div><span className="text-slate-400">{t.annualBudget}:</span> <p className="text-white font-semibold">17.000 € (2024)</p></div>
              <div><span className="text-slate-400">{t.totalBudget}:</span> <p className="text-white font-semibold">145.000 € (21 Jahre)</p></div>
            </div>
          </div>

          {/* FOSP */}
          <div className="bg-slate-800/50 border border-slate-700/80 p-6 rounded-2xl space-y-4 hover:border-slate-600 transition-all">
            <h3 className="text-xl font-bold text-amber-400">{t.fospTitle}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{t.fospDesc}</p>
            <div className="border-t border-slate-700/60 pt-4 grid grid-cols-2 gap-4 text-xs">
              <div><span className="text-slate-400">{t.duration}:</span> <p className="text-white font-semibold">2016 – laufend</p></div>
              <div><span className="text-slate-400">{t.metrics}:</span> <p className="text-white font-semibold">25 Begünstigte (2024)</p></div>
              <div><span className="text-slate-400">{t.annualBudget}:</span> <p className="text-white font-semibold">3.600 € (2024)</p></div>
              <div><span className="text-slate-400">{t.totalBudget}:</span> <p className="text-white font-semibold">28.800 € (9 Jahre)</p></div>
            </div>
          </div>

          {/* EPRP */}
          <div className="bg-slate-800/50 border border-slate-700/80 p-6 rounded-2xl space-y-4 hover:border-slate-600 transition-all">
            <h3 className="text-xl font-bold text-amber-400">{t.eprpTitle}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{t.eprpDesc}</p>
            <div className="border-t border-slate-700/60 pt-4 grid grid-cols-2 gap-4 text-xs">
              <div><span className="text-slate-400">{t.duration}:</span> <p className="text-white font-semibold">2016 – laufend</p></div>
              <div><span className="text-slate-400">{t.metrics}:</span> <p className="text-white font-semibold">25 Begünstigte (2024)</p></div>
              <div><span className="text-slate-400">{t.annualBudget}:</span> <p className="text-white font-semibold">3.600 € (2024)</p></div>
              <div><span className="text-slate-400">{t.totalBudget}:</span> <p className="text-white font-semibold">28.800 € (9 Jahre)</p></div>
            </div>
          </div>

          {/* MBSP */}
          <div className="bg-slate-800/50 border border-slate-700/80 p-6 rounded-2xl space-y-4 hover:border-slate-600 transition-all">
            <h3 className="text-xl font-bold text-amber-400">{t.mbspTitle}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{t.mbspDesc}</p>
            <div className="border-t border-slate-700/60 pt-4 text-xs">
              <span className="text-slate-400">Focus:</span>
              <p className="text-white font-semibold mt-0.5">Start-up seed funding & basic business operations support</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BANK & CONTACT INFO */}
      <section className="py-20 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <span className="text-amber-400 text-xs font-mono uppercase tracking-widest">{t.contactTag}</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mt-1">{t.contactTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Bank Transfer Box */}
            <div className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-amber-400">{t.bankTitle}</h3>
              
              <div className="space-y-1">
                <p className="text-xs text-slate-400 uppercase tracking-wider">IBAN</p>
                <div className="flex items-center justify-between bg-slate-900 border border-slate-700 p-3 rounded-lg">
                  <span className="font-mono text-white text-sm md:text-base font-bold">
                    DE31 7601 0085 0116 2328 56
                  </span>
                  <button
                    onClick={handleCopyIban}
                    className="ml-2 text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1.5 rounded font-bold transition-all"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="pt-2 text-sm text-slate-300">
                <span className="text-slate-400">{t.bankName}:</span> <span className="font-semibold text-white">Postbank München</span>
              </div>
            </div>

            {/* Address & Contact Box */}
            <div className="bg-slate-800/40 border border-slate-700/60 p-8 rounded-2xl space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">{t.addressTitle}</h3>
                <p className="font-bold text-white">Rediet-helfendehände e.V.</p>
                <p className="text-slate-300 text-sm">Rudolf-Diesel-Strasse 9</p>
                <p className="text-slate-300 text-sm">85221 Dachau, Germany</p>
              </div>

              <div className="border-t border-slate-700/60 pt-4 space-y-2 text-sm">
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400">{t.contactDetails}</h3>
                <p className="text-slate-300">
                  <span className="text-slate-400">Email:</span>{' '}
                  <a href="mailto:info@rediet-rhh.org" className="text-amber-400 hover:underline">
                    info@rediet-rhh.org
                  </a>
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-400">Tel:</span>{' '}
                  <a href="tel:+491711258415" className="text-amber-400 hover:underline">
                    +49 171 1258415
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}