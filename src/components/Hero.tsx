import React from 'react';
import { ChevronDown, Download, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Tripti Khandelwal</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer passionate about creating beautiful, responsive web applications
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </button>
            
            <div className="flex space-x-4">
              <button className="p-3 bg-white hover:bg-gray-50 text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                <Github className="h-6 w-6" />
              </button>
              <button className="p-3 bg-white hover:bg-gray-50 text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                <Linkedin className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">Fresh Graduate</div>
              <div className="text-gray-600">B.Tech Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">4+</div>
              <div className="text-gray-600">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">Frontend</div>
              <div className="text-gray-600">Specialization</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 hover:text-blue-600 transition-colors duration-200"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;