import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const TemplateLibraryPage = () => {
    // Template categories
    const categories = [
        { id: 'all', name: 'All Templates' },
        { id: 'promotional', name: 'Promotional' },
        { id: 'transactional', name: 'Transactional' },
        { id: 'informational', name: 'Informational' },
        { id: 'interactive', name: 'Interactive' }
    ];

    // Sample template data - in a real app this would come from an API
    const [templates, setTemplates] = useState([
        {
            id: 'temp-001',
            name: 'Welcome Message',
            category: 'informational',
            status: 'approved',
            language: 'English',
            variables: ['FirstName', 'BusinessName'],
            body: 'Hello {{FirstName}}, welcome to {{BusinessName}}! We\'re excited to have you on board. Reply HELP for assistance.',
            createdBy: 'System Admin',
            createdOn: '2025-01-15T10:30:00',
            lastUsed: '2025-03-03T14:25:00',
            usageCount: 2483
        },
        {
            id: 'temp-002',
            name: 'Order Confirmation',
            category: 'transactional',
            status: 'approved',
            language: 'English',
            variables: ['FirstName', 'OrderNumber', 'OrderTotal', 'EstimatedDelivery'],
            body: 'Hi {{FirstName}}, your order #{{OrderNumber}} has been confirmed! Total: ${{OrderTotal}}. Estimated delivery: {{EstimatedDelivery}}. Track your order at: https://example.com/track',
            createdBy: 'Jane Smith',
            createdOn: '2025-01-20T09:15:00',
            lastUsed: '2025-03-05T11:40:00',
            usageCount: 1876
        },
        {
            id: 'temp-003',
            name: 'Monthly Promotion',
            category: 'promotional',
            status: 'in_review',
            language: 'English',
            variables: ['FirstName', 'PromoCode', 'ExpiryDate'],
            body: 'Hello {{FirstName}}! Enjoy 15% off your next purchase with code {{PromoCode}}. Valid until {{ExpiryDate}}. Shop now: https://example.com/shop',
            createdBy: 'Marketing Team',
            createdOn: '2025-02-28T15:45:00',
            lastUsed: null,
            usageCount: 0
        },
        {
            id: 'temp-004',
            name: 'Feedback Request',
            category: 'interactive',
            status: 'approved',
            language: 'English',
            variables: ['FirstName', 'ProductName'],
            body: 'Hi {{FirstName}}, how would you rate your experience with {{ProductName}}? Reply with a number from 1-5, with 5 being excellent.',
            createdBy: 'Customer Success',
            createdOn: '2025-02-10T11:20:00',
            lastUsed: '2025-03-02T09:30:00',
            usageCount: 943
        },
        {
            id: 'temp-005',
            name: 'Shipping Update',
            category: 'transactional',
            status: 'approved',
            language: 'English',
            variables: ['FirstName', 'OrderNumber', 'TrackingNumber', 'ShippingCompany'],
            body: 'Hello {{FirstName}}, your order #{{OrderNumber}} has shipped! Track it with {{ShippingCompany}} using tracking number: {{TrackingNumber}}',
            createdBy: 'System Admin',
            createdOn: '2025-01-22T14:30:00',
            lastUsed: '2025-03-04T16:15:00',
            usageCount: 1562
        },
        {
            id: 'temp-006',
            name: 'Appointment Reminder',
            category: 'transactional',
            status: 'approved',
            language: 'English',
            variables: ['FirstName', 'AppointmentDate', 'AppointmentTime', 'Location'],
            body: 'Reminder: Hi {{FirstName}}, you have an appointment scheduled for {{AppointmentDate}} at {{AppointmentTime}}. Location: {{Location}}. Reply C to confirm or R to reschedule.',
            createdBy: 'Jane Smith',
            createdOn: '2025-02-05T10:45:00',
            lastUsed: '2025-03-01T08:20:00',
            usageCount: 728
        },
        {
            id: 'temp-007',
            name: 'New Feature Announcement',
            category: 'informational',
            status: 'rejected',
            language: 'English',
            variables: ['FirstName', 'FeatureName'],
            body: 'Hey {{FirstName}}! We\'ve just launched {{FeatureName}} to make your experience even better. Check it out now!',
            createdBy: 'Product Team',
            createdOn: '2025-02-25T16:30:00',
            lastUsed: null,
            usageCount: 0,
            rejectionReason: 'Template is too promotional for informational category. Please revise or change category.'
        }
    ]);

    // State for UI
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [isCreatingTemplate, setIsCreatingTemplate] = useState(false);
    const [newTemplate, setNewTemplate] = useState({
        name: '',
        category: 'informational',
        language: 'English',
        body: '',
        variables: []
    });
    const [currentVariable, setCurrentVariable] = useState('');

    // Filter templates based on active category and search query
    const filteredTemplates = templates.filter(template => {
        const matchesCategory = activeCategory === 'all' || template.category === activeCategory;
        const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.body.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Handle variable input for new template
    const handleAddVariable = () => {
        if (currentVariable.trim() && !newTemplate.variables.includes(currentVariable.trim())) {
            setNewTemplate({
                ...newTemplate,
                variables: [...newTemplate.variables, currentVariable.trim()]
            });
            setCurrentVariable('');
        }
    };

    const handleRemoveVariable = (variable) => {
        setNewTemplate({
            ...newTemplate,
            variables: newTemplate.variables.filter(v => v !== variable)
        });
    };

    // Handle template creation
    const handleCreateTemplate = () => {
        const templateToAdd = {
            ...newTemplate,
            id: `temp-${(templates.length + 1).toString().padStart(3, '0')}`,
            status: 'in_review',
            createdBy: 'Admin User',
            createdOn: new Date().toISOString(),
            lastUsed: null,
            usageCount: 0
        };

        setTemplates([...templates, templateToAdd]);
        setIsCreatingTemplate(false);
        setNewTemplate({
            name: '',
            category: 'informational',
            language: 'English',
            body: '',
            variables: []
        });
    };

    // Format date for display
    const formatDate = (dateString) => {
        if (!dateString) return 'Never';
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Status badge color mapping
    const statusColors = {
        approved: 'bg-green-100 text-green-800 border-green-200',
        in_review: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        rejected: 'bg-red-100 text-red-800 border-red-200'
    };

    // Category badge color mapping
    const categoryColors = {
        promotional: 'bg-purple-100 text-purple-800 border-purple-200',
        informational: 'bg-blue-100 text-blue-800 border-blue-200',
        transactional: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        interactive: 'bg-indigo-100 text-indigo-800 border-indigo-200'
    };

    return (
        <AdminLayout activePage="templates">
            <div className="px-6 py-8 bg-gradient-to-b from-emerald-900/10 to-emerald-950/30 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="mb-8 flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-white">Template Library</h1>
                            <p className="mt-2 text-emerald-200">Manage and create WhatsApp message templates for your campaigns</p>
                        </div>
                        <button
                            onClick={() => setIsCreatingTemplate(true)}
                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md shadow flex items-center"
                        >
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            Create Template
                        </button>
                    </div>

                    {/* Category and Search */}
                    <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                        <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${activeCategory === category.id
                                        ? 'bg-emerald-700 text-white'
                                        : 'bg-emerald-800/30 text-emerald-100 hover:bg-emerald-800/50'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                        <div className="w-full md:w-64">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search templates..."
                                    className="w-full rounded-md bg-emerald-800/20 border border-emerald-700/30 text-white placeholder-emerald-400 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Templates Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTemplates.map(template => (
                            <div
                                key={template.id}
                                className="bg-emerald-800/20 rounded-lg border border-emerald-700/30 overflow-hidden hover:border-emerald-500/50 transition-colors shadow-md"
                            >
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-medium text-white truncate">{template.name}</h3>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[template.status]}`}>
                                            {template.status === 'in_review' ? 'In Review' : template.status.charAt(0).toUpperCase() + template.status.slice(1)}
                                        </span>
                                    </div>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border mb-3 ${categoryColors[template.category]}`}>
                                        {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                                    </span>
                                    <div className="h-32 overflow-y-auto bg-emerald-950/50 rounded p-3 mb-3 text-emerald-100 text-sm">
                                        {template.body}
                                    </div>
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {template.variables.map(variable => (
                                            <span
                                                key={variable}
                                                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-700/40 text-emerald-100 border border-emerald-600/30"
                                            >
                                                {variable}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="text-sm text-emerald-300">
                                        <p>Created by: {template.createdBy}</p>
                                        <p>Created on: {formatDate(template.createdOn)}</p>
                                        <p>Last used: {formatDate(template.lastUsed)}</p>
                                        <p>Usage count: {template.usageCount.toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="border-t border-emerald-700/30 px-4 py-3 bg-emerald-800/10 flex justify-end">
                                    <button
                                        onClick={() => setSelectedTemplate(template)}
                                        className="text-emerald-400 hover:text-emerald-300 bg-emerald-800/30 hover:bg-emerald-800/50 px-3 py-1 rounded-md text-sm"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Empty state */}
                        {filteredTemplates.length === 0 && (
                            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center p-8 bg-emerald-800/10 rounded-lg border border-emerald-700/30">
                                <svg className="w-16 h-16 text-emerald-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                <h3 className="text-xl font-medium text-white mb-2">No templates found</h3>
                                <p className="text-emerald-300 text-center mb-4">Try adjusting your search or category filters</p>
                                <button
                                    onClick={() => setIsCreatingTemplate(true)}
                                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md shadow"
                                >
                                    Create a New Template
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Template Detail Modal */}
            {selectedTemplate && (
                <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black opacity-75" onClick={() => setSelectedTemplate(null)}></div>
                    <div className="relative bg-emerald-900 rounded-lg shadow-xl max-w-3xl w-full mx-4 border border-emerald-700/50">
                        <div className="px-6 py-4 border-b border-emerald-700/30">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-medium text-white">Template Details</h3>
                                <button
                                    className="text-emerald-300 hover:text-white"
                                    onClick={() => setSelectedTemplate(null)}
                                >
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
                            {/* Template Header */}
                            <div className="mb-6">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                    <h2 className="text-2xl font-bold text-white">{selectedTemplate.name}</h2>
                                    <div className="flex items-center space-x-2">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColors[selectedTemplate.category]}`}>
                                            {selectedTemplate.category.charAt(0).toUpperCase() + selectedTemplate.category.slice(1)}
                                        </span>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[selectedTemplate.status]}`}>
                                            {selectedTemplate.status === 'in_review' ? 'In Review' : selectedTemplate.status.charAt(0).toUpperCase() + selectedTemplate.status.slice(1)}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-emerald-300">Created by: <span className="text-white">{selectedTemplate.createdBy}</span></p>
                                        <p className="text-emerald-300">Created on: <span className="text-white">{formatDate(selectedTemplate.createdOn)}</span></p>
                                    </div>
                                    <div>
                                        <p className="text-emerald-300">Last used: <span className="text-white">{formatDate(selectedTemplate.lastUsed)}</span></p>
                                        <p className="text-emerald-300">Usage count: <span className="text-white">{selectedTemplate.usageCount.toLocaleString()}</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Template Content */}
                            <div className="mb-6">
                                <h4 className="text-lg font-medium text-white mb-2">Template Content</h4>
                                <div className="bg-emerald-950/50 rounded-lg p-4 border border-emerald-700/30 text-white mb-4">
                                    {selectedTemplate.body}
                                </div>
                                <div>
                                    <h5 className="text-sm font-medium text-emerald-300 mb-2">Preview:</h5>
                                    <div className="bg-emerald-950 border border-emerald-700/30 rounded-lg p-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <div className="bg-emerald-800/30 rounded-lg p-3 inline-block max-w-md">
                                                    <p className="text-white">
                                                        {selectedTemplate.body.replace(/\{\{(\w+)\}\}/g, (_, variable) => {
                                                            switch (variable) {
                                                                case 'FirstName': return 'John';
                                                                case 'BusinessName': return 'WhatsBulk';
                                                                case 'OrderNumber': return '12345';
                                                                case 'OrderTotal': return '49.99';
                                                                case 'EstimatedDelivery': return 'March 10';
                                                                case 'PromoCode': return 'SPRING25';
                                                                case 'ExpiryDate': return 'March 31';
                                                                case 'ProductName': return 'Premium Plan';
                                                                case 'TrackingNumber': return 'TRK789012345';
                                                                case 'ShippingCompany': return 'FastShip';
                                                                case 'AppointmentDate': return 'March 15';
                                                                case 'AppointmentTime': return '2:30 PM';
                                                                case 'Location': return '123 Main St';
                                                                case 'FeatureName': return 'Bulk Scheduling';
                                                                default: return `[${variable}]`;
                                                            }
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Variables */}
                            <div className="mb-6">
                                <h4 className="text-lg font-medium text-white mb-2">Template Variables</h4>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {selectedTemplate.variables.length > 0 ? (
                                        selectedTemplate.variables.map(variable => (
                                            <div
                                                key={variable}
                                                className="flex items-center px-3 py-1.5 rounded-md bg-emerald-800/40 border border-emerald-700/50 text-white"
                                            >
                                                <span className="mr-1 font-mono text-sm">&#123;&#123;{variable}&#125;&#125;</span>
                                                <span className="text-xs text-emerald-300">({variable})</span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-emerald-300 italic">No variables in this template</p>
                                    )}
                                </div>
                                <div className="text-sm text-emerald-300">
                                    <p>Variables will be replaced with actual data values when the template is used in campaigns.</p>
                                </div>
                            </div>

                            {/* Rejection Reason (if rejected) */}
                            {selectedTemplate.status === 'rejected' && selectedTemplate.rejectionReason && (
                                <div className="mb-6">
                                    <h4 className="text-lg font-medium text-white mb-2">Rejection Reason</h4>
                                    <div className="bg-red-900/20 border border-red-700/30 rounded-md p-3">
                                        <p className="text-white">{selectedTemplate.rejectionReason}</p>
                                    </div>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex justify-end space-x-3 border-t border-emerald-700/30 pt-4 mt-6">
                                {selectedTemplate.status === 'rejected' && (
                                    <button
                                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md shadow"
                                    >
                                        Edit Template
                                    </button>
                                )}
                                {selectedTemplate.status === 'in_review' && (
                                    <>
                                        <button
                                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md shadow"
                                        >
                                            Reject
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md shadow"
                                        >
                                            Approve
                                        </button>
                                    </>
                                )}
                                <button
                                    className="px-4 py-2 bg-emerald-700/50 hover:bg-emerald-700/70 text-white font-medium rounded-md"
                                    onClick={() => setSelectedTemplate(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Create Template Modal */}
            {isCreatingTemplate && (
                <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black opacity-75" onClick={() => setIsCreatingTemplate(false)}></div>
                    <div className="relative bg-emerald-900 rounded-lg shadow-xl max-w-3xl w-full mx-4 border border-emerald-700/50">
                        <div className="px-6 py-4 border-b border-emerald-700/30">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-medium text-white">Create New Template</h3>
                                <button
                                    className="text-emerald-300 hover:text-white"
                                    onClick={() => setIsCreatingTemplate(false)}
                                >
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
                            <div className="space-y-4">
                                {/* Template Name */}
                                <div>
                                    <label htmlFor="templateName" className="block text-sm font-medium text-emerald-300 mb-1">
                                        Template Name *
                                    </label>
                                    <input
                                        id="templateName"
                                        type="text"
                                        value={newTemplate.name}
                                        onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                                        className="w-full rounded-md bg-emerald-800/20 border border-emerald-700/30 text-white placeholder-emerald-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="e.g., Welcome Message"
                                    />
                                </div>

                                {/* Category and Language */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="category" className="block text-sm font-medium text-emerald-300 mb-1">
                                            Category *
                                        </label>
                                        <select
                                            id="category"
                                            value={newTemplate.category}
                                            onChange={(e) => setNewTemplate({ ...newTemplate, category: e.target.value })}
                                            className="w-full rounded-md bg-emerald-800/20 border border-emerald-700/30 text-white placeholder-emerald-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        >
                                            <option value="informational">Informational</option>
                                            <option value="promotional">Promotional</option>
                                            <option value="transactional">Transactional</option>
                                            <option value="interactive">Interactive</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="language" className="block text-sm font-medium text-emerald-300 mb-1">
                                            Language *
                                        </label>
                                        <select
                                            id="language"
                                            value={newTemplate.language}
                                            onChange={(e) => setNewTemplate({ ...newTemplate, language: e.target.value })}
                                            className="w-full rounded-md bg-emerald-800/20 border border-emerald-700/30 text-white placeholder-emerald-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        >
                                            <option value="English">English</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="French">French</option>
                                            <option value="German">German</option>
                                            <option value="Portuguese">Portuguese</option>
                                            <option value="Arabic">Arabic</option>
                                            <option value="Hindi">Hindi</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Template Body */}
                                <div>
                                    <label htmlFor="templateBody" className="block text-sm font-medium text-emerald-300 mb-1">
                                        Template Body *
                                    </label>
                                    <textarea
                                        id="templateBody"
                                        rows="5"
                                        value={newTemplate.body}
                                        onChange={(e) => setNewTemplate({ ...newTemplate, body: e.target.value })}
                                        className="w-full rounded-md bg-emerald-800/20 border border-emerald-700/30 text-white placeholder-emerald-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Hello {{ FirstName }}, welcome to our service!"
                                    />
                                    <p className="mt-1 text-xs text-emerald-400">Use {{ VariableName }} syntax to add variables to your template.</p>
                                </div>

                                {/* Variables */}
                                <div>
                                    <label className="block text-sm font-medium text-emerald-300 mb-2">
                                        Variables
                                    </label>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {newTemplate.variables.map(variable => (
                                            <div
                                                key={variable}
                                                className="flex items-center px-3 py-1.5 rounded-md bg-emerald-800/40 border border-emerald-700/50 text-white"
                                            >
                                                <span className="mr-2 font-mono text-sm">&#123;&#123;{variable}&#125;&#125;</span>
                                                <button
                                                    onClick={() => handleRemoveVariable(variable)}
                                                    className="text-emerald-400 hover:text-emerald-300"
                                                >
                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                        {newTemplate.variables.length === 0 && (
                                            <p className="text-emerald-500 italic text-sm">No variables added yet</p>
                                        )}
                                    </div>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            value={currentVariable}
                                            onChange={(e) => setCurrentVariable(e.target.value)}
                                            placeholder="Add a variable (e.g., FirstName)"
                                            className="flex-1 rounded-l-md bg-emerald-800/20 border border-emerald-700/30 text-white placeholder-emerald-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                        <button
                                            onClick={handleAddVariable}
                                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-r-md border border-emerald-600"
                                        >
                                            Add
                                        </button>
                                    </div>
                                    <p className="mt-1 text-xs text-emerald-400">Variables will be displayed in the template preview and available for replacement when sending messages.</p>
                                </div>

                                {/* Preview */}
                                <div>
                                    <h4 className="text-sm font-medium text-emerald-300 mb-2">Preview:</h4>
                                    <div className="bg-emerald-950 border border-emerald-700/30 rounded-lg p-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <div className="bg-emerald-800/30 rounded-lg p-3 inline-block max-w-md">
                                                    <p className="text-white">
                                                        {newTemplate.body.replace(/\{\{(\w+)\}\}/g, (_, variable) => {
                                                            return `[${variable}]`;
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end space-x-3 border-t border-emerald-700/30 pt-4 mt-6">
                                <button
                                    onClick={() => setIsCreatingTemplate(false)}
                                    className="px-4 py-2 bg-emerald-700/50 hover:bg-emerald-700/70 text-white font-medium rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreateTemplate}
                                    disabled={!newTemplate.name || !newTemplate.body}
                                    className={`px-4 py-2 text-white font-medium rounded-md ${!newTemplate.name || !newTemplate.body
                                        ? 'bg-emerald-600/50 cursor-not-allowed'
                                        : 'bg-emerald-600 hover:bg-emerald-700'
                                        }`}
                                >
                                    Save Template
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default TemplateLibraryPage;