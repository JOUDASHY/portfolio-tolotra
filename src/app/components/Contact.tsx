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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "30e0198b-9fe5-4e87-97a5-97dc8ac90f58");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Échec de l'envoi : " + result.message);
      }
    } catch (error) {
      alert("Une erreur est survenue lors de l'envoi du message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulaire */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full px-4 py-2 bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre adresse email"
              className="w-full px-4 py-2 bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message"
              rows={4}
              className="w-full px-4 py-2 bg-transparent border-b border-white text-white placeholder-gray-300 focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-500 text-white px-6 py-2 mt-2 hover:bg-pink-600 transition font-semibold text-sm sm:text-base"
            >
              {loading ? "Envoi en cours..." : "ENVOYER"}
            </button>

            {submitted && (
              <p className="text-green-400 mt-2 text-sm sm:text-base">
                Merci ! Votre message a bien été envoyé.
              </p>
            )}

            <p className="text-xs sm:text-sm text-gray-400 mt-4">
              Image de <a href="https://www.freepik.com" className="underline">Freepik</a>
            </p>
          </form>
        </div>

        {/* Infos Contact */}
        <div className="mt-6 md:mt-0">
          <p className="uppercase text-xs sm:text-sm text-gray-300 mb-2">
            Rejoignez notre newsletter
          </p>
          <h2 className="text-pink-400 text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Contactez-nous
          </h2>
          <p className="mb-2 text-sm sm:text-base">3045 10 Sunrise Avenue, 123-456-7890</p>
          <p className="mb-1 text-sm sm:text-base">Lun-Ven : 9h-20h</p>
          <p className="mb-4 text-sm sm:text-base">Sam-Dim : 9h-22h</p>
          <a href="mailto:contacts@esbnyc.com" className="text-pink-400 underline text-sm sm:text-base">
            contacts@esbnyc.com
          </a>

          <div className="mt-6 sm:mt-8">
            <h3 className="text-pink-400 font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
              Suivez-nous
            </h3>
            <div className="flex gap-4 text-white text-lg sm:text-xl">
              <FaFacebookF className="hover:text-pink-400 cursor-pointer transition-colors" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer transition-colors" />
              <FaTwitter className="hover:text-pink-400 cursor-pointer transition-colors" />
              <FaYoutube className="hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 text-center text-gray-400 text-xs sm:text-sm">
        ©2021 Politique de confidentialité
      </div>
    </footer>
  );
};

export default Contact;