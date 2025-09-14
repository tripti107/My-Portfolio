import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'triptikhandelwal4321@gmail.com',
      href: 'mailto:triptikhandelwal4321@gmail.com',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8881073146',
      href: 'tel:+918881073146',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Github, href: '#', color: 'hover:text-gray-700' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                As a fresh B.Tech graduate with a passion for frontend development, I'm excited to 
                contribute to innovative projects and grow with a dynamic team. Feel free to reach 
                out for collaboration opportunities or just to say hello!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} mr-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">{item.label}</div>
                      <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 text-gray-600 ${social.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Additional Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm available for frontend development opportunities and excited to contribute to your next project. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:triptikhandelwal4321@gmail.com"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Email Me Directly
              </a>
              <a
                href="tel:+918881073146"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;