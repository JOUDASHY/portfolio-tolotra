import React from 'react';
import { motion } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';

// Définition des types
type LanguageLevel = 'Native' | 'Fluency & Accuracy' | 'Upper-Intermediate' | 'Basic';

interface Language {
  code: string;
  name: string;
  level: LanguageLevel;
  score: number;
}

// Données des langues
const languages: Language[] = [
  { code: 'MG', name: 'Malagasy', level: 'Native', score: 100 },
  { code: 'GB', name: 'English', level: 'Fluency & Accuracy', score: 90 },
  { code: 'FR', name: 'Français', level: 'Fluency & Accuracy', score: 90 },
  { code: 'ES', name: 'Español', level: 'Fluency & Accuracy', score: 90 },
  { code: 'CN', name: '中文', level: 'Upper-Intermediate', score: 75 },
  { code: 'RU', name: 'Русский', level: 'Upper-Intermediate', score: 75 },
  { code: 'TR', name: 'Türk', level: 'Basic', score: 40 },
  { code: 'DE', name: 'Deutsch', level: 'Basic', score: 40 },
];

// Couleurs pour chaque niveau
const levelColor: Record<LanguageLevel, string> = {
  Native: 'bg-green-500',
  'Fluency & Accuracy': 'bg-blue-500',
  'Upper-Intermediate': 'bg-yellow-500',
  Basic: 'bg-red-400',
};

const Languages = () => (
  <section id="languages" className="py-20 bg-indigo-50">
    <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12">
        Languages
        <span className="block w-20 h-2 bg-gradient-to-r from-indigo-500 to-blue-400 mx-auto mt-4 rounded-full" />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {languages.map((lang, idx) => (
          <motion.div
            key={lang.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <ReactCountryFlag
                  countryCode={lang.code}
                  svg
                  style={{ fontSize: '2em' }}
                  title={lang.name}
                />
                <h3 className="text-xl font-semibold text-gray-800">{lang.name}</h3>
              </div>
              <span
                className={`text-xs font-medium text-white px-3 py-1 rounded ${levelColor[lang.level]}`}
              >
                {lang.level}
              </span>
            </div>

            <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden mb-3">
              <motion.div
                className={`${levelColor[lang.level]}`}
                initial={{ width: 0 }}
                animate={{ width: `${lang.score}%` }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                style={{ height: '100%' }}
              />
            </div>
            <div className="text-right text-sm text-gray-600">
              {lang.score}%
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Languages;