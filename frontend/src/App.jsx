import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Templates from './pages/Templates';
import Api from './pages/Api';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Customer/Dashboard';
import Campaigns from './pages/Customer/Campaigns';
import Contacts from './pages/Customer/Contacts';
import CustomerTemplates from './pages/Customer/Templates';
import Analytics from './pages/Customer/Analytics';
import Settings from './pages/Customer/Settings';
import HelpAndSupport from './pages/Customer/HelpAndSupport';
import AdminPanel from './pages/Admin/AdminPanel';
import DashboardPage from './pages/Admin/AdminDashboard';
import UserManagementPage from './pages/Admin/UserManagementPage';
import SubscriptionsPage from './pages/Admin/SubscriptionsPage';
import BillingPage from './pages/Admin/BillingPage';
import WhatsAppAPIPage from './pages/Admin/WhatsAppAPIPage';
import CampaignReviewPage from './pages/Admin/CampaignReviewPage';
import TemplateLibraryPage from './pages/Admin/TemplateLibraryPage';
import MessageDeliveryPage from './pages/Admin/MessageDeliveryPage';
import UsageReportsPage from './pages/Admin/UsageReportsPage';
import UserMetrics from './pages/Admin/UserMetrics';
import AuditLogs from './pages/Admin/AuditLogs';
import SystemNotificationsPage from './pages/Admin/SystemNotificationsPage';
import SystemSettings from './pages/Admin/SystemSettings';
import SupportTicketsPage from './pages/Admin/SupportTicketsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/api" element={<Api />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />


      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/customer/templates" element={<CustomerTemplates />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/help" element={<HelpAndSupport />} />

      <Route path="/admin-dashboard" element={<AdminPanel />} />
      <Route path="/admin/dashboard" element={<DashboardPage />} />
      <Route path="/admin/users" element={<UserManagementPage />} />
      <Route path="/admin/subscriptions" element={<SubscriptionsPage />} />
      <Route path="/admin/billing" element={<BillingPage />} />
      <Route path="/admin/api" element={<WhatsAppAPIPage />} />
      <Route path="/admin/campaigns" element={<CampaignReviewPage />} />
      <Route path="/admin/templates" element={<TemplateLibraryPage />} />
      <Route path="/admin/delivery" element={<MessageDeliveryPage />} />
      <Route path="/admin/reports" element={<UsageReportsPage />} />
      <Route path="/admin/metrics" element={<UserMetrics />} />
      <Route path="/admin/logs" element={<AuditLogs />} />
      <Route path="/admin/tickets" element={<SupportTicketsPage />} />
      <Route path="/admin/notifications" element={<SystemNotificationsPage />} />
      <Route path="/admin/settings" element={<SystemSettings />} />
    </Routes>
  );
};

export default App;