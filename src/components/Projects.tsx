import React from 'react';
import { ExternalLink, Github, Play, ShoppingCart, CheckSquare, Music } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Tic Tac Toe Game',
      description: 'Interactive tic-tac-toe game with clean UI, game state management, and winner detection. Features responsive design and smooth animations.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      icon: Play,
      color: 'from-green-400 to-blue-500',
      features: ['Two-player gameplay', 'Winner detection', 'Game reset functionality', 'Responsive design']
    },
    {
      id: 2,
      title: 'Live Music Streaming App',
      description: 'Music streaming application with playlist management, audio controls, and real-time playback. Clean interface with modern design patterns.',
      technologies: ['React.js', 'CSS3', 'JavaScript'],
      icon: Music,
      color: 'from-purple-400 to-pink-500',
      features: ['Audio playback controls', 'Playlist management', 'Responsive interface', 'Modern UI design']
    },
    {
      id: 3,
      title: 'Todo Application',
      description: 'Task management app with CRUD operations, local storage, and intuitive user interface. Features task categorization and completion tracking.',
      technologies: ['React.js', 'HTML5', 'CSS3'],
      icon: CheckSquare,
      color: 'from-yellow-400 to-orange-500',
      features: ['Add/Edit/Delete tasks', 'Mark tasks complete', 'Local storage', 'Clean interface']
    },
    {
      id: 4,
      title: 'E-commerce Website',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and responsive design. Includes product filtering and modern checkout flow.',
      technologies: ['React.js', 'JavaScript', 'CSS3'],
      icon: ShoppingCart,
      color: 'from-indigo-400 to-cyan-500',
      features: ['Product catalog', 'Shopping cart', 'Product filtering', 'Responsive design']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my frontend development projects demonstrating various skills and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Project header with gradient */}
                <div className={`bg-gradient-to-r ${project.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <Icon className="w-full h-full" />
                  </div>
                  <div className="relative z-10">
                    <Icon className="h-8 w-8 mb-3" />
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </button>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in My Work?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These projects represent my journey as a frontend developer. I'm always eager to take on new challenges and contribute to exciting projects.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;