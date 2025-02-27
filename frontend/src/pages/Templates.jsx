import React, { useState } from 'react';
import Layout from './Layout';

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
        return { text: 'Popular', color: 'bg-emerald-500' };
      case 'medium':
        return { text: 'Trending', color: 'bg-emerald-500' };
      case 'low':
        return { text: 'New', color: 'bg-teal-500' };
      default:
        return { text: '', color: '' };
    }
  };
  
  return (
    <Layout>      
      {/* Hero Section */}
      <section className="pt-32 pb-16 w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              WhatsApp Message <span className="text-emerald-400">Templates</span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Browse our library of professionally designed templates to see how they can help you engage with your audience more effectively.
            </p>
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
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                      : 'bg-white/10 text-emerald-100 hover:bg-white/20'
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
              className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 hover:border-emerald-500/30 transition-all group overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {template.title}
                  </h3>
                  {template.popularity && (
                    <span className={`${getPopularityLabel(template.popularity).color} text-white text-xs px-2 py-1 rounded-full`}>
                      {getPopularityLabel(template.popularity).text}
                    </span>
                  )}
                </div>
                <p className="text-emerald-200 mb-4 text-sm">
                  {template.description}
                </p>
                <div className="bg-emerald-900/30 p-4 rounded-lg mb-4 border border-emerald-800/30">
                  <p className="text-emerald-100 text-sm italic">
                    {template.preview}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/10 text-emerald-200 px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium w-full">
                    View Template Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Template Tips Section */}
      <section className="w-full mx-auto px-4 py-24 bg-gradient-to-b from-emerald-950 to-emerald-950 border-y border-emerald-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
            How WhatsApp Templates Work
          </h2>
          <p className="text-emerald-200 text-center max-w-3xl mx-auto mb-16">
            Our pre-designed WhatsApp templates help businesses connect with customers effectively through these key features
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Personalization Fields</h3>
              <p className="text-emerald-200">
                Templates include dynamic fields like [Name], [OrderID], and [Date] that automatically fill with customer data for personalized messaging at scale.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Category Organization</h3>
              <p className="text-emerald-200">
                Templates are organized by category (Promotional, Transactional, Alerts, Customer Service) to help you quickly find the right message type for your needs.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-teal-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Preview & Performance</h3>
              <p className="text-emerald-200">
                Each template displays a preview of how it will appear to recipients, along with popularity indicators showing which templates perform best with customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Best Practices Section */}
      <section className="w-full mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
            WhatsApp Template Best Practices
          </h2>
          <p className="text-emerald-200 text-center max-w-3xl mx-auto mb-16">
            Follow these tips to maximize your WhatsApp marketing success and keep your audience engaged
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/20">
                <span className="text-2xl text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Keep It Concise</h3>
              <p className="text-emerald-200">
                WhatsApp users prefer brief, to-the-point messages. Aim for 50-125 characters for higher engagement rates. Focus on one clear call-to-action per message.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/20">
                <span className="text-2xl text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Personalize Content</h3>
              <p className="text-emerald-200">
                Use dynamic fields to include customer names, recent purchases, or other personalized data. Personalized messages have 29% higher open rates and 41% higher click rates.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-teal-600/20">
                <span className="text-2xl text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Add Rich Media</h3>
              <p className="text-emerald-200">
                Messages with images or videos see 6x more engagement than text-only messages. Use high-quality visuals that reinforce your message and create interest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Templates;