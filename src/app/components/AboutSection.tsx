"use client";

import { motion } from "framer-motion";
import {
  SparklesIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";

const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      duration: 0.8,
    },
  },
};

const gradientText =
  "bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-400 bg-clip-text text-transparent";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-gray-50 to-indigo-50 py-10 px-4 sm:py-12 sm:px-6 lg:py-20 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2
            className={`font-bold ${gradientText} text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
          >
            <span className="inline-block mr-1 sm:mr-2">🌍</span>
            Multilingual Visionary
            <span className="inline-block ml-1 sm:ml-2">🎓</span>
          </h2>
          <p className="mt-1 text-sm sm:text-base md:text-lg text-gray-600 font-medium">
            Born December 1st, 2003 • Shaping Madagascar's Future
          </p>

          {/* Download CV Button */}
          <div className="mt-4 sm:mt-6">
            <a
              href="/Tolotra_resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-indigo-700 transition"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-12 items-start">
          {/* Cultural Identity Card */}
          <motion.div
            className="relative h-full rounded-xl overflow-hidden shadow-lg group bg-gradient-to-br from-indigo-500 to-blue-400 p-0.5"
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative bg-white rounded-xl p-4 sm:p-6 h-full">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-indigo-100 rounded-lg">
                  <AcademicCapIcon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className={`font-bold ${gradientText} text-lg sm:text-xl`}>
                    Cultural Identity
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                    Malagasy Woman • Native French Speaker
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="border-l-3 border-blue-400 pl-2 sm:pl-3">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    🌐 Global Collaborations
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5">
                    Partnering with United Nations agencies
                    <br />
                    Implementing international education standards
                  </p>
                </div>

                <div className="border-l-3 border-purple-400 pl-2 sm:pl-3">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    🗣️ Language Mastery
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                    {["French", "English", "Spanish", "Russian"].map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Core Objective */}
            <motion.div
              className="relative bg-white/90 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-100/30 to-blue-100/30" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-indigo-100 rounded-lg">
                    <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                  </div>
                  <h3 className={`font-bold ${gradientText} text-lg sm:text-xl`}>
                    Primary Mission
                  </h3>
                </div>
                <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  <p>Revolutionizing education in Madagascar through:</p>
                  <ul className="list-disc pl-4 sm:pl-5 mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                    <li>Interactive engagement strategies</li>
                    <li>Cross-cultural communication frameworks</li>
                    <li>Technology-enhanced learning solutions</li>
                    <li>Global best practice adaptation</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-indigo-600 text-white p-4 sm:p-6 rounded-xl shadow-lg"
              whileHover={{ rotate: -1 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <GlobeAltIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white/80" />
                <h3 className="font-bold text-base sm:text-lg">
                  Global Perspective
                </h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                "Building educational bridges between Madagascar and the world
                through multilingual expertise and deep cultural understanding."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-14 sm:top-16 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-indigo-200/30 rounded-full blur-2xl -z-0" />
      <div className="absolute bottom-20 sm:bottom-24 right-0 w-24 sm:w-28 h-24 sm:h-28 bg-blue-200/30 rounded-full blur-2xl -z-0" />
    </section>
  );
};

export default AboutSection;
