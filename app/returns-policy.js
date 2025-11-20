'use client';

import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Package } from 'lucide-react';

export default function ReturnsPolicy() {
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
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Returns Policy</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Ciengarnia, we stand behind the quality of our books and want you to be completely satisfied with your purchase. We offer a straightforward returns policy designed with both collector and reader in mind.
          </p>
        </div>

        {/* 30-Day Return Window */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-8 sm:p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Clock className="w-8 h-8 text-black flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">30-Day Return Window</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have <strong>30 days from the date of delivery</strong> to initiate a return. This generous timeframe allows you to inspect the book thoroughly and ensure it meets your expectations for condition, binding quality, and content.
              </p>
            </div>
          </div>
        </div>

        {/* Return Conditions */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8">Return Conditions</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-3">Original Condition Required</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The book must be in the same condition as it was shipped to you. This means:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 ml-2">
                    <li>Dust jacket intact and undamaged (if originally included)</li>
                    <li>Binding secure and unworn</li>
                    <li>Pages clean and unmarked</li>
                    <li>No creases, tears, or stains on the cover or pages</li>
                    <li>No writing, highlighting, or annotations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <Package className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-3">Proper Care & Handling</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The book must have been properly cared for during its time with you. We understand that wear and tear may occur with normal reading, but the book should not show signs of:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 ml-2">
                    <li>Water damage or liquid exposure</li>
                    <li>Exposure to moisture, mold, or mildew</li>
                    <li>Excessive bending or spine damage</li>
                    <li>Pet damage or contamination</li>
                    <li>Environmental neglect or mishandling</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-3">Original Packaging</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The book should be returned in its original protective packaging or equivalent. This ensures the book remains protected during the return shipping process and arrives at our facility in the condition you received it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Return Process */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-8 sm:p-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8">The Return Process</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Step 1: Contact Us</h3>
              <p className="text-gray-700">
                Email us at <strong>contact@ciengarnia.com</strong> within 30 days of delivery. Include your order number, the book title, and a brief explanation of why you wish to return the item.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Step 2: Inspection Approval</h3>
              <p className="text-gray-700">
                Our team will review your request and provide you with return shipping instructions. If we have any questions about the condition of the book, we will contact you for clarification or photographs.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Step 3: Ship the Book</h3>
              <p className="text-gray-700">
                Ship the book back to us using the address and method we provide. We recommend using tracked shipping with insurance to protect the book during its return journey.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Step 4: Our Team Inspection</h3>
              <p className="text-gray-700">
                Upon receiving your return, our team will carefully inspect the book to verify it meets the condition requirements outlined in this policy. This inspection ensures that we maintain our standards for all our books and customers.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Step 5: Refund Processing</h3>
              <p className="text-gray-700">
                Once our team confirms the book is in good condition, we will process your refund. The refund will be issued to your original payment method within 5-7 business days.
              </p>
            </div>
          </div>
        </div>

        {/* What We Look For */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">What Our Team Inspects</h2>

          <div className="bg-white border border-gray-300 rounded-lg p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              During our inspection, our experienced team carefully evaluates:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Binding & Structure</h4>
                <p className="text-sm text-gray-600">
                  Spine integrity, page attachment, and overall structural soundness
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Cover Condition</h4>
                <p className="text-sm text-gray-600">
                  Dust jacket presence and condition, cover material integrity
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Page Quality</h4>
                <p className="text-sm text-gray-600">
                  Cleanliness, absence of marks, creases, or damage
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Environmental Factors</h4>
                <p className="text-sm text-gray-600">
                  Signs of water damage, mold, mildew, or pest damage
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 sm:p-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-blue-900">Important Notes</h2>

          <ul className="space-y-4 text-blue-900">
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">•</span>
              <span><strong>Return Shipping:</strong> You are responsible for return shipping costs. We recommend insuring the return package.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">•</span>
              <span><strong>Refund Amount:</strong> If approved, refunds cover the book price. Original shipping charges are non-refundable.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">•</span>
              <span><strong>Condition Assessment:</strong> Our team's assessment of book condition is final. We apply professional standards consistent with the antiquarian book trade.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold flex-shrink-0">•</span>
              <span><strong>Defects:</strong> If a book arrives with manufacturing defects or damage caused during our shipping, please contact us immediately. These are handled separately from this returns policy.</span>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">Questions About Our Returns Policy?</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            If you have any questions about our returns policy or need clarification on whether a book qualifies for return, please don't hesitate to contact us. Our team is here to help.
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
                <li>Privacy Policy</li>
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
