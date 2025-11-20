'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function DataRetention() {
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
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Data Retention Policy</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            This Data Retention Policy explains how long Ciengarnia retains your personal data and the reasons for different retention periods.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Last Updated:</strong> November 2025
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">Retention Principles</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Under the General Data Protection Regulation (GDPR), Ciengarnia is committed to the Storage Limitation Principle, which states that personal data must be kept in a form which permits identification of data subjects for no longer than necessary for the purposes for which the personal data are processed.
              </p>
              <p>
                Different categories of data are retained for different periods, depending on legal requirements, business necessity, and the purposes for which the data was collected. This policy outlines our retention schedule.
              </p>
            </div>
          </section>

          {/* Retention Schedule */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-6">Retention Schedule by Data Category</h2>

            <div className="space-y-6">
              {/* Customer Account Data */}
              <div className="bg-white border border-gray-300 rounded-lg p-8">
                <div className="mb-6">
                  <h3 className="font-bold text-xl mb-2">1. Customer Account Data</h3>
                  <p className="text-sm text-gray-500 mb-4">Includes: Name, email, phone number, billing address, shipping address</p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4 py-2">
                    <p className="font-semibold text-lg">Retention Period: 2 Years</p>
                    <p className="text-gray-700 text-sm mt-2">
                      From the date of the most recent transaction or account activity
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded text-sm space-y-2">
                    <p><strong>Justification:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
                      <li>Necessary to fulfill ongoing order processing and delivery</li>
                      <li>Enables customer support for 2 years after purchase</li>
                      <li>Aligns with typical customer service needs</li>
                      <li>After 2 years, customer may re-register if they return</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded text-sm text-blue-900">
                    <p><strong>Exception:</strong> If you request deletion before 2 years, we will delete your account data immediately unless we have a legal obligation to retain it.</p>
                  </div>
                </div>
              </div>

              {/* Order and Transaction Data */}
              <div className="bg-white border border-gray-300 rounded-lg p-8">
                <div className="mb-6">
                  <h3 className="font-bold text-xl mb-2">2. Order and Transaction Data</h3>
                  <p className="text-sm text-gray-500 mb-4">Includes: Order details, items purchased, amounts paid, delivery confirmation</p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4 py-2">
                    <p className="font-semibold text-lg">Retention Period: 7 Years</p>
                    <p className="text-gray-700 text-sm mt-2">
                      From the date of the transaction
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded text-sm space-y-2">
                    <p><strong>Justification:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
                      <li>Required by tax and accounting regulations (7-year retention)</li>
                      <li>Necessary for resolving disputes or chargebacks</li>
                      <li>May be required in case of legal proceedings</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded text-sm text-blue-900">
                    <p><strong>Limitation:</strong> While order data is retained for 7 years for compliance, personal identifiers linked to orders may be deleted sooner if you request it, unless we need them for specific legal purposes.</p>
                  </div>
                </div>
              </div>

              {/* Return and Warranty Data */}
              <div className="bg-white border border-gray-300 rounded-lg p-8">
                <div className="mb-6">
                  <h3 className="font-bold text-xl mb-2">3. Return and Warranty Data</h3>
                  <p className="text-sm text-gray-500 mb-4">Includes: Return requests, inspection reports, refund records</p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4 py-2">
                    <p className="font-semibold text-lg">Retention Period: 2 Years from Return</p>
                    <p className="text-gray-700 text-sm mt-2">
                      From the date the returned item was received and inspected
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded text-sm space-y-2">
                    <p><strong>Justification:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
                      <li>Necessary to resolve disputes about return decisions</li>
                      <li>Covers potential chargebacks and refund disputes</li>
                      <li>Protects both customer and business interests</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Email Communications */}
              <div className="bg-white border border-gray-300 rounded-lg p-8">
                <div className="mb-6">
                  <h3 className="font-bold text-xl mb-2">4. Email Communications</h3>
                  <p className="text-sm text-gray-500 mb-4">Includes: Order confirmations, shipping updates, customer support emails</p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4 py-2">
                    <p className="font-semibold text-lg">Retention Period: 3 Years</p>
                    <p className="text-gray-700 text-sm mt-2">
                      From the date of the communication
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded text-sm space-y-2">
                    <p><strong>Justification:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
                      <li>Necessary to resolve customer service inquiries</li>
                      <li>Provides proof of communications if disputes arise</li>
                      <li>Supports customer support and quality improvement</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Shipping and Delivery Data */}
              <div className="bg-white border border-gray-300 rounded-lg p-8">
                <div className="mb-6">
                  <h3 className="font-bold text-xl mb-2">5. Shipping and Delivery Data</h3>
                  <p className="text-sm text-gray-500 mb-4">Includes: Shipping addresses, tracking information, carrier details</p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4 py-2">
                    <p className="font-semibold text-lg">Retention Period: 2 Years from Delivery</p>
                    <p className="text-gray-700 text-sm mt-2">
                      From the date of delivery confirmation
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded text-sm space-y-2">
                    <p><strong>Justification:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
                      <li>Necessary to handle delivery disputes and claims</li>
                      <li>Protects against false non-delivery claims</li>
                      <li>Supports carrier liability claims if items are damaged</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Local Storage Data */}
              <div className="bg-white border border-gray-300 rounded-lg p-8">
                <div className="mb-6">
                  <h3 className="font-bold text-xl mb-2">6. Browser Local Storage</h3>
                  <p className="text-sm text-gray-500 mb-4">Includes: Shopping cart, wishlist, privacy notice dismissal</p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4 py-2">
                    <p className="font-semibold text-lg">Retention Period: Session or Until Cleared</p>
                    <p className="text-gray-700 text-sm mt-2">
                      Data is stored only on your device, not on our servers
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded text-sm space-y-2">
                    <p><strong>Justification:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
                      <li>Only stored on your device for browsing convenience</li>
                      <li>Not transmitted to or stored on Ciengarnia servers</li>
                      <li>You have complete control and can delete anytime</li>
                      <li>Not personal information unless linked to an order</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Website Server Logs */}
              <div className="bg-white border border-gray-300 rounded-lg p-8">
                <div className="mb-6">
                  <h3 className="font-bold text-xl mb-2">7. Website Server Logs</h3>
                  <p className="text-sm text-gray-500 mb-4">Includes: IP addresses, access times, page requests, error reports</p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-black pl-4 py-2">
                    <p className="font-semibold text-lg">Retention Period: 90 Days</p>
                    <p className="text-gray-700 text-sm mt-2">
                      From the date of the log entry
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded text-sm space-y-2">
                    <p><strong>Justification:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
                      <li>Necessary for website security and troubleshooting</li>
                      <li>Helps identify and prevent suspicious activity</li>
                      <li>Supports technical support and performance monitoring</li>
                      <li>90 days is standard for web server maintenance</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded text-sm text-blue-900">
                    <p><strong>Note:</strong> IP addresses in server logs are not typically linked to personal data unless you've placed an order during that time period.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deletion Procedures */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">Automated Deletion Procedures</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ciengarnia has implemented automated processes to ensure data is deleted in accordance with this retention schedule:
              </p>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-black flex-shrink-0">1.</span>
                  <span><strong>Monthly Automated Deletion:</strong> System reviews all records and deletes data that has exceeded its retention period</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-black flex-shrink-0">2.</span>
                  <span><strong>Server Log Rotation:</strong> Web server logs are automatically rotated and deleted after 90 days</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-black flex-shrink-0">3.</span>
                  <span><strong>Backup Handling:</strong> When data is deleted from the primary system, it is also removed from backup systems during the next backup cycle</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-black flex-shrink-0">4.</span>
                  <span><strong>Audit Trail:</strong> All deletions are logged and can be reviewed if necessary</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Exceptions */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">Exceptions to Retention Schedule</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In certain circumstances, we may retain data longer than the periods outlined above:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-black pl-6 py-4">
                  <h3 className="font-bold mb-2">Legal Hold</h3>
                  <p>If a customer is involved in a dispute, legal claim, or regulatory investigation, relevant data may be retained until the matter is resolved.</p>
                </div>

                <div className="border-l-4 border-black pl-6 py-4">
                  <h3 className="font-bold mb-2">Active Litigation</h3>
                  <p>Data related to ongoing or threatened litigation will be retained until the legal proceedings are concluded.</p>
                </div>

                <div className="border-l-4 border-black pl-6 py-4">
                  <h3 className="font-bold mb-2">Regulatory Investigation</h3>
                  <p>If we receive an investigation request from a regulatory authority, relevant data will be retained as requested.</p>
                </div>

                <div className="border-l-4 border-black pl-6 py-4">
                  <h3 className="font-bold mb-2">Chargeback or Refund Dispute</h3>
                  <p>If a customer disputes a charge or refund, relevant data will be retained until the dispute is resolved.</p>
                </div>

                <div className="border-l-4 border-black pl-6 py-4">
                  <h3 className="font-bold mb-2">Security or Fraud Investigation</h3>
                  <p>If we suspect fraud or security issues, relevant data may be retained longer to investigate and prevent future incidents.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Review and Updates */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">Policy Review and Updates</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This Data Retention Policy is reviewed annually to ensure it continues to meet legal requirements and business needs. We may update retention periods if:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Legal or regulatory requirements change</li>
                <li>Our business practices evolve</li>
                <li>We identify new risks or requirements</li>
                <li>GDPR guidance or enforcement changes</li>
              </ul>

              <p className="mt-4">
                If we make material changes to this policy, we will update the "Last Updated" date and notify customers via email if necessary.
              </p>
            </div>
          </section>

          {/* Right to Request Deletion */}
          <section>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h2 className="text-2xl font-serif font-bold mb-4 text-blue-900">Your Right to Request Early Deletion</h2>
              <div className="space-y-4 text-blue-900 leading-relaxed">
                <p>
                  You have the right to request deletion of your personal data before the retention period expires, subject to legal exceptions. This is your "Right to Erasure" under the GDPR.
                </p>
                <p>
                  To request deletion of your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Visit our <a href="/data-rights" className="underline hover:no-underline">Data Rights page</a></li>
                  <li>Email us at contact@ciengarnia.com with "Data Deletion Request" in the subject line</li>
                  <li>Include your full name, email, and any relevant order numbers</li>
                </ul>
                <p>
                  We will respond within 30 days. Note that we may refuse deletion if we have a legal obligation to retain the data (such as tax records for 7 years), but we will explain the reasons for any refusal.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">Questions About Data Retention?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you have questions about how long we retain your data or would like to request deletion, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg">
                <p className="font-semibold mb-2">Ciengarnia</p>
                <p>Email: <strong>contact@ciengarnia.com</strong></p>
                <p>Phone: <strong>+1 (555) 123-4567</strong></p>
              </div>
            </div>
          </section>
        </div>
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
                <li><a href="/data-retention" className="hover:text-black transition">Data Retention</a></li>
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
