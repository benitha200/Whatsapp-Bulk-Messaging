import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Layout from './Layout';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  // Define pricing tiers with both monthly and annual options
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'For small businesses just getting started',
      monthlyPrice: 29,
      annualPrice: 290, // 10 months price (2 months free)
      features: [
        '1,000 messages/month',
        'Basic templates',
        'Contact management',
        'Basic analytics',
        'Email support',
        'Single user account',
        'CSV contact import',
        'Standard delivery speeds'
      ],
      popular: false,
      ctaText: 'Get Started'
    },
    {
      name: 'Professional',
      description: 'For growing businesses with active campaigns',
      monthlyPrice: 79,
      annualPrice: 790, // 10 months price (2 months free)
      features: [
        '10,000 messages/month',
        'Advanced templates',
        'Audience segmentation',
        'Advanced analytics',
        'Priority support',
        'API access',
        '3 user accounts',
        'CRM integration',
        'Message scheduling',
        'Custom variables',
        'Enhanced delivery speeds'
      ],
      popular: true,
      ctaText: 'Get Started'
    },
    {
      name: 'Enterprise',
      description: 'For large businesses with high-volume needs',
      monthlyPrice: 199,
      annualPrice: 1990, // 10 months price (2 months free)
      features: [
        '50,000 messages/month',
        'Custom templates',
        'Multi-user access',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 premium support',
        'Unlimited user accounts',
        'Advanced security features',
        'Custom reporting',
        'Webhook support',
        'White-label options',
        'Highest priority delivery'
      ],
      popular: false,
      ctaText: 'Contact Sales'
    }
  ];
  
  // Additional features for comparative table
  const comparativeFeatures = [
    { category: 'Messaging', features: ['Monthly message limit', 'Delivery speed', 'Message templates', 'Rich media support'] },
    { category: 'Analytics', features: ['Delivery tracking', 'Open rates', 'Click tracking', 'Conversion analysis', 'Custom reports'] },
    { category: 'Contacts', features: ['Contact management', 'Audience segmentation', 'CRM integration', 'Custom fields', 'Auto-sync'] },
    { category: 'Support', features: ['Support level', 'Response time', 'Onboarding', 'Training sessions'] }
  ];
  
  // Add-on services
  const addOns = [
    { name: 'Extra Messages', description: '5,000 additional messages', price: 35 },
    { name: 'API Integration', description: 'Advanced API usage', price: 49 },
    { name: 'Dedicated IP', description: 'For improved deliverability', price: 29 },
    { name: 'Additional Users', description: 'Per extra user account', price: 19 }
  ];

  return (
    <Layout>


      {/* Hero Section */}
      <section className="pt-28 pb-16 text-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Simple, Transparent <span className="text-emerald-400">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. No hidden fees, no complicated tiers.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-16">
            <span className={`mr-3 text-lg ${!isAnnual ? 'text-white font-medium' : 'text-emerald-300'}`}>Monthly</span>
            <div 
              className="relative w-16 h-8 bg-emerald-800/50 rounded-full cursor-pointer p-1"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div 
                className={`w-6 h-6 bg-emerald-400 rounded-full absolute top-1 transition-all duration-300 ${isAnnual ? 'right-1' : 'left-1'}`}
              ></div>
            </div>
            <span className={`ml-3 text-lg ${isAnnual ? 'text-white font-medium' : 'text-emerald-300'}`}>Annual</span>
            <span className="ml-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
          </div>
        </div>
      </section>
      
      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`${tier.popular 
                  ? 'bg-gradient-to-b from-emerald-900/40 to-emerald-900/40 border-emerald-500/30 transform scale-105 z-10' 
                  : 'bg-white/10 border-emerald-800/30'} 
                  backdrop-blur-sm p-8 rounded-xl shadow-xl border relative`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-emerald-200 mb-6">{tier.description}</p>
                <p className="text-4xl font-bold text-white mb-6">
                  ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                  <span className="text-emerald-400 text-lg font-normal">/{isAnnual ? 'year' : 'month'}</span>
                </p>
                {isAnnual && (
                  <p className="text-emerald-300 mb-6 -mt-4 text-sm">
                    Billed annually (2 months free)
                  </p>
                )}
                <ul className="text-emerald-200 space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={tier.ctaText === 'Contact Sales' ? '/contact' : '/signup'} 
                  className={`block text-center ${tier.popular 
                    ? 'bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20' 
                    : 'bg-white/20 hover:bg-white/30'} 
                    text-white py-3 px-4 rounded-lg transition-colors font-medium`}
                >
                  {tier.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Feature Comparison Table */}
      <section className="py-20 backdrop-blur-sm border-y border-emerald-800/20 bg-emerald-900/20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-emerald-800/30">
                  <th className="text-left py-4 px-6 text-emerald-100 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Starter</th>
                  <th className="text-center py-4 px-6 text-white font-semibold bg-emerald-800/20">Professional</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparativeFeatures.map((category, index) => (
                  <React.Fragment key={index}>
                    <tr className="bg-emerald-800/10">
                      <td colSpan={4} className="py-3 px-6 text-emerald-300 font-medium">{category.category}</td>
                    </tr>
                    {category.features.map((feature, i) => (
                      <tr key={i} className="border-b border-emerald-800/10">
                        <td className="py-3 px-6 text-emerald-100">{feature}</td>
                        <td className="text-center py-3 px-6 text-emerald-200">
                          {feature === 'Monthly message limit' ? '1,000' : 
                           feature === 'Delivery speed' ? 'Standard' :
                           feature === 'Support level' ? 'Email' :
                           feature === 'Response time' ? '24 hours' :
                           feature === 'Custom reports' ? '❌' :
                           feature === 'CRM integration' ? '❌' :
                           feature === 'Auto-sync' ? '❌' :
                           feature === 'Onboarding' ? 'Self-service' :
                           feature === 'Training sessions' ? '❌' :
                           feature === 'Custom fields' ? 'Basic' : '✓'}
                        </td>
                        <td className="text-center py-3 px-6 text-emerald-200 bg-emerald-800/10">
                          {feature === 'Monthly message limit' ? '10,000' : 
                           feature === 'Delivery speed' ? 'Enhanced' :
                           feature === 'Support level' ? 'Priority' :
                           feature === 'Response time' ? '8 hours' :
                           feature === 'Auto-sync' ? '❌' :
                           feature === 'Onboarding' ? 'Guided' :
                           feature === 'Training sessions' ? '1 session' :
                           feature === 'Custom fields' ? 'Advanced' : '✓'}
                        </td>
                        <td className="text-center py-3 px-6 text-emerald-200">
                          {feature === 'Monthly message limit' ? '50,000' : 
                           feature === 'Delivery speed' ? 'Highest priority' :
                           feature === 'Support level' ? '24/7 Premium' :
                           feature === 'Response time' ? '1 hour' :
                           feature === 'Onboarding' ? 'White-glove' :
                           feature === 'Training sessions' ? 'Unlimited' :
                           feature === 'Custom fields' ? 'Unlimited' : '✓'}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Add-ons Section */}
      <section className="py-24">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Add-ons</h2>
          <p className="text-emerald-200 text-center max-w-3xl mx-auto mb-12">
            Enhance your plan with additional services based on your specific needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-800/20">
                <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-emerald-200 mb-4">{addon.description}</p>
                <p className="text-2xl font-bold text-emerald-400">${addon.price}<span className="text-sm font-normal text-emerald-300">/month</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-950 to-emerald-950 border-t border-emerald-800/30">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-emerald-200 text-center max-w-3xl mx-auto mb-12">
            Find answers to common questions about our pricing and plans
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">What happens if I go over my message limit?</h3>
              <p className="text-emerald-200">If you reach your monthly message limit, you can purchase additional message packs or upgrade to a higher plan. We'll notify you when you're approaching your limit so you can plan accordingly.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">Can I change my plan later?</h3>
              <p className="text-emerald-200">Yes, you can upgrade, downgrade, or cancel your plan at any time. Upgrades take effect immediately, while downgrades or cancellations take effect at the end of your billing cycle.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">Is there a contract or commitment?</h3>
              <p className="text-emerald-200">Our monthly plans are commitment-free. Annual plans are paid upfront for the year but offer significant savings. Both options come with our 14-day money-back guarantee for new customers.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">Do you offer custom enterprise solutions?</h3>
              <p className="text-emerald-200">Yes, we offer custom solutions for large enterprises with specific needs. Contact our sales team to discuss your requirements and get a tailored plan that fits your business perfectly.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">What payment methods do you accept?</h3>
              <p className="text-emerald-200">We accept all major credit cards, PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoicing with net-30 payment terms.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">Is there a free trial available?</h3>
              <p className="text-emerald-200">Yes, we offer a 14-day free trial on all our plans. No credit card required to start. You'll have access to all features in your selected plan during the trial period.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 border-t border-emerald-800/30">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-emerald-200 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of businesses already using WhatsBulk to reach their customers effectively on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/signup"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 font-medium text-lg"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white border-2 border-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-all shadow-lg font-medium text-lg"
            >
              Contact Sales
            </Link>
          </div>
          <p className="text-emerald-300 mt-6">No credit card required to start your trial.</p>
        </div>
      </section>
   
    </Layout>
      
  );
};

export default Pricing;