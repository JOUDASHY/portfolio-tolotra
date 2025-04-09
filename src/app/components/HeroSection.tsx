import Image from 'next/image';
import { motion } from 'framer-motion'; // Ajout de cette ligne

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 to-purple-900 text-white overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between px-4 py-12 md:flex-row md:py-24 sm:px-6 lg:px-8">
        
        {/* Bloc texte */}
        <div className="mt-8 flex w-full flex-col md:mt-0 md:w-1/2 lg:pr-10">
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
            <br className="hidden sm:block" /> Shaping Futures
          </motion.h1>

          <motion.p 
            className="mt-4 text-lg text-pink-100 md:pr-8 lg:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Bridging cultures through education in Madagascar, leveraging fluency in 4 languages to create impactful communication solutions and sustainable development frameworks.
          </motion.p>

          <motion.div 
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="inline-block rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:text-base lg:px-8 lg:py-4"
            >
              View Education Initiatives
            </a>
            <a
              href="#languages"
              className="inline-block rounded-lg border-2 border-pink-300 bg-white/10 px-6 py-3 text-sm font-semibold text-pink-50 backdrop-blur-sm transition-all duration-300 hover:border-pink-400 hover:bg-white/20 sm:text-base lg:px-8 lg:py-4"
            >
              Language Expertise
            </a>
          </motion.div>

          {/* Badge des langues */}
          <motion.div 
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-900/30 px-4 py-2 backdrop-blur-sm lg:mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-2xl">🌍</span>
            <div className="flex gap-3">
              <span className="text-pink-300 font-medium">FR</span>
              <span className="text-purple-300 font-medium">EN</span>
              <span className="text-pink-300 font-medium">ES</span>
              <span className="text-purple-300 font-medium">RU</span>
            </div>
          </motion.div>
        </div>

        {/* Bloc image */}
        <motion.div 
          className="flex w-full items-center justify-center md:w-1/2 lg:pl-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 blur-xl"
              aria-hidden="true"
            ></div>
            <div className="relative overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-white/30">
              <Image
                src="/CV.png"
                alt="CV Preview"
                width={700}
                height={700}
                className="w-full h-auto object-cover"
                priority
                style={{
                  objectPosition: 'center 30%',
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Effets décoratifs */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-900/80 to-transparent z-10"></div>
    </section>
  );
}