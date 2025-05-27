    
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
            // Mobile menu functionality
            const openMenuBtn = document.getElementById('openMenu');
            const closeMenuBtn = document.getElementById('closeMenu');
            const mobileMenu = document.getElementById('mobileMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
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
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    closeMenu();
                });
            });
            // Fade in animations for sections
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const elements = entry.target.querySelectorAll('.fade-in-section');
                        elements.forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('fade-in');
                            }, index * 150);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
            // Add fade-in-section class to elements that should animate on scroll
            document.querySelectorAll('section').forEach(section => {
                const headings = section.querySelectorAll('h2, h3');
                const paragraphs = section.querySelectorAll('p:not(.fade-in)');
                const cards = section.querySelectorAll('.bg-white.rounded-xl, .bg-white.rounded-2xl');

                [...headings, ...paragraphs, ...cards].forEach(el => {
                    if (!el.classList.contains('fade-in')) {
                        el.classList.add('fade-in-section');
                    }
                });
            });
            // Chart initialization
            const chart = echarts.init(document.getElementById('techChart'));
            const option = {
                animation: false,
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: '#eee',
                    borderWidth: 1,
                    textStyle: {
                        color: '#1f2937'
                    }
                },
                grid: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 60
                },
                xAxis: {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    axisLine: {
                        lineStyle: {
                            color: '#e5e7eb'
                        }
                    },
                    axisLabel: {
                        color: '#1f2937'
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#e5e7eb'
                        }
                    },
                    axisLabel: {
                        color: '#1f2937'
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f3f4f6'
                        }
                    }
                },
                series: [
                    {
                        name: 'Energy Efficiency',
                        type: 'line',
                        smooth: true,
                        data: [85, 88, 90, 93, 95, 98],
                        lineStyle: {
                            color: 'rgba(87, 181, 231, 1)'
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(87, 181, 231, 0.3)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(87, 181, 231, 0.1)'
                                }
                            ])
                        },
                        symbol: 'none'
                    }
                ]
            };
            chart.setOption(option);
            window.addEventListener('resize', function () {
                chart.resize();
            });
            // Contact form submission
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData.entries());
                const successMessage = document.createElement('div');
                successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50';
                successMessage.textContent = 'Message sent successfully!';
                document.body.appendChild(successMessage);
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
                contactForm.reset();
            });
        });
    
  