import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Admin sidebar icons
const DashboardIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const UsersIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const SubscriptionsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const BillingIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const MessagingAPIIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const CampaignsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const TemplatesIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>;
const AnalyticsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const SupportTicketsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>;
const AuditLogIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const SettingsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const NotificationsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>;

const AdminLayout = ({ children, activePage = "dashboard" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  
  // Navigation items grouped by category
  const navGroups = [
    {
      name: "Management",
      items: [
        { name: 'Dashboard', icon: <DashboardIcon />, path: '/admin/dashboard', id: 'dashboard' },
        { name: 'User Management', icon: <UsersIcon />, path: '/admin/users', id: 'users' },
        { name: 'Subscriptions', icon: <SubscriptionsIcon />, path: '/admin/subscriptions', id: 'subscriptions' },
        { name: 'Billing & Payments', icon: <BillingIcon />, path: '/admin/billing', id: 'billing' },
      ]
    },
    {
      name: "Service",
      items: [
        { name: 'WhatsApp API', icon: <MessagingAPIIcon />, path: '/admin/api', id: 'api' },
        { name: 'Campaign Review', icon: <CampaignsIcon />, path: '/admin/campaigns', id: 'campaigns' },
        { name: 'Template Library', icon: <TemplatesIcon />, path: '/admin/templates', id: 'templates' },
        { name: 'Message Delivery', icon: <SupportTicketsIcon />, path: '/admin/delivery', id: 'delivery' },
      ]
    },
    {
      name: "Analytics",
      items: [
        { name: 'Usage Reports', icon: <AnalyticsIcon />, path: '/admin/reports', id: 'reports' },
        { name: 'User Metrics', icon: <AnalyticsIcon />, path: '/admin/metrics', id: 'metrics' },
        { name: 'Audit Logs', icon: <AuditLogIcon />, path: '/admin/logs', id: 'logs' },
      ]
    },
    {
      name: "Support",
      items: [
        { name: 'Support Tickets', icon: <SupportTicketsIcon />, path: '/admin/tickets', id: 'tickets' },
        // { name: 'System Notifications', icon: <NotificationsIcon />, path: '/admin/notifications', id: 'notifications' },
      ]
    },
    {
      name: "System",
      items: [
        { name: 'System Settings', icon: <SettingsIcon />, path: '/admin/settings', id: 'settings' },
      ]
    }
  ];
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
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
            <div className="ml-4 flex items-center">
              <span className="text-2xl font-bold text-white">WhatsBulk</span>
              <span className="text-emerald-400 font-medium ml-2 px-2 py-0.5 bg-emerald-800/30 rounded-md text-sm">Admin</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="text-white p-2 rounded-md hover:bg-emerald-800/30 mr-2 relative">
              <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs">3</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="relative">
              <button className="flex items-center text-white hover:bg-emerald-800/30 rounded-md p-2">
                <div className="h-8 w-8 rounded-full bg-emerald-700 flex items-center justify-center text-white mr-2">
                  AD
                </div>
                <span className="font-medium hidden md:block">Admin User</span>
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
            {/* Grouped Navigation */}
            {navGroups.map((group, index) => (
              <div key={index} className="mb-6">
                {sidebarOpen && (
                  <h3 className="px-4 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                    {group.name}
                  </h3>
                )}
                
                {group.items.map((item) => (
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
                    
                    {/* Badge for items that need attention */}
                    {(item.id === 'tickets' || item.id === 'notifications') && (
                      <span className={`${!sidebarOpen && "hidden"} ml-auto bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full`}>
                        New
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          
          {/* Admin Info */}
          {sidebarOpen && (
            <div className="p-4 border-t border-emerald-800/30">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-emerald-700 flex items-center justify-center text-white">
                    AD
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs text-emerald-300">Super Admin</p>
                </div>
              </div>
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
            <p className="text-emerald-200 text-center text-sm">© 2024 WhatsBulk. All rights reserved. <span className="text-emerald-400">Admin Portal</span></p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AdminLayout;