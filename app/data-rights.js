'use client';

import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

export default function DataRights() {
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    requestType: 'access',
    firstName: '',
    lastName: '',
    email: '',
    orderNumber: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend API
    console.log('Data subject request submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        requestType: 'access',
        firstName: '',
        lastName: '',
        email: '',
        orderNumber: '',
        description: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-300 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="flex items-center gap-3 hover:opacity-70 transition">
            <button className="flex items-center gap-2 text-gray-600 hover:text-black transition">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Back to Catalog</span>
            </button>
            <span className="hidden sm:block text-gray-300">|</span>
            <h1 className="text-xl sm:text-2xl font-serif hidden sm:block">Ciengarnia</h1>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Your Data Rights</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Under the General Data Protection Regulation (GDPR), you have specific rights regarding your personal data. This page explains those rights and provides forms to exercise them.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Response Time:</strong> We will respond to all data subject requests within 30 days of receipt.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 border-b border-gray-300 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 font-medium border-b-2 transition ${
              activeTab === 'overview'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Your Rights
          </button>
          <button
            onClick={() => setActiveTab('request')}
            className={`px-4 py-3 font-medium border-b-2 transition ${
              activeTab === 'request'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Submit Request
          </button>
        </div>

        {/* Rights Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-6">Your Eight GDPR Data Rights</h2>

              <div className="space-y-6">
                {/* Right 1: Access */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">1. Right to Access (Right to Know)</h3>
                      <p className="text-gray-700 mb-3">
                        You have the right to request a copy of the personal data we hold about you.
                      </p>
                      <div className="bg-gray-50 border-l-4 border-black p-4 text-sm">
                        <p><strong>What you'll receive:</strong> A copy of your personal data in a clear, understandable format</p>
                        <p className="mt-2"><strong>Response time:</strong> Within 30 days</p>
                        <p className="mt-2"><strong>Cost:</strong> Free</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 2: Rectification */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">2. Right to Rectification (Right to Correct)</h3>
                      <p className="text-gray-700 mb-3">
                        You have the right to request correction of inaccurate or incomplete personal data.
                      </p>
                      <div className="bg-gray-50 border-l-4 border-black p-4 text-sm">
                        <p><strong>Examples:</strong> Incorrect email address, wrong phone number, misspelled name</p>
                        <p className="mt-2"><strong>Response time:</strong> Within 30 days</p>
                        <p className="mt-2"><strong>Cost:</strong> Free</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 3: Erasure */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">3. Right to Erasure (Right to be Forgotten)</h3>
                      <p className="text-gray-700 mb-3">
                        You have the right to request deletion of your personal data in certain circumstances.
                      </p>
                      <div className="bg-gray-50 border-l-4 border-black p-4 text-sm">
                        <p><strong>We can delete your data when:</strong></p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>It is no longer necessary for our purposes</li>
                          <li>You withdraw consent (if consent was the basis)</li>
                          <li>You object and we have no overriding reason to keep it</li>
                        </ul>
                        <p className="mt-2"><strong>We may refuse if:</strong> We have a legal obligation to keep the data (e.g., tax records for 7 years)</p>
                        <p className="mt-2"><strong>Response time:</strong> Within 30 days</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 4: Restriction */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">4. Right to Restrict Processing</h3>
                      <p className="text-gray-700 mb-3">
                        You have the right to request that we limit how we use your personal data.
                      </p>
                      <div className="bg-gray-50 border-l-4 border-black p-4 text-sm">
                        <p><strong>Example use:</strong> While you dispute the accuracy of your data, you can ask us to limit processing until the dispute is resolved</p>
                        <p className="mt-2"><strong>Response time:</strong> Within 30 days</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 5: Portability */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">5. Right to Data Portability</h3>
                      <p className="text-gray-700 mb-3">
                        You have the right to receive your personal data in a structured, commonly used, machine-readable format.
                      </p>
                      <div className="bg-gray-50 border-l-4 border-black p-4 text-sm">
                        <p><strong>Format:</strong> CSV, JSON, or similar structured format</p>
                        <p className="mt-2"><strong>Use:</strong> Transfer your data to another service provider</p>
                        <p className="mt-2"><strong>Response time:</strong> Within 30 days</p>
                        <p className="mt-2"><strong>Cost:</strong> Free</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 6: Object */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">6. Right to Object</h3>
                      <p className="text-gray-700 mb-3">
                        You have the right to object to certain types of processing.
                      </p>
                      <div className="bg-gray-50 border-l-4 border-black p-4 text-sm">
                        <p><strong>You can object to:</strong></p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Processing based on legitimate interests</li>
                          <li>Direct marketing and promotional communications</li>
                          <li>Automated decision-making and profiling</li>
                        </ul>
                        <p className="mt-2"><strong>Response time:</strong> Within 30 days</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 7: Withdraw Consent */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">7. Right to Withdraw Consent</h3>
                      <p className="text-gray-700 mb-3">
                        If we process your data based on consent, you have the right to withdraw that consent at any time.
                      </p>
                      <div className="bg-gray-50 border-l-4 border-black p-4 text-sm">
                        <p><strong>Effect:</strong> Once withdrawn, we must stop that processing (though prior processing may have been lawful)</p>
                        <p className="mt-2"><strong>Easy method:</strong> Click unsubscribe on marketing emails or submit a withdrawal request</p>
                        <p className="mt-2"><strong>Cost:</strong> Free</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 8: Automated Decision-Making */}
                <div className="bg-white border border-gray-300 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">8. Rights Related to Automated Decision-Making</h3>
                      <p className="text-gray-700 mb-3">
                        You have the right not to be subject to decisions based solely on automated processing.
                      </p>
                      <div className="bg-gray-50 border-l-4 border-black p-4 text-sm">
                        <p><strong>Current status:</strong> Ciengarnia does not use automated decision-making or profiling</p>
                        <p className="mt-2">If we implement such processing in the future, you will have the right to human review and to object to the decision</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Information */}
            <section>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-blue-900 mb-3">How to Exercise Your Rights</h3>
                    <ul className="space-y-2 text-blue-900 text-sm">
                      <li><strong>Submit a Request:</strong> Use the "Submit Request" tab above or email us at contact@ciengarnia.com</li>
                      <li><strong>Identify Yourself:</strong> Provide your full name and email address associated with your account</li>
                      <li><strong>Be Specific:</strong> Clearly state which right you are exercising and what data you're referring to</li>
                      <li><strong>Verification:</strong> We may ask for additional information to verify your identity to protect your privacy</li>
                      <li><strong>Response:</strong> We will respond within 30 days of receiving your request</li>
                      <li><strong>Appeals:</strong> If you're not satisfied with our response, you can file a complaint with your national data protection authority</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Request Form Tab */}
        {activeTab === 'request' && (
          <div>
            {submitted && (
              <div className="bg-green-50 border border-green-300 rounded-lg p-6 mb-8 flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-1">Request Submitted Successfully</h3>
                  <p className="text-green-800 text-sm">
                    Thank you for submitting your data subject request. We will process it within 30 days and contact you at the email address you provided.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50 border border-gray-300 rounded-lg p-8">
              <div>
                <label className="block text-sm font-semibold mb-3">Type of Request *</label>
                <select
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                >
                  <option value="access">Right to Access (Request Copy of My Data)</option>
                  <option value="rectification">Right to Rectification (Correct Inaccurate Data)</option>
                  <option value="erasure">Right to Erasure (Delete My Data)</option>
                  <option value="restriction">Right to Restrict Processing</option>
                  <option value="portability">Right to Data Portability (Export My Data)</option>
                  <option value="object">Right to Object</option>
                  <option value="withdraw">Withdraw Consent</option>
                  <option value="other">Other Data Subject Request</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                  placeholder="your.email@example.com"
                />
                <p className="text-xs text-gray-500 mt-1">We'll use this to send you our response</p>
              </div>

              <div>
                <label htmlFor="orderNumber" className="block text-sm font-semibold mb-2">
                  Order Number (if applicable)
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  name="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                  placeholder="Optional: Your order number"
                />
                <p className="text-xs text-gray-500 mt-1">Helps us locate your data quickly</p>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-semibold mb-2">
                  Additional Details *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black resize-none"
                  placeholder="Please describe your request in detail. For example, what data would you like us to access, delete, or correct?"
                />
              </div>

              <div className="bg-white border border-gray-300 p-4 rounded-lg text-sm text-gray-700">
                <p>
                  <strong>Before submitting:</strong> By submitting this form, you confirm that you are the data subject or have authorization to submit this request on their behalf. We will verify your identity before responding.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Submit Data Subject Request
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Required fields. We will respond within 30 days of receiving your complete request.
              </p>
            </form>

            {/* Alternative Contact */}
            <div className="mt-8 bg-gray-50 border border-gray-300 rounded-lg p-8">
              <h3 className="font-bold text-lg mb-4">Alternative Contact Method</h3>
              <p className="text-gray-700 mb-4">
                You can also submit your data subject request by emailing us directly:
              </p>
              <div className="bg-white border border-gray-300 p-6 rounded-lg">
                <p className="font-semibold">Email: <strong>contact@ciengarnia.com</strong></p>
                <p className="text-sm text-gray-600 mt-3">
                  Subject: "Data Subject Request - [Type of Request]"<br />
                  Include your name, email, the type of request, and any relevant order information.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 mt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-sm text-gray-600">
                Ciengarnia is a family-run bookstore dedicated to curating
                exceptional literary works for discerning collectors and readers.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>contact@ciengarnia.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Information</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/shipping-delivery" className="hover:text-black transition">Shipping & Delivery</a></li>
                <li><a href="/returns-policy" className="hover:text-black transition">Returns Policy</a></li>
                <li><a href="/privacy-policy" className="hover:text-black transition">Privacy Policy</a></li>
                <li><a href="/cookie-policy" className="hover:text-black transition">Cookie Policy</a></li>
                <li><a href="/terms-conditions" className="hover:text-black transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8">
            <div className="text-center text-sm text-gray-600 mb-4">
              <p>© 2025 Ciengarnia. All rights reserved.</p>
            </div>
            <div className="text-center text-xs bg-green-50 border border-green-200 rounded-lg p-3 text-green-900">
              <strong>✓ GDPR Compliant</strong> - Your privacy and data protection are our priority. <a href="/privacy-policy" className="underline hover:no-underline font-semibold">View our Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
