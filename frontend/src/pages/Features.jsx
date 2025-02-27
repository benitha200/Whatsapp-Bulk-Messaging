import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import featureHero from './../assets/1.jpg'; // You'll need to add this image
import Layout from './Layout';

const Features = () => {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 to-emerald-950/70 z-0"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" style={{ backgroundImage: `url(${featureHero})` }}></div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-0">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Powerful <span className="text-emerald-400">Features</span> for WhatsApp Marketing
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 mb-10 leading-relaxed">
              Everything you need to create, send, and optimize your WhatsApp marketing campaigns
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories Tabs */}
      <section className="py-6 bg-emerald-900/10 border-y border-emerald-800/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#messaging" className="px-6 py-3 bg-white/5 hover:bg-emerald-800/20 rounded-full text-emerald-200 hover:text-emerald-300 transition-all">
              Messaging
            </a>
            <a href="#automation" className="px-6 py-3 bg-white/5 hover:bg-emerald-800/20 rounded-full text-emerald-200 hover:text-emerald-300 transition-all">
              Automation
            </a>
            <a href="#analytics" className="px-6 py-3 bg-white/5 hover:bg-emerald-800/20 rounded-full text-emerald-200 hover:text-emerald-300 transition-all">
              Analytics
            </a>
            <a href="#integration" className="px-6 py-3 bg-white/5 hover:bg-emerald-800/20 rounded-full text-emerald-200 hover:text-emerald-300 transition-all">
              Integration
            </a>
            <a href="#security" className="px-6 py-3 bg-white/5 hover:bg-emerald-800/20 rounded-full text-emerald-200 hover:text-emerald-300 transition-all">
              Security
            </a>
          </div>
        </div>
      </section>

      {/* Messaging Features */}
      <section id="messaging" className="py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/30 aspect-square flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <h4 className="text-white font-medium mb-2">Bulk Messaging</h4>
                      <p className="text-emerald-200 text-sm">Send to thousands of contacts at once</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h4 className="text-white font-medium mb-2">Targeting</h4>
                      <p className="text-emerald-200 text-sm">Reach specific audience segments</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h4 className="text-white font-medium mb-2">Rich Media</h4>
                      <p className="text-emerald-200 text-sm">Send images, videos, documents & more</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">👤</span>
                      </div>
                      <h4 className="text-white font-medium mb-2">Personalization</h4>
                      <p className="text-emerald-200 text-sm">Custom fields for each recipient</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Advanced Messaging Features</h2>
              <p className="text-emerald-200 mb-8">Our platform provides powerful messaging capabilities designed to help you reach your audience effectively and create engaging customer experiences.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Bulk Messaging</h3>
                    <p className="text-emerald-200">Send messages to thousands of customers simultaneously while maintaining personalization and high delivery rates.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Rich Media Support</h3>
                    <p className="text-emerald-200">Share images, videos, PDFs, location pins, and interactive buttons to create engaging multimedia experiences.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Templates</h3>
                    <p className="text-emerald-200">Create reusable templates with dynamic variables to maintain consistent messaging and save time.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Interactive Elements</h3>
                    <p className="text-emerald-200">Add call-to-action buttons, quick replies, and list messages to increase engagement and conversion rates.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/demo" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium">
                  See messaging features in action <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section id="automation" className="py-24 bg-gradient-to-b from-emerald-950 to-emerald-950 border-y border-emerald-800/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl border border-emerald-500/30 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center mr-4">
                        <span className="text-white text-lg">1</span>
                      </div>
                      <div className="bg-white/10 h-0.5 flex-1"></div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-4">
                        <span className="text-white text-lg">2</span>
                      </div>
                      <div className="bg-white/10 h-0.5 flex-1"></div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ml-4">
                        <span className="text-white text-lg">3</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/20">
                        <h4 className="text-white font-medium mb-2">Trigger: New Customer Sign-Up</h4>
                        <p className="text-emerald-200 text-sm">When a new user registers on your website</p>
                      </div>
                      
                      <div className="text-center text-emerald-400">↓</div>
                      
                      <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/20">
                        <h4 className="text-white font-medium mb-2">Delay: 30 Minutes</h4>
                        <p className="text-emerald-200 text-sm">Wait 30 minutes before sending message</p>
                      </div>
                      
                      <div className="text-center text-emerald-400">↓</div>
                      
                      <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/20">
                        <h4 className="text-white font-medium mb-2">Action: Send Welcome Message</h4>
                        <p className="text-emerald-200 text-sm">Send personalized welcome template with onboarding tips</p>
                      </div>
                      
                      <div className="text-center text-emerald-400">↓</div>
                      
                      <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/20">
                        <h4 className="text-white font-medium mb-2">Conditional: Did User Respond?</h4>
                        <p className="text-emerald-200 text-sm">Check if customer replied to welcome message</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Powerful Automation Workflows</h2>
              <p className="text-emerald-200 mb-8">Save time and increase engagement with intelligent automation tools that deliver the right messages at the right time.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Event-Triggered Messages</h3>
                    <p className="text-emerald-200">Automatically send messages based on customer actions, purchase history, or important dates.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Drip Campaigns</h3>
                    <p className="text-emerald-200">Create multi-step messaging sequences with customizable delays and conditions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Auto-Responses</h3>
                    <p className="text-emerald-200">Set up intelligent replies to common customer questions and keyword triggers.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Conditional Logic</h3>
                    <p className="text-emerald-200">Create branching workflows based on customer responses and behavior patterns.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/automation" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium">
                  Explore automation features <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section id="analytics" className="py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-teal-500/30">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">Campaign Performance</h4>
                      <span className="text-teal-400 text-sm">Last 30 days</span>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-emerald-200 text-sm">Delivery Rate</span>
                        <span className="text-white font-medium">98.3%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '98.3%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-emerald-200 text-sm">Open Rate</span>
                        <span className="text-white font-medium">87.2%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '87.2%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-emerald-200 text-sm">Click Rate</span>
                        <span className="text-white font-medium">42.5%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '42.5%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-emerald-200 text-sm">Conversion Rate</span>
                        <span className="text-white font-medium">12.8%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '12.8%' }}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <h5 className="text-emerald-300 text-sm mb-1">Total Messages</h5>
                        <p className="text-white text-2xl font-bold">245,678</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <h5 className="text-emerald-300 text-sm mb-1">Response Rate</h5>
                        <p className="text-white text-2xl font-bold">32.4%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Analytics & Insights</h2>
              <p className="text-emerald-200 mb-8">Gain valuable insights into your messaging performance with our advanced analytics dashboard and reporting tools.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time Dashboard</h3>
                    <p className="text-emerald-200">Monitor campaign performance as it happens with live delivery and engagement metrics.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Conversion Tracking</h3>
                    <p className="text-emerald-200">Track customer actions from message delivery to website visits and purchases.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">A/B Testing</h3>
                    <p className="text-emerald-200">Compare message variations to identify the most effective content and delivery times.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Custom Reports</h3>
                    <p className="text-emerald-200">Generate detailed reports with customizable metrics and export options for team sharing.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/analytics" className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium">
                  Explore analytics features <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section id="integration" className="py-24 bg-gradient-to-b from-emerald-950 to-emerald-950 border-y border-emerald-800/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Seamless Integrations</h2>
            <p className="text-emerald-200 max-w-3xl mx-auto">Connect WhatsBulk with your favorite tools and platforms to streamline your workflow and maximize efficiency.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-white font-semibold mb-2">E-commerce Platforms</h3>
              <p className="text-emerald-200 text-sm">Shopify, WooCommerce, Magento, BigCommerce</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-white font-semibold mb-2">CRM Systems</h3>
              <p className="text-emerald-200 text-sm">Salesforce, HubSpot, Zoho, Microsoft Dynamics</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Email Marketing</h3>
              <p className="text-emerald-200 text-sm">Mailchimp, Campaign Monitor, SendGrid, Klaviyo</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Automation Tools</h3>
              <p className="text-emerald-200 text-sm">Zapier, IFTTT, Make, Integromat</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Forms & Surveys</h3>
              <p className="text-emerald-200 text-sm">Google Forms, Typeform, SurveyMonkey, JotForm</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🛎️</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Customer Support</h3>
              <p className="text-emerald-200 text-sm">Zendesk, Intercom, Freshdesk, Help Scout</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Social Media</h3>
              <p className="text-emerald-200 text-sm">Facebook, Instagram, Twitter, LinkedIn</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Custom API</h3>
              <p className="text-emerald-200 text-sm">Connect any platform with our flexible REST API</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/integrations" className="bg-white/10 hover:bg-white/15 text-white py-3 px-6 rounded-lg transition-colors font-medium inline-flex items-center">
              View all integrations <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section id="security" className="py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-emerald-500/              20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/30">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/20">
                      <h4 className="text-white font-medium mb-2">End-to-End Encryption</h4>
                      <p className="text-emerald-200 text-sm">All messages are encrypted in transit and at rest</p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/20">
                      <h4 className="text-white font-medium mb-2">Two-Factor Authentication</h4>
                      <p className="text-emerald-200 text-sm">Secure your account with 2FA for added protection</p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/20">
                      <h4 className="text-white font-medium mb-2">GDPR Compliance</h4>
                      <p className="text-emerald-200 text-sm">We adhere to strict data protection regulations</p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/20">
                      <h4 className="text-white font-medium mb-2">Regular Security Audits</h4>
                      <p className="text-emerald-200 text-sm">Our systems are continuously monitored and tested</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Enterprise-Grade Security</h2>
              <p className="text-emerald-200 mb-8">Your data and communications are protected with the highest standards of security and privacy.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data Encryption</h3>
                    <p className="text-emerald-200">All data is encrypted using AES-256 encryption to ensure maximum security.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Access Controls</h3>
                    <p className="text-emerald-200">Granular permissions and role-based access to protect sensitive information.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Compliance</h3>
                    <p className="text-emerald-200">Fully compliant with GDPR, CCPA, and other global data protection laws.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Backup & Recovery</h3>
                    <p className="text-emerald-200">Automated backups and disaster recovery plans to ensure data integrity.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/security" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium">
                  Learn more about security <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-emerald-950 to-emerald-950 py-24 border-y border-emerald-800/20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-emerald-200 text-xl mb-10 max-w-2xl mx-auto">Join thousands of businesses using WhatsBulk to transform their WhatsApp marketing and customer engagement.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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

export default Features;