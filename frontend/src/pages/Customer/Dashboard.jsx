import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import icons (you would need to install react-icons or similar)
// This is a mockup - you'll need to replace with actual icons from your library
const DashboardIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const CampaignsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ContactsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const TemplatesIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>;
const AnalyticsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const SettingsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const HelpIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Demo data for dashboard widgets
  const campaignStats = [
    { name: 'Active Campaigns', value: '12', change: '+2', timeframe: 'from last week' },
    { name: 'Messages Sent', value: '24,521', change: '+12%', timeframe: 'from last month' },
    { name: 'Open Rate', value: '68%', change: '+5%', timeframe: 'from last campaign' },
    { name: 'Engagement', value: '42%', change: '+3%', timeframe: 'from previous average' }
  ];
  
  const recentCampaigns = [
    { id: 1, name: 'Summer Sale Promotion', status: 'Active', sent: 4521, opened: 3245, date: '2023-06-15' },
    { id: 2, name: 'New Product Launch', status: 'Scheduled', sent: 0, opened: 0, date: '2023-06-20' },
    { id: 3, name: 'Customer Feedback Survey', status: 'Completed', sent: 2150, opened: 1852, date: '2023-06-10' },
    { id: 4, name: 'Weekly Newsletter', status: 'Active', sent: 5200, opened: 3120, date: '2023-06-12' }
  ];
  
  const upcomingTasks = [
    { id: 1, name: 'Finalize Q3 campaign strategy', due: '2023-06-25', priority: 'High' },
    { id: 2, name: 'Update contact segments', due: '2023-06-18', priority: 'Medium' },
    { id: 3, name: 'Create new message templates', due: '2023-06-20', priority: 'Medium' },
    { id: 4, name: 'Review campaign analytics', due: '2023-06-17', priority: 'High' }
  ];
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
            <Link to="/dashboard" className="text-white flex items-center px-4 py-3 rounded-lg bg-green-800/40 group">
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
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Welcome back, John!</h1>
            <p className="text-green-200 mt-2">Here's what's happening with your campaigns today.</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {campaignStats.map((stat, index) => (
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
          
          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Campaigns */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-green-800/30">
                <h2 className="text-xl font-semibold text-white">Recent Campaigns</h2>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-green-300 text-sm">
                        <th className="pb-3 font-medium">Campaign</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Sent</th>
                        <th className="pb-3 font-medium">Opened</th>
                        <th className="pb-3 font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentCampaigns.map((campaign) => (
                        <tr key={campaign.id} className="border-t border-green-800/20 text-white">
                          <td className="py-4">{campaign.name}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              campaign.status === 'Active' ? 'bg-green-500/20 text-green-300' : 
                              campaign.status === 'Scheduled' ? 'bg-blue-500/20 text-blue-300' : 
                              'bg-gray-500/20 text-gray-300'
                            }`}>
                              {campaign.status}
                            </span>
                          </td>
                          <td className="py-4">{campaign.sent.toLocaleString()}</td>
                          <td className="py-4">{campaign.opened.toLocaleString()}</td>
                          <td className="py-4">{campaign.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6">
                  <Link to="/campaigns" className="text-green-400 hover:text-green-300 font-medium flex items-center">
                    View all campaigns <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Upcoming Tasks */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
              <div className="px-6 py-5 border-b border-green-800/30">
                <h2 className="text-xl font-semibold text-white">Upcoming Tasks</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {upcomingTasks.map((task) => (
                    <li key={task.id} className="p-4 border border-green-800/20 rounded-lg bg-green-900/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-medium">{task.name}</h3>
                          <p className="text-green-300 text-sm mt-1">Due: {task.due}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          task.priority === 'High' ? 'bg-red-500/20 text-red-300' : 
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to="/tasks" className="text-green-400 hover:text-green-300 font-medium flex items-center">
                    View all tasks <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 bg-green-800/30 hover:bg-green-800/50 rounded-lg text-white font-medium transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className='text-green-700'>Create New Campaign</span>
              </button>
              <button className="flex items-center justify-center p-4 bg-green-800/30 hover:bg-green-800/50 rounded-lg text-white font-medium transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span className='text-green-700'>Add New Contacts</span>
              </button>
              <button className="flex items-center justify-center p-4 bg-green-800/30 hover:bg-green-800/50 rounded-lg text-white font-medium transition-colors">
                <svg className="w-5 h-5 mr-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className='text-green-700'>View Reports</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="w-full bg-green-950/80 backdrop-blur-sm py-6 border-t border-green-800/20 mt-8">
          <div className="px-4 md:px-6">
            <p className="text-green-200 text-center text-sm">© 2023 WhatsBulk. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;