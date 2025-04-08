const Banner1 = () => {
  const backgroundImageUrl = "https://www.excellence-linguistique.fr/wp-content/uploads/2021/01/ou-partir-en-sejour-linguistique-2048x1366.jpeg";

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Image d’arrière-plan */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/70"></div>
      </div>

      {/* Zone de contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Fostering Connections Through Learning<br className="hidden lg:block" />
          <span className="text-indigo-200">& Multilingual Expression</span>
        </h1>

        <p className="text-lg sm:text-xl text-indigo-50 mb-8 max-w-3xl mx-auto">
          Devoted teacher and language specialist aiming to reshape education in Madagascar using creative approaches and global cultural insight.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-white text-lg">🌍</span>
            <span className="text-white font-medium">French | English | Spanish | Russian</span>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
