const Banner = () => {
  const backgroundImageUrl = "https://scontent.ftnr3-1.fna.fbcdn.net/v/t39.30808-6/480794707_1701449863804555_7186347203799277568_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEhFLzojIbA6qa6-GpR_6538TkNzV8VE0bxOQ3NXxUTRv73KKR-G8DAJo3LJuXiG2BCsA-4tJlJJGCpYPMNE2Rp&_nc_ohc=NV9jE97konwQ7kNvwEa3Eml&_nc_oc=AdkaHPIooow7I-jRskWn02OY9KlW6bn16d3ZXRh6JiV2mjjUqqkpr-Z0pgHMYb141Y0&_nc_zt=23&_nc_ht=scontent.ftnr3-1.fna&_nc_gid=bZze3eCjns8QDdXrJA5jDw&oh=00_AfHQ5rq13CAYuEfF4Xx8umxoVe077B4RkhjLLlMQw4EuJA&oe=67FB343B";

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center sm:h-screen">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/70"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 text-center">
        <h1 className="text-3xl font-bold text-white mb-4 leading-snug sm:text-4xl sm:mb-5 md:text-5xl md:leading-tight lg:text-6xl lg:mb-6 animate-fade-in-up">
          Building Bridges Through Education<br className="hidden lg:block"/>
          <span className="text-indigo-200 block sm:inline">& Multilingual Communication</span>
        </h1>

        <p className="text-base text-indigo-50 mb-6 mx-auto max-w-md sm:text-lg sm:max-w-xl sm:mb-7 md:text-xl md:max-w-2xl md:mb-8">
          Passionate educator and communicator dedicated to transforming Madagascar's educational landscape through innovative strategies and cross-cultural understanding.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full sm:px-5 sm:py-2.5 md:px-6 md:py-3">
            <span className="text-white text-lg mr-2">🌍</span>
            <span className="text-white font-medium text-sm sm:text-base">
              FR | EN | ES | RU
            </span>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 text-sm rounded-full transition-all duration-300 transform hover:scale-105 sm:px-7 sm:py-3 sm:text-base">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;