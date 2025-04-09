import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 md:py-10 mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {/* Section 1 : Description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Your Brand</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Your Brand est une plateforme moderne dédiée à la gestion de projets, 
            la formation en ligne et la collaboration à distance. Nous aidons les 
            entreprises et les particuliers à atteindre leurs objectifs.
          </p>
        </div>

        {/* Section 2 : Navigation */}
        <div>
          <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Liens utiles</h2>
          <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
            <li>
              <a href="#about" className="hover:text-white transition-colors duration-200">À propos</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors duration-200">Nos services</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors duration-200">Projets</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition-colors duration-200">Conditions</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition-colors duration-200">Confidentialité</a>
            </li>
          </ul>
        </div>

        {/* Section 3 : Contact */}
        <div>
          <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Contact</h2>
          <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
            Suivez-nous sur les réseaux sociaux pour nos dernières actualités.
          </p>
          <div className="flex space-x-3 md:space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white text-gray-400 text-lg md:text-xl transition-colors duration-200"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white text-gray-400 text-lg md:text-xl transition-colors duration-200"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="mailto:contact@example.com"
              aria-label="Email"
              className="hover:text-white text-gray-400 text-lg md:text-xl transition-colors duration-200"
            >
              <i className="fas fa-envelope" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white text-gray-400 text-lg md:text-xl transition-colors duration-200"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
          <div className="mt-3 md:mt-4 text-xs md:text-sm text-gray-400">
            <p>contact@yourbrand.com</p>
            <p>+261 34 00 000 00</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-6 md:mt-10 pt-4 md:pt-6 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Your Brand. Tous droits réservés.</p>
        <p className="mt-1 md:mt-2">Made with ♡ in Madagascar</p>
      </div>
    </footer>
  );
};

export default Footer;