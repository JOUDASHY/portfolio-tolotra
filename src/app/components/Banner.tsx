const Banner = () => {
    const backgroundImageUrl = "https://scontent.ftnr3-1.fna.fbcdn.net/v/t39.30808-6/480794707_1701449863804555_7186347203799277568_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEhFLzojIbA6qa6-GpR_6538TkNzV8VE0bxOQ3NXxUTRv73KKR-G8DAJo3LJuXiG2BCsA-4tJlJJGCpYPMNE2Rp&_nc_ohc=NV9jE97konwQ7kNvwEa3Eml&_nc_oc=AdkaHPIooow7I-jRskWn02OY9KlW6bn16d3ZXRh6JiV2mjjUqqkpr-Z0pgHMYb141Y0&_nc_zt=23&_nc_ht=scontent.ftnr3-1.fna&_nc_gid=bZze3eCjns8QDdXrJA5jDw&oh=00_AfHQ5rq13CAYuEfF4Xx8umxoVe077B4RkhjLLlMQw4EuJA&oe=67FB343B";

    return (
      <section className="relative h-screen flex items-center justify-center">
        {/* Image de fond */}
        <div 
  className="absolute inset-0 z-0 bg-cover"
  style={{
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundPosition: 'center 20%'  // Centré horizontalement, 20% depuis le haut
  }}
>

          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/70"></div>
        </div>
  
        {/* Contenu */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Building Bridges Through Education<br className="hidden lg:block"/>
            <span className="text-indigo-200">& Multilingual Communication</span>
          </h1>
  
          <p className="text-lg sm:text-xl text-indigo-50 mb-8 max-w-3xl mx-auto">
            Passionate educator and communicator dedicated to transforming Madagascar's educational landscape through innovative strategies and cross-cultural understanding.
          </p>
  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-white text-lg">🌍</span>
              <span className="text-white font-medium">French | English | Spanish | Russian</span>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner;