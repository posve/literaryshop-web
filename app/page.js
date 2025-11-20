'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, Book, MapPin, Package, Search, Filter, X, ChevronRight, Mail, Phone, MapPin as Location } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const DELIVERY_OPTIONS = [
  { id: 'standard', name: 'Standard Delivery', days: '5-7 business days', price: 5.99 },
  { id: 'express', name: 'Express Delivery', days: '2-3 business days', price: 12.99 },
  { id: 'international', name: 'International Delivery', days: '10-15 business days', price: 24.99 }
];

export default function BookstoreApp() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('catalog');
  const [selectedDelivery, setSelectedDelivery] = useState('standard');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: ''
  });
  const [orderNumber, setOrderNumber] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('title');

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('bookstore_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to load cart');
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('bookstore_cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('bookstore_cart');
    }
  }, [cart]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/books`);
      if (!response.ok) throw new Error('Failed to load books');
      const data = await response.json();

      // Load Scaleway images for each book
      const booksWithImages = await Promise.all(
        data.map(async (book) => {
          try {
            const imgResponse = await fetch(`${API_URL}/books/${book.isbn}/images`);
            if (imgResponse.ok) {
              const images = await imgResponse.json();
              if (images.length > 0) {
                // Use the primary image or first image
                const primaryImage = images.find(img => img.is_primary) || images[0];
                return { ...book, image_url: primaryImage.scaleway_url };
              }
            }
          } catch (err) {
            console.error(`Error loading images for ${book.isbn}:`, err);
          }
          // Return book with original image_url if no Scaleway images found
          return book;
        })
      );

      setBooks(booksWithImages);
      setError(null);
    } catch (err) {
      console.error('Error loading books:', err);
      setError('Failed to load books. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories from books
  const categories = ['all', ...new Set(books.map(b => b.category).filter(Boolean))];

  // Filter and sort books
  const filteredAndSortedBooks = books
    .filter(book => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn.includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'author':
          return a.author.localeCompare(b.author);
        case 'title':
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const addToCart = (book) => {
    if (book.stock === 0) {
      alert('Sorry, this book is out of stock');
      return;
    }

    const existing = cart.find(item => item.isbn === book.isbn);
    if (existing) {
      if (existing.quantity >= book.stock) {
        alert('Cannot add more items than available in stock');
        return;
      }
      setCart(cart.map(item =>
        item.isbn === book.isbn
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const updateQuantity = (isbn, delta) => {
    const item = cart.find(i => i.isbn === isbn);
    if (!item) return;

    const newQuantity = item.quantity + delta;
    
    if (newQuantity < 1) return;
    if (newQuantity > item.stock) {
      alert('Cannot add more items than available in stock');
      return;
    }

    setCart(cart.map(i =>
      i.isbn === isbn
        ? { ...i, quantity: newQuantity }
        : i
    ));
  };

  const removeFromCart = (isbn) => {
    setCart(cart.filter(item => item.isbn !== isbn));
  };

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getDeliveryPrice = () => {
    const option = DELIVERY_OPTIONS.find(o => o.id === selectedDelivery);
    return option ? option.price : 0;
  };

  const getTotal = () => {
    return getSubtotal() + getDeliveryPrice();
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView('checkout');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handlePlaceOrder = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.address || 
        !customerInfo.city || !customerInfo.postalCode || !customerInfo.country) {
      alert('Please fill in all required fields');
      return;
    }

    if (!validateEmail(customerInfo.email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    try {
      const orderData = {
        customer_info: customerInfo,
        items: cart.map(item => ({
          isbn: item.isbn,
          quantity: item.quantity,
          price: item.price
        })),
        delivery_option: selectedDelivery,
        total: getTotal()
      };

      const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const result = await response.json();
      setOrderNumber(result.orderId || 'ORD-' + Date.now().toString().slice(-8));
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setView('confirmation');
    } catch (err) {
      console.error('Error placing order:', err);
      alert('Failed to place order. Please try again or contact us directly.');
    }
  };

  const resetOrder = () => {
    setCart([]);
    localStorage.removeItem('bookstore_cart');
    setView('catalog');
    setCustomerInfo({
      name: '',
      email: '',
      address: '',
      city: '',
      country: '',
      postalCode: ''
    });
    setSelectedDelivery('standard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Book className="w-12 h-12 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading our collection...</p>
        </div>
      </div>
    );
  }

  if (error && books.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={loadBooks}
            className="px-6 py-2 border border-black hover:bg-black hover:text-white transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-300 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => {
                setView('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 hover:opacity-70 transition"
            >
              <Book className="w-6 h-6 sm:w-8 sm:h-8" />
              <div className="text-left">
                <h1 className="text-xl sm:text-2xl font-serif leading-tight">Rare & Fine Books</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Curated for discerning collectors</p>
              </div>
            </button>
            <button
              onClick={() => {
                setView('cart');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2 border border-black hover:bg-gray-50 transition"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Catalog View */}
        {view === 'catalog' && (
          <div>
            {/* Hero Section */}
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4">Discover Literary Excellence</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                Each volume in our collection has been carefully selected for its literary merit, 
                historical significance, and exceptional quality.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-6 sm:mb-8 space-y-4">
              <div className="flex gap-2 sm:gap-4">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title, author, or ISBN..."
                    className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black text-sm sm:text-base"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 hover:bg-gray-50 transition whitespace-nowrap text-sm sm:text-base"
                >
                  <Filter className="w-4 h-4" />
                  <span className="hidden sm:inline">Filters</span>
                </button>
              </div>

              {/* Filter Panel */}
              {showFilters && (
                <div className="border border-gray-300 p-4 sm:p-6 bg-gray-50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Sort By</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
                      >
                        <option value="title">Title (A-Z)</option>
                        <option value="author">Author (A-Z)</option>
                        <option value="price-low">Price (Low to High)</option>
                        <option value="price-high">Price (High to Low)</option>
                      </select>
                    </div>
                    {categories.length > 1 && (
                      <div>
                        <label className="block text-sm font-semibold mb-2">Category</label>
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
                        >
                          {categories.map(cat => (
                            <option key={cat} value={cat}>
                              {cat === 'all' ? 'All Categories' : cat}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Books Grid */}
            {filteredAndSortedBooks.length === 0 ? (
              <div className="text-center py-12 sm:py-16">
                <p className="text-gray-500 mb-4">No books found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-2 border border-black hover:bg-black hover:text-white transition"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm text-gray-600 mb-4">
                  Showing {filteredAndSortedBooks.length} {filteredAndSortedBooks.length === 1 ? 'book' : 'books'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredAndSortedBooks.map(book => (
                    <a
                      key={book.isbn}
                      href={`/product/${book.isbn}`}
                      className="border border-gray-300 hover:border-gray-400 transition group block"
                    >
                      <div className="relative overflow-hidden bg-gray-100">
                        {book.image_url ? (
                          <img
                            src={book.image_url}
                            alt={book.title}
                            className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition duration-300"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-full h-64 sm:h-72 flex items-center justify-center">
                            <Book className="w-16 h-16 text-gray-300" />
                          </div>
                        )}
                        {book.stock === 0 && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="bg-white px-4 py-2 text-sm font-semibold">OUT OF STOCK</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-serif mb-2 line-clamp-2">{book.title}</h3>
                        <p className="text-gray-600 mb-2 text-sm sm:text-base">{book.author}</p>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{book.description}</p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xl sm:text-2xl font-bold">${Number(book.price).toFixed(2)}</span>
                          <span className={`text-xs sm:text-sm ${book.stock > 0 ? 'text-gray-500' : 'text-red-600'}`}>
                            {book.stock > 0 ? `${book.stock} in stock` : 'Out of stock'}
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(book);
                          }}
                          className="w-full py-2 sm:py-3 border border-black hover:bg-black hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base font-semibold"
                          disabled={book.stock === 0}
                        >
                          {book.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cart View */}
        {view === 'cart' && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif">Shopping Cart</h2>
              <button
                onClick={() => {
                  setView('catalog');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 border border-black hover:bg-gray-50 text-sm sm:text-base"
              >
                Continue Shopping
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12 sm:py-16 border border-gray-300 bg-gray-50">
                <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-xl mb-4 text-gray-500">Your cart is empty</p>
                <button
                  onClick={() => {
                    setView('catalog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition"
                >
                  Browse Books
                </button>
              </div>
            ) : (
              <div>
                <div className="space-y-4 mb-8">
                  {cart.map(item => (
                    <div key={item.isbn} className="border border-gray-300 p-4 sm:p-6 hover:border-gray-400 transition">
                      <div className="flex gap-4 sm:gap-6">
                        {item.image_url && (
                          <img 
                            src={item.image_url} 
                            alt={item.title} 
                            className="w-20 h-28 sm:w-24 sm:h-36 object-cover flex-shrink-0"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-serif mb-1 line-clamp-2">{item.title}</h3>
                          <p className="text-gray-600 mb-2 text-sm sm:text-base">{item.author}</p>
                          <p className="text-sm text-gray-500 mb-1">ISBN: {item.isbn}</p>
                          <p className="text-base sm:text-lg font-bold mb-3">${Number(item.price).toFixed(2)} each</p>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-gray-300">
                              <button
                                onClick={() => updateQuantity(item.isbn, -1)}
                                className="p-2 hover:bg-gray-100 disabled:opacity-50"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.isbn, 1)}
                                className="p-2 hover:bg-gray-100 disabled:opacity-50"
                                disabled={item.quantity >= item.stock}
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.isbn)}
                              className="p-2 hover:bg-gray-100 text-red-600"
                              title="Remove from cart"
                            >
                              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-lg sm:text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t-2 border-gray-300 pt-6">
                  <div className="max-w-md ml-auto space-y-3 mb-6">
                    <div className="flex justify-between text-lg">
                      <span>Subtotal:</span>
                      <span className="font-bold">${getSubtotal().toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-500">Shipping and taxes calculated at checkout</p>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full sm:w-auto sm:float-right px-8 py-3 bg-black text-white hover:bg-gray-800 transition font-semibold text-lg"
                  >
                    Proceed to Checkout
                  </button>
                  <div className="clear-both"></div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Checkout View */}
        {view === 'checkout' && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 sm:mb-8">Checkout</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Delivery Information */}
                <div className="border border-gray-300 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-serif mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Delivery Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        className="w-full px-4 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                        className="w-full px-4 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Street Address *</label>
                      <input
                        type="text"
                        required
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                        className="w-full px-4 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">City *</label>
                        <input
                          type="text"
                          required
                          value={customerInfo.city}
                          onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                          className="w-full px-4 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Postal Code *</label>
                        <input
                          type="text"
                          required
                          value={customerInfo.postalCode}
                          onChange={(e) => setCustomerInfo({...customerInfo, postalCode: e.target.value})}
                          className="w-full px-4 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Country *</label>
                      <input
                        type="text"
                        required
                        value={customerInfo.country}
                        onChange={(e) => setCustomerInfo({...customerInfo, country: e.target.value})}
                        className="w-full px-4 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Method */}
                <div className="border border-gray-300 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-serif mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Delivery Method
                  </h3>
                  <div className="space-y-3">
                    {DELIVERY_OPTIONS.map(option => (
                      <label
                        key={option.id}
                        className={`flex items-center gap-3 p-4 border-2 cursor-pointer hover:bg-gray-50 transition ${
                          selectedDelivery === option.id ? 'border-black bg-gray-50' : 'border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="delivery"
                          value={option.id}
                          checked={selectedDelivery === option.id}
                          onChange={(e) => setSelectedDelivery(e.target.value)}
                          className="w-4 h-4"
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{option.name}</p>
                          <p className="text-sm text-gray-600">{option.days}</p>
                        </div>
                        <span className="font-bold text-lg">${option.price.toFixed(2)}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div>
                <div className="border border-gray-300 p-4 sm:p-6 sticky top-24">
                  <h3 className="text-lg sm:text-xl font-serif mb-4">Order Summary</h3>
                  <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.isbn} className="flex justify-between text-sm">
                        <span className="flex-1">{item.title} × {item.quantity}</span>
                        <span className="font-semibold ml-2">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-300 pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${getSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span>${getDeliveryPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold pt-2 border-t border-gray-300">
                      <span>Total:</span>
                      <span>${getTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full mt-6 py-3 bg-black text-white hover:bg-gray-800 transition font-semibold"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation View */}
        {view === 'confirmation' && (
          <div className="max-w-3xl mx-auto">
            <div className="border border-gray-300 p-6 sm:p-12 text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif mb-4">Order Confirmed</h2>
              <p className="text-lg sm:text-xl mb-2">Order Number: <strong>{orderNumber}</strong></p>
              <p className="text-gray-600 mb-8">
                Thank you for your order. A confirmation has been sent to <strong>{customerInfo.email}</strong>
              </p>
              
              {/* Payment Instructions */}
              <div className="border border-gray-300 p-4 sm:p-6 mb-6 text-left bg-gray-50">
                <h3 className="text-lg sm:text-xl font-serif mb-4">Payment Instructions</h3>
                <p className="mb-4">Please transfer the total amount to our bank account:</p>
                <div className="bg-white p-4 font-mono text-xs sm:text-sm space-y-2 border border-gray-200">
                  <div className="grid grid-cols-3 gap-2">
                    <strong className="col-span-1">Bank:</strong>
                    <span className="col-span-2">National Trust Bank</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <strong className="col-span-1">Account:</strong>
                    <span className="col-span-2">Rare & Fine Books Ltd.</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <strong className="col-span-1">Number:</strong>
                    <span className="col-span-2">1234-5678-9012-3456</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <strong className="col-span-1">SWIFT:</strong>
                    <span className="col-span-2">NTBKUS33</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-200">
                    <strong className="col-span-1">Amount:</strong>
                    <span className="col-span-2 text-lg font-bold">${getTotal().toFixed(2)}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <strong className="col-span-1">Reference:</strong>
                    <span className="col-span-2 font-bold">{orderNumber}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Important:</strong> Please include order number {orderNumber} as your payment reference. 
                  We'll process your order within 24 hours of receiving payment.
                </p>
              </div>

              {/* Order Details */}
              <div className="border border-gray-300 p-4 sm:p-6 mb-6 text-left">
                <h3 className="text-lg sm:text-xl font-serif mb-4">Order Details</h3>
                <div className="space-y-2 mb-4">
                  {cart.map(item => (
                    <div key={item.isbn} className="flex justify-between text-sm">
                      <span>{item.title} × {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-300 pt-3 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${getSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery:</span>
                    <span>${getDeliveryPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-300">
                    <span>Total:</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="border border-gray-300 p-4 sm:p-6 mb-8 text-left">
                <h3 className="text-lg sm:text-xl font-serif mb-4">Delivery Address</h3>
                <div className="text-sm space-y-1">
                  <p className="font-semibold">{customerInfo.name}</p>
                  <p>{customerInfo.address}</p>
                  <p>{customerInfo.city}, {customerInfo.postalCode}</p>
                  <p>{customerInfo.country}</p>
                  <p className="mt-2 text-gray-600">{customerInfo.email}</p>
                </div>
              </div>

              <button
                onClick={resetOrder}
                className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition font-semibold"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 mt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-lg mb-4">About Us</h3>
              <p className="text-sm text-gray-600">
                Rare & Fine Books is a family-run bookstore dedicated to curating 
                exceptional literary works for discerning collectors and readers.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contact@rarefinebooks.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-4">Information</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Shipping & Delivery</li>
                <li>Returns Policy</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
            <p>© 2025 Rare & Fine Books. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}