'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import PrivacyNotice from './components/PrivacyNotice';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export default function ProductDetail() {
  const params = useParams();
  const isbn = params.isbn;

  // Debug logging
  useEffect(() => {
    console.log('ProductDetail mounted. ISBN from useParams:', isbn);
  }, [isbn]);

  const [book, setBook] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('product');
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('bookstore_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to load cart');
      }
    }
  }, []);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('bookstore_wishlist');
    if (savedWishlist) {
      try {
        const wishlist = JSON.parse(savedWishlist);
        setIsInWishlist(wishlist.includes(isbn));
      } catch (e) {
        console.error('Failed to load wishlist');
      }
    }
  }, [isbn]);

  // Listen for cart changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const savedCart = localStorage.getItem('bookstore_cart');
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (e) {
          console.error('Failed to load cart');
        }
      } else {
        setCartItems([]);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    if (isbn) {
      loadProductDetails();
    }
  }, [isbn]);

  const loadProductDetails = async () => {
    if (!isbn) return;
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/books/${isbn}`);
      if (!response.ok) throw new Error('Book not found');
      const data = await response.json();
      setBook(data);

      // Fetch images from Scaleway via the API
      try {
        const imagesResponse = await fetch(`${API_URL}/books/${isbn}/images`);
        if (imagesResponse.ok) {
          const imagesData = await imagesResponse.json();
          // Sort images by sort_order and map them properly
          const sortedImages = imagesData
            .sort((a, b) => a.sort_order - b.sort_order)
            .map(img => ({
              id: img.id,
              url: img.scaleway_url,
              alt: img.alt_text || `${data.title} image`,
              sort_order: img.sort_order,
              is_primary: img.is_primary
            }));

          if (sortedImages.length > 0) {
            setImages(sortedImages);
          } else {
            // Fallback to main image_url if no Scaleway images
            if (data.image_url) {
              setImages([
                {
                  id: 1,
                  url: data.image_url,
                  alt: `${data.title} cover`,
                  sort_order: 0,
                  is_primary: true
                }
              ]);
            }
          }
        } else {
          // If API call fails, fall back to main image_url
          if (data.image_url) {
            setImages([
              {
                id: 1,
                url: data.image_url,
                alt: `${data.title} cover`,
                sort_order: 0,
                is_primary: true
              }
            ]);
          }
        }
      } catch (imgErr) {
        console.error('Error loading images:', imgErr);
        // Fall back to main image_url if fetch fails
        if (data.image_url) {
          setImages([
            {
              id: 1,
              url: data.image_url,
              alt: `${data.title} cover`,
              sort_order: 0,
              is_primary: true
            }
          ]);
        }
      }

      setError(null);
    } catch (err) {
      console.error('Error loading product:', err);
      setError('Failed to load product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!book || book.stock === 0) {
      alert('This book is out of stock');
      return;
    }

    try {
      const savedCart = localStorage.getItem('bookstore_cart');
      let cart = [];

      if (savedCart) {
        cart = JSON.parse(savedCart);
      }

      const existingItem = cart.find(item => item.isbn === book.isbn);
      if (existingItem) {
        // Update quantity if item already in cart
        if (existingItem.quantity + quantity > book.stock) {
          alert('Cannot add more items than available in stock');
          return;
        }
        existingItem.quantity += quantity;
      } else {
        // Add new item to cart
        cart.push({
          isbn: book.isbn,
          title: book.title,
          author: book.author,
          price: book.price,
          stock: book.stock,
          image_url: book.image_url,
          quantity: quantity,
          category: book.category,
          description: book.description
        });
      }

      localStorage.setItem('bookstore_cart', JSON.stringify(cart));
      // Update the cart state immediately so the cart preview updates
      setCartItems(cart);
      setSuccessMessage('Added to cart');
      setQuantity(1); // Reset quantity after adding
      // Clear the success message after 2 seconds
      setTimeout(() => setSuccessMessage(''), 2000);
    } catch (e) {
      console.error('Failed to add to cart:', e);
      setSuccessMessage('Error adding to cart');
      setTimeout(() => setSuccessMessage(''), 2000);
    }
  };

  const handleToggleWishlist = () => {
    try {
      const savedWishlist = localStorage.getItem('bookstore_wishlist');
      let wishlist = [];

      if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
      }

      if (isInWishlist) {
        wishlist = wishlist.filter(id => id !== isbn);
      } else {
        wishlist.push(isbn);
      }

      localStorage.setItem('bookstore_wishlist', JSON.stringify(wishlist));
      setIsInWishlist(!isInWishlist);
    } catch (e) {
      console.error('Failed to update wishlist');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">❌ {error || 'Product not found'}</h2>
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Catalog
          </a>
        </div>
      </div>
    );
  }

  const getCartSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
  };

  // Schema.org Book markup for SEO
  const bookSchema = book ? {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: {
      '@type': 'Person',
      name: book.author,
    },
    isbn: book.isbn,
    image: images.length > 0 ? images[0].scaleway_url || images[0].url : '',
    description: book.description || '',
    publisher: {
      '@type': 'Organization',
      name: book.publisher_name || 'Ciengarnia',
    },
    datePublished: book.publication_date ? new Date(book.publication_date).toISOString().split('T')[0] : '',
    offers: {
      '@type': 'Offer',
      url: `https://ciengarnia.com/product/${book.isbn}`,
      priceCurrency: 'EUR',
      price: book.price,
      availability: 'https://schema.org/' + (book.stock > 0 ? 'InStock' : 'OutOfStock'),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '1',
    },
  } : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema.org Book Markup */}
      {bookSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
        />
      )}
      {/* SUCCESS MESSAGE */}
      {successMessage && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-40 animate-pulse">
          {successMessage}
        </div>
      )}

      {/* STICKY HEADER WITH CART */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 text-slate-900 hover:text-slate-700 font-serif text-xl">
            Ciengarnia
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowCartPreview(!showCartPreview)}
              className="relative flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium"
            >
              <ShoppingCart className="w-5 h-5" />
              Cart
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform translate-x-2 -translate-y-2 font-bold">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* CART PREVIEW DROPDOWN */}
        {showCartPreview && (
          <div className="border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4">
              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.isbn} className="flex justify-between items-center text-sm">
                        <div className="flex-1">
                          <p className="font-medium text-slate-900">{item.title}</p>
                          <p className="text-slate-600">{item.quantity} × ${parseFloat(item.price).toFixed(2)}</p>
                        </div>
                        <p className="font-semibold text-slate-900">${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-slate-900">Subtotal:</span>
                      <span className="text-lg font-bold text-slate-900">${getCartSubtotal().toFixed(2)}</span>
                    </div>
                    <a
                      href="/"
                      className="block w-full text-center bg-slate-900 text-white py-2 rounded-lg font-semibold hover:bg-slate-800 transition"
                    >
                      Go to Checkout
                    </a>
                  </div>
                </div>
              ) : (
                <p className="text-slate-600 text-center py-4">Your cart is empty</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* TABS */}
        <div className="flex gap-8 border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('product')}
            className={`px-1 py-4 font-medium border-b-2 transition ${
              activeTab === 'product'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            PRODUCT
          </button>
          <button
            onClick={() => setActiveTab('images')}
            className={`px-1 py-4 font-medium border-b-2 transition ${
              activeTab === 'images'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            IMAGES
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`px-1 py-4 font-medium border-b-2 transition ${
              activeTab === 'details'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            DESCRIPTION
          </button>
        </div>

        {/* TAB: PRODUCT */}
        {activeTab === 'product' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* LEFT: COVER IMAGE */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-4 sticky top-20">
                {images.length > 0 ? (
                  <img
                    src={images[0].url}
                    alt={images[0].alt}
                    className="w-full h-auto rounded-md object-cover"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-96 rounded-md flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-4 text-center">
                  View more images in the "Images" tab
                </p>
              </div>
            </div>

            {/* RIGHT: PRODUCT INFO */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                {/* TITLE */}
                <h1 className="text-4xl font-bold text-slate-900 mb-4">{book.title}</h1>

                {/* AUTHOR */}
                <p className="text-xl text-slate-600 mb-6">by {book.author}</p>

                {/* YEAR & EDITION */}
                <div className="flex gap-6 mb-6 text-sm text-slate-600">
                  {book.publication_date && (
                    <div>
                      <span className="font-semibold">Year:</span> {new Date(book.publication_date).getFullYear()}
                    </div>
                  )}
                  {book.edition && (
                    <div>
                      <span className="font-semibold">Edition:</span> {book.edition}
                    </div>
                  )}
                </div>

                {/* DIVIDER */}
                <hr className="my-8" />

                {/* PRICE */}
                <div className="mb-8">
                  <div className="text-4xl font-bold text-slate-900">€{book.price}</div>
                </div>

                {/* STOCK STATUS */}
                <div className="mb-8">
                  {book.stock > 0 ? (
                    <span className="text-green-600 font-semibold">
                      ✓ {book.stock} in stock
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">Out of stock</span>
                  )}
                </div>

                {/* QUANTITY & ACTION BUTTONS */}
                <div className="flex gap-4 mb-8">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-slate-600 hover:text-slate-900"
                      disabled={quantity === 1}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                      className="w-12 text-center border-0 outline-none"
                      min="1"
                      max={book.stock}
                    />
                    <button
                      onClick={() => setQuantity(Math.min(book.stock, quantity + 1))}
                      className="px-4 py-2 text-slate-600 hover:text-slate-900"
                      disabled={quantity === book.stock}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={book.stock === 0}
                    className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 disabled:bg-gray-400 transition flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>

                  <button
                    onClick={handleToggleWishlist}
                    className={`px-6 py-3 rounded-lg font-semibold border transition ${
                      isInWishlist
                        ? 'bg-red-50 border-red-300 text-red-600 hover:bg-red-100'
                        : 'bg-white border-gray-300 text-slate-600 hover:bg-gray-50'
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`}
                    />
                  </button>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Description</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {book.description || 'No description available. See the "Details" tab for more information.'}
                  </p>
                  <p className="text-slate-500 text-sm mt-4">
                    [See full description in the dedicated Description tab]
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: IMAGES */}
        {activeTab === 'images' && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Product Images</h2>
            {images.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main image display */}
                <div className="md:col-span-2">
                  <img
                    src={images[0].url}
                    alt={images[0].alt}
                    className="w-full max-h-96 object-contain rounded-lg bg-gray-50"
                  />
                  <p className="text-sm text-gray-500 mt-4 text-center">Image 1 of {images.length}</p>
                </div>

                {/* Image thumbnails */}
                {images.length > 1 && (
                  <div className="md:col-span-1">
                    <h3 className="text-sm font-semibold text-slate-900 mb-4">All Images ({images.length})</h3>
                    <div className="grid grid-cols-3 md:grid-cols-2 gap-2">
                      {images.map((img, idx) => (
                        <div
                          key={img.id}
                          className="relative bg-gray-100 rounded-md overflow-hidden border-2 border-transparent hover:border-slate-900 cursor-pointer"
                        >
                          <img
                            src={img.url}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-24 object-cover"
                          />
                          {img.is_primary && (
                            <div className="absolute top-1 right-1 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                              Primary
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gray-100 rounded-lg p-12 text-center">
                <p className="text-gray-500">No images available for this product</p>
              </div>
            )}
          </div>
        )}

        {/* TAB: DETAILS */}
        {activeTab === 'details' && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Product Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <DetailRow label="ISBN" value={book.isbn} />
                <DetailRow label="Number of Pages" value={book.number_of_pages || 'Not specified'} />
                <DetailRow label="Publication Date" value={book.publication_date ? new Date(book.publication_date).toLocaleDateString() : 'Not specified'} />
              </div>
              <div className="space-y-4">
                <DetailRow label="Publisher" value={book.publisher_name || 'Not specified'} />
                <DetailRow label="Language" value={book.language || 'English'} />
                <DetailRow label="Edition" value={book.edition || 'Not specified'} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Privacy Notice Banner */}
      <PrivacyNotice />
    </div>
  );
}

// Helper component for detail rows
function DetailRow({ label, value }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <p className="text-sm font-semibold text-slate-900">{label}</p>
      <p className="text-slate-600">{value}</p>
    </div>
  );
}
