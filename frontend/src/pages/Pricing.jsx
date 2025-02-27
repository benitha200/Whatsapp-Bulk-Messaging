import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

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
    <div className="min-h-screen bg-gradient-to-b w-full from-green-950 to-emerald-950">
      {/* Header */}
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 text-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Simple, Transparent <span className="text-green-400">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. No hidden fees, no complicated tiers.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-16">
            <span className={`mr-3 text-lg ${!isAnnual ? 'text-white font-medium' : 'text-green-300'}`}>Monthly</span>
            <div 
              className="relative w-16 h-8 bg-green-800/50 rounded-full cursor-pointer p-1"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div 
                className={`w-6 h-6 bg-green-400 rounded-full absolute top-1 transition-all duration-300 ${isAnnual ? 'right-1' : 'left-1'}`}
              ></div>
            </div>
            <span className={`ml-3 text-lg ${isAnnual ? 'text-white font-medium' : 'text-green-300'}`}>Annual</span>
            <span className="ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
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
                  ? 'bg-gradient-to-b from-green-900/40 to-emerald-900/40 border-green-500/30 transform scale-105 z-10' 
                  : 'bg-white/10 border-green-800/30'} 
                  backdrop-blur-sm p-8 rounded-xl shadow-xl border relative`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-green-200 mb-6">{tier.description}</p>
                <p className="text-4xl font-bold text-white mb-6">
                  ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                  <span className="text-green-400 text-lg font-normal">/{isAnnual ? 'year' : 'month'}</span>
                </p>
                {isAnnual && (
                  <p className="text-green-300 mb-6 -mt-4 text-sm">
                    Billed annually (2 months free)
                  </p>
                )}
                <ul className="text-green-200 space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={tier.ctaText === 'Contact Sales' ? '/contact' : '/signup'} 
                  className={`block text-center ${tier.popular 
                    ? 'bg-green-600 hover:bg-green-500 shadow-lg shadow-green-600/20' 
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
      <section className="py-20 backdrop-blur-sm border-y border-green-800/20 bg-green-900/20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-green-800/30">
                  <th className="text-left py-4 px-6 text-green-100 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Starter</th>
                  <th className="text-center py-4 px-6 text-white font-semibold bg-green-800/20">Professional</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparativeFeatures.map((category, index) => (
                  <React.Fragment key={index}>
                    <tr className="bg-green-800/10">
                      <td colSpan={4} className="py-3 px-6 text-green-300 font-medium">{category.category}</td>
                    </tr>
                    {category.features.map((feature, i) => (
                      <tr key={i} className="border-b border-green-800/10">
                        <td className="py-3 px-6 text-green-100">{feature}</td>
                        <td className="text-center py-3 px-6 text-green-200">
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
                        <td className="text-center py-3 px-6 text-green-200 bg-green-800/10">
                          {feature === 'Monthly message limit' ? '10,000' : 
                           feature === 'Delivery speed' ? 'Enhanced' :
                           feature === 'Support level' ? 'Priority' :
                           feature === 'Response time' ? '8 hours' :
                           feature === 'Auto-sync' ? '❌' :
                           feature === 'Onboarding' ? 'Guided' :
                           feature === 'Training sessions' ? '1 session' :
                           feature === 'Custom fields' ? 'Advanced' : '✓'}
                        </td>
                        <td className="text-center py-3 px-6 text-green-200">
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
          <p className="text-green-200 text-center max-w-3xl mx-auto mb-12">
            Enhance your plan with additional services based on your specific needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-800/20">
                <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-green-200 mb-4">{addon.description}</p>
                <p className="text-2xl font-bold text-green-400">${addon.price}<span className="text-sm font-normal text-green-300">/month</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-950 to-green-950 border-t border-green-800/30">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-green-200 text-center max-w-3xl mx-auto mb-12">
            Find answers to common questions about our pricing and plans
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">What happens if I go over my message limit?</h3>
              <p className="text-green-200">If you reach your monthly message limit, you can purchase additional message packs or upgrade to a higher plan. We'll notify you when you're approaching your limit so you can plan accordingly.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">Can I change my plan later?</h3>
              <p className="text-green-200">Yes, you can upgrade, downgrade, or cancel your plan at any time. Upgrades take effect immediately, while downgrades or cancellations take effect at the end of your billing cycle.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">Is there a contract or commitment?</h3>
              <p className="text-green-200">Our monthly plans are commitment-free. Annual plans are paid upfront for the year but offer significant savings. Both options come with our 14-day money-back guarantee for new customers.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">Do you offer custom enterprise solutions?</h3>
              <p className="text-green-200">Yes, we offer custom solutions for large enterprises with specific needs. Contact our sales team to discuss your requirements and get a tailored plan that fits your business perfectly.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">What payment methods do you accept?</h3>
              <p className="text-green-200">We accept all major credit cards, PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoicing with net-30 payment terms.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-800/20">
              <h3 className="text-xl font-semibold text-white mb-4">Is there a free trial available?</h3>
              <p className="text-green-200">Yes, we offer a 14-day free trial on all our plans. No credit card required to start. You'll have access to all features in your selected plan during the trial period.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 border-t border-green-800/30">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-green-200 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of businesses already using WhatsBulk to reach their customers effectively on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/signup"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/25 font-medium text-lg"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white border-2 border-green-400 px-8 py-4 rounded-lg hover:bg-green-400/10 transition-all shadow-lg font-medium text-lg"
            >
              Contact Sales
            </Link>
          </div>
          <p className="text-green-300 mt-6">No credit card required to start your trial.</p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-green-950/80 backdrop-blur-sm py-12 border-t border-green-800/20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">WhatsBulk</h3>
              <p className="text-green-200 mb-6">Powerful WhatsApp marketing platform for businesses of all sizes.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-400 hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="text-green-400 hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-green-400 hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-5.384.272-.222.59-.449.874-.69 1.348-1.119 2.679-2.17 3.8-3.19 1.021 1.041 1.991 2.123 2.902 3.245-.688.098-1.623.22-2.654.42a47.39 47.39 0 00-3.063 5.599z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-green-200 hover:text-green-400">Features</Link></li>
                <li><Link to="/pricing" className="text-green-200 hover:text-green-400">Pricing</Link></li>
                <li><Link to="/use-cases" className="text-green-200 hover:text-green-400">Use Cases</Link></li>
                <li><Link to="/demo" className="text-green-200 hover:text-green-400">Request Demo</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-green-200 hover:text-green-400">Blog</Link></li>
                <li><Link to="/docs" className="text-green-200 hover:text-green-400">Documentation</Link></li>
                <li><Link to="/support" className="text-green-200 hover:text-green-400">Support</Link></li>
                <li><Link to="/faq" className="text-green-200 hover:text-green-400">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-green-200 hover:text-green-400">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-green-200 hover:text-green-400">Terms of Service</Link></li>
                <li><Link to="/security" className="text-green-200 hover:text-green-400">Security</Link></li>
                <li><Link to="/cookies" className="text-green-200 hover:text-green-400">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800/30 mt-8 pt-8 text-center">
            <p className="text-green-200">© 2023 WhatsBulk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;