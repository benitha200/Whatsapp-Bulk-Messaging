import React, { useState } from 'react';
import Layout from './Layout';
import img from './../../assets/4.jpg'
import img2 from './../../assets/5.jpg'

// New icons for Help & Support page
const DocumentIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const ChatIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;
const VideoIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const SearchIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const PhoneIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MailIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

const HelpAndSupport = () => {
    const [activeTab, setActiveTab] = useState('faq');
    const [searchQuery, setSearchQuery] = useState('');

  
    // FAQ data
    const faqCategories = [
        {
            id: 'getting-started',
            name: 'Getting Started',
            faqs: [
                {
                    question: 'How do I create my first campaign?',
                    answer: 'To create your first campaign, go to the Campaigns section from the sidebar and click on the "Create New Campaign" button. Follow the step-by-step wizard to set up your campaign, select contacts, and schedule your messages.'
                },
                {
                    question: 'How can I import contacts?',
                    answer: 'You can import contacts by navigating to the Contacts section, clicking on "Import Contacts", and then uploading a CSV file with your contacts information. Make sure your CSV includes at least name and phone number columns.'
                },
                {
                    question: 'What are message templates and how do I use them?',
                    answer: 'Message templates are pre-designed messages that you can use across multiple campaigns. To create a template, go to the Templates section and click "Create New Template". You can include variables like {{name}} which will be automatically replaced with your contact\'s information.'
                }
            ]
        },
        {
            id: 'campaigns',
            name: 'Campaigns',
            faqs: [
                {
                    question: 'How do I schedule a campaign?',
                    answer: 'When creating or editing a campaign, navigate to the "Schedule" tab. Here you can set the specific date and time for your campaign to be sent. You can also set up recurring campaigns on a daily, weekly, or monthly basis.'
                },
                {
                    question: 'Can I pause an active campaign?',
                    answer: 'Yes, you can pause an active campaign at any time. Go to the Campaigns section, find your active campaign, click on the three-dot menu, and select "Pause". You can resume it later using the same menu.'
                },
                {
                    question: 'How do I add media to my campaigns?',
                    answer: 'When creating a message in your campaign, click on the attachment icon to upload images, videos, or documents. Supported formats include JPG, PNG, MP4, and PDF with a maximum file size of 16MB.'
                }
            ]
        },
        {
            id: 'billing',
            name: 'Billing & Subscriptions',
            faqs: [
                {
                    question: 'How can I upgrade my plan?',
                    answer: 'To upgrade your plan, click on the "Upgrade Plan" button in the sidebar or go to Settings > Billing & Subscription and select "Upgrade". Choose the plan that best fits your needs and follow the payment instructions.'
                },
                {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept most major credit cards (Visa, Mastercard, American Express), PayPal, and in selected countries, direct bank transfers. All payments are processed securely through our payment partners.'
                },
                {
                    question: 'How can I get a refund?',
                    answer: 'If you\'re not satisfied with our service, you can request a refund within 14 days of your purchase. Please contact our support team via the chat or email support@whatsbulk.com with your account details and reason for the refund.'
                }
            ]
        }
    ];

    // Video tutorials data
    const videoTutorials = [
        {
            id: 1,
            title: 'Getting Started with WhatsBulk',
            duration: '5:32',
            thumbnail: `${img}`,
            url: 'https://www.youtube.com/watch?v=cleQjLtKNGM'
        },
        {
            id: 2,
            title: 'Creating Your First Campaign',
            duration: '7:14',
            thumbnail: `${img2}`,
            url: 'https://www.youtube.com/watch?v=cleQjLtKNGM'
        },
        {
            id: 3,
            title: 'Advanced Contact Management',
            duration: '8:45',
            thumbnail: `${img}`,
            url: 'https://www.youtube.com/watch?v=cleQjLtKNGM'
        },
        {
            id: 4,
            title: 'Message Templates and Variables',
            duration: '6:22',
            thumbnail: `${img2}`,
            url: 'https://www.youtube.com/watch?v=cleQjLtKNGM'
        },
        {
            id: 5,
            title: 'Understanding Analytics',
            duration: '9:17',
            thumbnail: `${img}`,
            url: 'https://www.youtube.com/watch?v=cleQjLtKNGM'
        },
        {
            id: 6,
            title: 'WhatsApp Business API Integration',
            duration: '11:03',
            thumbnail: `${img2}`,
            url: 'https://www.youtube.com/watch?v=cleQjLtKNGM'
        }
    ];

    // Knowledge base articles
    const knowledgeBaseArticles = [
        {
            id: 1,
            title: 'WhatsApp Business Policy Compliance Guide',
            category: 'Compliance',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'Understanding Delivery Reports and Analytics',
            category: 'Analytics',
            readTime: '8 min read'
        },
        {
            id: 3,
            title: 'Best Practices for High Open Rates',
            category: 'Optimization',
            readTime: '6 min read'
        },
        {
            id: 4,
            title: 'Using Dynamic Variables in Your Messages',
            category: 'Templates',
            readTime: '4 min read'
        },
        {
            id: 5,
            title: 'Creating Effective Segmentation for Targeted Campaigns',
            category: 'Contacts',
            readTime: '7 min read'
        },
        {
            id: 6,
            title: 'Troubleshooting Common Message Delivery Issues',
            category: 'Troubleshooting',
            readTime: '9 min read'
        }
    ];

    // Filter FAQs based on search query
    const filteredFAQs = faqCategories.flatMap(category =>
        category.faqs.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(faq => ({ ...faq, category: category.name }))
    );

    // Render the appropriate content based on active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'faq':
                return (
                    <div className="space-y-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <SearchIcon />
                            </div>
                            <input
                                type="text"
                                className="w-full p-4 pl-10 bg-emerald-800/20 border border-emerald-800/30 rounded-lg text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Search frequently asked questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {searchQuery ? (
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-white">Search Results</h2>
                                {filteredFAQs.length > 0 ? (
                                    filteredFAQs.map((faq, index) => (
                                        <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20">
                                            <div className="text-emerald-200 text-sm mb-1">{faq.category}</div>
                                            <h3 className="text-white font-medium text-lg mb-2">{faq.question}</h3>
                                            <p className="text-emerald-100">{faq.answer}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 text-center">
                                        <p className="text-emerald-100">No results found. Try a different search term or browse our categories below.</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            faqCategories.map((category) => (
                                <div key={category.id} className="space-y-4">
                                    <h2 className="text-xl font-semibold text-white">{category.name}</h2>
                                    {category.faqs.map((faq, index) => (
                                        <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20">
                                            <h3 className="text-white font-medium text-lg mb-2">{faq.question}</h3>
                                            <p className="text-emerald-100">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            ))
                        )}
                    </div>
                );
            case 'tutorials':
                return (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-white">Video Tutorials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {videoTutorials.map((video) => (
                                <div key={video.id} className="bg-white/5 backdrop-blur-sm rounded-xl border border-emerald-800/20 overflow-hidden">
                                    <div className="relative">
                                        <img src={video.thumbnail} alt={video.title} className="w-full" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <a href={video.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                            {video.duration}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-white font-medium">{video.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'knowledge':
                return (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-white">Knowledge Base</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {knowledgeBaseArticles.map((article) => (
                                <div key={article.id} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="text-emerald-400 text-sm font-medium">{article.category}</span>
                                            <h3 className="text-white font-medium mt-1">{article.title}</h3>
                                        </div>
                                        <span className="text-emerald-300 text-xs">{article.readTime}</span>
                                    </div>
                                    <div className="mt-4">
                                        <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">Read Article →</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <button className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium">
                                View all articles
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-white">Contact Support</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 text-center">
                                <div className="w-12 h-12 bg-emerald-800/40 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ChatIcon />
                                </div>
                                <h3 className="text-white font-medium mb-2">Live Chat</h3>
                                <p className="text-emerald-100 mb-4">Talk to our support team in real-time</p>
                                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                                    Start Chat
                                </button>
                                <p className="text-emerald-300 text-sm mt-2">Available 24/7</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 text-center">
                                <div className="w-12 h-12 bg-emerald-800/40 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MailIcon />
                                </div>
                                <h3 className="text-white font-medium mb-2">Email Support</h3>
                                <p className="text-emerald-100 mb-4">Send us a message and we'll respond within 24 hours</p>
                                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                                    Send Email
                                </button>
                                <p className="text-emerald-300 text-sm mt-2">support@whatsbulk.com</p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20 text-center">
                                <div className="w-12 h-12 bg-emerald-800/40 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <PhoneIcon />
                                </div>
                                <h3 className="text-white font-medium mb-2">Phone Support</h3>
                                <p className="text-emerald-100 mb-4">Schedule a call with a product specialist</p>
                                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                                    Schedule Call
                                </button>
                                <p className="text-emerald-300 text-sm mt-2">Business hours: 9AM-5PM EST</p>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-emerald-800/20">
                            <h3 className="text-white font-medium mb-4">Submit a Support Ticket</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-emerald-100 mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full p-3 bg-emerald-800/20 border border-emerald-800/30 rounded-lg text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-emerald-100 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full p-3 bg-emerald-800/20 border border-emerald-800/30 rounded-lg text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="issue" className="block text-emerald-100 mb-1">Issue Type</label>
                                    <select
                                        id="issue"
                                        className="w-full p-3 bg-emerald-800/20 border border-emerald-800/30 rounded-lg text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    >
                                        <option value="">Select an issue type</option>
                                        <option value="account">Account Issues</option>
                                        <option value="billing">Billing Questions</option>
                                        <option value="campaigns">Campaign Problems</option>
                                        <option value="technical">Technical Support</option>
                                        <option value="feature">Feature Requests</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-emerald-100 mb-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full p-3 bg-emerald-800/20 border border-emerald-800/30 rounded-lg text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Please describe your issue in detail"
                                    ></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-4 rounded-lg transition-colors font-medium">
                                        Submit Ticket
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Layout>
            <div className="px-4 py-6">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white">Help & Support</h1>
                        <p className="text-emerald-200 mt-2">Find answers to your questions, watch tutorials, or contact our support team</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex space-x-4 mb-8 border-b border-emerald-800/30">
                        <button
                            onClick={() => setActiveTab('faq')}
                            className={`px-4 py-2 text-sm font-medium ${activeTab === 'faq'
                                    ? 'text-white border-b-2 border-emerald-500'
                                    : 'text-emerald-200 hover:text-white'
                                }`}
                        >
                            FAQ
                        </button>
                        <button
                            onClick={() => setActiveTab('tutorials')}
                            className={`px-4 py-2 text-sm font-medium ${activeTab === 'tutorials'
                                    ? 'text-white border-b-2 border-emerald-500'
                                    : 'text-emerald-200 hover:text-white'
                                }`}
                        >
                            Video Tutorials
                        </button>
                        <button
                            onClick={() => setActiveTab('knowledge')}
                            className={`px-4 py-2 text-sm font-medium ${activeTab === 'knowledge'
                                    ? 'text-white border-b-2 border-emerald-500'
                                    : 'text-emerald-200 hover:text-white'
                                }`}
                        >
                            Knowledge Base
                        </button>
                        <button
                            onClick={() => setActiveTab('contact')}
                            className={`px-4 py-2 text-sm font-medium ${activeTab === 'contact'
                                    ? 'text-white border-b-2 border-emerald-500'
                                    : 'text-emerald-200 hover:text-white'
                                }`}
                        >
                            Contact Support
                        </button>
                    </div>

                    {/* Tab Content */}
                    {renderTabContent()}
                </div>
        </Layout>
    );
};

export default HelpAndSupport;