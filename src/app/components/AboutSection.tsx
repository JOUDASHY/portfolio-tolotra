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
    <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-24" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="space-y-14">
          {/* Objective */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🎯 Objective
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
  I have a deep passion for improving engagement and modernizing communication strategies, especially within the educational environments of Madagascar. I believe that education is the cornerstone of progress, and I am dedicated to developing innovative approaches that make learning more interactive and impactful for students and educators alike. Leveraging my proficiency in multiple languages—namely French, English, Spanish, and Russian—I strive to bridge cultural divides and foster effective dialogue among diverse communities. By collaborating with esteemed international organizations, such as the United Nations, I aim to exchange best practices and implement global standards that support inclusive education. Ultimately, my mission is to champion global cooperation, promote cultural understanding, and empower communities through powerful, transformative communication techniques that resonate across borders.
</p>

          </motion.div>

   
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
