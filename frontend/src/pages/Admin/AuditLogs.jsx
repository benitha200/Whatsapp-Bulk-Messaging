import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { format } from 'date-fns';

// Mock data for demonstration
const mockAuditLogs = [
  {
    id: 1,
    timestamp: new Date('2025-03-05T14:32:10'),
    user: 'john.doe@example.com',
    action: 'CAMPAIGN_CREATED',
    resource: 'campaign/bulk-promo-march',
    ipAddress: '192.168.1.105',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/98.0.4758.102',
    details: { campaignName: 'March Promotion', recipients: 2500, scheduled: true }
  },
  {
    id: 2,
    timestamp: new Date('2025-03-05T12:15:22'),
    user: 'admin@whatsbulk.com',
    action: 'USER_ROLE_UPDATED',
    resource: 'user/sarah.smith',
    ipAddress: '192.168.1.1',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
    details: { oldRole: 'user', newRole: 'admin' }
  },
  {
    id: 3,
    timestamp: new Date('2025-03-04T09:45:11'),
    user: 'system',
    action: 'SUBSCRIPTION_RENEWED',
    resource: 'subscription/premium/user123',
    ipAddress: 'system',
    userAgent: 'system',
    details: { plan: 'Premium', duration: '1 year', amount: '$1200' }
  },
  {
    id: 4,
    timestamp: new Date('2025-03-04T08:22:45'),
    user: 'maria.garcia@company.com',
    action: 'TEMPLATE_APPROVED',
    resource: 'template/welcome-message',
    ipAddress: '192.168.1.78',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15',
    details: { templateName: 'Welcome Message', category: 'MARKETING' }
  },
  {
    id: 5,
    timestamp: new Date('2025-03-03T17:11:08'),
    user: 'admin@whatsbulk.com',
    action: 'API_KEY_GENERATED',
    resource: 'api/keys/user456',
    ipAddress: '192.168.1.1',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/605.1.15',
    details: { expiresIn: '30 days', permissions: ['send', 'read'] }
  },
  {
    id: 6,
    timestamp: new Date('2025-03-03T14:05:37'),
    user: 'david.wong@example.com',
    action: 'LOGIN_FAILED',
    resource: 'auth/login',
    ipAddress: '192.168.0.223',
    userAgent: 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 Chrome/99.0.4844.58',
    details: { reason: 'Invalid password', attemptCount: 2 }
  },
  {
    id: 7,
    timestamp: new Date('2025-03-02T11:22:05'),
    user: 'system',
    action: 'SYSTEM_MAINTENANCE',
    resource: 'system/database',
    ipAddress: 'system',
    userAgent: 'system',
    details: { maintenance: 'Database optimization', duration: '15 minutes' }
  },
  {
    id: 8,
    timestamp: new Date('2025-03-02T10:14:30'),
    user: 'john.doe@example.com',
    action: 'MESSAGE_BULK_SENT',
    resource: 'messages/campaign123',
    ipAddress: '192.168.1.105',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/98.0.4758.102',
    details: { campaignId: 'campaign123', messagesSent: 1500, failed: 23 }
  }
];

// Action type options for filtering
const actionTypes = [
  'All Actions',
  'CAMPAIGN_CREATED',
  'USER_ROLE_UPDATED',
  'SUBSCRIPTION_RENEWED',
  'TEMPLATE_APPROVED',
  'API_KEY_GENERATED',
  'LOGIN_FAILED',
  'SYSTEM_MAINTENANCE',
  'MESSAGE_BULK_SENT'
];

const AuditLogs = () => {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAction, setSelectedAction] = useState('All Actions');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [expandedLog, setExpandedLog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(5);

  // Fetch audit logs data
  useEffect(() => {
    // In a real app, this would be an API call
    // fetchAuditLogs().then(data => {
    //   setLogs(data);
    //   setFilteredLogs(data);
    //   setLoading(false);
    // });
    
    // Using mock data for demonstration
    setTimeout(() => {
      setLogs(mockAuditLogs);
      setFilteredLogs(mockAuditLogs);
      setLoading(false);
    }, 800);
  }, []);

  // Apply filters whenever filter state changes
  useEffect(() => {
    if (logs.length > 0) {
      let filtered = [...logs];
      
      // Filter by action type
      if (selectedAction !== 'All Actions') {
        filtered = filtered.filter(log => log.action === selectedAction);
      }
      
      // Filter by date range
      if (dateRange.from) {
        const fromDate = new Date(dateRange.from);
        filtered = filtered.filter(log => log.timestamp >= fromDate);
      }
      
      if (dateRange.to) {
        const toDate = new Date(dateRange.to);
        // Set time to end of day
        toDate.setHours(23, 59, 59, 999);
        filtered = filtered.filter(log => log.timestamp <= toDate);
      }
      
      // Filter by search term (across multiple fields)
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(log => 
          log.user.toLowerCase().includes(term) || 
          log.action.toLowerCase().includes(term) || 
          log.resource.toLowerCase().includes(term) ||
          log.ipAddress.toLowerCase().includes(term) ||
          JSON.stringify(log.details).toLowerCase().includes(term)
        );
      }
      
      setFilteredLogs(filtered);
      setCurrentPage(1); // Reset to first page after filtering
    }
  }, [logs, selectedAction, dateRange, searchTerm]);

  // Pagination logic
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);
  const totalPages = Math.ceil(filteredLogs.length / logsPerPage);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Toggle log details expansion
  const toggleLogDetails = (logId) => {
    if (expandedLog === logId) {
      setExpandedLog(null);
    } else {
      setExpandedLog(logId);
    }
  };

  // Format the log timestamp
  const formatTimestamp = (timestamp) => {
    return format(new Date(timestamp), 'MMM dd, yyyy HH:mm:ss');
  };

  // Export logs as CSV
  const exportLogs = () => {
    const headers = ['ID', 'Timestamp', 'User', 'Action', 'Resource', 'IP Address', 'User Agent', 'Details'];
    
    let csvContent = headers.join(',') + '\n';
    
    filteredLogs.forEach(log => {
      const row = [
        log.id,
        formatTimestamp(log.timestamp),
        log.user,
        log.action,
        log.resource,
        log.ipAddress,
        `"${log.userAgent}"`, // Wrap in quotes to handle commas
        `"${JSON.stringify(log.details)}"` // Wrap in quotes to handle commas
      ];
      
      csvContent += row.join(',') + '\n';
    });
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `audit-logs-export-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Get class for action type (for color coding)
  const getActionClass = (action) => {
    switch (action) {
      case 'CAMPAIGN_CREATED':
      case 'TEMPLATE_APPROVED':
      case 'SUBSCRIPTION_RENEWED':
        return 'bg-green-100 text-green-800';
      case 'USER_ROLE_UPDATED':
      case 'API_KEY_GENERATED':
      case 'SYSTEM_MAINTENANCE':
        return 'bg-blue-100 text-blue-800';
      case 'LOGIN_FAILED':
        return 'bg-red-100 text-red-800';
      case 'MESSAGE_BULK_SENT':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout activePage="logs">
      <div className="px-4 py-6 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Audit Logs</h1>
            <p className="mt-1 text-emerald-300">
              View and manage system activity logs
            </p>
          </div>
          <button 
            onClick={exportLogs}
            className="mt-4 md:mt-0 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-md flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export CSV
          </button>
        </div>

        {/* Filters */}
        <div className="bg-emerald-900/40 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search box */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-emerald-300 mb-1">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full bg-emerald-800/30 border border-emerald-700 rounded-md py-2 pl-10 pr-3 text-emerald-100 placeholder-emerald-500 focus:outline-none focus:border-emerald-500"
                  placeholder="Search logs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Action type filter */}
            <div>
              <label htmlFor="action-type" className="block text-sm font-medium text-emerald-300 mb-1">
                Action Type
              </label>
              <select
                id="action-type"
                className="block w-full bg-emerald-800/30 border border-emerald-700 rounded-md py-2 px-3 text-emerald-100 focus:outline-none focus:border-emerald-500"
                value={selectedAction}
                onChange={(e) => setSelectedAction(e.target.value)}
              >
                {actionTypes.map((action, index) => (
                  <option key={index} value={action}>
                    {action}
                  </option>
                ))}
              </select>
            </div>

            {/* Date from filter */}
            <div>
              <label htmlFor="date-from" className="block text-sm font-medium text-emerald-300 mb-1">
                Date From
              </label>
              <input
                type="date"
                id="date-from"
                className="block w-full bg-emerald-800/30 border border-emerald-700 rounded-md py-2 px-3 text-emerald-100 focus:outline-none focus:border-emerald-500"
                value={dateRange.from}
                onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
              />
            </div>

            {/* Date to filter */}
            <div>
              <label htmlFor="date-to" className="block text-sm font-medium text-emerald-300 mb-1">
                Date To
              </label>
              <input
                type="date"
                id="date-to"
                className="block w-full bg-emerald-800/30 border border-emerald-700 rounded-md py-2 px-3 text-emerald-100 focus:outline-none focus:border-emerald-500"
                value={dateRange.to}
                onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4 text-emerald-300 text-sm">
          Showing {filteredLogs.length} {filteredLogs.length === 1 ? 'record' : 'records'}
          {searchTerm && ` matching "${searchTerm}"`}
          {selectedAction !== 'All Actions' && ` for action type "${selectedAction}"`}
        </div>

        {/* Logs table */}
        <div className="bg-emerald-900/40 backdrop-blur-sm rounded-lg overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <svg className="animate-spin h-8 w-8 mx-auto text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="mt-2 text-emerald-300">Loading audit logs...</p>
            </div>
          ) : filteredLogs.length === 0 ? (
            <div className="p-8 text-center text-emerald-300">
              <svg className="h-16 w-16 mx-auto text-emerald-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-lg font-medium">No logs found</p>
              <p className="mt-1">Try changing your search criteria</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-emerald-800/30">
                <thead className="bg-emerald-800/20">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                      User
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                      Action
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                      Resource
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                      IP Address
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                      <span className="sr-only">Expand</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-800/30">
                  {currentLogs.map((log) => (
                    <React.Fragment key={log.id}>
                      <tr className="hover:bg-emerald-800/20">
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-emerald-100">
                          {formatTimestamp(log.timestamp)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-emerald-100">
                          {log.user}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getActionClass(log.action)}`}>
                            {log.action}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-emerald-100">
                          {log.resource}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-emerald-100">
                          {log.ipAddress}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => toggleLogDetails(log.id)}
                            className="text-emerald-400 hover:text-emerald-300 focus:outline-none"
                          >
                            {expandedLog === log.id ? (
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                            ) : (
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                          </button>
                        </td>
                      </tr>
                      {/* Expanded details row */}
                      {expandedLog === log.id && (
                        <tr className="bg-emerald-800/10">
                          <td colSpan="6" className="px-4 py-4">
                            <div className="text-sm">
                              <h4 className="font-medium text-emerald-300 mb-2">Log Details</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <p className="text-emerald-300">
                                    <span className="font-medium">User Agent:</span>{' '}
                                    <span className="text-emerald-100">{log.userAgent}</span>
                                  </p>
                                </div>
                                <div>
                                  <p className="text-emerald-300">
                                    <span className="font-medium">Log ID:</span>{' '}
                                    <span className="text-emerald-100">{log.id}</span>
                                  </p>
                                </div>
                              </div>
                              <div className="mt-4">
                                <h5 className="font-medium text-emerald-300 mb-2">Event Details:</h5>
                                <pre className="bg-emerald-800/20 p-3 rounded text-emerald-100 overflow-x-auto">
                                  {JSON.stringify(log.details, null, 2)}
                                </pre>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {!loading && filteredLogs.length > 0 && (
            <div className="px-4 py-3 flex items-center justify-between border-t border-emerald-800/30 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-4 py-2 border border-emerald-700 text-sm font-medium rounded-md ${
                    currentPage === 1
                      ? 'bg-emerald-900/40 text-emerald-500 cursor-not-allowed'
                      : 'bg-emerald-800 text-emerald-200 hover:bg-emerald-700'
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`ml-3 relative inline-flex items-center px-4 py-2 border border-emerald-700 text-sm font-medium rounded-md ${
                    currentPage === totalPages
                      ? 'bg-emerald-900/40 text-emerald-500 cursor-not-allowed'
                      : 'bg-emerald-800 text-emerald-200 hover:bg-emerald-700'
                  }`}
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-emerald-300">
                    Showing <span className="font-medium">{indexOfFirstLog + 1}</span> to{' '}
                    <span className="font-medium">
                      {Math.min(indexOfLastLog, filteredLogs.length)}
                    </span>{' '}
                    of <span className="font-medium">{filteredLogs.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-emerald-700 text-sm font-medium ${
                        currentPage === 1
                          ? 'bg-emerald-900/40 text-emerald-500 cursor-not-allowed'
                          : 'bg-emerald-800 text-emerald-400 hover:bg-emerald-700'
                      }`}
                    >
                      <span className="sr-only">Previous</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {pageNumbers.map(number => (
                      <button
                        key={number}
                        onClick={() => setCurrentPage(number)}
                        className={`relative inline-flex items-center px-4 py-2 border border-emerald-700 text-sm font-medium ${
                          currentPage === number
                            ? 'z-10 bg-emerald-600 text-white'
                            : 'bg-emerald-800 text-emerald-200 hover:bg-emerald-700'
                        }`}
                      >
                        {number}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-emerald-700 text-sm font-medium ${
                        currentPage === totalPages
                          ? 'bg-emerald-900/40 text-emerald-500 cursor-not-allowed'
                          : 'bg-emerald-800 text-emerald-400 hover:bg-emerald-700'
                      }`}
                    >
                      <span className="sr-only">Next</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AuditLogs;