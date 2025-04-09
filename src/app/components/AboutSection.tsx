import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 text-center mb-8 sm:text-4xl sm:mb-12 lg:mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="space-y-8 sm:space-y-10 lg:space-y-14">
          {/* Objective */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300 sm:rounded-2xl sm:p-6 md:p-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3 sm:text-2xl sm:mb-4">
              🎯 Objective
            </h3>
            <p className="text-gray-700 text-base leading-relaxed sm:text-lg">
              I have a deep passion for improving engagement and modernizing communication strategies, especially within the educational environments of Madagascar. I believe that education is the cornerstone of progress, and I am dedicated to developing innovative approaches that make learning more interactive and impactful for students and educators alike. Leveraging my proficiency in multiple languages—namely French, English, Spanish, and Russian—I strive to bridge cultural divides and foster effective dialogue among diverse communities. By collaborating with esteemed international organizations, such as the United Nations, I aim to exchange best practices and implement global standards that support inclusive education. Ultimately, my mission is to champion global cooperation, promote cultural understanding, and empower communities through powerful, transformative communication techniques that resonate across borders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;