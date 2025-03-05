import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const SystemNotificationsPage = () => {
  // State for notifications and filters
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "System Maintenance",
      message: "Scheduled maintenance will occur on March 10, 2025 from 2:00 AM to 4:00 AM UTC.",
      type: "maintenance",
      priority: "high",
      read: false,
      date: "2025-03-05T10:30:00Z"
    },
    {
      id: 2,
      title: "API Rate Limit Increased",
      message: "Your account's API rate limit has been increased to 100 requests per minute.",
      type: "api",
      priority: "medium",
      read: true,
      date: "2025-03-04T14:15:00Z"
    },
    {
      id: 3,
      title: "New Feature Available",
      message: "Message scheduling feature is now available for all enterprise accounts.",
      type: "feature",
      priority: "medium",
      read: false,
      date: "2025-03-03T09:45:00Z"
    },
    {
      id: 4,
      title: "Security Alert",
      message: "We detected unusual login activity from IP 192.168.1.254. Please verify this was you.",
      type: "security",
      priority: "critical",
      read: false,
      date: "2025-03-02T23:10:00Z"
    },
    {
      id: 5,
      title: "Template Update Required",
      message: "Your message template 'Order Confirmation' needs to be updated to comply with new guidelines.",
      type: "compliance",
      priority: "high",
      read: true,
      date: "2025-03-01T16:20:00Z"
    }
  ]);
  
  const [filters, setFilters] = useState({
    type: "all",
    priority: "all",
    read: "all"
  });
  
  const [selectedNotifications, setSelectedNotifications] = useState([]);
  
  // Handle marking notifications as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };
  
  // Handle marking all as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };
  
  // Handle deleting a notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
    setSelectedNotifications(selectedNotifications.filter(notifId => notifId !== id));
  };
  
  // Handle deleting selected notifications
  const deleteSelected = () => {
    setNotifications(notifications.filter(notification => !selectedNotifications.includes(notification.id)));
    setSelectedNotifications([]);
  };
  
  // Handle checkbox selection
  const toggleSelection = (id) => {
    if (selectedNotifications.includes(id)) {
      setSelectedNotifications(selectedNotifications.filter(notifId => notifId !== id));
    } else {
      setSelectedNotifications([...selectedNotifications, id]);
    }
  };
  
  // Handle select all
  const toggleSelectAll = () => {
    if (selectedNotifications.length === filteredNotifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(filteredNotifications.map(n => n.id));
    }
  };
  
  // Filter notifications based on current filters
  const filteredNotifications = notifications.filter(notification => {
    const typeMatch = filters.type === "all" || notification.type === filters.type;
    const priorityMatch = filters.priority === "all" || notification.priority === filters.priority;
    const readMatch = filters.read === "all" || 
                     (filters.read === "read" && notification.read) || 
                     (filters.read === "unread" && !notification.read);
    
    return typeMatch && priorityMatch && readMatch;
  });
  
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };
  
  // Priority badge color
  const getPriorityColor = (priority) => {
    switch(priority) {
      case "critical": return "bg-red-500";
      case "high": return "bg-orange-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-blue-500";
    }
  };
  
  // Type badge color and icon
  const getTypeInfo = (type) => {
    switch(type) {
      case "maintenance":
        return { 
          color: "bg-purple-500", 
          icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
        };
      case "api":
        return { 
          color: "bg-blue-500", 
          icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        };
      case "feature":
        return { 
          color: "bg-green-500", 
          icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
        };
      case "security":
        return { 
          color: "bg-red-500", 
          icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        };
      case "compliance":
        return { 
          color: "bg-orange-500", 
          icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        };
      default:
        return { 
          color: "bg-gray-500", 
          icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        };
    }
  };
  
  return (
    <AdminLayout activePage="notifications">
      <div className="p-4 md:p-6 lg:p-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">System Notifications</h1>
          <p className="text-emerald-200 mt-1">Manage and view system notifications and alerts</p>
        </div>
        
        {/* Controls and Filters */}
        <div className="bg-emerald-900/30 backdrop-blur-md border border-emerald-800/30 rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div className="flex space-x-2 mb-4 md:mb-0">
              <button 
                onClick={markAllAsRead}
                disabled={!notifications.some(n => !n.read)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  notifications.some(n => !n.read) 
                    ? 'bg-emerald-700 hover:bg-emerald-600 text-white' 
                    : 'bg-emerald-800/50 text-emerald-300 cursor-not-allowed'
                }`}
              >
                Mark All as Read
              </button>
              <button 
                onClick={deleteSelected}
                disabled={selectedNotifications.length === 0}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedNotifications.length > 0 
                    ? 'bg-red-600 hover:bg-red-500 text-white' 
                    : 'bg-red-800/50 text-red-300 cursor-not-allowed'
                }`}
              >
                Delete Selected
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {/* Type Filter */}
              <select 
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
                className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 rounded-md px-3 py-2 text-sm"
              >
                <option value="all">All Types</option>
                <option value="maintenance">Maintenance</option>
                <option value="api">API</option>
                <option value="feature">Feature</option>
                <option value="security">Security</option>
                <option value="compliance">Compliance</option>
              </select>
              
              {/* Priority Filter */}
              <select 
                value={filters.priority}
                onChange={(e) => setFilters({...filters, priority: e.target.value})}
                className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 rounded-md px-3 py-2 text-sm"
              >
                <option value="all">All Priorities</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              
              {/* Read/Unread Filter */}
              <select 
                value={filters.read}
                onChange={(e) => setFilters({...filters, read: e.target.value})}
                className="bg-emerald-800/30 border border-emerald-700/30 text-emerald-100 rounded-md px-3 py-2 text-sm"
              >
                <option value="all">All Status</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
              </select>
            </div>
          </div>
          
          {/* Notification count */}
          <div className="text-sm text-emerald-300">
            Showing {filteredNotifications.length} of {notifications.length} notifications
            {filters.type !== "all" && ` • Filtered by ${filters.type}`}
            {filters.priority !== "all" && ` • Priority: ${filters.priority}`}
            {filters.read !== "all" && ` • Status: ${filters.read}`}
          </div>
        </div>
        
        {/* Notifications List */}
        <div className="bg-emerald-900/30 backdrop-blur-md border border-emerald-800/30 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 py-3 px-4 border-b border-emerald-800/30 bg-emerald-800/20">
            <div className="col-span-1">
              <input 
                type="checkbox" 
                checked={selectedNotifications.length === filteredNotifications.length && filteredNotifications.length > 0}
                onChange={toggleSelectAll}
                className="h-4 w-4 rounded border-emerald-500 text-emerald-600 focus:ring-emerald-600 bg-emerald-900/50"
              />
            </div>
            <div className="col-span-3 sm:col-span-2 text-sm font-medium text-emerald-100">Type</div>
            <div className="col-span-8 sm:col-span-5 text-sm font-medium text-emerald-100">Notification</div>
            <div className="hidden sm:block sm:col-span-2 text-sm font-medium text-emerald-100">Date</div>
            <div className="hidden sm:block sm:col-span-2 text-sm font-medium text-emerald-100">Actions</div>
          </div>
          
          {/* Notifications */}
          {filteredNotifications.length === 0 ? (
            <div className="py-8 text-center text-emerald-300">
              No notifications match your filters
            </div>
          ) : (
            filteredNotifications.map((notification) => {
              const typeInfo = getTypeInfo(notification.type);
              
              return (
                <div 
                  key={notification.id} 
                  className={`grid grid-cols-12 py-4 px-4 border-b border-emerald-800/20 hover:bg-emerald-800/10 ${
                    !notification.read ? 'bg-emerald-800/5' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <div className="col-span-1 flex items-start">
                    <input 
                      type="checkbox" 
                      checked={selectedNotifications.includes(notification.id)}
                      onChange={() => toggleSelection(notification.id)}
                      className="h-4 w-4 rounded border-emerald-500 text-emerald-600 focus:ring-emerald-600 bg-emerald-900/50"
                    />
                  </div>
                  
                  {/* Type */}
                  <div className="col-span-3 sm:col-span-2 flex items-start">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${typeInfo.color} text-white`}>
                      {typeInfo.icon}
                      <span className="ml-1 hidden xs:inline">{notification.type}</span>
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="col-span-8 sm:col-span-5">
                    <h3 className={`text-sm font-medium ${!notification.read ? 'text-white' : 'text-emerald-200'}`}>
                      {notification.title}
                      {!notification.read && (
                        <span className="ml-2 bg-emerald-500 text-emerald-950 text-xs font-medium px-1.5 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-xs text-emerald-300">{notification.message}</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${getPriorityColor(notification.priority)} text-white`}>
                        {notification.priority}
                      </span>
                      <span className="text-xs text-emerald-400 sm:hidden">
                        {formatDate(notification.date)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Date */}
                  <div className="hidden sm:block sm:col-span-2 text-xs text-emerald-300">
                    {formatDate(notification.date)}
                  </div>
                  
                  {/* Actions */}
                  <div className="hidden sm:flex sm:col-span-2 space-x-2">
                    {!notification.read && (
                      <button 
                        onClick={() => markAsRead(notification.id)} 
                        className="text-emerald-400 hover:text-emerald-300"
                        title="Mark as read"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                    )}
                    <button 
                      onClick={() => deleteNotification(notification.id)} 
                      className="text-red-400 hover:text-red-300"
                      title="Delete"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        {/* Mobile Action Bar - Only visible on small screens */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-emerald-900/80 backdrop-blur-md border-t border-emerald-800/30 p-3 flex justify-between">
          <span className="text-sm text-emerald-200">
            {selectedNotifications.length} selected
          </span>
          <div className="flex space-x-4">
            <button 
              onClick={markAllAsRead}
              disabled={!notifications.some(n => !n.read)}
              className="text-emerald-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button 
              onClick={deleteSelected}
              disabled={selectedNotifications.length === 0}
              className="text-red-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SystemNotificationsPage;