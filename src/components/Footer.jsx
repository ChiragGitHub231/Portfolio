import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white py-6 mt-6 sm:mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Chirag Bhundiya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
