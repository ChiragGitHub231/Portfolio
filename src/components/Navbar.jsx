import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const navItems = ['About', 'Education', 'Experience', 'Technology', 'Projects', 'Contact'];
  const navRefs = useRef([]);

  // On hover, update the highlight position and size based on hovered nav item element
  const handleMouseEnter = (index) => {
    const navItem = navRefs.current[index];
    if (navItem) {
      const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = navItem;
      setHighlightStyle({
        left: offsetLeft,
        width: offsetWidth,
        top: offsetTop,
        height: offsetHeight,
        opacity: 1,
      });
    }
  };

  // On mouse leave, hide highlight
  const handleMouseLeave = () => {
    setHighlightStyle((prev) => prev && { ...prev, opacity: 0 });
  };

  // Observe which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  if (isSidebarOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [isSidebarOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0f172a] text-white shadow-md">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto relative">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold">
            Chirag Bhundiya
          </a>

          {/* Desktop Nav */}
          <ul
            className="hidden lg:flex space-x-6 font-medium relative"
            onMouseLeave={handleMouseLeave}
          >
            {/* Highlight background pill */}
            {highlightStyle && (
              <span
                className="absolute"
                style={{
                  left: highlightStyle.left,
                  width: highlightStyle.width,
                  top: highlightStyle.top,
                  height: highlightStyle.height,
                  opacity: highlightStyle.opacity,
                }}
              />
            )}

            {navItems.map((item, index) => (
              <li
                key={item}
                ref={(el) => (navRefs.current[index] = el)}
                className="relative z-10 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block px-3 py-1 transition-all duration-300 border-b-2 
                    ${
                    activeSection === item.toLowerCase()
                      ? 'border-white'
                      : 'border-transparent hover:border-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div
            className="lg:hidden text-3xl cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          >
            &#9776;
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 sm:w-1/3 bg-[#070e1d] text-white transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-3xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col items-center mt-10 space-y-6 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsSidebarOpen(false)}
                className={`block px-3 py-1 rounded-full transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? 'underline underline-offset-4'
                    : 'hover:underline underline-offset-4'
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
