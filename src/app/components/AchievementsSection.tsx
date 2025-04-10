import { motion } from 'framer-motion';

const AchievementsSection = () => {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 md:gap-12"
        >
          {/* Achievements Column */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-[2.5rem] bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Achievements & Awards
            </h2>
            
            <ul className="space-y-4 md:space-y-5">
              <motion.li 
                whileHover={{ scale: 1.02 }}
                className="pl-4 border-l-4 border-indigo-500"
              >
                <p className="text-base text-gray-600 md:text-lg">
                  Best Educational Initiative Award - Madagascar National Education Forum
                </p>
              </motion.li>

              <motion.li 
                whileHover={{ scale: 1.02 }}
                className="pl-4 border-l-4 border-blue-500"
              >
                <p className="text-base text-gray-600 md:text-lg">
                  UNESCO Recognition for Multilingual Education Projects
                </p>
              </motion.li>
            </ul>
          </div>

          {/* Training Column */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Professional Formation
            </h3>
            
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50"
              >
                <h4 className="text-lg font-medium text-indigo-700 md:text-xl">
                  Advanced Certification in
                </h4>
                <ul className="mt-2 list-disc list-inside space-y-2">
                  <li className="text-base text-gray-700 md:text-lg">
                    Scoping & Project Design
                  </li>
                  <li className="text-base text-gray-700 md:text-lg">
                    Public Relations Strategy
                  </li>
                  <li className="text-base text-gray-700 md:text-lg">
                    Press Relation Management
                  </li>
                </ul>
                <p className="mt-3 text-sm font-medium text-blue-600">
                  Book News Madagascar • 2022
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;