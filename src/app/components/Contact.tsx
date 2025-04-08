"use client";

import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulaire */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full px-4 py-2 bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter a valid email address"
              className="w-full px-4 py-2 bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={4}
              className="w-full px-4 py-2 bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-500 text-white px-6 py-2 mt-4 hover:bg-pink-600 transition font-semibold"
            >
              {loading ? "Envoi en cours..." : "SOUMETTRE"}
            </button>

            <p className="text-sm text-white mt-4">
              Image de <a href="https://www.freepik.com" className="underline">Freepik</a>
            </p>
          </form>
        </div>

        {/* Infos Contact */}
        <div>
          <p className="uppercase text-sm text-gray-300 mb-2">
            Rejoignez notre newsletter
          </p>
          <h2 className="text-pink-400 text-2xl font-semibold mb-4">
            Contactez-nous
          </h2>
          <p className="mb-2">3045 10 Sunrise Avenue, 123-456-7890</p>
          <p className="mb-1">Lun – Ven : 9h00 – 20h00,</p>
          <p className="mb-4">Sam – Dim : 9h00 – 22h00</p>
          <a href="mailto:contacts@esbnyc.com" className="text-pink-400 underline">
            contacts@esbnyc.com
          </a>

          <div className="mt-8">
            <h3 className="text-pink-400 font-semibold text-xl mb-4">
              Suivez nous
            </h3>
            <div className="flex gap-4 text-white text-xl">
              <FaFacebookF className="hover:text-pink-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              <FaTwitter className="hover:text-pink-400 cursor-pointer" />
              <FaYoutube className="hover:text-pink-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        ©2021 Politique de confidentialité
      </div>
    </footer>
  );
};

export default Contact;
