import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Contact = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });
  

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    // This is just a simulation
    if (formData.name && formData.email && formData.message) {
      setFormStatus({
        submitted: true,
        error: false
      });
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setFormStatus({
        submitted: false,
        error: true
      });
    }
  };
  
  return (
    <Layout>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 w-full">
        <div className="w-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="text-xl text-emerald-200 mb-8 max-w-3xl mx-auto">
            We'd love to hear from you! Let us know how we can help bring your ideas to life.
            Our team is ready to answer any questions you might have about our services.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="w-full px-4 py-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-emerald-800/30">
              <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
              
              {formStatus.submitted && (
                <div className="bg-emerald-700/30 border border-emerald-400/30 text-emerald-200 px-4 py-3 rounded mb-4">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              
              {formStatus.error && (
                <div className="bg-red-700/30 border border-red-400/30 text-red-200 px-4 py-3 rounded mb-4">
                  Please fill out all required fields.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-emerald-200 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-emerald-900/30 border border-emerald-800/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-emerald-200"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-emerald-200 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-emerald-900/30 border border-emerald-800/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-emerald-200"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-emerald-200 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-emerald-900/30 border border-emerald-800/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-emerald-200"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-emerald-200 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 bg-emerald-900/30 border border-emerald-800/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-emerald-200"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-500 transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-emerald-800/30">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-700/30 w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-emerald-400/30">
                    <span className="text-xl text-emerald-400">📍</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Address</h4>
                    <p className="text-emerald-200">Kigali, Rwanda<br />Kicukiro, Gikondo KST 344 St</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-700/30 w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-emerald-400/30">
                    <span className="text-xl text-emerald-400">📞</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Phone</h4>
                    <p className="text-emerald-200">+250 78528 3918</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-700/30 w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-emerald-400/30">
                    <span className="text-xl text-emerald-400">✉️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Email</h4>
                    <p className="text-emerald-200">info@swifttech.co.rw</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-700/30 w-12 h-12 rounded-full flex items-center justify-center mr-4 border border-emerald-400/30">
                    <span className="text-xl text-emerald-400">🕒</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Business Hours</h4>
                    <p className="text-emerald-200">Monday - Friday: 9am - 5pm<br />Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-emerald-800/30">
                <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-emerald-700/30 text-emerald-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-600/30 transition-colors border border-emerald-400/30">
                    FB
                  </a>
                  <a href="#" className="bg-emerald-700/30 text-emerald-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-600/30 transition-colors border border-emerald-400/30">
                    TW
                  </a>
                  <a href="#" className="bg-emerald-700/30 text-emerald-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-600/30 transition-colors border border-emerald-400/30">
                    LI
                  </a>
                  <a href="#" className="bg-emerald-700/30 text-emerald-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-600/30 transition-colors border border-emerald-400/30">
                    IG
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="w-full px-4 py-16 bg-emerald-900/30 backdrop-blur-sm border-y border-emerald-800/30">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Location</h2>
        <div className="h-96 bg-emerald-900/30 rounded-lg shadow-lg w-full overflow-hidden border border-emerald-800/30">
          {/* This would be a map in a real application */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-emerald-200 text-lg">Interactive Map Would Go Here</p>
          </div>
        </div>
      </section>
      
      {/* Our Achievements Section */}
      <section className="w-full px-4 py-16 bg-emerald-900/30 backdrop-blur-sm border-y border-emerald-800/30">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-2">400+</div>
            <p className="text-emerald-300">Projects Completed</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <p className="text-emerald-300">Customer Satisfaction</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">15+</div>
            <p className="text-emerald-300">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <p className="text-emerald-300">Support Available</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
        <div className="grid gap-6">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-emerald-800/30">
            <h4 className="font-semibold text-lg text-white mb-2">How quickly can you respond to inquiries?</h4>
            <p className="text-emerald-200">We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can reach us by phone.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-emerald-800/30">
            <h4 className="font-semibold text-lg text-white mb-2">Do you offer maintenance services?</h4>
            <p className="text-emerald-200">Yes, we provide ongoing maintenance and support for all our projects. We can discuss maintenance packages based on your specific needs.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-emerald-800/30">
            <h4 className="font-semibold text-lg text-white mb-2">What is your typical project timeline?</h4>
            <p className="text-emerald-200">Project timelines vary based on complexity and scope. Simple websites might take 2-4 weeks, while comprehensive applications could take 3-6 months. We'll provide a detailed timeline during our initial consultation.</p>
          </div>
        </div>
      </section>
      
      {/* Enhanced Call-to-Action Section */}
      <section className="w-full bg-gradient-to-b from-emerald-950 to-emerald-950 py-20 border-y border-emerald-800/30">
        <div className="w-full px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-emerald-200 mb-8 max-w-3xl mx-auto">
            Let's work together to create something extraordinary. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/services"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 font-medium text-lg"
            >
              Explore Our Services
            </Link>
            <Link
              to="/portfolio"
              className="bg-transparent text-white border-2 border-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-all shadow-lg font-medium text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

     
      </Layout>
  );
};

export default Contact;