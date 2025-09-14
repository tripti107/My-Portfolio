import React from 'react';
import { GraduationCap, Code2, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate frontend developer with a fresh perspective and strong foundation in modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Recently completed my B.Tech degree with a strong focus on computer science fundamentals 
                and software development principles. Throughout my academic journey, I developed a passion 
                for frontend technologies and user experience design.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <Code2 className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Technical Foundation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Built a solid foundation in frontend development with hands-on experience in HTML, CSS, 
                JavaScript, and React.js. I enjoy creating responsive, user-friendly interfaces and 
                staying updated with the latest web development trends and best practices.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Passion & Goals</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I'm passionate about turning creative ideas into functional, beautiful web applications. 
                My goal is to contribute to innovative projects while continuously learning and growing 
                as a developer in a collaborative team environment.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Quick Facts</h3>
                  <div className="w-12 h-1 bg-white/30 rounded"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Name:</span>
                    <span className="font-medium">Tripti Khandelwal</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Degree:</span>
                    <span className="font-medium">B.Tech (Computer Science)</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Status:</span>
                    <span className="font-medium">Fresh Graduate</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Focus:</span>
                    <span className="font-medium">Frontend Development</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Location:</span>
                    <span className="font-medium">India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;