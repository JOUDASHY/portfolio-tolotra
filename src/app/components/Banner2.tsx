import React from 'react';

const Banner2 = () => {
  const backgroundImageUrl = "https://i0.wp.com/azlinguistics.com/wp-content/uploads/2021/10/Untitled-800-x-300-px-700-x-300-px-1.png?w=700&ssl=1";

  return (
    <section className="relative h-[70vh] min-h-[400px] md:h-screen flex items-center justify-center">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/70"></div>
      </div>
  
      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 text-center">
        <h1 className="
          text-2xl        /* mobile */
          sm:text-3xl     /* ≥640px */
          md:text-4xl     /* ≥768px */
          lg:text-5xl     /* ≥1024px */
          xl:text-6xl     /* ≥1280px */
          font-bold text-white 
          mb-3            /* mobile */
          sm:mb-4         /* ≥640px */
          md:mb-6         /* ≥768px */
          leading-snug 
          sm:leading-snug 
          md:leading-tight
          animate-fade-in-up
        ">
          Creating Connections Through Learning<br className="hidden md:block"/>
          <span className="
            text-lg        /* mobile */
            sm:text-xl     /* ≥640px */
            md:text-2xl    /* ≥768px */
            lg:text-[2.5rem] /* ≥1024px */
            text-indigo-200 
            block sm:inline
            animate-fade-in-up-second
          ">
            & Multilingual Exchange
          </span>
        </h1>
  
        <p className="
          text-xs         /* mobile */
          sm:text-sm      /* ≥640px */
          md:text-base    /* ≥768px */
          lg:text-lg      /* ≥1024px */
          text-indigo-50 
          mb-4            /* mobile */
          sm:mb-6         /* ≥640px */
          md:mb-8         /* ≥768px */
          max-w-xs        /* mobile */
          sm:max-w-2xl    /* ≥640px */
          md:max-w-3xl    /* ≥768px */
          mx-auto px-2    /* mobile */
          sm:px-0
          animate-fade-in-up-third
        ">
          Dedicated educator and communicator committed to revitalizing Madagascar's academic landscape through inventive methods and intercultural insight.
        </p>
  
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <div className="
            flex items-center space-x-1.5  /* mobile */
            sm:space-x-2                   /* ≥640px */
            bg-white/10 backdrop-blur-sm 
            px-3 py-1.5                    /* mobile */
            sm:px-5 sm:py-2                /* ≥640px */
            md:px-6 md:py-3                /* ≥768px */
            rounded-full 
            animate-fade-in-up-third
          ">
            <span className="text-white text-base sm:text-lg md:text-xl">🌍</span>
            <span className="text-white font-medium text-xs sm:text-sm md:text-base">
              French | English | Spanish | Russian
            </span>
          </div>
          <button className="
            bg-indigo-600 hover:bg-indigo-700 text-white 
            px-4 py-2 text-xs                /* mobile */
            sm:px-6 sm:py-2.5 sm:text-sm      /* ≥640px */
            md:px-8 md:py-3 md:text-base      /* ≥768px */
            rounded-full transition-all duration-300 transform hover:scale-105
            animate-fade-in-up-third
          ">
            Explore Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
