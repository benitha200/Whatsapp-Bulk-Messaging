import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

const Services = () => {
  const currentYear = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Service card data for easier maintenance
  const serviceCards = [
    {
      title: "Web Development",
      description: "Our development team creates robust, scalable websites and web applications using the latest technologies and best practices.",
      features: [
        "Custom website development",
        "E-commerce solutions",
        "Content management systems",
        "Progressive web applications",
        "API integration"
      ],
      icon: "🌐",
      color: "from-sky-600 to-indigo-600",
      linkTo: "/services/web"
    },
    {
      title: "UX/UI Design",
      description: "We create intuitive, engaging user experiences and interfaces that delight your users and achieve your business goals.",
      features: [
        "User research and testing",
        "Wireframing and prototyping",
        "Visual design",
        "Responsive design",
        "Design systems"
      ],
      icon: "🎨",
      color: "from-indigo-600 to-purple-600",
      linkTo: "/services/ui-design"
    },
    {
      title: "Digital Marketing",
      description: "Our marketing strategies help you reach your target audience, drive traffic, and increase conversions.",
      features: [
        "Search engine optimization (SEO)",
        "Pay-per-click advertising (PPC)",
        "Social media marketing",
        "Content marketing",
        "Email marketing"
      ],
      icon: "📊",
      color: "from-teal-600 to-emerald-600",
      linkTo: "/services/marketing"
    },
    {
      title: "Brand Strategy",
      description: "We help you define and communicate your brand identity to connect with your audience and stand out from the competition.",
      features: [
        "Brand identity design",
        "Brand messaging",
        "Logo design",
        "Brand guidelines",
        "Marketing collateral"
      ],
      icon: "✨",
      color: "from-amber-500 to-orange-600",
      linkTo: "/services/branding"
    },
    {
      title: "Mobile Apps",
      description: "Seamless mobile experiences for iOS and Android that keep users coming back.",
      features: [
        "Native iOS development",
        "Native Android development",
        "Cross-platform solutions",
        "App store optimization",
        "Ongoing maintenance"
      ],
      icon: "📱",
      color: "from-cyan-600 to-blue-600",
      linkTo: "/services/mobile"
    },
    {
      title: "WhatsApp Bulk Messaging",
      description: "Reach your audience instantly with personalized bulk messaging solutions.",
      features: [
        "Automated campaigns",
        "Personalized messages",
        "Analytics and reporting",
        "API integration",
        "Customer segmentation"
      ],
      icon: "💬",
      color: "from-emerald-500 to-teal-600",
      linkTo: "/services/whatsapp"
    }
  ];

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
            Our <span className="text-sky-400">Services</span>
          </h1>
          <p className="text-xl text-sky-200 mb-8 max-w-3xl mx-auto">
            We provide a comprehensive range of digital services to help your business thrive in the digital landscape.
            Our team of experts is dedicated to delivering exceptional results tailored to your specific needs.
          </p>
        </div>
      </section>
      
      {/* Service Cards Section */}
      <section className="w-full mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {serviceCards.map((service, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-sky-500/10 transition-all duration-300 border border-sky-800/30 hover:transform hover:scale-105">
              <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                <span className="text-4xl">
                  {service.icon}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">{service.title}</h3>
                <p className="text-sky-200 mb-4">{service.description}</p>
                <ul className="text-sky-200 list-disc pl-5 mb-4 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to={service.linkTo} className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center">
                  Learn more <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-sky-900/30 py-16 backdrop-blur-sm border-y border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-sky-700/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white border border-sky-400/30">1</div>
              <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
              <p className="text-sky-200">We learn about your business goals and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-700/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white border border-indigo-400/30">2</div>
              <h3 className="text-xl font-semibold text-white mb-2">Planning</h3>
              <p className="text-sky-200">We create a detailed roadmap for your project</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-700/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white border border-cyan-400/30">3</div>
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-sky-200">Our experts build your solution with quality code</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-700/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white border border-teal-400/30">4</div>
              <h3 className="text-xl font-semibold text-white mb-2">Launch</h3>
              <p className="text-sky-200">We deploy your project and provide ongoing support</p>
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

      {/* FAQ Section */}
      <section className="bg-sky-900/30 py-16 backdrop-blur-sm border-y border-sky-800/30">
        <div className="w-full mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-sky-800/30">
              <h3 className="text-xl font-semibold text-white mb-2">What industries do you specialize in?</h3>
              <p className="text-sky-200">We work with clients across various industries including e-commerce, healthcare, finance, education, and technology. Our diverse experience allows us to bring unique insights to any project.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-sky-800/30">
              <h3 className="text-xl font-semibold text-white mb-2">How do you ensure the quality of your services?</h3>
              <p className="text-sky-200">We follow industry best practices and implement rigorous quality assurance processes throughout the development lifecycle. Our team conducts thorough testing to ensure all deliverables meet the highest standards.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-sky-800/30">
              <h3 className="text-xl font-semibold text-white mb-2">Do you provide ongoing maintenance and support?</h3>
              <p className="text-sky-200">Yes, we offer various maintenance packages to keep your digital products secure, up-to-date, and performing optimally. Our support team is available to address any issues that may arise after launch.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-sky-800/30">
              <h3 className="text-xl font-semibold text-white mb-2">What is your typical project timeline?</h3>
              <p className="text-sky-200">Project timelines vary based on scope and complexity. Typically, a website takes 4-8 weeks, while mobile apps may take 8-12 weeks to develop. We'll provide a detailed timeline during our initial consultation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call-to-Action Section */}
      <section className="bg-gradient-to-b from-sky-950 to-indigo-950 py-20 border-y border-sky-800/30">
        <div className="w-full mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-sky-200 mb-8 max-w-3xl mx-auto">
            Let's work together to create something extraordinary. Our team is ready to bring your vision to life with cutting-edge technology and expert design.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-500 transition-all shadow-lg hover:shadow-sky-500/25 font-medium text-lg"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="bg-transparent text-white border-2 border-sky-400 px-8 py-4 rounded-lg hover:bg-sky-400/10 transition-all shadow-lg font-medium text-lg"
            >
              View Our Work
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

export default Services;