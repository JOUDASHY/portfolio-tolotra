"use client";


import React from 'react';
import { motion } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';

type LanguageLevel = 'Native' | 'Fluency & Accuracy' | 'Upper-Intermediate' | 'Basic';

interface Language {
  code: string;
  name: string;
  level: LanguageLevel;
  score: number;
}

const languages: Language[] = [
  { 
    code: 'MG', 
    name: 'Malagasy', 
    level: 'Native', 
    score: 100,
  },
  { 
    code: 'GB', 
    name: 'English', 
    level: 'Fluency & Accuracy', 
    score: 100,
  },
  { 
    code: 'FR', 
    name: 'Français', 
    level: 'Fluency & Accuracy', 
    score: 100,
  },
  { 
    code: 'ES', 
    name: 'Español', 
    level: 'Fluency & Accuracy', 
    score: 90,
  },
  { 
    code: 'CN', 
    name: '中文', 
    level: 'Upper-Intermediate', 
    score: 40,
  },
  { 
    code: 'RU', 
    name: 'Русский', 
    level: 'Upper-Intermediate', 
    score: 40,
  },
  // { 
  //   code: 'TR', 
  //   name: 'Türk', 
  //   level: 'Basic', 
  //   score: 20,
  // },
  { 
    code: 'DE', 
    name: 'Deutsch', 
    level: 'Basic', 
    score: 20,
  },
];

const levelColor: Record<LanguageLevel, string> = {
  Native: 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400',
  'Fluency & Accuracy': 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400',
  'Upper-Intermediate': 'bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400',
  Basic: 'bg-gradient-to-r from-rose-600 via-rose-500 to-pink-400',
};

const Languages = () => (
  <section className="py-4 sm:py-6 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:8px_8px] sm:[background-size:12px_12px] md:[background-size:16px_16px] opacity-70"></div>
    <div className="max-w-7xl mx-auto px-1 sm:px-3 md:px-4 relative">
      <motion.h2 
        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent text-center mb-4 sm:mb-6 md:mb-16"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Language Proficiency
      </motion.h2>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-1.5 xs:gap-2 sm:gap-3 md:gap-6 lg:gap-8">
        {languages.map((lang, idx) => (
          <motion.div
            key={lang.code}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.03 }}
            className="group"
          >
            <div className="bg-white/95 backdrop-blur-sm md:backdrop-blur-xl rounded-md sm:rounded-lg md:rounded-2xl p-1.5 xs:p-2 sm:p-3 md:p-6 
                          transition-all duration-200 md:duration-500 ease-out
                          border border-gray-200/50
                          shadow-sm
                          md:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                          hover:shadow-md
                          md:hover:shadow-[0_20px_60px_rgb(0,0,0,0.12)]
                          hover:-translate-y-0.5
                          md:hover:-translate-y-3
                          hover:border-white
                          group-hover:scale-[1.002]
                          md:group-hover:scale-[1.02]
                          relative">
              <div className="mb-2 sm:mb-3 md:mb-6">
                <div className="relative aspect-[2/1] sm:aspect-video overflow-hidden rounded sm:rounded-md md:rounded-xl 
                              shadow-sm md:shadow-[0_4px_20px_rgb(0,0,0,0.06)]">
                  <ReactCountryFlag
                    countryCode={lang.code}
                    svg
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2 md:space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-800">
                    {lang.name}
                  </h3>
                  <span className="text-[8px] sm:text-xs md:text-sm font-semibold text-gray-600">{lang.code}</span>
                </div>

                <div className="relative pt-1 sm:pt-1.5 md:pt-3">
                  <div className="flex justify-between text-[8px] sm:text-xs md:text-sm font-medium mb-1 md:mb-2">
                    <span className="text-gray-600">Proficiency</span>
                    <span className="text-gray-800">{lang.score}%</span>
                  </div>
                  <div className="h-2 sm:h-3 md:h-5 w-full bg-gray-100/80 backdrop-blur-sm rounded 
                               overflow-hidden border border-gray-200/50 shadow-inner relative">
                    <motion.div
                      className={`h-full ${levelColor[lang.level]} relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.score}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0.5%,#ffffff20_10%,transparent_10.5%)] animate-[shine_1.5s_ease-in-out_infinite]" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Languages;