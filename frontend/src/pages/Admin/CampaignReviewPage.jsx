import React, { useState } from 'react';
import AdminLayout from './AdminLayout';

const CampaignReviewPage = () => {
  // Sample campaign data - in a real app this would come from an API
  const [campaigns, setCampaigns] = useState([
    {
      id: 'camp-001',
      name: 'March Promo Announcement',
      status: 'pending',
      submittedBy: 'John Doe',
      submittedOn: '2025-03-04T10:30:00',
      audience: 'Premium Customers',
      recipientCount: 2543,
      messageType: 'promotional',
      template: 'promo_announcement_v1',
      scheduledFor: '2025-03-08T09:00:00'
    },
    {
      id: 'camp-002',
      name: 'Weekly Newsletter',
      status: 'approved',
      submittedBy: 'Sarah Miller',
      submittedOn: '2025-03-03T14:15:00',
      audience: 'All Subscribers',
      recipientCount: 12852,
      messageType: 'informational',
      template: 'weekly_newsletter_v2',
      scheduledFor: '2025-03-07T08:00:00'
    },
    {
      id: 'camp-003',
      name: 'New Feature Announcement',
      status: 'rejected',
      submittedBy: 'Mike Johnson',
      submittedOn: '2025-03-02T09:45:00',
      audience: 'Beta Users',
      recipientCount: 864,
      messageType: 'promotional',
      template: 'feature_announcement_v1',
      feedback: 'Template doesn\'t comply with WhatsApp policies. Please revise CTAs.'
    },
    {
      id: 'camp-004',
      name: 'Customer Feedback Survey',
      status: 'pending',
      submittedBy: 'Emily Wilson',
      submittedOn: '2025-03-05T11:20:00',
      audience: 'Recent Purchasers',
      recipientCount: 1258,
      messageType: 'interactive',
      template: 'feedback_survey_v3',
      scheduledFor: '2025-03-10T10:00:00'
    },
    {
      id: 'camp-005',
      name: 'Abandoned Cart Reminder',
      status: 'approved',
      submittedBy: 'David Chen',
      submittedOn: '2025-03-01T16:30:00',
      audience: 'Shopping Cart Abandoners',
      recipientCount: 738,
      messageType: 'transactional',
      template: 'cart_reminder_v1',
      scheduledFor: '2025-03-06T12:00:00'
    }
  ]);

  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter campaigns based on status and search query
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          campaign.submittedBy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleReviewAction = (campaignId, action) => {
    setCampaigns(campaigns.map(campaign => {
      if (campaign.id === campaignId) {
        return { 
          ...campaign, 
          status: action === 'approve' ? 'approved' : 'rejected',
          feedback: action === 'reject' ? document.getElementById('feedback').value : null
        };
      }
      return campaign;
    }));
    setSelectedCampaign(null);
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Status badge color mapping
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    approved: 'bg-green-100 text-green-800 border-green-200',
    rejected: 'bg-red-100 text-red-800 border-red-200'
  };

  // Message type badge color mapping
  const messageTypeColors = {
    promotional: 'bg-purple-100 text-purple-800 border-purple-200',
    informational: 'bg-blue-100 text-blue-800 border-blue-200',
    transactional: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    interactive: 'bg-indigo-100 text-indigo-800 border-indigo-200'
  };

  return (
    <AdminLayout activePage="campaigns">
      <div className="px-6 py-8 bg-gradient-to-b from-emerald-900/10 to-emerald-950/30 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Campaign Review</h1>
            <p className="mt-2 text-emerald-200">Review and approve WhatsApp campaigns before they are sent to users</p>
          </div>

          {/* Filter and Search Bar */}
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex space-x-2">
              <button 
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filterStatus === 'all' ? 'bg-emerald-700 text-white' : 'bg-emerald-800/30 text-emerald-100 hover:bg-emerald-800/50'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setFilterStatus('pending')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filterStatus === 'pending' ? 'bg-emerald-700 text-white' : 'bg-emerald-800/30 text-emerald-100 hover:bg-emerald-800/50'
                }`}
              >
                Pending
              </button>
              <button 
                onClick={() => setFilterStatus('approved')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filterStatus === 'approved' ? 'bg-emerald-700 text-white' : 'bg-emerald-800/30 text-emerald-100 hover:bg-emerald-800/50'
                }`}
              >
                Approved
              </button>
              <button 
                onClick={() => setFilterStatus('rejected')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filterStatus === 'rejected' ? 'bg-emerald-700 text-white' : 'bg-emerald-800/30 text-emerald-100 hover:bg-emerald-800/50'
                }`}
              >
                Rejected
              </button>
            </div>
            <div className="w-full md:w-64">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search campaigns..."
                  className="w-full rounded-md bg-emerald-800/20 border border-emerald-700/30 text-white placeholder-emerald-400 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Campaigns Table */}
          <div className="bg-emerald-800/20 overflow-hidden shadow-xl rounded-lg border border-emerald-700/30">
            <table className="min-w-full divide-y divide-emerald-700/30">
              <thead className="bg-emerald-800/30">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                    Campaign
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                    Audience
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-emerald-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-700/30 bg-emerald-900/10">
                {filteredCampaigns.length > 0 ? (
                  filteredCampaigns.map((campaign) => (
                    <tr key={campaign.id} className="hover:bg-emerald-800/20">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-start">
                          <div className="ml-1">
                            <div className="text-sm font-medium text-white">{campaign.name}</div>
                            <div className="text-sm text-emerald-300">by {campaign.submittedBy}</div>
                            <div className="text-xs text-emerald-400 mt-1">
                              <span className="font-medium">Template:</span> {campaign.template}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[campaign.status]}`}>
                          {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${messageTypeColors[campaign.messageType]}`}>
                          {campaign.messageType.charAt(0).toUpperCase() + campaign.messageType.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">{campaign.audience}</div>
                        <div className="text-xs text-emerald-300">{campaign.recipientCount.toLocaleString()} recipients</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-200">
                        {formatDate(campaign.submittedOn)}
                        {campaign.scheduledFor && (
                          <div className="text-xs text-emerald-400 mt-1">
                            <span className="font-medium">Scheduled:</span> {formatDate(campaign.scheduledFor)}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setSelectedCampaign(campaign)}
                          className="text-emerald-400 hover:text-emerald-300 bg-emerald-800/30 hover:bg-emerald-800/50 px-3 py-1 rounded-md"
                        >
                          Review
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-emerald-300">
                      No campaigns match your filters
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Review Modal */}
          {selectedCampaign && (
            <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
              <div className="fixed inset-0 bg-black opacity-75" onClick={() => setSelectedCampaign(null)}></div>
              <div className="relative bg-emerald-900 rounded-lg shadow-xl max-w-3xl w-full mx-4 border border-emerald-700/50">
                <div className="px-6 py-4 border-b border-emerald-700/30">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-medium text-white">Campaign Review</h3>
                    <button 
                      className="text-emerald-300 hover:text-white"
                      onClick={() => setSelectedCampaign(null)}
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
                  {/* Campaign Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-4">Campaign Details</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-emerald-300">Campaign Name</p>
                          <p className="text-white">{selectedCampaign.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-emerald-300">Status</p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border mt-1 ${statusColors[selectedCampaign.status]}`}>
                            {selectedCampaign.status.charAt(0).toUpperCase() + selectedCampaign.status.slice(1)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm text-emerald-300">Submitted By</p>
                          <p className="text-white">{selectedCampaign.submittedBy}</p>
                        </div>
                        <div>
                          <p className="text-sm text-emerald-300">Submission Date</p>
                          <p className="text-white">{formatDate(selectedCampaign.submittedOn)}</p>
                        </div>
                        {selectedCampaign.scheduledFor && (
                          <div>
                            <p className="text-sm text-emerald-300">Scheduled For</p>
                            <p className="text-white">{formatDate(selectedCampaign.scheduledFor)}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-4">Audience Information</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-emerald-300">Target Audience</p>
                          <p className="text-white">{selectedCampaign.audience}</p>
                        </div>
                        <div>
                          <p className="text-sm text-emerald-300">Recipients</p>
                          <p className="text-white">{selectedCampaign.recipientCount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-emerald-300">Message Type</p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border mt-1 ${messageTypeColors[selectedCampaign.messageType]}`}>
                            {selectedCampaign.messageType.charAt(0).toUpperCase() + selectedCampaign.messageType.slice(1)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm text-emerald-300">Template</p>
                          <p className="text-white">{selectedCampaign.template}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Preview */}
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-white mb-4">Message Preview</h4>
                    <div className="bg-emerald-950 border border-emerald-700/30 rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="bg-emerald-800/30 rounded-lg p-3 inline-block max-w-md">
                            <p className="text-white">
                              {/* Sample message content based on campaign type */}
                              {selectedCampaign.messageType === 'promotional' && 
                                `Hi {{Customer.FirstName}}, we're excited to announce our special ${selectedCampaign.name}! Get 20% off your next purchase with code PROMO20. Valid until {{Expiry.Date}}. Reply STOP to unsubscribe.`
                              }
                              {selectedCampaign.messageType === 'informational' && 
                                `Hey {{Customer.FirstName}}, here's your ${selectedCampaign.name}. Our latest updates include new features that you'll love. Check out more at {{Business.WebsiteURL}}. Reply STOP to unsubscribe.`
                              }
                              {selectedCampaign.messageType === 'transactional' && 
                                `Hello {{Customer.FirstName}}, we noticed you left some items in your cart. Your selections are saved and ready for checkout. Click here to complete your purchase: {{Cart.RecoveryURL}}`
                              }
                              {selectedCampaign.messageType === 'interactive' && 
                                `Hi {{Customer.FirstName}}, we value your opinion! Could you please take a moment to rate your recent experience with us? Reply with a number from 1-5, with 5 being excellent.`
                              }
                            </p>
                          </div>
                          <div className="mt-2 text-xs text-emerald-400">
                            Template variables will be replaced with actual customer data
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Approval/Rejection Form */}
                  {selectedCampaign.status === 'pending' && (
                    <div className="border-t border-emerald-700/30 pt-4">
                      <h4 className="text-lg font-medium text-white mb-4">Review Decision</h4>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="feedback" className="block text-sm font-medium text-emerald-300 mb-1">
                            Feedback (required for rejection)
                          </label>
                          <textarea
                            id="feedback"
                            rows="3"
                            className="w-full rounded-md bg-emerald-800/20 border border-emerald-700/30 text-white placeholder-emerald-400 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder="Enter any feedback or notes about this campaign..."
                          ></textarea>
                        </div>
                        <div className="flex justify-end space-x-3">
                          <button
                            onClick={() => handleReviewAction(selectedCampaign.id, 'reject')}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md shadow"
                          >
                            Reject Campaign
                          </button>
                          <button
                            onClick={() => handleReviewAction(selectedCampaign.id, 'approve')}
                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md shadow"
                          >
                            Approve Campaign
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Previous Feedback (for rejected campaigns) */}
                  {selectedCampaign.status === 'rejected' && selectedCampaign.feedback && (
                    <div className="border-t border-emerald-700/30 pt-4">
                      <h4 className="text-lg font-medium text-white mb-2">Rejection Feedback</h4>
                      <div className="bg-red-900/20 border border-red-700/30 rounded-md p-3">
                        <p className="text-white">{selectedCampaign.feedback}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-6 py-3 border-t border-emerald-700/30 flex justify-end">
                  <button
                    onClick={() => setSelectedCampaign(null)}
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-medium rounded-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default CampaignReviewPage;