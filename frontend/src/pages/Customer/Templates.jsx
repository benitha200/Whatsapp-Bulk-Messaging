import React, { useState, useEffect } from 'react';
import Layout from './Layout';

const CustomerTemplates = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
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
  
  // Track window width for responsive adjustments
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Filter templates based on active category and search term
  const filteredTemplates = templateList
    .filter(template => activeCategory === 'all' || template.category === activeCategory)
    .filter(template => 
      searchTerm === '' || 
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
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
  
  // Determine if we need to show categories in dropdown (for smaller screens)
  const useCategoryDropdown = windowWidth < 768;
  
  return (
    <Layout>
      <div className="px-2 sm:px-4 py-4 sm:py-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Message Templates</h1>
            <p className="text-emerald-200 mt-1 sm:mt-2">Create and manage reusable message templates for your campaigns.</p>
          </div>
          <button 
            onClick={toggleCreateModal}
            className="bg-emerald-600 hover:bg-emerald-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-emerald-500/25 flex items-center w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Create Template</span>
          </button>
        </div>
        
        {/* Template Categories and Search - Responsive Container */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 p-3 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col space-y-4">
            {/* Search - Always on top for mobile */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-emerald-900/30 border border-emerald-800/40 rounded-lg text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent w-full"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchTerm && (
                <button 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-emerald-300 hover:text-white"
                  onClick={() => setSearchTerm('')}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* Categories - Dropdown for mobile, buttons for desktop */}
            {useCategoryDropdown ? (
              <div className="w-full">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full bg-emerald-900/30 border border-emerald-800/40 rounded-lg text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                >
                  {templateCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {templateCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-emerald-600 text-white'
                        : 'text-emerald-200 hover:bg-emerald-800/40'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Results count */}
        <div className="mb-4 text-emerald-300 text-sm">
          Showing {filteredTemplates.length} {filteredTemplates.length === 1 ? 'template' : 'templates'}
          {activeCategory !== 'all' && ` in ${templateCategories.find(cat => cat.id === activeCategory)?.name}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </div>
        
        {/* Templates Grid - Responsive with different columns based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <div 
                key={template.id} 
                className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 overflow-hidden hover:border-emerald-600/40 transition-colors cursor-pointer"
                onClick={() => openTemplateDetails(template)}
              >
                <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-emerald-800/30">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg sm:text-xl font-semibold text-white truncate">{template.name}</h2>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 ml-2 flex-shrink-0">
                      {templateCategories.find(cat => cat.id === template.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="h-16 sm:h-24 overflow-hidden text-emerald-200 text-sm sm:text-base">
                    {template.content}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-emerald-800/30">
                    <div className="flex justify-between text-emerald-300 text-xs sm:text-sm">
                      <div>Created: {formatDate(template.createdAt)}</div>
                      <div>Uses: {template.usageCount.toLocaleString()}</div>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-1 sm:gap-2">
                      {template.variables.map((variable, idx) => (
                        <span key={idx} className="px-2 py-1 bg-emerald-800/30 rounded-md text-xs text-emerald-300">
                          {`{{${variable}}}`}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-8 text-center text-emerald-200">
              <svg className="w-16 h-16 mx-auto text-emerald-800/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-lg font-medium">No templates found</p>
              <p className="mt-2">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Template Details Modal - Responsive */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-emerald-900/90 border border-emerald-800/40 rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-auto">
            <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-emerald-800/40 flex justify-between items-center sticky top-0 bg-emerald-900/90 backdrop-blur-sm z-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-white truncate">{selectedTemplate.name}</h2>
              <button 
                onClick={closeTemplateDetails}
                className="text-emerald-300 hover:text-white ml-2 flex-shrink-0"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="mb-6">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300">
                  {templateCategories.find(cat => cat.id === selectedTemplate.category)?.name}
                </span>
                <div className="mt-4 flex flex-col sm:flex-row sm:justify-between text-emerald-300 text-sm gap-2">
                  <div>Created: {formatDate(selectedTemplate.createdAt)}</div>
                  <div>Uses: {selectedTemplate.usageCount.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2">Template Content</h3>
                <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-lg p-4 text-emerald-200 text-sm sm:text-base">
                  {selectedTemplate.content}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2">Variables</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTemplate.variables.map((variable, idx) => (
                    <span key={idx} className="px-3 py-2 bg-emerald-800/30 rounded-md text-sm text-emerald-300">
                      {`{{${variable}}}`}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Template
                </button>
                <button className="bg-emerald-800/40 hover:bg-emerald-800/60 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors font-medium flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Use in Campaign
                </button>
                <button className="bg-red-800/40 hover:bg-red-800/60 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors font-medium flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span className="ml-2 sm:hidden">Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Create Template Modal - Responsive */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-emerald-900/90 border border-emerald-800/40 rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-auto">
            <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-emerald-800/40 flex justify-between items-center sticky top-0 bg-emerald-900/90 backdrop-blur-sm z-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-white">Create New Template</h2>
              <button 
                onClick={toggleCreateModal}
                className="text-emerald-300 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 sm:p-6">
              <form>
                <div className="mb-5">
                  <label htmlFor="templateName" className="block text-emerald-100 font-medium mb-2">Template Name</label>
                  <input
                    type="text"
                    id="templateName"
                    placeholder="Enter template name"
                    className="w-full bg-emerald-900/30 border border-emerald-800/40 rounded-lg text-white py-2 sm:py-3 px-4 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="templateCategory" className="block text-emerald-100 font-medium mb-2">Category</label>
                  <select
                    id="templateCategory"
                    className="w-full bg-emerald-900/30 border border-emerald-800/40 rounded-lg text-white py-2 sm:py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    {templateCategories.filter(c => c.id !== 'all').map((category) => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-5">
                  <label htmlFor="templateContent" className="block text-emerald-100 font-medium mb-2">Template Content</label>
                  <textarea
                    id="templateContent"
                    rows="5"
                    placeholder="Enter your message template here. Use {{variable}} for dynamic content."
                    className="w-full bg-emerald-900/30 border border-emerald-800/40 rounded-lg text-white py-2 sm:py-3 px-4 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  ></textarea>
                  <p className="text-emerald-300 text-xs sm:text-sm mt-2">Use double curly braces to create variables. Example: {{name}}</p>
                </div>
                
                <div className="mb-5">
                  <label className="block text-emerald-100 font-medium mb-2">Detected Variables</label>
                  <div className="p-3 sm:p-4 bg-emerald-900/30 border border-emerald-800/40 rounded-lg min-h-[50px] sm:min-h-[60px]">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-emerald-700/40 rounded-md text-sm text-emerald-200">
                        No variables detected
                      </span>
                    </div>
                  </div>
                  <p className="text-emerald-300 text-xs sm:text-sm mt-2">Variables will be automatically detected when you type them in the content.</p>
                </div>
                
                <div className="mb-5">
                  <label className="block text-emerald-100 font-medium mb-2">Preview</label>
                  <div className="p-3 sm:p-4 bg-emerald-900/30 border border-emerald-800/40 rounded-lg min-h-[80px] sm:min-h-[100px] text-emerald-200">
                    <p className="text-emerald-400 italic">Enter template content to see preview</p>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button 
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center"
                  >
                    Create Template
                  </button>
                  <button 
                    type="button"
                    onClick={toggleCreateModal}
                    className="bg-emerald-800/40 hover:bg-emerald-800/60 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors font-medium flex items-center justify-center"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CustomerTemplates;