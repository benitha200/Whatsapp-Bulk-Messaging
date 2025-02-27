import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

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
  const [showMobileFilters, setShowMobileFilters] = useState(false);

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

  // Toggle mobile filters
  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  // Status badges styling helper
  const getStatusBadgeClasses = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-500/20 text-emerald-300';
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

  // Card component for mobile campaign view
  const CampaignCard = ({ campaign }) => (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg shadow-md p-4 border border-emerald-800/20 mb-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-white font-medium">{campaign.name}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClasses(campaign.status)}`}>
          {campaign.status}
        </span>
      </div>
      <div className="text-emerald-200 text-sm mb-2">Audience: {campaign.audience}</div>
      <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
        <div>
          <div className="text-emerald-300">Sent</div>
          <div className="text-white">{campaign.sent.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-emerald-300">Date</div>
          <div className="text-white">{campaign.scheduledFor || '—'}</div>
        </div>
        <div>
          <div className="text-emerald-300">Open Rate</div>
          <div className="text-white flex items-center">
            {campaign.metrics.openRate > 0 ? (
              <>
                <div className="w-12 bg-emerald-900/40 rounded-full h-2 mr-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{ width: `${campaign.metrics.openRate}%` }}
                  ></div>
                </div>
                <span>{campaign.metrics.openRate}%</span>
              </>
            ) : '—'}
          </div>
        </div>
        <div>
          <div className="text-emerald-300">Response Rate</div>
          <div className="text-white flex items-center">
            {campaign.metrics.responseRate > 0 ? (
              <>
                <div className="w-12 bg-emerald-900/40 rounded-full h-2 mr-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${campaign.metrics.responseRate}%` }}
                  ></div>
                </div>
                <span>{campaign.metrics.responseRate}%</span>
              </>
            ) : '—'}
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-2 border-t border-emerald-800/20 pt-3">
        <button className="p-1 text-emerald-300 hover:text-emerald-100 rounded-md" title="View Details">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
        <button className="p-1 text-emerald-300 hover:text-emerald-100 rounded-md" title="Edit">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <button className="p-1 text-emerald-300 hover:text-emerald-100 rounded-md" title="Duplicate">
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
    </div>
  );

  return (
    <Layout>
      <div className="px-4 py-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Campaigns</h1>
            <p className="text-emerald-200 mt-1 md:mt-2">Create, schedule, and manage your WhatsApp campaigns</p>
          </div>
          <button
            onClick={toggleNewCampaignModal}
            className="mt-4 sm:mt-0 flex items-center bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-4 rounded-lg transition-colors font-medium shadow-lg hover:shadow-emerald-500/25 w-full sm:w-auto justify-center sm:justify-start"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            New Campaign
          </button>
        </div>

        {/* Campaign Filters and Search */}
        <div className="mb-6 md:mb-8 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 p-3 md:p-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            {/* Mobile Dropdown for Filters */}
            <div className="md:hidden w-full mb-3">
              <button 
                onClick={toggleMobileFilters}
                className="flex items-center justify-between w-full px-4 py-2 bg-emerald-900/40 rounded-lg text-white"
              >
                <span>
                  <FilterIcon /> 
                </span>
                <span className="mx-2 flex-1 text-left">
                  {activeFilter === 'all' ? 'All Campaigns' : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
                </span>
                <svg 
                  className={`w-5 h-5 transition-transform ${showMobileFilters ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showMobileFilters && (
                <div className="mt-2 bg-emerald-950 rounded-lg border border-emerald-800/30 shadow-lg">
                  <button
                    onClick={() => {
                      setActiveFilter('all');
                      setShowMobileFilters(false);
                    }}
                    className={`px-4 py-2 w-full text-left rounded-t-lg ${
                      activeFilter === 'all' ? 'bg-emerald-600 text-white' : 'text-emerald-200 hover:bg-emerald-800/40'
                    }`}
                  >
                    All Campaigns
                  </button>
                  <button
                    onClick={() => {
                      setActiveFilter('active');
                      setShowMobileFilters(false);
                    }}
                    className={`px-4 py-2 w-full text-left ${
                      activeFilter === 'active' ? 'bg-emerald-600 text-white' : 'text-emerald-200 hover:bg-emerald-800/40'
                    }`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => {
                      setActiveFilter('scheduled');
                      setShowMobileFilters(false);
                    }}
                    className={`px-4 py-2 w-full text-left ${
                      activeFilter === 'scheduled' ? 'bg-emerald-600 text-white' : 'text-emerald-200 hover:bg-emerald-800/40'
                    }`}
                  >
                    Scheduled
                  </button>
                  <button
                    onClick={() => {
                      setActiveFilter('draft');
                      setShowMobileFilters(false);
                    }}
                    className={`px-4 py-2 w-full text-left ${
                      activeFilter === 'draft' ? 'bg-emerald-600 text-white' : 'text-emerald-200 hover:bg-emerald-800/40'
                    }`}
                  >
                    Drafts
                  </button>
                  <button
                    onClick={() => {
                      setActiveFilter('completed');
                      setShowMobileFilters(false);
                    }}
                    className={`px-4 py-2 w-full text-left rounded-b-lg ${
                      activeFilter === 'completed' ? 'bg-emerald-600 text-white' : 'text-emerald-200 hover:bg-emerald-800/40'
                    }`}
                  >
                    Completed
                  </button>
                </div>
              )}
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex space-x-2 mb-4 md:mb-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${activeFilter === 'all'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-900/40 text-emerald-200 hover:bg-emerald-800/40'
                  }`}
              >
                All Campaigns
              </button>
              <button
                onClick={() => setActiveFilter('active')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${activeFilter === 'active'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-900/40 text-emerald-200 hover:bg-emerald-800/40'
                  }`}
              >
                Active
              </button>
              <button
                onClick={() => setActiveFilter('scheduled')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${activeFilter === 'scheduled'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-900/40 text-emerald-200 hover:bg-emerald-800/40'
                  }`}
              >
                Scheduled
              </button>
              <button
                onClick={() => setActiveFilter('draft')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${activeFilter === 'draft'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-900/40 text-emerald-200 hover:bg-emerald-800/40'
                  }`}
              >
                Drafts
              </button>
              <button
                onClick={() => setActiveFilter('completed')}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${activeFilter === 'completed'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-900/40 text-emerald-200 hover:bg-emerald-800/40'
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
                  className="bg-emerald-900/20 border border-emerald-800/30 text-white placeholder-emerald-300 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  placeholder="Search campaigns..."
                />
              </div>
              <button className="ml-2 p-2 bg-emerald-900/40 hover:bg-emerald-800/40 rounded-lg text-white md:block hidden">
                <FilterIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Campaigns List - Desktop */}
        <div className="hidden md:block bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-900/30 text-left text-emerald-300 text-sm">
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
              <tbody className="divide-y divide-emerald-800/20">
                {filteredCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="text-white hover:bg-emerald-900/20">
                    <td className="px-6 py-4 font-medium">{campaign.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClasses(campaign.status)}`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-emerald-200">{campaign.audience}</td>
                    <td className="px-6 py-4">{campaign.sent.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      {campaign.metrics.openRate > 0 ? (
                        <div className="flex items-center">
                        <div className="w-24 bg-emerald-900/40 rounded-full h-2 mr-2">
                          <div
                            className="bg-emerald-500 h-2 rounded-full"
                            style={{ width: `${campaign.metrics.openRate}%` }}
                          ></div>
                        </div>
                        <span>{campaign.metrics.openRate}%</span>
                      </div>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {campaign.metrics.responseRate > 0 ? (
                      <div className="flex items-center">
                        <div className="w-24 bg-emerald-900/40 rounded-full h-2 mr-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${campaign.metrics.responseRate}%` }}
                          ></div>
                        </div>
                        <span>{campaign.metrics.responseRate}%</span>
                      </div>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td className="px-6 py-4">{campaign.scheduledFor || '—'}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-emerald-300 hover:text-emerald-100 rounded-md" title="View Details">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-1 text-emerald-300 hover:text-emerald-100 rounded-md" title="Edit">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="p-1 text-emerald-300 hover:text-emerald-100 rounded-md" title="Duplicate">
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
      </div>

      {/* Campaigns List - Mobile */}
      <div className="md:hidden">
        {filteredCampaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCampaigns.length === 0 && (
        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-emerald-900/40 rounded-full flex items-center justify-center mb-4">
            <CampaignsIcon />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No campaigns found</h3>
          <p className="text-emerald-200 mb-6">
            {activeFilter === 'all'
              ? "You haven't created any campaigns yet."
              : `You don't have any ${activeFilter.toLowerCase()} campaigns.`}
          </p>
          <button
            onClick={toggleNewCampaignModal}
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-4 rounded-lg transition-colors font-medium shadow-lg hover:shadow-emerald-500/25"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create your first campaign
          </button>
        </div>
      )}

      {/* New Campaign Modal */}
      {showNewCampaignModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-emerald-950 rounded-xl shadow-2xl border border-emerald-800/30 w-full max-w-lg">
            <div className="p-6 border-b border-emerald-800/30">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Create New Campaign</h2>
                <button onClick={toggleNewCampaignModal} className="text-emerald-200 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="campaign-name" className="block text-emerald-200 mb-2">Campaign Name</label>
                <input
                  type="text"
                  id="campaign-name"
                  className="w-full bg-emerald-900/40 border border-emerald-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="Enter campaign name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="campaign-audience" className="block text-emerald-200 mb-2">Audience</label>
                <select
                  id="campaign-audience"
                  className="w-full bg-emerald-900/40 border border-emerald-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="">Select an audience</option>
                  <option value="all-customers">All Customers</option>
                  <option value="new-customers">New Customers</option>
                  <option value="regular-customers">Regular Customers</option>
                  <option value="premium-customers">Premium Customers</option>
                  <option value="newsletter-subscribers">Newsletter Subscribers</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="campaign-template" className="block text-emerald-200 mb-2">Message Template</label>
                <select
                  id="campaign-template"
                  className="w-full bg-emerald-900/40 border border-emerald-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="">Select a template</option>
                  <option value="promotional">Promotional Message</option>
                  <option value="announcement">Announcement</option>
                  <option value="feedback">Feedback Request</option>
                  <option value="newsletter">Newsletter</option>
                  <option value="special-offer">Special Offer</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="campaign-date" className="block text-emerald-200 mb-2">Schedule Date</label>
                <input
                  type="date"
                  id="campaign-date"
                  className="w-full bg-emerald-900/40 border border-emerald-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>
            <div className="p-6 border-t border-emerald-800/30 flex justify-end space-x-3">
              <button
                onClick={toggleNewCampaignModal}
                className="px-4 py-2 bg-emerald-900/40 hover:bg-emerald-800/40 text-emerald-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors font-medium shadow-lg hover:shadow-emerald-500/25"
              >
                Create
              </button>
              <button
                className="px-4 py-2 bg-emerald-900/40 hover:bg-emerald-800/40 text-emerald-200 rounded-lg transition-colors"
              >
                Save as Draft
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </Layout>
);
};

export default Campaigns;