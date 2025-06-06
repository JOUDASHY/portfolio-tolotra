"use client";

import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
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
      formData.append("access_key", "787ea491-c99b-45f9-8b15-7375e439fe7e");
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
        alert("Send failed: " + result.message);
      }
    } catch (error) {
      alert("An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white text-gray-900 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
        {/* Form */}
        <div className="space-y-4 sm:space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="
                w-full 
                px-3 py-2            /* mobile */
                sm:px-4 sm:py-3      /* ≥640px */
                md:px-5 md:py-4      /* ≥768px */
                bg-transparent border-b border-gray-400 
                text-sm sm:text-base md:text-lg 
                text-gray-900 placeholder-gray-500 focus:outline-none
              "
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="
                w-full 
                px-3 py-2 
                sm:px-4 sm:py-3 
                md:px-5 md:py-4 
                bg-transparent border-b border-gray-400 
                text-sm sm:text-base md:text-lg 
                text-gray-900 placeholder-gray-500 focus:outline-none
              "
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="
                w-full 
                px-3 py-2 
                sm:px-4 sm:py-3 
                md:px-5 md:py-4 
                bg-transparent border-b border-gray-400 
                text-sm sm:text-base md:text-lg 
                text-gray-900 placeholder-gray-500 focus:outline-none
              "
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="
                bg-pink-500 text-white 
                px-5 py-2 text-sm           /* mobile */
                sm:px-6 sm:py-3 sm:text-base/* ≥640px */
                md:px-8 md:py-4 md:text-lg  /* ≥768px */
                hover:bg-pink-600 
                transition font-semibold rounded
              "
            >
              {loading ? "Sending..." : "SEND"}
            </button>

            {submitted && (
              <p className="text-green-600 mt-2 text-sm sm:text-base md:text-lg">
                Thank you! Your message has been sent.
              </p>
            )}

            {/* <p className="text-xs sm:text-sm text-gray-500 mt-4">
              Image by <a href="https://www.freepik.com" className="underline">Freepik</a>
            </p> */}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 mt-6 md:mt-0">
          <p className="uppercase text-xs sm:text-sm md:text-base text-gray-600">
            Join our newsletter
          </p>
          <h2 className="text-pink-500 text-xl sm:text-2xl md:text-3xl font-semibold">
            Contact Me
          </h2>
          <div className="space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg text-gray-800">
            <p>Andrefan'Ambohijanahary, Antananarivo Madagascar</p>
            <a
              href="mailto:contact@tolotra.site"
              className="text-pink-500 underline"
            >
              contact@tolotra.site
            </a>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <h3 className="text-pink-500 font-semibold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4 sm:gap-6 md:gap-8 text-gray-900 text-2xl sm:text-3xl md:text-4xl">
              <a
                href="https://www.facebook.com/nirina.sarah.96"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/al.eddie03/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/eddie-tolotra-alitsiry-766050263/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
