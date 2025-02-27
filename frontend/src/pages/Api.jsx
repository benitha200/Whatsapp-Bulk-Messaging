import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Layout from './Layout';

const Api = () => {
    return (
        <Layout>

            {/* API Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="w-full max-w-6xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        WhatsBulk <span className="text-emerald-400">API</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-emerald-100 mb-10 max-w-3xl leading-relaxed">
                        Integrate WhatsApp messaging directly into your applications with our powerful and flexible API. Send messages, manage contacts, and track analytics programmatically.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            to="/signup"
                            className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 font-medium text-lg"
                        >
                            Get API Key
                        </Link>
                        <a
                            href="#documentation"
                            className="bg-transparent text-white border-2 border-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-all shadow-lg font-medium text-lg"
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
                            <p className="text-emerald-200 mb-6 leading-relaxed">
                                Our RESTful API enables you to integrate WhatsApp messaging functionality directly into your applications, websites, and services.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Message Sending</h3>
                                        <p className="text-emerald-200">Send text, images, documents, and interactive messages to individual recipients or groups.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Webhooks</h3>
                                        <p className="text-emerald-200">Receive real-time notifications for message delivery, reads, and responses.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Contact Management</h3>
                                        <p className="text-emerald-200">Create, update, and organize contacts and contact groups programmatically.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-3 mt-1">✓</span>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">Analytics</h3>
                                        <p className="text-emerald-200">Access delivery rates, open rates, and other key metrics through API calls.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/30 shadow-xl">
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                <div className="ml-4 text-emerald-200 text-sm">API Request Example</div>
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
            <section className="bg-emerald-900/20 py-20 backdrop-blur-sm border-y border-emerald-800/20">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">What You Can Build</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20 hover:transform hover:scale-105 transition-all duration-300">
                            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">🤖</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Chatbots</h3>
                            <p className="text-emerald-200">
                                Create interactive WhatsApp chatbots that can answer customer questions, process orders, and provide support 24/7.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20 hover:transform hover:scale-105 transition-all duration-300">
                            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">🔄</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">CRM Integration</h3>
                            <p className="text-emerald-200">
                                Connect your CRM system with WhatsApp to automate customer communication, follow-ups, and lead nurturing.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20 hover:transform hover:scale-105 transition-all duration-300">
                            <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">📊</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Custom Dashboards</h3>
                            <p className="text-emerald-200">
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
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/30 shadow-xl mb-6">
                            <p className="text-emerald-200 mb-4">
                                All API requests require authentication using an API key. You can get your API key from your WhatsBulk dashboard.
                            </p>
                            <div className="bg-black/30 p-4 rounded-lg">
                                <code className="text-emerald-200">
                                    Authorization: Bearer YOUR_API_KEY
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Endpoints Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold text-white mb-6">Endpoints</h3>

                        {/* Messages Endpoint */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-emerald-800/30 shadow-xl mb-8 overflow-hidden">
                            <div className="flex items-center p-4 border-b border-emerald-800/30 bg-emerald-900/20">
                                <span className="bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm font-medium mr-3">POST</span>
                                <code className="text-emerald-200">/v1/messages</code>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-4">Send Message</h4>
                                <p className="text-emerald-200 mb-6">
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
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-emerald-800/30 shadow-xl mb-8 overflow-hidden">
                            <div className="flex items-center p-4 border-b border-emerald-800/30 bg-emerald-900/20">
                                <span className="bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm font-medium mr-3">GET</span>
                                <code className="text-emerald-200">/v1/contacts</code>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-4">List Contacts</h4>
                                <p className="text-emerald-200 mb-6">
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
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-emerald-800/30 shadow-xl overflow-hidden">
                            <div className="flex items-center p-4 border-b border-emerald-800/30 bg-emerald-900/20">
                                <span className="bg-teal-600 text-white px-3 py-1 rounded-lg text-sm font-medium mr-3">GET</span>
                                <code className="text-emerald-200">/v1/analytics/messages</code>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-4">Message Analytics</h4>
                                <p className="text-emerald-200 mb-6">
                                    Get analytics data for messages sent during a specific time period.
                                </p>
                                <div className="mb-6">
                                    <h5 className="text-lg font-medium text-white mb-2">Query Parameters</h5>
                                    <ul className="space-y-2 text-emerald-200">
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
                        <Link to="/docs/api" className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 font-medium text-lg inline-block">
                            View Full API Documentation
                        </Link>
                    </div>
                </div>
            </section>

            {/* SDK Section */}
            <section className="bg-emerald-900/20 py-20 backdrop-blur-sm border-y border-emerald-800/20">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Official SDKs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-800/20 text-center">
                            <div className="bg-gradient-to-br from-emerald-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-white">JS</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">JavaScript</h3>
                            <Link to="/docs/sdks/javascript" className="text-emerald-400 hover:text-emerald-300 font-medium inline-block mt-4">
                                Documentation →
                            </Link>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-800/20 text-center">
                            <div className="bg-gradient-to-br from-emerald-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-white">PY</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Python</h3>
                            <Link to="/docs/sdks/python" className="text-emerald-400 hover:text-emerald-300 font-medium inline-block mt-4">
                                Documentation →
                            </Link>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-800/20 text-center">
                            <div className="bg-gradient-to-br from-emerald-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-white">PH</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">PHP</h3>
                            <Link to="/docs/sdks/php" className="text-emerald-400 hover:text-emerald-300 font-medium inline-block mt-4">
                                Documentation →
                            </Link>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-800/20 text-center">
                            <div className="bg-gradient-to-br from-emerald-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-white">JV</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Java</h3>
                            <Link to="/docs/sdks/java" className="text-emerald-400 hover:text-emerald-300 font-medium inline-block mt-4">
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
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
                            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">📚</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Documentation</h3>
                            <p className="text-emerald-200 mb-6">
                                Comprehensive guides, tutorials, and API reference to help you get the most out of WhatsBulk API.
                            </p>
                            <Link to="/docs" className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center">
                                Browse Documentation <span className="ml-1">→</span>
                            </Link>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
                            <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">💬</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Developer Community</h3>
                            <p className="text-emerald-200 mb-6">
                                Join our active community of developers to share tips, get help, and collaborate on WhatsApp API projects.
                            </p>
                            <Link to="/community" className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center">
                                Join Community <span className="ml-1">→</span>
                            </Link>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
                            <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-2xl text-white">👨‍💻</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Developer Support</h3>
                            <p className="text-emerald-200 mb-6">
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
            <section className="bg-gradient-to-b from-emerald-950 to-emerald-950 py-24 border-y border-emerald-800/30">
                <div className="w-full mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Build with WhatsBulk API?</h2>
                    <p className="text-emerald-200 text-xl mb-10 max-w-2xl mx-auto">Create powerful WhatsApp integrations and automate your messaging workflows with our developer-friendly API.</p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            to="/signup"
                            className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 font-medium text-lg"
                        >
                            Get API Key
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-transparent text-white border-2 border-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-all shadow-lg font-medium text-lg"
                        >
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </section>

            </Layout>
    );
};

export default Api;