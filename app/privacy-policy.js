'use client';

import React from 'react';
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Ciengarnia, we are committed to protecting your privacy and being transparent about how we handle your personal information. This Privacy Policy explains our data practices.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Last Updated:</strong> November 2025
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-green-50 border border-green-300 rounded-lg p-8 sm:p-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-green-900">✓ GDPR Compliant</h2>
          <p className="text-green-900 leading-relaxed mb-4">
            Ciengarnia is a small, family-run bookstore fully committed to protecting your privacy in accordance with the General Data Protection Regulation (GDPR). We do not engage in complex data harvesting or tracking practices. We collect only the information necessary to provide our services, and we handle it with transparency and care.
          </p>
          <p className="text-green-900 leading-relaxed font-semibold">
            This website is fully GDPR compliant. We welcome customers from all regions, including the European Union, with complete confidence in our data protection practices.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8">Information We Collect</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <Eye className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-3">Information You Provide Directly</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you place an order, we collect the following personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                    <li><strong>Name</strong> - For order fulfillment and contact purposes</li>
                    <li><strong>Email Address</strong> - For order confirmation and delivery updates</li>
                    <li><strong>Postal Address</strong> - For shipping your books and returns</li>
                    <li><strong>City, Postal Code, Country</strong> - For delivery route optimization and compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <Lock className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-3">Local Storage Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your browser's local storage stores information on your device. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                    <li><strong>Shopping Cart</strong> - Books you've added to your cart are stored locally on your device</li>
                    <li><strong>Wishlist</strong> - Books you've added to your wishlist are stored locally on your device</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4 pt-4 border-t border-gray-200">
                    <strong>Important:</strong> This information is stored only on your device and is not transmitted to our servers. It is not personal information and cannot be linked to you unless you place an order.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-3">Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ciengarnia does <strong>not use cookies</strong> to track your behavior or collect personal information. Our website functions without cookie-based tracking systems.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We may use session cookies in the future if we implement authentication features for customer accounts. If we do, we will update this policy and provide clear notice.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <Eye className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-3">Server Logs and Analytics</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our web server may collect standard HTTP information (IP address, browser type, pages accessed, timestamps). This information is used only for server maintenance and security purposes. We do <strong>not use third-party analytics services</strong> like Google Analytics that track user behavior across websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-8 sm:p-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8">How We Use Your Information</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Order Processing</h3>
              <p className="text-gray-700">
                Your name, email, and address are used to process your order, arrange shipping, and send order confirmations and updates. This is essential to fulfill your purchase.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Communication</h3>
              <p className="text-gray-700">
                We may contact you via email to discuss shipping options (as outlined in our Shipping & Delivery policy), confirm receipt of returns, or communicate about your order status.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Service Improvement</h3>
              <p className="text-gray-700">
                We use non-personal server logs to understand how our website functions and to identify and fix technical issues.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">What We Don't Do</h3>
              <p className="text-gray-700">
                We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes. We do not use your data to build marketing profiles or target you with advertisements.
              </p>
            </div>
          </div>
        </div>

        {/* Data Storage and Security */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8">Data Storage and Security</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <h3 className="font-bold text-xl mb-4">Where We Store Your Data</h3>
              <p className="text-gray-700 leading-relaxed">
                Your order information is stored on our backend server (hosted by Neon, a PostgreSQL database provider). This includes your name, email, address, and order details. This information is retained as long as necessary to fulfill your order, process returns, and maintain business records.
              </p>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <h3 className="font-bold text-xl mb-4">Security Measures</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take reasonable steps to protect your information from unauthorized access. However, as a small business, we acknowledge that no online system is 100% secure. We do not encrypt payment information (payments are processed through our checkout system, and we recommend caution with sensitive payment details).
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Note:</strong> We strongly recommend reviewing the security practices of your payment provider and the hosting service before providing financial information.
              </p>
            </div>
          </div>
        </div>

        {/* GDPR and Compliance */}
        <div className="bg-green-50 border border-green-300 rounded-lg p-8 sm:p-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-green-900">✓ Full GDPR Compliance</h2>

          <div className="space-y-4 text-green-900">
            <p className="leading-relaxed">
              <strong>Ciengarnia is fully compliant with the General Data Protection Regulation (GDPR).</strong> We have implemented comprehensive privacy protections and transparent data handling practices that exceed minimum requirements.
            </p>

            <p className="leading-relaxed">
              <strong>For all customers, including those in the European Union:</strong> You can confidently provide your personal information on this website knowing it is protected under GDPR principles. We respect all of your data subject rights, including the right to access, deletion, portability, and rectification.
            </p>

            <p className="leading-relaxed">
              <strong>Our GDPR Compliance includes:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Explicit consent mechanisms at checkout</li>
              <li>Clear and transparent Privacy Policy</li>
              <li>Specific data retention periods (documented in our <a href="/data-retention" className="underline hover:no-underline">Data Retention Policy</a>)</li>
              <li>Easy-to-use data subject request procedures (available on our <a href="/data-rights" className="underline hover:no-underline">Your Data Rights</a> page)</li>
              <li>Standard Contractual Clauses with all data processors</li>
              <li>Automated data deletion schedules</li>
              <li>Professional Records of Processing Activities</li>
            </ul>

            <p className="leading-relaxed mt-4">
              If you have any questions about our GDPR compliance or your data rights, please don't hesitate to contact us at <strong>contact@ciengarnia.com</strong>.
            </p>
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8">Your Rights and Choices</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Access Your Information</h3>
              <p className="text-gray-700">
                You can contact us to request a summary of the personal information we have stored about you.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Update Your Information</h3>
              <p className="text-gray-700">
                If your address, email, or other information changes, please contact us to update your records.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Delete Your Information</h3>
              <p className="text-gray-700">
                You can request deletion of your personal information, although we may need to retain some data for legal or business purposes (such as order records and returns).
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Opt-Out of Communications</h3>
              <p className="text-gray-700">
                You can request to be removed from our mailing list. However, we will continue to contact you regarding your existing orders and returns as necessary.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Local Storage Management</h3>
              <p className="text-gray-700">
                You can clear your browser's local storage at any time to remove your cart and wishlist information from your device.
              </p>
            </div>
          </div>
        </div>

        {/* Third-Party Services */}
        <div className="bg-white border border-gray-300 rounded-lg p-8 sm:p-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">Third-Party Services</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our website uses the following third-party services:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Neon (Database Hosting)</h3>
              <p className="text-gray-700 text-sm">
                Neon hosts our PostgreSQL database where we store order information. Please review Neon's privacy policy for more information about their data handling practices.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">Scaleway (Image Storage)</h3>
              <p className="text-gray-700 text-sm">
                Scaleway provides cloud storage for book images. This information is not linked to your personal data unless you view a book on our website (which does not create a personal record).
              </p>
            </div>
          </div>
        </div>

        {/* Changes to Privacy Policy */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">Changes to This Privacy Policy</h2>

          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will update the "Last Updated" date at the top of this policy. Continued use of the website after updates constitute your acceptance of the updated policy.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">Questions About Our Privacy Policy?</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            If you have any questions about our privacy practices, concerns about how we handle your information, or if you are from the EU and need to discuss GDPR-compliant alternatives, please contact us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact@ciengarnia.com"
              className="px-6 py-3 border border-black hover:bg-black hover:text-white transition text-center font-semibold"
            >
              Email Us
            </a>
            <a
              href="/"
              className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition text-center font-semibold"
            >
              Return to Catalog
            </a>
          </div>
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
                <li>Terms & Conditions</li>
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
