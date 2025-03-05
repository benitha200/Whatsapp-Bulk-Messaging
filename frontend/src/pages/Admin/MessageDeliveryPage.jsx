import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const MessageDeliveryPage = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Sample message delivery data
  const deliveryData = [
    { id: 'MSG-1001', campaign: 'March Promotion', recipient: '+1234567890', status: 'delivered', timestamp: '2023-03-06 14:32:45', message: 'Get 20% off on all products this weekend!', attempts: 1 },
    { id: 'MSG-1002', campaign: 'Payment Reminder', recipient: '+2345678901', status: 'failed', timestamp: '2023-03-06 14:30:12', message: 'Your payment is due in 2 days.', attempts: 3 },
    { id: 'MSG-1003', campaign: 'New Product Launch', recipient: '+3456789012', status: 'delivered', timestamp: '2023-03-06 13:45:20', message: 'Checkout our new summer collection!', attempts: 1 },
    { id: 'MSG-1004', campaign: 'Appointment Reminder', recipient: '+4567890123', status: 'pending', timestamp: '2023-03-06 13:25:10', message: 'Your appointment is scheduled for tomorrow at 10 AM.', attempts: 0 },
    { id: 'MSG-1005', campaign: 'March Promotion', recipient: '+5678901234', status: 'delivered', timestamp: '2023-03-06 13:20:05', message: 'Get 20% off on all products this weekend!', attempts: 1 },
    { id: 'MSG-1006', campaign: 'Weekly Newsletter', recipient: '+6789012345', status: 'read', timestamp: '2023-03-06 12:15:30', message: 'Check out this week\'s deals and news!', attempts: 1 },
    { id: 'MSG-1007', campaign: 'Feedback Request', recipient: '+7890123456', status: 'failed', timestamp: '2023-03-06 11:50:22', message: 'We value your feedback. Please take a moment to rate our service.', attempts: 3 },
    { id: 'MSG-1008', campaign: 'New Product Launch', recipient: '+8901234567', status: 'delivered', timestamp: '2023-03-06 11:45:18', message: 'Checkout our new summer collection!', attempts: 1 },
    { id: 'MSG-1009', campaign: 'March Promotion', recipient: '+9012345678', status: 'pending', timestamp: '2023-03-06 11:30:45', message: 'Get 20% off on all products this weekend!', attempts: 0 },
    { id: 'MSG-1010', campaign: 'Payment Reminder', recipient: '+0123456789', status: 'read', timestamp: '2023-03-06 10:25:30', message: 'Your payment is due in 2 days.', attempts: 1 },
  ];

  // Filter messages based on selected tab, search term, and status
  const filteredMessages = deliveryData.filter(message => {
    // Filter by tab
    if (selectedTab !== 'all' && message.status !== selectedTab) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && 
        !message.id.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !message.recipient.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !message.campaign.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filter by status
    if (statusFilter !== 'all' && message.status !== statusFilter) {
      return false;
    }
    
    return true;
  });

  // Get delivery statistics
  const stats = {
    total: deliveryData.length,
    delivered: deliveryData.filter(m => m.status === 'delivered').length,
    read: deliveryData.filter(m => m.status === 'read').length,
    pending: deliveryData.filter(m => m.status === 'pending').length,
    failed: deliveryData.filter(m => m.status === 'failed').length,
  };

  // Function to get status badge class
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'delivered':
        return 'bg-emerald-100 text-emerald-800';
      case 'read':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout activePage="delivery">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Message Delivery</h1>
          <p className="text-emerald-200">Monitor and manage the delivery status of all messages sent through your WhatsApp API.</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-300 text-sm">Total Messages</p>
                <h3 className="text-3xl font-bold text-white">{stats.total}</h3>
              </div>
              <div className="p-2 bg-emerald-800/30 rounded-md">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-300 text-sm">Delivered</p>
                <h3 className="text-3xl font-bold text-white">{stats.delivered}</h3>
              </div>
              <div className="p-2 bg-emerald-800/30 rounded-md">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-300 text-sm">Read</p>
                <h3 className="text-3xl font-bold text-white">{stats.read}</h3>
              </div>
              <div className="p-2 bg-emerald-800/30 rounded-md">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-300 text-sm">Pending</p>
                <h3 className="text-3xl font-bold text-white">{stats.pending}</h3>
              </div>
              <div className="p-2 bg-emerald-800/30 rounded-md">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-300 text-sm">Failed</p>
                <h3 className="text-3xl font-bold text-white">{stats.failed}</h3>
              </div>
              <div className="p-2 bg-emerald-800/30 rounded-md">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filters and Controls */}
        <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 p-4 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <div className="flex space-x-2 mb-4 md:mb-0">
              <button 
                onClick={() => setSelectedTab('all')} 
                className={`px-4 py-2 rounded-md font-medium ${
                  selectedTab === 'all' 
                    ? 'bg-emerald-700 text-white' 
                    : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setSelectedTab('delivered')} 
                className={`px-4 py-2 rounded-md font-medium ${
                  selectedTab === 'delivered' 
                    ? 'bg-emerald-700 text-white' 
                    : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                }`}
              >
                Delivered
              </button>
              <button 
                onClick={() => setSelectedTab('read')} 
                className={`px-4 py-2 rounded-md font-medium ${
                  selectedTab === 'read' 
                    ? 'bg-emerald-700 text-white' 
                    : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                }`}
              >
                Read
              </button>
              <button 
                onClick={() => setSelectedTab('pending')} 
                className={`px-4 py-2 rounded-md font-medium ${
                  selectedTab === 'pending' 
                    ? 'bg-emerald-700 text-white' 
                    : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                }`}
              >
                Pending
              </button>
              <button 
                onClick={() => setSelectedTab('failed')} 
                className={`px-4 py-2 rounded-md font-medium ${
                  selectedTab === 'failed' 
                    ? 'bg-emerald-700 text-white' 
                    : 'bg-emerald-800/30 text-emerald-200 hover:bg-emerald-800/50'
                }`}
              >
                Failed
              </button>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input
                type="text"
                placeholder="Search by ID, Campaign or Phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 bg-emerald-800/20 border border-emerald-800/30 rounded-l-md w-full text-white placeholder-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 rounded-r-md flex items-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex space-x-2 items-center">
              <label className="text-emerald-200">Date Range:</label>
              <input
                type="date"
                value={dateRange.from}
                onChange={(e) => setDateRange({...dateRange, from: e.target.value})}
                className="px-3 py-1 bg-emerald-800/20 border border-emerald-800/30 rounded-md text-white text-sm"
              />
              <span className="text-emerald-200">to</span>
              <input
                type="date"
                value={dateRange.to}
                onChange={(e) => setDateRange({...dateRange, to: e.target.value})}
                className="px-3 py-1 bg-emerald-800/20 border border-emerald-800/30 rounded-md text-white text-sm"
              />
            </div>
            
            <div className="flex space-x-2 items-center">
              <label className="text-emerald-200">Status:</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-1 bg-emerald-800/20 border border-emerald-800/30 rounded-md text-white text-sm"
              >
                <option value="all">All Statuses</option>
                <option value="delivered">Delivered</option>
                <option value="read">Read</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
              
              <button className="px-3 py-1 bg-emerald-700 hover:bg-emerald-600 text-white rounded-md text-sm">
                Apply Filters
              </button>
              <button className="px-3 py-1 bg-emerald-800/30 hover:bg-emerald-800/50 text-emerald-200 rounded-md text-sm">
                Reset
              </button>
            </div>
          </div>
        </div>
        
        {/* Messages Table */}
        <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg border border-emerald-800/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-800/30 text-left">
                  <th className="px-4 py-3 text-emerald-200 font-medium">ID</th>
                  <th className="px-4 py-3 text-emerald-200 font-medium">Campaign</th>
                  <th className="px-4 py-3 text-emerald-200 font-medium">Recipient</th>
                  <th className="px-4 py-3 text-emerald-200 font-medium">Status</th>
                  <th className="px-4 py-3 text-emerald-200 font-medium">Timestamp</th>
                  <th className="px-4 py-3 text-emerald-200 font-medium">Message</th>
                  <th className="px-4 py-3 text-emerald-200 font-medium">Attempts</th>
                  <th className="px-4 py-3 text-emerald-200 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-800/30">
                {filteredMessages.map((message) => (
                  <tr key={message.id} className="hover:bg-emerald-800/10">
                    <td className="px-4 py-3 text-emerald-100">{message.id}</td>
                    <td className="px-4 py-3 text-emerald-100">{message.campaign}</td>
                    <td className="px-4 py-3 text-emerald-100">{message.recipient}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(message.status)}`}>
                        {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-emerald-100">{message.timestamp}</td>
                    <td className="px-4 py-3 text-emerald-100 truncate max-w-xs">{message.message}</td>
                    <td className="px-4 py-3 text-center text-emerald-100">{message.attempts}</td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-2">
                        <button className="p-1 text-emerald-400 hover:text-emerald-300" title="View Details">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        {message.status === 'failed' && (
                          <button className="p-1 text-emerald-400 hover:text-emerald-300" title="Retry Sending">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="bg-emerald-800/30 px-4 py-3 flex items-center justify-between">
            <div className="text-sm text-emerald-200">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">{filteredMessages.length}</span> messages
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-emerald-800/50 text-emerald-200 rounded-md disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-emerald-700 text-white rounded-md">
                1
              </button>
              <button className="px-3 py-1 bg-emerald-800/50 text-emerald-200 rounded-md hover:bg-emerald-800/70">
                2
              </button>
              <button className="px-3 py-1 bg-emerald-800/50 text-emerald-200 rounded-md hover:bg-emerald-800/70">
                3
              </button>
              <button className="px-3 py-1 bg-emerald-800/50 text-emerald-200 rounded-md hover:bg-emerald-800/70">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default MessageDeliveryPage;