const Banner1 = () => {
  const backgroundImageUrl = "https://www.excellence-linguistique.fr/wp-content/uploads/2021/01/ou-partir-en-sejour-linguistique-2048x1366.jpeg";

  return (
    <section className="relative h-[80vh] md:h-screen flex items-center justify-center">
      {/* Image d'arrière-plan */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/70"></div>
      </div>

      {/* Zone de contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight animate-fade-in-up">
          Fostering Connections Through Learning<br className="hidden md:block" />
          <span className="text-indigo-200 text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem]">
            & Multilingual Expression
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-indigo-50 mb-6 sm:mb-8 max-w-2xl md:max-w-3xl mx-auto px-2 sm:px-0">
          Devoted teacher and language specialist aiming to reshape education in Madagascar using creative approaches and global cultural insight.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full">
            <span className="text-white text-base sm:text-lg">🌍</span>
            <span className="text-white font-medium text-sm sm:text-base">
              French | English | Spanish | Russian
            </span>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner1;