import React from 'react';
import Image1 from '../assets/image1.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="text-white py-8 sm:py-16 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto scroll-mt-16"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Image1}
            alt="About Chirag"
            className="rounded-full w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-white/10"
          />
        </div>

        {/* Right Side - Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold border-b-4 border-blue-500 inline-block pb-2">
            About Me
          </h2>
         <p className="text-lg leading-relaxed text-gray-300">
            Hello! I'm Chirag Bhundiya, a passionate Full Stack Developer with interest in web technologies, competitive programming, and continuous learning.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          My expertise lies in building full-stack applications using modern technologies like React, Node.js, Express, and MongoDB. I'm always eager to explore new tools, frameworks, and best practices to stay up-to-date in the ever-evolving tech world.
        </p>
        </div>
      </div>
    </section>
  );
};

export default About;
