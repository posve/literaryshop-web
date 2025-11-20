'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function TermsConditions() {
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
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            These Terms & Conditions govern your use of the Ciengarnia website and your purchase of books and related products.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Last Updated:</strong> November 2025
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-12">
          {/* 1. Agreement to Terms */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">1. Agreement to Terms</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                Ciengarnia reserves the right to modify these Terms & Conditions at any time. Your continued use of the website following the posting of revised Terms & Conditions means that you accept and agree to the changes. It is your responsibility to check the Terms & Conditions periodically for changes.
              </p>
            </div>
          </section>

          {/* 2. Use License */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">2. Use License</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on the Ciengarnia website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                <li>Harvesting or scraping content for automated purposes</li>
              </ul>
            </div>
          </section>

          {/* 3. Disclaimer */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">3. Disclaimer</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The materials on the Ciengarnia website are provided on an "as is" basis. Ciengarnia makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, Ciengarnia does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or relating to such materials or on any sites linked to this site.
              </p>
            </div>
          </section>

          {/* 4. Limitations */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">4. Limitations</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In no event shall Ciengarnia or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Ciengarnia website, even if Ciengarnia or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>
          </section>

          {/* 5. Accuracy of Materials */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">5. Accuracy of Materials</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The materials appearing on the Ciengarnia website could include technical, typographical, or photographic errors. Ciengarnia does not warrant that any of the materials on the website are accurate, complete, or current. Ciengarnia may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>
          </section>

          {/* 6. Product Descriptions and Pricing */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">6. Product Descriptions and Pricing</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We strive to provide accurate descriptions and pricing for all books in our catalog. However, we do not warrant that product descriptions, pricing, or other content on the website are accurate, complete, reliable, current, or error-free. If a product offered by Ciengarnia is not as described, your sole remedy is return of the item in accordance with our Returns Policy.
              </p>
              <p>
                <strong>Pricing:</strong> All prices are subject to change without notice. Ciengarnia reserves the right to limit the order quantity of any product. Prices are in EUR unless otherwise stated.
              </p>
              <p>
                <strong>Availability:</strong> Products are offered on a first-come, first-served basis. Availability is not guaranteed and may change at any time. Ciengarnia reserves the right to discontinue any product or service without notice.
              </p>
            </div>
          </section>

          {/* 7. Order Acceptance and Cancellation */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">7. Order Acceptance and Cancellation</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Your submission of an order constitutes an offer to purchase. We will send you a confirmation email acknowledging receipt of your order. This acknowledgment does not constitute acceptance of your order. We reserve the right to refuse or cancel any order.
              </p>
              <p>
                <strong>Order Cancellation:</strong> You may cancel your order within 24 hours of placing it. To cancel, contact us at <strong>contact@ciengarnia.com</strong> with your order number. After 24 hours, your order may have been shipped and cannot be cancelled through this method; please refer to our Shipping & Delivery policy for options.
              </p>
            </div>
          </section>

          {/* 8. Payment Terms */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">8. Payment Terms</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Payment for orders must be received before shipment. We accept bank transfers and other payment methods as displayed at checkout. Payment must be in EUR.
              </p>
              <p>
                <strong>Authorization:</strong> By submitting your order, you authorize Ciengarnia to charge your designated payment method for the items ordered plus shipping and applicable taxes.
              </p>
              <p>
                <strong>Failed Payments:</strong> If payment fails, your order will not be processed and you will be notified by email. You may resubmit payment to complete your order.
              </p>
            </div>
          </section>

          {/* 9. Shipping and Delivery */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">9. Shipping and Delivery</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Please refer to our Shipping & Delivery policy for detailed information about shipping methods, delivery times, and international shipping. Shipping times are estimates and are not guaranteed. Ciengarnia is not responsible for delays caused by carriers or customs authorities.
              </p>
              <p>
                <strong>Risk of Loss:</strong> Once an order is shipped and you receive tracking information, risk of loss and liability passes to the shipping carrier and then to you upon delivery.
              </p>
            </div>
          </section>

          {/* 10. Returns and Refunds */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">10. Returns and Refunds</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Please refer to our Returns Policy for detailed information about our 30-day return window, condition requirements, and refund procedures. Refunds are processed after our team inspects the returned book and confirms it meets our condition standards.
              </p>
            </div>
          </section>

          {/* 11. Intellectual Property Rights */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">11. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                All materials on the Ciengarnia website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, are the property of Ciengarnia or its content suppliers and are protected by international copyright laws.
              </p>
              <p>
                <strong>Book Content:</strong> While we sell books and literary works, the intellectual property rights to those works belong to their respective authors and publishers. Your purchase of a book grants you the right to read and use it personally but does not grant any rights to reproduce, distribute, or publicly display the content.
              </p>
            </div>
          </section>

          {/* 12. User-Generated Content */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">12. User-Generated Content</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you submit any content to Ciengarnia (such as product reviews, comments, or feedback), you grant Ciengarnia a non-exclusive, royalty-free, perpetual license to use, reproduce, modify, and display such content in any manner and in any medium, without compensation to you.
              </p>
              <p>
                You warrant that you own or have the right to use any content you submit and that such content does not violate third-party rights or these Terms & Conditions.
              </p>
            </div>
          </section>

          {/* 13. Privacy and Data Protection */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">13. Privacy and Data Protection</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Your use of the website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information, including information about your rights under the General Data Protection Regulation (GDPR).
              </p>
              <p>
                By using this website and placing orders, you consent to the processing of your personal information in accordance with our Privacy Policy.
              </p>
            </div>
          </section>

          {/* 14. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">14. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Maximum Liability:</strong> In no circumstances shall Ciengarnia, its directors, officers, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or use, even if Ciengarnia has been advised of the possibility of such damages.
              </p>
              <p>
                <strong>Direct Damages Cap:</strong> Our total liability for any claim arising from these Terms & Conditions or your use of the website shall not exceed the amount paid by you in the transaction that gave rise to the claim.
              </p>
            </div>
          </section>

          {/* 15. Indemnification */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">15. Indemnification</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                You agree to indemnify, defend, and hold harmless Ciengarnia and its officers, directors, employees, and agents from and against any and all claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from your violation of these Terms & Conditions, your misuse of the website, or your violation of any law or third-party right.
              </p>
            </div>
          </section>

          {/* 16. Governing Law */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">16. Governing Law</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                These Terms & Conditions are governed by and construed in accordance with the laws of the jurisdiction in which Ciengarnia operates, without regard to its conflict of law principles.
              </p>
            </div>
          </section>

          {/* 17. Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">17. Dispute Resolution</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Informal Resolution:</strong> Before initiating any formal proceedings, you agree to contact Ciengarnia at <strong>contact@ciengarnia.com</strong> to attempt to resolve any dispute informally.
              </p>
              <p>
                <strong>Jurisdiction and Venue:</strong> Both you and Ciengarnia agree to submit to the exclusive jurisdiction of the courts appropriate to the location of Ciengarnia's operations for any legal action or proceeding arising from these Terms & Conditions.
              </p>
            </div>
          </section>

          {/* 18. Severability */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">18. Severability</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If any provision of these Terms & Conditions is found to be invalid or unenforceable, that provision shall be struck and the remaining provisions shall be enforced.
              </p>
            </div>
          </section>

          {/* 19. Entire Agreement */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">19. Entire Agreement</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                These Terms & Conditions, along with our Privacy Policy, Shipping & Delivery Policy, Returns Policy, and Cookie Policy, constitute the entire agreement between you and Ciengarnia regarding your use of the website and purchase of products, and supersedes all prior agreements and understandings.
              </p>
            </div>
          </section>

          {/* 20. Contact Information */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">20. Contact Information</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you have any questions about these Terms & Conditions, please contact us:
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
