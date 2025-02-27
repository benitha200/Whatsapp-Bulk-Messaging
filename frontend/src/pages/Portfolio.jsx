import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

const Portfolio = () => {
  const currentYear = new Date().getFullYear();
  const [filter, setFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation links for easier updates
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'gray',
      description: 'A full-featured online store with custom payment integration.'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'gray',
      description: 'A secure and user-friendly banking application for iOS and Android.'
    },
    {
      id: 3,
      title: 'Corporate Rebrand',
      category: 'branding',
      image: 'gray',
      description: 'Complete brand refresh for a tech startup including logo and identity.'
    },
    {
      id: 4,
      title: 'Healthcare App',
      category: 'mobile',
      image: 'gray',
      description: 'Mobile application for patient management and telemedicine.'
    },
    {
      id: 5,
      title: 'WhatsApp Campaign',
      category: 'marketing',
      image: 'gray',
      description: 'Multi-platform messaging campaign that increased engagement by 65%.'
    },
    {
      id: 6,
      title: 'Restaurant Website',
      category: 'web',
      image: 'gray',
      description: 'Responsive website with online ordering system and reservation management.'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b w-full from-sky-950 to-indigo-950">
      {/* Header - Fixed for better navigation */}
      <NavBar/>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="w-full mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-sky-400">Portfolio</span>
          </h1>
          <p className="text-xl text-sky-200 mb-8 max-w-3xl mx-auto">
            Browse our collection of successful projects that showcase our expertise and creativity.
            Each project represents our commitment to excellence and client satisfaction.
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="w-full mx-auto px-4 py-6">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-12 max-w-4xl mx-auto overflow-x-auto border border-sky-800/30">
          <div className="flex flex-wrap justify-center gap-4">
            {/* <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg transition-colors ${filter === 'all'
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                  : 'bg-white/5 text-sky-200 hover:bg-sky-500 hover:text-sky-200 border border-sky-700/30'
                }`}
            > */}
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg transition-colors ${filter === 'all'
                  ? 'bg-teal-600 text-teal-500 shadow-lg shadow-teal-600/30'
                  : 'bg-white/5 text-sky-500 hover:bg-sky-500 hover:text-sky-300 border border-sky-700/30'
                }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-6 py-3 rounded-lg transition-colors ${filter === 'web'
                  ? 'bg-sky-600 text-sky-500 shadow-lg shadow-sky-600/30'
                  : 'bg-white/5 text-sky-500 hover:bg-sky-500 hover:text-sky-300 border border-sky-700/30'
                }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-6 py-3 rounded-lg transition-colors ${filter === 'mobile'
                  ? 'bg-indigo-600 text-indigo-500 shadow-lg shadow-indigo-600/30'
                  : 'bg-white/5 text-sky-500 hover:bg-sky-500 hover:text-sky-300 border border-sky-700/30'
                }`}
            >
              Mobile Apps
            </button>
            <button
              onClick={() => setFilter('branding')}
              className={`px-6 py-3 rounded-lg transition-colors ${filter === 'branding'
                  ? 'bg-cyan-600 text-cyan-500 shadow-lg shadow-cyan-600/30'
                  : 'bg-white/5 text-sky-500 hover:bg-sky-500 hover:text-sky-300 border border-sky-700/30'
                }`}
            >
              Branding
            </button>
            <button
              onClick={() => setFilter('marketing')}
              className={`px-6 py-3 rounded-lg transition-colors ${filter === 'marketing'
                  ? 'bg-teal-600 text-teal-500 shadow-lg shadow-teal-600/30'
                  : 'bg-white/5 text-sky-500 hover:bg-sky-500 hover:text-sky-300 border border-sky-700/30'
                }`}
            >
              Marketing
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map(project => (
            <div key={project.id} className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-sky-500/10 transition-all duration-300 border border-sky-800/30 hover:transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-sky-600 to-indigo-600 flex items-center justify-center">
                <span className="text-4xl">
                  {project.category === 'web' && '🌐'}
                  {project.category === 'mobile' && '📱'}
                  {project.category === 'branding' && '🎨'}
                  {project.category === 'marketing' && '📊'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-sky-200 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-white/10 text-sky-300 rounded-full px-3 py-1 text-sm font-semibold border border-sky-700/30">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <Link to={`/portfolio/${project.id}`} className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center">
                    View Case Study <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="bg-sky-900/30 py-16 backdrop-blur-sm border-y border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Project Highlights</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-sky-800/20 p-6 rounded-xl shadow-sm border border-sky-700/30">
              <div className="text-4xl font-bold text-sky-400 mb-2">35+</div>
              <p className="text-sky-100 font-medium">Web Projects</p>
            </div>
            <div className="bg-sky-800/20 p-6 rounded-xl shadow-sm border border-sky-700/30">
              <div className="text-4xl font-bold text-sky-400 mb-2">24</div>
              <p className="text-sky-100 font-medium">Mobile Apps</p>
            </div>
            <div className="bg-sky-800/20 p-6 rounded-xl shadow-sm border border-sky-700/30">
              <div className="text-4xl font-bold text-sky-400 mb-2">18</div>
              <p className="text-sky-100 font-medium">Brand Identities</p>
            </div>
            <div className="bg-sky-800/20 p-6 rounded-xl shadow-sm border border-sky-700/30">
              <div className="text-4xl font-bold text-sky-400 mb-2">40+</div>
              <p className="text-sky-100 font-medium">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-sky-800/30">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-600 to-indigo-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">JS</div>
              <div>
                <h4 className="font-semibold text-white text-lg">John Smith</h4>
                <p className="text-sky-300 text-sm">CEO, Tech Solutions</p>
              </div>
            </div>
            <div className="text-3xl text-sky-400 mb-4">"</div>
            <p className="text-sky-200 italic mb-4">SwiftTech transformed our online presence. The new website has increased our leads by 45% in just three months!</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-sky-800/30">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">SJ</div>
              <div>
                <h4 className="font-semibold text-white text-lg">Sarah Johnson</h4>
                <p className="text-sky-300 text-sm">Marketing Director, Retail Brand</p>
              </div>
            </div>
            <div className="text-3xl text-indigo-400 mb-4">"</div>
            <p className="text-sky-200 italic mb-4">The WhatsApp messaging solution has revolutionized how we communicate with customers. Response rates are up by 80%.</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-sky-800/30">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">MC</div>
              <div>
                <h4 className="font-semibold text-white text-lg">Michael Chen</h4>
                <p className="text-sky-300 text-sm">Founder, Startup Inc.</p>
              </div>
            </div>
            <div className="text-3xl text-cyan-400 mb-4">"</div>
            <p className="text-sky-200 italic mb-4">From concept to launch, the mobile app development process was smooth and professional. Highly recommended!</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call-to-Action Section */}
      <section className="bg-gradient-to-b from-sky-950 to-indigo-950 py-20 border-y border-sky-800/30">
        <div className="w-full mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-sky-200 mb-8 max-w-3xl mx-auto">
            Let's work together to create something extraordinary. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-500 transition-all shadow-lg hover:shadow-sky-500/25 font-medium text-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="bg-transparent text-white border-2 border-sky-400 px-8 py-4 rounded-lg hover:bg-sky-400/10 transition-all shadow-lg font-medium text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-sky-900/30 py-16 backdrop-blur-sm border-y border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-sky-700/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-sky-400/30">
                <span className="text-2xl text-white">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
              <p className="text-sky-200">Kigali, Rwanda<br />Kicukiro, Gikondo KST 344 St</p>
            </div>
            <div>
              <div className="bg-indigo-700/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-400/30">
                <span className="text-2xl text-white">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-sky-200">+250 78528 3918</p>
            </div>
            <div>
              <div className="bg-cyan-700/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                <span className="text-2xl text-white">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-sky-200">info@swifttech.co.rw</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-sky-950 text-white py-12 border-t border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">SwiftTech</h3>
              <p className="text-sky-300 mb-4">Transforming ideas into digital reality since 2018.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-sky-400 hover:text-white transition-colors">FB</a>
                <a href="#" className="text-sky-400 hover:text-white transition-colors">TW</a>
                <a href="#" className="text-sky-400 hover:text-white transition-colors">IG</a>
                <a href="#" className="text-sky-400 hover:text-white transition-colors">LI</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services/web" className="text-sky-300 hover:text-white transition-colors">Web Development</Link></li>
                <li><Link to="/services/mobile" className="text-sky-300 hover:text-white transition-colors">Mobile Apps</Link></li>
                <li><Link to="/services/whatsapp" className="text-sky-300 hover:text-white transition-colors">WhatsApp Messaging</Link></li>
                <li><Link to="/services/ui-design" className="text-sky-300 hover:text-white transition-colors">UI/UX Design</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sky-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/team" className="text-sky-300 hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/careers" className="text-sky-300 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="text-sky-300 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-sky-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sky-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-sky-300 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sky-800/30 pt-8 text-center">
            <p className="text-sky-300">
              &copy; {currentYear} SwiftTech Company Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;