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
    </Routes>
  );
};

export default App;