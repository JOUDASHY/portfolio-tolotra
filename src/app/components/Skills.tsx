// components/Skills.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  HiChatAlt2,
  HiTranslate,
  HiVideoCamera,
  HiUsers,
  HiAcademicCap,
  HiPencilAlt,
  HiCollection,
} from 'react-icons/hi';

const skills: { name: string; Icon: React.ComponentType<any> }[] = [
  { name: 'Communication', Icon: HiChatAlt2 },
  { name: 'Interpreting', Icon: HiTranslate },
  { name: 'Video & Audio Montage', Icon: HiVideoCamera },
  { name: 'Translation', Icon: HiTranslate },
  { name: 'Team Collaboration', Icon: HiUsers },
  { name: 'Pedagogical Strategies', Icon: HiAcademicCap },
  { name: 'Editing', Icon: HiPencilAlt },
  { name: 'Project Coordination', Icon: HiCollection },
];

const Skills: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durée des animations en ms
      once: true,     // n’anime qu’une fois au scroll
    });
  }, []);

  return (
    <section className="relative py-16 bg-gradient-to-br from-indigo-100 via-white to-pink-50 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-200 rounded-full opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-aos="zoom-in"
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12"
        >
          Core Competencies
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ name, Icon }, index) => (
            <div
              key={name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative flex flex-col items-center p-8 bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 text-white text-3xl group-hover:scale-110 transition-transform duration-500">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                {name}
              </h3>
              <span className="absolute bottom-4 w-16 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animations */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Skills;
