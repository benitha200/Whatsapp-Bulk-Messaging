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
const UserIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const BellIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>;
const KeyIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>;
const CreditCardIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const MobileIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const CodeIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const ShieldIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const GlobeIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const TrashIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;

const Settings = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('account');
    const [whatsappForm, setWhatsappForm] = useState({
        whatsappNumber: '',
        businessName: '',
        wabaId: '',
        accessToken: '',
    });

    // Add this function to handle form changes
    const handleWhatsappChange = (e) => {
        const { name, value } = e.target;
        setWhatsappForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Add this for the token visibility toggle
    const [showToken, setShowToken] = useState(false);
    const toggleTokenVisibility = () => {
        setShowToken(!showToken);
    };

    // Toggle sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Settings Form States
    const [accountForm, setAccountForm] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (123) 456-7890',
        company: 'Acme Inc.',
        jobTitle: 'Marketing Manager',
        timeZone: 'America/New_York',
        language: 'en-US'
    });

    const [notificationForm, setNotificationForm] = useState({
        emailNotifications: true,
        campaignUpdates: true,
        weeklyReports: true,
        contactActivity: false,
        newFeatures: true,
        loginAlerts: true,
        failedDeliveries: true,
        systemUpdates: false
    });

    const [apiForm, setApiForm] = useState({
        apiKey: 'wb_api_xxxxxxxxxxxxxxxxxxxx',
        webhookUrl: 'https://webhook.example.com/callbacks',
        rateLimit: '100',
        ipWhitelist: '192.168.1.1, 203.0.113.0/24'
    });

    const [billingPlan, setBillingPlan] = useState('pro');
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    // Handle form changes
    const handleAccountChange = (e) => {
        const { name, value } = e.target;
        setAccountForm(prev => ({ ...prev, [name]: value }));
    };

    const handleNotificationChange = (e) => {
        const { name, checked } = e.target;
        setNotificationForm(prev => ({ ...prev, [name]: checked }));
    };

    const handleApiChange = (e) => {
        const { name, value } = e.target;
        setApiForm(prev => ({ ...prev, [name]: value }));
    };

    const toggleTwoFactor = () => {
        setTwoFactorEnabled(!twoFactorEnabled);
    };

    const generateNewApiKey = () => {
        // In a real app, this would call an API to generate a new key
        setApiForm(prev => ({ ...prev, apiKey: `wb_api_${Math.random().toString(36).substring(2, 15)}` }));
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
                className={`fixed z-20 h-full top-16 left-0 pt-6 flex lg:flex flex-shrink-0 flex-col bg-green-900/30 backdrop-blur-md border-r border-green-800/30 transition-width duration-300 ${sidebarOpen ? "w-64" : "w-20"
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
                        <Link to="/analytics" className="text-green-100 flex items-center px-4 py-3 rounded-lg hover:bg-green-800/20 group">
                            <AnalyticsIcon />
                            <span className={`ml-3 ${!sidebarOpen && "hidden"}`}>Analytics</span>
                        </Link>

                        <div className="pt-4 mt-4 border-t border-green-800/30">
                            {/* Settings */}
                            <Link to="/settings" className="text-white flex items-center px-4 py-3 rounded-lg bg-green-800/40 group">
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
                    {/* Settings Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white">Settings</h1>
                        <p className="text-green-200 mt-2">Manage your account, notification preferences, and integration settings</p>
                    </div>

                    {/* Settings Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Settings Tabs */}
                        <div className="lg:col-span-1">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                <ul className="py-2">
                                    <li>
                                        <button
                                            onClick={() => setActiveTab('account')}
                                            className={`w-full text-left px-6 py-4 flex items-center space-x-3 ${activeTab === 'account' ? 'bg-green-800/30 text-white' : 'text-green-200 hover:bg-green-800/20'}`}
                                        >
                                            <UserIcon />
                                            <span>Account</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab('notifications')}
                                            className={`w-full text-left px-6 py-4 flex items-center space-x-3 ${activeTab === 'notifications' ? 'bg-green-800/30 text-white' : 'text-green-200 hover:bg-green-800/20'}`}
                                        >
                                            <BellIcon />
                                            <span>Notifications</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab('security')}
                                            className={`w-full text-left px-6 py-4 flex items-center space-x-3 ${activeTab === 'security' ? 'bg-green-800/30 text-white' : 'text-green-200 hover:bg-green-800/20'}`}
                                        >
                                            <ShieldIcon />
                                            <span>Security</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab('api')}
                                            className={`w-full text-left px-6 py-4 flex items-center space-x-3 ${activeTab === 'api' ? 'bg-green-800/30 text-white' : 'text-green-200 hover:bg-green-800/20'}`}
                                        >
                                            <CodeIcon />
                                            <span>API & Webhooks</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab('billing')}
                                            className={`w-full text-left px-6 py-4 flex items-center space-x-3 ${activeTab === 'billing' ? 'bg-green-800/30 text-white' : 'text-green-200 hover:bg-green-800/20'}`}
                                        >
                                            <CreditCardIcon />
                                            <span>Billing</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab('whatsapp')}
                                            className={`w-full text-left px-6 py-4 flex items-center space-x-3 ${activeTab === 'whatsapp' ? 'bg-green-800/30 text-white' : 'text-green-200 hover:bg-green-800/20'}`}
                                        >
                                            <MobileIcon />
                                            <span>WhatsApp Account</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Settings Content */}
                        <div className="lg:col-span-3">
                            {/* Account Settings */}
                            {activeTab === 'account' && (
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                    <div className="px-6 py-5 border-b border-green-800/30">
                                        <h2 className="text-xl font-semibold text-white">Account Information</h2>
                                        <p className="text-green-300 text-sm mt-1">Update your personal and organization details</p>
                                    </div>
                                    <div className="p-6">
                                        <form className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="name" className="block text-green-200 text-sm font-medium mb-2">Full Name</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={accountForm.name}
                                                        onChange={handleAccountChange}
                                                        className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-green-200 text-sm font-medium mb-2">Email Address</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={accountForm.email}
                                                        onChange={handleAccountChange}
                                                        className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="block text-green-200 text-sm font-medium mb-2">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={accountForm.phone}
                                                        onChange={handleAccountChange}
                                                        className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="company" className="block text-green-200 text-sm font-medium mb-2">Company/Organization</label>
                                                    <input
                                                        type="text"
                                                        id="company"
                                                        name="company"
                                                        value={accountForm.company}
                                                        onChange={handleAccountChange}
                                                        className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="jobTitle" className="block text-green-200 text-sm font-medium mb-2">Job Title</label>
                                                    <input
                                                        type="text"
                                                        id="jobTitle"
                                                        name="jobTitle"
                                                        value={accountForm.jobTitle}
                                                        onChange={handleAccountChange}
                                                        className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="timeZone" className="block text-green-200 text-sm font-medium mb-2">Time Zone</label>
                                                    <select
                                                        id="timeZone"
                                                        name="timeZone"
                                                        value={accountForm.timeZone}
                                                        onChange={handleAccountChange}
                                                        className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    >
                                                        <option value="America/New_York" className="bg-green-900">Eastern Time (ET)</option>
                                                        <option value="America/Chicago" className="bg-green-900">Central Time (CT)</option>
                                                        <option value="America/Denver" className="bg-green-900">Mountain Time (MT)</option>
                                                        <option value="America/Los_Angeles" className="bg-green-900">Pacific Time (PT)</option>
                                                        <option value="Europe/London" className="bg-green-900">GMT (UTC+0)</option>
                                                        <option value="Europe/Paris" className="bg-green-900">Central European Time (CET)</option>
                                                        <option value="Asia/Tokyo" className="bg-green-900">Japan Standard Time (JST)</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="language" className="block text-green-200 text-sm font-medium mb-2">Language</label>
                                                    <select
                                                        id="language"
                                                        name="language"
                                                        value={accountForm.language}
                                                        onChange={handleAccountChange}
                                                        className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    >
                                                        <option value="en-US" className="bg-green-900">English (US)</option>
                                                        <option value="es-ES" className="bg-green-900">Spanish</option>
                                                        <option value="fr-FR" className="bg-green-900">French</option>
                                                        <option value="de-DE" className="bg-green-900">German</option>
                                                        <option value="pt-BR" className="bg-green-900">Portuguese (Brazil)</option>
                                                        <option value="ja-JP" className="bg-green-900">Japanese</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-green-800/30 mt-6">
                                                <div className="flex items-center justify-end space-x-4">
                                                    <button
                                                        type="button"
                                                        className="px-4 py-2 bg-transparent border border-green-800/40 text-green-300 rounded-lg hover:bg-green-800/20"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors shadow-md hover:shadow-green-500/25"
                                                    >
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}

                            {/* Notification Settings */}
                            {activeTab === 'notifications' && (
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                    <div className="px-6 py-5 border-b border-green-800/30">
                                        <h2 className="text-xl font-semibold text-white">Notification Preferences</h2>
                                        <p className="text-green-300 text-sm mt-1">Configure which notifications you want to receive</p>
                                    </div>
                                    <div className="p-6">
                                        <form className="space-y-6">
                                            <div className="space-y-4">
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="emailNotifications"
                                                            name="emailNotifications"
                                                            type="checkbox"
                                                            checked={notificationForm.emailNotifications}
                                                            onChange={handleNotificationChange}
                                                            className="focus:ring-green-500 h-4 w-4 text-green-600 border-green-800 rounded bg-green-900/40"
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <label htmlFor="emailNotifications" className="text-white font-medium">Email Notifications</label>
                                                        <p className="text-green-300 text-sm">Receive all notifications via email</p>
                                                    </div>
                                                </div>

                                                <h3 className="text-green-200 font-semibold pt-4">Campaign Notifications</h3>
                                                <div className="ml-2 space-y-4 border-l-2 border-green-800/30 pl-6">
                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id="campaignUpdates"
                                                                name="campaignUpdates"
                                                                type="checkbox"
                                                                checked={notificationForm.campaignUpdates}
                                                                onChange={handleNotificationChange}
                                                                className="focus:ring-green-500 h-4 w-4 text-green-600 border-green-800 rounded bg-green-900/40"
                                                            />
                                                        </div>
                                                        <div className="ml-3">
                                                            <label htmlFor="campaignUpdates" className="text-white font-medium">Campaign Updates</label>
                                                            <p className="text-green-300 text-sm">Status updates when your campaigns start or finish</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id="weeklyReports"
                                                                name="weeklyReports"
                                                                type="checkbox"
                                                                checked={notificationForm.weeklyReports}
                                                                onChange={handleNotificationChange}
                                                                className="focus:ring-green-500 h-4 w-4 text-green-600 border-green-800 rounded bg-green-900/40"
                                                            />
                                                        </div>
                                                        <div className="ml-3">
                                                            <label htmlFor="weeklyReports" className="text-white font-medium">Weekly Reports</label>
                                                            <p className="text-green-300 text-sm">Weekly summary of your campaign performance</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id="contactActivity"
                                                                name="contactActivity"
                                                                type="checkbox"
                                                                checked={notificationForm.contactActivity}
                                                                onChange={handleNotificationChange}
                                                                className="focus:ring-green-500 h-4 w-4 text-green-600 border-green-800 rounded bg-green-900/40"
                                                            />
                                                        </div>
                                                        <div className="ml-3">
                                                            <label htmlFor="contactActivity" className="text-white font-medium">Contact Activity</label>
                                                            <p className="text-green-300 text-sm">Real-time updates when contacts respond to messages</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h3 className="text-green-200 font-semibold pt-4">System Notifications</h3>
                                                <div className="ml-2 space-y-4 border-l-2 border-green-800/30 pl-6">
                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id="newFeatures"
                                                                name="newFeatures"
                                                                type="checkbox"
                                                                checked={notificationForm.newFeatures}
                                                                onChange={handleNotificationChange}
                                                                className="focus:ring-green-500 h-4 w-4 text-green-600 border-green-800 rounded bg-green-900/40"
                                                            />
                                                        </div>
                                                        <div className="ml-3">
                                                            <label htmlFor="newFeatures" className="text-white font-medium">New Features</label>
                                                            <p className="text-green-300 text-sm">Updates about new features and improvements</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id="loginAlerts"
                                                                name="loginAlerts"
                                                                type="checkbox"
                                                                checked={notificationForm.loginAlerts}
                                                                onChange={handleNotificationChange}
                                                                className="focus:ring-green-500 h-4 w-4 text-green-600 border-green-800 rounded bg-green-900/40"
                                                            />
                                                        </div>
                                                        <div className="ml-3">
                                                            <label htmlFor="loginAlerts" className="text-white font-medium">Login Alerts</label>
                                                            <p className="text-green-300 text-sm">Receive alerts for new logins to your account</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id="failedDeliveries"
                                                                name="failedDeliveries"
                                                                type="checkbox"
                                                                checked={notificationForm.failedDeliveries}
                                                                onChange={handleNotificationChange}
                                                                className="focus:ring-green-500 h-4 w-4 text-green-600 border-green-800 rounded bg-green-900/40"
                                                            />
                                                        </div>
                                                        <div className="ml-3">
                                                            <label htmlFor="failedDeliveries" className="text-white font-medium">Failed Deliveries</label>
                                                            <p className="text-green-300 text-sm">Alerts about message delivery failures</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id="systemUpdates"
                                                                name="systemUpdates"
                                                                type="checkbox"
                                                                checked={notificationForm.systemUpdates}
                                                                onChange={handleNotificationChange}
                                                                className="focus:ring-green-500 h-4 w-4 text-green-600 border-green-800 rounded bg-green-900/40"
                                                            />
                                                        </div>
                                                        <div className="ml-3">
                                                            <label htmlFor="systemUpdates" className="text-white font-medium">System Updates</label>
                                                            <p className="text-green-300 text-sm">Important system updates and maintenance notices</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-green-800/30 mt-6">
                                                <div className="flex items-center justify-end space-x-4">
                                                    <button
                                                        type="button"
                                                        className="px-4 py-2 bg-transparent border border-green-800/40 text-green-300 rounded-lg hover:bg-green-800/20"
                                                    >
                                                        Reset to Default
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors shadow-md hover:shadow-green-500/25"
                                                    >
                                                        Save Preferences
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}

                            {/* Security Settings */}
                            {activeTab === 'security' && (
                                <div className="space-y-6">
                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                        <div className="px-6 py-5 border-b border-green-800/30">
                                            <h2 className="text-xl font-semibold text-white">Password</h2>
                                            <p className="text-green-300 text-sm mt-1">Update your account password</p>
                                        </div>
                                        <div className="p-6">
                                            <form className="space-y-6">
                                                <div className="space-y-4">
                                                    <div>
                                                        <label htmlFor="currentPassword" className="block text-green-200 text-sm font-medium mb-2">Current Password</label>
                                                        <input
                                                            type="password"
                                                            id="currentPassword"
                                                            name="currentPassword"
                                                            className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="newPassword" className="block text-green-200 text-sm font-medium mb-2">New Password</label>
                                                        <input
                                                            type="password"
                                                            id="newPassword"
                                                            name="newPassword"
                                                            className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="confirmPassword" className="block text-green-200 text-sm font-medium mb-2">Confirm New Password</label>
                                                        <input
                                                            type="password"
                                                            id="confirmPassword"
                                                            name="confirmPassword"
                                                            className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="pt-4">
                                                    <button
                                                        type="submit"
                                                        className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors shadow-md hover:shadow-green-500/25"
                                                    >
                                                        Update Password
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                        <div className="px-6 py-5 border-b border-green-800/30">
                                            <h2 className="text-xl font-semibold text-white">Two-Factor Authentication</h2>
                                            <p className="text-green-300 text-sm mt-1">Add an extra layer of security to your account</p>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                                                    <p className="text-green-300 text-sm mt-1">
                                                        {twoFactorEnabled
                                                            ? "Two-factor authentication is currently enabled"
                                                            : "Protect your account with two-factor authentication"}
                                                    </p>
                                                </div>
                                                <div className="relative inline-block w-12 mr-2 align-middle select-none">
                                                    <input
                                                        type="checkbox"
                                                        name="toggle"
                                                        id="2fa-toggle"
                                                        checked={twoFactorEnabled}
                                                        onChange={toggleTwoFactor}
                                                        className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:bg-green-400 focus:outline-none"
                                                    />
                                                    <label
                                                        htmlFor="2fa-toggle"
                                                        className={`block overflow-hidden h-6 rounded-full cursor-pointer ${twoFactorEnabled ? 'bg-green-600' : 'bg-green-800'}`}
                                                    ></label>
                                                </div>
                                            </div>

                                            {twoFactorEnabled && (
                                                <div className="mt-6 p-4 bg-green-800/20 rounded-lg border border-green-700/20">
                                                    <div className="flex items-start">
                                                        <div className="flex-shrink-0 mt-1">
                                                            <ShieldIcon />
                                                        </div>
                                                        <div className="ml-3">
                                                            <h3 className="text-white font-medium">Two-Factor Authentication is Enabled</h3>
                                                            <p className="text-green-300 text-sm mt-1">
                                                                Your account is protected with two-factor authentication. You'll need to enter a verification code in addition to your password when signing in.
                                                            </p>
                                                            <button
                                                                className="mt-3 text-sm text-green-400 hover:text-green-300"
                                                            >
                                                                Configure backup methods
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {!twoFactorEnabled && (
                                                <div className="mt-6">
                                                    <button
                                                        className="px-4 py-2 bg-green-700 hover:bg-green-600 text-white rounded-lg transition-colors shadow-md hover:shadow-green-500/25 flex items-center"
                                                    >
                                                        <KeyIcon />
                                                        <span className="ml-2">Set Up Two-Factor Authentication</span>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                        <div className="px-6 py-5 border-b border-green-800/30">
                                            <h2 className="text-xl font-semibold text-white">Sessions</h2>
                                            <p className="text-green-300 text-sm mt-1">Manage your active sessions</p>
                                        </div>
                                        <div className="p-6">
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center p-4 bg-green-800/20 rounded-lg border border-green-700/20">
                                                    <div className="flex items-center">
                                                        <div className="bg-green-700 p-2 rounded-lg">
                                                            <GlobeIcon />
                                                        </div>
                                                        <div className="ml-3">
                                                            <h3 className="text-white font-medium">Current Session</h3>
                                                            <p className="text-green-300 text-sm">Chrome on Windows • New York, USA • IP: 192.168.1.1</p>
                                                            <p className="text-green-400 text-xs mt-1">Active Now</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-center p-4 bg-green-800/10 rounded-lg border border-green-700/10">
                                                    <div className="flex items-center">
                                                        <div className="bg-green-800 p-2 rounded-lg">
                                                            <MobileIcon />
                                                        </div>
                                                        <div className="ml-3">
                                                            <h3 className="text-white font-medium">iPhone App</h3>
                                                            <p className="text-green-300 text-sm">iOS 16 • London, UK • IP: 172.16.254.1</p>
                                                            <p className="text-green-400/60 text-xs mt-1">Last active: 2 hours ago</p>
                                                        </div>
                                                    </div>
                                                    <button className="text-red-400 hover:text-red-300">
                                                        <TrashIcon />
                                                    </button>
                                                </div>

                                                <div className="flex justify-between items-center p-4 bg-green-800/10 rounded-lg border border-green-700/10">
                                                    <div className="flex items-center">
                                                        <div className="bg-green-800 p-2 rounded-lg">
                                                            <GlobeIcon />
                                                        </div>
                                                        <div className="ml-3">
                                                            <h3 className="text-white font-medium">Safari</h3>
                                                            <p className="text-green-300 text-sm">macOS • San Francisco, USA • IP: 10.0.0.1</p>
                                                            <p className="text-green-400/60 text-xs mt-1">Last active: Yesterday</p>
                                                        </div>
                                                    </div>
                                                    <button className="text-red-400 hover:text-red-300">
                                                        <TrashIcon />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <button className="text-red-400 hover:text-red-300 font-medium">
                                                    Sign out of all other sessions
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* API Settings */}
                            {activeTab === 'api' && (
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                    <div className="px-6 py-5 border-b border-green-800/30">
                                        <h2 className="text-xl font-semibold text-white">API & Webhooks</h2>
                                        <p className="text-green-300 text-sm mt-1">Manage your API keys and webhook configurations</p>
                                    </div>
                                    <div className="p-6">
                                        <form className="space-y-6">
                                            <div>
                                                <h3 className="text-white font-medium mb-4">API Key</h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            type="text"
                                                            value={apiForm.apiKey}
                                                            readOnly
                                                            className="flex-grow px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={generateNewApiKey}
                                                            className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded-lg transition-colors"
                                                        >
                                                            Regenerate
                                                        </button>
                                                    </div>
                                                    <p className="text-green-300 text-sm">
                                                        Your API key provides full access to your account. Keep it secure and don't share it publicly.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-green-800/30">
                                                <h3 className="text-white font-medium mb-4">Webhook Configuration</h3>
                                                <div className="space-y-4">
                                                    <div>
                                                        <label htmlFor="webhookUrl" className="block text-green-200 text-sm font-medium mb-2">Webhook URL</label>
                                                        <input
                                                            type="url"
                                                            id="webhookUrl"
                                                            name="webhookUrl"
                                                            value={apiForm.webhookUrl}
                                                            onChange={handleApiChange}
                                                            className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                            placeholder="https://your-domain.com/webhook"
                                                        />
                                                    </div>
                                                    <p className="text-green-300 text-sm">
                                                        We'll send real-time event notifications to this URL.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-green-800/30">
                                                <h3 className="text-white font-medium mb-4">Rate Limiting</h3>
                                                <div className="space-y-4">
                                                    <div>
                                                        <label htmlFor="rateLimit" className="block text-green-200 text-sm font-medium mb-2">Requests per minute</label>
                                                        <input
                                                            type="number"
                                                            id="rateLimit"
                                                            name="rateLimit"
                                                            value={apiForm.rateLimit}
                                                            onChange={handleApiChange}
                                                            min="1"
                                                            max="1000"
                                                            className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-green-800/30">
                                                <h3 className="text-white font-medium mb-4">Security</h3>
                                                <div className="space-y-4">
                                                    <div>
                                                        <label htmlFor="ipWhitelist" className="block text-green-200 text-sm font-medium mb-2">IP Whitelist</label>
                                                        <textarea
                                                            id="ipWhitelist"
                                                            name="ipWhitelist"
                                                            value={apiForm.ipWhitelist}
                                                            onChange={handleApiChange}
                                                            rows="3"
                                                            className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                            placeholder="Enter comma-separated IP addresses or CIDR ranges"
                                                        ></textarea>
                                                    </div>
                                                    <p className="text-green-300 text-sm">
                                                        Only requests from these IP addresses will be accepted. Leave empty to allow requests from any IP.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-green-800/30 mt-6">
                                                <div className="flex items-center justify-end space-x-4">
                                                    <button
                                                        type="button"
                                                        className="px-4 py-2 bg-transparent border border-green-800/40 text-green-300 rounded-lg hover:bg-green-800/20"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors shadow-md hover:shadow-green-500/25"
                                                    >
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}

                            {/* Billing Settings */}
                            {activeTab === 'billing' && (
                                <div className="space-y-6">
                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                        <div className="px-6 py-5 border-b border-green-800/30">
                                            <h2 className="text-xl font-semibold text-white">Current Plan</h2>
                                            <p className="text-green-300 text-sm mt-1">Manage your subscription and billing details</p>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                                <div>
                                                    <div className="flex items-center">
                                                        <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-semibold">
                                                            {billingPlan === 'pro' ? 'PRO' : billingPlan === 'business' ? 'BUSINESS' : 'STARTER'}
                                                        </span>
                                                        <span className="text-white font-bold text-2xl ml-3">
                                                            {billingPlan === 'pro' ? 'Pro Plan' : billingPlan === 'business' ? 'Business Plan' : 'Starter Plan'}
                                                        </span>
                                                    </div>
                                                    <p className="text-green-300 mt-2">
                                                        {billingPlan === 'pro'
                                                            ? 'Up to 10,000 messages per month with advanced features'
                                                            : billingPlan === 'business'
                                                                ? 'Up to 50,000 messages per month with premium support'
                                                                : 'Up to 1,000 messages per month'}
                                                    </p>
                                                    <p className="text-green-400 mt-4 text-lg font-semibold">
                                                        {billingPlan === 'pro'
                                                            ? '$49.99/month'
                                                            : billingPlan === 'business'
                                                                ? '$149.99/month'
                                                                : '$9.99/month'}
                                                    </p>
                                                    <p className="text-green-300 text-sm">Next billing date: March 15, 2025</p>
                                                </div>
                                                <div className="mt-6 lg:mt-0">
                                                    <button className="px-5 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors shadow-md hover:shadow-green-500/25 font-medium">
                                                        {billingPlan === 'pro' ? 'Upgrade to Business' : billingPlan === 'business' ? 'Manage Plan' : 'Upgrade to Pro'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                        <div className="px-6 py-5 border-b border-green-800/30">
                                            <h2 className="text-xl font-semibold text-white">Payment Method</h2>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center">
                                                    <div className="bg-white p-2 rounded-lg">
                                                        <CreditCardIcon />
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-white font-medium">Visa ending in 4242</p>
                                                        <p className="text-green-300 text-sm">Expires 12/2025</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="text-green-400 hover:text-green-300 font-medium">
                                                        Update
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                        <div className="px-6 py-5 border-b border-green-800/30">
                                            <h2 className="text-xl font-semibold text-white">Billing History</h2>
                                        </div>
                                        <div className="p-6">
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full divide-y divide-green-800/30">
                                                    <thead>
                                                        <tr>
                                                            <th className="px-6 py-3 text-left text-xs font-medium text-green-300 uppercase tracking-wider">Date</th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium text-green-300 uppercase tracking-wider">Description</th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium text-green-300 uppercase tracking-wider">Amount</th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium text-green-300 uppercase tracking-wider">Status</th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium text-green-300 uppercase tracking-wider">Invoice</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-green-800/30">
                                                        <tr>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Feb 15, 2025</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">WhatsBulk Pro Plan</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">$49.99</td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400">Paid</span>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 hover:text-green-300">
                                                                <a href="#" className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                                                    </svg>
                                                                    Download
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Jan 15, 2025</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">WhatsBulk Pro Plan</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">$49.99</td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400">Paid</span>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 hover:text-green-300">
                                                                <a href="#" className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                                                    </svg>
                                                                    Download
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Dec 15, 2024</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">WhatsBulk Pro Plan</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">$49.99</td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400">Paid</span>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 hover:text-green-300">
                                                                <a href="#" className="flex items-center">
                                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                                                    </svg>
                                                                    Download
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cancel Subscription */}
                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden mt-6">
                                        <div className="px-6 py-5 border-b border-green-800/30">
                                            <h2 className="text-xl font-semibold text-white">Cancel Subscription</h2>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-green-200 mb-4">
                                                If you cancel your subscription, you'll still have access to all features until the end of your current billing period.
                                            </p>
                                            <button className="flex items-center text-red-400 hover:text-red-300 font-medium">
                                                <TrashIcon />
                                                <span className="ml-2">Cancel subscription</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'whatsapp' && (
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                    <div className="px-6 py-5 border-b border-green-800/30">
                                        <h2 className="text-xl font-semibold text-white">WhatsApp Integration</h2>
                                        <p className="text-green-300 text-sm mt-1">Connect and configure your WhatsApp Business account</p>
                                    </div>
                                    <div className="p-6">
                                        <form className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="whatsappNumber" className="block text-green-200 text-sm font-medium mb-2">WhatsApp Business Number</label>
                                                    <input
                                                        type="tel"
                                                        id="whatsappNumber"
                                                        name="whatsappNumber"
                                                        value={whatsappForm.whatsappNumber}
                                                        onChange={handleWhatsappChange}
                                                        className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                        placeholder="+1 (555) 123-4567"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="businessName" className="block text-green-200 text-sm font-medium mb-2">Business Display Name</label>
                                                    <input
                                                        type="text"
                                                        id="businessName"
                                                        name="businessName"
                                                        value={whatsappForm.businessName}
                                                        onChange={handleWhatsappChange}
                                                        className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    />
                                                </div>
                                                <div className="md:col-span-2">
                                                    <label htmlFor="wabaId" className="block text-green-200 text-sm font-medium mb-2">WhatsApp Business Account ID</label>
                                                    <input
                                                        type="text"
                                                        id="wabaId"
                                                        name="wabaId"
                                                        value={whatsappForm.wabaId}
                                                        onChange={handleWhatsappChange}
                                                        className="w-full px-4 py-2 rounded-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                        placeholder="Enter your WABA ID"
                                                    />
                                                </div>
                                                <div className="md:col-span-2">
                                                    <label htmlFor="accessToken" className="block text-green-200 text-sm font-medium mb-2">API Access Token</label>
                                                    <div className="flex">
                                                        <input
                                                            type="password"
                                                            id="accessToken"
                                                            name="accessToken"
                                                            value={whatsappForm.accessToken}
                                                            onChange={handleWhatsappChange}
                                                            className="flex-1 px-4 py-2 rounded-l-lg bg-green-900/40 border border-green-800/30 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="px-4 py-2 bg-green-800/40 border border-green-800/30 border-l-0 rounded-r-lg text-green-200 hover:bg-green-800/60"
                                                            onClick={() => toggleTokenVisibility()}
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-green-800/30 pt-6 mt-6">
                                                <h3 className="text-lg font-medium text-white mb-4">Message Templates</h3>
                                                <div className="bg-green-900/30 rounded-lg p-4 mb-4">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h4 className="text-white font-medium">Welcome Message</h4>
                                                            <p className="text-green-300 text-sm mt-1">Sent when a user first connects</p>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                            <button className="p-2 text-green-300 hover:text-white">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                </svg>
                                                            </button>
                                                            <button className="p-2 text-green-300 hover:text-white">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-green-900/30 rounded-lg p-4 mb-4">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h4 className="text-white font-medium">Order Confirmation</h4>
                                                            <p className="text-green-300 text-sm mt-1">Sent after a purchase is completed</p>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                            <button className="p-2 text-green-300 hover:text-white">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                </svg>
                                                            </button>
                                                            <button className="p-2 text-green-300 hover:text-white">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button
                                                    type="button"
                                                    className="mt-4 px-4 py-2 bg-green-800/30 border border-green-600/40 text-green-300 rounded-lg hover:bg-green-800/50 flex items-center space-x-2"
                                                >
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                                                    <span>Add Template</span>
                                                </button>
                                            </div>

                                            <div className="pt-6 border-t border-green-800/30 mt-6">
                                                <div className="flex items-center mb-6">
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-medium text-white">Verification Status</h3>
                                                        <p className="text-green-300 text-sm mt-1">Your account has been verified</p>
                                                    </div>
                                                    <div className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full flex items-center space-x-1">
                                                        {/* <CheckCircleIcon /> */}
                                                        <span>Verified</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-end space-x-4">
                                                    <button
                                                        type="button"
                                                        className="px-4 py-2 bg-transparent border border-green-800/40 text-green-300 rounded-lg hover:bg-green-800/20"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors shadow-md hover:shadow-green-500/25"
                                                    >
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}

                            {/* Settings Tab Content */}
                            <div className="lg:col-span-3">
                                {/* Account Settings */}
                                {activeTab === 'account' && (
                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                        <div className="px-6 py-5 border-b border-green-800/30">
                                            <h2 className="text-xl font-semibold text-white">Account Information</h2>
                                        </div>
                                        <div className="p-6">
                                            <form>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label htmlFor="name" className="block text-sm font-medium text-green-200 mb-2">
                                                            Full Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={accountForm.name}
                                                            onChange={handleAccountChange}
                                                            className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium text-green-200 mb-2">
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={accountForm.email}
                                                            onChange={handleAccountChange}
                                                            className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="phone" className="block text-sm font-medium text-green-200 mb-2">
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            id="phone"
                                                            name="phone"
                                                            value={accountForm.phone}
                                                            onChange={handleAccountChange}
                                                            className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="company" className="block text-sm font-medium text-green-200 mb-2">
                                                            Company
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="company"
                                                            name="company"
                                                            value={accountForm.company}
                                                            onChange={handleAccountChange}
                                                            className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="jobTitle" className="block text-sm font-medium text-green-200 mb-2">
                                                            Job Title
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="jobTitle"
                                                            name="jobTitle"
                                                            value={accountForm.jobTitle}
                                                            onChange={handleAccountChange}
                                                            className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="timeZone" className="block text-sm font-medium text-green-200 mb-2">
                                                            Time Zone
                                                        </label>
                                                        <select
                                                            id="timeZone"
                                                            name="timeZone"
                                                            value={accountForm.timeZone}
                                                            onChange={handleAccountChange}
                                                            className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                        >
                                                            <option value="America/New_York">Eastern Time (ET)</option>
                                                            <option value="America/Chicago">Central Time (CT)</option>
                                                            <option value="America/Denver">Mountain Time (MT)</option>
                                                            <option value="America/Los_Angeles">Pacific Time (PT)</option>
                                                            <option value="Europe/London">London (GMT)</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="language" className="block text-sm font-medium text-green-200 mb-2">
                                                            Language
                                                        </label>
                                                        <select
                                                            id="language"
                                                            name="language"
                                                            value={accountForm.language}
                                                            onChange={handleAccountChange}
                                                            className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                        >
                                                            <option value="en-US">English (US)</option>
                                                            <option value="es-ES">Spanish</option>
                                                            <option value="fr-FR">French</option>
                                                            <option value="de-DE">German</option>
                                                            <option value="pt-BR">Portuguese (Brazil)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="mt-6">
                                                    <button type="submit" className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}

                                {/* Notification Settings */}
                                {activeTab === 'notifications' && (
                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                        <div className="px-6 py-5 border-b border-green-800/30">
                                            <h2 className="text-xl font-semibold text-white">Notification Preferences</h2>
                                        </div>
                                        <div className="p-6">
                                            <form>
                                                <div className="space-y-5">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h3 className="text-white font-medium">Email Notifications</h3>
                                                            <p className="text-green-300 text-sm">Enable or disable all email notifications</p>
                                                        </div>
                                                        <div className="relative">
                                                            <input
                                                                type="checkbox"
                                                                id="emailNotifications"
                                                                name="emailNotifications"
                                                                checked={notificationForm.emailNotifications}
                                                                onChange={handleNotificationChange}
                                                                className="sr-only"
                                                            />
                                                            <div
                                                                className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${notificationForm.emailNotifications ? "bg-green-600" : "bg-green-900/50"
                                                                    }`}
                                                                onClick={() => handleNotificationChange({
                                                                    target: {
                                                                        name: "emailNotifications",
                                                                        checked: !notificationForm.emailNotifications,
                                                                    },
                                                                })}
                                                            >
                                                                <div
                                                                    className={`bg-white w-5 h-5 rounded-full shadow-lg transform transition-transform ${notificationForm.emailNotifications ? "translate-x-7" : ""
                                                                        }`}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="border-t border-green-800/30 pt-5">
                                                        <h3 className="text-white font-medium mb-4">Marketing and Campaign Notifications</h3>
                                                        <div className="space-y-4">
                                                            <div className="flex items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    id="campaignUpdates"
                                                                    name="campaignUpdates"
                                                                    checked={notificationForm.campaignUpdates}
                                                                    onChange={handleNotificationChange}
                                                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-800 rounded"
                                                                />
                                                                <label htmlFor="campaignUpdates" className="ml-3 text-white">
                                                                    Campaign status and delivery updates
                                                                </label>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    id="weeklyReports"
                                                                    name="weeklyReports"
                                                                    checked={notificationForm.weeklyReports}
                                                                    onChange={handleNotificationChange}
                                                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-800 rounded"
                                                                />
                                                                <label htmlFor="weeklyReports" className="ml-3 text-white">
                                                                    Weekly performance reports
                                                                </label>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    id="contactActivity"
                                                                    name="contactActivity"
                                                                    checked={notificationForm.contactActivity}
                                                                    onChange={handleNotificationChange}
                                                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-800 rounded"
                                                                />
                                                                <label htmlFor="contactActivity" className="ml-3 text-white">
                                                                    Contact list changes and activity
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="border-t border-green-800/30 pt-5">
                                                        <h3 className="text-white font-medium mb-4">System Notifications</h3>
                                                        <div className="space-y-4">
                                                            <div className="flex items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    id="newFeatures"
                                                                    name="newFeatures"
                                                                    checked={notificationForm.newFeatures}
                                                                    onChange={handleNotificationChange}
                                                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-800 rounded"
                                                                />
                                                                <label htmlFor="newFeatures" className="ml-3 text-white">
                                                                    New features and product updates
                                                                </label>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    id="loginAlerts"
                                                                    name="loginAlerts"
                                                                    checked={notificationForm.loginAlerts}
                                                                    onChange={handleNotificationChange}
                                                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-800 rounded"
                                                                />
                                                                <label htmlFor="loginAlerts" className="ml-3 text-white">
                                                                    Security alerts and login notifications
                                                                </label>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    id="failedDeliveries"
                                                                    name="failedDeliveries"
                                                                    checked={notificationForm.failedDeliveries}
                                                                    onChange={handleNotificationChange}
                                                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-800 rounded"
                                                                />
                                                                <label htmlFor="failedDeliveries" className="ml-3 text-white">
                                                                    Failed message deliveries
                                                                </label>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    id="systemUpdates"
                                                                    name="systemUpdates"
                                                                    checked={notificationForm.systemUpdates}
                                                                    onChange={handleNotificationChange}
                                                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-800 rounded"
                                                                />
                                                                <label htmlFor="systemUpdates" className="ml-3 text-white">
                                                                    System maintenance and downtime alerts
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-6">
                                                    <button type="submit" className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25">
                                                        Save Preferences
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}

                                {/* Security Settings */}
                                {activeTab === 'security' && (
                                    <div className="space-y-6">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                            <div className="px-6 py-5 border-b border-green-800/30">
                                                <h2 className="text-xl font-semibold text-white">Password</h2>
                                            </div>
                                            <div className="p-6">
                                                <form>
                                                    <div className="space-y-4">
                                                        <div>
                                                            <label htmlFor="currentPassword" className="block text-sm font-medium text-green-200 mb-2">
                                                                Current Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="currentPassword"
                                                                name="currentPassword"
                                                                className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="newPassword" className="block text-sm font-medium text-green-200 mb-2">
                                                                New Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="newPassword"
                                                                name="newPassword"
                                                                className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-green-200 mb-2">
                                                                Confirm New Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="confirmPassword"
                                                                name="confirmPassword"
                                                                className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-6">
                                                        <button type="submit" className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25">
                                                            Update Password
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                            <div className="px-6 py-5 border-b border-green-800/30">
                                                <h2 className="text-xl font-semibold text-white">Two-Factor Authentication</h2>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h3 className="text-white font-medium">Enable Two-Factor Authentication</h3>
                                                        <p className="text-green-300 text-sm mt-1">Add an extra layer of security to your account</p>
                                                    </div>
                                                    <div className="relative">
                                                        <input
                                                            type="checkbox"
                                                            id="twoFactorEnabled"
                                                            checked={twoFactorEnabled}
                                                            onChange={toggleTwoFactor}
                                                            className="sr-only"
                                                        />
                                                        <div
                                                            className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${twoFactorEnabled ? "bg-green-600" : "bg-green-900/50"
                                                                }`}
                                                            onClick={toggleTwoFactor}
                                                        >
                                                            <div
                                                                className={`bg-white w-5 h-5 rounded-full shadow-lg transform transition-transform ${twoFactorEnabled ? "translate-x-7" : ""
                                                                    }`}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {twoFactorEnabled && (
                                                    <div className="mt-6 p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                        <h3 className="text-white font-medium">Two-Factor Authentication is enabled</h3>
                                                        <p className="text-green-300 text-sm mt-1">
                                                            Your account is now more secure. You'll be asked for a verification code when you sign in on a new device.
                                                        </p>
                                                        <button className="mt-3 text-green-400 hover:text-green-300 font-medium">
                                                            Configure authentication app
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                            <div className="px-6 py-5 border-b border-green-800/30">
                                                <h2 className="text-xl font-semibold text-white">Session Management</h2>
                                            </div>
                                            <div className="p-6">
                                                <div className="space-y-4">
                                                    <div className="flex justify-between items-center p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                        <div>
                                                            <div className="flex items-center">
                                                                <GlobeIcon />
                                                                <span className="text-white font-medium ml-2">Current Session</span>
                                                                <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400">Active</span>
                                                            </div>
                                                            <p className="text-green-300 text-sm mt-1">Chrome on Windows • IP: 192.168.1.1 • Last active: Just now</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-center p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                        <div>
                                                            <div className="flex items-center">
                                                                <MobileIcon />
                                                                <span className="text-white font-medium ml-2">Mobile App</span>
                                                            </div>
                                                            <p className="text-green-300 text-sm mt-1">iPhone 13 • IP: 192.168.1.2 • Last active: Yesterday</p>
                                                        </div>
                                                        <button className="text-red-400 hover:text-red-300">
                                                            Logout
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-6">
                                                    <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 py-3 px-6 rounded-lg transition-colors font-medium border border-red-500/20">
                                                        Logout from all devices
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* API Settings */}
                                {activeTab === 'api' && (
                                    <div className="space-y-6">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                            <div className="px-6 py-5 border-b border-green-800/30">
                                                <h2 className="text-xl font-semibold text-white">API Keys</h2>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-6">
                                                    <div>
                                                        <h3 className="text-white font-medium">Your API Key</h3>
                                                        <p className="text-green-300 text-sm mt-1">Use this key to authenticate API requests</p>
                                                    </div>
                                                    <button
                                                        onClick={generateNewApiKey}
                                                        className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25"
                                                    >
                                                        Generate New Key
                                                    </button>
                                                </div>

                                                <div className="flex">
                                                    <input
                                                        type="text"
                                                        value={apiForm.apiKey}
                                                        readOnly
                                                        className="flex-grow bg-green-900/30 border border-green-800/50 rounded-l-lg px-4 py-3 text-white focus:outline-none"
                                                    />
                                                    <button className="bg-green-800 hover:bg-green-700 text-white py-3 px-4 rounded-r-lg transition-colors font-medium">
                                                        Copy
                                                    </button>
                                                </div>

                                                <div className="mt-4 p-3 bg-green-900/30 rounded-lg border border-green-800/50 text-green-300 text-sm">
                                                    <p>⚠️ Never share your API key publicly. If compromised, generate a new key immediately.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                            <div className="px-6 py-5 border-b border-green-800/30">
                                                <h2 className="text-xl font-semibold text-white">Webhook Configuration</h2>
                                            </div>
                                            <div className="p-6">
                                                <form>
                                                    <div className="space-y-4">
                                                        <div>
                                                            <label htmlFor="webhookUrl" className="block text-sm font-medium text-green-200 mb-2">
                                                                Webhook URL
                                                            </label>
                                                            <input
                                                                type="url"
                                                                id="webhookUrl"
                                                                name="webhookUrl"
                                                                value={apiForm.webhookUrl}
                                                                onChange={handleApiChange}
                                                                className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                                placeholder="https://your-domain.com/webhook"
                                                            />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="rateLimit" className="block text-sm font-medium text-green-200 mb-2">
                                                                Rate Limit (requests per minute)
                                                            </label>
                                                            <input
                                                                type="number"
                                                                id="rateLimit"
                                                                name="rateLimit"
                                                                value={apiForm.rateLimit}
                                                                onChange={handleApiChange}
                                                                className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                            />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="ipWhitelist" className="block text-sm font-medium text-green-200 mb-2">
                                                                IP Whitelist
                                                            </label>
                                                            <textarea
                                                                id="ipWhitelist"
                                                                name="ipWhitelist"
                                                                value={apiForm.ipWhitelist}
                                                                onChange={handleApiChange}
                                                                rows={3}
                                                                className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                                placeholder="Enter IP addresses or CIDR ranges, separated by commas"
                                                            ></textarea>
                                                            <p className="text-green-300 text-sm mt-1">Enter IP addresses or CIDR ranges, separated by commas</p>
                                                        </div>
                                                    </div>

                                                    <button type="submit" className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25">
                                                        Save Changes
                                                    </button>

                                                </form>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                            <div className="px-6 py-5 border-b border-green-800/30">
                                                <h2 className="text-xl font-semibold text-white">API Documentation</h2>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center mb-4">
                                                    <CodeIcon />
                                                    <h3 className="text-white font-medium ml-2">Developer Resources</h3>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-white font-medium">API Documentation</span>
                                                            <button className="text-green-400 hover:text-green-300">
                                                                View
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-white font-medium">SDK & Libraries</span>
                                                            <button className="text-green-400 hover:text-green-300">
                                                                Download
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-white font-medium">Sample Code</span>
                                                            <button className="text-green-400 hover:text-green-300">
                                                                Browse
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Security */}
                                {activeTab === 'security' && (
                                    <div className="space-y-6">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                            <div className="px-6 py-5 border-b border-green-800/30">
                                                <h2 className="text-xl font-semibold text-white">Password</h2>
                                            </div>
                                            <div className="p-6">
                                                <form>
                                                    <div className="space-y-4">
                                                        <div>
                                                            <label htmlFor="currentPassword" className="block text-sm font-medium text-green-200 mb-2">
                                                                Current Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="currentPassword"
                                                                className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                                placeholder="Enter your current password"
                                                            />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="newPassword" className="block text-sm font-medium text-green-200 mb-2">
                                                                New Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="newPassword"
                                                                className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                                placeholder="Enter your new password"
                                                            />
                                                        </div>

                                                        <div>
                                                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-green-200 mb-2">
                                                                Confirm New Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="confirmPassword"
                                                                className="w-full bg-green-900/30 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                                                placeholder="Confirm your new password"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="mt-6">
                                                        <button type="submit" className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25">
                                                            Update Password
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                            <div className="px-6 py-5 border-b border-green-800/30">
                                                <h2 className="text-xl font-semibold text-white">Two-Factor Authentication</h2>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-6">
                                                    <div>
                                                        <h3 className="text-white font-medium">Two-Factor Authentication (2FA)</h3>
                                                        <p className="text-green-300 text-sm mt-1">Add an extra layer of security to your account</p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className={`mr-3 text-sm ${twoFactorEnabled ? 'text-green-400' : 'text-green-300'}`}>
                                                            {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                                                        </span>
                                                        <button
                                                            onClick={toggleTwoFactor}
                                                            className={`relative inline-flex h-6 w-11 items-center rounded-full ${twoFactorEnabled ? 'bg-green-600' : 'bg-green-800/50'
                                                                }`}
                                                        >
                                                            <span className="sr-only">Enable 2FA</span>
                                                            <span
                                                                className={`${twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                                                                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>

                                                {twoFactorEnabled ? (
                                                    <div className="space-y-4">
                                                        <div className="p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                            <div className="flex">
                                                                <div className="mr-4 flex-shrink-0">
                                                                    <MobileIcon />
                                                                </div>
                                                                <div>
                                                                    <h4 className="text-white font-medium">Authenticator App</h4>
                                                                    <p className="text-green-300 text-sm mt-1">Use an authenticator app like Google Authenticator or Authy</p>
                                                                    <button className="mt-2 text-green-400 hover:text-green-300 text-sm font-medium">
                                                                        Setup Authenticator
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                            <div className="flex">
                                                                <div className="mr-4 flex-shrink-0">
                                                                    <MobileIcon />
                                                                </div>
                                                                <div>
                                                                    <h4 className="text-white font-medium">SMS Authentication</h4>
                                                                    <p className="text-green-300 text-sm mt-1">Receive a code via SMS to your registered phone number</p>
                                                                    <button className="mt-2 text-green-400 hover:text-green-300 text-sm font-medium">
                                                                        Setup SMS Authentication
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                            <div className="flex">
                                                                <div className="mr-4 flex-shrink-0">
                                                                    <KeyIcon />
                                                                </div>
                                                                <div>
                                                                    <h4 className="text-white font-medium">Backup Codes</h4>
                                                                    <p className="text-green-300 text-sm mt-1">Generate backup codes to use when you don't have access to your phone</p>
                                                                    <button className="mt-2 text-green-400 hover:text-green-300 text-sm font-medium">
                                                                        Generate Backup Codes
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                        <div className="flex items-start">
                                                            <div className="flex-shrink-0 mt-0.5">
                                                                <ShieldIcon />
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-green-300">
                                                                    Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to sign in.
                                                                </p>
                                                                <button
                                                                    onClick={toggleTwoFactor}
                                                                    className="mt-3 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg transition-colors font-medium"
                                                                >
                                                                    Enable 2FA
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Billing */}
                                {activeTab === 'billing' && (
                                    <div className="space-y-6">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                            <div className="px-6 py-5 border-b border-green-800/30">
                                                <h2 className="text-xl font-semibold text-white">Current Plan</h2>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="flex items-center">
                                                            <span className="text-xl font-bold text-white mr-2">Pro Plan</span>
                                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400">
                                                                Active
                                                            </span>
                                                        </div>
                                                        <p className="text-green-300 text-sm mt-1">Billed monthly • Next payment on March 22, 2025</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-bold text-white">$49<span className="text-green-300 text-sm font-normal">/month</span></div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                    <div className="p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                        <h4 className="text-white font-medium">Plan Features</h4>
                                                        <ul className="mt-2 space-y-2">
                                                            <li className="flex items-center text-green-300">
                                                                <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                Up to 50,000 messages per month
                                                            </li>
                                                            <li className="flex items-center text-green-300">
                                                                <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                Advanced analytics
                                                            </li>
                                                            <li className="flex items-center text-green-300">
                                                                <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                API access
                                                            </li>
                                                            <li className="flex items-center text-green-300">
                                                                <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                Priority support
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="p-4 bg-green-900/30 rounded-lg border border-green-800/50">
                                                        <h4 className="text-white font-medium">Usage this month</h4>
                                                        <div className="mt-3">
                                                            <div className="flex justify-between text-sm text-green-300 mb-1">
                                                                <span>Messages sent</span>
                                                                <span>32,458 / 50,000</span>
                                                            </div>
                                                            <div className="w-full bg-green-900/50 rounded-full h-2">
                                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex space-x-4 mt-6">
                                                    <button className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg transition-colors font-medium shadow-lg hover:shadow-green-500/25">
                                                        Upgrade Plan
                                                    </button>
                                                    <button className="border border-green-600/30 hover:border-green-600/50 text-green-400 py-3 px-6 rounded-lg transition-colors font-medium">
                                                        Cancel Subscription
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                            <div className="px-6 py-5 border-b border-green-800/30">
                                                <h2 className="text-xl font-semibold text-white">Payment Methods</h2>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center justify-between p-4 bg-green-900/30 rounded-lg border border-green-800/50 mb-4">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-6 bg-blue-600 rounded mr-3 flex items-center justify-center">
                                                            <span className="text-white text-xs font-bold">VISA</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-white font-medium">•••• •••• •••• 4242</span>
                                                            <p className="text-green-300 text-sm mt-1">Expires 09/2026</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400 mr-2">
                                                            Default
                                                        </span>
                                                        <button className="text-green-400 hover:text-green-300">
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>

                                                <button className="flex items-center text-green-400 hover:text-green-300 font-medium">
                                                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                    Add Payment Method
                                                </button>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-green-800/20 overflow-hidden">
                                            <div className="px-6 py-5 border-b border-green-800/30">
                                                <h2 className="text-xl font-semibold text-white">Billing History</h2>
                                            </div>
                                            <div className="p-6">
                                                <div className="overflow-x-auto">
                                                    <table className="w-full">
                                                        <thead>
                                                            <tr className="text-left text-green-200 text-sm border-b border-green-800/30">
                                                                <th className="pb-3 font-medium">Date</th>
                                                                <th className="pb-3 font-medium">Description</th>
                                                                <th className="pb-3 font-medium">Amount</th>
                                                                <th className="pb-3 font-medium">Status</th>
                                                                <th className="pb-3 font-medium">Invoice</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="border-b border-green-800/30">
                                                                <td className="py-4 text-white">Feb 22, 2025</td>
                                                                <td className="py-4 text-white">Pro Plan Subscription</td>
                                                                <td className="py-4 text-white">$49.00</td>
                                                                <td className="py-4">
                                                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400">
                                                                        Paid
                                                                    </span>
                                                                </td>
                                                                <td className="py-4">
                                                                    <button className="text-green-400 hover:text-green-300">
                                                                        Download
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-green-800/30">
                                                                <td className="py-4 text-white">Jan 22, 2025</td>
                                                                <td className="py-4 text-white">Pro Plan Subscription</td>
                                                                <td className="py-4 text-white">$49.00</td>
                                                                <td className="py-4">
                                                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400">
                                                                        Paid
                                                                    </span>
                                                                </td>
                                                                <td className="py-4">
                                                                    <button className="text-green-400 hover:text-green-300">
                                                                        Download
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="py-4 text-white">Dec 22, 2024</td>
                                                                <td className="py-4 text-white">Pro Plan Subscription</td>
                                                                <td className="py-4 text-white">$49.00</td>
                                                                <td className="py-4">
                                                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/50 text-green-400">
                                                                        Paid
                                                                    </span>
                                                                </td>
                                                                <td className="py-4">
                                                                    <button className="text-green-400 hover:text-green-300">
                                                                        Download
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div></div></main></div>
    );
};

export default Settings;