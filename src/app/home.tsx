'use client';

import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Banner from "./components/Banner";

import Banner2 from "./components/Banner2";  // ← Enlevez .tsx
import Banner1 from "./components/Banner1";  // ← Enlevez .tsx

export default function Home() {
  return (
<>
      <HeroSection />
      <AboutSection />
      <Banner />
      <Experience />
      <Banner2 />
      <Skills />
      <Banner1 />
      <Languages />
    </>
  );
}
