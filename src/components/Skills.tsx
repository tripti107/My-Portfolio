import React from 'react';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'HTML5',
      level: 90,
      color: 'bg-orange-500',
      icon: Code,
      description: 'Semantic markup and modern HTML5 features'
    },
    {
      name: 'CSS3',
      level: 85,
      color: 'bg-blue-500',
      icon: Palette,
      description: 'Advanced styling, animations, and responsive design'
    },
    {
      name: 'JavaScript',
      level: 80,
      color: 'bg-yellow-500',
      icon: Code,
      description: 'ES6+, DOM manipulation, and modern JavaScript'
    },
    {
      name: 'React.js',
      level: 85,
      color: 'bg-cyan-500',
      icon: Globe,
      description: 'Component-based architecture and hooks'
    }
  ];

  const additionalSkills = [
    'Responsive Web Design',
    'Cross-browser Compatibility',
    'Git Version Control',
    'Performance Optimization',
    'UI/UX Principles',
    'Tailwind CSS'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strong foundation in frontend technologies with hands-on experience in building modern web applications
          </p>
        </div>

        {/* Core Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg ${skill.color} bg-opacity-10 mr-4`}>
                        <Icon className={`h-6 w-6 text-gray-700`} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{skill.name}</h4>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-gray-700">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <div
                key={skill}
                className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 cursor-default"
              >
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <Smartphone className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              As a fresh graduate, I'm committed to continuous learning and staying updated with 
              the latest frontend technologies and industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;