'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold">
          <Link href="/">Tolotra Portfolio</Link>
        </div>

        {/* Navigation Desktop */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium">
          <li>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-300 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Burger Menu (Mobile) */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1">
            <span className={`h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        {/* Menu Mobile (Liste déroulante) */}
        <div
          className={`md:hidden absolute top-full right-0 w-full bg-gray-900 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link
                href="/about"
                className="hover:text-gray-300 transition-colors py-2 block w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-gray-300 transition-colors py-2 block w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-300 transition-colors py-2 block w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;