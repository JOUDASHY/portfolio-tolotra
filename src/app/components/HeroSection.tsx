"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 to-purple-900 text-white overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between px-4 py-8 md:flex-row md:py-12 lg:py-24 sm:px-6 lg:px-8 mt-12 md:mt-0">
        
        {/* Text block */}
        <div className="mt-6 flex w-full flex-col md:mt-0 md:w-1/2 lg:pr-12 xl:pr-16">
          <motion.h1 
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Education Innovator &<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
              Multilingual Strategist
            </span>
            <br className="hidden md:block" /> Shaping Futures
          </motion.h1>

          <motion.p 
            className="mt-4 text-lg text-pink-100 md:pr-8 md:text-xl lg:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Bridging cultures through education in Madagascar, leveraging fluency in 4 languages to create impactful communication solutions.
          </motion.p>

          <motion.div 
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="inline-block rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg md:px-8 md:py-4 md:text-base"
            >
              View Education Initiatives
            </a>
            <a
              href="#languages"
              className="inline-block rounded-xl border-2 border-pink-300 bg-white/10 px-6 py-3 text-sm font-semibold text-pink-50 backdrop-blur-sm transition-all duration-300 hover:border-pink-400 hover:bg-white/20 md:px-8 md:py-4 md:text-base"
            >
              Language Expertise
            </a>
          </motion.div>

          {/* Language badge */}
          <motion.div 
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-900/30 px-4 py-2 backdrop-blur-sm md:mt-10 md:gap-3 md:px-6 md:py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-2xl md:text-3xl">🌍</span>
            <div className="flex gap-3 md:gap-4">
              <span className="text-pink-300 text-base font-medium md:text-lg">FR</span>
              <span className="text-purple-300 text-base font-medium md:text-lg">EN</span>
              <span className="text-pink-300 text-base font-medium md:text-lg">ES</span>
              <span className="text-purple-300 text-base font-medium md:text-lg">RU</span>
            </div>
          </motion.div>
        </div>

        {/* Image block */}
        <motion.div 
          className="flex w-full items-center justify-center md:w-1/2 lg:pl-12 xl:pl-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 blur-lg xl:blur-xl"
              aria-hidden="true"
            ></div>
            <div className="relative overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-white/30">
              <Image
                src="/CV.png"
                alt="CV Preview"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
                priority
                style={{
                  objectPosition: 'center 30%',
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative effects */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-purple-900/80 to-transparent z-10"></div>
    </section>
  );
}