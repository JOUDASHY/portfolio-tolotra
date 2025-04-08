'use client';

import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Ajoute une ombre quand on scrolle un peu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Tolotra Portfolio</Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </li>
        </ul>

        {/* Burger menu (mobile - à activer si besoin) */}
        {/* <button className="md:hidden focus:outline-none">
          <i className="fas fa-bars text-xl"></i>
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
