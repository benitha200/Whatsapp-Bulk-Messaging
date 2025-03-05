import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const AdminDashboard = () => {
  // Sample data - replace with actual API calls
  const messageData = [
    { name: 'Jan', sent: 3200, delivered: 3000, read: 2800 },
    { name: 'Feb', sent: 4500, delivered: 4200, read: 3900 },
    { name: 'Mar', sent: 5100, delivered: 4800, read: 4500 },
    { name: 'Apr', sent: 6200, delivered: 5800, read: 5400 },
    { name: 'May', sent: 5800, delivered: 5500, read: 5100 },
    { name: 'Jun', sent: 7000, delivered: 6600, read: 6200 },
  ];
  
  const usageData = [
    { name: 'Jan', value: 12000 },
    { name: 'Feb', value: 19000 },
    { name: 'Mar', value: 18000 },
    { name: 'Apr', value: 21000 },
    { name: 'May', value: 25000 },
    { name: 'Jun', value: 32000 },
  ];
  
  const recentCampaigns = [
    { id: 'CP123', name: 'Summer Sale Announcement', status: 'Completed', sent: 5230, delivered: 5189, read: 4356, date: '2023-06-15' },
    { id: 'CP124', name: 'Product Update Notification', status: 'In Progress', sent: 3210, delivered: 3100, read: 2456, date: '2023-06-14' },
    { id: 'CP125', name: 'Customer Feedback Survey', status: 'Scheduled', sent: 0, delivered: 0, read: 0, date: '2023-06-18' },
    { id: 'CP126', name: 'Weekly Newsletter', status: 'Completed', sent: 8765, delivered: 8700, read: 6543, date: '2023-06-10' },
  ];
  
  const alertMessages = [
    { type: 'warning', message: 'API rate limit at 85% capacity', time: '2 hours ago' },
    { type: 'error', message: 'Template approval rejected for Campaign #CP127', time: '5 hours ago' },
    { type: 'info', message: 'System maintenance scheduled for June 20, 2023', time: '1 day ago' },
  ];
  
  const stats = [
    { title: 'Total Users', value: '1,243', change: '+12%', up: true },
    { title: 'Active Subscriptions', value: '876', change: '+5%', up: true },
    { title: 'Messages Sent (30d)', value: '453.2K', change: '+18%', up: true },
    { title: 'Delivery Rate', value: '96.7%', change: '+0.5%', up: true },
  ];

  return (
    <AdminLayout activePage="dashboard">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-emerald-200">Welcome back, Admin! Here's what's happening with your platform.</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-emerald-400 text-sm font-medium">{stat.title}</p>
                  <h3 className="text-white text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <span className={`text-sm ${stat.up ? 'text-green-400' : 'text-red-400'} flex items-center`}>
                  {stat.up ? (
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Messages Chart */}
          <div className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Message Statistics</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={messageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f4d46" />
                <XAxis dataKey="name" stroke="#a7f3d0" />
                <YAxis stroke="#a7f3d0" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#134e4a', border: 'none', borderRadius: '0.5rem', color: 'white' }}
                  itemStyle={{ color: 'white' }}
                  labelStyle={{ color: '#a7f3d0' }}
                />
                <Legend wrapperStyle={{ color: '#a7f3d0' }} />
                <Bar dataKey="sent" fill="#34d399" name="Sent" />
                <Bar dataKey="delivered" fill="#2dd4bf" name="Delivered" />
                <Bar dataKey="read" fill="#22d3ee" name="Read" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Usage Trend */}
          <div className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Usage Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f4d46" />
                <XAxis dataKey="name" stroke="#a7f3d0" />
                <YAxis stroke="#a7f3d0" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#134e4a', border: 'none', borderRadius: '0.5rem', color: 'white' }}
                  itemStyle={{ color: 'white' }}
                  labelStyle={{ color: '#a7f3d0' }}
                />
                <Legend wrapperStyle={{ color: '#a7f3d0' }} />
                <Line type="monotone" dataKey="value" stroke="#10b981" activeDot={{ r: 8 }} name="Messages" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Bottom Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Campaigns */}
          <div className="lg:col-span-2 bg-emerald-900/40 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-white">Recent Campaigns</h2>
              <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-emerald-800/50">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">Campaign</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">Sent/Delivered</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-800/30">
                  {recentCampaigns.map((campaign, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-white">{campaign.name}</div>
                          <div className="text-xs text-emerald-300">#{campaign.id}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          campaign.status === 'Completed' ? 'bg-green-900/50 text-green-400' :
                          campaign.status === 'In Progress' ? 'bg-blue-900/50 text-blue-400' :
                          'bg-yellow-900/50 text-yellow-400'
                        }`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-emerald-200">
                        {campaign.status !== 'Scheduled' ? `${campaign.delivered}/${campaign.sent} (${Math.round(campaign.delivered/campaign.sent*100)}%)` : '-'}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-emerald-200">{campaign.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* System Alerts */}
          <div className="bg-emerald-900/40 backdrop-blur-sm border border-emerald-800/30 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-white">System Alerts</h2>
              <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View All</button>
            </div>
            <div className="space-y-4">
              {alertMessages.map((alert, index) => (
                <div key={index} className={`p-4 border rounded-lg ${
                  alert.type === 'warning' ? 'border-yellow-500/50 bg-yellow-900/20' :
                  alert.type === 'error' ? 'border-red-500/50 bg-red-900/20' :
                  'border-blue-500/50 bg-blue-900/20'
                }`}>
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 h-5 w-5 mr-3 ${
                      alert.type === 'warning' ? 'text-yellow-400' :
                      alert.type === 'error' ? 'text-red-400' :
                      'text-blue-400'
                    }`}>
                      {alert.type === 'warning' && (
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      )}
                      {alert.type === 'error' && (
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {alert.type === 'info' && (
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-white">{alert.message}</p>
                      <p className="text-xs mt-1 text-emerald-300">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;