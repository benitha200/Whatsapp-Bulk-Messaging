import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Api = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b w-full from-green-950 to-emerald-950">
            {/* Header - Fixed for better navigation */}
            <NavBar />

            {/* API Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="w-full max-w-6xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        WhatsBulk <span className="text-green-400">API</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-green-100 mb-10 max-w-3xl leading-relaxed">
                        Integrate WhatsApp messaging directly into your applications with our powerful and flexible API. Send messages, manage contacts, and track analytics programmatically.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            to="/signup"
                            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/25 font-medium text-lg"
                        >
                            Get API Key
                        </Link>
                        <a
                            href="#documentation"
                            className="bg-transparent text-white border-2 border-green-400 px-8 py-4 rounded-lg hover:bg-green-400/10 transition-all shadow-lg font-medium text-lg"
                        >
                            Documentation
                        </a>
                    </div>
                </div>
            </section>

            {/* API Overview */}
            <section className="py-16 px-4">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Powerful Features for Developers</h2>
                            <p className="text-green-200 mb-6 leading-relaxed">
                                Our RESTful API enables you to integrate WhatsApp messaging functionality directly into your applications, websites, and services.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Message Sending</h3>
                                        <p className="text-green-200">Send text, images, documents, and interactive messages to individual recipients or groups.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Webhooks</h3>
                                        <p className="text-green-200">Receive real-time notifications for message delivery, reads, and responses.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Contact Management</h3>
                                        <p className="text-green-200">Create, update, and organize contacts and contact groups programmatically.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-400 mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Analytics</h3>
                                        <p className="text-green-200">Access delivery rates, open rates, and other key metrics through API calls.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-800/30 shadow-xl">
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <div className="ml-4 text-green-200 text-sm">API Request Example</div>
                            </div>
                            <SyntaxHighlighter language="javascript" style={atomDark} className="rounded-lg text-sm">
                                {`// Send a WhatsApp message using the WhatsBulk API
fetch('https://api.whatsbulk.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    recipient: '+1234567890',
    type: 'text',
    content: {
      text: 'Hello from WhatsBulk API!'
    }
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </section>

            {/* API Use Cases */}
            <section className="bg-green-900/20 py-20 backdrop-blur-sm border-y border-green-800/20">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">What You Can Build</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20 hover:transform hover:scale-105 transition-all duration-300">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">🤖</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Chatbots</h3>
                            <p className="text-green-200">
                                Create interactive WhatsApp chatbots that can answer customer questions, process orders, and provide support 24/7.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20 hover:transform hover:scale-105 transition-all duration-300">
                            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">🔄</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">CRM Integration</h3>
                            <p className="text-green-200">
                                Connect your CRM system with WhatsApp to automate customer communication, follow-ups, and lead nurturing.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20 hover:transform hover:scale-105 transition-all duration-300">
                            <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">📊</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Custom Dashboards</h3>
                            <p className="text-green-200">
                                Build custom analytics dashboards and reporting tools that track your WhatsApp marketing performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* API Documentation */}
            <section id="documentation" className="py-24 px-4">
                <div className="w-full max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-10">API Documentation</h2>

                    {/* Authentication */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold text-white mb-6">Authentication</h3>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-green-800/30 shadow-xl mb-6">
                            <p className="text-green-200 mb-4">
                                All API requests require authentication using an API key. You can get your API key from your WhatsBulk dashboard.
                            </p>
                            <div className="bg-black/30 p-4 rounded-lg">
                                <code className="text-green-200">
                                    Authorization: Bearer YOUR_API_KEY
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Endpoints Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold text-white mb-6">Endpoints</h3>

                        {/* Messages Endpoint */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-green-800/30 shadow-xl mb-8 overflow-hidden">
                            <div className="flex items-center p-4 border-b border-green-800/30 bg-green-900/20">
                                <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium mr-3">POST</span>
                                <code className="text-green-200">/v1/messages</code>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-4">Send Message</h4>
                                <p className="text-green-200 mb-6">
                                    Send a WhatsApp message to a single recipient. Supports text, image, document, and interactive messages.
                                </p>
                                <div className="mb-6">
                                    <h5 className="text-lg font-medium text-white mb-2">Request Body</h5>
                                    <SyntaxHighlighter language="json" style={atomDark} className="rounded-lg text-sm">
                                        {`{
  "recipient": "+1234567890",  // Recipient's phone number
  "type": "text",              // Message type: text, image, document, interactive
  "content": {
    "text": "Hello from WhatsBulk API!"  // Message content
  }
}`}
                                    </SyntaxHighlighter>
                                </div>
                                <div>
                                    <h5 className="text-lg font-medium text-white mb-2">Response</h5>
                                    <SyntaxHighlighter language="json" style={atomDark} className="rounded-lg text-sm">
                                        {`{
  "status": "success",
  "message_id": "msg_123456789",
  "recipient": "+1234567890",
  "timestamp": "2023-07-25T15:30:45Z"
}`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>

                        {/* Contacts Endpoint */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-green-800/30 shadow-xl mb-8 overflow-hidden">
                            <div className="flex items-center p-4 border-b border-green-800/30 bg-green-900/20">
                                <span className="bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm font-medium mr-3">GET</span>
                                <code className="text-green-200">/v1/contacts</code>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-4">List Contacts</h4>
                                <p className="text-green-200 mb-6">
                                    Retrieve a list of all contacts in your WhatsBulk account.
                                </p>
                                <div>
                                    <h5 className="text-lg font-medium text-white mb-2">Response</h5>
                                    <SyntaxHighlighter language="json" style={atomDark} className="rounded-lg text-sm">
                                        {`{
  "contacts": [
    {
      "id": "contact_123",
      "phone": "+1234567890",
      "name": "John Doe",
      "tags": ["customer", "active"],
      "created_at": "2023-06-15T10:20:30Z"
    },
    {
      "id": "contact_456",
      "phone": "+0987654321",
      "name": "Jane Smith",
      "tags": ["prospect"],
      "created_at": "2023-06-20T14:15:10Z"
    }
  ],
  "total": 2,
  "page": 1,
  "per_page": 50
}`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>

                        {/* Analytics Endpoint */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-green-800/30 shadow-xl overflow-hidden">
                            <div className="flex items-center p-4 border-b border-green-800/30 bg-green-900/20">
                                <span className="bg-teal-600 text-white px-3 py-1 rounded-lg text-sm font-medium mr-3">GET</span>
                                <code className="text-green-200">/v1/analytics/messages</code>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-4">Message Analytics</h4>
                                <p className="text-green-200 mb-6">
                                    Get analytics data for messages sent during a specific time period.
                                </p>
                                <div className="mb-6">
                                    <h5 className="text-lg font-medium text-white mb-2">Query Parameters</h5>
                                    <ul className="space-y-2 text-green-200">
                                        <li><code>start_date</code>: Start date (ISO format)</li>
                                        <li><code>end_date</code>: End date (ISO format)</li>
                                        <li><code>group_by</code>: Group results by day, week, or month</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-lg font-medium text-white mb-2">Response</h5>
                                    <SyntaxHighlighter language="json" style={atomDark} className="rounded-lg text-sm">
                                        {`{
  "period": {
    "start": "2023-07-01T00:00:00Z",
    "end": "2023-07-31T23:59:59Z"
  },
  "data": [
    {
      "date": "2023-07-01",
      "sent": 1245,
      "delivered": 1198,
      "read": 876,
      "responded": 342,
      "delivery_rate": 96.2,
      "read_rate": 73.1,
      "response_rate": 28.5
    },
    // More data points...
  ],
  "totals": {
    "sent": 28456,
    "delivered": 27102,
    "read": 19876,
    "responded": 7654,
    "delivery_rate": 95.2,
    "read_rate": 73.3,
    "response_rate": 28.2
  }
}`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* View Full Documentation CTA */}
                    <div className="text-center">
                        <Link to="/docs/api" className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/25 font-medium text-lg inline-block">
                            View Full API Documentation
                        </Link>
                    </div>
                </div>
            </section>

            {/* SDK Section */}
            <section className="bg-green-900/20 py-20 backdrop-blur-sm border-y border-green-800/20">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Official SDKs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-800/20 text-center">
                            <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-white">JS</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">JavaScript</h3>
                            <Link to="/docs/sdks/javascript" className="text-green-400 hover:text-green-300 font-medium inline-block mt-4">
                                Documentation →
                            </Link>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-800/20 text-center">
                            <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-white">PY</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Python</h3>
                            <Link to="/docs/sdks/python" className="text-green-400 hover:text-green-300 font-medium inline-block mt-4">
                                Documentation →
                            </Link>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-800/20 text-center">
                            <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-white">PH</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">PHP</h3>
                            <Link to="/docs/sdks/php" className="text-green-400 hover:text-green-300 font-medium inline-block mt-4">
                                Documentation →
                            </Link>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-800/20 text-center">
                            <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-white">JV</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Java</h3>
                            <Link to="/docs/sdks/java" className="text-green-400 hover:text-green-300 font-medium inline-block mt-4">
                                Documentation →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support & Resources */}
            <section className="py-24 px-4">
                <div className="w-full max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Support & Resources</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">📚</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Documentation</h3>
                            <p className="text-green-200 mb-6">
                                Comprehensive guides, tutorials, and API reference to help you get the most out of WhatsBulk API.
                            </p>
                            <Link to="/docs" className="text-green-400 hover:text-green-300 font-medium inline-flex items-center">
                                Browse Documentation <span className="ml-1">→</span>
                            </Link>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
                            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">💬</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Developer Community</h3>
                            <p className="text-green-200 mb-6">
                                Join our active community of developers to share tips, get help, and collaborate on WhatsApp API projects.
                            </p>
                            <Link to="/community" className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center">
                                Join Community <span className="ml-1">→</span>
                            </Link>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
                            <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">👨‍💻</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Developer Support</h3>
                            <p className="text-green-200 mb-6">
                                Get priority technical support from our team of API specialists. We're here to help you succeed.
                            </p>
                            <Link to="/support" className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center">
                                Contact Support <span className="ml-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-b from-green-950 to-emerald-950 py-24 border-y border-green-800/30">
                <div className="w-full mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Build with WhatsBulk API?</h2>
                    <p className="text-green-200 text-xl mb-10 max-w-2xl mx-auto">Create powerful WhatsApp integrations and automate your messaging workflows with our developer-friendly API.</p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            to="/signup"
                            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/25 font-medium text-lg"
                        >
                            Get API Key
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-transparent text-white border-2 border-green-400 px-8 py-4 rounded-lg hover:bg-green-400/10 transition-all shadow-lg font-medium text-lg"
                        >
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer - Using the same footer from the Home page */}
            <footer className="bg-green-950/90 backdrop-blur-sm py-12 border-t border-green-800/20">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">WhatsBulk</h3>
                            <p className="text-green-200 mb-6">Powerful WhatsApp marketing platform for businesses of all sizes.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-green-400 hover:text-green-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                </a>
                                <a href="#" className="text-green-400 hover:text-green-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="#" className="text-green-400 hover:text-green-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-5.384.272-.222.59-.449.874-.69 1.348-1.119 2.679-2.17 3.8-3.19 1.021 1.041 1.991 2.123 2.902 3.245-.688.098-1.623.22-2.654.42a47.39 47.39 0 00-3.063 5.599z" clipRule="evenodd" /></svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
                            <ul className="space-y-2">
                                <li><Link to="/features" className="text-green-200 hover:text-green-400">Features</Link></li>
                                <li><Link to="/pricing" className="text-green-200 hover:text-green-400">Pricing</Link></li>
                                <li><Link to="/use-cases" className="text-green-200 hover:text-green-400">Use Cases</Link></li>
                                <li><Link to="/demo" className="text-green-200 hover:text-green-400">Request Demo</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><Link to="/blog" className="text-green-200 hover:text-green-400">Blog</Link></li>
                                <li><Link to="/docs" className="text-green-200 hover:text-green-400">Documentation</Link></li>
                                <li><Link to="/support" className="text-green-200 hover:text-green-400">Support</Link></li>
                                <li><Link to="/faq" className="text-green-200 hover:text-green-400">FAQ</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><Link to="/privacy" className="text-green-200 hover:text-green-400">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="text-green-200 hover:text-green-400">Terms of Service</Link></li>
                                <li><Link to="/security" className="text-green-200 hover:text-green-400">Security</Link></li>
                                <li><Link to="/cookies" className="text-green-200 hover:text-green-400">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-green-800/30 mt-8 pt-8 text-center">
                        <p className="text-green-200">© 2023 WhatsBulk. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Api;