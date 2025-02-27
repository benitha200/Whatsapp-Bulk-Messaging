import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Dashboard = () => {
  // Demo data for dashboard widgets
  const campaignStats = [
    { name: 'Active Campaigns', value: '12', change: '+2', timeframe: 'from last week' },
    { name: 'Messages Sent', value: '24,521', change: '+12%', timeframe: 'from last month' },
    { name: 'Open Rate', value: '68%', change: '+5%', timeframe: 'from last campaign' },
    { name: 'Engagement', value: '42%', change: '+3%', timeframe: 'from previous average' }
  ];
  
  const recentCampaigns = [
    { id: 1, name: 'Summer Sale Promotion', status: 'Active', sent: 4521, opened: 3245, date: '2023-06-15' },
    { id: 2, name: 'New Product Launch', status: 'Scheduled', sent: 0, opened: 0, date: '2023-06-20' },
    { id: 3, name: 'Customer Feedback Survey', status: 'Completed', sent: 2150, opened: 1852, date: '2023-06-10' },
    { id: 4, name: 'Weekly Newsletter', status: 'Active', sent: 5200, opened: 3120, date: '2023-06-12' }
  ];
  
  const upcomingTasks = [
    { id: 1, name: 'Finalize Q3 campaign strategy', due: '2023-06-25', priority: 'High' },
    { id: 2, name: 'Update contact segments', due: '2023-06-18', priority: 'Medium' },
    { id: 3, name: 'Create new message templates', due: '2023-06-20', priority: 'Medium' },
    { id: 4, name: 'Review campaign analytics', due: '2023-06-17', priority: 'High' }
  ];
  
  return (
    <Layout activePage="dashboard">
      <div className="px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome back, John!</h1>
          <p className="text-emerald-200 mt-2">Here's what's happening with your campaigns today.</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {campaignStats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-800/20">
              <p className="text-emerald-300 text-sm font-medium mb-1">{stat.name}</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <div className="flex items-center">
                  <span className="text-emerald-400 text-sm font-medium">{stat.change}</span>
                  <span className="text-emerald-300 text-xs ml-1">{stat.timeframe}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Campaigns */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 overflow-hidden">
            <div className="px-6 py-5 border-b border-emerald-800/30">
              <h2 className="text-xl font-semibold text-white">Recent Campaigns</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-emerald-300 text-sm">
                      <th className="pb-3 font-medium">Campaign</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Sent</th>
                      <th className="pb-3 font-medium">Opened</th>
                      <th className="pb-3 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCampaigns.map((campaign) => (
                      <tr key={campaign.id} className="border-t border-emerald-800/20 text-white">
                        <td className="py-4">{campaign.name}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            campaign.status === 'Active' ? 'bg-emerald-500/20 text-emerald-300' : 
                            campaign.status === 'Scheduled' ? 'bg-blue-500/20 text-blue-300' : 
                            'bg-gray-500/20 text-gray-300'
                          }`}>
                            {campaign.status}
                          </span>
                        </td>
                        <td className="py-4">{campaign.sent.toLocaleString()}</td>
                        <td className="py-4">{campaign.opened.toLocaleString()}</td>
                        <td className="py-4">{campaign.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6">
                <Link to="/campaigns" className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center">
                  View all campaigns <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Upcoming Tasks */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 overflow-hidden">
            <div className="px-6 py-5 border-b border-emerald-800/30">
              <h2 className="text-xl font-semibold text-white">Upcoming Tasks</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {upcomingTasks.map((task) => (
                  <li key={task.id} className="p-4 border border-emerald-800/20 rounded-lg bg-emerald-900/10">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-medium">{task.name}</h3>
                        <p className="text-emerald-300 text-sm mt-1">Due: {task.due}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.priority === 'High' ? 'bg-red-500/20 text-red-300' : 
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link to="/tasks" className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center">
                  View all tasks <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center p-4 bg-emerald-800/30 hover:bg-emerald-800/50 rounded-lg text-white font-medium transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className='text-emerald-100'>Create New Campaign</span>
            </button>
            <button className="flex items-center justify-center p-4 bg-emerald-800/30 hover:bg-emerald-800/50 rounded-lg text-white font-medium transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              <span className='text-emerald-100'>Add New Contacts</span>
            </button>
            <button className="flex items-center justify-center p-4 bg-emerald-800/30 hover:bg-emerald-800/50 rounded-lg text-white font-medium transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className='text-emerald-100'>View Reports</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;