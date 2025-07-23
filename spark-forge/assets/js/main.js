// GlobalMart - Main Application JavaScript
// Vanilla JS implementation maintaining exact React functionality

// Global State Management
const GlobalState = {
    // User preferences
    language: localStorage.getItem('language') || 'en',
    currency: localStorage.getItem('currency') || 'USD',
    location: localStorage.getItem('location') || 'United States',
    
    // Cart and Wishlist
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('wishlist') || '[]'),
    
    // UI State
    currentSlide: 0,
    isLoading: false,
    
    // Data
    products: [],
    banners: []
};

// Language translations
const translations = {
    en: {
        'nav.search': 'Search products...',
        'hero.title': 'Discover Global Shopping',
        'hero.subtitle': 'Connect with millions of sellers worldwide',
        'flash.sale': 'Flash Sale',
        'flash.ends': 'Ends in',
        'categories.title': 'Shop by Category',
        'categories.subtitle': 'Explore millions of products from global sellers',
        'product.add.cart': 'Add to Cart',
        'product.reviews': 'reviews',
        'footer.about': 'About Us',
        'footer.contact': 'Contact',
        'footer.help': 'Help Center',
        'footer.returns': 'Returns & Refunds'
    },
    ur: {
        'nav.search': 'پروڈکٹس تلاش کریں...',
        'hero.title': 'عالمی خریداری دریافت کریں',
        'hero.subtitle': 'دنیا بھر کے لاکھوں فروخت کنندگان سے جڑیں',
        'flash.sale': 'فلیش سیل',
        'flash.ends': 'ختم ہونے میں',
        'categories.title': 'کیٹگری کے ذریعے خریداری',
        'categories.subtitle': 'عالمی فروخت کنندگان سے لاکھوں پروڈکٹس دریافت کریں',
        'product.add.cart': 'کارٹ میں شامل کریں',
        'product.reviews': 'جائزے',
        'footer.about': 'ہمارے بارے میں',
        'footer.contact': 'رابطہ',
        'footer.help': 'مدد مرکز',
        'footer.returns': 'واپسی اور رقم کی واپسی'
    }
};

// Translation function
function t(key) {
    return translations[GlobalState.language]?.[key] || translations.en[key] || key;
}

// Currency formatting
const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    PKR: '₨',
    AED: 'د.إ'
};

function formatPrice(price, currency = GlobalState.currency) {
    const symbol = currencySymbols[currency] || '$';
    return `${symbol}${price.toLocaleString()}`;
}

// Sample Data
const sampleProducts = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        description: "The most advanced iPhone with titanium design and A17 Pro chip.",
        price: 1199,
        originalPrice: 1299,
        currency: "USD",
        images: ["images/iphone 15.avif", "images/iphone 15 2.jpeg", "images/iphone 15 3.jpeg"],
        category: "Electronics",
        brand: "Apple",
        rating: 4.8,
        reviews: 1247,
        inStock: true,
        stockCount: 50,
        seller: {
            name: "TechWorld Store",
            location: "United States",
            verified: true
        },
        isFlashSale: true,
        discount: 8,
        shippingInfo: {
            freeShipping: true,
            estimatedDays: "2-3 days"
        }
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        description: "Next-generation Galaxy with AI-powered features and S Pen.",
        price: 1199,
        originalPrice: 1299,
        currency: "USD",
        images: ["images/Samsung1.jpeg", "images/Samsung2.jpeg", "images/Samsung3.jpeg"],
        category: "Electronics",
        brand: "Samsung",
        rating: 4.7,
        reviews: 892,
        inStock: true,
        stockCount: 30,
        seller: {
            name: "Samsung Official Store",
            location: "South Korea",
            verified: true
        },
        isFlashSale: true,
        discount: 8,
        shippingInfo: {
            freeShipping: true,
            estimatedDays: "3-5 days"
        }
    },
    {
        id: 3,
        name: "MacBook Air M3",
        description: "Supercharged by the M3 chip. Ultra-portable and powerful.",
        price: 1299,
        originalPrice: 1399,
        currency: "USD",
        images: ["images/MacBook Air M3 1.jpeg", "images/MacBook Air M3 2.jpeg", "images/MacBook Air M3 3.jpeg"],
        category: "Electronics",
        brand: "Apple",
        rating: 4.9,
        reviews: 567,
        inStock: true,
        stockCount: 25,
        seller: {
            name: "TechWorld Store",
            location: "United States",
            verified: true
        },
        isFlashSale: true,
        discount: 7,
        shippingInfo: {
            freeShipping: true,
            estimatedDays: "2-4 days"
        }
    },
    {
        id: 4,
        name: "Sony WH-1000XM5 Headphones",
        description: "Industry-leading noise canceling with premium audio quality.",
        price: 349,
        originalPrice: 399,
        currency: "USD",
        images: ["images/Sony WH-1000XM5 Headphones 1.jpeg", "images/Sony WH-1000XM5 Headphones 2.jpeg", "images/Sony WH-1000XM5 Headphones 3.jpeg"],
        category: "Electronics",
        brand: "Sony",
        rating: 4.6,
        reviews: 324,
        inStock: true,
        stockCount: 75,
        seller: {
            name: "Audio Excellence",
            location: "Japan",
            verified: true
        },
        isFlashSale: true,
        discount: 13,
        shippingInfo: {
            freeShipping: true,
            estimatedDays: "5-7 days"
        }
    }
];

const sampleBanners = [
    {
        id: 1,
        title: "Mega Electronics Sale",
        subtitle: "Up to 70% OFF",
        description: "Latest smartphones, laptops, and gadgets at unbeatable prices",
        image: "images/11.avif",
        badge: "Limited Time",
        cta: "Shop Electronics",
        href: "#electronics"
    },
    {
        id: 2,
        title: "Fashion Week Special",
        subtitle: "Buy 2 Get 1 FREE",
        description: "Trendy clothing, shoes, and accessories for all seasons",
        image: "images/images 1.jpeg",
        badge: "New Collection",
        cta: "Explore Fashion",
        href: "#fashion"
    },
    {
        id: 3,
        title: "Home & Living Essentials",
        subtitle: "Transform Your Space",
        description: "Beautiful furniture, decor, and home appliances",
        image: "images/Essentials.avif",
        badge: "Best Sellers",
        cta: "Shop Home",
        href: "#home"
    },
    {
        id: 4,
        title: "Gaming Universe",
        subtitle: "Level Up Your Game",
        description: "Latest gaming consoles, accessories, and digital entertainment",
        image: "images/Gaming.avif",
        badge: "Gamer's Paradise",
        cta: "Shop Gaming",
        href: "#gaming"
    }
];

// Utility Functions
function createElement(tag, className = '', innerHTML = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="star">★</span>';
        } else {
            stars += '<span class="star empty">☆</span>';
        }
    }
    return stars;
}

function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = createElement('div', `alert alert-${type} position-fixed`, message);
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Header Component
function renderHeader() {
    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ur', name: 'اردو', flag: '🇵🇰' }
    ];

    const currencies = [
        { code: 'USD', name: 'US Dollar', symbol: '$' },
        { code: 'EUR', name: 'Euro', symbol: '€' },
        { code: 'GBP', name: 'British Pound', symbol: '£' },
        { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨' },
        { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' }
    ];

    const locations = [
        'United States', 'United Kingdom', 'Canada', 'Australia', 
        'Germany', 'France', 'Spain', 'Pakistan', 'UAE', 'Saudi Arabia'
    ];

    const headerHTML = `
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-4">
                        <span>📞 24/7 Customer Support: +1-800-SHOP-NOW</span>
                        <span>🚚 Free shipping on orders over $50</span>
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        <span>Follow us:</span>
                        <a href="#" class="text-white text-decoration-none">📘</a>
                        <a href="#" class="text-white text-decoration-none">🐦</a>
                        <a href="#" class="text-white text-decoration-none">📷</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Header -->
        <header class="main-header">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between py-3">
                    <!-- Logo -->
                    <a href="#" class="logo-container">
                        <div class="logo-icon">
                            <span style="color: white; font-size: 1.25rem;">📦</span>
                        </div>
                        <div class="logo-text">
                            <h1>GlobalMart</h1>
                            <p>Shop Worldwide</p>
                        </div>
                    </a>

                    <!-- Location Selector -->
                    <div class="d-none d-lg-flex align-items-center gap-2">
                        <span style="color: #64748b;">📍</span>
                        <div class="dropdown">
                            <button class="header-btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                Deliver to: ${GlobalState.location}
                            </button>
                            <ul class="dropdown-menu">
                                ${locations.map(loc => `
                                    <li><a class="dropdown-item ${loc === GlobalState.location ? 'active' : ''}" 
                                           href="#" onclick="changeLocation('${loc}')">${loc}</a></li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    <!-- Search Bar -->
                    <form class="search-container" onsubmit="handleSearch(event)">
                        <input type="text" class="search-input" placeholder="${t('nav.search')}" id="searchInput">
                        <button type="submit" class="search-btn">🔍</button>
                    </form>

                    <!-- Header Actions -->
                    <div class="header-actions">
                        <!-- Language Selector -->
                        <div class="dropdown">
                            <button class="header-btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                🌐 ${languages.find(l => l.code === GlobalState.language)?.flag || '🇺🇸'}
                            </button>
                            <ul class="dropdown-menu">
                                ${languages.map(lang => `
                                    <li><a class="dropdown-item ${lang.code === GlobalState.language ? 'active' : ''}" 
                                           href="#" onclick="changeLanguage('${lang.code}')">
                                        ${lang.flag} ${lang.name}
                                    </a></li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Currency Selector -->
                        <div class="dropdown">
                            <button class="header-btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                ${currencies.find(c => c.code === GlobalState.currency)?.symbol || '$'}
                            </button>
                            <ul class="dropdown-menu">
                                ${currencies.map(curr => `
                                    <li><a class="dropdown-item ${curr.code === GlobalState.currency ? 'active' : ''}" 
                                           href="#" onclick="changeCurrency('${curr.code}')">
                                        ${curr.symbol} ${curr.name}
                                    </a></li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Account -->
                        <div class="dropdown">
                            <button class="header-btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                👤 Account
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#login">Sign In</a></li>
                                <li><a class="dropdown-item" href="#register">Create Account</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#seller">Become a Seller</a></li>
                            </ul>
                        </div>

                        <!-- Wishlist -->
                        <button class="header-btn position-relative" onclick="toggleWishlist()">
                            ❤️
                            ${GlobalState.wishlist.length > 0 ? `<span class="badge-count">${GlobalState.wishlist.length}</span>` : ''}
                        </button>

                        <!-- Cart -->
                        <button class="header-btn position-relative" onclick="toggleCart()">
                            🛒
                            ${GlobalState.cart.length > 0 ? `<span class="badge-count">${GlobalState.cart.length}</span>` : ''}
                            ${GlobalState.cart.length > 0 ? `<span class="ms-2">${formatPrice(getCartTotal())}</span>` : ''}
                        </button>
                    </div>
                </div>

                <!-- Navigation Menu -->
                <nav class="nav-menu d-none d-lg-block">
                    <div class="d-flex align-items-center justify-content-center gap-4 py-2">
                        <a href="#electronics" class="nav-link">📱 Electronics</a>
                        <a href="#fashion" class="nav-link">👕 Fashion</a>
                        <a href="#home" class="nav-link">🏠 Home & Living</a>
                        <a href="#sports" class="nav-link">⚽ Sports</a>
                        <a href="#deals" class="nav-link special">⚡ Flash Deals</a>
                        <a href="#seller" class="nav-link seller">🏪 Sell on GlobalMart</a>
                    </div>
                </nav>
            </div>
        </header>
    `;

    document.getElementById('app').innerHTML = headerHTML;
}

// Hero Section
function renderHeroSection() {
    const countryStats = [
        { country: '🇺🇸 USA', sellers: '500K+', flag: '🇺🇸' },
        { country: '🇨🇳 China', sellers: '800K+', flag: '🇨🇳' },
        { country: '🇩🇪 Germany', sellers: '200K+', flag: '🇩🇪' },
        { country: '🇬🇧 UK', sellers: '150K+', flag: '🇬🇧' }
    ];

    const heroHTML = `
        <section class="hero-section">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <div class="text-white">
                                <h1 class="hero-title">${t('hero.title')}</h1>
                                <p class="hero-subtitle">${t('hero.subtitle')}</p>
                                <p class="hero-description">Connect with millions of buyers and sellers worldwide. Discover unique products, competitive prices, and exceptional service across 200+ countries.</p>
                                
                                <div class="trust-indicators">
                                    <div class="trust-item">
                                        <span>📍</span>
                                        <span>Delivering to ${GlobalState.location}</span>
                                    </div>
                                    <div class="trust-item">
                                        <span>🌐</span>
                                        <span>200+ Countries</span>
                                    </div>
                                </div>

                                <div class="hero-buttons">
                                    <a href="#shopping" class="btn-hero-primary">
                                        Start Shopping
                                        <span>→</span>
                                    </a>
                                    <a href="#seller" class="btn-hero-secondary">
                                        Become a Seller
                                        <span>📦</span>
                                    </a>
                                </div>

                                <div class="trust-indicators mt-4">
                                    <div class="trust-item">
                                        <span style="color: #10b981;">✓</span>
                                        <span>2M+ Happy Customers</span>
                                    </div>
                                    <div class="trust-item">
                                        <span style="color: #10b981;">🛡️</span>
                                        <span>Secure Payments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 d-none d-lg-block">
                            <div class="country-stats">
                                ${countryStats.map(stat => `
                                    <div class="country-card">
                                        <div class="country-flag">${stat.flag}</div>
                                        <div class="country-sellers">${stat.sellers}</div>
                                        <div class="country-name">${stat.country.replace(/🇺🇸|🇨🇳|🇩🇪|🇬🇧/g, '').trim()}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    document.getElementById('app').insertAdjacentHTML('beforeend', heroHTML);
}

// Banner Slider Component
function renderBannerSlider() {
    const sliderHTML = `
        <section class="container my-5">
            <div class="banner-slider" id="bannerSlider">
                ${sampleBanners.map((banner, index) => `
                    <div class="banner-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
                        <img src="${banner.image}" alt="${banner.title}" class="banner-image">
                        <div class="banner-overlay"></div>
                        <div class="banner-content">
                            <div class="container">
                                <div class="banner-text">
                                    <span class="banner-badge">${banner.badge}</span>
                                    <h1 class="banner-title">${banner.title}</h1>
                                    <h3 class="banner-subtitle">${banner.subtitle}</h3>
                                    <p class="banner-description">${banner.description}</p>
                                    <a href="${banner.href}" class="banner-cta">
                                        ${banner.cta}
                                        <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
                
                <button class="banner-nav prev" onclick="previousSlide()">‹</button>
                <button class="banner-nav next" onclick="nextSlide()">›</button>
                
                <div class="banner-indicators">
                    ${sampleBanners.map((_, index) => `
                        <button class="banner-dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></button>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    document.getElementById('app').insertAdjacentHTML('beforeend', sliderHTML);
    
    // Auto-rotate slider
    setInterval(nextSlide, 5000);
}

// Global Features Section
function renderGlobalFeatures() {
    const features = [
        {
            icon: '🌐',
            title: 'Global Reach',
            description: 'Shop from sellers in 200+ countries',
            color: 'text-primary'
        },
        {
            icon: '🛡️',
            title: 'Buyer Protection',
            description: '100% secure with money-back guarantee',
            color: 'text-success'
        },
        {
            icon: '🚚',
            title: 'Worldwide Shipping',
            description: 'Fast delivery to your doorstep',
            color: 'text-info'
        },
        {
            icon: '🎧',
            title: '24/7 Support',
            description: 'Multilingual customer service',
            color: 'text-warning'
        }
    ];

    const featuresHTML = `
        <section class="section section-bg-muted">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Why Shop Globally with Us?</h2>
                    <p class="section-subtitle">Experience the world of shopping with unmatched convenience and security</p>
                </div>
                <div class="row">
                    ${features.map(feature => `
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="feature-card">
                                <div class="feature-icon ${feature.color}">
                                    ${feature.icon}
                                </div>
                                <h3 class="feature-title">${feature.title}</h3>
                                <p class="feature-description">${feature.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    document.getElementById('app').insertAdjacentHTML('beforeend', featuresHTML);
}

// Flash Sale Section
function renderFlashSale() {
    const flashProducts = sampleProducts.filter(p => p.isFlashSale);
    
    const flashSaleHTML = `
        <section class="section">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center mb-5">
                    <div class="d-flex align-items-center gap-3">
                        <div class="bg-gradient rounded-3 p-3">
                            <span style="color: white; font-size: 1.75rem;">⚡</span>
                        </div>
                        <div>
                            <h2 class="section-title mb-1">${t('flash.sale')}</h2>
                            <p class="text-muted mb-0">Limited time offers from global sellers</p>
                        </div>
                        <span class="badge bg-danger fs-6 ms-3">
                            ⏰ ${t('flash.ends')} 24h
                        </span>
                    </div>
                    <a href="#deals" class="btn btn-outline-primary">
                        View All Deals →
                    </a>
                </div>

                <div class="row">
                    ${flashProducts.map(product => generateProductCard(product)).join('')}
                </div>
            </div>
        </section>
    `;

    document.getElementById('app').insertAdjacentHTML('beforeend', flashSaleHTML);
}

// Categories Section
function renderCategories() {
    const categories = [
        { name: 'Electronics', icon: '📱', itemCount: '50k+ items', color: 'from-blue-500 to-blue-600', href: '#electronics' },
        { name: 'Fashion', icon: '👕', itemCount: '30k+ items', color: 'from-pink-500 to-pink-600', href: '#fashion' },
        { name: 'Home & Living', icon: '🏠', itemCount: '25k+ items', color: 'from-green-500 to-green-600', href: '#home' },
        { name: 'Sports', icon: '⚽', itemCount: '15k+ items', color: 'from-orange-500 to-orange-600', href: '#sports' },
        { name: 'Beauty', icon: '💄', itemCount: '20k+ items', color: 'from-purple-500 to-purple-600', href: '#beauty' },
        { name: 'Automotive', icon: '🚗', itemCount: '10k+ items', color: 'from-red-500 to-red-600', href: '#automotive' }
    ];

    const categoriesHTML = `
        <section class="section section-bg-muted">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">${t('categories.title')}</h2>
                    <p class="section-subtitle">${t('categories.subtitle')}</p>
                </div>
                <div class="row">
                    ${categories.map(category => `
                        <div class="col-lg-2 col-md-4 col-6 mb-4">
                            <a href="${category.href}" class="text-decoration-none">
                                <div class="category-card">
                                    <div class="category-header bg-gradient">
                                        ${category.icon}
                                    </div>
                                    <div class="category-body">
                                        <h3 class="category-title">${category.name}</h3>
                                        <p class="category-count">${category.itemCount}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    document.getElementById('app').insertAdjacentHTML('beforeend', categoriesHTML);
}

// Product Card Generator
function generateProductCard(product) {
    const discountPercentage = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return `
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="product-card" onclick="viewProduct(${product.id})">
                <div class="product-image-container">
                    <img src="${product.images[0]}" alt="${product.name}" class="product-image">
                    ${discountPercentage > 0 ? `<span class="product-badge">-${discountPercentage}%</span>` : ''}
                    ${product.isFlashSale ? '<span class="product-badge flash">⚡ Flash</span>' : ''}
                    
                    <div class="product-actions">
                        <button class="product-action-btn" onclick="event.stopPropagation(); toggleWishlistProduct(${product.id})" title="Add to Wishlist">
                            ${isInWishlist(product.id) ? '❤️' : '🤍'}
                        </button>
                        <button class="product-action-btn" onclick="event.stopPropagation(); viewProduct(${product.id})" title="Quick View">
                            👁️
                        </button>
                    </div>
                </div>
                
                <div class="product-body">
                    <h3 class="product-title">${product.name}</h3>
                    
                    <div class="product-rating">
                        <div class="stars">${generateStars(product.rating)}</div>
                        <span class="rating-text">${product.rating} (${product.reviews} ${t('product.reviews')})</span>
                    </div>
                    
                    <div class="product-price">
                        <span class="price-current">${formatPrice(product.price)}</span>
                        ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
                    </div>
                    
                    <div class="product-seller">
                        <span>📍 ${product.seller.location}</span>
                        ${product.seller.verified ? '<span class="seller-verified">✓ Verified</span>' : ''}
                    </div>
                    
                    <div class="product-shipping">
                        <span class="shipping-free">
                            🚚 ${product.shippingInfo.freeShipping ? 'Free shipping' : `Shipping ${formatPrice(product.shippingInfo.cost || 0)}`}
                        </span>
                        <span class="shipping-days">${product.shippingInfo.estimatedDays}</span>
                    </div>
                    
                    <button class="product-add-btn" onclick="event.stopPropagation(); addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        🛒 ${t('product.add.cart')}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Recommended Products Section
function renderRecommendedProducts() {
    const recommendedHTML = `
        <section class="section">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <h2 class="section-title">Recommended for You</h2>
                        <p class="text-muted">Curated based on your location: ${GlobalState.location}</p>
                    </div>
                    <a href="#products" class="btn btn-outline-primary">
                        View All Products →
                    </a>
                </div>

                <div class="row">
                    ${sampleProducts.map(product => generateProductCard(product)).join('')}
                </div>
            </div>
        </section>
    `;

    document.getElementById('app').insertAdjacentHTML('beforeend', recommendedHTML);
}

// Testimonials Section
function renderTestimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            location: "New York, USA",
            rating: 5,
            comment: "Amazing products from global sellers! Fast shipping and great quality.",
            avatar: "https://via.placeholder.com/40",
            verified: true
        },
        {
            name: "Ahmed Al-Rashid",
            location: "Dubai, UAE",
            rating: 5,
            comment: "Love the variety and international options. Customer service is excellent!",
            avatar: "https://via.placeholder.com/40",
            verified: true
        },
        {
            name: "Maria García",
            location: "Madrid, Spain",
            rating: 5,
            comment: "Best marketplace for finding unique items from around the world.",
            avatar: "https://via.placeholder.com/40",
            verified: true
        }
    ];

    const testimonialsHTML = `
        <section class="section section-bg-muted">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">What Our Global Customers Say</h2>
                    <p class="section-subtitle">Trusted by millions of shoppers worldwide</p>
                </div>
                <div class="row">
                    ${testimonials.map(testimonial => `
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="testimonial-card">
                                <div class="testimonial-rating">
                                    ${generateStars(testimonial.rating)}
                                </div>
                                <p class="testimonial-comment">"${testimonial.comment}"</p>
                                <div class="testimonial-author">
                                    <img src="${testimonial.avatar}" alt="${testimonial.name}" class="author-avatar">
                                    <div class="author-info">
                                        <div class="author-name">
                                            ${testimonial.name}
                                            ${testimonial.verified ? '<span class="verified-badge">✓ Verified</span>' : ''}
                                        </div>
                                        <div class="author-location">
                                            📍 ${testimonial.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    document.getElementById('app').insertAdjacentHTML('beforeend', testimonialsHTML);
}

// Stats Section
function renderStats() {
    const stats = [
        { icon: '👥', label: 'Happy Customers', value: '2M+' },
        { icon: '🎁', label: 'Products Sold', value: '50M+' },
        { icon: '🏆', label: 'Awards Won', value: '150+' },
        { icon: '🎯', label: 'Satisfaction Rate', value: '99%' }
    ];

    const statsHTML = `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Trusted by Millions Worldwide</h2>
                    <p class="section-subtitle">Join our growing global community</p>
                </div>
                <div class="stats-grid">
                    ${stats.map(stat => `
                        <div class="stat-item">
                            <div class="stat-icon">${stat.icon}</div>
                            <div class="stat-value">${stat.value}</div>
                            <div class="stat-label">${stat.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    document.getElementById('app').insertAdjacentHTML('beforeend', statsHTML);
}

// Newsletter Section
function renderNewsletter() {
    const newsletterHTML = `
        <section class="newsletter-section">
            <div class="newsletter-overlay"></div>
            <div class="newsletter-content">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <div class="newsletter-header">
                                <div class="newsletter-icon">🌐</div>
                                <div>
                                    <h2 class="newsletter-title">Stay Connected Globally</h2>
                                    <p class="newsletter-subtitle">Get updates in your preferred language</p>
                                </div>
                            </div>
                            
                            <p class="newsletter-description">
                                Subscribe to receive personalized deals, new seller alerts, and exclusive offers from around the world.
                            </p>
                            
                            <form class="newsletter-form" onsubmit="handleNewsletterSubmit(event)">
                                <input type="email" class="newsletter-input" placeholder="Enter your email" required>
                                <button type="submit" class="newsletter-btn">Subscribe</button>
                            </form>
                            
                            <div class="newsletter-features">
                                <div class="newsletter-feature">
                                    <span style="color: #10b981;">✓</span>
                                    <span>Multilingual support</span>
                                </div>
                                <div class="newsletter-feature">
                                    <span style="color: #10b981;">✓</span>
                                    <span>No spam guarantee</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 text-center">
                            <div class="bg-white bg-opacity-10 rounded-4 p-4">
                                <h3 class="text-white mb-3">Download Our App</h3>
                                <p class="text-white-50 mb-4">Shop on the go with our mobile app</p>
                                <div class="d-flex flex-column gap-3">
                                    <button class="btn btn-outline-light">📱 App Store</button>
                                    <button class="btn btn-outline-light">📱 Google Play</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    document.getElementById('app').insertAdjacentHTML('beforeend', newsletterHTML);
}

// Footer
function renderFooter() {
    const footerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="logo-icon">
                                <span style="color: white; font-size: 1.25rem;">📦</span>
                            </div>
                            <div>
                                <h5 class="text-white mb-0">GlobalMart</h5>
                                <small class="text-muted">Your Global Shopping Paradise</small>
                            </div>
                        </div>
                        <p>Connect with millions of buyers and sellers worldwide. Discover unique products, competitive prices, and exceptional service across 200+ countries.</p>
                        <div class="d-flex gap-3 text-sm">
                            <div class="d-flex align-items-center gap-1">
                                <span>🌐</span>
                                <span>200+ Countries</span>
                            </div>
                            <div class="d-flex align-items-center gap-1">
                                <span style="color: #10b981;">🛡️</span>
                                <span>Secure Payments</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h5>Company</h5>
                        <ul class="footer-links">
                            <li><a href="#about">${t('footer.about')}</a></li>
                            <li><a href="#contact">${t('footer.contact')}</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#press">Press</a></li>
                            <li><a href="#investor">Investor Relations</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h5>Customer Service</h5>
                        <ul class="footer-links">
                            <li><a href="#help">${t('footer.help')}</a></li>
                            <li><a href="#returns">${t('footer.returns')}</a></li>
                            <li><a href="#shipping">Shipping Info</a></li>
                            <li><a href="#track">Track Order</a></li>
                            <li><a href="#disputes">Dispute Resolution</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h5>Selling</h5>
                        <ul class="footer-links">
                            <li><a href="#seller-register">Become a Seller</a></li>
                            <li><a href="#seller-guide">Seller Guide</a></li>
                            <li><a href="#seller-fees">Fees & Pricing</a></li>
                            <li><a href="#seller-protection">Seller Protection</a></li>
                            <li><a href="#affiliate">Affiliate Program</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-features">
                    <div class="footer-feature">
                        <span>🚚</span>
                        <span>Free Global Shipping</span>
                    </div>
                    <div class="footer-feature">
                        <span style="color: #10b981;">🛡️</span>
                        <span>Buyer Protection</span>
                    </div>
                    <div class="footer-feature">
                        <span>💬</span>
                        <span>24/7 Support</span>
                    </div>
                    <div class="footer-feature">
                        <span>🏆</span>
                        <span>Quality Guaranteed</span>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="footer-controls">
                        <button class="footer-control">🌐 ${GlobalState.language.toUpperCase()}</button>
                        <button class="footer-control">💱 ${GlobalState.currency}</button>
                        <button class="footer-control">📍 ${GlobalState.location}</button>
                    </div>
                    
                    <div class="footer-social">
                        <button class="footer-social-btn">📘</button>
                        <button class="footer-social-btn">🐦</button>
                        <button class="footer-social-btn">📷</button>
                        <button class="footer-social-btn">💼</button>
                    </div>
                </div>
                
                <div class="text-center mt-4">
                    <div class="footer-copyright">
                        <p>&copy; 2024 GlobalMart. All rights reserved worldwide.</p>
                        <div class="footer-legal">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                            <a href="#cookies">Cookie Policy</a>
                            <a href="#gdpr">GDPR</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;

    document.getElementById('app').insertAdjacentHTML('beforeend', footerHTML);
}

// Event Handlers
function handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        showNotification(`Searching for: ${query}`, 'info');
        // In a real app, this would navigate to search results
        console.log('Search query:', query);
    }
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    showNotification('Successfully subscribed to newsletter!', 'success');
    event.target.reset();
}

function changeLanguage(langCode) {
    GlobalState.language = langCode;
    localStorage.setItem('language', langCode);
    showNotification('Language updated successfully!', 'success');
    
    // Re-render the page with new language
    setTimeout(() => {
        location.reload();
    }, 1000);
}

function changeCurrency(currCode) {
    GlobalState.currency = currCode;
    localStorage.setItem('currency', currCode);
    showNotification('Currency updated successfully!', 'success');
    
    // Update all price displays
    updatePriceDisplays();
}

function changeLocation(location) {
    GlobalState.location = location;
    localStorage.setItem('location', location);
    showNotification('Location updated successfully!', 'success');
    
    // Update location displays
    updateLocationDisplays();
}

function updatePriceDisplays() {
    // Update cart total in header
    const cartBtn = document.querySelector('.header-btn:has(🛒)');
    if (cartBtn && GlobalState.cart.length > 0) {
        const totalSpan = cartBtn.querySelector('span:last-child');
        if (totalSpan) {
            totalSpan.textContent = formatPrice(getCartTotal());
        }
    }
}

function updateLocationDisplays() {
    // Update location in header
    const locationBtn = document.querySelector('.header-btn:contains("Deliver to")');
    if (locationBtn) {
        locationBtn.innerHTML = `Deliver to: ${GlobalState.location}`;
    }
}

// Cart Functions
function addToCart(productId) {
    const product = sampleProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = GlobalState.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        GlobalState.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images[0],
            category: product.category,
            seller: product.seller.name,
            inStock: product.inStock,
            quantity: 1
        });
    }

    saveToLocalStorage('cart', GlobalState.cart);
    updateCartBadge();
    showNotification(`${product.name} added to cart!`, 'success');
}

function toggleWishlistProduct(productId) {
    const product = sampleProducts.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = GlobalState.wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        GlobalState.wishlist.splice(existingIndex, 1);
        showNotification(`${product.name} removed from wishlist!`, 'info');
    } else {
        GlobalState.wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images[0],
            rating: product.rating,
            reviews: product.reviews,
            seller: product.seller.name
        });
        showNotification(`${product.name} added to wishlist!`, 'success');
    }

    saveToLocalStorage('wishlist', GlobalState.wishlist);
    updateWishlistBadge();
    
    // Update heart icon
    const heartBtn = document.querySelector(`button[onclick*="toggleWishlistProduct(${productId})"]`);
    if (heartBtn) {
        heartBtn.innerHTML = isInWishlist(productId) ? '❤️' : '🤍';
    }
}

function isInWishlist(productId) {
    return GlobalState.wishlist.some(item => item.id === productId);
}

function getCartTotal() {
    return GlobalState.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartBadge() {
    const cartBtn = document.querySelector('.header-btn:has(🛒)');
    if (cartBtn) {
        const badge = cartBtn.querySelector('.badge-count');
        const totalSpan = cartBtn.querySelector('span:last-child');
        
        if (GlobalState.cart.length > 0) {
            if (badge) {
                badge.textContent = GlobalState.cart.length;
            } else {
                cartBtn.insertAdjacentHTML('beforeend', `<span class="badge-count">${GlobalState.cart.length}</span>`);
            }
            
            if (totalSpan) {
                totalSpan.textContent = formatPrice(getCartTotal());
            } else {
                cartBtn.insertAdjacentHTML('beforeend', `<span class="ms-2">${formatPrice(getCartTotal())}</span>`);
            }
        } else {
            if (badge) badge.remove();
            if (totalSpan) totalSpan.remove();
        }
    }
}

function updateWishlistBadge() {
    const wishlistBtn = document.querySelector('.header-btn:has(❤️)');
    if (wishlistBtn) {
        const badge = wishlistBtn.querySelector('.badge-count');
        
        if (GlobalState.wishlist.length > 0) {
            if (badge) {
                badge.textContent = GlobalState.wishlist.length;
            } else {
                wishlistBtn.insertAdjacentHTML('beforeend', `<span class="badge-count">${GlobalState.wishlist.length}</span>`);
            }
        } else {
            if (badge) badge.remove();
        }
    }
}

function toggleCart() {
    showNotification('Cart functionality would open here', 'info');
    console.log('Cart items:', GlobalState.cart);
}

function toggleWishlist() {
    showNotification('Wishlist functionality would open here', 'info');
    console.log('Wishlist items:', GlobalState.wishlist);
}

function viewProduct(productId) {
    showNotification(`Viewing product ${productId}`, 'info');
    console.log('View product:', productId);
}

// Banner Slider Functions
function nextSlide() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    
    // Remove active class from current slide and dot
    slides[GlobalState.currentSlide].classList.remove('active');
    dots[GlobalState.currentSlide].classList.remove('active');
    
    // Move to next slide
    GlobalState.currentSlide = (GlobalState.currentSlide + 1) % slides.length;
    
    // Add active class to new slide and dot
    slides[GlobalState.currentSlide].classList.add('active');
    dots[GlobalState.currentSlide].classList.add('active');
}

function previousSlide() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    
    // Remove active class from current slide and dot
    slides[GlobalState.currentSlide].classList.remove('active');
    dots[GlobalState.currentSlide].classList.remove('active');
    
    // Move to previous slide
    GlobalState.currentSlide = (GlobalState.currentSlide - 1 + slides.length) % slides.length;
    
    // Add active class to new slide and dot
    slides[GlobalState.currentSlide].classList.add('active');
    dots[GlobalState.currentSlide].classList.add('active');
}

function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    
    // Remove active class from current slide and dot
    slides[GlobalState.currentSlide].classList.remove('active');
    dots[GlobalState.currentSlide].classList.remove('active');
    
    // Set new slide
    GlobalState.currentSlide = slideIndex;
    
    // Add active class to new slide and dot
    slides[GlobalState.currentSlide].classList.add('active');
    dots[GlobalState.currentSlide].classList.add('active');
}

// Initialize Application
function initializeApp() {
    try {
        // Load data
        GlobalState.products = sampleProducts;
        GlobalState.banners = sampleBanners;
        
        // Render all sections
        renderHeader();
        renderHeroSection();
        renderBannerSlider();
        renderGlobalFeatures();
        renderFlashSale();
        renderCategories();
        renderRecommendedProducts();
        renderTestimonials();
        renderStats();
        renderNewsletter();
        renderFooter();
        
        // Update badges
        updateCartBadge();
        updateWishlistBadge();
        
        console.log('GlobalMart app initialized successfully!');
        
    } catch (error) {
        console.error('Error initializing app:', error);
        showNotification('Error loading application', 'danger');
    }
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Export functions for global access
window.handleSearch = handleSearch;
window.handleNewsletterSubmit = handleNewsletterSubmit;
window.changeLanguage = changeLanguage;
window.changeCurrency = changeCurrency;
window.changeLocation = changeLocation;
window.addToCart = addToCart;
window.toggleWishlistProduct = toggleWishlistProduct;
window.toggleCart = toggleCart;
window.toggleWishlist = toggleWishlist;
window.viewProduct = viewProduct;
window.nextSlide = nextSlide;
window.previousSlide = previousSlide;
window.goToSlide = goToSlide;
