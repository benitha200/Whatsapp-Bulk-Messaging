import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import icons (using the same SVG definitions from your code)
const DashboardIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const CampaignsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ContactsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const TemplatesIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>;
const AnalyticsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const SettingsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const HelpIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  
  // Extract the current path without the leading slash
  const currentPath = location.pathname.substring(1);
  
  // Determine active page based on current path
  const getActivePage = (path) => {
    if (path === "") return "dashboard"; // Default to dashboard for root path
    return path.split("/")[0]; // Get the first segment of the path
  };
  
  const activePage = getActivePage(currentPath);
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Navigation items for sidebar
  const navItems = [
    { name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard', id: 'dashboard' },
    { name: 'Campaigns', icon: <CampaignsIcon />, path: '/campaigns', id: 'campaigns' },
    { name: 'Contacts', icon: <ContactsIcon />, path: '/contacts', id: 'contacts' },
    { name: 'Templates', icon: <TemplatesIcon />, path: '/customer/templates', id: 'templates' },
    { name: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics', id: 'analytics' }
  ];
  
  // Settings and support items
  const settingsItems = [
    { name: 'Settings', icon: <SettingsIcon />, path: '/settings', id: 'settings' },
    { name: 'Help & Support', icon: <HelpIcon />, path: '/help', id: 'help' }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-950">
      {/* Header */}
      <header className="bg-emerald-900/40 backdrop-blur-sm border-b border-emerald-800/30 fixed w-full z-10">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-white p-2 rounded-md hover:bg-emerald-800/30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="ml-4">
              <span className="text-2xl font-bold text-white">WhatsBulk</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="text-white p-2 rounded-md hover:bg-emerald-800/30 mr-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="relative">
              <button className="flex items-center text-white hover:bg-emerald-800/30 rounded-md p-2">
                <div className="h-8 w-8 rounded-full bg-emerald-700 flex items-center justify-center text-white mr-2">
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
        className={`fixed z-20 h-full top-16 left-0 pt-6 flex lg:flex flex-shrink-0 flex-col bg-emerald-900/30 backdrop-blur-md border-r border-emerald-800/30 transition-width duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="relative flex-1 flex flex-col min-h-0 overflow-y-auto">
          <div className="flex-1 px-2 space-y-1">
            {/* Main Navigation */}
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`text-emerald-100 flex items-center px-4 py-3 rounded-lg ${
                  activePage === item.id 
                    ? 'bg-emerald-800/40 text-white' 
                    : 'hover:bg-emerald-800/20'
                } group`}
              >
                {item.icon}
                <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>{item.name}</span>
              </Link>
            ))}
            
            <div className="pt-4 mt-4 border-t border-emerald-800/30">
              {/* Settings and Support */}
              {settingsItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`text-emerald-100 flex items-center px-4 py-3 rounded-lg ${
                    activePage === item.id 
                      ? 'bg-emerald-800/40 text-white' 
                      : 'hover:bg-emerald-800/20'
                  } group`}
                >
                  {item.icon}
                  <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Upgrade Button */}
          {sidebarOpen && (
            <div className="p-4">
              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-4 rounded-lg transition-colors font-medium shadow-lg hover:shadow-emerald-500/25">
                Upgrade Plan
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className={`pt-16 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"} transition-all duration-300`}>
        {children}
        
        {/* Footer */}
        <footer className="w-full bg-emerald-950/80 backdrop-blur-sm py-6 border-t border-emerald-800/20 mt-8">
          <div className="px-4 md:px-6">
            <p className="text-emerald-200 text-center text-sm">© 2023 WhatsBulk. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Layout;