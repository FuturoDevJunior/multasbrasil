import React, { createContext } from 'react';

interface LanguageContextType {
  language: 'pt';
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'pt'
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  document.documentElement.lang = 'pt';

  return (
    <LanguageContext.Provider value={{ language: 'pt' }}>
      {children}
    </LanguageContext.Provider>
  );
};