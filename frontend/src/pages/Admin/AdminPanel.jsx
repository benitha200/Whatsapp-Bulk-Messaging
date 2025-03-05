import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const AdminPanel = () => {
  // Admin stats data
  const adminStats = [
    { name: 'Total Users', value: '241', change: '+12', timeframe: 'this month' },
    { name: 'Active Subscriptions', value: '184', change: '+8%', timeframe: 'vs last month' },
    { name: 'Revenue', value: '$24,856', change: '+15%', timeframe: 'vs last month' },
    { name: 'Support Tickets', value: '18', change: '-4', timeframe: 'vs last week' }
  ];
  
  // Recent users data
  const recentUsers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@example.com', plan: 'Premium', status: 'Active', joined: '2023-06-10' },
    { id: 2, name: 'Michael Chen', email: 'michael.c@example.com', plan: 'Basic', status: 'Active', joined: '2023-06-12' },
    { id: 3, name: 'Emma Wilson', email: 'emma.w@example.com', plan: 'Premium', status: 'Trial', joined: '2023-06-14' },
    { id: 4, name: 'Raj Patel', email: 'raj.p@example.com', plan: 'Enterprise', status: 'Active', joined: '2023-06-08' }
  ];
  
  // Recent transactions data
  const recentTransactions = [
    { id: 1, user: 'Sarah Johnson', amount: '$49.99', plan: 'Premium', date: '2023-06-14', status: 'Completed' },
    { id: 2, name: 'Raj Patel', amount: '$299.99', plan: 'Enterprise', date: '2023-06-12', status: 'Completed' },
    { id: 3, name: 'David Smith', amount: '$29.99', plan: 'Basic', date: '2023-06-10', status: 'Failed' },
    { id: 4, name: 'Lisa Wong', amount: '$49.99', plan: 'Premium', date: '2023-06-09', status: 'Completed' }
  ];
  
  // System notifications
  const systemNotifications = [
    { id: 1, message: 'Server maintenance scheduled for June 20, 2023 at 02:00 UTC', priority: 'High', date: '2023-06-15' },
    { id: 2, message: 'New feature deployment complete: Campaign scheduling', priority: 'Info', date: '2023-06-14' },
    { id: 3, message: 'WhatsApp API usage at 82% of monthly limit', priority: 'Medium', date: '2023-06-13' }
  ];
  
  // Tabs state
  const [activeTab, setActiveTab] = useState('users');
  
  return (
    <AdminLayout activePage="admin">
      <div className="px-4 py-6">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-emerald-200 mt-2">Monitor and manage your application and users.</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {adminStats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-800/20">
              <p className="text-emerald-300 text-sm font-medium mb-1">{stat.name}</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <div className="flex items-center">
                  <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                  <span className="text-emerald-300 text-xs ml-1">{stat.timeframe}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* System Notifications */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-emerald-800/30">
            <h2 className="text-xl font-semibold text-white">System Notifications</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {systemNotifications.map((notification) => (
                <li key={notification.id} className="p-4 border border-emerald-800/20 rounded-lg bg-emerald-900/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white">{notification.message}</p>
                      <p className="text-emerald-300 text-sm mt-1">Posted: {notification.date}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      notification.priority === 'High' ? 'bg-red-500/20 text-red-300' : 
                      notification.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      {notification.priority}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 overflow-hidden">
          <div className="border-b border-emerald-800/30">
            <div className="flex">
              <button 
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'users' 
                    ? 'border-b-2 border-emerald-400 text-white' 
                    : 'text-emerald-300 hover:text-emerald-200'
                }`}
                onClick={() => setActiveTab('users')}
              >
                Users
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'transactions' 
                    ? 'border-b-2 border-emerald-400 text-white' 
                    : 'text-emerald-300 hover:text-emerald-200'
                }`}
                onClick={() => setActiveTab('transactions')}
              >
                Transactions
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'settings' 
                    ? 'border-b-2 border-emerald-400 text-white' 
                    : 'text-emerald-300 hover:text-emerald-200'
                }`}
                onClick={() => setActiveTab('settings')}
              >
                System Settings
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {/* Users Tab */}
            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-white">Recent Users</h3>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search users..." 
                        className="bg-emerald-900/30 border border-emerald-800/30 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      <svg className="w-5 h-5 text-emerald-400 absolute right-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add User
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-emerald-300 text-sm">
                        <th className="pb-3 font-medium">Name</th>
                        <th className="pb-3 font-medium">Email</th>
                        <th className="pb-3 font-medium">Plan</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Joined</th>
                        <th className="pb-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-t border-emerald-800/20 text-white">
                          <td className="py-4">{user.name}</td>
                          <td className="py-4">{user.email}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.plan === 'Premium' ? 'bg-purple-500/20 text-purple-300' : 
                              user.plan === 'Enterprise' ? 'bg-emerald-500/20 text-emerald-300' : 
                              'bg-blue-500/20 text-blue-300'
                            }`}>
                              {user.plan}
                            </span>
                          </td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.status === 'Active' ? 'bg-emerald-500/20 text-emerald-300' : 
                              user.status === 'Trial' ? 'bg-yellow-500/20 text-yellow-300' : 
                              'bg-red-500/20 text-red-300'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="py-4">{user.joined}</td>
                          <td className="py-4">
                            <div className="flex space-x-2">
                              <button className="p-1 text-emerald-400 hover:text-emerald-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </button>
                              <button className="p-1 text-emerald-400 hover:text-emerald-300">
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
                
                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm text-emerald-300">Showing 1-4 of 241 users</div>
                  <div className="flex space-x-1">
                    <button className="px-3 py-1 bg-emerald-900/40 text-emerald-300 rounded-md hover:bg-emerald-900/60">Previous</button>
                    <button className="px-3 py-1 bg-emerald-700 text-white rounded-md">1</button>
                    <button className="px-3 py-1 bg-emerald-900/40 text-emerald-300 rounded-md hover:bg-emerald-900/60">2</button>
                    <button className="px-3 py-1 bg-emerald-900/40 text-emerald-300 rounded-md hover:bg-emerald-900/60">3</button>
                    <button className="px-3 py-1 bg-emerald-900/40 text-emerald-300 rounded-md hover:bg-emerald-900/60">Next</button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Transactions Tab */}
            {activeTab === 'transactions' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-white">Recent Transactions</h3>
                  <div className="flex space-x-2">
                    <button className="bg-emerald-900/30 hover:bg-emerald-900/50 px-4 py-2 rounded-lg text-white text-sm transition-colors flex items-center border border-emerald-800/30">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Export
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-emerald-300 text-sm">
                        <th className="pb-3 font-medium">User</th>
                        <th className="pb-3 font-medium">Amount</th>
                        <th className="pb-3 font-medium">Plan</th>
                        <th className="pb-3 font-medium">Date</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id} className="border-t border-emerald-800/20 text-white">
                          <td className="py-4">{transaction.user || transaction.name}</td>
                          <td className="py-4">{transaction.amount}</td>
                          <td className="py-4">{transaction.plan}</td>
                          <td className="py-4">{transaction.date}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              transaction.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-300' : 
                              'bg-red-500/20 text-red-300'
                            }`}>
                              {transaction.status}
                            </span>
                          </td>
                          <td className="py-4">
                            <button className="p-1 text-emerald-400 hover:text-emerald-300">
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
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <h3 className="text-lg font-medium text-white mb-4">System Settings</h3>
                
                <div className="space-y-6">
                  {/* API Settings */}
                  <div className="p-4 border border-emerald-800/20 rounded-lg bg-emerald-900/10">
                    <h4 className="font-medium text-white mb-3">WhatsApp API Configuration</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-emerald-300 text-sm mb-1">API Key</label>
                        <div className="flex">
                          <input
                            type="text"
                            value="whsk_ff91c2d8a76e4b7b8f3f6b3a9c7d6e5f"
                            readOnly
                            className="bg-emerald-900/40 border border-emerald-800/30 rounded-l-lg px-4 py-2 text-white flex-grow focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          />
                          <button className="bg-emerald-800 hover:bg-emerald-700 px-4 py-2 rounded-r-lg text-white transition-colors">
                            Regenerate
                          </button>
                        </div>
                        <p className="text-emerald-400 text-xs mt-1">Last regenerated: June 10, 2023</p>
                      </div>
                      
                      <div>
                        <label className="block text-emerald-300 text-sm mb-1">Rate Limits</label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            value="1000"
                            className="bg-emerald-900/40 border border-emerald-800/30 rounded-lg px-4 py-2 text-white w-24 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          />
                          <span className="text-emerald-300">messages per minute</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-white font-medium">Webhook Notifications</h5>
                          <p className="text-emerald-300 text-sm">Receive notifications for message delivery status</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" checked />
                          <div className="w-11 h-6 bg-emerald-900/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* System Preferences */}
                  <div className="p-4 border border-emerald-800/20 rounded-lg bg-emerald-900/10">
                    <h4 className="font-medium text-white mb-3">System Preferences</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-white font-medium">Maintenance Mode</h5>
                          <p className="text-emerald-300 text-sm">Display maintenance page for all users</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-emerald-900/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-white font-medium">Debug Logging</h5>
                          <p className="text-emerald-300 text-sm">Enable detailed logging for troubleshooting</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-emerald-900/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                      
                      <div>
                        <label className="block text-emerald-300 text-sm mb-1">Default User Plan</label>
                        <select className="bg-emerald-900/40 border border-emerald-800/30 rounded-lg px-4 py-2 text-white w-full focus:outline-none focus:ring-1 focus:ring-emerald-500">
                          <option>Basic</option>
                          <option>Premium</option>
                          <option>Enterprise</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg text-white font-medium transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>      
  );
};

export default AdminPanel;