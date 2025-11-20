'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function CookiePolicy() {
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
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            This Cookie Policy explains what cookies are, why we use them, and your rights regarding their use on the Ciengarnia website.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Last Updated:</strong> November 2025
          </p>
        </div>

        {/* Cookie Policy Content */}
        <div className="space-y-12">
          {/* What are Cookies */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">What are Cookies?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.
              </p>
              <p>
                <strong>How Cookies Work:</strong> When you visit Ciengarnia, your browser sends a request to our server. Our server may send back a cookie, which your browser stores. On your next visit, your browser sends that cookie back to our server, allowing us to recognize you.
              </p>
            </div>
          </section>

          {/* Current Cookie Usage */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">Our Current Cookie Usage</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>As of November 2025, Ciengarnia does not currently use cookies.</strong>
              </p>
              <p>
                We have designed our website to function without cookies. Your shopping cart and wishlist are stored in your browser's local storage, not in cookies. This approach respects user privacy while maintaining full functionality.
              </p>
              <p>
                <strong>Future Changes:</strong> If we implement new features that require cookies (such as user account functionality), we will:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Update this policy in advance</li>
                <li>Implement a cookie consent banner before any non-essential cookies are deployed</li>
                <li>Provide users with granular control over cookie categories</li>
                <li>Only set cookies after explicit user consent</li>
              </ul>
            </div>
          </section>

          {/* Local Storage */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">Local Storage (Not Cookies)</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ciengarnia uses browser local storage to store information on your device. This is different from cookies and serves the following purposes:
              </p>
              <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Shopping Cart (bookstore_cart)</h3>
                  <p className="text-sm">
                    Stores the items you add to your shopping cart. This data is stored only on your device and is not sent to our servers unless you place an order.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Cleared when: You manually clear it or complete an order</p>
                </div>
              </div>

              <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Wishlist (bookstore_wishlist)</h3>
                  <p className="text-sm">
                    Stores the books you add to your wishlist for easy access. This data is stored only on your device and is not sent to our servers.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Cleared when: You manually clear it or your browser storage is cleared</p>
                </div>
              </div>

              <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Privacy Notice Dismissal (privacy_notice_dismissed)</h3>
                  <p className="text-sm">
                    Remembers that you have dismissed the privacy notice banner so it doesn't appear on every visit.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Cleared when: You clear your browser storage</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-blue-900 bg-blue-50 border border-blue-200 p-4 rounded">
                <strong>Important:</strong> Local storage data is NOT transmitted to Ciengarnia servers and is NOT personal information unless linked to an order. You can clear local storage at any time through your browser settings.
              </p>
            </div>
          </section>

          {/* How to Manage Local Storage */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">How to Manage Local Storage</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                You can delete local storage data at any time. The method depends on your browser:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Google Chrome & Edge</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm ml-2">
                    <li>Open DevTools (F12)</li>
                    <li>Go to Application tab</li>
                    <li>Select Local Storage</li>
                    <li>Right-click and Delete</li>
                  </ol>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Firefox</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm ml-2">
                    <li>Open DevTools (F12)</li>
                    <li>Go to Storage tab</li>
                    <li>Select Local Storage</li>
                    <li>Right-click and Delete All</li>
                  </ol>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Safari</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm ml-2">
                    <li>Enable Developer Tools (Preferences > Advanced)</li>
                    <li>Right-click > Inspect Element</li>
                    <li>Go to Storage tab</li>
                    <li>Select Local Storage and delete</li>
                  </ol>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Clear All Browser Data</h3>
                  <p className="text-sm mb-2">You can also clear all local storage by clearing your browser cache:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Most browsers: Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)</li>
                    <li>Select "Cached images and files" or "Local storage"</li>
                    <li>Choose time range and delete</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Content */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">Third-Party Content</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ciengarnia does not embed third-party content (such as social media widgets, analytics scripts, or advertising pixels) that would set cookies without your consent. All images are served from Scaleway S3, which does not set tracking cookies.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">Your Rights and Choices</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Browser Controls:</strong> Most web browsers allow you to control cookies through browser settings. You can typically:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View all cookies stored on your device</li>
                <li>Delete cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Disable cookies entirely (though this may affect website functionality)</li>
              </ul>

              <p className="mt-4">
                <strong>Do Not Track (DNT):</strong> Ciengarnia respects Do Not Track browser signals. If you have enabled DNT in your browser, we will not attempt to set any tracking mechanisms.
              </p>
            </div>
          </section>

          {/* GDPR Compliance */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">GDPR Compliance</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Since Ciengarnia does not currently use cookies, our website is compliant with the GDPR requirement that cookies can only be set with prior explicit consent. If we implement cookies in the future, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Obtain explicit consent before setting any non-essential cookies</li>
                <li>Provide a cookie consent banner with clear options to accept or reject</li>
                <li>Allow users to withdraw consent at any time</li>
                <li>Ensure "Reject All" and "Accept All" buttons are equally prominent</li>
                <li>Provide granular control over cookie categories</li>
                <li>Not block website access for refusing non-essential cookies</li>
              </ul>
            </div>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">Changes to This Policy</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We may update this Cookie Policy to reflect changes in our practices or technology. If we make material changes, we will update the "Last Updated" date and, if necessary, notify you by email or prominent notice on the website.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4">Questions About This Policy?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you have any questions about our Cookie Policy or how we handle local storage, please contact us:
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
