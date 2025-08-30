import React from "react";

const educationData = [
  {
    title: "B. Tech in Computer Engineering",
    institute: "Dharmsinh Desai University",
    location: "Nadiad, Gujarat",
    duration: "April 2022 – May 2025",
    grade: "CPI: 8.46/10",
  },
  {
    title: "Diploma in Computer Engineering",
    institute: "Atmiya University",
    location: "Rajkot, Gujarat",
    duration: "Aug 2019 – Mar 2022",
    grade: "CGPA: 9.96/10",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institute: "Shree Vallabh Vidyalaya School",
    location: "Upleta, Gujarat",
    duration: "Mar 2017 – Mar 2019",
    grade: "Percentage: 81.67%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#0f172a] text-white py-16 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto scroll-mt-6"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Desktop Timeline */}
      <div className="relative hidden lg:block">
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>

        <div className="space-y-16">
          {educationData.map((item, index) => (
            <div key={index} className="relative flex items-center">
              {index % 2 === 0 ? (
                <>
                  {/* Left Side Card */}
                  <div className="w-1/2 pr-8">
                    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md border border-white/10 hover:border-blue-500 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ml-auto max-w-md relative">
                      <div className="absolute top-8 -right-2 w-4 h-4 bg-[#1e293b] border-r border-b border-white/10 transform rotate-45"></div>
                      <div className="text-right">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-blue-400 font-semibold text-lg">
                          {item.institute}
                        </p>
                        <p className="text-gray-400 text-sm">{item.location}</p>
                        <p className="text-gray-400 text-sm">{item.duration}</p>
                        {item.grade && (
                          <p className="text-blue-300 font-medium mt-2">
                            {item.grade}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-4 border-[#0f172a] shadow-lg relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
                    </div>
                  </div>

                  <div className="w-1/2" />
                </>
              ) : (
                <>
                  <div className="w-1/2" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-4 border-[#0f172a] shadow-lg relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
                    </div>
                  </div>

                  {/* Right Side Card */}
                  <div className="w-1/2 pl-8">
                    <div className="bg-[#1e293b] p-6 rounded-xl shadow-md border border-white/10 hover:border-blue-500 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 mr-auto max-w-md relative">
                      <div className="absolute top-8 -left-2 w-4 h-4 bg-[#1e293b] border-l border-t border-white/10 transform rotate-45"></div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-blue-400 font-semibold text-lg">
                          {item.institute}
                        </p>
                        <p className="text-gray-400 text-sm">{item.location}</p>
                        <p className="text-gray-400 text-sm">{item.duration}</p>
                        {item.grade && (
                          <p className="text-blue-300 font-medium mt-2">
                            {item.grade}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative pl-8">
        {/* Continuous vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>

        <div className="space-y-10">
          {educationData.map((item, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <div className="absolute left-0 top-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-4 border-[#0f172a]"></div>

              {/* Card */}
              <div className="bg-[#1e293b] p-5 rounded-lg shadow-md border border-white/10 ml-10">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-blue-400 font-semibold mb-1">
                  {item.institute}
                </p>
                <p className="text-gray-400 text-sm mb-1">{item.location}</p>
                <p className="text-gray-400 text-sm mb-1">{item.duration}</p>
                {item.grade && (
                  <p className="text-blue-300 font-medium">{item.grade}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
