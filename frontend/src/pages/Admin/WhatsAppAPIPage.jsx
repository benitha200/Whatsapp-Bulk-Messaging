import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const WhatsAppAPIPage = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [apiKey, setApiKey] = useState('wba_5f8d9c3e7b2a1d4f6e8c9b2a1d4f6e8c');
    const [showApiKey, setShowApiKey] = useState(false);
    const [isRegenerating, setIsRegenerating] = useState(false);
    const [webhookUrl, setWebhookUrl] = useState('https://api.example.com/whatsapp-webhook');

    // Sample API metrics
    const apiMetrics = {
        dailyRequests: 15782,
        monthlyRequests: 342891,
        successRate: 99.7,
        averageResponseTime: 278, // ms
        errorRate: 0.3
    };

    // Sample API logs
    const apiLogs = [
        { id: 1, timestamp: '2025-03-06 08:23:15', endpoint: '/send', status: 'success', responseTime: '231ms', ip: '192.168.1.45' },
        { id: 2, timestamp: '2025-03-06 08:22:47', endpoint: '/status', status: 'success', responseTime: '189ms', ip: '192.168.1.45' },
        { id: 3, timestamp: '2025-03-06 08:21:32', endpoint: '/send', status: 'error', responseTime: '302ms', ip: '192.168.1.46', error: 'Invalid recipient number' },
        { id: 4, timestamp: '2025-03-06 08:20:15', endpoint: '/send', status: 'success', responseTime: '212ms', ip: '192.168.1.45' },
        { id: 5, timestamp: '2025-03-06 08:18:23', endpoint: '/media/upload', status: 'success', responseTime: '456ms', ip: '192.168.1.45' },
    ];

    // API documentation sections
    const apiDocs = [
        {
            title: 'Authentication',
            endpoint: 'POST /auth',
            description: 'Authenticate your application with the WhatsApp API',
            example: `curl -X POST https://api.whatsbulk.com/v1/auth \n-H "Content-Type: application/json" \n-d '{"api_key": "${apiKey}"}'`
        },
        {
            title: 'Send Message',
            endpoint: 'POST /send',
            description: 'Send a WhatsApp message to a single recipient',
            example: `curl -X POST https://api.whatsbulk.com/v1/send \n-H "Authorization: Bearer {token}" \n-H "Content-Type: application/json" \n-d '{\n  "to": "12345678901",\n  "type": "text",\n  "text": {"body": "Hello from WhatsBulk!"}\n}'`
        },
        {
            title: 'Bulk Send',
            endpoint: 'POST /send/bulk',
            description: 'Send WhatsApp messages to multiple recipients',
            example: `curl -X POST https://api.whatsbulk.com/v1/send/bulk \n-H "Authorization: Bearer {token}" \n-H "Content-Type: application/json" \n-d '{\n  "to": ["12345678901", "23456789012"],\n  "type": "text",\n  "text": {"body": "Hello from WhatsBulk!"}\n}'`
        },
        {
            title: 'Check Message Status',
            endpoint: 'GET /status/{message_id}',
            description: 'Check the delivery status of a sent message',
            example: `curl -X GET https://api.whatsbulk.com/v1/status/msg_12345 \n-H "Authorization: Bearer {token}"`
        }
    ];

    // Rate limiting tiers
    const rateLimits = [
        { plan: 'Basic', requestsPerMinute: 60, requestsPerDay: 5000, webhooksSupported: true },
        { plan: 'Business', requestsPerMinute: 120, requestsPerDay: 15000, webhooksSupported: true },
        { plan: 'Enterprise', requestsPerMinute: 600, requestsPerDay: 100000, webhooksSupported: true }
    ];

    const regenerateApiKey = () => {
        setIsRegenerating(true);
        // Simulate API call
        setTimeout(() => {
            setApiKey('wba_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
            setIsRegenerating(false);
        }, 1000);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        // Show toast or notification here
    };

    return (
        <AdminLayout activePage="api">
            <div className="p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-white mb-2">WhatsApp API Management</h1>
                    <p className="text-emerald-200">Configure and monitor your WhatsApp messaging API</p>
                </div>

                {/* Main content tabs */}
                <div className="mb-6 border-b border-emerald-800/30">
                    <nav className="flex space-x-4">
                        {['overview', 'credentials', 'documentation', 'logs', 'settings'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-3 px-4 font-medium text-sm border-b-2 ${activeTab === tab
                                    ? 'border-emerald-400 text-emerald-400'
                                    : 'border-transparent text-emerald-200 hover:text-white hover:border-emerald-800'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab content */}
                <div className="mt-6">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-emerald-300 font-medium">API Requests (24h)</h3>
                                        <span className="text-emerald-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </span>
                                    </div>
                                    <p className="text-3xl font-bold text-white">{apiMetrics.dailyRequests.toLocaleString()}</p>
                                    <p className="text-emerald-400 text-sm">+12.5% from yesterday</p>
                                </div>

                                <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-emerald-300 font-medium">Success Rate</h3>
                                        <span className="text-emerald-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <p className="text-3xl font-bold text-white">{apiMetrics.successRate}%</p>
                                    <p className="text-emerald-400 text-sm">+0.3% from yesterday</p>
                                </div>

                                <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-emerald-300 font-medium">Avg Response Time</h3>
                                        <span className="text-yellow-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <p className="text-3xl font-bold text-white">{apiMetrics.averageResponseTime}ms</p>
                                    <p className="text-yellow-400 text-sm">+15ms from yesterday</p>
                                </div>

                                <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-emerald-300 font-medium">Error Rate</h3>
                                        <span className="text-emerald-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                                            </svg>
                                        </span>
                                    </div>
                                    <p className="text-3xl font-bold text-white">{apiMetrics.errorRate}%</p>
                                    <p className="text-emerald-400 text-sm">-0.2% from yesterday</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* API Status */}
                                <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                                    <h3 className="text-lg font-medium text-white mb-4">API Status</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-emerald-200">WhatsApp Business API</span>
                                            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">Operational</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-emerald-200">Webhook Delivery</span>
                                            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">Operational</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-emerald-200">Media Processing</span>
                                            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">Operational</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-emerald-200">Template Processing</span>
                                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">Degraded</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-emerald-800/30">
                                        <div className="flex justify-between items-center">
                                            <span className="text-emerald-300 text-sm">Last updated: 5 minutes ago</span>
                                            <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View Details</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Recent API Activities */}
                                <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                                    <h3 className="text-lg font-medium text-white mb-4">Recent API Activities</h3>
                                    <div className="space-y-4">
                                        {apiLogs.slice(0, 4).map((log) => (
                                            <div key={log.id} className="flex items-start">
                                                <span className={`mt-1 h-2 w-2 rounded-full ${log.status === 'success' ? 'bg-green-400' : 'bg-red-400'}`}></span>
                                                <div className="ml-3 flex-1">
                                                    <div className="flex justify-between">
                                                        <p className="text-sm text-white font-medium">{log.endpoint}</p>
                                                        <span className="text-xs text-emerald-300">{log.responseTime}</span>
                                                    </div>
                                                    <p className="text-xs text-emerald-400">{log.timestamp}</p>
                                                    {log.error && <p className="text-xs text-red-400 mt-1">{log.error}</p>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-emerald-800/30">
                                        <button
                                            onClick={() => setActiveTab('logs')}
                                            className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
                                        >
                                            View all logs
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Credentials Tab */}
                {activeTab === 'credentials' && (
                    <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                        <h2 className="text-xl font-medium text-white mb-6">API Credentials</h2>

                        <div className="mb-8">
                            <label className="block text-emerald-300 text-sm font-medium mb-2">API Key</label>
                            <div className="flex items-center">
                                <div className="relative flex-1">
                                    <input
                                        type={showApiKey ? "text" : "password"}
                                        value={apiKey}
                                        readOnly
                                        className="w-full bg-emerald-950/50 border border-emerald-800/50 rounded-l-md py-2 px-4 text-white"
                                    />
                                    <button
                                        onClick={() => setShowApiKey(!showApiKey)}
                                        className="absolute inset-y-0 right-0 px-3 flex items-center text-emerald-400"
                                    >
                                        {showApiKey ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <button
                                    onClick={() => copyToClipboard(apiKey)}
                                    className="bg-emerald-800 hover:bg-emerald-700 text-white py-2 px-4 border-t border-r border-b border-emerald-700"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                </button>
                                <button
                                    onClick={regenerateApiKey}
                                    disabled={isRegenerating}
                                    className="bg-emerald-700 hover:bg-emerald-600 text-white py-2 px-4 rounded-r-md border border-emerald-600 flex items-center"
                                >
                                    {isRegenerating ? (
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                    )}
                                    Regenerate
                                </button>
                            </div>
                            <p className="mt-2 text-sm text-emerald-400">This key is used to authenticate your API requests. Keep it secure.</p>
                        </div>

                        <div className="mb-8">
                            <label className="block text-emerald-300 text-sm font-medium mb-2">Webhook URL</label>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    value={webhookUrl}
                                    onChange={(e) => setWebhookUrl(e.target.value)}
                                    className="w-full bg-emerald-950/50 border border-emerald-800/50 rounded-l-md py-2 px-4 text-white"
                                />
                                <button
                                    className="bg-emerald-700 hover:bg-emerald-600 text-white py-2 px-4 rounded-r-md border border-emerald-600"
                                >
                                    Save
                                </button>
                            </div>
                            <p className="mt-2 text-sm text-emerald-400">WhatsApp will send notifications to this URL when you receive messages or delivery status updates.</p>
                        </div>

                        <div className="bg-emerald-800/20 border border-emerald-800/40 rounded-md p-4 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-emerald-300">Security Recommendations</h3>
                                    <div className="mt-2 text-sm text-emerald-200 space-y-2">
                                        <p>• Regenerate your API key immediately if you suspect it has been compromised</p>
                                        <p>• Never share your API key in client-side code or public repositories</p>
                                        <p>• Your webhook endpoint should be HTTPS secured and validate incoming requests</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-white mb-4">API Access Logs</h3>
                            <div className="bg-emerald-900/40 rounded-md overflow-hidden">
                                <table className="min-w-full divide-y divide-emerald-800/30">
                                    <thead className="bg-emerald-900/50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Timestamp</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">IP Address</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Activity</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-emerald-800/30">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">2025-03-06 08:15:32</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">192.168.1.45</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">API Key Generated</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">Success</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">2025-03-05 16:42:18</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">192.168.1.46</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">Webhook URL Updated</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">Success</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">2025-03-05 14:37:54</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">192.168.1.45</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">Login from New IP</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">Warning</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Documentation Tab */}
                {activeTab === 'documentation' && (
                    <div className="space-y-6">
                        <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                            <h2 className="text-xl font-medium text-white mb-4">API Documentation</h2>
                            <p className="text-emerald-200 mb-6">Use our WhatsApp API to send messages, track deliveries, and manage your WhatsApp Business account.</p>

                            <div className="space-y-8">
                                {apiDocs.map((doc, index) => (
                                    <div key={index} className="border-b border-emerald-800/30 pb-6 last:border-0 last:pb-0">
                                        <h3 className="text-lg font-medium text-white mb-2">{doc.title}</h3>
                                        <div className="bg-emerald-800/30 rounded-md px-3 py-1 inline-block text-emerald-300 text-sm font-mono mb-3">
                                            {doc.endpoint}
                                        </div>
                                        <p className="text-emerald-200 mb-4">{doc.description}</p>
                                        <div className="bg-emerald-950 rounded-md p-4 border border-emerald-800/50">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-emerald-300">Example Request</span>
                                                <button
                                                    onClick={() => copyToClipboard(doc.example)}
                                                    className="text-emerald-400 hover:text-emerald-300"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <pre className="text-emerald-300 text-sm font-mono overflow-x-auto whitespace-pre-wrap">{doc.example}</pre>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                            <h2 className="text-xl font-medium text-white mb-4">Rate Limits</h2>
                            <p className="text-emerald-200 mb-6">The following rate limits apply to your API requests based on your subscription plan:</p>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-emerald-800/30">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Plan</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Requests/Min</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Requests/Day</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Webhooks</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-emerald-800/30">
                                        {rateLimits.map((tier, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{tier.plan}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">{tier.requestsPerMinute}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">{tier.requestsPerDay.toLocaleString()}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">
                                                    {tier.webhooksSupported ? (
                                                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">Supported</span>
                                                    ) : (
                                                        <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium">Not Supported</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 bg-emerald-800/20 border border-emerald-800/40 rounded-md p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-emerald-300">Rate Limit Handling</h3>
                                        <div className="mt-2 text-sm text-emerald-200">
                                            <p>If you exceed your rate limits, the API will return a <code className="bg-emerald-950 px-1 py-0.5 rounded">429 Too Many Requests</code> status code. The response will include a <code className="bg-emerald-950 px-1 py-0.5 rounded">Retry-After</code> header indicating how many seconds to wait before retrying.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                                <h2 className="text-xl font-medium text-white mb-4">Webhooks</h2>
                                <p className="text-emerald-200 mb-6">Webhooks allow your application to receive real-time updates about messages and their delivery status.</p>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-2">Message Received Webhook</h3>
                                        <p className="text-emerald-200 mb-4">When a customer sends a message to your WhatsApp Business account, we'll send a POST request to your webhook URL with the following payload:</p>
                                        <div className="bg-emerald-950 rounded-md p-4 border border-emerald-800/50">
                                            <pre className="text-emerald-300 text-sm font-mono overflow-x-auto whitespace-pre-wrap">{
                                                `{
  "event": "message_received",
  "timestamp": "2025-03-06T08:15:32Z",
  "message_id": "msg_5f8d9c3e7b2a1d4f",
  "from": "12345678901",
  "type": "text",
  "text": {
    "body": "Hello, I have a question about my order"
  }
}`
                                            }</pre>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-2">Message Status Webhook</h3>
                                        <p className="text-emerald-200 mb-4">When the status of a sent message changes, we'll send a POST request to your webhook URL with the following payload:</p>
                                        <div className="bg-emerald-950 rounded-md p-4 border border-emerald-800/50">
                                            <pre className="text-emerald-300 text-sm font-mono overflow-x-auto whitespace-pre-wrap">{
                                                `{
  "event": "message_status",
  "timestamp": "2025-03-06T08:15:45Z",
  "message_id": "msg_5f8d9c3e7b2a1d4f",
  "recipient": "12345678901",
  "status": "delivered" // One of: sent, delivered, read, failed
}`
                                            }</pre>
                                        </div>
                                    </div>

                                    <div className="bg-emerald-800/20 border border-emerald-800/40 rounded-md p-4">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="text-sm font-medium text-emerald-300">Webhook Security</h3>
                                                <div className="mt-2 text-sm text-emerald-200">
                                                    <p>All webhook requests include an <code className="bg-emerald-950 px-1 py-0.5 rounded">X-WhatsBulk-Signature</code> header containing a HMAC-SHA256 signature of the request body using your API key as the secret. Verify this signature to ensure the webhook request is authentic.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >

                        {/* Logs Tab */}
                        {
                            activeTab === 'logs' && (
                                <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-medium text-white">API Request Logs</h2>
                                        <div className="flex space-x-2">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="Search logs..."
                                                    className="bg-emerald-950/50 border border-emerald-800/50 rounded-md py-2 pl-10 pr-4 text-white w-64"
                                                />
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <button className="bg-emerald-800 hover:bg-emerald-700 text-white py-2 px-4 rounded-md border border-emerald-700">
                                                Filter
                                            </button>
                                            <button className="bg-emerald-700 hover:bg-emerald-600 text-white py-2 px-4 rounded-md border border-emerald-600">
                                                Export
                                            </button>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-emerald-800/30">
                                            <thead className="bg-emerald-900/50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Timestamp</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Endpoint</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Status</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Response Time</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">IP Address</th>
                                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-emerald-300 uppercase tracking-wider">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-emerald-800/30">
                                                {apiLogs.map((log) => (
                                                    <tr key={log.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">{log.timestamp}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">{log.endpoint}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${log.status === 'success'
                                                                ? 'bg-green-500/20 text-green-400'
                                                                : 'bg-red-500/20 text-red-400'
                                                                }`}>
                                                                {log.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">{log.responseTime}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">{log.ip}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                                                            <button className="text-emerald-400 hover:text-emerald-300">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="text-sm text-emerald-300">
                                            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">248</span> results
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="bg-emerald-900/50 hover:bg-emerald-800 text-white py-2 px-4 rounded-md border border-emerald-800/50">
                                                Previous
                                            </button>
                                            <button className="bg-emerald-700 hover:bg-emerald-600 text-white py-2 px-4 rounded-md border border-emerald-600">
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        {/* Settings Tab */}
                        {
                            activeTab === 'settings' && (
                                <div className="space-y-6">
                                    <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                                        <h2 className="text-xl font-medium text-white mb-6">API Settings</h2>

                                        <div className="mb-6">
                                            <h3 className="text-lg font-medium text-white mb-4">General Settings</h3>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-emerald-300 text-sm font-medium mb-2">Default Message Format</label>
                                                    <select className="w-full bg-emerald-950/50 border border-emerald-800/50 rounded-md py-2 px-4 text-white">
                                                        <option>Text</option>
                                                        <option>Template</option>
                                                        <option>Interactive</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-emerald-300 text-sm font-medium mb-2">Error Handling</label>
                                                    <select className="w-full bg-emerald-950/50 border border-emerald-800/50 rounded-md py-2 px-4 text-white">
                                                        <option>Fail silently</option>
                                                        <option>Retry 3 times</option>
                                                        <option>Log and notify</option>
                                                    </select>
                                                </div>

                                                <div className="flex items-center">
                                                    <input type="checkbox" id="enable-logging" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-800 rounded" />
                                                    <label htmlFor="enable-logging" className="ml-2 block text-emerald-200">
                                                        Enable detailed API logging
                                                    </label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input type="checkbox" id="enable-read-receipts" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-800 rounded" />
                                                    <label htmlFor="enable-read-receipts" className="ml-2 block text-emerald-200">
                                                        Enable read receipts
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h3 className="text-lg font-medium text-white mb-4">Rate Limiting</h3>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-emerald-300 text-sm font-medium mb-2">Maximum Concurrent Requests</label>
                                                    <input
                                                        type="number"
                                                        className="w-full bg-emerald-950/50 border border-emerald-800/50 rounded-md py-2 px-4 text-white"
                                                        defaultValue="10"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-emerald-300 text-sm font-medium mb-2">Queue Timeout (seconds)</label>
                                                    <input
                                                        type="number"
                                                        className="w-full bg-emerald-950/50 border border-emerald-800/50 rounded-md py-2 px-4 text-white"
                                                        defaultValue="60"
                                                    />
                                                </div>

                                                <div className="flex items-center">
                                                    <input type="checkbox" id="enable-queuing" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-800 rounded" defaultChecked />
                                                    <label htmlFor="enable-queuing" className="ml-2 block text-emerald-200">
                                                        Enable request queuing when rate limit is reached
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h3 className="text-lg font-medium text-white mb-4">Notification Settings</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input type="checkbox" id="notify-errors" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-800 rounded" defaultChecked />
                                                    <label htmlFor="notify-errors" className="ml-2 block text-emerald-200">
                                                        Notify on API errors
                                                    </label>
                                                </div>

                                                <div className="flex items-center">
                                                    <input type="checkbox" id="notify-rate-limit" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-800 rounded" defaultChecked />
                                                    <label htmlFor="notify-rate-limit" className="ml-2 block text-emerald-200">
                                                        Notify when approaching rate limits
                                                    </label>
                                                </div>

                                                <div>
                                                    <label className="block text-emerald-300 text-sm font-medium mb-2">Notification Email</label>
                                                    <input
                                                        type="email"
                                                        className="w-full bg-emerald-950/50 border border-emerald-800/50 rounded-md py-2 px-4 text-white"
                                                        defaultValue="admin@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end space-x-4">
                                            <button className="bg-emerald-800/50 hover:bg-emerald-800 text-white py-2 px-4 rounded-md border border-emerald-800/50">
                                                Reset to Defaults
                                            </button>
                                            <button className="bg-emerald-700 hover:bg-emerald-600 text-white py-2 px-4 rounded-md border border-emerald-600">
                                                Save Settings
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 border border-emerald-800/30">
                                        <h2 className="text-xl font-medium text-white mb-6">IP Access Control</h2>

                                        <div className="mb-6">
                                            <div className="flex items-center mb-4">
                                                <input type="checkbox" id="enable-ip-whitelist" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-800 rounded" />
                                                <label htmlFor="enable-ip-whitelist" className="ml-2 block text-emerald-200 font-medium">
                                                    Enable IP whitelisting
                                                </label>
                                            </div>

                                            <div className="bg-emerald-800/20 border border-emerald-800/40 rounded-md p-4 mb-4">
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm text-emerald-200">When enabled, API requests will only be accepted from the IP addresses listed below. All other requests will be rejected with a 403 Forbidden response.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3 mb-4">
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter IP address"
                                                        className="flex-1 bg-emerald-950/50 border border-emerald-800/50 rounded-md py-2 px-4 text-white"
                                                        defaultValue="192.168.1.45"
                                                    />
                                                    <button className="bg-red-700/50 hover:bg-red-700 text-white p-2 rounded-md border border-red-800/50">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter IP address"
                                                        className="flex-1 bg-emerald-950/50 border border-emerald-800/50 rounded-md py-2 px-4 text-white"
                                                        defaultValue="192.168.1.46"
                                                    />
                                                    <button className="bg-red-700/50 hover:bg-red-700 text-white p-2 rounded-md border border-red-800/50">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <button className="flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                                Add IP Address
                                            </button>
                                        </div>

                                        <div className="flex justify-end space-x-4">
                                            <button className="bg-emerald-800/50 hover:bg-emerald-800 text-white py-2 px-4 rounded-md border border-emerald-800/50">
                                                Cancel
                                            </button>
                                            <button className="bg-emerald-700 hover:bg-emerald-600 text-white py-2 px-4 rounded-md border border-emerald-600">
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </div>)}
                    </div>)}
                    </div>
        </AdminLayout>
    )
};



export default WhatsAppAPIPage;