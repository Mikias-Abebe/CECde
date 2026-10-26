export interface HomeEvent {
  month: { de: string; en: string; am: string };
  day: string;
  time: { de: string; en: string; am: string };
  badge: { de: string; en: string; am: string };
  badgeColor: string;
  title: { de: string; en: string; am: string };
  desc: { de: string; en: string; am: string };
  location: { de: string; en: string; am: string };
}

export const currentWeeklyEvents: HomeEvent[] = [
  {
    month: { de: 'OKT', en: 'OCT', am: 'ጥቅም' },
    day: '27',
    time: { de: '19:30 Uhr', en: '7:30 PM', am: '19:30' },
    badge: { de: 'BIBELSEMINAR', en: 'BIBLE SEMINAR', am: 'መጽሐፍ ቅዱስ ጥናት' },
    badgeColor: 'bg-emerald-100 text-emerald-800',
    title: {
      de: 'Wöchentliches Bibelseminar (Online)',
      en: 'Weekly Bible Seminar (Online)',
      am: 'የኤፌሶን መጽሐፍ ተከታታይ ትምህርት (Online)',
    },
    desc: {
      de: 'Der Brief an die Epheser – fortlaufende Bibelstudienserie über Zoom.',
      en: 'The Book of Ephesians – ongoing Bible teaching series via Zoom.',
      am: 'የኤፌሶን መጽሐፍ ተከታታይ ትምህርት በየሳምንቱ በኦንላይን ይከታተሉ።',
    },
    location: { de: 'Online (Zoom)', en: 'Online (Zoom)', am: 'ኦንላይን (Zoom)' },
  },
  {
    month: { de: 'OKT', en: 'OCT', am: 'ጥቅም' },
    day: '29',
    time: { de: '18:30 Uhr', en: '6:30 PM', am: '18:30' },
    badge: { de: 'GEBET', en: 'PRAYER', am: 'ጸሎት' },
    badgeColor: 'bg-purple-100 text-purple-800',
    title: {
      de: 'Wöchentliches Gebetstreffen',
      en: 'Weekly Prayer Meeting',
      am: 'የጾም ጸሎት ፕሮግራም',
    },
    desc: {
      de: 'Gemeinsames Gebet für unsere Gemeinde, persönliche Anliegen und München.',
      en: 'Corporate prayer for our church community, personal needs, and Munich.',
      am: 'ለቤተክርስቲያን፣ ለግል ጉዳዮች እና ለከተማችን በጋራ የሚደረግ የጸሎት ጊዜ።',
    },
    location: { de: 'CEC Gemeindesaal, Dachau', en: 'CEC Church Hall, Dachau', am: 'የCEC አዳራሽ፣ ዳካው' },
  },
  {
    month: { de: 'OKT', en: 'OCT', am: 'ጥቅም' },
    day: '31',
    time: { de: '17:00 Uhr', en: '5:00 PM', am: '17:00' },
    badge: { de: 'JUGEND', en: 'YOUTH', am: 'ወጣቶች' },
    badgeColor: 'bg-amber-100 text-amber-800',
    title: {
      de: 'Jugendgottesdienst & Anbetungsnacht',
      en: 'Youth Service & Worship Night',
      am: 'የወጣቶች አምልኮና ህብረት ምሽት',
    },
    desc: {
      de: 'Lobpreis, biblische Impulse und Gemeinschaft für junge Erwachsene.',
      en: 'Praise, biblical message tailored for young adults, and fellowship.',
      am: 'በህያው አምልኮ፣ ለወጣቶች በሚሆን የእግዚአብሔር ቃል እና በህብረት ጊዜ አብረን እናሳልፋለን።',
    },
    location: { de: 'CEC Gemeindesaal, Dachau', en: 'CEC Church Hall, Dachau', am: 'የCEC አዳራሽ፣ ዳካው' },
  },
];