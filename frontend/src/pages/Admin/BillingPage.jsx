import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const BillingPage = () => {
  const [activeTab, setActiveTab] = useState('invoices');
  
  // Sample invoice data
  const invoices = [
    { id: 'INV-0012549', customer: 'Acme Corp', amount: '$499.00', plan: 'Enterprise', date: '03 Mar 2025', status: 'Paid', dueDate: '01 Mar 2025' },
    { id: 'INV-0012548', customer: 'TechStart Inc', amount: '$149.00', plan: 'Business', date: '02 Mar 2025', status: 'Paid', dueDate: '28 Feb 2025' },
    { id: 'INV-0012547', customer: 'Global Services', amount: '$499.00', plan: 'Enterprise', date: '01 Mar 2025', status: 'Pending', dueDate: '15 Mar 2025' },
    { id: 'INV-0012546', customer: 'Marketing Pro', amount: '$49.00', plan: 'Basic', date: '28 Feb 2025', status: 'Paid', dueDate: '27 Feb 2025' },
    { id: 'INV-0012545', customer: 'Local Shop', amount: '$49.00', plan: 'Basic', date: '25 Feb 2025', status: 'Failed', dueDate: '24 Feb 2025' },
    { id: 'INV-0012544', customer: 'City Services', amount: '$149.00', plan: 'Business', date: '24 Feb 2025', status: 'Paid', dueDate: '23 Feb 2025' },
    { id: 'INV-0012543', customer: 'WebDev Agency', amount: '$149.00', plan: 'Business', date: '23 Feb 2025', status: 'Refunded', dueDate: '20 Feb 2025' },
    { id: 'INV-0012542', customer: 'Custom Solutions', amount: '$1,299.00', plan: 'Custom', date: '20 Feb 2025', status: 'Paid', dueDate: '19 Feb 2025' },
  ];
  
  // Sample payment methods
  const paymentMethods = [
    { id: 1, type: 'Visa', lastFour: '4242', expiryDate: '05/26', isDefault: true },
    { id: 2, type: 'Mastercard', lastFour: '5555', expiryDate: '08/27', isDefault: false },
    { id: 3, type: 'American Express', lastFour: '0001', expiryDate: '12/25', isDefault: false },
  ];
  
  // Sample billing history data
  const billingHistory = [
    { id: 'TRANS-1234', date: '03 Mar 2025', description: 'Enterprise Plan Subscription', amount: '$499.00', status: 'Completed' },
    { id: 'TRANS-1233', date: '02 Mar 2025', description: 'Business Plan Subscription', amount: '$149.00', status: 'Completed' },
    { id: 'TRANS-1232', date: '01 Mar 2025', description: 'Custom Integration Fee', amount: '$250.00', status: 'Completed' },
    { id: 'TRANS-1231', date: '28 Feb 2025', description: 'Basic Plan Subscription', amount: '$49.00', status: 'Completed' },
    { id: 'TRANS-1230', date: '25 Feb 2025', description: 'Basic Plan Subscription', amount: '$49.00', status: 'Failed' },
    { id: 'TRANS-1229', date: '23 Feb 2025', description: 'Business Plan Subscription', amount: '$149.00', status: 'Refunded' },
  ];
  
  // Status badge colors
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'Paid':
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      case 'Refunded':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <AdminLayout activePage="billing">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Billing & Payments</h1>
            <p className="text-emerald-300 mt-1">Manage invoices, payment methods, and billing history</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create Invoice
            </button>
            <button className="bg-emerald-800/50 hover:bg-emerald-800/70 text-white px-4 py-2 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export Report
            </button>
          </div>
        </div>
        
        {/* Billing Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-800/30 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-emerald-400 text-sm font-medium">Total Revenue</p>
                <h2 className="text-3xl font-bold text-white mt-1">$124,568</h2>
                <p className="text-emerald-300 text-sm mt-1">
                  <span className="text-green-400">+15.6%</span> from last month
                </p>
              </div>
              <div className="bg-emerald-800/50 rounded-lg p-3">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-800/30 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-emerald-400 text-sm font-medium">Outstanding Balance</p>
                <h2 className="text-3xl font-bold text-white mt-1">$1,495</h2>
                <p className="text-emerald-300 text-sm mt-1">
                  3 invoices pending
                </p>
              </div>
              <div className="bg-emerald-800/50 rounded-lg p-3">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-800/30 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-emerald-400 text-sm font-medium">Failed Payments</p>
                <h2 className="text-3xl font-bold text-white mt-1">$345</h2>
                <p className="text-emerald-300 text-sm mt-1">
                  2 invoices need attention
                </p>
              </div>
              <div className="bg-emerald-800/50 rounded-lg p-3">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-800/30 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-emerald-400 text-sm font-medium">Refunds Issued</p>
                <h2 className="text-3xl font-bold text-white mt-1">$149</h2>
                <p className="text-emerald-300 text-sm mt-1">
                  1 refund this month
                </p>
              </div>
              <div className="bg-emerald-800/50 rounded-lg p-3">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-emerald-800/30 mb-6">
          <div className="flex space-x-8">
            <button
              className={`py-4 px-1 font-medium text-sm focus:outline-none ${
                activeTab === 'invoices' 
                  ? 'text-emerald-400 border-b-2 border-emerald-400' 
                  : 'text-emerald-300 hover:text-emerald-100'
              }`}
              onClick={() => setActiveTab('invoices')}
            >
              Invoices
            </button>
            <button
              className={`py-4 px-1 font-medium text-sm focus:outline-none ${
                activeTab === 'payment-methods' 
                  ? 'text-emerald-400 border-b-2 border-emerald-400' 
                  : 'text-emerald-300 hover:text-emerald-100'
              }`}
              onClick={() => setActiveTab('payment-methods')}
            >
              Payment Methods
            </button>
            <button
              className={`py-4 px-1 font-medium text-sm focus:outline-none ${
                activeTab === 'billing-history' 
                  ? 'text-emerald-400 border-b-2 border-emerald-400' 
                  : 'text-emerald-300 hover:text-emerald-100'
              }`}
              onClick={() => setActiveTab('billing-history')}
            >
              Billing History
            </button>
          </div>
        </div>
        
        {/* Invoices Content */}
        {activeTab === 'invoices' && (
          <div className="bg-emerald-900/30 rounded-lg border border-emerald-800/30 backdrop-blur-sm">
            <div className="p-6 border-b border-emerald-800/30">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Invoices</h2>
                <div className="flex space-x-2">
                  <div className="relative">
                    <input type="text" className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 p-2.5" placeholder="Search invoices..." />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <button className="bg-emerald-800/50 hover:bg-emerald-800/70 text-white p-2.5 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-emerald-800/30">
                <thead className="bg-emerald-900/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Invoice
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Customer
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Plan
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Due Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-800/30 bg-emerald-900/20">
                  {invoices.map((invoice, index) => (
                    <tr key={invoice.id} className={index % 2 === 0 ? 'bg-emerald-900/10' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-100">
                        {invoice.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-100">
                        {invoice.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-100">
                        {invoice.plan}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {invoice.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-300">
                        {invoice.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-300">
                        {invoice.dueDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(invoice.status)}`}>
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-emerald-400 hover:text-emerald-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button className="text-emerald-400 hover:text-emerald-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                          <button className="text-emerald-400 hover:text-emerald-300">
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
            
            <div className="px-6 py-4 flex items-center justify-between border-t border-emerald-800/30">
              <div className="text-sm text-emerald-300">
                Showing <span className="font-medium text-emerald-100">1</span> to <span className="font-medium text-emerald-100">8</span> of <span className="font-medium text-emerald-100">24</span> invoices
              </div>
              <div className="flex-1 flex justify-end">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-emerald-700/30 bg-emerald-800/30 text-sm font-medium text-emerald-400 hover:bg-emerald-800/50">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-emerald-700/30 bg-emerald-600 text-sm font-medium text-white">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-emerald-700/30 bg-emerald-800/30 text-sm font-medium text-emerald-300 hover:bg-emerald-800/50">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-emerald-700/30 bg-emerald-800/30 text-sm font-medium text-emerald-300 hover:bg-emerald-800/50">
                    3
                  </button>
                  <span className="relative inline-flex items-center px-4 py-2 border border-emerald-700/30 bg-emerald-800/20 text-sm font-medium text-emerald-500">
                    ...
                  </span>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-emerald-700/30 bg-emerald-800/30 text-sm font-medium text-emerald-400 hover:bg-emerald-800/50">
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
        
        {/* Payment Methods Content */}
        {activeTab === 'payment-methods' && (
          <div>
            {/* Payment Methods List */}
            <div className="bg-emerald-900/30 rounded-lg border border-emerald-800/30 backdrop-blur-sm mb-6">
              <div className="p-6 border-b border-emerald-800/30">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">Payment Methods</h2>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Payment Method
                  </button>
                </div>
              </div>
              
              <div className="divide-y divide-emerald-800/30">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center">
                      <div className="bg-emerald-800/50 p-4 rounded-lg mr-4">
                        {method.type === 'Visa' && (
                          <svg className="w-8 h-8 text-emerald-100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M15.025 14h1.9v-5h-1.9v5zm-4.5 0h1.8V9h-1.8v5zm-3.9 0l1.85-5h-1.95l-1.25 3.4-1.2-3.4H2.075l1.85 5h1.7zm14.2-5h-1.7l-1.85 5h1.9l.35-1h1.8l.4 1h1.9l-1.9-5zm-1.5 2.9l.6-1.7.65 1.7h-1.25z" />
                          </svg>
                        )}
                        {method.type === 'Mastercard' && (
                          <svg className="w-8 h-8 text-emerald-100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M14.5 4v-.5c0-.94-.81-1.5-1.8-1.5H2.75c-.99 0-1.75.56-1.75 1.5V18c0 .94.76 1.5 1.75 1.5h9.95c.99 0 1.8-.56 1.8-1.5V18h8.5V4h-8.5zm-1 13.5H2.75v-13h10.75v13zm7.5 0h-5.5v-13h5.5v13zm-7-9H7V6h4v2.5zm0 3H7V9h4v2.5zm0 3H7V12h4v2.5zm5.5 0h-3v-9h3v9z" />
                          </svg>
                        )}
                        {method.type === 'American Express' && (
  <svg className="w-8 h-8 text-emerald-100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M14.76 11h1.68L15.6 7.5h-1.72L14.76 11zM19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8.5 9.5H9.5v-2h-3v2H5V9.5h1.5v2h3v-2H11V15h-.12l1.12-2.5H10.5v-1h3v1h-1.5l-1.12 2.5H12v-1h1.5v1zm5-3v3h-3v-3.5H14V11h-1.5V9.5h3V11h1.5zm1-1h2V15H20v-1.5h-1.5V15H17v-4.5h1.5V12H20v-1.5z" />
  </svg>
)}
                      </div>
                      <div>
                        <p className="text-white font-medium">{method.type} •••• {method.lastFour}</p>
                        <p className="text-emerald-300 text-sm">Expires {method.expiryDate}</p>
                        {method.isDefault && (
                          <span className="inline-flex items-center px-2.5 py-0.5 mt-1 rounded-full text-xs font-medium bg-emerald-800 text-emerald-100">
                            Default
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-4 md:mt-0">
                      <button className="text-emerald-400 hover:text-emerald-300 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="text-emerald-400 hover:text-emerald-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Billing Information */}
            <div className="bg-emerald-900/30 rounded-lg border border-emerald-800/30 backdrop-blur-sm">
              <div className="p-6 border-b border-emerald-800/30">
                <h2 className="text-lg font-bold text-white">Billing Information</h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-emerald-400 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                      placeholder="John Doe"
                      value="Sarah Johnson"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-400 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                      placeholder="name@example.com"
                      value="sarah@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-400 text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                      placeholder="Your Company"
                      value="Acme Corp"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-400 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                      placeholder="+1 (555) 000-0000"
                      value="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-400 text-sm font-medium mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                      placeholder="123 Street"
                      value="123 Main Street"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-400 text-sm font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                      placeholder="City"
                      value="San Francisco"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-400 text-sm font-medium mb-2">
                      State / Province
                    </label>
                    <input
                      type="text"
                      className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                      placeholder="State"
                      value="California"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-400 text-sm font-medium mb-2">
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                      placeholder="ZIP"
                      value="94103"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-400 text-sm font-medium mb-2">
                      Country
                    </label>
                    <select
                      className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>Germany</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-emerald-400 text-sm font-medium mb-2">
                      Tax ID / VAT Number
                    </label>
                    <input
                      type="text"
                      className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                      placeholder="Tax ID"
                      value="US123456789"
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Billing History Content */}
        {activeTab === 'billing-history' && (
          <div className="bg-emerald-900/30 rounded-lg border border-emerald-800/30 backdrop-blur-sm">
            <div className="p-6 border-b border-emerald-800/30">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Billing History</h2>
                <div className="flex space-x-2">
                  <button className="bg-emerald-800/50 hover:bg-emerald-800/70 text-white p-2.5 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                  <button className="bg-emerald-800/50 hover:bg-emerald-800/70 text-white p-2.5 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-emerald-800/30">
                <thead className="bg-emerald-900/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Transaction ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-800/30 bg-emerald-900/20">
                  {billingHistory.map((item, index) => (
                    <tr key={item.id} className={index % 2 === 0 ? 'bg-emerald-900/10' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-100">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-300">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-100">
                        {item.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {item.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-emerald-400 hover:text-emerald-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </button>
                          <button className="text-emerald-400 hover:text-emerald-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default BillingPage;