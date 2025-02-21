import React, { useContext } from 'react';
import { Globe2 } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import type { Language } from '../i18n/translations';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors">
        <Globe2 className="w-5 h-5 text-blue-600" />
        <span className="text-sm font-medium text-gray-700">{language.toUpperCase()}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-blue-50 transition-colors ${
              language === lang.code ? 'bg-blue-50' : ''
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm font-medium text-gray-700">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};