// Product Data
const products = [
    // Brake Pads for Specific Cars
    {
        name: "Brake Pads - Toyota Camry 2018-2023",
        price: 39.99,
        category: "Brakes",
        image: "🔧",
        vehicle: "Toyota Camry",
        year: "2018-2023",
        brand: "BOSCH",
        sku: "BP-TC-1823"
    },
    {
        name: "Brake Pads - Honda Civic 2016-2021",
        price: 34.99,
        category: "Brakes",
        image: "🔧",
        vehicle: "Honda Civic",
        year: "2016-2021",
        brand: "ACDelco",
        sku: "BP-HC-1621"
    },
    {
        name: "Brake Pads - Ford F-150 2015-2020",
        price: 44.99,
        category: "Brakes",
        image: "🔧",
        vehicle: "Ford F-150",
        year: "2015-2020",
        brand: "MOOG",
        sku: "BP-FF-1520"
    },
    {
        name: "Brake Pads - BMW 3 Series 2014-2019",
        price: 59.99,
        category: "Brakes",
        image: "🔧",
        vehicle: "BMW 3 Series",
        year: "2014-2019",
        brand: "Brembo",
        sku: "BP-B3-1419"
    },
    {
        name: "Brake Pads - Mercedes C-Class 2015-2021",
        price: 64.99,
        category: "Brakes",
        image: "🔧",
        vehicle: "Mercedes C-Class",
        year: "2015-2021",
        brand: "ATE",
        sku: "BP-MC-1521"
    },
    {
        name: "Brake Pads - Nissan Altima 2013-2018",
        price: 29.99,
        category: "Brakes",
        image: "🔧",
        vehicle: "Nissan Altima",
        year: "2013-2018",
        brand: "Akebono",
        sku: "BP-NA-1318"
    },
    {
        name: "Brake Rotors - Toyota Camry 2018-2023",
        price: 79.99,
        category: "Brakes",
        image: "🛞",
        vehicle: "Toyota Camry",
        year: "2018-2023",
        brand: "Brembo",
        sku: "BR-TC-1823"
    },
    {
        name: "Brake Rotors - Honda Civic 2016-2021",
        price: 69.99,
        category: "Brakes",
        image: "🛞",
        vehicle: "Honda Civic",
        year: "2016-2021",
        brand: "Power Stop",
        sku: "BR-HC-1621"
    },
    {
        name: "Complete Strut Assembly - Toyota RAV4 2013-2018",
        price: 149.99,
        category: "Suspension",
        image: "🔩",
        vehicle: "Toyota RAV4",
        year: "2013-2018",
        brand: "KYB",
        sku: "CSA-TR-1318"
    },
    {
        name: "Control Arm Kit - Honda CR-V 2012-2016",
        price: 119.99,
        category: "Suspension",
        image: "⚙️",
        vehicle: "Honda CR-V",
        year: "2012-2016",
        brand: "MOOG",
        sku: "CAK-HC-1216"
    },
    {
        name: "Oil Filter - Universal",
        price: 12.99,
        category: "Filters",
        image: "🔩",
        vehicle: "Universal",
        year: "All Years",
        brand: "FRAM",
        sku: "OF-UNI-001"
    },
    {
        name: "Spark Plugs (4 Pack) - Universal",
        price: 24.99,
        category: "Electrical",
        image: "⚡",
        vehicle: "Universal",
        year: "All Years",
        brand: "NGK",
        sku: "SP-UNI-004"
    },
    {
        name: "Air Filter - Universal",
        price: 18.99,
        category: "Filters",
        image: "💨",
        vehicle: "Universal",
        year: "All Years",
        brand: "K&N",
        sku: "AF-UNI-001"
    },
    {
        name: "Alternator - Universal",
        price: 189.99,
        category: "Electrical",
        image: "🔋",
        vehicle: "Universal",
        year: "All Years",
        brand: "DENSO",
        sku: "ALT-UNI-001"
    },
    {
        name: "Timing Belt Kit - Universal",
        price: 129.99,
        category: "Engine",
        image: "⛓️",
        vehicle: "Universal",
        year: "All Years",
        brand: "Gates",
        sku: "TBK-UNI-001"
    },
    {
        name: "Water Pump - Universal",
        price: 79.99,
        category: "Cooling",
        image: "💧",
        vehicle: "Universal",
        year: "All Years",
        brand: "AISIN",
        sku: "WP-UNI-001"
    },
    {
        name: "Shock Absorber Set - Ford F-150 2015-2020",
        price: 189.99,
        category: "Suspension",
        image: "🛠️",
        vehicle: "Ford F-150",
        year: "2015-2020",
        brand: "Bilstein",
        sku: "SAS-FF-1520"
    },
    {
        name: "Sway Bar Link Set - Chevrolet Silverado 2014-2019",
        price: 39.99,
        category: "Suspension",
        image: "🔗",
        vehicle: "Chevrolet Silverado",
        year: "2014-2019",
        brand: "MOOG",
        sku: "SBL-CS-1419"
    },
    {
        name: "Coil Spring Set - Jeep Wrangler 2018-2023",
        price: 159.99,
        category: "Suspension",
        image: "🌀",
        vehicle: "Jeep Wrangler",
        year: "2018-2023",
        brand: "Rough Country",
        sku: "CSS-JW-1823"
    },
    {
        name: "Air Suspension Kit - Audi A4 2017-2022",
        price: 899.99,
        category: "Suspension",
        image: "🎈",
        vehicle: "Audi A4",
        year: "2017-2022",
        brand: "Air Lift",
        sku: "ASK-AA-1722"
    },
    // Additional Toyota Parts (Popular in Kenya)
    {
        name: "Brake Pads - Toyota Land Cruiser 2010-2020",
        price: 54.99,
        category: "Brakes",
        image: "🔧",
        vehicle: "Toyota Land Cruiser",
        year: "2010-2020",
        brand: "BOSCH",
        sku: "BP-TL-1020"
    },
    {
        name: "Brake Pads - Toyota Hilux 2015-2023",
        price: 44.99,
        category: "Brakes",
        image: "🔧",
        vehicle: "Toyota Hilux",
        year: "2015-2023",
        brand: "Akebono",
        sku: "BP-TH-1523"
    },
    {
        name: "Oil Filter - Toyota Land Cruiser",
        price: 15.99,
        category: "Filters",
        image: "🔩",
        vehicle: "Toyota Land Cruiser",
        year: "2010-2020",
        brand: "TOYOTA Genuine",
        sku: "OF-TL-1020"
    },
    {
        name: "Shock Absorber - Toyota Hilux 2015-2023",
        price: 129.99,
        category: "Suspension",
        image: "🛠️",
        vehicle: "Toyota Hilux",
        year: "2015-2023",
        brand: "KYB",
        sku: "SA-TH-1523"
    }
];

// Vehicle Models Database
const vehicleModels = {
    "Toyota": ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma", "4Runner", "Land Cruiser", "Hilux", "Prado", "Fortuner"],
    "Honda": ["Civic", "Accord", "CR-V", "Pilot", "Odyssey", "Fit"],
    "Ford": ["F-150", "Mustang", "Explorer", "Escape", "Focus", "Ranger"],
    "BMW": ["3 Series", "5 Series", "X3", "X5", "M3", "X1"],
    "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "A-Class"],
    "Nissan": ["Altima", "Sentra", "Rogue", "Pathfinder", "Maxima", "X-Trail"],
    "Mitsubishi": ["Lancer", "Pajero", "Outlander", "ASX", "Triton"],
    "Mazda": ["Mazda3", "Mazda6", "CX-5", "CX-9", "BT-50"],
    "Subaru": ["Outback", "Forester", "Impreza", "Crosstrek", "Legacy", "WRX"],
    "Volkswagen": ["Golf", "Passat", "Tiguan", "Polo", "Touareg"],
    "Land Rover": ["Defender", "Discovery", "Range Rover", "Freelander"],
    "Isuzu": ["D-Max", "MU-X", "Trooper"]
};

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
                <div class="product-vehicle">
                    <i class="fas fa-car"></i> ${product.vehicle} (${product.year})
                </div>
                <div class="product-brand">${product.brand}</div>
                <div class="product-sku">SKU: ${product.sku}</div>
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

// Vehicle Selector - Update Models
document.getElementById('vehicleMake').addEventListener('change', function() {
    const make = this.value;
    const modelSelect = document.getElementById('vehicleModel');
    modelSelect.innerHTML = '<option value="">Select Model</option>';
    
    if (make && vehicleModels[make]) {
        vehicleModels[make].forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
});

// Find Parts Function
function findParts() {
    const year = document.getElementById('vehicleYear').value;
    const make = document.getElementById('vehicleMake').value;
    const model = document.getElementById('vehicleModel').value;
    
    if (!year || !make || !model) {
        alert('Please select year, make, and model');
        return;
    }
    
    // Create the vehicle string to search for
    const vehicleSearch = make + ' ' + model;
    
    // Filter products for this vehicle or universal parts
    const vehicleProducts = products.filter(product => {
        if (product.vehicle === "Universal") {
            return true;
        }
        return product.vehicle && product.vehicle.includes(vehicleSearch);
    });
    
    // Display the filtered products
    displayFilteredProducts(vehicleProducts, `Parts for ${year} ${make} ${model}`);
    
    // Scroll to products section
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

// Display Filtered Products
function displayFilteredProducts(productList, title) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    // Create title element
    const heading = document.createElement('h3');
    heading.style.cssText = 'grid-column: 1/-1; text-align: center; color: #1a237e; margin-bottom: 20px;';
    heading.textContent = title;
    productGrid.appendChild(heading);
    
    if (productList.length === 0) {
        const noProducts = document.createElement('p');
        noProducts.style.cssText = 'text-align: center; grid-column: 1/-1;';
        noProducts.textContent = 'No parts found. Please try different vehicle selection or call ADIL: 0713349554 for assistance.';
        productGrid.appendChild(noProducts);
        return;
    }
    
    productList.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        const originalIndex = products.indexOf(product);
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-vehicle">
                    <i class="fas fa-car"></i> ${product.vehicle} (${product.year})
                </div>
                <div class="product-brand">${product.brand}</div>
                <div class="product-sku">SKU: ${product.sku}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${originalIndex})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Search functionality
function searchProducts() {
    const searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.category.toLowerCase().includes(searchTerm) ||
        (product.vehicle && product.vehicle.toLowerCase().includes(searchTerm)) ||
        (product.brand && product.brand.toLowerCase().includes(searchTerm))
    );
    
    displayFilteredProducts(filteredProducts, `Search results for: "${searchTerm}"`);
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

// Search button click
document.querySelector('.search-bar button').addEventListener('click', searchProducts);

// Search on Enter key
document.querySelector('.search-bar input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchProducts();
    }
});

// Category Shop Now buttons
function shopByCategory(categoryName) {
    let categoryProducts = [];
    
    if (categoryName === 'Brakes') {
        categoryProducts = products.filter(product => 
            product.category === 'Brakes'
        );
    } else if (categoryName === 'Suspension') {
        categoryProducts = products.filter(product => 
            product.category === 'Suspension'
        );
    } else if (categoryName === 'Filters') {
        categoryProducts = products.filter(product => 
            product.category === 'Filters'
        );
    } else {
        categoryProducts = products.filter(product => 
            product.category === categoryName
        );
    }
    
    displayFilteredProducts(categoryProducts, `${categoryName} Products`);
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .whatsapp-float {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #25D366;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        z-index: 1000;
        transition: transform 0.3s;
    }
    
    .whatsapp-float:hover {
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);

// Initialize
loadProducts();
