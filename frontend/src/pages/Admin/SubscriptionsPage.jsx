import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const SubscriptionsPage = () => {
    const [activeTab, setActiveTab] = useState('subscriptions');

    // Sample subscription plans data
    const subscriptionPlans = [
        {
            id: 1,
            name: 'Basic',
            price: '$49',
            period: 'monthly',
            messageLimit: '1,000',
            activeUsers: 142,
            growth: '+12%',
            features: ['1,000 messages/month', 'Basic templates', 'Standard support', 'Single user']
        },
        {
            id: 2,
            name: 'Business',
            price: '$149',
            period: 'monthly',
            messageLimit: '10,000',
            activeUsers: 287,
            growth: '+24%',
            features: ['10,000 messages/month', 'Advanced templates', 'Priority support', 'Up to 5 users', 'Campaign scheduling']
        },
        {
            id: 3,
            name: 'Enterprise',
            price: '$499',
            period: 'monthly',
            messageLimit: '50,000',
            activeUsers: 98,
            growth: '+8%',
            features: ['50,000 messages/month', 'Custom templates', '24/7 dedicated support', 'Unlimited users', 'Advanced analytics', 'Priority sending']
        },
        {
            id: 4,
            name: 'Custom',
            price: 'Custom',
            period: '',
            messageLimit: 'Custom',
            activeUsers: 31,
            growth: '+3%',
            features: ['Custom message volume', 'White-labeled templates', 'Dedicated account manager', 'API priority access', 'Custom integrations']
        }
    ];

    // Sample recent transactions data
    const recentTransactions = [
        { id: 'INV-0012549', customer: 'Acme Corp', amount: '$499.00', plan: 'Enterprise', date: '03 Mar 2025', status: 'Paid' },
        { id: 'INV-0012548', customer: 'TechStart Inc', amount: '$149.00', plan: 'Business', date: '02 Mar 2025', status: 'Paid' },
        { id: 'INV-0012547', customer: 'Global Services', amount: '$499.00', plan: 'Enterprise', date: '01 Mar 2025', status: 'Pending' },
        { id: 'INV-0012546', customer: 'Marketing Pro', amount: '$49.00', plan: 'Basic', date: '28 Feb 2025', status: 'Paid' },
        { id: 'INV-0012545', customer: 'Local Shop', amount: '$49.00', plan: 'Basic', date: '25 Feb 2025', status: 'Failed' },
        { id: 'INV-0012544', customer: 'City Services', amount: '$149.00', plan: 'Business', date: '24 Feb 2025', status: 'Paid' },
        { id: 'INV-0012543', customer: 'WebDev Agency', amount: '$149.00', plan: 'Business', date: '23 Feb 2025', status: 'Refunded' },
        { id: 'INV-0012542', customer: 'Custom Solutions', amount: '$1,299.00', plan: 'Custom', date: '20 Feb 2025', status: 'Paid' },
    ];

    // Sample monthly revenue data
    const monthlyRevenue = [
        { month: 'Jan', amount: '$12,450' },
        { month: 'Feb', amount: '$15,890' },
        { month: 'Mar', amount: '$18,245', highlight: true }
    ];

    // Status badge colors
    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'Paid':
                return 'bg-green-100 text-green-800';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'Failed':
                return 'bg-red-100 text-red-800';
            case 'Refunded':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AdminLayout activePage="subscriptions">
            <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Subscriptions & Billing</h1>
                        <p className="text-emerald-300 mt-1">Manage subscription plans and monitor billing</p>
                    </div>

                    <div className="mt-4 md:mt-0 flex space-x-3">
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Create Plan
                        </button>
                        <button className="bg-emerald-800/50 hover:bg-emerald-800/70 text-white px-4 py-2 rounded-lg flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Export Data
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-emerald-800/30 mb-6">
                    <div className="flex space-x-8">
                        <button
                            className={`py-4 px-1 font-medium text-sm focus:outline-none ${activeTab === 'subscriptions'
                                    ? 'text-emerald-400 border-b-2 border-emerald-400'
                                    : 'text-emerald-300 hover:text-emerald-100'
                                }`}
                            onClick={() => setActiveTab('subscriptions')}
                        >
                            Subscription Plans
                        </button>
                        <button
                            className={`py-4 px-1 font-medium text-sm focus:outline-none ${activeTab === 'billing'
                                    ? 'text-emerald-400 border-b-2 border-emerald-400'
                                    : 'text-emerald-300 hover:text-emerald-100'
                                }`}
                            onClick={() => setActiveTab('billing')}
                        >
                            Billing & Transactions
                        </button>
                    </div>
                </div>

                {/* Subscription Plans Content */}
                {activeTab === 'subscriptions' && (
                    <div>
                        {/* Revenue Summary */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-800/30 backdrop-blur-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-emerald-400 text-sm font-medium">Total Subscribers</p>
                                        <h2 className="text-3xl font-bold text-white mt-1">558</h2>
                                        <p className="text-emerald-300 text-sm mt-1">
                                            <span className="text-green-400">+18%</span> from last month
                                        </p>
                                    </div>
                                    <div className="bg-emerald-800/50 rounded-lg p-3">
                                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-800/30 backdrop-blur-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-emerald-400 text-sm font-medium">Monthly Recurring Revenue</p>
                                        <h2 className="text-3xl font-bold text-white mt-1">$62,490</h2>
                                        <p className="text-emerald-300 text-sm mt-1">
                                            <span className="text-green-400">+12.4%</span> from last month
                                        </p>
                                    </div>
                                    <div className="bg-emerald-800/50 rounded-lg p-3">
                                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="mt-4 flex space-x-4">
                                    {monthlyRevenue.map((item, index) => (
                                        <div key={index} className={`flex flex-col items-center ${item.highlight ? 'text-emerald-400' : 'text-emerald-300'}`}>
                                            <span className="text-sm">{item.month}</span>
                                            <span className={`text-sm font-medium ${item.highlight ? 'text-white' : ''}`}>{item.amount}</span>
                                            {item.highlight && <div className="w-full h-1 bg-emerald-400 rounded-full mt-1"></div>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-800/30 backdrop-blur-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-emerald-400 text-sm font-medium">Average Revenue Per User</p>
                                        <h2 className="text-3xl font-bold text-white mt-1">$111.99</h2>
                                        <p className="text-emerald-300 text-sm mt-1">
                                            <span className="text-red-400">-2.3%</span> from last month
                                        </p>
                                    </div>
                                    <div className="bg-emerald-800/50 rounded-lg p-3">
                                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Subscription Plans */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {subscriptionPlans.map((plan) => (
                                <div key={plan.id} className="bg-emerald-900/30 rounded-lg border border-emerald-800/30 backdrop-blur-sm overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                                                <div className="flex items-baseline mt-1">
                                                    <span className="text-2xl font-bold text-white">{plan.price}</span>
                                                    {plan.period && <span className="text-emerald-400 text-sm ml-1">/{plan.period}</span>}
                                                </div>
                                            </div>
                                            <div className="bg-emerald-800/50 rounded-full p-2">
                                                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <p className="text-emerald-300 text-sm mb-4">Up to {plan.messageLimit} WhatsApp messages per month</p>

                                        <div className="space-y-2">
                                            {plan.features.map((feature, index) => (
                                                <div key={index} className="flex items-center text-sm">
                                                    <svg className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-emerald-100">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-emerald-900/50 border-t border-emerald-800/30 p-4">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-emerald-400 text-xs font-medium">Active users</p>
                                                <p className="text-white text-sm font-bold">{plan.activeUsers}</p>
                                                <p className="text-emerald-300 text-xs mt-0.5">
                                                    <span className="text-green-400">{plan.growth}</span> growth
                                                </p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="p-2 rounded-lg bg-emerald-800/50 hover:bg-emerald-800/70 text-white">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </button>
                                                <button className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Billing & Transactions Content */}
                {activeTab === 'billing' && (
                    <div>
                        {/* Billing Summary */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                            <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-800/30 backdrop-blur-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-emerald-400 text-sm font-medium">Total Revenue</p>
                                        <h2 className="text-3xl font-bold text-white mt-1">$124,568</h2>
                                        <p className="text-emerald-300 text-sm mt-1">
                                            <span className="text-green-400">+15.6%</span> from last month
                                        </p>
                                    </div>
                                    <div className="bg-emerald-800/50 rounded-lg p-3">
                                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-800/30 backdrop-blur-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-emerald-400 text-sm font-medium">Pending Payments</p>
                                        <h2 className="text-3xl font-bold text-white mt-1">$1,495</h2>
                                        <p className="text-emerald-300 text-sm mt-1">
                                            3 invoices pending
                                        </p>
                                    </div>
                                    <div className="bg-emerald-800/50 rounded-lg p-3">
                                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-800/30 backdrop-blur-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-emerald-400 text-sm font-medium">Failed Payments</p>
                                        <h2 className="text-3xl font-bold text-white mt-1">$345</h2>
                                        <p className="text-emerald-300 text-sm mt-1">
                                            2 invoices need attention
                                        </p>
                                    </div>
                                    <div className="bg-emerald-800/50 rounded-lg p-3">
                                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-800/30 backdrop-blur-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-emerald-400 text-sm font-medium">Refunds</p>
                                        <h2 className="text-3xl font-bold text-white mt-1">$149</h2>
                                        <p className="text-emerald-300 text-sm mt-1">
                                            1 refund this month
                                        </p>
                                    </div>
                                    <div className="bg-emerald-800/50 rounded-lg p-3">
                                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Transactions */}
                        <div className="bg-emerald-900/30 rounded-lg border border-emerald-800/30 backdrop-blur-sm mb-6">
                            <div className="p-6 border-b border-emerald-800/30">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-white">Recent Transactions</h2>
                                    <div className="flex space-x-2">
                                        <div className="relative">
                                            <input type="text" className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 p-2.5" placeholder="Search transactions..." />
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <button className="bg-emerald-800/50 hover:bg-emerald-800/70 text-white p-2.5 rounded-lg">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-emerald-800/30">
                                    <thead className="bg-emerald-900/50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                                Invoice
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                                Customer
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                                Plan
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                                Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-emerald-400 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-emerald-800/30 bg-emerald-900/20">
                                        {recentTransactions.map((transaction, index) => (
                                            <tr key={transaction.id} className={index % 2 === 0 ? 'bg-emerald-900/10' : ''}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-100">
                                                    {transaction.id}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-100">
                                                    {transaction.customer}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-100">
                                                    {transaction.plan}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                                    {transaction.amount}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-300">
                                                    {transaction.date}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(transaction.status)}`}>
                                                        {transaction.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex items-center justify-end space-x-2">
                                                        <button className="text-emerald-400 hover:text-emerald-300">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </button>
                                                        <button className="text-emerald-400 hover:text-emerald-300">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </button>
                                                        <button className="text-emerald-400 hover:text-emerald-300">
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

                            <div className="px-6 py-4 flex items-center justify-between border-t border-emerald-800/30">
                                <div className="text-sm text-emerald-300">
                                    Showing <span className="font-medium text-emerald-100">1</span> to <span className="font-medium text-emerald-100">8</span> of <span className="font-medium text-emerald-100">24</span> transactions
                                </div>
                                <div className="flex-1 flex justify-end">
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-emerald-700/30 bg-emerald-800/30 text-sm font-medium text-emerald-400 hover:bg-emerald-800/50">
                                            <span className="sr-only">Previous</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button className="relative inline-flex items-center px-4 py-2 border border-emerald-700/30 bg-emerald-600 text-sm font-medium text-white">
                                            1
                                        </button>
                                        <button className="relative inline-flex items-center px-4 py-2 border border-emerald-700/30 bg-emerald-800/30 text-sm font-medium text-emerald-300 hover:bg-emerald-800/50">
                                            2
                                        </button>
                                        <button className="relative inline-flex items-center px-4 py-2 border border-emerald-700/30 bg-emerald-800/30 text-sm font-medium text-emerald-300 hover:bg-emerald-800/50">
                                            3
                                        </button>
                                        <span className="relative inline-flex items-center px-4 py-2 border border-emerald-700/30 bg-emerald-800/20 text-sm font-medium text-emerald-500">
                                            ...
                                        </span>
                                        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-emerald-700/30 bg-emerald-800/30 text-sm font-medium text-emerald-400 hover:bg-emerald-800/50">
                                            <span className="sr-only">Next</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default SubscriptionsPage;