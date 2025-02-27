import React from 'react';
import { Link } from 'react-router-dom';
import hero from './../assets/1.jpg';
import NavBar from '../components/Navbar';
import Layout from './Layout';

const Home = () => {
  return (
    <Layout>

      {/* Hero Section - Full Screen with Gradient Overlay */}
      <section className="h-screen w-full flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 to-emerald-950/70"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" style={{ backgroundImage: `url(${hero})` }}></div>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-1">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            WhatsApp Marketing <span className="text-emerald-400 block sm:inline">Made Simple</span>
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Reach thousands of customers instantly with our powerful WhatsApp bulk messaging platform. Connect, engage, and convert with personalized messages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/signup"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 font-medium text-lg"
            >
              Start For Free
            </Link>
            <Link
              to="/demo"
              className="bg-transparent text-white border-2 border-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-all shadow-lg font-medium text-lg"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section - With Card Style */}
      <section className="bg-emerald-900/20 py-20 backdrop-blur-sm border-y border-emerald-800/20">
        <div className="w-full mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-emerald-800/10 p-6 rounded-xl shadow-sm border border-emerald-700/20">
              <p className="text-5xl font-bold text-emerald-400 mb-2">10M+</p>
              <p className="text-emerald-100 font-medium">Messages Sent Daily</p>
            </div>
            <div className="bg-emerald-800/10 p-6 rounded-xl shadow-sm border border-emerald-700/20">
              <p className="text-5xl font-bold text-emerald-400 mb-2">5K+</p>
              <p className="text-emerald-100 font-medium">Active Businesses</p>
            </div>
            <div className="bg-emerald-800/10 p-6 rounded-xl shadow-sm border border-emerald-700/20">
              <p className="text-5xl font-bold text-emerald-400 mb-2">98%</p>
              <p className="text-emerald-100 font-medium">Delivery Rate</p>
            </div>
            <div className="bg-emerald-800/10 p-6 rounded-xl shadow-sm border border-emerald-700/20">
              <p className="text-5xl font-bold text-emerald-400 mb-2">24/7</p>
              <p className="text-emerald-100 font-medium">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Features Section - With Improved Cards */}
      <section className="w-full mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Platform Features</h2>
        <p className="text-emerald-200 text-center max-w-3xl mx-auto mb-16">Everything you need to supercharge your WhatsApp marketing campaigns</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20 hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl text-white">📊</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Campaign Analytics</h3>
            <p className="text-emerald-200 mb-6">
              Detailed insights into message delivery, open rates, and customer engagement.
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6">
              <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Real-time tracking</li>
              <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Conversion analysis</li>
              <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Performance reports</li>
              <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> AI-powered insights</li>
            </ul>
            <Link to="/features/analytics" className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20 hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Audience Segmentation</h3>
            <p className="text-emerald-200 mb-6">
              Target specific customer groups with personalized messaging campaigns.
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6">
              <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Custom audience filters</li>
              <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Demographic targeting</li>
              <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Behavior-based groups</li>
              <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Multi-level segmentation</li>
            </ul>
            <Link to="/features/segmentation" className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20 hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl text-white">💬</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Rich Media Messages</h3>
            <p className="text-emerald-200 mb-6">
              Send images, videos, documents, and interactive content to engage your audience.
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6">
              <li className="flex items-center"><span className="text-teal-400 mr-2">✓</span> Image and video support</li>
              <li className="flex items-center"><span className="text-teal-400 mr-2">✓</span> Document sharing</li>
              <li className="flex items-center"><span className="text-teal-400 mr-2">✓</span> Interactive buttons</li>
              <li className="flex items-center"><span className="text-teal-400 mr-2">✓</span> Product catalogs</li>
            </ul>
            <Link to="/features/rich-media" className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section - With Modern Process Steps */}
      <section className="bg-gradient-to-b from-emerald-950 to-emerald-950 py-24 border-y border-emerald-800/30">
        <div className="w-full mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">How It Works</h2>
          <p className="text-emerald-200 text-center max-w-3xl mx-auto mb-16">Start sending WhatsApp messages to your customers in just 4 simple steps</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-emerald-600/30">1</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Sign Up</h3>
              <p className="text-emerald-200">Create your account and connect your WhatsApp Business API</p>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-600 to-transparent -z-10"></div>
            </div>
            <div className="text-center relative">
              <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-emerald-600/30">2</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Import Contacts</h3>
              <p className="text-emerald-200">Upload your contacts or connect your CRM to import customers</p>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-600 to-transparent -z-10"></div>
            </div>
            <div className="text-center relative">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-teal-600/30">3</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Create Campaign</h3>
              <p className="text-emerald-200">Design your message with our intuitive template builder</p>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-teal-600 to-transparent -z-10"></div>
            </div>
            <div className="text-center">
              <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-emerald-600/30">4</div>
              <h3 className="text-2xl font-semibold text-white mb-3">Send & Analyze</h3>
              <p className="text-emerald-200">Launch your campaign and track results in real-time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - With Improved Cards */}
      <section className="w-full mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-4">What Our Clients Say</h2>
        <p className="text-emerald-200 text-center max-w-3xl mx-auto mb-16">Trusted by businesses worldwide to power their WhatsApp marketing</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">JS</div>
              <div>
                <h4 className="font-semibold text-white text-lg">John Smith</h4>
                <p className="text-emerald-300 text-sm">Marketing Director, Retail Chain</p>
              </div>
            </div>
            <div className="text-3xl text-emerald-400 mb-4">"</div>
            <p className="text-emerald-200 italic mb-4">WhatsBulk transformed our customer communication. We've seen a 65% increase in engagement and 40% higher conversion rates compared to email campaigns.</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">SJ</div>
              <div>
                <h4 className="font-semibold text-white text-lg">Sarah Johnson</h4>
                <p className="text-emerald-300 text-sm">CEO, E-commerce Startup</p>
              </div>
            </div>
            <div className="text-3xl text-emerald-400 mb-4">"</div>
            <p className="text-emerald-200 italic mb-4">The segmentation features are incredible. We can target customers based on their purchase history and behavior, resulting in much more personalized messaging.</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-xl">MC</div>
              <div>
                <h4 className="font-semibold text-white text-lg">Michael Chen</h4>
                <p className="text-emerald-300 text-sm">Operations Manager, Service Provider</p>
              </div>
            </div>
            <div className="text-3xl text-teal-400 mb-4">"</div>
            <p className="text-emerald-200 italic mb-4">The analytics dashboard gives us insights we never had before. We can see exactly what messages resonate with our customers and optimize accordingly.</p>
            <div className="flex text-yellow-400">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-gradient-to-b from-emerald-950 to-emerald-950 py-24 border-y border-emerald-800/30">
        <div className="w-full mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Use Cases</h2>
          <p className="text-emerald-200 text-center max-w-3xl mx-auto mb-16">Discover how businesses like yours are using WhatsBulk</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border border-emerald-800/30 hover:transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-emerald-600 to-emerald-600 flex items-center justify-center">
                <span className="text-4xl">🛒</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-emerald-400 transition-colors">E-commerce</h3>
                <p className="text-emerald-200 mb-4">Send order confirmations, shipping updates, and personalized product recommendations.</p>
                <Link to="/use-cases/ecommerce" className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center">
                  View Case Study <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </Link>
              </div>
            </div>
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border border-emerald-800/30 hover:transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-emerald-600 to-emerald-600 flex items-center justify-center">
                <span className="text-4xl">🏥</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-emerald-400 transition-colors">Healthcare</h3>
                <p className="text-emerald-200 mb-4">Send appointment reminders, follow-up care instructions, and health tips.</p>
                <Link to="/use-cases/healthcare" className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center">
                  View Case Study <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </Link>
              </div>
            </div>
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-teal-500/10 transition-all duration-300 border border-emerald-800/30 hover:transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center">
                <span className="text-4xl">🎓</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white text-xl mb-3 group-hover:text-teal-400 transition-colors">Education</h3>
                <p className="text-emerald-200 mb-4">Notify students about class schedules, assignments, and important deadlines.</p>
                <Link to="/use-cases/education" className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center">
                  View Case Study <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Simple Pricing</h2>
        <p className="text-emerald-200 text-center max-w-3xl mx-auto mb-16">Choose the plan that fits your business needs</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-emerald-800/30 relative">
            <h3 className="text-2xl font-semibold text-white mb-2">Starter</h3>
            <p className="text-emerald-200 mb-6">For small businesses just getting started</p>
            <p className="text-4xl font-bold text-white mb-6">$29<span className="text-emerald-400 text-lg font-normal">/month</span></p>
            <ul className="text-emerald-200 space-y-3 mb-8">
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> 1,000 messages/month</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Basic templates</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Contact management</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Basic analytics</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Email support</li>
            </ul>
            <Link to="/signup" className="block text-center bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg transition-colors font-medium">Get Started</Link>
          </div>
          <div className="bg-gradient-to-b from-emerald-900/40 to-emerald-900/40 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-emerald-500/30 relative transform scale-105 z-10">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">POPULAR</div>
            <h3 className="text-2xl font-semibold text-white mb-2">Professional</h3>
            <p className="text-emerald-200 mb-6">For growing businesses with active campaigns</p>
            <p className="text-4xl font-bold text-white mb-6">$79<span className="text-emerald-400 text-lg font-normal">/month</span></p>
            <ul className="text-emerald-200 space-y-3 mb-8">
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> 10,000 messages/month</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Advanced templates</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Audience segmentation</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Advanced analytics</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Priority support</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> API access</li>
            </ul>
            <Link to="/signup" className="block text-center bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-4 rounded-lg transition-colors font-medium shadow-lg shadow-emerald-600/20">Get Started</Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-emerald-800/30 relative">
            <h3 className="text-2xl font-semibold text-white mb-2">Enterprise</h3>
            <p className="text-emerald-200 mb-6">For large businesses with high-volume needs</p>
            <p className="text-4xl font-bold text-white mb-6">$199<span className="text-emerald-400 text-lg font-normal">/month</span></p>
            <ul className="text-emerald-200 space-y-3 mb-8">
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> 50,000 messages/month</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Custom templates</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Multi-user access</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Dedicated account manager</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> Custom integrations</li>
              <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">✓</span> 24/7 premium support</li>
            </ul>
            <Link to="/signup" className="block text-center bg-white/20 hover:bg-white/30 text-white py-3 px-4 rounded-lg transition-colors font-medium">Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-emerald-200 text-center max-w-3xl mx-auto mb-16">Find answers to common questions about WhatsBulk</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
            <h3 className="text-xl font-semibold text-white mb-4">How does WhatsBulk ensure message delivery?</h3>
            <p className="text-emerald-200">We use advanced algorithms and direct API integrations with WhatsApp to ensure high delivery rates. Our system automatically retries failed messages and provides detailed delivery reports.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
            <h3 className="text-xl font-semibold text-white mb-4">Can I use my existing WhatsApp Business account?</h3>
            <p className="text-emerald-200">Yes, you can easily connect your existing WhatsApp Business account to WhatsBulk. We provide step-by-step guidance to help you set it up in minutes.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
            <h3 className="text-xl font-semibold text-white mb-4">Is there a limit to the number of contacts I can upload?</h3>
            <p className="text-emerald-200">No, there's no limit to the number of contacts you can upload. However, your message volume will depend on the pricing plan you choose.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
            <h3 className="text-xl font-semibold text-white mb-4">What kind of support do you offer?</h3>
            <p className="text-emerald-200">We offer 24/7 support via email, chat, and phone for all plans. Enterprise customers also get access to a dedicated account manager.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-emerald-950 to-emerald-950 py-24 border-y border-emerald-800/30">
        <div className="w-full mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your WhatsApp Marketing?</h2>
          <p className="text-emerald-200 text-xl mb-10 max-w-2xl mx-auto">Join thousands of businesses already using WhatsBulk to connect with their customers more effectively.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/signup"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 font-medium text-lg"
            >
              Start For Free
            </Link>
            <Link
              to="/demo"
              className="bg-transparent text-white border-2 border-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-all shadow-lg font-medium text-lg"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      </Layout>
  );
};

export default Home;