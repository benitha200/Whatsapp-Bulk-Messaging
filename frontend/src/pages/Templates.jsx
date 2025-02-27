import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Template categories
  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'promotional', name: 'Promotional' },
    { id: 'transactional', name: 'Transactional' },
    { id: 'alerts', name: 'Alerts & Notifications' },
    { id: 'customer-service', name: 'Customer Service' }
  ];
  
  // Template data
  const templates = [
    {
      id: 1,
      title: 'Flash Sale Announcement',
      description: 'Notify customers about limited-time promotions and special offers.',
      category: 'promotional',
      tags: ['retail', 'ecommerce', 'sales'],
      preview: 'Hi [Name], Our FLASH SALE is LIVE! 🔥 Get 30% off all products for the next 24 hours only. Shop now: [Link] Reply STOP to unsubscribe.',
      popularity: 'high'
    },
    {
      id: 2,
      title: 'Order Confirmation',
      description: 'Confirm order details and provide tracking information.',
      category: 'transactional',
      tags: ['ecommerce', 'orders', 'shipping'],
      preview: 'Hi [Name], Your order #[OrderID] is confirmed! ✅ Expected delivery: [Date]. Track your package: [Link] Questions? Reply to this message.',
      popularity: 'high'
    },
    {
      id: 3,
      title: 'Appointment Reminder',
      description: 'Send timely reminders for upcoming appointments.',
      category: 'alerts',
      tags: ['healthcare', 'services', 'scheduling'],
      preview: 'Reminder: You have an appointment with [Business] on [Date] at [Time]. Reply CONFIRM to confirm or RESCHEDULE to change your appointment.',
      popularity: 'medium'
    },
    {
      id: 4,
      title: 'Customer Feedback',
      description: 'Request feedback after product purchase or service completion.',
      category: 'customer-service',
      tags: ['feedback', 'reviews', 'satisfaction'],
      preview: 'Hi [Name], Thank you for your recent [purchase/visit]. We` love to hear your feedback! Please take a moment to rate your experience: [Link]',
      popularity: 'medium'
    },
    {
      id: 5,
      title: 'Back In Stock',
      description: 'Alert customers when items they wanted are available again.',
      category: 'alerts',
      tags: ['retail', 'ecommerce', 'inventory'],
      preview: 'Good news, [Name]! 🎉 The [Product] you were interested in is back in stock. Shop now before it sells out again: [Link]',
      popularity: 'medium'
    },
    {
      id: 6,
      title: 'Payment Confirmation',
      description: 'Confirm successful payment transactions.',
      category: 'transactional',
      tags: ['finance', 'payments', 'receipts'],
      preview: 'Payment Confirmed ✅ Your payment of [Amount] to [Recipient] was successful. Transaction ID: [TransactionID]. View receipt: [Link]',
      popularity: 'high'
    },
    {
      id: 7,
      title: 'Welcome Message',
      description: 'Welcome new subscribers to your messaging list.',
      category: 'promotional',
      tags: ['onboarding', 'welcome', 'introduction'],
      preview: 'Welcome to [Business], [Name]! 👋 We`re excited to have you join us. Explore our top products/services: [Link] Reply HELP for assistance anytime.',
      popularity: 'high'
    },
    {
      id: 8,
      title: 'Support Ticket Update',
      description: 'Keep customers informed about their support ticket status.',
      category: 'customer-service',
      tags: ['support', 'ticket', 'resolution'],
      preview: 'Update on Ticket #[TicketID]: [Status]. Our team [message based on status]. Need more help? Reply to this message.',
      popularity: 'low'
    },
    {
      id: 9,
      title: 'Abandoned Cart',
      description: 'Remind customers about items left in their shopping cart.',
      category: 'promotional',
      tags: ['ecommerce', 'cart', 'recovery'],
      preview: 'Hey [Name], you left some great items in your cart! 🛒 They`re still waiting for you. Complete your purchase here: [Link] (Items reserved for 24 hours)',
      popularity: 'high'
    }
  ];
  
  // Filter templates based on active category
  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  // Get label for popularity
  const getPopularityLabel = (popularity) => {
    switch(popularity) {
      case 'high':
        return { text: 'Popular', color: 'bg-green-500' };
      case 'medium':
        return { text: 'Trending', color: 'bg-emerald-500' };
      case 'low':
        return { text: 'New', color: 'bg-teal-500' };
      default:
        return { text: '', color: '' };
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b w-full from-green-950 to-emerald-950">
      {/* Header */}
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              WhatsApp Message <span className="text-green-400">Templates</span>
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose from our library of professionally designed templates or create your own to engage with your audience more effectively.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/templates/create"
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/25 font-medium text-lg"
              >
                Create New Template
              </Link>
              <button
                className="bg-transparent text-white border-2 border-green-400 px-8 py-4 rounded-lg hover:bg-green-400/10 transition-all shadow-lg font-medium text-lg"
              >
                Import Templates
              </button>
            </div>
          </div>
          
          {/* Category Navigation */}
          <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
            <div className="flex space-x-2 mx-auto">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap ${
                    activeCategory === category.id 
                      ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' 
                      : 'bg-white/10 text-green-100 hover:bg-white/20'
                  } transition-all`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Templates Grid */}
      <section className="w-full mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredTemplates.map(template => (
            <div 
              key={template.id} 
              className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 hover:border-green-500/30 transition-all group overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                    {template.title}
                  </h3>
                  {template.popularity && (
                    <span className={`${getPopularityLabel(template.popularity).color} text-white text-xs px-2 py-1 rounded-full`}>
                      {getPopularityLabel(template.popularity).text}
                    </span>
                  )}
                </div>
                <p className="text-green-200 mb-4 text-sm">
                  {template.description}
                </p>
                <div className="bg-green-900/30 p-4 rounded-lg mb-4 border border-green-800/30">
                  <p className="text-green-100 text-sm italic">
                    {template.preview}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/10 text-green-200 px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                    Use Template
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Create Your Own Template Section */}
      <section className="bg-gradient-to-b from-emerald-950 to-green-950 py-24 border-y border-green-800/30">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Can't Find What You Need?
              </h2>
              <p className="text-green-200 text-lg mb-8 leading-relaxed">
                Create custom WhatsApp templates tailored to your specific marketing needs. Our intuitive template builder makes it easy to design engaging messages with dynamic fields, rich media, and interactive elements.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/templates/create"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/25 font-medium"
                >
                  Create Custom Template
                </Link>
                <Link
                  to="/templates/guide"
                  className="bg-transparent text-white border-2 border-green-400 px-6 py-3 rounded-lg hover:bg-green-400/10 transition-all font-medium"
                >
                  View Template Guide
                </Link>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-xl border border-green-800/20 p-6">
                <div className="border-b border-green-800/30 pb-4 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Template Editor</h3>
                  <p className="text-green-200 text-sm">Design your custom WhatsApp message template</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-green-200 text-sm font-medium mb-2">Template Name</label>
                    <input type="text" className="w-full bg-white/10 border border-green-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter template name..." />
                  </div>
                  <div>
                    <label className="block text-green-200 text-sm font-medium mb-2">Message Content</label>
                    <textarea className="w-full bg-white/10 border border-green-800/30 rounded-lg px-4 py-2 text-white h-32 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Type your message content..."></textarea>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Template Tips Section */}
      <section className="w-full mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
            WhatsApp Template Best Practices
          </h2>
          <p className="text-green-200 text-center max-w-3xl mx-auto mb-16">
            Follow these tips to maximize your WhatsApp marketing success and keep your audience engaged
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-600/20">
                <span className="text-2xl text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Keep It Concise</h3>
              <p className="text-green-200">
                WhatsApp users prefer brief, to-the-point messages. Aim for 50-125 characters for higher engagement rates. Focus on one clear call-to-action per message.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/20">
                <span className="text-2xl text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Personalize Content</h3>
              <p className="text-green-200">
                Use dynamic fields to include customer names, recent purchases, or other personalized data. Personalized messages have 29% higher open rates and 41% higher click rates.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-teal-600/20">
                <span className="text-2xl text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Add Rich Media</h3>
              <p className="text-green-200">
                Messages with images or videos see 6x more engagement than text-only messages. Use high-quality visuals that reinforce your message and create interest.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-b from-green-950 to-emerald-950 py-16 border-t border-green-800/30">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Your First Template?</h2>
          <p className="text-green-200 text-lg mb-8 max-w-3xl mx-auto">
            Get started with our easy-to-use template builder and reach your customers with engaging WhatsApp messages.
          </p>
          <Link
            to="/templates/create"
            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/25 font-medium text-lg inline-block"
          >
            Create Template
          </Link>
        </div>
      </section>
      
      {/* Footer - Keep same as home page */}
      <footer className="bg-green-950/80 backdrop-blur-sm py-12 border-t border-green-800/20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
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
                <li><Link to="/privacy" className="text-green-200                   hover:text-green-400">Privacy Policy</Link>
                </li>
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

export default Templates;