const Experience = () => {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Professional Timeline
          <span className="block w-16 h-2 bg-indigo-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="relative space-y-20 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-400 before:to-blue-300">
          
          {/* Expérience 1 - Right Side */}
          <div className="relative group pl-8 md:pl-0">
            <div className="md:flex md:justify-start items-center gap-8">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <p className="text-lg text-gray-500 mb-2">2024 - Present</p>
                <div className="hidden md:block h-0.5 bg-indigo-200 w-full"></div>
              </div>
              
              <div className="absolute -left-2 md:left-1/2 top-6 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white z-10"></div>
              
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white rounded-xl shadow-2xl p-8 space-y-4 transform transition-all duration-300 hover:translate-y-2">
                  <h3 className="text-2xl font-bold text-indigo-600">Spanish Teacher</h3>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-xl">🏫</span>
                    <p className="text-lg font-medium">Madagascar Swiss School</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                      Full-Time
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience 2 - Left Side */}
          <div className="relative group pl-8 md:pl-0">
            <div className="md:flex md:flex-row-reverse md:justify-end items-center gap-8">
              <div className="md:w-1/2 md:pl-8 md:text-left">
                <p className="text-lg text-gray-500 mb-2">Sep 2023 - Present</p>
                <div className="hidden md:block h-0.5 bg-blue-200 w-full"></div>
              </div>
              
              <div className="absolute -left-2 md:left-1/2 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white z-10"></div>
              
              <div className="md:w-1/2 md:pr-8">
                <div className="bg-white rounded-xl shadow-2xl p-8 space-y-4 transform transition-all duration-300 hover:translate-y-2">
                  <h3 className="text-2xl font-bold text-blue-600">English Teacher</h3>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-xl">📚</span>
                    <p className="text-lg font-medium">Madagascar Swiss School Amboanjobe</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      Part-Time
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience 3 - Right Side */}
          <div className="relative group pl-8 md:pl-0">
            <div className="md:flex md:justify-start items-center gap-8">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <p className="text-lg text-gray-500 mb-2">Mar 2023 - Apr 2023</p>
                <div className="hidden md:block h-0.5 bg-purple-200 w-full"></div>
              </div>
              
              <div className="absolute -left-2 md:left-1/2 top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-white z-10"></div>
              
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white rounded-xl shadow-2xl p-8 space-y-4 transform transition-all duration-300 hover:translate-y-2">
                  <h3 className="text-2xl font-bold text-purple-600">Editor Assistant</h3>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-xl">🏛️</span>
                    <p className="text-lg font-medium">Ministry of Tourism</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                      Internship
                    </span>
                    <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm">
                      Journalism
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience 4 - Left Side */}
          <div className="relative group pl-8 md:pl-0">
            <div className="md:flex md:flex-row-reverse md:justify-end items-center gap-8">
              <div className="md:w-1/2 md:pl-8 md:text-left">
                <p className="text-lg text-gray-500 mb-2">Feb 2023 - Mar 2023</p>
                <div className="hidden md:block h-0.5 bg-green-200 w-full"></div>
              </div>
              
              <div className="absolute -left-2 md:left-1/2 top-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white z-10"></div>
              
              <div className="md:w-1/2 md:pr-8">
                <div className="bg-white rounded-xl shadow-2xl p-8 space-y-4 transform transition-all duration-300 hover:translate-y-2">
                  <h3 className="text-2xl font-bold text-green-600">Journalist</h3>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-xl">📰</span>
                    <p className="text-lg font-medium">Taf'Ita (Newspaper)</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                      Internship
                    </span>
                    <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm">
                      Reporting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience 5 - Right Side */}
          <div className="relative group pl-8 md:pl-0">
            <div className="md:flex md:justify-start items-center gap-8">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                <p className="text-lg text-gray-500 mb-2">Feb 2021 - Mar 2021</p>
                <div className="hidden md:block h-0.5 bg-red-200 w-full"></div>
              </div>
              
              <div className="absolute -left-2 md:left-1/2 top-6 w-4 h-4 bg-red-500 rounded-full border-4 border-white z-10"></div>
              
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white rounded-xl shadow-2xl p-8 space-y-4 transform transition-all duration-300 hover:translate-y-2">
                  <h3 className="text-2xl font-bold text-red-600">Journalist</h3>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-xl">📺</span>
                    <p className="text-lg font-medium">ESIC-TV (Television)</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">
                      Internship
                    </span>
                    <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">
                      Video Production
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;