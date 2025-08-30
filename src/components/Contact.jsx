import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-8 sm:py-20 text-white scroll-mt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Phone Card */}
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-blue-500/30 border border-white/10 transition duration-300 text-center">
            <div className="flex justify-center text-blue-400 text-3xl mb-4">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">+91 88491 30900</p>
          </div>

          {/* Email Card */}
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-blue-500/30 border border-white/10 transition duration-300 text-center">
            <div className="flex justify-center text-blue-400 text-3xl mb-4">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">chiragbhundiya433@gmail.com</p>
          </div>

          {/* Address Card */}
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-blue-500/30 border border-white/10 transition duration-300 text-center">
            <div className="flex justify-center text-blue-400 text-3xl mb-4">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-300">Vadodara, Gujarat, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
