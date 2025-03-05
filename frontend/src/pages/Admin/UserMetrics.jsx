import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';

// Icons for the metrics page
const UsersIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const MessagesIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;
const DeliveryIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const FailuresIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const CampaignsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const GrowthIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const FilterIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>;
const DownloadIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;

const UserMetrics = () => {
  // State for date range filters
  const [dateRange, setDateRange] = useState('last30');
  
  // Sample user metrics data with default values to prevent undefined errors
  const [metricsData, setMetricsData] = useState({
    activeUsers: 0,
    messageSent: 0,
    deliveryRate: 0,
    failureRate: 0,
    campaigns: 0,
    userGrowth: 0,
    topUsers: [],
    userActivity: {
      labels: [],
      data: []
    },
    messagingTrends: {
      labels: [],
      data: []
    },
    deliveryStats: {
      delivered: 0,
      failed: 0,
      reasons: []
    }
  });
  
  // Sample data for demonstration
  useEffect(() => {
    // Simulating API call to fetch metrics data
    const fetchData = async () => {
      // This would be your actual API call
      // const response = await fetch('/api/admin/metrics');
      // const data = await response.json();
      
      // Sample data for demonstration
      const sampleData = {
        activeUsers: 1875,
        messageSent: 254879,
        deliveryRate: 97.6,
        failureRate: 2.4,
        campaigns: 128,
        userGrowth: 12.8,
        topUsers: [
          { id: 1, name: 'Green Tech Solutions', messages: 28567, deliveryRate: 98.2, lastActive: '2 hours ago' },
          { id: 2, name: 'Global Marketing Corp', messages: 19834, deliveryRate: 97.8, lastActive: '5 hours ago' },
          { id: 3, name: 'Pixel Digital Agency', messages: 15982, deliveryRate: 99.1, lastActive: '1 day ago' },
          { id: 4, name: 'Health Connect Services', messages: 12567, deliveryRate: 96.5, lastActive: '3 hours ago' },
          { id: 5, name: 'Education First Institute', messages: 9872, deliveryRate: 97.9, lastActive: '6 hours ago' }
        ],
        userActivity: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          data: [1420, 1525, 1680, 1750, 1820, 1875]
        },
        messagingTrends: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: [42560, 38975, 45620, 39870, 36540, 32180, 19134]
        },
        deliveryStats: {
          delivered: 248781,
          failed: 6098,
          reasons: [
            { reason: 'Invalid number', count: 2847 },
            { reason: 'User opted out', count: 1956 },
            { reason: 'Network error', count: 874 },
            { reason: 'Other', count: 421 }
          ]
        }
      };
      
      setMetricsData(sampleData);
    };
    
    fetchData();
  }, [dateRange]);
  
  // Function to handle date range change
  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
  };
  
  return (
    <AdminLayout activePage="metrics">
      <div className="px-6 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">User Metrics</h1>
            <p className="text-emerald-300">Comprehensive analytics on user activity and messaging performance</p>
          </div>
          
          {/* Filter Controls */}
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <div className="relative inline-flex">
              <select
                value={dateRange}
                onChange={handleDateRangeChange}
                className="rounded-md border-emerald-700 bg-emerald-900/50 text-emerald-100 py-2 pl-3 pr-10 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="last7">Last 7 days</option>
                <option value="last30">Last 30 days</option>
                <option value="lastQuarter">Last Quarter</option>
                <option value="ytd">Year to Date</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-emerald-300">
                <FilterIcon />
              </div>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-800/60 hover:bg-emerald-700/60 text-white rounded-md text-sm font-medium transition-colors">
              <DownloadIcon />
              Export Report
            </button>
          </div>
        </div>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {/* Active Users */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="rounded-md bg-emerald-700/30 p-2">
                <UsersIcon />
              </div>
              <span className="text-xs text-emerald-400 font-medium">Active Users</span>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold text-white">{metricsData.activeUsers.toLocaleString()}</h3>
              <p className="text-emerald-300 text-xs flex items-center mt-1">
                <span className="flex items-center text-green-400 mr-1">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  {metricsData.userGrowth}%
                </span>
                vs previous period
              </p>
            </div>
          </div>
          
          {/* Messages Sent */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="rounded-md bg-emerald-700/30 p-2">
                <MessagesIcon />
              </div>
              <span className="text-xs text-emerald-400 font-medium">Messages Sent</span>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold text-white">{metricsData.messageSent.toLocaleString()}</h3>
              <p className="text-emerald-300 text-xs flex items-center mt-1">
                <span className="flex items-center text-green-400 mr-1">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  8.7%
                </span>
                vs previous period
              </p>
            </div>
          </div>
          
          {/* Delivery Rate */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="rounded-md bg-emerald-700/30 p-2">
                <DeliveryIcon />
              </div>
              <span className="text-xs text-emerald-400 font-medium">Delivery Rate</span>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold text-white">{metricsData.deliveryRate}%</h3>
              <p className="text-emerald-300 text-xs flex items-center mt-1">
                <span className="flex items-center text-green-400 mr-1">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  0.3%
                </span>
                vs previous period
              </p>
            </div>
          </div>
          
          {/* Failure Rate */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="rounded-md bg-emerald-700/30 p-2">
                <FailuresIcon />
              </div>
              <span className="text-xs text-emerald-400 font-medium">Failure Rate</span>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold text-white">{metricsData.failureRate}%</h3>
              <p className="text-emerald-300 text-xs flex items-center mt-1">
                <span className="flex items-center text-red-400 mr-1">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  0.3%
                </span>
                vs previous period
              </p>
            </div>
          </div>
          
          {/* Active Campaigns */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="rounded-md bg-emerald-700/30 p-2">
                <CampaignsIcon />
              </div>
              <span className="text-xs text-emerald-400 font-medium">Active Campaigns</span>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold text-white">{metricsData.campaigns}</h3>
              <p className="text-emerald-300 text-xs flex items-center mt-1">
                <span className="flex items-center text-green-400 mr-1">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  5.2%
                </span>
                vs previous period
              </p>
            </div>
          </div>
          
          {/* User Growth */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="rounded-md bg-emerald-700/30 p-2">
                <GrowthIcon />
              </div>
              <span className="text-xs text-emerald-400 font-medium">User Growth</span>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold text-white">{metricsData.userGrowth}%</h3>
              <p className="text-emerald-300 text-xs flex items-center mt-1">
                <span className="flex items-center text-green-400 mr-1">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  2.1%
                </span>
                vs previous period
              </p>
            </div>
          </div>
        </div>
        
        {/* Charts and Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* User Activity Chart */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-emerald-800/30">
              <h2 className="text-lg font-semibold text-white">User Activity Trends</h2>
              <p className="text-sm text-emerald-300">Monthly active users over time</p>
            </div>
            <div className="p-4">
              {/* Chart would go here - using a placeholder for now */}
              <div className="bg-emerald-950/50 rounded-lg h-64 flex items-center justify-center">
                <div className="h-48 w-full px-4 relative">
                  {/* Simulated chart with bars */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between h-full items-end">
                    {metricsData.userActivity.data && metricsData.userActivity.data.map((value, index) => (
                      <div key={index} className="flex flex-col items-center w-1/6">
                        <div 
                          className="w-10 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-sm"
                          style={{ height: `${(value / Math.max(...metricsData.userActivity.data)) * 100}%` }}
                        ></div>
                        <span className="text-xs text-emerald-400 mt-2">
                          {metricsData.userActivity.labels && metricsData.userActivity.labels[index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-xs text-emerald-400">
                <span>* Showing data for the selected period</span>
                <span>Total: {metricsData.activeUsers.toLocaleString()} users</span>
              </div>
            </div>
          </div>
          
          {/* Message Delivery Stats */}
          <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-emerald-800/30">
              <h2 className="text-lg font-semibold text-white">Message Delivery Statistics</h2>
              <p className="text-sm text-emerald-300">Success and failure metrics</p>
            </div>
            <div className="p-4">
              {/* Delivery stats visualization */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-emerald-950/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-emerald-300 mb-2">Successful Deliveries</h3>
                  <p className="text-2xl font-bold text-white">{metricsData.deliveryStats.delivered.toLocaleString()}</p>
                  <p className="text-xs text-emerald-400 mt-1">({metricsData.deliveryRate}% of total)</p>
                </div>
                <div className="bg-emerald-950/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-emerald-300 mb-2">Failed Deliveries</h3>
                  <p className="text-2xl font-bold text-white">{metricsData.deliveryStats.failed.toLocaleString()}</p>
                  <p className="text-xs text-emerald-400 mt-1">({metricsData.failureRate}% of total)</p>
                </div>
              </div>
              
              {/* Failure Reasons */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-emerald-300 mb-3">Failure Reasons</h3>
                <div className="space-y-3">
                  {metricsData.deliveryStats.reasons && metricsData.deliveryStats.reasons.map((reason, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-full bg-emerald-950/70 rounded-full h-2.5">
                        <div 
                          className="bg-red-500 h-2.5 rounded-full" 
                          style={{ width: `${(reason.count / metricsData.deliveryStats.failed) * 100}%` }}
                        ></div>
                      </div>
                      <div className="min-w-32 ml-4 flex justify-between">
                        <span className="text-xs text-emerald-300">{reason.reason}</span>
                        <span className="text-xs text-white font-medium">{reason.count.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Top Users Table */}
        <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-lg overflow-hidden mb-6">
          <div className="p-4 border-b border-emerald-800/30">
            <h2 className="text-lg font-semibold text-white">Top Users by Message Volume</h2>
            <p className="text-sm text-emerald-300">Users with highest messaging activity</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-emerald-800/30">
              <thead className="bg-emerald-950/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">User</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Messages Sent</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Delivery Rate</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">Last Active</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-emerald-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-emerald-900/10 divide-y divide-emerald-800/30">
                {metricsData.topUsers && metricsData.topUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-emerald-800/20">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-700 flex items-center justify-center text-white">
                          {user.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{user.name}</div>
                          <div className="text-sm text-emerald-400">ID: {user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{user.messages.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{user.deliveryRate}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-300">
                      {user.lastActive}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-emerald-400 hover:text-emerald-300 mr-3">View</button>
                      <button className="text-emerald-400 hover:text-emerald-300">Message</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 bg-emerald-950/30 border-t border-emerald-800/30 flex items-center justify-between">
            <span className="text-sm text-emerald-300">Showing 5 of 1875 users</span>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded text-sm text-emerald-400 hover:bg-emerald-800/30">Previous</button>
              <button className="px-3 py-1 rounded text-sm bg-emerald-700 text-white">1</button>
              <button className="px-3 py-1 rounded text-sm text-emerald-400 hover:bg-emerald-800/30">2</button>
              <button className="px-3 py-1 rounded text-sm text-emerald-400 hover:bg-emerald-800/30">3</button>
              <button className="px-3 py-1 rounded text-sm text-emerald-400 hover:bg-emerald-800/30">Next</button>
            </div>
          </div>
        </div>
        
        {/* Weekly Messaging Trends */}
        <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/30 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-emerald-800/30">
            <h2 className="text-lg font-semibold text-white">Weekly Messaging Trends</h2>
            <p className="text-sm text-emerald-300">Message volume by day of week</p>
          </div>
          <div className="p-4">
            {/* Chart would go here - using a placeholder for now */}
            <div className="bg-emerald-950/50 rounded-lg h-64 flex items-center justify-center">
              <div className="h-48 w-full px-4 relative">
                {/* Simulated chart with bars */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between h-full items-end">
                  {metricsData.messagingTrends.data && metricsData.messagingTrends.data.map((value, index) => (
                    <div key={index} className="flex flex-col items-center w-1/7">
                      <div 
                        className="w-10 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm"
                        style={{ height: `${(value / Math.max(...metricsData.messagingTrends.data)) * 100}%` }}
                      ></div>
                      <span className="text-xs text-emerald-400 mt-2">
                        {metricsData.messagingTrends.labels && metricsData.messagingTrends.labels[index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-xs text-emerald-400">
              <span>* Peak messaging times are Tuesday and Wednesday</span>
              <span>Total: {metricsData.messageSent.toLocaleString()} messages</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserMetrics;