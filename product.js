 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#0EA5E9',
                        secondary: '#64748B'
                    },
                    borderRadius: {
                        'none': '0px',
                        'sm': '4px',
                        DEFAULT: '8px',
                        'md': '12px',
                        'lg': '16px',
                        'xl': '20px',
                        '2xl': '24px',
                        '3xl': '32px',
                        'full': '9999px',
                        'button': '8px'
                    }
                }
            }
        }
           document.addEventListener('DOMContentLoaded', function () {
            // Mock data for products
            const products = [
                {
                    id: 1,
                    name: "Ntronix V-Core P3000x Hybrid Inverter",
                    category: "inverters",
                    image: "https://public.readdy.ai/ai/img_res/a0f9c36b76594ad8a967bf4d40066fd5.jpg",
                    price: 1299.99,
                    rating: 4.8,
                    reviewCount: 124,
                    description: "Advanced hybrid inverter with intelligent power management and seamless grid integration.",
                    specs: {
                        power: "3000W",
                        efficiency: "99%",
                        connectivity: "Wi-Fi, Bluetooth",
                        features: ["Smart Grid Integration", "Mobile App Control", "Battery Management"]
                    }
                },
                {
                    id: 2,
                    name: "EnergyHub 2500 Power Station",
                    category: "power-stations",
                    image: "https://public.readdy.ai/ai/img_res/881a5d26b1ca35989322d35c8e9443c5.jpg",
                    price: 899.99,
                    rating: 4.6,
                    reviewCount: 87,
                    description: "Portable power station with smart connectivity and real-time monitoring capabilities.",
                    specs: {
                        power: "2500W",
                        capacity: "2000Wh",
                        outputs: "AC, USB-C, USB-A, DC",
                        features: ["Fast Charging", "Solar Compatible", "Mobile App Control"]
                    }
                },
                {
                    id: 3,
                    name: "SmartSwitch Pro",
                    category: "switches",
                    image: "https://public.readdy.ai/ai/img_res/9dfa0990a9c7e2bc571d91e32e745035.jpg",
                    price: 79.99,
                    rating: 4.7,
                    reviewCount: 203,
                    description: "Intelligent switch for automated power management and energy optimization.",
                    specs: {
                        compatibility: "All major smart home systems",
                        connectivity: "Wi-Fi, Zigbee",
                        features: ["Voice Control", "Energy Monitoring", "Schedule Setting"]
                    }
                },
                {
                    id: 4,
                    name: "PowerMax 5000 Hybrid Inverter",
                    category: "inverters",
                    image: "https://public.readdy.ai/ai/img_res/a0f9c36b76594ad8a967bf4d40066fd5.jpg",
                    price: 2199.99,
                    rating: 4.9,
                    reviewCount: 76,
                    description: "High-capacity hybrid inverter for commercial and residential applications.",
                    specs: {
                        power: "5000W",
                        efficiency: "99.5%",
                        connectivity: "Wi-Fi, Ethernet",
                        features: ["Advanced Grid Management", "Mobile App Control", "Multiple Battery Support"]
                    }
                },
                {
                    id: 5,
                    name: "EnergyHub 1000 Compact",
                    category: "power-stations",
                    image: "https://public.readdy.ai/ai/img_res/881a5d26b1ca35989322d35c8e9443c5.jpg",
                    price: 599.99,
                    rating: 4.5,
                    reviewCount: 112,
                    description: "Compact portable power station for outdoor activities and emergency backup.",
                    specs: {
                        power: "1000W",
                        capacity: "800Wh",
                        outputs: "AC, USB-C, USB-A",
                        features: ["Lightweight Design", "Mobile App Control", "LED Light"]
                    }
                },
                {
                    id: 6,
                    name: "SmartSwitch Dimmer",
                    category: "switches",
                    image: "https://public.readdy.ai/ai/img_res/9dfa0990a9c7e2bc571d91e32e745035.jpg",
                    price: 89.99,
                    rating: 4.4,
                    reviewCount: 156,
                    description: "Smart dimmer switch with precise lighting control and energy monitoring.",
                    specs: {
                        compatibility: "All major smart home systems",
                        connectivity: "Wi-Fi",
                        features: ["Dimming Control", "Voice Control", "Energy Monitoring"]
                    }
                },
                {
                    id: 7,
                    name: "Solar Charge Controller Pro",
                    category: "accessories",
                    image: "https://public.readdy.ai/ai/img_res/881a5d26b1ca35989322d35c8e9443c5.jpg",
                    price: 249.99,
                    rating: 4.7,
                    reviewCount: 93,
                    description: "Advanced solar charge controller for optimal solar energy harvesting.",
                    specs: {
                        capacity: "60A",
                        compatibility: "12V/24V/48V systems",
                        features: ["MPPT Technology", "Mobile App Control", "Temperature Compensation"]
                    }
                },
                {
                    id: 8,
                    name: "PowerMax 1500 Mini Inverter",
                    category: "inverters",
                    image: "https://public.readdy.ai/ai/img_res/a0f9c36b76594ad8a967bf4d40066fd5.jpg",
                    price: 799.99,
                    rating: 4.6,
                    reviewCount: 68,
                    description: "Compact hybrid inverter for small to medium power requirements.",
                    specs: {
                        power: "1500W",
                        efficiency: "98%",
                        connectivity: "Wi-Fi",
                        features: ["Grid Integration", "Mobile App Control", "Compact Design"]
                    }
                },
                {
                    id: 9,
                    name: "Smart Energy Monitor",
                    category: "accessories",
                    image: "https://public.readdy.ai/ai/img_res/881a5d26b1ca35989322d35c8e9443c5.jpg",
                    price: 129.99,
                    rating: 4.3,
                    reviewCount: 47,
                    description: "Real-time energy monitoring device for whole-home power management.",
                    specs: {
                        compatibility: "All Ntronix products",
                        connectivity: "Wi-Fi",
                        features: ["Real-time Monitoring", "Energy Usage Reports", "Cost Tracking"]
                    }
                }
            ];
            // Mock data for comparison items
            const compareItems = [
                {
                    id: 1,
                    name: "PowerMax 3000 Hybrid Inverter",
                    image: "https://public.readdy.ai/ai/img_res/a0f9c36b76594ad8a967bf4d40066fd5.jpg"
                },
                {
                    id: 4,
                    name: "PowerMax 5000 Hybrid Inverter",
                    image: "https://public.readdy.ai/ai/img_res/a0f9c36b76594ad8a967bf4d40066fd5.jpg"
                },
                {
                    id: 8,
                    name: "PowerMax 1500 Mini Inverter",
                    image: "https://public.readdy.ai/ai/img_res/a0f9c36b76594ad8a967bf4d40066fd5.jpg"
                }
            ];
            // Render products
            const productGrid = document.getElementById('productGrid');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow';
                // Generate star rating HTML
                let starsHtml = '';
                for (let i = 1; i <= 5; i++) {
                    if (i <= Math.floor(product.rating)) {
                        starsHtml += `<i class="ri-star-fill star filled"></i>`;
                    } else if (i - 0.5 <= product.rating) {
                        starsHtml += `<i class="ri-star-half-fill star filled"></i>`;
                    } else {
                        starsHtml += `<i class="ri-star-line star"></i>`;
                    }
                }
                productCard.innerHTML = `
<div class="relative">
<img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover object-top">
<button class="quick-view-btn absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md opacity-0 transition-opacity" data-product-id="${product.id}">
<i class="ri-eye-line"></i>
</button>
<button class="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md">
<i class="ri-heart-line"></i>
</button>
</div>
<div class="p-4">
<div class="flex items-center gap-1 text-sm mb-1 star-rating">
${starsHtml}
<span class="text-gray-600 ml-1">(${product.reviewCount})</span>
</div>
<h3 class="font-semibold text-gray-900 mb-1">${product.name}</h3>
<p class="text-sm text-gray-600 mb-3 line-clamp-2">${product.description}</p>
<div class="flex flex-wrap gap-2 mb-4">
${Object.values(product.specs).slice(0, 2).map(spec =>
                    `<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">${spec}</span>`
                ).join('')}
</div>
<div class="flex items-center justify-between">
<div class="text-primary font-semibold">$${product.price.toFixed(2)}</div>
<div class="flex items-center gap-2">
<div class="custom-checkbox" data-compare="${product.id}"></div>
<span class="text-xs text-gray-600">Compare</span>
</div>
</div>
<button class="w-full bg-primary text-white py-2 !rounded-button hover:bg-primary/90 transition-colors whitespace-nowrap cursor-pointer mt-4">
Add to Cart
</button>
</div>
`;
                productGrid.appendChild(productCard);
            });
            // Render comparison items
            const compareItemsContainer = document.getElementById('compareItems');
            compareItems.forEach(item => {
                const compareItem = document.createElement('div');
                compareItem.className = 'bg-gray-50 rounded-lg p-3 flex items-center gap-3';
                compareItem.innerHTML = `
<img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
<div class="flex-1">
<h4 class="font-medium text-sm">${item.name}</h4>
</div>
<button class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-700" data-remove-compare="${item.id}">
<i class="ri-close-line"></i>
</button>
`;
                compareItemsContainer.appendChild(compareItem);
            });
            // Show comparison bar
            document.getElementById('comparisonBar').classList.add('active');
            // Mobile menu functionality
            const openMenuBtn = document.getElementById('openMenu');
            const closeMenuBtn = document.getElementById('closeMenu');
            const mobileMenu = document.getElementById('mobileMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            function openMenu() {
                mobileMenu.classList.add('active');
                menuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            function closeMenu() {
                mobileMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            openMenuBtn.addEventListener('click', openMenu);
            closeMenuBtn.addEventListener('click', closeMenu);
            menuOverlay.addEventListener('click', closeMenu);
            // Quick view modal functionality
            const quickViewBtns = document.querySelectorAll('.quick-view-btn');
            const quickViewModal = document.getElementById('quickViewModal');
            const modalOverlay = document.getElementById('modalOverlay');
            const closeModal = document.getElementById('closeModal');
            const modalContent = document.getElementById('modalContent');
            function openModal(productId) {
                const product = products.find(p => p.id === parseInt(productId));
                if (!product) return;
                // Generate star rating HTML
                let starsHtml = '';
                for (let i = 1; i <= 5; i++) {
                    if (i <= Math.floor(product.rating)) {
                        starsHtml += `<i class="ri-star-fill star filled"></i>`;
                    } else if (i - 0.5 <= product.rating) {
                        starsHtml += `<i class="ri-star-half-fill star filled"></i>`;
                    } else {
                        starsHtml += `<i class="ri-star-line star"></i>`;
                    }
                }
                modalContent.innerHTML = `
<div class="grid md:grid-cols-2 gap-8">
<div>
<img src="${product.image}" alt="${product.name}" class="w-full rounded-lg">
</div>
<div>
<h2 class="text-2xl font-bold text-gray-900 mb-2">${product.name}</h2>
<div class="flex items-center gap-1 text-sm mb-4 star-rating">
${starsHtml}
<span class="text-gray-600 ml-1">(${product.reviewCount} reviews)</span>
</div>
<div class="text-2xl text-primary font-semibold mb-4">$${product.price.toFixed(2)}</div>
<p class="text-gray-600 mb-6">${product.description}</p>
<div class="mb-6">
<h3 class="font-semibold mb-3">Specifications</h3>
<div class="space-y-2">
${Object.entries(product.specs).map(([key, value]) =>
                    `<div class="flex">
<div class="w-1/3 text-gray-600">${key.charAt(0).toUpperCase() + key.slice(1)}</div>
<div class="w-2/3 font-medium">${value}</div>
</div>`
                ).join('')}
</div>
</div>
<div class="mb-6">
<h3 class="font-semibold mb-3">Key Features</h3>
<ul class="space-y-2">
${product.specs.features.map(feature =>
                    `<li class="flex items-center gap-2">
<i class="ri-check-line text-primary"></i>
<span>${feature}</span>
</li>`
                ).join('')}
</ul>
</div>
<div class="flex items-center gap-4 mb-6">
<div class="flex items-center border border-gray-200 rounded-lg">
<button class="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700">
<i class="ri-subtract-line"></i>
</button>
<input type="text" value="1" class="w-12 h-10 text-center border-none">
<button class="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700">
<i class="ri-add-line"></i>
</button>
</div>
<button class="flex-1 bg-primary text-white py-2 !rounded-button hover:bg-primary/90 transition-colors whitespace-nowrap cursor-pointer">
Add to Cart
</button>
</div>
<div class="flex items-center gap-6">
<button class="flex items-center gap-2 text-gray-600 hover:text-primary">
<i class="ri-heart-line"></i>
<span>Add to Wishlist</span>
</button>
<button class="flex items-center gap-2 text-gray-600 hover:text-primary">
<i class="ri-scales-3-line"></i>
<span>Add to Compare</span>
</button>
</div>
</div>
</div>
`;
                quickViewModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
            function closeModalFunc() {
                quickViewModal.classList.add('hidden');
                document.body.style.overflow = '';
            }
            quickViewBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    openModal(btn.getAttribute('data-product-id'));
                });
            });
            closeModal.addEventListener('click', closeModalFunc);
            modalOverlay.addEventListener('click', closeModalFunc);
            // Custom checkbox functionality
            const customCheckboxes = document.querySelectorAll('.custom-checkbox');
            customCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('click', function () {
                    this.classList.toggle('checked');
                });
            });
            // Custom radio functionality
            const customRadios = document.querySelectorAll('.custom-radio');
            customRadios.forEach(radio => {
                radio.addEventListener('click', function () {
                    const category = this.getAttribute('data-category');
                    const rating = this.getAttribute('data-rating');
                    if (category) {
                        document.querySelectorAll('.custom-radio[data-category]').forEach(r => {
                            r.classList.remove('checked');
                        });
                    }
                    if (rating) {
                        document.querySelectorAll('.custom-radio[data-rating]').forEach(r => {
                            r.classList.remove('checked');
                        });
                    }
                    this.classList.add('checked');
                });
            });
            // Back to top button
            const backToTopBtn = document.getElementById('backToTop');
            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            backToTopBtn.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            // Price range slider functionality
            const priceRangeSlider = document.getElementById('priceRangeSlider');
            const priceRangeValue = document.getElementById('priceRangeValue');

            priceRangeSlider.addEventListener('input', function () {
                const value = this.value;
                priceRangeValue.textContent = `$${Number(value).toLocaleString()}`;
                filterProductsByPrice(value);
            });

            function filterProductsByPrice(maxPrice) {
                const productCards = document.querySelectorAll('.product-card');

                productCards.forEach(card => {
                    const priceElement = card.querySelector('.text-primary.font-semibold');
                    const price = parseFloat(priceElement.textContent.replace('$', ''));

                    if (price <= maxPrice) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Update product count
                const visibleProducts = document.querySelectorAll('.product-card[style="display: block;"]').length;
                const totalProducts = document.querySelectorAll('.product-card').length;
                const productCountElement = document.querySelector('.text-sm.text-gray-600');
                if (productCountElement) {
                    productCountElement.innerHTML = `Showing <span class="font-medium">1-${visibleProducts}</span> of <span class="font-medium">${totalProducts}</span> products`;
                }
            }

            // Clear comparison
            const clearCompareBtn = document.getElementById('clearCompare');
            clearCompareBtn.addEventListener('click', function () {
                document.getElementById('comparisonBar').classList.remove('active');
                document.querySelectorAll('.custom-checkbox[data-compare]').forEach(checkbox => {
                    checkbox.classList.remove('checked');
                });
            });
            // Remove comparison item
            const removeCompareButtons = document.querySelectorAll('[data-remove-compare]');
            removeCompareButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const itemId = this.getAttribute('data-remove-compare');
                    this.closest('.bg-gray-50').remove();
                    const remainingItems = document.querySelectorAll('#compareItems > div').length;
                    if (remainingItems === 0) {
                        document.getElementById('comparisonBar').classList.remove('active');
                    }
                    document.querySelector(`.custom-checkbox[data-compare="${itemId}"]`)?.classList.remove('checked');
                });
            });
        });