import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

// Import icons (using the same icon components from your dashboard)

const CampaignsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const FilterIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>;
const SearchIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const ImportIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>;
const TagIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>;

const Contacts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showAddContactModal, setShowAddContactModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedContacts, setSelectedContacts] = useState([]);
  
  // Demo data for contacts
  const contactsData = [
    { 
      id: 1, 
      name: 'John Smith', 
      phone: '+1 555-123-4567', 
      email: 'john@example.com', 
      group: 'Premium Customers',
      lastMessage: '2023-06-15',
      tags: ['Regular', 'Interested'],
      status: 'Active',
      campaigns: 8
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      phone: '+1 555-987-6543', 
      email: 'sarah@example.com', 
      group: 'Newsletter Subscribers',
      lastMessage: '2023-06-10',
      tags: ['VIP', 'Frequent'],
      status: 'Active',
      campaigns: 12
    },
    { 
      id: 3, 
      name: 'Michael Brown', 
      phone: '+1 555-456-7890', 
      email: 'michael@example.com', 
      group: 'Regular Customers',
      lastMessage: '2023-05-28',
      tags: ['New'],
      status: 'Inactive',
      campaigns: 3
    },
    { 
      id: 4, 
      name: 'Emma Wilson', 
      phone: '+1 555-789-0123', 
      email: 'emma@example.com', 
      group: 'Summer Shoppers',
      lastMessage: '2023-06-12',
      tags: ['Regular', 'Discount'],
      status: 'Active',
      campaigns: 6
    },
    { 
      id: 5, 
      name: 'David Lee', 
      phone: '+1 555-234-5678', 
      email: 'david@example.com', 
      group: 'Premium Customers',
      lastMessage: '2023-06-01',
      tags: ['VIP', 'Business'],
      status: 'Active',
      campaigns: 10
    },
    { 
      id: 6, 
      name: 'Jennifer Garcia', 
      phone: '+1 555-345-6789', 
      email: 'jennifer@example.com', 
      group: 'All Customers',
      lastMessage: '2023-05-15',
      tags: ['Inactive'],
      status: 'Inactive',
      campaigns: 2
    },
    { 
      id: 7, 
      name: 'Robert Martinez', 
      phone: '+1 555-876-5432', 
      email: 'robert@example.com', 
      group: 'Business Subscribers',
      lastMessage: '2023-06-08',
      tags: ['Business', 'Frequent'],
      status: 'Active',
      campaigns: 7
    },
    { 
      id: 8, 
      name: 'Linda Anderson', 
      phone: '+1 555-654-3210', 
      email: 'linda@example.com', 
      group: 'Loyalty Members',
      lastMessage: '2023-06-14',
      tags: ['VIP', 'Loyalty'],
      status: 'Active',
      campaigns: 14
    }
  ];
  
  // Filter contacts based on active filter
  const filteredContacts = activeFilter === 'all' 
    ? contactsData 
    : contactsData.filter(contact => 
        contact.status.toLowerCase() === activeFilter.toLowerCase()
      );
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Toggle add contact modal
  const toggleAddContactModal = () => {
    setShowAddContactModal(!showAddContactModal);
  };
  
  // Toggle import contacts modal
  const toggleImportModal = () => {
    setShowImportModal(!showImportModal);
  };
  
  // Handle select all contacts
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedContacts(filteredContacts.map(contact => contact.id));
    } else {
      setSelectedContacts([]);
    }
  };
  
  // Handle select single contact
  const handleSelectContact = (contactId) => {
    if (selectedContacts.includes(contactId)) {
      setSelectedContacts(selectedContacts.filter(id => id !== contactId));
    } else {
      setSelectedContacts([...selectedContacts, contactId]);
    }
  };
  
  return (
    <Layout activePage="contacts">
      <div className="px-4 py-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Contacts</h1>
            <p className="text-emerald-200 mt-2">Manage your contact list and send targeted messages</p>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-3">
            <button
              onClick={toggleImportModal}
              className="flex items-center bg-white/5 hover:bg-white/10 text-emerald-300 py-2 px-4 rounded-lg transition-colors font-medium border border-emerald-800/20"
            >
              <ImportIcon />
              <span className="ml-2">Import</span>
            </button>
            <button
              onClick={toggleAddContactModal}
              className="flex items-center bg-emerald-800/30 hover:bg-emerald-800/50 text-white py-2 px-4 rounded-lg transition-colors font-medium shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Contact
            </button>
          </div>
        </div>
        
        {/* Contact Filters and Search */}
        <div className="mb-8 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 p-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            {/* Filters */}
            <div className="flex space-x-2 mb-4 md:mb-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <button 
                onClick={() => setActiveFilter('all')} 
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeFilter === 'all' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-emerald-900/30 text-emerald-300 hover:bg-emerald-800/50'
                }`}
              >
                All Contacts
              </button>
              <button 
                onClick={() => setActiveFilter('active')} 
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeFilter === 'active' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-emerald-900/30 text-emerald-300 hover:bg-emerald-800/50'
                }`}
              >
                Active
              </button>
              <button 
                onClick={() => setActiveFilter('inactive')} 
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeFilter === 'inactive' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-emerald-900/30 text-emerald-300 hover:bg-emerald-800/50'
                }`}
              >
                Inactive
              </button>
            </div>
            
            {/* Search */}
            <div className="flex w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-300">
                  <SearchIcon />
                </div>
                <input 
                  type="text" 
                  className="bg-emerald-900/20 border border-emerald-800/30 text-white placeholder-emerald-400 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Search contacts..." 
                />
              </div>
              <button className="ml-2 p-2 bg-emerald-900/30 hover:bg-emerald-800/50 rounded-lg text-emerald-300">
                <FilterIcon />
              </button>
            </div>
          </div>
        </div>
        
        {/* Contacts List with Batch Actions */}
        {selectedContacts.length > 0 && (
          <div className="mb-4 py-3 px-4 bg-emerald-900/20 border border-emerald-800/30 rounded-lg flex justify-between items-center">
            <div className="text-emerald-200">
              <span className="font-medium">{selectedContacts.length}</span> contacts selected
            </div>
            <div className="flex space-x-3">
              <button className="px-3 py-1.5 bg-blue-900/50 hover:bg-blue-800/70 text-blue-200 rounded-md text-sm font-medium flex items-center">
                <CampaignsIcon />
                <span className="ml-2">Add to Campaign</span>
              </button>
              <button className="px-3 py-1.5 bg-yellow-800/50 hover:bg-yellow-700/60 text-yellow-200 rounded-md text-sm font-medium flex items-center">
                <TagIcon />
                <span className="ml-2">Add Tags</span>
              </button>
              <button className="px-3 py-1.5 bg-red-900/50 hover:bg-red-800/70 text-red-200 rounded-md text-sm font-medium flex items-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span className="ml-2">Delete</span>
              </button>
            </div>
          </div>
        )}
        
        {/* Contacts Table */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-800/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-emerald-300 text-sm border-b border-emerald-800/30">
                  <th className="pl-6 py-4 w-12 font-medium">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 rounded bg-emerald-900/20 border-emerald-800/50 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0"
                      onChange={handleSelectAll}
                      checked={selectedContacts.length === filteredContacts.length && filteredContacts.length > 0}
                    />
                  </th>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Phone</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Group</th>
                  <th className="px-6 py-4 font-medium">Tags</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Campaigns</th>
                  <th className="px-6 py-4 font-medium">Last Message</th>
                  <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-800/20">
                {filteredContacts.map((contact) => (
                  <tr key={contact.id} className="text-white hover:bg-emerald-900/10">
                    <td className="pl-6 py-4">
                      <input 
                        type="checkbox" 
                        className="h-4 w-4 rounded bg-emerald-900/20 border-emerald-800/50 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0"
                        checked={selectedContacts.includes(contact.id)}
                        onChange={() => handleSelectContact(contact.id)}
                      />
                    </td>
                    <td className="px-6 py-4 font-medium">{contact.name}</td>
                    <td className="px-6 py-4 text-emerald-300">{contact.phone}</td>
                    <td className="px-6 py-4 text-emerald-300">{contact.email}</td>
                    <td className="px-6 py-4">{contact.group}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {contact.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              tag === 'VIP' 
                                ? 'bg-purple-900/30 text-purple-300' 
                                : tag === 'Regular' 
                                ? 'bg-emerald-900/30 text-emerald-300' 
                                : tag === 'Business' 
                                ? 'bg-blue-900/30 text-blue-300' 
                                : 'bg-gray-800/40 text-gray-300'
                            }`}
                            >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        contact.status === 'Active' 
                          ? 'bg-emerald-500/20 text-emerald-300' 
                          : 'bg-red-500/20 text-red-300'
                      }`}>
                        {contact.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{contact.campaigns}</td>
                    <td className="px-6 py-4">
                      {new Date(contact.lastMessage).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-300 hover:text-blue-200" title="Edit">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="text-emerald-300 hover:text-emerald-200" title="Message">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </button>
                        <button className="text-red-300 hover:text-red-200" title="Delete">
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
          
          {/* Pagination */}
          <div className="bg-emerald-900/20 px-6 py-4 border-t border-emerald-800/30 flex items-center justify-between">
            <div className="text-emerald-300 text-sm">
              Showing <span className="font-medium">{filteredContacts.length}</span> of <span className="font-medium">{contactsData.length}</span> contacts
            </div>
            <div className="flex space-x-1">
              <button className="px-3 py-1 border border-emerald-800/30 rounded-md text-emerald-300 hover:bg-emerald-800/30">Previous</button>
              <button className="px-3 py-1 border border-emerald-800/30 bg-emerald-800/40 rounded-md text-emerald-300 hover:bg-emerald-800/50">1</button>
              <button className="px-3 py-1 border border-emerald-800/30 rounded-md text-emerald-300 hover:bg-emerald-800/30">Next</button>
            </div>
          </div>
        </div>
      </div>
    
      {/* Add Contact Modal */}
      {showAddContactModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>
            
            <div className="inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-emerald-800/30">
              <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-white mb-4">Add New Contact</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-emerald-300 text-sm font-medium mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full bg-emerald-900/20 border border-emerald-800/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-emerald-300 text-sm font-medium mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-emerald-900/20 border border-emerald-800/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-emerald-300 text-sm font-medium mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full bg-emerald-900/20 border border-emerald-800/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="group" className="block text-emerald-300 text-sm font-medium mb-2">Contact Group</label>
                    <select id="group" className="w-full bg-emerald-900/20 border border-emerald-800/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                      <option>Select a group</option>
                      <option>Regular Customers</option>
                      <option>Premium Customers</option>
                      <option>Newsletter Subscribers</option>
                      <option>Business Subscribers</option>
                      <option>Summer Shoppers</option>
                      <option>Loyalty Members</option>
                      <option>All Customers</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tags" className="block text-emerald-300 text-sm font-medium mb-2">Tags</label>
                    <input type="text" id="tags" className="w-full bg-emerald-900/20 border border-emerald-800/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Separate with commas" />
                  </div>
                </form>
              </div>
              <div className="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Add Contact
                </button>
                <button onClick={toggleAddContactModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-emerald-800/30 shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-emerald-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Import Contacts Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>
            
            <div className="inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-emerald-800/30">
              <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium text-white mb-4">Import Contacts</h3>
                <div className="border-2 border-dashed border-emerald-800/30 rounded-lg p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mt-1 text-sm text-emerald-300">Drop your CSV file here, or <span className="text-emerald-400 font-medium">browse</span></p>
                  <p className="mt-1 text-xs text-emerald-400/70">Supports CSV, XLS, XLSX up to 10MB</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-white mb-2">Or import from</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="flex items-center justify-center px-4 py-2 border border-emerald-800/30 rounded-md shadow-sm text-sm font-medium text-emerald-300 bg-emerald-900/20 hover:bg-emerald-800/30">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Google
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-emerald-800/30 rounded-md shadow-sm text-sm font-medium text-emerald-300 bg-emerald-900/20 hover:bg-emerald-800/30">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Outlook
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-emerald-800/30 rounded-md shadow-sm text-sm font-medium text-emerald-300 bg-emerald-900/20 hover:bg-emerald-800/30">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      HubSpot
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Import Contacts
                </button>
                <button onClick={toggleImportModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-emerald-800/30 shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-emerald-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Contacts;