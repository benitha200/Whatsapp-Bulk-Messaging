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

const Campaigns = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNewCampaignModal, setShowNewCampaignModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Demo data for campaigns
  const campaignData = [
    { 
      id: 1, 
      name: 'Summer Sale Promotion', 
      status: 'Active', 
      sent: 4521, 
      opened: 3245, 
      response: 1458, 
      createdAt: '2023-06-15', 
      scheduledFor: '2023-06-15',
      audience: 'Summer Shoppers',
      metrics: { deliveryRate: 98, openRate: 72, responseRate: 32 }
    },
    { 
      id: 2, 
      name: 'New Product Launch', 
      status: 'Scheduled', 
      sent: 0, 
      opened: 0, 
      response: 0, 
      createdAt: '2023-06-14', 
      scheduledFor: '2023-06-20',
      audience: 'All Customers',
      metrics: { deliveryRate: 0, openRate: 0, responseRate: 0 }
    },
    { 
      id: 3, 
      name: 'Customer Feedback Survey', 
      status: 'Completed', 
      sent: 2150, 
      opened: 1852, 
      response: 945, 
      createdAt: '2023-06-05', 
      scheduledFor: '2023-06-10',
      audience: 'Regular Customers',
      metrics: { deliveryRate: 99, openRate: 86, responseRate: 44 }
    },
    { 
      id: 4, 
      name: 'Weekly Newsletter', 
      status: 'Active', 
      sent: 5200, 
      opened: 3120, 
      response: 875, 
      createdAt: '2023-06-12', 
      scheduledFor: '2023-06-12',
      audience: 'Newsletter Subscribers',
      metrics: { deliveryRate: 97, openRate: 60, responseRate: 17 }
    },
    { 
      id: 5, 
      name: 'Flash Sale Announcement', 
      status: 'Draft', 
      sent: 0, 
      opened: 0, 
      response: 0, 
      createdAt: '2023-06-16', 
      scheduledFor: null,
      audience: 'Premium Customers',
      metrics: { deliveryRate: 0, openRate: 0, responseRate: 0 }
    },
    { 
      id: 6, 
      name: 'Holiday Special Offer', 
      status: 'Draft', 
      sent: 0, 
      opened: 0, 
      response: 0, 
      createdAt: '2023-06-17', 
      scheduledFor: null,
      audience: 'All Customers',
      metrics: { deliveryRate: 0, openRate: 0, responseRate: 0 }
    },
    { 
      id: 7, 
      name: 'Webinar Invitation', 
      status: 'Paused', 
      sent: 1250, 
      opened: 980, 
      response: 325, 
      createdAt: '2023-06-08', 
      scheduledFor: '2023-06-09',
      audience: 'Business Subscribers',
      metrics: { deliveryRate: 95, openRate: 78, responseRate: 26 }
    },
    { 
      id: 8, 
      name: 'Loyalty Program Update', 
      status: 'Completed', 
      sent: 3450, 
      opened: 2980, 
      response: 1560, 
      createdAt: '2023-06-01', 
      scheduledFor: '2023-06-02',
      audience: 'Loyalty Members',
      metrics: { deliveryRate: 99, openRate: 86, responseRate: 45 }
    }
  ];
  
  // Filter campaigns based on active filter
  const filteredCampaigns = activeFilter === 'all' 
    ? campaignData 
    : campaignData.filter(campaign => 
        campaign.status.toLowerCase() === activeFilter.toLowerCase()
      );
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Toggle new campaign modal
  const toggleNewCampaignModal = () => {
    setShowNewCampaignModal(!showNewCampaignModal);
  };

  // Status badges styling helper
  const getStatusBadgeClasses = (status) => {
    switch(status) {
      case 'Active':
        return 'bg-green-500/20 text-green-300';
      case 'Scheduled':
        return 'bg-blue-500/20 text-blue-300';
      case 'Completed':
        return 'bg-gray-500/20 text-gray-300';
      case 'Draft':
        return 'bg-yellow-500/20 text-yellow-300';
      case 'Paused':
        return 'bg-orange-500/20 text-orange-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="ml-4">
              <h1 className="text-xl font-bold text-white">WhatsBulk</h1>
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
            <Link to="/campaigns" className="text-white flex items-center px-4 py-3 rounded-lg bg-green-800/40 group">
              <CampaignsIcon />
              <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Campaigns</span>
            </Link>
            
            {/* Contacts */}
            <Link to="/contacts" className="text-green-100 flex items-center px-4 py-3 rounded-lg hover:bg-green-800/20 group">
              <ContactsIcon />
              <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Contacts</span>
            </Link>
            
            {/* Templates */}
            <Link to="/templates" className="text-green-100 flex items-center px-4 py-3 rounded-lg hover:bg-green-800/20 group">
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Campaigns</h1>
              <p className="text-green-200 mt-2">Create, schedule, and manage your WhatsApp campaigns</p>
            </div>
            <button
              onClick={toggleNewCampaignModal}
              className="mt-4 md:mt-0 flex items-center bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Campaign
            </button>
          </div>
          
          {/* Campaign Filters and Search */}
          <div className="mb-8 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 p-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              {/* Filters */}
              <div className="flex space-x-2 mb-4 md:mb-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                <button 
                  onClick={() => setActiveFilter('all')} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'all' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-green-900/40 text-green-200 hover:bg-green-800/40'
                  }`}
                >
                  All Campaigns
                </button>
                <button 
                  onClick={() => setActiveFilter('active')} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'active' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-green-900/40 text-green-200 hover:bg-green-800/40'
                  }`}
                >
                  Active
                </button>
                <button 
                  onClick={() => setActiveFilter('scheduled')} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'scheduled' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-green-900/40 text-green-200 hover:bg-green-800/40'
                  }`}
                >
                  Scheduled
                </button>
                <button 
                  onClick={() => setActiveFilter('draft')} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'draft' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-green-900/40 text-green-200 hover:bg-green-800/40'
                  }`}
                >
                  Drafts
                </button>
                <button 
                  onClick={() => setActiveFilter('completed')} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    activeFilter === 'completed' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-green-900/40 text-green-200 hover:bg-green-800/40'
                  }`}
                >
                  Completed
                </button>
              </div>
              
              {/* Search */}
              <div className="flex w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon />
                  </div>
                  <input 
                    type="text" 
                    className="bg-green-900/20 border border-green-800/30 text-white placeholder-green-300 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Search campaigns..." 
                  />
                </div>
                <button className="ml-2 p-2 bg-green-900/40 hover:bg-green-800/40 rounded-lg text-white">
                  <FilterIcon />
                </button>
              </div>
            </div>
          </div>
          
          {/* Campaigns List */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-green-900/30 text-left text-green-300 text-sm">
                    <th className="px-6 py-4 font-medium">Campaign Name</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Audience</th>
                    <th className="px-6 py-4 font-medium">Sent</th>
                    <th className="px-6 py-4 font-medium">Open Rate</th>
                    <th className="px-6 py-4 font-medium">Response Rate</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-800/20">
                  {filteredCampaigns.map((campaign) => (
                    <tr key={campaign.id} className="text-white hover:bg-green-900/20">
                      <td className="px-6 py-4 font-medium">{campaign.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClasses(campaign.status)}`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-green-200">{campaign.audience}</td>
                      <td className="px-6 py-4">{campaign.sent.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        {campaign.metrics.openRate > 0 ? (
                          <div className="flex items-center">
                            <div className="w-16 bg-green-900/40 rounded-full h-2 mr-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full" 
                                style={{ width: `${campaign.metrics.openRate}%` }}
                              ></div>
                            </div>
                            <span>{campaign.metrics.openRate}%</span>
                          </div>
                        ) : '—'}
                      </td>
                      <td className="px-6 py-4">
                        {campaign.metrics.responseRate > 0 ? (
                          <div className="flex items-center">
                            <div className="w-16 bg-green-900/40 rounded-full h-2 mr-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full" 
                                style={{ width: `${campaign.metrics.responseRate}%` }}
                              ></div>
                            </div>
                            <span>{campaign.metrics.responseRate}%</span>
                          </div>
                        ) : '—'}
                      </td>
                      <td className="px-6 py-4 text-green-200">
                        {campaign.scheduledFor ? campaign.scheduledFor : '—'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="p-1 text-green-300 hover:text-green-100 rounded-md" title="View Details">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button className="p-1 text-green-300 hover:text-green-100 rounded-md" title="Edit">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>
</button>
<button className="p-1 text-green-300 hover:text-green-100 rounded-md" title="Duplicate">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
</button>
<button className="p-1 text-red-400 hover:text-red-300 rounded-md" title="Delete">
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

{filteredCampaigns.length === 0 && (
  <div className="text-center py-12">
    <div className="bg-green-900/20 inline-block p-3 rounded-full mb-4">
      <CampaignsIcon />
    </div>
    <h3 className="text-xl font-medium text-white mb-2">No campaigns found</h3>
    <p className="text-green-200 mb-6">
      {activeFilter === 'all' 
        ? "You haven't created any campaigns yet" 
        : `You don't have any ${activeFilter} campaigns`}
    </p>
    <button
      onClick={toggleNewCampaignModal}
      className="inline-flex items-center bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg transition-colors font-medium"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      Create Campaign
    </button>
  </div>
)}
</div>

{/* Pagination */}
{filteredCampaigns.length > 0 && (
  <div className="flex items-center justify-between mt-6 text-white">
    <div>
      <p className="text-sm text-green-200">
        Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredCampaigns.length}</span> of <span className="font-medium">{filteredCampaigns.length}</span> campaigns
      </p>
    </div>
    <div className="flex space-x-2">
      <button className="px-3 py-1 bg-green-900/30 rounded-md hover:bg-green-800/30 disabled:opacity-50" disabled>
        Previous
      </button>
      <button className="px-3 py-1 bg-green-600 rounded-md">1</button>
      <button className="px-3 py-1 bg-green-900/30 rounded-md hover:bg-green-800/30 disabled:opacity-50" disabled>
        Next
      </button>
    </div>
  </div>
)}

</div>
</main>

{/* New Campaign Modal */}
{showNewCampaignModal && (
  <div className="fixed inset-0 z-50 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      <div 
        className="inline-block align-bottom bg-gradient-to-b from-green-950 to-emerald-950 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-green-800/30"
      >
        <div className="px-6 pt-5 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">Create New Campaign</h3>
            <button 
              onClick={toggleNewCampaignModal}
              className="text-green-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-6">
            {/* Campaign Name */}
            <div>
              <label htmlFor="campaign-name" className="block text-sm font-medium text-green-200 mb-1">
                Campaign Name
              </label>
              <input
                type="text"
                id="campaign-name"
                className="bg-green-900/20 border border-green-800/30 text-white rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Enter campaign name"
              />
            </div>
            
            {/* Audience Selection */}
            <div>
              <label htmlFor="audience" className="block text-sm font-medium text-green-200 mb-1">
                Select Audience
              </label>
              <select
                id="audience"
                className="bg-green-900/20 border border-green-800/30 text-white rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              >
                <option>All Contacts</option>
                <option>Premium Customers</option>
                <option>Newsletter Subscribers</option>
                <option>Regular Customers</option>
                <option>Summer Shoppers</option>
              </select>
              <p className="mt-1 text-sm text-green-300">
                2,854 contacts will receive this campaign
              </p>
            </div>
            
            {/* Template Selection */}
            <div>
              <label htmlFor="template" className="block text-sm font-medium text-green-200 mb-1">
                Select Template
              </label>
              <select
                id="template"
                className="bg-green-900/20 border border-green-800/30 text-white rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              >
                <option>Special Promotion</option>
                <option>Product Announcement</option>
                <option>Newsletter</option>
                <option>Event Invitation</option>
                <option>Customer Survey</option>
              </select>
            </div>
            
            {/* Schedule */}
            <div>
              <label className="block text-sm font-medium text-green-200 mb-1">
                Schedule
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    id="send-now"
                    name="schedule"
                    type="radio"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-800/30 bg-green-900/20"
                    defaultChecked
                  />
                  <label htmlFor="send-now" className="ml-2 block text-sm text-white">
                    Send immediately
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="schedule-later"
                    name="schedule"
                    type="radio"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-800/30 bg-green-900/20"
                  />
                  <label htmlFor="schedule-later" className="ml-2 block text-sm text-white">
                    Schedule for later
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-900/20 px-6 py-4 flex justify-end space-x-3">
          <button
            onClick={toggleNewCampaignModal}
            className="bg-transparent hover:bg-green-800/30 text-white py-2 px-4 rounded-md border border-green-700"
          >
            Cancel
          </button>
          <button
            className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md font-medium shadow-lg hover:shadow-green-500/25"
          >
            Save as Draft
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md font-medium shadow-lg hover:shadow-blue-500/25"
          >
            Create Campaign
          </button>
        </div>
      </div>
    </div>
  </div>
)}
</div>
);
};

export default Campaigns;