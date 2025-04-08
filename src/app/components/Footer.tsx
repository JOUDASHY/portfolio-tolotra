import React from "react";

// Composant de pied de page complet et responsive
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Section 1 : Description ou Présentation */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Your Brand</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your Brand est une plateforme moderne dédiée à la gestion de projets, 
            la formation en ligne et la collaboration à distance. Nous aidons les 
            entreprises et les particuliers à atteindre leurs objectifs grâce à des outils performants.
          </p>
        </div>

        {/* Section 2 : Navigation rapide */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Liens utiles</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#about" className="hover:text-white transition">À propos</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">Nos services</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">Projets</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition">Conditions d'utilisation</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition">Politique de confidentialité</a>
            </li>
          </ul>
        </div>

        {/* Section 3 : Réseaux sociaux et contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Restez connectés</h2>
          <p className="text-sm text-gray-400 mb-4">
            Suivez-nous sur les réseaux sociaux pour rester informé de nos dernières actualités.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white text-gray-400 text-xl transition"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white text-gray-400 text-xl transition"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="mailto:yourmail@example.com"
              aria-label="Email"
              className="hover:text-white text-gray-400 text-xl transition"
            >
              <i className="fas fa-envelope" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-white text-gray-400 text-xl transition"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Brand. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
