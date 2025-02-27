import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import the same icon components from your Dashboard
const DashboardIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const CampaignsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ContactsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const TemplatesIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>;
const AnalyticsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const SettingsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const HelpIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const CustomerTemplates = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // Demo data for templates
  const templateCategories = [
    { id: 'all', name: 'All Templates' },
    { id: 'promotional', name: 'Promotional' },
    { id: 'transactional', name: 'Transactional' },
    { id: 'follow-up', name: 'Follow-up' },
    { id: 'welcome', name: 'Welcome Messages' },
    { id: 'custom', name: 'Custom' }
  ];
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  const templateList = [
    { 
      id: 1, 
      name: 'Welcome Message', 
      category: 'welcome',
      content: 'Hello {{name}}, welcome to our service! We are excited to have you on board. Feel free to reach out if you have any questions.',
      variables: ['name'],
      createdAt: '2023-05-15',
      usageCount: 1245
    },
    { 
      id: 2, 
      name: 'Special Offer', 
      category: 'promotional',
      content: 'Hi {{name}}, we have a special offer just for you! Get {{discount}}% off on your next purchase using code: {{code}}. Valid until {{date}}.',
      variables: ['name', 'discount', 'code', 'date'],
      createdAt: '2023-06-01',
      usageCount: 853
    },
    { 
      id: 3, 
      name: 'Order Confirmation', 
      category: 'transactional',
      content: 'Thank you for your order, {{name}}! Your order #{{orderNumber}} has been confirmed and will be shipped within {{shipDays}} business days.',
      variables: ['name', 'orderNumber', 'shipDays'],
      createdAt: '2023-05-20',
      usageCount: 2154
    },
    { 
      id: 4, 
      name: 'Appointment Reminder', 
      category: 'transactional',
      content: 'Reminder: You have an appointment scheduled for {{date}} at {{time}}. Please confirm your attendance by replying YES or NO.',
      variables: ['date', 'time'],
      createdAt: '2023-06-10',
      usageCount: 764
    },
    { 
      id: 5, 
      name: 'Follow-up Message', 
      category: 'follow-up',
      content: 'Hello {{name}}, thank you for your recent purchase! We hope you`re enjoying it. We`d love to hear your feedback.',
      variables: ['name'],
      createdAt: '2023-05-25',
      usageCount: 921
    },
    { 
      id: 6, 
      name: 'Product Announcement', 
      category: 'promotional',
      content: 'Exciting news, {{name}}! We`ve just launched our new product, {{productName}}. Check it out today and enjoy early bird pricing!',
      variables: ['name', 'productName'],
      createdAt: '2023-06-05',
      usageCount: 521
    }
  ];
  
  // Filter templates based on active category
  const filteredTemplates = activeCategory === 'all' 
    ? templateList 
    : templateList.filter(template => template.category === activeCategory);
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Open template details modal
  const openTemplateDetails = (template) => {
    setSelectedTemplate(template);
  };
  
  // Close template details modal
  const closeTemplateDetails = () => {
    setSelectedTemplate(null);
  };
  
  // Toggle create template modal
  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };
  
  // Time formatter
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 to-emerald-950">
      {/* Header */}
      <header className="bg-green-900/40 backdrop-blur-sm border-b border-green-800/30 fixed w-full z-10">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-white p-2 rounded-md hover:bg-green-800/30"
            >
              <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="ml-4">
              <h2 className="text-xl font-bold text-white">WhatsBulk</h2>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="text-white p-2 rounded-md hover:bg-green-800/30 mr-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="relative">
              <button className="flex items-center text-white hover:bg-green-800/30 rounded-md p-2">
                <div className="h-8 w-8 rounded-full bg-green-700 flex items-center justify-center text-white mr-2">
                  JD
                </div>
                <span className="font-medium hidden md:block">John Doe</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside 
        className={`fixed z-20 h-full top-16 left-0 pt-6 flex lg:flex flex-shrink-0 flex-col bg-green-900/30 backdrop-blur-md border-r border-green-800/30 transition-width duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="relative flex-1 flex flex-col min-h-0 overflow-y-auto">
          <div className="flex-1 px-2 space-y-1">
            {/* Dashboard */}
            <Link to="/dashboard" className="text-green-100 flex items-center px-4 py-3 rounded-lg hover:bg-green-800/20 group">
              <DashboardIcon />
              <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Dashboard</span>
            </Link>
            
            {/* Campaigns */}
            <Link to="/campaigns" className="text-green-100 flex items-center px-4 py-3 rounded-lg hover:bg-green-800/20 group">
              <CampaignsIcon />
              <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Campaigns</span>
            </Link>
            
            {/* Contacts */}
            <Link to="/contacts" className="text-green-100 flex items-center px-4 py-3 rounded-lg hover:bg-green-800/20 group">
              <ContactsIcon />
              <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Contacts</span>
            </Link>
            
            {/* Templates */}
            <Link to="/templates" className="text-white flex items-center px-4 py-3 rounded-lg bg-green-800/40 group">
              <TemplatesIcon />
              <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Templates</span>
            </Link>
            
            {/* Analytics */}
            <Link to="/analytics" className="text-green-100 flex items-center px-4 py-3 rounded-lg hover:bg-green-800/20 group">
              <AnalyticsIcon />
              <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Analytics</span>
            </Link>
            
            <div className="pt-4 mt-4 border-t border-green-800/30">
              {/* Settings */}
              <Link to="/settings" className="text-green-100 flex items-center px-4 py-3 rounded-lg hover:bg-green-800/20 group">
                <SettingsIcon />
                <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Settings</span>
              </Link>
              
              {/* Help & Support */}
              <Link to="/help" className="text-green-100 flex items-center px-4 py-3 rounded-lg hover:bg-green-800/20 group">
                <HelpIcon />
                <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Help & Support</span>
              </Link>
            </div>
          </div>
          
          {/* Upgrade Button */}
          {sidebarOpen && (
            <div className="p-4">
              <button className="w-full bg-green-600 hover:bg-green-500 text-white py-3 px-4 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25">
                Upgrade Plan
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className={`pt-16 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"} transition-all duration-300`}>
        <div className="px-4 py-6">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Message Templates</h1>
              <p className="text-green-200 mt-2">Create and manage reusable message templates for your campaigns.</p>
            </div>
            <button 
              onClick={toggleCreateModal}
              className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className='text-grenn-600'>Create Template</span>
            </button>
          </div>
          
          {/* Template Categories and Search */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {templateCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'text-green-500'
                        : 'text-green-800 hover:bg-green-800/40'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search templates..."
                  className="pl-10 pr-4 py-2 bg-green-900/30 border border-green-800/40 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent w-full md:w-64"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div 
                key={template.id} 
                className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden hover:border-green-600/40 transition-colors cursor-pointer"
                onClick={() => openTemplateDetails(template)}
              >
                <div className="px-6 py-5 border-b border-green-800/30">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-white">{template.name}</h2>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300">
                      {templateCategories.find(cat => cat.id === template.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="h-24 overflow-hidden text-green-200">
                    {template.content}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-green-800/30">
                    <div className="flex justify-between text-green-300 text-sm">
                      <div>Created: {formatDate(template.createdAt)}</div>
                      <div>Uses: {template.usageCount.toLocaleString()}</div>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {template.variables.map((variable, idx) => (
                        <span key={idx} className="px-2 py-1 bg-green-800/30 rounded-md text-xs text-green-300">
                          {`{{${variable}}}`}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="w-full bg-green-950/80 backdrop-blur-sm py-6 border-t border-green-800/20 mt-8">
          <div className="px-4 md:px-6">
            <p className="text-green-200 text-center text-sm">© 2023 WhatsBulk. All rights reserved.</p>
          </div>
        </footer>
      </main>
      
      {/* Template Details Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-green-900/90 border border-green-800/40 rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="px-6 py-5 border-b border-green-800/40 flex justify-between items-center sticky top-0 bg-green-900/90 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white">{selectedTemplate.name}</h2>
              <button 
                onClick={closeTemplateDetails}
                className="text-green-300 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <span className="px-2 py-1 rounded-full text-xs font-medium text-green-500/20">
                  {templateCategories.find(cat => cat.id === selectedTemplate.category)?.name}
                </span>
                <div className="mt-4 flex justify-between text-green-600 text-sm">
                  <div>Created: {formatDate(selectedTemplate.createdAt)}</div>
                  <div>Uses: {selectedTemplate.usageCount.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-white mb-2">Template Content</h3>
                <div className="bg-green-900/30 border border-green-800/40 rounded-lg p-4 text-green-600">
                  {selectedTemplate.content}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-white mb-2">Variables</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTemplate.variables.map((variable, idx) => (
                    <span key={idx} className="px-3 py-2 bg-green-800/30 rounded-md text-sm text-green-300">
                      {`{{${variable}}}`}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25 flex items-center justify-center flex-1">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Template
                </button>
                <button className="bg-green-800/40 hover:bg-green-800/60 text-white py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center flex-1">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Use in Campaign
                </button>
                <button className="bg-red-800/40 hover:bg-red-800/60 text-white py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center sm:w-auto">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Create Template Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-green-900/90 border border-green-800/40 rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="px-6 py-5 border-b border-green-800/40 flex justify-between items-center sticky top-0 bg-green-900/90 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white">Create New Template</h2>
              <button 
                onClick={toggleCreateModal}
                className="text-green-300 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <form>
                <div className="mb-6">
                  <label htmlFor="templateName" className="block text-green-100 font-medium mb-2">Template Name</label>
                  <input
                    type="text"
                    id="templateName"
                    placeholder="Enter template name"
                    className="w-full bg-green-900/30 border border-green-800/40 rounded-lg text-white py-3 px-4 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="templateCategory" className="block text-green-100 font-medium mb-2">Category</label>
                  <select
                    id="templateCategory"
                    className="w-full bg-green-900/30 border border-green-800/40 rounded-lg text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    {templateCategories.filter(c => c.id !== 'all').map((category) => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="templateContent" className="block text-green-100 font-medium mb-2">Template Content</label>
                  <textarea
                    id="templateContent"
                    rows="6"
                    placeholder="Enter your message template here. Use {{variable}} for dynamic content."
                    className="w-full bg-green-900/30 border border-green-800/40 rounded-lg text-white py-3 px-4 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  ></textarea>
                  <p className="text-green-300 text-sm mt-2">Use double curly braces to create variables. Example: {{name}}</p>
                </div>
                
                <div className="mb-6">
                  <label className="block text-green-100 font-medium mb-2">Detected Variables</label>
                  <div className="p-4 bg-green-900/30 border border-green-800/40 rounded-lg min-h-[60px]">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-700/40 rounded-md text-sm text-green-200">
                        No variables detected
                      </span>
                    </div>
                  </div>
                  <p className="text-green-300 text-sm mt-2">Variables will be automatically detected when you type them in the content.</p>
                </div>
                
                <div className="mb-6">
                  <label className="block text-green-100 font-medium mb-2">Preview</label>
                  <div className="p-4 bg-green-900/30 border border-green-800/40 rounded-lg min-h-[100px] text-green-200">
                    <p className="text-green-400 italic">Enter template content to see preview</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button 
                    type="submit"
                    className="text-green-600 hover:bg-green-500 py-3 px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25 flex items-center justify-center"
                  >
                    <span className='text-green-700'>Create Template</span> 
                  </button>
                  <button 
                    type="button"
                    onClick={toggleCreateModal}
                    className="bg-green-800/40 hover:bg-green-800/60 text-white py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerTemplates;