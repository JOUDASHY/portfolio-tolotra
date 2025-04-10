import React from 'react';

const Banner = () => {
  const backgroundImageUrl = "https://scontent.ftnr3-1.fna.fbcdn.net/v/t39.30808-6/480794707_1701449863804555_7186347203799277568_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEhFLzojIbA6qa6-GpR_6538TkNzV8VE0bxOQ3NXxUTRv73KKR-G8DAJo3LJuXiG2BCsA-4tJlJJGCpYPMNE2Rp&_nc_ohc=NV9jE97konwQ7kNvwEa3Eml&_nc_oc=AdkaHPIooow7I-jRskWn02OY9KlW6bn16d3ZXRh6JiV2mjjUqqkpr-Z0pgHMYb141Y0&_nc_zt=23&_nc_ht=scontent.ftnr3-1.fna&_nc_gid=bZze3eCjns8QDdXrJA5jDw&oh=00_AfHQ5rq13CAYuEfF4Xx8umxoVe077B4RkhjLLlMQw4EuJA&oe=67FB343B";

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
