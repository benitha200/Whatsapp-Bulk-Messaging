import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const SupportTicketsPage = () => {
    // Sample ticket data - in a real app, this would come from an API
    const [tickets, setTickets] = useState([
        {
            id: 'TICK-1001',
            subject: 'API Integration Issues',
            description: 'Having trouble connecting my CRM to the WhatsApp API',
            status: 'Open',
            priority: 'High',
            category: 'API',
            createdAt: '2025-03-01T10:30:00',
            updatedAt: '2025-03-02T14:20:00',
            userId: 'USR-2342',
            userName: 'John Smith',
            userEmail: 'john@example.com',
            userPlan: 'Business Pro',
            messages: [
                {
                    id: 1,
                    sender: 'user',
                    message: 'I\'m receiving error code 403 when trying to connect my Salesforce instance to your API.',
                    timestamp: '2025-03-01T10:30:00'
                },
                {
                    id: 2,
                    sender: 'admin',
                    message: 'Thanks for reporting this. Could you please share your API key and the exact error message you\'re seeing?',
                    timestamp: '2025-03-02T14:20:00',
                    adminName: 'Support Team'
                }
            ],
            assigned: 'Support Team'
        },
        {
            id: 'TICK-1002',
            subject: 'Billing Discrepancy',
            description: 'I was charged twice for my monthly subscription',
            status: 'InProgress',
            priority: 'Medium',
            category: 'Billing',
            createdAt: '2025-03-02T09:15:00',
            updatedAt: '2025-03-03T11:45:00',
            userId: 'USR-1578',
            userName: 'Sarah Miller',
            userEmail: 'sarah@company.org',
            userPlan: 'Enterprise',
            messages: [
                {
                    id: 1,
                    sender: 'user',
                    message: 'I noticed that I was charged twice on March 1st for my monthly subscription. Please help.',
                    timestamp: '2025-03-02T09:15:00'
                },
                {
                    id: 2,
                    sender: 'admin',
                    message: 'I apologize for the inconvenience. I\'ve checked your account and can confirm there was a duplicate charge. We\'ll process a refund right away.',
                    timestamp: '2025-03-03T11:45:00',
                    adminName: 'Billing Support'
                }
            ],
            assigned: 'Billing Support'
        },
        {
            id: 'TICK-1003',
            subject: 'Message Delivery Failed',
            description: 'Bulk campaign to 1000+ contacts failed to deliver',
            status: 'New',
            priority: 'Critical',
            category: 'Delivery',
            createdAt: '2025-03-05T16:20:00',
            updatedAt: '2025-03-05T16:20:00',
            userId: 'USR-4208',
            userName: 'Acme Corporation',
            userEmail: 'support@acme.com',
            userPlan: 'Enterprise Plus',
            messages: [
                {
                    id: 1,
                    sender: 'user',
                    message: 'Our promotional campaign scheduled for 3pm today failed to deliver. This is urgent as we have time-sensitive offers that need to reach our customers.',
                    timestamp: '2025-03-05T16:20:00'
                }
            ],
            assigned: 'Unassigned'
        },
        {
            id: 'TICK-1004',
            subject: 'Template Rejected',
            description: 'Need clarification on why my template was rejected',
            status: 'Resolved',
            priority: 'Low',
            category: 'Templates',
            createdAt: '2025-02-28T13:10:00',
            updatedAt: '2025-03-04T09:30:00',
            userId: 'USR-3615',
            userName: 'Maria Rodriguez',
            userEmail: 'maria@smallbiz.net',
            userPlan: 'Business',
            messages: [
                {
                    id: 1,
                    sender: 'user',
                    message: 'My template was rejected but I don\'t understand why. Can someone please explain the specific policy violation?',
                    timestamp: '2025-02-28T13:10:00'
                },
                {
                    id: 2,
                    sender: 'admin',
                    message: 'I\'ve reviewed your template and it was rejected because it contains promotional content in a non-promotional template type. You need to use a marketing template for promotional content.',
                    timestamp: '2025-03-01T10:25:00',
                    adminName: 'Template Reviewer'
                },
                {
                    id: 3,
                    sender: 'user',
                    message: 'Thank you for explaining. I\'ll resubmit with the correct template type.',
                    timestamp: '2025-03-01T15:40:00'
                },
                {
                    id: 4,
                    sender: 'admin',
                    message: 'You\'re welcome! Let me know if you need any help with the resubmission process.',
                    timestamp: '2025-03-04T09:30:00',
                    adminName: 'Template Reviewer'
                }
            ],
            assigned: 'Template Reviewer'
        },
        {
            id: 'TICK-1005',
            subject: 'Account Verification',
            description: 'Need help with business verification process',
            status: 'Closed',
            priority: 'Medium',
            category: 'Account',
            createdAt: '2025-02-25T11:05:00',
            updatedAt: '2025-03-01T15:30:00',
            userId: 'USR-2987',
            userName: 'Global Traders Inc',
            userEmail: 'admin@globaltraders.biz',
            userPlan: 'Enterprise',
            messages: [
                {
                    id: 1,
                    sender: 'user',
                    message: 'We\'re stuck at the business verification step. We\'ve uploaded all requested documents but still see a pending status.',
                    timestamp: '2025-02-25T11:05:00'
                },
                {
                    id: 2,
                    sender: 'admin',
                    message: 'Thank you for reaching out. I\'ll check the status of your verification right away.',
                    timestamp: '2025-02-25T13:45:00',
                    adminName: 'Verification Team'
                },
                {
                    id: 3,
                    sender: 'admin',
                    message: 'I checked your documents and there seems to be an issue with the business license - it appears to be expired. Can you please upload a current license?',
                    timestamp: '2025-02-26T09:10:00',
                    adminName: 'Verification Team'
                },
                {
                    id: 4,
                    sender: 'user',
                    message: 'Sorry about that. I\'ve just uploaded the current license.',
                    timestamp: '2025-02-28T16:20:00'
                },
                {
                    id: 5,
                    sender: 'admin',
                    message: 'Perfect! I\'ve approved your business verification. Your account is now fully verified and you have access to all Enterprise features.',
                    timestamp: '2025-03-01T15:30:00',
                    adminName: 'Verification Team'
                }
            ],
            assigned: 'Verification Team'
        }
    ]);

    // Selected ticket for viewing details
    const [selectedTicket, setSelectedTicket] = useState(null);

    // Filter and sort states
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterPriority, setFilterPriority] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('newest');

    // Reply form state
    const [replyMessage, setReplyMessage] = useState('');

    // Helper function to format date
    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Filter tickets based on current filters
    const filteredTickets = tickets.filter(ticket => {
        // Filter by status
        if (filterStatus !== 'all' && ticket.status !== filterStatus) {
            return false;
        }

        // Filter by priority
        if (filterPriority !== 'all' && ticket.priority !== filterPriority) {
            return false;
        }

        // Search query (check in ID, subject, description, and user name)
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return (
                ticket.id.toLowerCase().includes(query) ||
                ticket.subject.toLowerCase().includes(query) ||
                ticket.description.toLowerCase().includes(query) ||
                ticket.userName.toLowerCase().includes(query)
            );
        }

        return true;
    });

    // Sort filtered tickets
    const sortedTickets = [...filteredTickets].sort((a, b) => {
        switch (sortBy) {
            case 'newest':
                return new Date(b.createdAt) - new Date(a.createdAt);
            case 'oldest':
                return new Date(a.createdAt) - new Date(b.createdAt);
            case 'priority':
                const priorityOrder = { 'Critical': 0, 'High': 1, 'Medium': 2, 'Low': 3 };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            case 'updated':
                return new Date(b.updatedAt) - new Date(a.updatedAt);
            default:
                return 0;
        }
    });

    // Handle ticket selection
    const handleSelectTicket = (ticket) => {
        setSelectedTicket(ticket);
    };

    // Handle sending reply
    const handleSendReply = (e) => {
        e.preventDefault();

        if (!replyMessage.trim() || !selectedTicket) return;

        // In a real app, you would send this to your API
        const newMessage = {
            id: selectedTicket.messages.length + 1,
            sender: 'admin',
            message: replyMessage,
            timestamp: new Date().toISOString(),
            adminName: 'Admin User' // This would be the logged-in admin
        };

        // Update the ticket with the new message
        const updatedTickets = tickets.map(ticket => {
            if (ticket.id === selectedTicket.id) {
                const updatedTicket = {
                    ...ticket,
                    messages: [...ticket.messages, newMessage],
                    updatedAt: new Date().toISOString(),
                    status: ticket.status === 'New' ? 'InProgress' : ticket.status
                };
                setSelectedTicket(updatedTicket);
                return updatedTicket;
            }
            return ticket;
        });

        setTickets(updatedTickets);
        setReplyMessage('');
    };

    // Handle status change
    const handleStatusChange = (newStatus) => {
        if (!selectedTicket) return;

        const updatedTickets = tickets.map(ticket => {
            if (ticket.id === selectedTicket.id) {
                const updatedTicket = {
                    ...ticket,
                    status: newStatus,
                    updatedAt: new Date().toISOString()
                };
                setSelectedTicket(updatedTicket);
                return updatedTicket;
            }
            return ticket;
        });

        setTickets(updatedTickets);
    };

    // Handle priority change
    const handlePriorityChange = (newPriority) => {
        if (!selectedTicket) return;

        const updatedTickets = tickets.map(ticket => {
            if (ticket.id === selectedTicket.id) {
                const updatedTicket = {
                    ...ticket,
                    priority: newPriority,
                    updatedAt: new Date().toISOString()
                };
                setSelectedTicket(updatedTicket);
                return updatedTicket;
            }
            return ticket;
        });

        setTickets(updatedTickets);
    };

    // Handle assignment change
    const handleAssignChange = (e) => {
        if (!selectedTicket) return;

        const updatedTickets = tickets.map(ticket => {
            if (ticket.id === selectedTicket.id) {
                const updatedTicket = {
                    ...ticket,
                    assigned: e.target.value,
                    updatedAt: new Date().toISOString()
                };
                setSelectedTicket(updatedTicket);
                return updatedTicket;
            }
            return ticket;
        });

        setTickets(updatedTickets);
    };

    // Status badge color mapping
    const getStatusColor = (status) => {
        switch (status) {
            case 'New':
                return 'bg-blue-100 text-blue-800';
            case 'Open':
                return 'bg-yellow-100 text-yellow-800';
            case 'InProgress':
                return 'bg-purple-100 text-purple-800';
            case 'Resolved':
                return 'bg-green-100 text-green-800';
            case 'Closed':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Priority badge color mapping
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Critical':
                return 'bg-red-100 text-red-800';
            case 'High':
                return 'bg-orange-100 text-orange-800';
            case 'Medium':
                return 'bg-yellow-100 text-yellow-800';
            case 'Low':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AdminLayout activePage="tickets">
            <div className="p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-white mb-2">Support Tickets</h1>
                    <p className="text-emerald-200">Manage and respond to customer support requests</p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Tickets List Panel */}
                    <div className="xl:col-span-1 bg-emerald-900/30 backdrop-blur-md rounded-lg border border-emerald-800/30 overflow-hidden">
                        {/* Search and Filter Controls */}
                        <div className="p-4 border-b border-emerald-800/30">
                            <div className="relative mb-4">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search tickets..."
                                    className="w-full pl-10 pr-4 py-2 bg-emerald-800/30 border border-emerald-700/30 rounded-md text-emerald-100 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="status-filter" className="block text-sm font-medium text-emerald-300 mb-1">Status</label>
                                    <select
                                        id="status-filter"
                                        className="w-full bg-emerald-800/30 border border-emerald-700/30 rounded-md text-emerald-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        value={filterStatus}
                                        onChange={(e) => setFilterStatus(e.target.value)}
                                    >
                                        <option value="all">All Statuses</option>
                                        <option value="New">New</option>
                                        <option value="Open">Open</option>
                                        <option value="InProgress">In Progress</option>
                                        <option value="Resolved">Resolved</option>
                                        <option value="Closed">Closed</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="priority-filter" className="block text-sm font-medium text-emerald-300 mb-1">Priority</label>
                                    <select
                                        id="priority-filter"
                                        className="w-full bg-emerald-800/30 border border-emerald-700/30 rounded-md text-emerald-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        value={filterPriority}
                                        onChange={(e) => setFilterPriority(e.target.value)}
                                    >
                                        <option value="all">All Priorities</option>
                                        <option value="Critical">Critical</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Sort Controls */}
                        <div className="p-4 border-b border-emerald-800/30">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium text-emerald-300">Sort by</h3>
                                <div className="flex space-x-2">
                                    <button
                                        className={`px-3 py-1 text-xs rounded-md ${sortBy === 'newest' ? 'bg-emerald-600 text-white' : 'bg-emerald-800/30 text-emerald-300 hover:bg-emerald-700/40'}`}
                                        onClick={() => setSortBy('newest')}
                                    >
                                        Newest
                                    </button>
                                    <button
                                        className={`px-3 py-1 text-xs rounded-md ${sortBy === 'priority' ? 'bg-emerald-600 text-white' : 'bg-emerald-800/30 text-emerald-300 hover:bg-emerald-700/40'}`}
                                        onClick={() => setSortBy('priority')}
                                    >
                                        Priority
                                    </button>
                                    <button
                                        className={`px-3 py-1 text-xs rounded-md ${sortBy === 'updated' ? 'bg-emerald-600 text-white' : 'bg-emerald-800/30 text-emerald-300 hover:bg-emerald-700/40'}`}
                                        onClick={() => setSortBy('updated')}
                                    >
                                        Updated
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Tickets List */}
                        <div className="overflow-y-auto max-h-[calc(100vh-400px)]">
                            {sortedTickets.length === 0 ? (
                                <div className="p-6 text-center text-emerald-300">
                                    <svg className="w-12 h-12 mx-auto text-emerald-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <p>No tickets match your filters</p>
                                </div>
                            ) : (
                                <ul>
                                    {sortedTickets.map((ticket) => (
                                        <li
                                            key={ticket.id}
                                            className={`border-b border-emerald-800/30 cursor-pointer hover:bg-emerald-800/20 transition ${selectedTicket && selectedTicket.id === ticket.id ? 'bg-emerald-800/40' : ''}`}
                                            onClick={() => handleSelectTicket(ticket)}
                                        >
                                            <div className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="text-xs font-medium text-emerald-400">{ticket.id}</span>
                                                    <div className="flex space-x-2">
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(ticket.status)}`}>
                                                            {ticket.status}
                                                        </span>
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(ticket.priority)}`}>
                                                            {ticket.priority}
                                                        </span>
                                                    </div>
                                                </div>
                                                <h3 className="font-medium text-white mb-1 truncate">{ticket.subject}</h3>
                                                <p className="text-sm text-emerald-300 mb-2 truncate">{ticket.description}</p>
                                                <div className="flex justify-between text-xs text-emerald-400">
                                                    <span>{ticket.userName}</span>
                                                    <span>{formatDate(ticket.createdAt)}</span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Tickets Summary */}
                        <div className="bg-emerald-800/30 p-4 border-t border-emerald-800/30">
                            <div className="grid grid-cols-4 gap-2">
                                <div className="text-center">
                                    <div className="text-xl font-semibold text-white">{tickets.filter(t => t.status === 'New').length}</div>
                                    <div className="text-xs text-emerald-400">New</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-semibold text-white">{tickets.filter(t => t.status === 'Open' || t.status === 'InProgress').length}</div>
                                    <div className="text-xs text-emerald-400">Active</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-semibold text-white">{tickets.filter(t => t.status === 'Resolved').length}</div>
                                    <div className="text-xs text-emerald-400">Resolved</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-semibold text-white">{tickets.length}</div>
                                    <div className="text-xs text-emerald-400">Total</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ticket Details Panel */}
                    <div className="xl:col-span-2">
                        {selectedTicket ? (
                            <div className="bg-emerald-900/30 backdrop-blur-md rounded-lg border border-emerald-800/30 overflow-hidden h-full flex flex-col">
                                {/* Ticket Header */}
                                <div className="p-4 border-b border-emerald-800/30">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center">
                                            <span className="text-emerald-400 font-mono text-sm mr-3">{selectedTicket.id}</span>
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(selectedTicket.status)}`}>
                                                {selectedTicket.status}
                                            </span>
                                            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${getPriorityColor(selectedTicket.priority)}`}>
                                                {selectedTicket.priority}
                                            </span>
                                            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-700/40 text-emerald-200">
                                                {selectedTicket.category}
                                            </span>
                                        </div>
                                        <div className="text-sm text-emerald-300">
                                            Created: {formatDate(selectedTicket.createdAt)}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-2">{selectedTicket.subject}</h2>
                                    <p className="text-emerald-200 mb-4">{selectedTicket.description}</p>

                                    {/* User Info */}
                                    <div className="bg-emerald-800/20 rounded-lg p-3 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded-full bg-emerald-700 flex items-center justify-center text-white">
                                                {selectedTicket.userName.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-white font-medium">{selectedTicket.userName}</div>
                                                <div className="text-xs text-emerald-300 flex items-center">
                                                    <span className="mr-3">{selectedTicket.userEmail}</span>
                                                    <span className="px-2 py-0.5 rounded bg-emerald-700/40 text-emerald-200">
                                                        {selectedTicket.userPlan}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <a href={`/admin/users/${selectedTicket.userId}`} className="text-emerald-400 hover:text-emerald-300">
                                            View Profile
                                        </a>
                                    </div>
                                </div>

                                {/* Ticket Actions Bar */}
                                <div className="p-4 bg-emerald-800/20 border-b border-emerald-800/30 flex flex-wrap gap-4">
                                    {/* Status Dropdown */}
                                    <div>
                                        <label htmlFor="ticket-status" className="block text-xs font-medium text-emerald-300 mb-1">Status</label>
                                        <select
                                            id="ticket-status"
                                            className="bg-emerald-800/30 border border-emerald-700/30 rounded-md text-emerald-100 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                            value={selectedTicket.status}
                                            onChange={(e) => handleStatusChange(e.target.value)}
                                        >
                                            <option value="New">New</option>
                                            <option value="Open">Open</option>
                                            <option value="InProgress">In Progress</option>
                                            <option value="Resolved">Resolved</option>
                                            <option value="Closed">Closed</option>
                                        </select>
                                    </div>

                                    {/* Priority Dropdown */}
                                    <div>
                                        <label htmlFor="ticket-priority" className="block text-xs font-medium text-emerald-300 mb-1">Priority</label>
                                        <select
                                            id="ticket-priority"
                                            className="bg-emerald-800/30 border border-emerald-700/30 rounded-md text-emerald-100 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                            value={selectedTicket.priority}
                                            onChange={(e) => handlePriorityChange(e.target.value)}
                                        >
                                            <option value="Critical">Critical</option>
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </div>

                                    {/* Assign Dropdown */}
                                    <div>
                                        <label htmlFor="ticket-assign" className="block text-xs font-medium text-emerald-300 mb-1">Assigned To</label>
                                        <select
                                            id="ticket-assign"
                                            className="bg-emerald-800/30 border border-emerald-700/30 rounded-md text-emerald-100 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                            value={selectedTicket.assigned}
                                            onChange={handleAssignChange}
                                        >
                                            <option value="Unassigned">Unassigned</option>
                                            <option value="Support Team">Support Team</option>
                                            <option value="Billing Support">Billing Support</option>
                                            <option value="Technical Support">Technical Support</option>
                                            <option value="Template Reviewer">Template Reviewer</option>
                                            <option value="Verification Team">Verification Team</option>
                                            <option value="Admin User">Myself</option>
                                        </select>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="ml-auto">
                                        <button className="bg-emerald-700 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded-md transition">
                                            Merge Ticket
                                        </button>
                                        <button className="ml-2 bg-transparent hover:bg-emerald-800/50 text-emerald-300 text-sm px-4 py-2 rounded-md border border-emerald-700/50 transition">
                                            Internal Note
                                        </button>
                                    </div>
                                </div>

                                {/* Conversation */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    {selectedTicket.messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-3/4 rounded-lg p-3 ${message.sender === 'admin'
                                                        ? 'bg-emerald-700/40 text-white'
                                                        : 'bg-emerald-800/30 text-emerald-200'
                                                    }`}
                                            >
                                                <div className="flex items-center mb-1">
                                                    <span className="font-medium text-sm">
                                                        {message.sender === 'admin' ? message.adminName : selectedTicket.userName}
                                                    </span>
                                                    <span className="text-xs ml-2 text-emerald-300">
                                                        {formatDate(message.timestamp)}
                                                    </span>
                                                </div>
                                                <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Reply Form */}
                                <div className="p-4 border-t border-emerald-800/30">
                                    <form onSubmit={handleSendReply}>
                                        <div className="mb-3">
                                            <textarea
                                                placeholder="Type your reply..."
                                                className="w-full bg-emerald-800/30 border border-emerald-700/30 rounded-md text-emerald-100 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                                rows={3}
                                                value={replyMessage}
                                                onChange={(e) => setReplyMessage(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    type="button"
                                                    className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-800/30 rounded-md transition"
                                                    title="Attach File"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-800/30 rounded-md transition"
                                                    title="Add Template"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-800/30 rounded-md transition"
                                                    title="Add Canned Response"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button
                                                    type="button"
                                                    className="px-4 py-2 text-sm text-emerald-400 hover:text-emerald-300 border border-emerald-700/30 rounded-md hover:bg-emerald-800/30 transition"
                                                >
                                                    Save Draft
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 text-sm bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition flex items-center"
                                                    disabled={!replyMessage.trim()}
                                                >
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                    Send Reply
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-emerald-900/30 backdrop-blur-md rounded-lg border border-emerald-800/30 h-full flex items-center justify-center">
                                <div className="text-center p-6">
                                    <svg className="w-16 h-16 mx-auto text-emerald-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                    <h3 className="text-lg font-medium text-white mb-2">No Ticket Selected</h3>
                                    <p className="text-emerald-300 mb-4">Select a ticket from the list to view details and respond</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default SupportTicketsPage;