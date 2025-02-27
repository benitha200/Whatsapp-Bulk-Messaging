import React from 'react';
import { Link } from 'react-router-dom';
import image from './../assets/1.jpg'
import NavBar from '../components/Navbar';

const About = () => {
  const currentYear = new Date().getFullYear();
  
  // Navigation links for easier updates
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b w-full from-sky-950 to-indigo-950">
      {/* Header - Fixed for better navigation */}
      <NavBar/>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="w-full mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-sky-400">Us</span>
          </h1>
          <p className="text-xl text-sky-200 mb-8 max-w-3xl mx-auto">
            Get to know our company, our mission, and the passionate team behind our innovative digital solutions.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="w-full mx-auto px-4 py-12">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg mb-12 max-w-4xl mx-auto border border-sky-800/30">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <div className="bg-sky-700/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-sky-400/30">
                <span className="text-2xl text-sky-400">📖</span>
              </div>
              <h2 className="text-3xl font-semibold text-white mb-4">Our Story</h2>
              <p className="text-sky-200 mb-4">
                Founded in 2020, our company has grown from a small team of passionate designers and developers
                into a full-service digital agency. We believe in creating meaningful digital experiences
                that connect brands with their audiences.
              </p>
              <p className="text-sky-200">
                Our approach combines creative thinking with technical expertise to deliver solutions
                that not only look beautiful but also perform exceptionally well.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={image} className="bg-sky-900/30 h-64 rounded-lg border border-sky-800/30"/>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="bg-sky-900/30 py-16 backdrop-blur-sm border-y border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-sky-700/30 w-32 h-32 rounded-full mx-auto mb-4 border border-sky-400/30"></div>
              <h3 className="text-xl font-semibold text-white mb-1">Benitha louange Iyuyisenga</h3>
              <p className="text-sky-300 mb-3">Founder & CEO</p>
              <p className="text-sky-200 text-sm">With over 5 years of industry experience, Benitha leads our company with vision and expertise.</p>
            </div>
            <div className="text-center">
              <div className="bg-sky-700/30 w-32 h-32 rounded-full mx-auto mb-4 border border-sky-400/30"></div>
              <h3 className="text-xl font-semibold text-white mb-1">Sam Ngoga</h3>
              <p className="text-sky-300 mb-3">Marketing Manager</p>
              <p className="text-sky-200 text-sm">John brings creativity and innovation to every project, ensuring visual excellence.</p>
            </div>
            <div className="text-center">
              <div className="bg-sky-700/30 w-32 h-32 rounded-full mx-auto mb-4 border border-sky-400/30"></div>
              <h3 className="text-xl font-semibold text-white mb-1">Byamungu Lewis</h3>
              <p className="text-sky-300 mb-3">Lead Developer</p>
              <p className="text-sky-200 text-sm">Lewis's technical expertise drives our development process with efficiency and precision.</p>
            </div>
            <div className="text-center">
              <div className="bg-sky-700/30 w-32 h-32 rounded-full mx-auto mb-4 border border-sky-400/30"></div>
              <h3 className="text-xl font-semibold text-white mb-1">Michael Brown</h3>
              <p className="text-sky-300 mb-3">UX Designer</p>
              <p className="text-sky-200 text-sm">Michael focuses on creating intuitive and engaging user experiences for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-sky-800/30">
            <div className="bg-sky-700/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-sky-400/30">
              <span className="text-2xl text-sky-400">💡</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
            <p className="text-sky-200">We're always exploring new technologies and approaches to stay ahead of the curve. Our team constantly researches emerging trends to bring cutting-edge solutions to our clients.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-sky-800/30">
            <div className="bg-indigo-700/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-indigo-400/30">
              <span className="text-2xl text-indigo-400">⭐</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Quality</h3>
            <p className="text-sky-200">We're committed to excellence in everything we do, from design to development. Quality isn't just a goal but a fundamental part of our work process and company culture.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-sky-800/30">
            <div className="bg-cyan-700/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-cyan-400/30">
              <span className="text-2xl text-cyan-400">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
            <p className="text-sky-200">We work closely with our clients to ensure their vision is realized. Our collaborative approach ensures that projects align perfectly with business goals and exceed expectations.</p>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="bg-sky-900/30 py-16 backdrop-blur-sm border-y border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <p className="text-sky-300">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <p className="text-sky-300">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-sky-300">Industry Awards</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <p className="text-sky-300">Team Members</p>
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
              <div className="w-14 h-14 bg-gradient-to-br from-sky-600 to-indigo-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">RW</div>
              <div>
                <h4 className="font-semibold text-white text-lg">Robert Williams</h4>
                <p className="text-sky-300 text-sm">CEO, Innovation Labs</p>
              </div>
            </div>
            <div className="text-3xl text-sky-400 mb-4">"</div>
            <p className="text-sky-200 italic mb-4">Working with SwiftTech has been a game-changer for our business. Their attention to detail and commitment to excellence is unmatched.</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-sky-800/30">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">LT</div>
              <div>
                <h4 className="font-semibold text-white text-lg">Lisa Thompson</h4>
                <p className="text-sky-300 text-sm">Marketing Director, Global Retail</p>
              </div>
            </div>
            <div className="text-3xl text-indigo-400 mb-4">"</div>
            <p className="text-sky-200 italic mb-4">The team at SwiftTech truly understood our vision and translated it into a stunning website that exceeded our expectations.</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-sky-800/30">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">DC</div>
              <div>
                <h4 className="font-semibold text-white text-lg">David Chen</h4>
                <p className="text-sky-300 text-sm">Founder, Tech Startup</p>
              </div>
            </div>
            <div className="text-3xl text-cyan-400 mb-4">"</div>
            <p className="text-sky-200 italic mb-4">From concept to execution, SwiftTech delivered a seamless experience. Their expertise and professionalism made all the difference.</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call-to-Action Section */}
      <section className="bg-gradient-to-b from-sky-950 to-indigo-950 py-20 border-y border-sky-800/30">
        <div className="w-full mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-sky-200 mb-8 max-w-3xl mx-auto">
            Let's collaborate to bring your ideas to life. Our team is dedicated to creating solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-500 transition-all shadow-lg hover:shadow-sky-500/25 font-medium text-lg"
            >
              Get in Touch
            </Link>
            <Link
              to="/portfolio"
              className="bg-transparent text-white border-2 border-sky-400 px-8 py-4 rounded-lg hover:bg-sky-400/10 transition-all shadow-lg font-medium text-lg"
            >
              See Our Projects
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

export default About;