import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import featureHero from './../assets/1.jpg'; // You'll need to add this image

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b w-full from-green-950 to-emerald-950">
      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/70 to-emerald-950/70 z-0"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" style={{ backgroundImage: `url(${featureHero})` }}></div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Powerful <span className="text-green-400">Features</span> for WhatsApp Marketing
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-10 leading-relaxed">
              Everything you need to create, send, and optimize your WhatsApp marketing campaigns
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories Tabs */}
      <section className="py-6 bg-green-900/10 border-y border-green-800/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#messaging" className="px-6 py-3 bg-white/5 hover:bg-green-800/20 rounded-full text-green-200 hover:text-green-300 transition-all">
              Messaging
            </a>
            <a href="#automation" className="px-6 py-3 bg-white/5 hover:bg-green-800/20 rounded-full text-green-200 hover:text-green-300 transition-all">
              Automation
            </a>
            <a href="#analytics" className="px-6 py-3 bg-white/5 hover:bg-green-800/20 rounded-full text-green-200 hover:text-green-300 transition-all">
              Analytics
            </a>
            <a href="#integration" className="px-6 py-3 bg-white/5 hover:bg-green-800/20 rounded-full text-green-200 hover:text-green-300 transition-all">
              Integration
            </a>
            <a href="#security" className="px-6 py-3 bg-white/5 hover:bg-green-800/20 rounded-full text-green-200 hover:text-green-300 transition-all">
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
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 aspect-square flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <h4 className="text-white font-medium mb-2">Bulk Messaging</h4>
                      <p className="text-green-200 text-sm">Send to thousands of contacts at once</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h4 className="text-white font-medium mb-2">Targeting</h4>
                      <p className="text-green-200 text-sm">Reach specific audience segments</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h4 className="text-white font-medium mb-2">Rich Media</h4>
                      <p className="text-green-200 text-sm">Send images, videos, documents & more</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">👤</span>
                      </div>
                      <h4 className="text-white font-medium mb-2">Personalization</h4>
                      <p className="text-green-200 text-sm">Custom fields for each recipient</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Advanced Messaging Features</h2>
              <p className="text-green-200 mb-8">Our platform provides powerful messaging capabilities designed to help you reach your audience effectively and create engaging customer experiences.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Bulk Messaging</h3>
                    <p className="text-green-200">Send messages to thousands of customers simultaneously while maintaining personalization and high delivery rates.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Rich Media Support</h3>
                    <p className="text-green-200">Share images, videos, PDFs, location pins, and interactive buttons to create engaging multimedia experiences.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Templates</h3>
                    <p className="text-green-200">Create reusable templates with dynamic variables to maintain consistent messaging and save time.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Interactive Elements</h3>
                    <p className="text-green-200">Add call-to-action buttons, quick replies, and list messages to increase engagement and conversion rates.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/demo" className="inline-flex items-center text-green-400 hover:text-green-300 font-medium">
                  See messaging features in action <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section id="automation" className="py-24 bg-gradient-to-b from-green-950 to-emerald-950 border-y border-green-800/20">
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
                        <p className="text-green-200 text-sm">When a new user registers on your website</p>
                      </div>
                      
                      <div className="text-center text-green-400">↓</div>
                      
                      <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/20">
                        <h4 className="text-white font-medium mb-2">Delay: 30 Minutes</h4>
                        <p className="text-green-200 text-sm">Wait 30 minutes before sending message</p>
                      </div>
                      
                      <div className="text-center text-green-400">↓</div>
                      
                      <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/20">
                        <h4 className="text-white font-medium mb-2">Action: Send Welcome Message</h4>
                        <p className="text-green-200 text-sm">Send personalized welcome template with onboarding tips</p>
                      </div>
                      
                      <div className="text-center text-green-400">↓</div>
                      
                      <div className="bg-white/10 p-4 rounded-lg border border-emerald-500/20">
                        <h4 className="text-white font-medium mb-2">Conditional: Did User Respond?</h4>
                        <p className="text-green-200 text-sm">Check if customer replied to welcome message</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Powerful Automation Workflows</h2>
              <p className="text-green-200 mb-8">Save time and increase engagement with intelligent automation tools that deliver the right messages at the right time.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Event-Triggered Messages</h3>
                    <p className="text-green-200">Automatically send messages based on customer actions, purchase history, or important dates.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Drip Campaigns</h3>
                    <p className="text-green-200">Create multi-step messaging sequences with customizable delays and conditions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Auto-Responses</h3>
                    <p className="text-green-200">Set up intelligent replies to common customer questions and keyword triggers.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Conditional Logic</h3>
                    <p className="text-green-200">Create branching workflows based on customer responses and behavior patterns.</p>
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
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-teal-500/30">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">Campaign Performance</h4>
                      <span className="text-teal-400 text-sm">Last 30 days</span>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-green-200 text-sm">Delivery Rate</span>
                        <span className="text-white font-medium">98.3%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '98.3%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-green-200 text-sm">Open Rate</span>
                        <span className="text-white font-medium">87.2%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '87.2%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-green-200 text-sm">Click Rate</span>
                        <span className="text-white font-medium">42.5%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '42.5%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-green-200 text-sm">Conversion Rate</span>
                        <span className="text-white font-medium">12.8%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '12.8%' }}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <h5 className="text-green-300 text-sm mb-1">Total Messages</h5>
                        <p className="text-white text-2xl font-bold">245,678</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <h5 className="text-green-300 text-sm mb-1">Response Rate</h5>
                        <p className="text-white text-2xl font-bold">32.4%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Analytics & Insights</h2>
              <p className="text-green-200 mb-8">Gain valuable insights into your messaging performance with our advanced analytics dashboard and reporting tools.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time Dashboard</h3>
                    <p className="text-green-200">Monitor campaign performance as it happens with live delivery and engagement metrics.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Conversion Tracking</h3>
                    <p className="text-green-200">Track customer actions from message delivery to website visits and purchases.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">A/B Testing</h3>
                    <p className="text-green-200">Compare message variations to identify the most effective content and delivery times.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-teal-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Custom Reports</h3>
                    <p className="text-green-200">Generate detailed reports with customizable metrics and export options for team sharing.</p>
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
      <section id="integration" className="py-24 bg-gradient-to-b from-emerald-950 to-green-950 border-y border-green-800/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Seamless Integrations</h2>
            <p className="text-green-200 max-w-3xl mx-auto">Connect WhatsBulk with your favorite tools and platforms to streamline your workflow and maximize efficiency.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-white font-semibold mb-2">E-commerce Platforms</h3>
              <p className="text-green-200 text-sm">Shopify, WooCommerce, Magento, BigCommerce</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-white font-semibold mb-2">CRM Systems</h3>
              <p className="text-green-200 text-sm">Salesforce, HubSpot, Zoho, Microsoft Dynamics</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Email Marketing</h3>
              <p className="text-green-200 text-sm">Mailchimp, Campaign Monitor, SendGrid, Klaviyo</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Automation Tools</h3>
              <p className="text-green-200 text-sm">Zapier, IFTTT, Make, Integromat</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Forms & Surveys</h3>
              <p className="text-green-200 text-sm">Google Forms, Typeform, SurveyMonkey, JotForm</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🛎️</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Customer Support</h3>
              <p className="text-green-200 text-sm">Zendesk, Intercom, Freshdesk, Help Scout</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Social Media</h3>
              <p className="text-green-200 text-sm">Facebook, Instagram, Twitter, LinkedIn</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-800/20 flex flex-col items-center text-center hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Custom API</h3>
              <p className="text-green-200 text-sm">Connect any platform with our flexible REST API</p>
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
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/              20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-500/30">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg border border-green-500/20">
                      <h4 className="text-white font-medium mb-2">End-to-End Encryption</h4>
                      <p className="text-green-200 text-sm">All messages are encrypted in transit and at rest</p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg border border-green-500/20">
                      <h4 className="text-white font-medium mb-2">Two-Factor Authentication</h4>
                      <p className="text-green-200 text-sm">Secure your account with 2FA for added protection</p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg border border-green-500/20">
                      <h4 className="text-white font-medium mb-2">GDPR Compliance</h4>
                      <p className="text-green-200 text-sm">We adhere to strict data protection regulations</p>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-lg border border-green-500/20">
                      <h4 className="text-white font-medium mb-2">Regular Security Audits</h4>
                      <p className="text-green-200 text-sm">Our systems are continuously monitored and tested</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Enterprise-Grade Security</h2>
              <p className="text-green-200 mb-8">Your data and communications are protected with the highest standards of security and privacy.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data Encryption</h3>
                    <p className="text-green-200">All data is encrypted using AES-256 encryption to ensure maximum security.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Access Controls</h3>
                    <p className="text-green-200">Granular permissions and role-based access to protect sensitive information.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Compliance</h3>
                    <p className="text-green-200">Fully compliant with GDPR, CCPA, and other global data protection laws.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-700/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Backup & Recovery</h3>
                    <p className="text-green-200">Automated backups and disaster recovery plans to ensure data integrity.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/security" className="inline-flex items-center text-green-400 hover:text-green-300 font-medium">
                  Learn more about security <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-green-950 to-emerald-950 py-24 border-y border-green-800/20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-green-200 text-xl mb-10 max-w-2xl mx-auto">Join thousands of businesses using WhatsBulk to transform their WhatsApp marketing and customer engagement.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/25 font-medium text-lg"
            >
              Start For Free
            </Link>
            <Link
              to="/demo"
              className="bg-transparent text-white border-2 border-green-400 px-8 py-4 rounded-lg hover:bg-green-400/10 transition-all shadow-lg font-medium text-lg"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950/90 backdrop-blur-sm py-12 border-t border-green-800/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">WhatsBulk</h3>
              <p className="text-green-200 mb-6">Powerful WhatsApp marketing platform for businesses of all sizes.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-400 hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="text-green-400 hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-green-400 hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-5.384.272-.222.59-.449.874-.69 1.348-1.119 2.679-2.17 3.8-3.19 1.021 1.041 1.991 2.123 2.902 3.245-.688.098-1.623.22-2.654.42a47.39 47.39 0 00-3.063 5.599z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-green-200 hover:text-green-400">Features</Link></li>
                <li><Link to="/pricing" className="text-green-200 hover:text-green-400">Pricing</Link></li>
                <li><Link to="/use-cases" className="text-green-200 hover:text-green-400">Use Cases</Link></li>
                <li><Link to="/demo" className="text-green-200 hover:text-green-400">Request Demo</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-green-200 hover:text-green-400">Blog</Link></li>
                <li><Link to="/docs" className="text-green-200 hover:text-green-400">Documentation</Link></li>
                <li><Link to="/support" className="text-green-200 hover:text-green-400">Support</Link></li>
                <li><Link to="/faq" className="text-green-200 hover:text-green-400">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-green-200 hover:text-green-400">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-green-200 hover:text-green-400">Terms of Service</Link></li>
                <li><Link to="/security" className="text-green-200 hover:text-green-400">Security</Link></li>
                <li><Link to="/cookies" className="text-green-200 hover:text-green-400">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800/30 mt-8 pt-8 text-center">
            <p className="text-green-200">© 2023 WhatsBulk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;