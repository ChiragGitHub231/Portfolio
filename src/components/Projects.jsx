import React, { useState, useEffect } from "react";
import ProperPulse from "../assets/projects/property-pulse.png";
import MediSync from "../assets/projects/medisync.png";
import GeminiReactApp from "../assets/projects/gemini-react-app.png";
import Portfolio from "../assets/projects/portfolio.png";
import YogaPoseDetectionSystem from "../assets/projects/yoga_pose_detection_system.png";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Property Pulse",
    description:
      "A platform which provides user to buy, sell or rent their property.",
    image: ProperPulse,
    link: "https://github.com/ChiragGitHub231/Real-Estate-System",
    category: "Web",
  },
  {
    title: "MediSync",
    description: "A health care record system which manages hospital records.",
    image: MediSync,
    link: "https://github.com/ChiragGitHub231/MediSync",
    category: "Web",
  },
  {
    title: "Gemini React App",
    description: "A simple chatbot system with Gemini API",
    image: GeminiReactApp,
    link: "https://github.com/ChiragGitHub231/gemini-react-app",
    category: "Web",
  },
  {
    title: "Portfolio",
    description: "This is personal portfolio website.",
    image: Portfolio,
    link: "https://github.com/ChiragGitHub231/portfolio-website",
    category: "Web",
  },
  {
    title: "Yoga Pose Detection System",
    description:
      "It detects yoga poses that you do and tells whether it is proper or not.",
    image: YogaPoseDetectionSystem,
    link: "https://github.com/ChiragGitHub231/Yoga_pose_detection",
    category: "AI/ML",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth <= 767 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= projects.length - itemsPerSlide + 1 ? 0 : prevIndex + 1
      );
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, [itemsPerSlide]);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  const displayedProjects = getVisibleProjects();

  return (
    <section id="projects" className="py-8 sm:py-20 bg-[#0f172a] text-white scroll-mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl h-12 font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards Container */}
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedProjects.map((project, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-[#1e293b] border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center space-x-4 mt-auto">
                    <a
                      href={project.link}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source Code"
                    >
                      <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm">Source</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: projects.length - itemsPerSlide + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Showing {currentIndex + 1}-{Math.min(currentIndex + itemsPerSlide, projects.length)} of {projects.length} projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
