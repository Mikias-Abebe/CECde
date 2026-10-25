// src/app/context/LanguageContext.tsx
'use client';

import React, { createContext, useContext, useState } from 'react';

export type Language = 'de' | 'en' | 'am';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'de',
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('de');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);