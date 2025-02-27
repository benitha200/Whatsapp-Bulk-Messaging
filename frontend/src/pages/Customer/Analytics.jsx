import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Reusing the icons from the dashboard
const DashboardIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const CampaignsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ContactsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const TemplatesIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>;
const AnalyticsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const SettingsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const HelpIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CalendarIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const DownloadIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;

const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedDateRange, setSelectedDateRange] = useState('last30Days');
  const [selectedCampaign, setSelectedCampaign] = useState('all');
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Demo data for analytics
  const overviewStats = [
    { name: 'Messages Sent', value: '54,872', change: '+8.2%', timeframe: 'vs previous period' },
    { name: 'Delivery Rate', value: '98.6%', change: '+0.3%', timeframe: 'vs previous period' },
    { name: 'Open Rate', value: '72.4%', change: '+4.7%', timeframe: 'vs previous period' },
    { name: 'Response Rate', value: '32.9%', change: '+1.5%', timeframe: 'vs previous period' }
  ];
  
  const campaignPerformance = [
    { id: 1, name: 'Summer Sale Promotion', sent: 8675, delivered: 8550, opened: 6120, responded: 2890, conversions: 456 },
    { id: 2, name: 'New Product Launch', sent: 12450, delivered: 12280, opened: 9240, responded: 4120, conversions: 890 },
    { id: 3, name: 'Customer Re-engagement', sent: 6540, delivered: 6490, opened: 4560, responded: 1230, conversions: 310 },
    { id: 4, name: 'Weekly Newsletter', sent: 18790, delivered: 18450, opened: 12340, responded: 2870, conversions: 520 },
    { id: 5, name: 'Holiday Special', sent: 8417, delivered: 8300, opened: 5980, responded: 2350, conversions: 680 }
  ];
  
  const engagementByTime = [
    { hour: '6AM - 9AM', openRate: 62, responseRate: 28 },
    { hour: '9AM - 12PM', openRate: 78, responseRate: 42 },
    { hour: '12PM - 3PM', openRate: 65, responseRate: 31 },
    { hour: '3PM - 6PM', openRate: 71, responseRate: 39 },
    { hour: '6PM - 9PM', openRate: 83, responseRate: 48 },
    { hour: '9PM - 12AM', openRate: 68, responseRate: 29 }
  ];
  
  const topPerformingMessages = [
    { id: 1, content: 'Limited time offer: 30% off your next purchase with code SUMMER30', openRate: 86, responseRate: 52, conversionRate: 12 },
    { id: 2, content: 'Hey [Name], we miss you! Here`s a special discount just for you.', openRate: 79, responseRate: 43, conversionRate: 9 },
    { id: 3, content: 'Your exclusive preview of our new collection is ready. Reply to get early access!', openRate: 92, responseRate: 67, conversionRate: 18 },
    { id: 4, content: 'Quick survey: How was your recent experience? Reply with 1-5 stars.', openRate: 74, responseRate: 58, conversionRate: 0 }
  ];
  
  // Date range options
  const dateRanges = [
    { id: 'today', label: 'Today' },
    { id: 'yesterday', label: 'Yesterday' },
    { id: 'last7Days', label: 'Last 7 Days' },
    { id: 'last30Days', label: 'Last 30 Days' },
    { id: 'thisMonth', label: 'This Month' },
    { id: 'lastMonth', label: 'Last Month' },
    { id: 'custom', label: 'Custom Range' }
  ];
  
  // Campaign options
  const campaignOptions = [
    { id: 'all', label: 'All Campaigns' },
    ...campaignPerformance.map(campaign => ({ id: campaign.id.toString(), label: campaign.name }))
  ];
  
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
            <Link to="/customer/templates" className="text-green-100 flex items-center px-4 py-3 rounded-lg hover:bg-green-800/20 group">
              <TemplatesIcon />
              <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Templates</span>
            </Link>
            
            {/* Analytics */}
            <Link to="/analytics" className="text-white flex items-center px-4 py-3 rounded-lg bg-green-800/40 group">
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
          {/* Analytics Header with Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white">Campaign Analytics</h1>
                <p className="text-green-200 mt-2">Track and measure the performance of your WhatsApp campaigns</p>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <div className="flex items-center space-x-2 bg-green-900/40 rounded-lg px-4 py-2 border border-green-800/30">
                    <CalendarIcon />
                    <select 
                      className="bg-transparent text-white focus:outline-none"
                      value={selectedDateRange}
                      onChange={(e) => setSelectedDateRange(e.target.value)}
                    >
                      {dateRanges.map(range => (
                        <option key={range.id} value={range.id} className="bg-green-900 text-white">
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center space-x-2 bg-green-900/40 rounded-lg px-4 py-2 border border-green-800/30">
                    <CampaignsIcon />
                    <select 
                      className="bg-transparent text-white focus:outline-none"
                      value={selectedCampaign}
                      onChange={(e) => setSelectedCampaign(e.target.value)}
                    >
                      {campaignOptions.map(campaign => (
                        <option key={campaign.id} value={campaign.id} className="bg-green-900 text-white">
                          {campaign.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button className="flex items-center justify-center space-x-2 bg-green-700 hover:bg-green-600 rounded-lg px-4 py-2 text-white font-medium transition-colors">
                  <DownloadIcon />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {overviewStats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-800/20">
                <p className="text-green-300 text-sm font-medium mb-1">{stat.name}</p>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <div className="flex items-center">
                    <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                    <span className="text-green-300 text-xs ml-1">{stat.timeframe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Campaign Performance Table */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden mb-8">
            <div className="px-6 py-5 border-b border-green-800/30">
              <h2 className="text-xl font-semibold text-white">Campaign Performance</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-green-300 text-sm">
                      <th className="pb-3 font-medium">Campaign Name</th>
                      <th className="pb-3 font-medium">Sent</th>
                      <th className="pb-3 font-medium">Delivered</th>
                      <th className="pb-3 font-medium">Opened</th>
                      <th className="pb-3 font-medium">Responded</th>
                      <th className="pb-3 font-medium">Conversions</th>
                      <th className="pb-3 font-medium">Open Rate</th>
                      <th className="pb-3 font-medium">Response Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaignPerformance.map((campaign) => (
                      <tr key={campaign.id} className="border-t border-green-800/20 text-white">
                        <td className="py-4">{campaign.name}</td>
                        <td className="py-4">{campaign.sent.toLocaleString()}</td>
                        <td className="py-4">{campaign.delivered.toLocaleString()}</td>
                        <td className="py-4">{campaign.opened.toLocaleString()}</td>
                        <td className="py-4">{campaign.responded.toLocaleString()}</td>
                        <td className="py-4">{campaign.conversions.toLocaleString()}</td>
                        <td className="py-4">{((campaign.opened / campaign.delivered) * 100).toFixed(1)}%</td>
                        <td className="py-4">{((campaign.responded / campaign.opened) * 100).toFixed(1)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Engagement Charts & Top Messages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Engagement by Time of Day */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-green-800/30">
                <h2 className="text-xl font-semibold text-white">Engagement by Time of Day</h2>
              </div>
              <div className="p-6">
                <div className="h-64 relative">
                  {/* Chart visualization would go here - using a placeholder with bars */}
                  <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-around">
                    {engagementByTime.map((timeSlot, index) => (
                      <div key={index} className="flex flex-col items-center w-1/6">
                        <div className="w-12 flex flex-col items-center space-y-1">
                          {/* Open rate bar */}
                          <div 
                            className="w-6 bg-green-500/70 rounded-t" 
                            style={{ height: `${timeSlot.openRate * 0.48}px` }}
                          ></div>
                          {/* Response rate bar */}
                          <div 
                            className="w-6 bg-blue-500/70 rounded-t" 
                            style={{ height: `${timeSlot.responseRate * 0.48}px` }}
                          ></div>
                        </div>
                        <span className="text-green-200 text-xs mt-2 text-center">{timeSlot.hour}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 right-4 flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500/70 rounded-full mr-2"></div>
                      <span className="text-green-200 text-xs">Open Rate</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500/70 rounded-full mr-2"></div>
                      <span className="text-green-200 text-xs">Response Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Top Performing Messages */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-green-800/30">
                <h2 className="text-xl font-semibold text-white">Top Performing Messages</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {topPerformingMessages.map((message) => (
                    <div key={message.id} className="p-4 border border-green-800/20 rounded-lg bg-green-900/10">
                      <p className="text-white mb-3">{message.content}</p>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <p className="text-green-300 text-xs">Open Rate</p>
                          <p className="text-white font-semibold">{message.openRate}%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-green-300 text-xs">Response Rate</p>
                          <p className="text-white font-semibold">{message.responseRate}%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-green-300 text-xs">Conversion</p>
                          <p className="text-white font-semibold">{message.conversionRate}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Audience Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Device Distribution */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-green-800/30">
                <h2 className="text-xl font-semibold text-white">Device Distribution</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col items-center justify-center h-64">
                  {/* Donut chart would go here - using placeholder */}
                  <div className="w-32 h-32 rounded-full border-8 border-green-600/70 relative">
                    <div className="absolute inset-0 border-t-8 border-r-8 border-blue-500/70 rounded-full" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}></div>
                    <div className="absolute inset-0 border-l-8 border-b-8 border-purple-500/70 rounded-full" style={{ clipPath: 'polygon(0 50%, 0 100%, 50% 100%)' }}></div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-600/70 rounded-full mr-2"></div>
                        <span className="text-green-200 text-sm">iOS (68%)</span>
                      </div>
                      <span className="text-white font-medium">37,312</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500/70 rounded-full mr-2"></div>
                        <span className="text-green-200 text-sm">Android (25%)</span>
                      </div>
                      <span className="text-white font-medium">13,718</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500/70 rounded-full mr-2"></div>
                        <span className="text-green-200 text-sm">Other (7%)</span>
                      </div>
                      <span className="text-white font-medium">3,842</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Geographic Distribution */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-green-800/30">
                <h2 className="text-xl font-semibold text-white">Geographic Distribution</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4 h-64 overflow-y-auto">
                  {[
                    { country: 'United States', percentage: 42, count: 23047 },
                    { country: 'India', percentage: 18, count: 9877 },
                    { country: 'Brazil', percentage: 12, count: 6585 },
                    { country: 'United Kingdom', percentage: 8, count: 4390 },
                    { country: 'Germany', percentage: 6, count: 3292 },
                    { country: 'Canada', percentage: 5, count: 2744 },
                    { country: 'Australia', percentage: 4, count: 2195 },
                    { country: 'Others', percentage: 5, count: 2742 }
                  ].map((region, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">{region.country}</span>
                        <span className="text-green-300 text-sm">{region.percentage}%</span>
                      </div>
                      <div className="w-full bg-green-900/30 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full" 
                          style={{ width: `${region.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-right">
                        <span className="text-green-200 text-xs">{region.count.toLocaleString()} users</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Engagement by Age Group */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-green-800/30">
                <h2 className="text-xl font-semibold text-white">Engagement by Age Group</h2>
              </div>
              <div className="p-6">
                <div className="h-64 relative">
                  {/* Horizontal bar chart placeholder */}
                  {[
                    { age: '18-24', openRate: 78, responseRate: 36 },
                    { age: '25-34', openRate: 86, responseRate: 48 },
                    { age: '35-44', openRate: 72, responseRate: 38 },
                    { age: '45-54', openRate: 64, responseRate: 27 },
                    { age: '55+', openRate: 57, responseRate: 19 }
                  ].map((group, index) => (
                    <div key={index} className="mb-5 relative">
                      <div className="text-green-200 text-sm mb-1">{group.age}</div>
                      <div className="flex h-6 items-center">
                        <div 
                          className="bg-green-500/70 h-4 rounded-l"
                          style={{ width: `${group.openRate}%` }}
                        ></div>
                        <div 
                          className="bg-blue-500/70 h-4 rounded-r"
                          style={{ width: `${group.responseRate}%` }}
                        ></div>
                      </div>
                      <div className="absolute right-0 top-0 text-white text-xs">
                        {group.openRate}% / {group.responseRate}%
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center space-x-6">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500/70 rounded-full mr-2"></div>
                      <span className="text-green-200 text-xs">Open Rate</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500/70 rounded-full mr-2"></div>
                      <span className="text-green-200 text-xs">Response Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Response Time Analysis & Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Response Time Analysis */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-green-800/30">
                <h2 className="text-xl font-semibold text-white">Response Time Analysis</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-200">Average First Response Time</span>
                      <span className="text-white font-medium">8 minutes</span>
                    </div>
                    <div className="w-full bg-green-900/30 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="mt-1 text-right">
                      <span className="text-green-300 text-xs">Target: 15 minutes</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-200">Average Resolution Time</span>
                      <span className="text-white font-medium">3.2 hours</span>
                    </div>
                    <div className="w-full bg-green-900/30 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                    <div className="mt-1 text-right">
                      <span className="text-green-300 text-xs">Target: 4 hours</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-200">Response Rate</span>
                      <span className="text-white font-medium">84.6%</span>
                    </div>
                    <div className="w-full bg-green-900/30 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="mt-1 text-right">
                      <span className="text-green-300 text-xs">Target: 90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI Recommendations */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-green-800/30 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">AI Recommendations</h2>
                <span className="bg-green-700/50 text-green-200 px-2 py-1 rounded text-xs">Updated Today</span>
              </div>
              <div className="p-6">
                <div className="space-y-5">
                  <div className="p-4 border border-green-700/30 rounded-lg bg-green-800/10">
                    <h3 className="text-green-300 font-medium mb-1">Optimal Sending Time</h3>
                    <p className="text-white text-sm">Your audience engagement peaks between 6PM-9PM. Consider scheduling more campaigns during this time frame to improve open rates.</p>
                  </div>
                  
                  <div className="p-4 border border-green-700/30 rounded-lg bg-green-800/10">
                    <h3 className="text-green-300 font-medium mb-1">Message Content</h3>
                    <p className="text-white text-sm">Messages with personalization and clear calls-to-action are performing 32% better. Use more personalized variables and action-oriented language.</p>
                  </div>
                  
                  <div className="p-4 border border-green-700/30 rounded-lg bg-green-800/10">
                    <h3 className="text-green-300 font-medium mb-1">Audience Targeting</h3>
                    <p className="text-white text-sm">The 25-34 age group shows highest engagement. Segment your campaigns to target this demographic more specifically.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <footer className="mt-auto py-6 border-t border-green-800/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-green-300 text-sm">© 2025 WhatsBulk. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-green-300 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="text-green-300 hover:text-white text-sm">Terms of Service</a>
                <a href="#" className="text-green-300 hover:text-white text-sm">Help Center</a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Analytics;