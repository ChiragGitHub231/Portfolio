import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Technology from './components/Technology'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ArrowUp } from 'lucide-react'

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Technology />
      <Projects />
      <Contact />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition duration-300 z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className='size-5' />
        </button>
      )}
    </>
  )
}

export default App;
