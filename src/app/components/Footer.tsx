import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 md:py-10 mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {/* Section 1 : About Me */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-3">About Me</h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Passionate about communication and linguistics, I am deeply interested in the dynamics of language, discourse analysis, and human interactions. My journey is centered on understanding the mechanisms of communication and using language as a tool for expression, transmission, and social transformation.
          </p>
        </div>

        {/* Section 2 : Quick Links */}
        <div>
          <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Quick Links</h2>
          <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
            <li>
              <a href="#about" className="hover:text-white transition-colors duration-200">about</a>
            </li>
            <li>
              <a href="#education" className="hover:text-white transition-colors duration-200">education</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
            </li>
            <li>
              <a href="#languages" className="hover:text-white transition-colors duration-200">languages</a>
            </li>
            <li>
              <a href="/Tolotra_resume.pdf" target="_blank" className="hover:text-white transition-colors duration-200">Download CV</a>
            </li>
          </ul>
        </div>

        {/* Section 3 : Contact */}
        <div>
          <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Contact</h2>
          <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
            Feel free to reach out for collaborations or just a friendly chat about communication, linguistics, or social sciences.
          </p>
          <div className="flex space-x-3 md:space-x-4">
            <a
              href="https://www.linkedin.com/in/eddie-tolotra-alitsiry-766050263/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white text-gray-400 text-lg md:text-xl transition-colors duration-200"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="mailto:contact@tolotra.site"
              aria-label="Email"
              className="hover:text-white text-gray-400 text-lg md:text-xl transition-colors duration-200"
            >
              <i className="fas fa-envelope" />
            </a>
            <a
              href="https://www.facebook.com/nirina.sarah.96"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white text-gray-400 text-lg md:text-xl transition-colors duration-200"
            >
              <i className="fab fa-facebook" />
            </a>
          </div>
          <div className="mt-3 md:mt-4 text-xs md:text-sm text-gray-400">
            <p>contact@tolotra.site</p>
            <p>+261 38 11 671 31</p>
            <p>+261 34 22 545 90</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-6 md:mt-10 pt-4 md:pt-6 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Alitsiry Eddie Tolotra. All rights reserved.</p>
        <p className="mt-1 md:mt-2">
          Made by{" "}
          <a
            className="text-white"
            href="https://portfolio-nilsen.unityfianar.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nilsen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
