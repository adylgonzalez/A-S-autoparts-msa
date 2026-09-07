// Product Data
const products = [
    {
        name: "Brake Pads Set",
        price: 49.99,
        category: "Brakes",
        image: "🔧"
    },
    {
        name: "Oil Filter",
        price: 12.99,
        category: "Filters",
        image: "🔩"
    },
    {
        name: "Spark Plugs (4 Pack)",
        price: 24.99,
        category: "Electrical",
        image: "⚡"
    },
    {
        name: "Air Filter",
        price: 18.99,
        category: "Filters",
        image: "💨"
    },
    {
        name: "Alternator",
        price: 189.99,
        category: "Electrical",
        image: "🔋"
    },
    {
        name: "Timing Belt Kit",
        price: 129.99,
        category: "Engine",
        image: "⛓️"
    },
    {
        name: "Water Pump",
        price: 79.99,
        category: "Cooling",
        image: "💧"
    },
    {
        name: "Shock Absorber",
        price: 89.99,
        category: "Suspension",
        image: "🛠️"
    }
];

// Cart functionality
let cart = [];

// Load Products
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-category">${product.category}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${index})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Add to Cart
function addToCart(productIndex) {
    const product = products[productIndex];
    cart.push(product);
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const cartElement = document.querySelector('.cart span');
    cartElement.textContent = `Cart (${cart.length})`;
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.5s, slideOut 0.5s 2.5s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto slide
setInterval(() => {
    changeSlide(1);
}, 5000);

// Event Listeners
document.querySelector('.slider-btn.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.slider-btn.next').addEventListener('click', () => changeSlide(1));

// Mobile Menu
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search functionality
document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.category.toLowerCase().includes(searchTerm)
    );
    
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No products found</p>';
    } else {
        filteredProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">${product.image}</div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-category">${product.category}</div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" onclick="addToCart(${products.indexOf(product)})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }
});

// Initialize
loadProducts();