'use client';

import React from 'react';
import { ArrowLeft, Truck, Shield, Clock } from 'lucide-react';

export default function ShippingDelivery() {
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
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Shipping & Delivery</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Ciengarnia, we understand that rare and fine books require special care. Our shipping practices reflect our commitment to preservation and excellence.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-8 sm:p-12 mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">Our Shipping Philosophy</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Every book in our collection is a treasure worthy of thoughtful, careful handling. Rather than applying a one-size-fits-all approach to shipping, we believe in consulting directly with each customer to determine the optimal delivery method for their specific order.
            </p>

            <p>
              Our team considers several factors when recommending a shipping solution:
            </p>

            {/* Key Considerations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
              <div className="bg-white p-6 border border-gray-200 rounded">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-black" />
                  <h3 className="font-bold text-lg">Protection & Safety</h3>
                </div>
                <p className="text-sm text-gray-600">
                  The binding, condition, and rarity of each volume. Rare first editions require enhanced protective packaging and insurance coverage.
                </p>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-black" />
                  <h3 className="font-bold text-lg">Timeline</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Your preferred delivery date and whether expedited shipping is necessary. We balance speed with the safety requirements of your purchase.
                </p>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-black" />
                  <h3 className="font-bold text-lg">Geographic Location</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Destination and local conditions. We select carriers and routes known for their reliability in your region.
                </p>
              </div>
            </div>

            <p>
              <strong>Our Consultation Process:</strong> After you place an order, we will contact you directly to discuss the best shipping options. This personalized approach ensures that your books arrive in pristine condition, on your preferred timeline, and with all the protection they deserve.
            </p>

            <p>
              We work with trusted carriers who understand the value and fragility of literary works. Each package is carefully prepared with archival-quality materials designed to protect bindings, pages, and dust jackets from damage during transit.
            </p>
          </div>
        </div>

        {/* Shipping Standards Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">Our Shipping Standards</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Professional Packaging</h3>
              <p className="text-gray-700">
                All books are wrapped individually in acid-free tissue paper and secured with padding. Boxes are lined with protective materials to prevent shifting during transit.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Insurance Coverage</h3>
              <p className="text-gray-700">
                All shipments include insurance provided by our shipping partners. For high-value items, we recommend enhanced coverage options through the carrier to fully protect your investment.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Tracking & Updates</h3>
              <p className="text-gray-700">
                You'll receive a tracking number for every shipment. We monitor packages throughout transit and will notify you immediately of any issues.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="font-bold text-lg mb-2">Environmental Consideration</h3>
              <p className="text-gray-700">
                We use eco-friendly packing materials whenever possible and consolidate shipments to minimize our environmental impact while maintaining the highest protection standards.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">Questions About Shipping?</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            If you have specific questions about shipping options, rates, or timelines for your order, we encourage you to contact us directly. Our team is ready to discuss the best solution for your collection.
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
                <li>Returns Policy</li>
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
