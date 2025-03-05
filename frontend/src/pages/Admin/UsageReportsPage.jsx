import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const UsageReportsPage = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('month');
    const [selectedReport, setSelectedReport] = useState('overview');

    // Sample usage data
    const usageData = {
        dailyMessages: [
            { date: '2023-03-01', total: 1245, delivered: 1180, read: 950, failed: 65 },
            { date: '2023-03-02', total: 1567, delivered: 1490, read: 1210, failed: 77 },
            { date: '2023-03-03', total: 982, delivered: 940, read: 780, failed: 42 },
            { date: '2023-03-04', total: 1345, delivered: 1290, read: 1050, failed: 55 },
            { date: '2023-03-05', total: 1689, delivered: 1610, read: 1350, failed: 79 },
            { date: '2023-03-06', total: 1432, delivered: 1370, read: 1180, failed: 62 },
            { date: '2023-03-07', total: 1298, delivered: 1240, read: 1010, failed: 58 },
        ],
        topCampaigns: [
            { name: 'March Promotion', messages: 4580, delivered: 4390, read: 3650, successRate: 95.8 },
            { name: 'Payment Reminder', messages: 3250, delivered: 3120, read: 2950, successRate: 96.0 },
            { name: 'New Product Launch', messages: 2870, delivered: 2720, read: 2450, successRate: 94.8 },
            { name: 'Weekly Newsletter', messages: 2540, delivered: 2430, read: 1980, successRate: 95.7 },
            { name: 'Appointment Reminder', messages: 1950, delivered: 1890, read: 1780, successRate: 96.9 },
        ],
        templates: [
            { name: 'Promotional Discount', usage: 6780, delivered: 6520, read: 5420, successRate: 96.2 },
            { name: 'Payment Confirmation', usage: 5420, delivered: 5290, read: 4950, successRate: 97.6 },
            { name: 'Appointment Confirmation', usage: 4320, delivered: 4190, read: 3950, successRate: 97.0 },
            { name: 'Shipping Notification', usage: 3950, delivered: 3810, read: 3540, successRate: 96.5 },
            { name: 'Order Confirmation', usage: 3680, delivered: 3560, read: 3320, successRate: 96.7 },
        ],
        errorRates: [
            { type: 'Invalid Number', count: 245, percentage: 32.5 },
            { type: 'Network Error', count: 187, percentage: 24.8 },
            { type: 'Blocked by Recipient', count: 156, percentage: 20.7 },
            { type: 'Template Rejection', count: 98, percentage: 13.0 },
            { type: 'Rate Limiting', count: 68, percentage: 9.0 },
        ],
        deliveryTimes: {
            averageDelivery: '1.8s',
            peak: '2.5s',
            offPeak: '1.2s',
            byHour: [
                { hour: '00:00', time: 1.5 },
                { hour: '01:00', time: 1.3 },
                { hour: '02:00', time: 1.2 },
                { hour: '03:00', time: 1.1 },
                { hour: '04:00', time: 1.0 },
                { hour: '05:00', time: 1.1 },
                { hour: '06:00', time: 1.3 },
                { hour: '07:00', time: 1.5 },
                { hour: '08:00', time: 1.8 },
                { hour: '09:00', time: 2.1 },
                { hour: '10:00', time: 2.3 },
                { hour: '11:00', time: 2.4 },
                { hour: '12:00', time: 2.5 },
                { hour: '13:00', time: 2.4 },
                { hour: '14:00', time: 2.3 },
                { hour: '15:00', time: 2.2 },
                { hour: '16:00', time: 2.1 },
                { hour: '17:00', time: 2.0 },
                { hour: '18:00', time: 1.9 },
                { hour: '19:00', time: 1.8 },
                { hour: '20:00', time: 1.7 },
                { hour: '21:00', time: 1.6 },
                { hour: '22:00', time: 1.5 },
                { hour: '23:00', time: 1.4 },
            ]
        },
        summary: {
            totalMessagesMonth: 48750,
            totalMessagesYear: 587600,
            deliveryRateMonth: 95.8,
            readRateMonth: 82.4,
            totalUsers: 245,
            activeUsers: 198,
            apiCallsMonth: 56320,
            apiCallsYear: 675840
        }
    };

    // Calculate total messages sent in the selected period
    const totalMessages = usageData.dailyMessages.reduce((sum, day) => sum + day.total, 0);
    const totalDelivered = usageData.dailyMessages.reduce((sum, day) => sum + day.delivered, 0);
    const totalRead = usageData.dailyMessages.reduce((sum, day) => sum + day.read, 0);
    const totalFailed = usageData.dailyMessages.reduce((sum, day) => sum + day.failed, 0);

    // Calculate delivery and read rates
    const deliveryRate = ((totalDelivered / totalMessages) * 100).toFixed(1);
    const readRate = ((totalRead / totalDelivered) * 100).toFixed(1);

    return (
        <AdminLayout activePage="reports">
            <div className="p-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Usage Reports</h1>
                    <p className="text-emerald-200">Analyze your WhatsApp messaging usage, performance, and trends.</p>
                </div>

                {/* Period Selection */}
                <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4 mb-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setSelectedPeriod('day')}
                                className={`px-4 py-2 rounded-md font-medium ${selectedPeriod === 'day'
                                        ? 'bg-emerald-700 text-white'
                                        : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                                    }`}
                            >
                                Today
                            </button>
                            <button
                                onClick={() => setSelectedPeriod('week')}
                                className={`px-4 py-2 rounded-md font-medium ${selectedPeriod === 'week'
                                        ? 'bg-emerald-700 text-white'
                                        : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                                    }`}
                            >
                                This Week
                            </button>
                            <button
                                onClick={() => setSelectedPeriod('month')}
                                className={`px-4 py-2 rounded-md font-medium ${selectedPeriod === 'month'
                                        ? 'bg-emerald-700 text-white'
                                        : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                                    }`}
                            >
                                This Month
                            </button>
                            <button
                                onClick={() => setSelectedPeriod('year')}
                                className={`px-4 py-2 rounded-md font-medium ${selectedPeriod === 'year'
                                        ? 'bg-emerald-700 text-white'
                                        : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                                    }`}
                            >
                                This Year
                            </button>
                        </div>

                        <div className="flex space-x-2 items-center">
                            <label className="text-emerald-200">Custom Range:</label>
                            <input
                                type="date"
                                className="px-3 py-1 bg-emerald-800/20 border border-emerald-800/30 rounded-md text-white text-sm"
                            />
                            <span className="text-emerald-200">to</span>
                            <input
                                type="date"
                                className="px-3 py-1 bg-emerald-800/20 border border-emerald-800/30 rounded-md text-white text-sm"
                            />
                            <button className="px-3 py-1 bg-emerald-700 hover:bg-emerald-600 text-white rounded-md text-sm">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-emerald-300 text-sm">Total Messages</p>
                                <h3 className="text-3xl font-bold text-white">{totalMessages.toLocaleString()}</h3>
                                <p className="text-emerald-400 text-sm">
                                    +{(totalMessages * 0.15).toFixed(0)} from last period
                                </p>
                            </div>
                            <div className="p-2 bg-emerald-800/30 rounded-md">
                                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-emerald-300 text-sm">Delivery Rate</p>
                                <h3 className="text-3xl font-bold text-white">{deliveryRate}%</h3>
                                <p className="text-emerald-400 text-sm">
                                    +0.5% from last period
                                </p>
                            </div>
                            <div className="p-2 bg-emerald-800/30 rounded-md">
                                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-emerald-300 text-sm">Read Rate</p>
                                <h3 className="text-3xl font-bold text-white">{readRate}%</h3>
                                <p className="text-emerald-400 text-sm">
                                    +1.2% from last period
                                </p>
                            </div>
                            <div className="p-2 bg-emerald-800/30 rounded-md">
                                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-emerald-300 text-sm">API Calls</p>
                                <h3 className="text-3xl font-bold text-white">{usageData.summary.apiCallsMonth.toLocaleString()}</h3>
                                <p className="text-emerald-400 text-sm">
                                    +{(usageData.summary.apiCallsMonth * 0.12).toFixed(0)} from last period
                                </p>
                            </div>
                            <div className="p-2 bg-emerald-800/30 rounded-md">
                                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Report Type Selection */}
                <div className="flex flex-wrap space-x-0 md:space-x-2 space-y-2 md:space-y-0 mb-6">
                    <button
                        onClick={() => setSelectedReport('overview')}
                        className={`px-4 py-2 rounded-md font-medium ${selectedReport === 'overview'
                                ? 'bg-emerald-700 text-white'
                                : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                            }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setSelectedReport('campaigns')}
                        className={`px-4 py-2 rounded-md font-medium ${selectedReport === 'campaigns'
                                ? 'bg-emerald-700 text-white'
                                : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                            }`}
                    >
                        Campaigns
                    </button>
                    <button
                        onClick={() => setSelectedReport('templates')}
                        className={`px-4 py-2 rounded-md font-medium ${selectedReport === 'templates'
                                ? 'bg-emerald-700 text-white'
                                : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                            }`}
                    >
                        Templates
                    </button>
                    <button
                        onClick={() => setSelectedReport('errors')}
                        className={`px-4 py-2 rounded-md font-medium ${selectedReport === 'errors'
                                ? 'bg-emerald-700 text-white'
                                : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                            }`}
                    >
                        Error Analysis
                    </button>
                    <button
                        onClick={() => setSelectedReport('performance')}
                        className={`px-4 py-2 rounded-md font-medium ${selectedReport === 'performance'
                                ? 'bg-emerald-700 text-white'
                                : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                            }`}
                    >
                        Performance
                    </button>
                </div>

                {/* Report Content - Overview */}
                {selectedReport === 'overview' && (
                    <>
                        {/* Daily Messaging Graph */}
                        <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4 mb-6">
                            <h2 className="text-xl font-semibold text-white mb-4">Daily Message Volume</h2>

                            {/* This would be a chart component in real implementation */}
                            <div className="h-64 bg-emerald-800/20 rounded-md flex items-center justify-center">
                                <p className="text-emerald-300">Graph visualization of daily message volume would be displayed here</p>
                            </div>

                            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-emerald-800/20 p-3 rounded-md">
                                    <p className="text-emerald-300 text-sm">Total Sent</p>
                                    <p className="text-white font-semibold">{totalMessages.toLocaleString()}</p>
                                </div>
                                <div className="bg-emerald-800/20 p-3 rounded-md">
                                    <p className="text-emerald-300 text-sm">Delivered</p>
                                    <p className="text-white font-semibold">{totalDelivered.toLocaleString()} ({deliveryRate}%)</p>
                                </div>
                                <div className="bg-emerald-800/20 p-3 rounded-md">
                                    <p className="text-emerald-300 text-sm">Read</p>
                                    <p className="text-white font-semibold">{totalRead.toLocaleString()} ({readRate}%)</p>
                                </div>
                                <div className="bg-emerald-800/20 p-3 rounded-md">
                                    <p className="text-emerald-300 text-sm">Failed</p>
                                    <p className="text-white font-semibold">{totalFailed.toLocaleString()} ({((totalFailed / totalMessages) * 100).toFixed(1)}%)</p>
                                </div>
                            </div>
                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                                <h3 className="text-lg font-semibold text-white mb-3">Messaging Summary</h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Total Messages (Month):</span>
                                        <span className="text-white font-medium">{usageData.summary.totalMessagesMonth.toLocaleString()}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Total Messages (Year):</span>
                                        <span className="text-white font-medium">{usageData.summary.totalMessagesYear.toLocaleString()}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Delivery Rate:</span>
                                        <span className="text-white font-medium">{usageData.summary.deliveryRateMonth}%</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Read Rate:</span>
                                        <span className="text-white font-medium">{usageData.summary.readRateMonth}%</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Avg. Daily Messages:</span>
                                        <span className="text-white font-medium">{Math.round(usageData.summary.totalMessagesMonth / 30).toLocaleString()}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                                <h3 className="text-lg font-semibold text-white mb-3">User Activity</h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Total Users:</span>
                                        <span className="text-white font-medium">{usageData.summary.totalUsers}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Active Users:</span>
                                        <span className="text-white font-medium">{usageData.summary.activeUsers}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Activity Rate:</span>
                                        <span className="text-white font-medium">{((usageData.summary.activeUsers / usageData.summary.totalUsers) * 100).toFixed(1)}%</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Avg. Messages per User:</span>
                                        <span className="text-white font-medium">{Math.round(usageData.summary.totalMessagesMonth / usageData.summary.activeUsers)}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Peak Usage Time:</span>
                                        <span className="text-white font-medium">12:00 - 14:00</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                                <h3 className="text-lg font-semibold text-white mb-3">API Usage</h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">API Calls (Month):</span>
                                        <span className="text-white font-medium">{usageData.summary.apiCallsMonth.toLocaleString()}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">API Calls (Year):</span>
                                        <span className="text-white font-medium">{usageData.summary.apiCallsYear.toLocaleString()}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Avg. Daily API Calls:</span>
                                        <span className="text-white font-medium">{Math.round(usageData.summary.apiCallsMonth / 30).toLocaleString()}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">API Rate Limit:</span>
                                        <span className="text-white font-medium">20 calls/sec</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Peak API Usage:</span>
                                        <span className="text-white font-medium">12.8 calls/sec</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Top Performers */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                                <h3 className="text-lg font-semibold text-white mb-3">Top Campaigns</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left border-b border-emerald-800/30">
                                                <th className="pb-2 text-emerald-300 font-medium">Campaign</th>
                                                <th className="pb-2 text-emerald-300 font-medium">Messages</th>
                                                <th className="pb-2 text-emerald-300 font-medium">Success Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-emerald-800/30">
                                            {usageData.topCampaigns.map((campaign, index) => (
                                                <tr key={index}>
                                                    <td className="py-2 text-white">{campaign.name}</td>
                                                    <td className="py-2 text-white">{campaign.messages.toLocaleString()}</td>
                                                    <td className="py-2 text-white">{campaign.successRate}%</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                                <h3 className="text-lg font-semibold text-white mb-3">Top Templates</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left border-b border-emerald-800/30">
                                                <th className="pb-2 text-emerald-300 font-medium">Template</th>
                                                <th className="pb-2 text-emerald-300 font-medium">Usage</th>
                                                <th className="pb-2 text-emerald-300 font-medium">Success Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-emerald-800/30">
                                            {usageData.templates.map((template, index) => (
                                                <tr key={index}>
                                                    <td className="py-2 text-white">{template.name}</td>
                                                    <td className="py-2 text-white">{template.usage.toLocaleString()}</td>
                                                    <td className="py-2 text-white">{template.successRate}%</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Report Content - Campaigns */}
                {selectedReport === 'campaigns' && (
                    <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                        <h2 className="text-xl font-semibold text-white mb-4">Campaign Performance</h2>

                        {/* Search and Filter */}
                        <div className="flex flex-col md:flex-row justify-between mb-4 space-y-2 md:space-y-0">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search campaigns..."
                                    className="px-4 py-2 bg-emerald-800/20 border border-emerald-800/30 rounded-l-md w-full text-white placeholder-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                                <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 rounded-r-md flex items-center">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex space-x-2">
                                <select className="px-4 py-2 bg-emerald-800/20 border border-emerald-800/30 rounded-md text-white">
                                    <option>All Campaigns</option>
                                    <option>Active</option>
                                    <option>Completed</option>
                                    <option>Scheduled</option>
                                </select>

                                <select className="px-4 py-2 bg-emerald-800/20 border border-emerald-800/30 rounded-md text-white">
                                    <option>Sort by: Latest</option>
                                    <option>Sort by: Name</option>
                                    <option>Sort by: Messages</option>
                                    <option>Sort by: Success Rate</option>
                                </select>
                            </div>
                        </div>

                        {/* Campaign Performance Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left border-b border-emerald-800/30">
                                        <th className="pb-2 text-emerald-300 font-medium">Campaign Name</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Status</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Messages</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Delivered</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Read</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Success Rate</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-emerald-800/30">
                                    {usageData.topCampaigns.map((campaign, index) => (
                                        <tr key={index}>
                                            <td className="py-3 text-white">{campaign.name}</td>
                                            <td className="py-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${index % 3 === 0 ? 'bg-emerald-500/20 text-emerald-300' :
                                                        index % 3 === 1 ? 'bg-amber-500/20 text-amber-300' :
                                                            'bg-blue-500/20 text-blue-300'
                                                    }`}>
                                                    {index % 3 === 0 ? 'Active' : index % 3 === 1 ? 'Scheduled' : 'Completed'}
                                                </span>
                                            </td>
                                            <td className="py-3 text-white">{campaign.messages.toLocaleString()}</td>
                                            <td className="py-3 text-white">{campaign.delivered.toLocaleString()}</td>
                                            <td className="py-3 text-white">{campaign.read.toLocaleString()}</td>
                                            <td className="py-3 text-white">{campaign.successRate}%</td>
                                            <td className="py-3">
                                                <div className="flex space-x-2">
                                                    <button className="p-1 text-emerald-400 hover:text-emerald-300" title="View Details">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </button>
                                                    <button className="p-1 text-emerald-400 hover:text-emerald-300" title="Export Report">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                        </svg>
                                                    </button>
                                                    <button className="p-1 text-emerald-400 hover:text-emerald-300" title="Clone Campaign">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-emerald-300 text-sm">
                                Showing 5 of 24 campaigns
                            </div>

                            <div className="flex space-x-1">
                                <button className="px-3 py-1 bg-emerald-800/30 text-emerald-300 rounded-md hover:bg-emerald-800/50">
                                    Previous
                                </button>
                                <button className="px-3 py-1 bg-emerald-700 text-white rounded-md">
                                    1
                                </button>
                                <button className="px-3 py-1 bg-emerald-800/30 text-emerald-300 rounded-md hover:bg-emerald-800/50">
                                    2
                                </button>
                                <button className="px-3 py-1 bg-emerald-800/30 text-emerald-300 rounded-md hover:bg-emerald-800/50">
                                    3
                                </button>
                                <button className="px-3 py-1 bg-emerald-800/30 text-emerald-300 rounded-md hover:bg-emerald-800/50">
                                    Next
                                </button>
                            </div>

                            <div>
                                <select className="px-3 py-1 bg-emerald-800/20 border border-emerald-800/30 rounded-md text-white text-sm">
                                    <option>5 per page</option>
                                    <option>10 per page</option>
                                    <option>25 per page</option>
                                    <option>50 per page</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {/* Report Content - Templates */}
                {selectedReport === 'templates' && (
                    <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                        <h2 className="text-xl font-semibold text-white mb-4">Template Performance</h2>

                        {/* Search and Filter */}
                        <div className="flex flex-col md:flex-row justify-between mb-4 space-y-2 md:space-y-0">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search templates..."
                                    className="px-4 py-2 bg-emerald-800/20 border border-emerald-800/30 rounded-l-md w-full text-white placeholder-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                                <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 rounded-r-md flex items-center">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex space-x-2">
                                <select className="px-4 py-2 bg-emerald-800/20 border border-emerald-800/30 rounded-md text-white">
                                    <option>All Templates</option>
                                    <option>Approved</option>
                                    <option>Pending</option>
                                    <option>Rejected</option>
                                </select>

                                <select className="px-4 py-2 bg-emerald-800/20 border border-emerald-800/30 rounded-md text-white">
                                    <option>Sort by: Usage</option>
                                    <option>Sort by: Name</option>
                                    <option>Sort by: Success Rate</option>
                                    <option>Sort by: Date Created</option>
                                </select>
                            </div>
                        </div>

                        {/* Template Performance Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left border-b border-emerald-800/30">
                                        <th className="pb-2 text-emerald-300 font-medium">Template Name</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Status</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Usage</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Delivered</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Read</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Success Rate</th>
                                        <th className="pb-2 text-emerald-300 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-emerald-800/30">
                                    {usageData.templates.map((template, index) => (
                                        <tr key={index}>
                                            <td className="py-3 text-white">{template.name}</td>
                                            <td className="py-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${index % 3 === 0 ? 'bg-emerald-500/20 text-emerald-300' :
                                                        index % 3 === 1 ? 'bg-amber-500/20 text-amber-300' :
                                                            'bg-blue-500/20 text-blue-300'
                                                    }`}>
                                                    {index % 3 === 0 ? 'Approved' : index % 3 === 1 ? 'Pending' : 'Approved'}
                                                </span>
                                            </td>
                                            <td className="py-3 text-white">{template.usage.toLocaleString()}</td>
                                            <td className="py-3 text-white">{template.delivered.toLocaleString()}</td>
                                            <td className="py-3 text-white">{template.read.toLocaleString()}</td>
                                            <td className="py-3 text-white">{template.successRate}%</td>
                                            <td className="py-3">
                                                <div className="flex space-x-2">
                                                    <button className="p-1 text-emerald-400 hover:text-emerald-300" title="View Details">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </button>
                                                    <button className="p-1 text-emerald-400 hover:text-emerald-300" title="Edit Template">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </button>
                                                    <button className="p-1 text-emerald-400 hover:text-emerald-300" title="Clone Template">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-emerald-300 text-sm">
                                Showing 5 of 18 templates
                            </div>

                            <div className="flex space-x-1">
                                <button className="px-3 py-1 bg-emerald-800/30 text-emerald-300 rounded-md hover:bg-emerald-800/50">
                                    Previous
                                </button>
                                <button className="px-3 py-1 bg-emerald-700 text-white rounded-md">
                                    1
                                </button>
                                <button className="px-3 py-1 bg-emerald-800/30 text-emerald-300 rounded-md hover:bg-emerald-800/50">
                                    2
                                </button>
                                <button className="px-3 py-1 bg-emerald-800/30 text-emerald-300 rounded-md hover:bg-emerald-800/50">
                                    3
                                </button>
                                <button className="px-3 py-1 bg-emerald-800/30 text-emerald-300 rounded-md hover:bg-emerald-800/50">
                                    Next
                                </button>
                            </div>

                            <div>
                                <select className="px-3 py-1 bg-emerald-800/20 border border-emerald-800/30 rounded-md text-white text-sm">
                                    <option>5 per page</option>
                                    <option>10 per page</option>
                                    <option>25 per page</option>
                                    <option>50 per page</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {/* Report Content - Error Analysis */}
                {selectedReport === 'errors' && (
                    <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                        <h2 className="text-xl font-semibold text-white mb-4">Error Analysis</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            {/* Error Distribution Pie Chart */}
                            <div className="bg-emerald-800/20 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold text-white mb-3">Error Distribution</h3>
                                <div className="h-64 flex items-center justify-center">
                                    <p className="text-emerald-300">Pie chart of error distribution would be displayed here</p>
                                </div>
                            </div>

                            {/* Error Types Table */}
                            <div className="bg-emerald-800/20 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold text-white mb-3">Error Types</h3>
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left border-b border-emerald-800/30">
                                            <th className="pb-2 text-emerald-300 font-medium">Error Type</th>
                                            <th className="pb-2 text-emerald-300 font-medium">Count</th>
                                            <th className="pb-2 text-emerald-300 font-medium">Percentage</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-emerald-800/30">
                                        {usageData.errorRates.map((error, index) => (
                                            <tr key={index}>
                                                <td className="py-2 text-white">{error.type}</td>
                                                <td className="py-2 text-white">{error.count}</td>
                                                <td className="py-2 text-white">{error.percentage}%</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Error Trend */}
                        <div className="bg-emerald-800/20 p-4 rounded-lg mb-6">
                            <h3 className="text-lg font-semibold text-white mb-3">Error Trend</h3>
                            <div className="h-64 flex items-center justify-center">
                                <p className="text-emerald-300">Line chart of error rate trend over time would be displayed here</p>
                            </div>
                        </div>

                        {/* Recommendations */}
                        <div className="bg-emerald-800/20 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-3">Recommendations</h3>
                            <ul className="space-y-3 text-white">
                                <li className="flex">
                                    <div className="mr-3 text-emerald-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Validate Phone Numbers:</strong> Implement phone number validation to reduce the 32.5% of errors caused by invalid numbers.
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="mr-3 text-emerald-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Improve Network Handling:</strong> Implement better retry mechanisms to mitigate 24.8% of errors related to network issues.
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="mr-3 text-emerald-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Template Compliance:</strong> Review templates with high rejection rates to ensure they comply with WhatsApp guidelines.
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="mr-3 text-emerald-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Rate Limit Management:</strong> Implement better throttling and queueing to handle rate limiting errors during peak times.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {/* Report Content - Performance */}
                {selectedReport === 'performance' && (
                    <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
                        <h2 className="text-xl font-semibold text-white mb-4">System Performance</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            <div className="bg-emerald-800/20 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold text-white mb-3">Delivery Time Stats</h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Average Delivery Time:</span>
                                        <span className="text-white font-medium">{usageData.deliveryTimes.averageDelivery}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Peak Hour Delivery Time:</span>
                                        <span className="text-white font-medium">{usageData.deliveryTimes.peak}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Off-Peak Delivery Time:</span>
                                        <span className="text-white font-medium">{usageData.deliveryTimes.offPeak}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Peak Hour:</span>
                                        <span className="text-white font-medium">12:00 - 13:00</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">API Response Time:</span>
                                        <span className="text-white font-medium">245ms</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-emerald-800/20 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold text-white mb-3">System Load</h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Current API Usage:</span>
                                        <span className="text-white font-medium">16%</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Peak API Usage (24h):</span>
                                        <span className="text-white font-medium">64%</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Average CPU Load:</span>
                                        <span className="text-white font-medium">28%</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Average Memory Usage:</span>
                                        <span className="text-white font-medium">42%</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-emerald-300">Database Queries (24h):</span>
                                        <span className="text-white font-medium">1.2M</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Delivery Time by Hour */}
                        <div className="bg-emerald-800/20 p-4 rounded-lg mb-6">
                            <h3 className="text-lg font-semibold text-white mb-3">Delivery Time by Hour</h3>
                            <div className="h-64 flex items-center justify-center">
                                <p className="text-emerald-300">Line chart of delivery time by hour would be displayed here</p>
                            </div>
                        </div>

                        {/* Performance Recommendations */}
                        <div className="bg-emerald-800/20 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-3">Performance Recommendations</h3>
                            <ul className="space-y-3 text-white">
                                <li className="flex">
                                    <div className="mr-3 text-emerald-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Optimize Peak Hours:</strong> Consider distributing non-urgent messages outside of 12:00-14:00 to improve delivery times.
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="mr-3 text-emerald-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Connection Pooling:</strong> Implement connection pooling to reduce API response times by up to 30%.
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="mr-3 text-emerald-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Database Optimization:</strong> Query optimization could reduce database load and improve overall response times.
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="mr-3 text-emerald-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <strong>Caching Strategy:</strong> Implement caching for frequently used templates and configuration to reduce API calls.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default UsageReportsPage;