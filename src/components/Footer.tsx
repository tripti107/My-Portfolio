import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-lg font-semibold">Tripti Khandelwal</span>
          </div>
          
          <div className="flex items-center text-gray-300">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 mx-2 animate-pulse" />
            <span>by Tripti Khandelwal © {currentYear}</span>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 text-sm text-gray-400">
            <span>Frontend Developer Portfolio</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>Thank you for visiting my portfolio. I'm excited to connect and explore new opportunities!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;