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
        alert("Send failed: " + result.message);
      }
    } catch (error) {
      alert("An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white text-gray-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-transparent border-b border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full px-4 py-3 bg-transparent border-b border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 bg-transparent border-b border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-500 text-white px-8 py-3 hover:bg-pink-600 transition font-semibold text-base sm:text-lg"
            >
              {loading ? "Sending..." : "SEND"}
            </button>

            {submitted && (
              <p className="text-green-600 mt-3 text-base sm:text-lg">
                Thank you! Your message has been sent.
              </p>
            )}

            <p className="text-sm sm:text-base text-gray-500 mt-6">
              Image by <a href="https://www.freepik.com" className="underline">Freepik</a>
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 mt-8 md:mt-0">
          <p className="uppercase text-sm sm:text-base text-gray-600">
            Join our newsletter
          </p>
          <h2 className="text-pink-500 text-2xl sm:text-3xl font-semibold">
            Contact Us
          </h2>
          <div className="space-y-2 text-base sm:text-lg text-gray-800">
            <p>3045 10 Sunrise Avenue, 123-456-7890</p>
            <p>Mon–Fri: 9am–8pm</p>
            <p>Sat–Sun: 9am–10pm</p>
            <a
              href="mailto:alitsiryeddietolotra@gmail.com"
              className="text-pink-500 underline"
            >
              alitsiryeddietolotra@gmail.com
            </a>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-pink-500 font-semibold text-xl sm:text-2xl mb-4">
              Follow Us
            </h3>
            <div className="flex gap-8 text-black text-3xl sm:text-4xl">
              <FaFacebookF className="hover:text-pink-500 cursor-pointer transition-colors" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors" />
              <FaTwitter className="hover:text-pink-500 cursor-pointer transition-colors" />
              <FaYoutube className="hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
