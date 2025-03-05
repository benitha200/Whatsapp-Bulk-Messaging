import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const SystemSettings = () => {
  // State for different settings sections
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'WhatsBulk',
    supportEmail: 'support@whatsbulk.com',
    maxDailyMessages: 10000,
    maintenanceMode: false,
    defaultTimezone: 'UTC'
  });
  
  const [whatsappSettings, setWhatsappSettings] = useState({
    messageRateLimit: 20,
    messageQueueSize: 5000,
    mediaMaxSize: 16,
    retryAttempts: 3,
    retryDelay: 60
  });
  
  const [securitySettings, setSecuritySettings] = useState({
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    twoFactorAuth: true,
    passwordExpiry: 90,
    ipWhitelist: ''
  });
  
  const [notificationSettings, setNotificationSettings] = useState({
    adminEmailAlerts: true,
    userSignupNotifications: true,
    paymentNotifications: true,
    systemAlerts: true,
    deliveryReports: true
  });
  
  // Handlers for each settings section
  const handleGeneralSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGeneralSettings({
      ...generalSettings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleWhatsappSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setWhatsappSettings({
      ...whatsappSettings,
      [name]: type === 'checkbox' ? checked : 
              type === 'number' ? Number(value) : value
    });
  };
  
  const handleSecuritySettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSecuritySettings({
      ...securitySettings,
      [name]: type === 'checkbox' ? checked : 
              type === 'number' ? Number(value) : value
    });
  };
  
  const handleNotificationSettingsChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings({
      ...notificationSettings,
      [name]: checked
    });
  };
  
  // Save settings handler (would connect to API in real implementation)
  const handleSaveSettings = (e, settingType) => {
    e.preventDefault();
    // Simulating API call with setTimeout
    const saveButton = e.target.querySelector('button[type="submit"]');
    saveButton.disabled = true;
    saveButton.innerText = 'Saving...';
    
    setTimeout(() => {
      saveButton.innerText = 'Saved!';
      setTimeout(() => {
        saveButton.disabled = false;
        saveButton.innerText = 'Save Changes';
      }, 1500);
    }, 1000);
    
    // Here you would normally send the settings to your backend
    console.log(`${settingType} settings saved:`, 
      settingType === 'general' ? generalSettings :
      settingType === 'whatsapp' ? whatsappSettings :
      settingType === 'security' ? securitySettings :
      notificationSettings
    );
  };
  
  // Settings section component for consistent styling
  const SettingsSection = ({ title, description, children, onSubmit, settingType }) => (
    <div className="bg-emerald-900/20 backdrop-blur-sm rounded-lg border border-emerald-800/30 mb-8">
      <div className="p-6 border-b border-emerald-800/30">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-emerald-200 mt-1">{description}</p>
      </div>
      <form onSubmit={(e) => onSubmit(e, settingType)} className="p-6">
        <div className="space-y-6">
          {children}
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md shadow-sm transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
  
  return (
    <AdminLayout activePage="settings">
      <div className="px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">System Settings</h1>
          <p className="text-emerald-200 mt-2">Configure and manage your WhatsBulk platform settings</p>
        </div>
        
        {/* Settings Navigation */}
        <div className="flex overflow-x-auto mb-8 pb-2">
          <nav className="flex space-x-4">
            <a href="#general" className="px-4 py-2 text-emerald-100 bg-emerald-800/40 rounded-md hover:bg-emerald-800/60 whitespace-nowrap">
              General Settings
            </a>
            <a href="#whatsapp" className="px-4 py-2 text-emerald-100 bg-emerald-800/40 rounded-md hover:bg-emerald-800/60 whitespace-nowrap">
              WhatsApp Configuration
            </a>
            <a href="#security" className="px-4 py-2 text-emerald-100 bg-emerald-800/40 rounded-md hover:bg-emerald-800/60 whitespace-nowrap">
              Security & Access
            </a>
            <a href="#notifications" className="px-4 py-2 text-emerald-100 bg-emerald-800/40 rounded-md hover:bg-emerald-800/60 whitespace-nowrap">
              Notification Settings
            </a>
          </nav>
        </div>
        
        {/* General Settings */}
        <section id="general">
          <SettingsSection 
            title="General Settings" 
            description="Basic configuration for your WhatsBulk platform"
            onSubmit={handleSaveSettings}
            settingType="general"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="siteName" className="block text-sm font-medium text-emerald-100">
                  Site Name
                </label>
                <input
                  type="text"
                  name="siteName"
                  id="siteName"
                  value={generalSettings.siteName}
                  onChange={handleGeneralSettingsChange}
                  className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label htmlFor="supportEmail" className="block text-sm font-medium text-emerald-100">
                  Support Email
                </label>
                <input
                  type="email"
                  name="supportEmail"
                  id="supportEmail"
                  value={generalSettings.supportEmail}
                  onChange={handleGeneralSettingsChange}
                  className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label htmlFor="maxDailyMessages" className="block text-sm font-medium text-emerald-100">
                  Max Daily Messages
                </label>
                <input
                  type="number"
                  name="maxDailyMessages"
                  id="maxDailyMessages"
                  value={generalSettings.maxDailyMessages}
                  onChange={handleGeneralSettingsChange}
                  className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label htmlFor="defaultTimezone" className="block text-sm font-medium text-emerald-100">
                  Default Timezone
                </label>
                <select
                  name="defaultTimezone"
                  id="defaultTimezone"
                  value={generalSettings.defaultTimezone}
                  onChange={handleGeneralSettingsChange}
                  className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="Europe/London">London (GMT)</option>
                  <option value="Asia/Singapore">Singapore (SGT)</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="maintenanceMode"
                  id="maintenanceMode"
                  checked={generalSettings.maintenanceMode}
                  onChange={handleGeneralSettingsChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-700 rounded bg-emerald-800/30"
                />
                <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-emerald-100">
                  Enable Maintenance Mode
                </label>
              </div>
              <p className="text-xs text-emerald-300 mt-1">
                When enabled, only administrators can access the platform.
              </p>
            </div>
          </SettingsSection>
        </section>
        
        {/* WhatsApp Configuration */}
        <section id="whatsapp">
          <SettingsSection 
            title="WhatsApp API Configuration" 
            description="Settings related to WhatsApp messaging service"
            onSubmit={handleSaveSettings}
            settingType="whatsapp"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="messageRateLimit" className="block text-sm font-medium text-emerald-100">
                  Message Rate Limit (per second)
                </label>
                <input
                  type="number"
                  name="messageRateLimit"
                  id="messageRateLimit"
                  value={whatsappSettings.messageRateLimit}
                  onChange={handleWhatsappSettingsChange}
                  className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="text-xs text-emerald-300 mt-1">
                  Maximum number of messages that can be sent per second
                </p>
              </div>
              
              <div>
                <label htmlFor="messageQueueSize" className="block text-sm font-medium text-emerald-100">
                  Message Queue Size
                </label>
                <input
                  type="number"
                  name="messageQueueSize"
                  id="messageQueueSize"
                  value={whatsappSettings.messageQueueSize}
                  onChange={handleWhatsappSettingsChange}
                  className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="text-xs text-emerald-300 mt-1">
                  Maximum number of messages that can be queued at once
                </p>
              </div>
              
              <div>
                <label htmlFor="mediaMaxSize" className="block text-sm font-medium text-emerald-100">
                  Media Max Size (MB)
                </label>
                <input
                  type="number"
                  name="mediaMaxSize"
                  id="mediaMaxSize"
                  value={whatsappSettings.mediaMaxSize}
                  onChange={handleWhatsappSettingsChange}
                  className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="retryAttempts" className="block text-sm font-medium text-emerald-100">
                    Retry Attempts
                  </label>
                  <input
                    type="number"
                    name="retryAttempts"
                    id="retryAttempts"
                    value={whatsappSettings.retryAttempts}
                    onChange={handleWhatsappSettingsChange}
                    className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="retryDelay" className="block text-sm font-medium text-emerald-100">
                    Retry Delay (sec)
                  </label>
                  <input
                    type="number"
                    name="retryDelay"
                    id="retryDelay"
                    value={whatsappSettings.retryDelay}
                    onChange={handleWhatsappSettingsChange}
                    className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-emerald-800/30 rounded-md border border-emerald-700">
              <h4 className="text-sm font-medium text-white mb-2">API Connection Status</h4>
              <div className="flex items-center">
                <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-emerald-100">Connected to WhatsApp Business API</span>
              </div>
              <div className="mt-2 flex">
                <button type="button" className="text-xs mr-3 text-emerald-400 hover:text-emerald-300">
                  Test Connection
                </button>
                <button type="button" className="text-xs text-emerald-400 hover:text-emerald-300">
                  View API Logs
                </button>
              </div>
            </div>
          </SettingsSection>
        </section>
        
        {/* Security Settings */}
        <section id="security">
          <SettingsSection 
            title="Security & Access" 
            description="Configure security settings and access controls"
            onSubmit={handleSaveSettings}
            settingType="security"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="sessionTimeout" className="block text-sm font-medium text-emerald-100">
                  Session Timeout (minutes)
                </label>
                <input
                  type="number"
                  name="sessionTimeout"
                  id="sessionTimeout"
                  value={securitySettings.sessionTimeout}
                  onChange={handleSecuritySettingsChange}
                  className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              
              <div>
                <label htmlFor="maxLoginAttempts" className="block text-sm font-medium text-emerald-100">
                  Max Login Attempts
                </label>
                <input
                  type="number"
                  name="maxLoginAttempts"
                  id="maxLoginAttempts"
                  value={securitySettings.maxLoginAttempts}
                  onChange={handleSecuritySettingsChange}
                  className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="text-xs text-emerald-300 mt-1">
                  Number of failed attempts before account lockout
                </p>
              </div>
              
              <div>
                <label htmlFor="passwordExpiry" className="block text-sm font-medium text-emerald-100">
                  Password Expiry (days)
                </label>
                <input
                  type="number"
                  name="passwordExpiry"
                  id="passwordExpiry"
                  value={securitySettings.passwordExpiry}
                  onChange={handleSecuritySettingsChange}
                  className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="text-xs text-emerald-300 mt-1">
                  Set to 0 to disable password expiration
                </p>
              </div>
              
              <div>
                <label htmlFor="ipWhitelist" className="block text-sm font-medium text-emerald-100">
                  IP Whitelist
                </label>
                <textarea
                  name="ipWhitelist"
                  id="ipWhitelist"
                  value={securitySettings.ipWhitelist}
                  onChange={handleSecuritySettingsChange}
                  placeholder="Enter IP addresses separated by commas"
                  className="mt-1 block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 h-24"
                />
                <p className="text-xs text-emerald-300 mt-1">
                  Leave empty to allow all IP addresses
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="twoFactorAuth"
                  id="twoFactorAuth"
                  checked={securitySettings.twoFactorAuth}
                  onChange={handleSecuritySettingsChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-700 rounded bg-emerald-800/30"
                />
                <label htmlFor="twoFactorAuth" className="ml-2 block text-sm text-emerald-100">
                  Require Two-Factor Authentication
                </label>
              </div>
              <p className="text-xs text-emerald-300 mt-1 ml-6">
                When enabled, all admin users must use 2FA to access the platform
              </p>
            </div>
            
            <div className="mt-6 p-4 bg-emerald-800/30 rounded-md border border-emerald-700">
              <h4 className="text-sm font-medium text-white mb-3">Security Audit</h4>
              <button type="button" className="px-3 py-1 text-sm bg-emerald-700 hover:bg-emerald-600 text-white rounded-md">
                Run Security Scan
              </button>
              <p className="text-xs text-emerald-300 mt-2">
                Last scan: March 5, 2025 - No vulnerabilities detected
              </p>
            </div>
          </SettingsSection>
        </section>
        
        {/* Notification Settings */}
        <section id="notifications">
          <SettingsSection 
            title="Notification Settings" 
            description="Configure email and system notifications"
            onSubmit={handleSaveSettings}
            settingType="notifications"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-emerald-800/30">
                <div>
                  <label htmlFor="adminEmailAlerts" className="text-sm font-medium text-emerald-100">
                    Admin Email Alerts
                  </label>
                  <p className="text-xs text-emerald-300 mt-1">
                    Receive email notifications for critical system events
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="adminEmailAlerts"
                    id="adminEmailAlerts"
                    checked={notificationSettings.adminEmailAlerts}
                    onChange={handleNotificationSettingsChange}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-700 rounded bg-emerald-800/30"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-emerald-800/30">
                <div>
                  <label htmlFor="userSignupNotifications" className="text-sm font-medium text-emerald-100">
                    User Signup Notifications
                  </label>
                  <p className="text-xs text-emerald-300 mt-1">
                    Get notified when new users register
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="userSignupNotifications"
                    id="userSignupNotifications"
                    checked={notificationSettings.userSignupNotifications}
                    onChange={handleNotificationSettingsChange}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-700 rounded bg-emerald-800/30"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-emerald-800/30">
                <div>
                  <label htmlFor="paymentNotifications" className="text-sm font-medium text-emerald-100">
                    Payment Notifications
                  </label>
                  <p className="text-xs text-emerald-300 mt-1">
                    Get notified for new payments and subscription changes
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="paymentNotifications"
                    id="paymentNotifications"
                    checked={notificationSettings.paymentNotifications}
                    onChange={handleNotificationSettingsChange}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-700 rounded bg-emerald-800/30"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-emerald-800/30">
                <div>
                  <label htmlFor="systemAlerts" className="text-sm font-medium text-emerald-100">
                    System Alerts
                  </label>
                  <p className="text-xs text-emerald-300 mt-1">
                    Receive alerts for system errors and performance issues
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="systemAlerts"
                    id="systemAlerts"
                    checked={notificationSettings.systemAlerts}
                    onChange={handleNotificationSettingsChange}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-700 rounded bg-emerald-800/30"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div>
                  <label htmlFor="deliveryReports" className="text-sm font-medium text-emerald-100">
                    Delivery Reports
                  </label>
                  <p className="text-xs text-emerald-300 mt-1">
                    Daily summary of message delivery statistics
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="deliveryReports"
                    id="deliveryReports"
                    checked={notificationSettings.deliveryReports}
                    onChange={handleNotificationSettingsChange}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-700 rounded bg-emerald-800/30"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-emerald-800/30 rounded-md border border-emerald-700">
              <h4 className="text-sm font-medium text-white mb-2">Email Test</h4>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="block w-full px-3 py-2 bg-emerald-800/30 border border-emerald-700 rounded-l-md text-emerald-100 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
                <button type="button" className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-r-md border border-emerald-700">
                  Send Test
                </button>
              </div>
            </div>
          </SettingsSection>
        </section>
      </div>
    </AdminLayout>
  );
};

export default SystemSettings;