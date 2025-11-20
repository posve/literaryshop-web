'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the notice
    const noticedismissed = localStorage.getItem('privacy_notice_dismissed');
    if (!noticedismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('privacy_notice_dismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 sm:p-6 z-40 border-t-2 border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm leading-relaxed">
            <strong>✓ GDPR Compliant:</strong> We collect personal information (name, email, address) for orders and use browser local storage for your cart and wishlist.
            <strong> We do not use cookies for tracking.</strong> Your data is protected under GDPR.
            {' '}<a href="/privacy-policy" className="underline hover:no-underline">Learn more</a>
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-gray-400 hover:text-white transition"
          aria-label="Dismiss privacy notice"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
