import React, { useEffect, useState } from "react";
import Image2 from "../assets/image2.jpg";

const Home = () => {
  const lines = [
    "Passionate Software Engineer",
    "Full Stack Developer",
    "Quick Learner",
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleIndex((prev) => (prev + 1) % lines.length);
    }, 2500); // change every 2.5 seconds
    return () => clearTimeout(timer);
  }, [visibleIndex, lines.length]);

  return (
    <section
      id="home"
      className="max-w-7xl h-[60vh] sm:h-[80vh] scroll-mt-24 flex items-center justify-center px-4 sm:px-6 lg:px-30"
    >
      <div className="mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 w-full lg:w-1/2 text-center lg:text-left">
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                Hi, I am
              </h1>
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                Chirag Bhundiya
              </h1>
            </div>

            {/* Container for cycling text */}
            <div className="relative h-8 sm:h-10 md:h-12 lg:h-16 overflow-hidden w-full">
              {lines.map((line, idx) => {
                const prevIndex =
                  visibleIndex === 0 ? lines.length - 1 : visibleIndex - 1;

                let translateY = 20;
                let opacity = 0;

                if (idx === visibleIndex) {
                  translateY = 0;
                  opacity = 1;
                } else if (idx === prevIndex) {
                  translateY = -20;
                  opacity = 0;
                }

                return (
                  <span
                    key={idx}
                    className="absolute text-nowrap left-0 w-full text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold transition-all duration-700 ease-in-out"
                    style={{
                      transform: `translateY(${translateY}px)`,
                      opacity,
                      top: 0,
                    }}
                  >
                    {line}
                  </span>
                );
              })}
            </div>

            {/* Download CV Button */}
            <div>
              <a
                href="./Chirag_Bhundiya.pdf"
                download
                className="inline-block px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:scale-105 hover:shadow-lg transition-transform duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right side - Avatar */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src={Image2}
                alt="Chirag Bhundiya"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full object-cover shadow-2xl opacity-0 animate-fadeIn border-4 border-white/10"
                style={{
                  animationFillMode: "forwards",
                  animationDuration: "1s",
                  animationTimingFunction: "ease-in-out",
                  animationDelay: "1.2s",
                }}
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-70 animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full opacity-50 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind keyframes for fadeIn */}
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
        }
      `}</style>
    </section>
  );
};

export default Home;
