import React from 'react';

const Banner = () => {
  const backgroundImageUrl = "/tolotra.jpg";

  return (
    <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center sm:h-[80vh] md:h-screen">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundPosition: 'center 20%',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/70"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="
          text-2xl        /* mobile */
          sm:text-3xl     /* ≥640px */
          md:text-4xl     /* ≥768px */
          lg:text-5xl     /* ≥1024px */
          xl:text-6xl     /* ≥1280px */
          font-bold text-white mb-3 leading-snug
          sm:mb-4 sm:leading-snug
          md:mb-5 md:leading-tight
          lg:mb-6
          animate-fade-in-up
        ">
          Building Bridges Through Education<br className="hidden lg:block"/>
          <span className="text-indigo-200 block sm:inline text-base sm:text-lg md:text-xl">
            & Multilingual Communication
          </span>
        </h1>

        <p className="
          text-xs         /* mobile */
          sm:text-sm      /* ≥640px */
          md:text-base    /* ≥768px */
          lg:text-lg      /* ≥1024px */
          text-indigo-50 mb-4 max-w-xs mx-auto
          sm:mb-5 sm:max-w-sm
          md:mb-6 md:max-w-xl
          animate-fade-in-up-second
        ">
          Passionate educator and communicator dedicated to transforming Madagascar's educational landscape through innovative strategies and cross-cultural understanding.
        </p>

        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3 md:gap-4">
          <div className="
            flex items-center 
            bg-white/10 backdrop-blur-sm 
            px-3 py-1.5 rounded-full 
            sm:px-4 sm:py-2 
            md:px-5 md:py-2.5 
            animate-fade-in-up-third
          ">
            <span className="text-white text-base sm:text-lg md:text-xl mr-1 sm:mr-2">🌍</span>
            <span className="text-white font-medium text-xs sm:text-sm md:text-base">
              FR | EN | ES | RU
            </span>
          </div>
          <button className="
            bg-indigo-600 hover:bg-indigo-700 
            text-white 
            px-4 py-2 text-xs     /* mobile */
            sm:px-5 sm:py-2.5 sm:text-sm
            md:px-6 md:py-3 md:text-base
            rounded-full 
            transition-all duration-300 transform hover:scale-105 
            animate-fade-in-up-third
          ">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
