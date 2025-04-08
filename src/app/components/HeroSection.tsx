import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 to-purple-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between px-4 py-16 md:flex-row md:py-24">
        
        {/* Bloc texte */}
        <div className="mt-8 flex w-full flex-col md:mt-0 md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Education Innovator &<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
              Multilingual Strategist
            </span>
            <br /> Shaping Futures
          </h1>
          <p className="mt-4 text-lg text-pink-100 md:pr-8">
            Bridging cultures through education in Madagascar, leveraging fluency in 4 languages to create impactful communication solutions and sustainable development frameworks.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-block rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View Education Initiatives
            </a>
            <a
              href="#languages"
              className="inline-block rounded-lg border-2 border-pink-300 bg-white/10 px-6 py-3 text-sm font-semibold text-pink-50 backdrop-blur-sm transition-all duration-300 hover:border-pink-400 hover:bg-white/20"
            >
              Language Expertise
            </a>
          </div>

          {/* Badge des langues */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-900/30 px-4 py-2 backdrop-blur-sm">
            <span className="text-xl">🌍</span>
            <div className="flex gap-2">
              <span className="text-pink-300">FR</span>
              <span className="text-purple-300">EN</span>
              <span className="text-pink-300">ES</span>
              <span className="text-purple-300">RU</span>
            </div>
          </div>
        </div>

        {/* Bloc image (avec ton image locale CV.png) */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 blur-xl"
              aria-hidden="true"
            ></div>
            <div className="relative overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
              <Image
                src="/CV.png"
                alt="CV Preview"
                width={600}
                height={600}
                className="object-cover"
                priority
                style={{
                  objectPosition: 'center 30%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
