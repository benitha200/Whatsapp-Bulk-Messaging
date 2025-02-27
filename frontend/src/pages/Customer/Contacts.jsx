import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import icons (using the same icon components from your dashboard)
const DashboardIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const CampaignsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ContactsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const TemplatesIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>;
const AnalyticsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const SettingsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const HelpIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const FilterIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>;
const SearchIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const ImportIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>;
const TagIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>;

const Contacts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showAddContactModal, setShowAddContactModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedContacts, setSelectedContacts] = useState([]);
  
  // Demo data for contacts
  const contactsData = [
    { 
      id: 1, 
      name: 'John Smith', 
      phone: '+1 555-123-4567', 
      email: 'john@example.com', 
      group: 'Premium Customers',
      lastMessage: '2023-06-15',
      tags: ['Regular', 'Interested'],
      status: 'Active',
      campaigns: 8
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      phone: '+1 555-987-6543', 
      email: 'sarah@example.com', 
      group: 'Newsletter Subscribers',
      lastMessage: '2023-06-10',
      tags: ['VIP', 'Frequent'],
      status: 'Active',
      campaigns: 12
    },
    { 
      id: 3, 
      name: 'Michael Brown', 
      phone: '+1 555-456-7890', 
      email: 'michael@example.com', 
      group: 'Regular Customers',
      lastMessage: '2023-05-28',
      tags: ['New'],
      status: 'Inactive',
      campaigns: 3
    },
    { 
      id: 4, 
      name: 'Emma Wilson', 
      phone: '+1 555-789-0123', 
      email: 'emma@example.com', 
      group: 'Summer Shoppers',
      lastMessage: '2023-06-12',
      tags: ['Regular', 'Discount'],
      status: 'Active',
      campaigns: 6
    },
    { 
      id: 5, 
      name: 'David Lee', 
      phone: '+1 555-234-5678', 
      email: 'david@example.com', 
      group: 'Premium Customers',
      lastMessage: '2023-06-01',
      tags: ['VIP', 'Business'],
      status: 'Active',
      campaigns: 10
    },
    { 
      id: 6, 
      name: 'Jennifer Garcia', 
      phone: '+1 555-345-6789', 
      email: 'jennifer@example.com', 
      group: 'All Customers',
      lastMessage: '2023-05-15',
      tags: ['Inactive'],
      status: 'Inactive',
      campaigns: 2
    },
    { 
      id: 7, 
      name: 'Robert Martinez', 
      phone: '+1 555-876-5432', 
      email: 'robert@example.com', 
      group: 'Business Subscribers',
      lastMessage: '2023-06-08',
      tags: ['Business', 'Frequent'],
      status: 'Active',
      campaigns: 7
    },
    { 
      id: 8, 
      name: 'Linda Anderson', 
      phone: '+1 555-654-3210', 
      email: 'linda@example.com', 
      group: 'Loyalty Members',
      lastMessage: '2023-06-14',
      tags: ['VIP', 'Loyalty'],
      status: 'Active',
      campaigns: 14
    }
  ];
  
  // Filter contacts based on active filter
  const filteredContacts = activeFilter === 'all' 
    ? contactsData 
    : contactsData.filter(contact => 
        contact.status.toLowerCase() === activeFilter.toLowerCase()
      );
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Toggle add contact modal
  const toggleAddContactModal = () => {
    setShowAddContactModal(!showAddContactModal);
  };
  
  // Toggle import contacts modal
  const toggleImportModal = () => {
    setShowImportModal(!showImportModal);
  };
  
  // Handle select all contacts
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedContacts(filteredContacts.map(contact => contact.id));
    } else {
      setSelectedContacts([]);
    }
  };
  
  // Handle select single contact
  const handleSelectContact = (contactId) => {
    if (selectedContacts.includes(contactId)) {
      setSelectedContacts(selectedContacts.filter(id => id !== contactId));
    } else {
      setSelectedContacts([...selectedContacts, contactId]);
    }
  };
  
  return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-950">
                  {/* Header */}
                  <header className="bg-green-800 backdrop-blur-sm border-b border-white/10 fixed w-full z-10 shadow-md">
                      <div className="flex items-center justify-between h-16 px-4">
                          <div className="flex items-center">
                              <button
                                  onClick={toggleSidebar}
                                  className="text-white p-2 rounded-md hover:bg-white/10"
                              >
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                  </svg>
                              </button>
                              <div className="ml-4">
                                  <h2 className="text-xl font-bold text-white">WhatsBulk</h2>
                              </div>
                          </div>
      
                          <div className="flex items-center">
                              <button className="text-white p-2 rounded-md hover:bg-white/10 mr-2">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                  </svg>
                              </button>
                              <div className="relative">
                                  <button className="flex items-center text-white hover:bg-white/10 rounded-md p-2">
                                      <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white mr-2 border-2 border-white/20">
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
                      className={`fixed z-20 h-full top-16 left-0 pt-6 flex lg:flex flex-shrink-0 flex-col bg-white/5 backdrop-blur-md border-r border-white/10 transition-width duration-300 ${sidebarOpen ? "w-64" : "w-20"
                          }`}
                  >
                      <div className="relative flex-1 flex flex-col min-h-0 overflow-y-auto">
                          <div className="flex-1 px-2 space-y-1">
                              {/* Dashboard */}
                              <Link to="/dashboard" className="text-white/80 flex items-center px-4 py-3 rounded-lg hover:bg-white/10 group">
                                  <DashboardIcon />
                                  <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Dashboard</span>
                              </Link>
      
                              {/* Campaigns */}
                              <Link to="/campaigns" className="text-white flex items-center px-4 py-3 rounded-lg bg-green-600/80 shadow-lg group">
                                  <CampaignsIcon />
                                  <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Campaigns</span>
                              </Link>
      
                              {/* Contacts */}
                              <Link to="/contacts" className="text-white/80 flex items-center px-4 py-3 rounded-lg hover:bg-white/10 group">
                                  <ContactsIcon />
                                  <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Contacts</span>
                              </Link>
      
                              {/* Templates */}
                              <Link to="/templates" className="text-white/80 flex items-center px-4 py-3 rounded-lg hover:bg-white/10 group">
                                  <TemplatesIcon />
                                  <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Templates</span>
                              </Link>
      
                              {/* Analytics */}
                              <Link to="/analytics" className="text-white/80 flex items-center px-4 py-3 rounded-lg hover:bg-white/10 group">
                                  <AnalyticsIcon />
                                  <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Analytics</span>
                              </Link>
      
                              <div className="pt-4 mt-4 border-t border-white/10">
                                  {/* Settings */}
                                  <Link to="/settings" className="text-white/80 flex items-center px-4 py-3 rounded-lg hover:bg-white/10 group">
                                      <SettingsIcon />
                                      <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Settings</span>
                                  </Link>
      
                                  {/* Help & Support */}
                                  <Link to="/help" className="text-white/80 flex items-center px-4 py-3 rounded-lg hover:bg-white/10 group">
                                      <HelpIcon />
                                      <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Help & Support</span>
                                  </Link>
                              </div>
                          </div>
      
                          {/* Upgrade Button */}
                          {sidebarOpen && (
                              <div className="p-4">
                                  <button className="w-full bg-white text-green-800 py-3 px-4 rounded-lg transition-colors font-medium shadow-lg hover:bg-green-100">
                                      Upgrade Plan
                                  </button>
                              </div>
                          )}
                      </div>
                  </aside>

      {/* Main Content */}
      <main className={`pt-16 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"} transition-all duration-300 bg-white`}>
        <div className="px-4 py-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Contacts</h1>
              <p className="text-gray-600 mt-2">Manage your contact list and send targeted messages</p>
            </div>
            <div className="flex mt-4 md:mt-0 space-x-3">
              <button
                onClick={toggleImportModal}
                className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg transition-colors font-medium"
              >
                <ImportIcon />
                <span className="ml-2">Import</span>
              </button>
              <button
                onClick={toggleAddContactModal}
                className="flex items-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors font-medium shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Contact
              </button>
            </div>
          </div>
          
          {/* Contact Filters and Search */}
          <div className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              {/* Filters */}
              <div className="flex space-x-2 mb-4 md:mb-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                <button 
                  onClick={() => setActiveFilter('all')} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'all' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Contacts
                </button>
                <button 
                  onClick={() => setActiveFilter('active')} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'active' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Active
                </button>
                <button 
                  onClick={() => setActiveFilter('inactive')} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'inactive' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Inactive
                </button>
              </div>
              
              {/* Search */}
              <div className="flex w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <SearchIcon />
                  </div>
                  <input 
                    type="text" 
                    className="bg-gray-100 border border-gray-200 text-gray-700 placeholder-gray-500 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Search contacts..." 
                  />
                </div>
                <button className="ml-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700">
                  <FilterIcon />
                </button>
              </div>
            </div>
          </div>
          
          {/* Contacts List with Batch Actions */}
          {selectedContacts.length > 0 && (
            <div className="mb-4 py-3 px-4 bg-green-50 border border-green-200 rounded-lg flex justify-between items-center">
              <div className="text-gray-700">
                <span className="font-medium">{selectedContacts.length}</span> contacts selected
              </div>
              <div className="flex space-x-3">
                <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium flex items-center">
                  <CampaignsIcon />
                  <span className="ml-2">Add to Campaign</span>
                </button>
                <button className="px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm font-medium flex items-center">
                  <TagIcon />
                  <span className="ml-2">Add Tags</span>
                </button>
                <button className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium flex items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span className="ml-2">Delete</span>
                </button>
              </div>
            </div>
          )}
          
          {/* Contacts Table */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-left text-gray-600 text-sm">
                    <th className="pl-6 py-4 w-12">
                      <input 
                        type="checkbox" 
                        className="h-4 w-4 rounded bg-white border-gray-300 text-green-600 focus:ring-green-500 focus:ring-offset-0"
                        onChange={handleSelectAll}
                        checked={selectedContacts.length === filteredContacts.length && filteredContacts.length > 0}
                      />
                    </th>
                    <th className="px-6 py-4 font-medium">Name</th>
                    <th className="px-6 py-4 font-medium">Phone</th>
                    <th className="px-6 py-4 font-medium">Email</th>
                    <th className="px-6 py-4 font-medium">Group</th>
                    <th className="px-6 py-4 font-medium">Tags</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Campaigns</th>
                    <th className="px-6 py-4 font-medium">Last Message</th>
                    <th className="px-6 py-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredContacts.map((contact) => (
                    <tr key={contact.id} className="text-gray-800 hover:bg-gray-50">
                      <td className="pl-6 py-4">
                        <input 
                          type="checkbox" 
                          className="h-4 w-4 rounded bg-white border-gray-300 text-green-600 focus:ring-green-500 focus:ring-offset-0"
                          checked={selectedContacts.includes(contact.id)}
                          onChange={() => handleSelectContact(contact.id)}
                        />
                      </td>
                      <td className="px-6 py-4 font-medium">{contact.name}</td>
                      <td className="px-6 py-4 text-gray-600">{contact.phone}</td>
                      <td className="px-6 py-4 text-gray-600">{contact.email}</td>
                      <td className="px-6 py-4">{contact.group}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {contact.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                tag === 'VIP' 
                                  ? 'bg-purple-100 text-purple-700' 
                                  : tag === 'Regular' 
                                  ? 'bg-green-100 text-green-700' 
                                  : tag === 'Business' 
                                  ? 'bg-blue-100 text-blue-700' 
                                  : 'bg-gray-100 text-gray-700'
                              }`}
                              >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          contact.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {contact.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{contact.campaigns}</td>
                      <td className="px-6 py-4">
                        {new Date(contact.lastMessage).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800" title="Edit">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button className="text-green-600 hover:text-green-800" title="Message">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </button>
                          <button className="text-red-600 hover:text-red-800" title="Delete">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-gray-600 text-sm">
                Showing <span className="font-medium">{filteredContacts.length}</span> of <span className="font-medium">{contactsData.length}</span> contacts
              </div>
              <div className="flex space-x-1">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">Previous</button>
                <button className="px-3 py-1 border border-gray-300 bg-white rounded-md text-gray-600 hover:bg-gray-100">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Add Contact Modal */}
      {showAddContactModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Contact</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="group" className="block text-gray-700 text-sm font-medium mb-2">Contact Group</label>
                    <select id="group" className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>Select a group</option>
                      <option>Regular Customers</option>
                      <option>Premium Customers</option>
                      <option>Newsletter Subscribers</option>
                      <option>Business Subscribers</option>
                      <option>Summer Shoppers</option>
                      <option>Loyalty Members</option>
                      <option>All Customers</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tags" className="block text-gray-700 text-sm font-medium mb-2">Tags</label>
                    <input type="text" id="tags" className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Separate with commas" />
                  </div>
                </form>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Add Contact
                </button>
                <button onClick={toggleAddContactModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Import Contacts Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Import Contacts</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mt-1 text-sm text-gray-600">Drop your CSV file here, or <span className="text-green-600 font-medium">browse</span></p>
                  <p className="mt-1 text-xs text-gray-500">Supports CSV, XLS, XLSX up to 10MB</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Or import from</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Google
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                      </svg>
                      Outlook
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                      <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Import
                </button>
                <button onClick={toggleImportModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;