// DEED Token Website JavaScript
// Interactive functionality and animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initCounterAnimations();
    initChartSimulation();
    initInteractiveElements();
    initMobileMenu();
    initSmoothScrolling();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 15, 35, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special handling for step cards
                if (entry.target.classList.contains('step-card')) {
                    const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 200;
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, delay);
                }
                
                // Special handling for timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 300;
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, delay);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.step-card, .timeline-item, .transparency-card, .vision-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Counter animations for community stats
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = counter.textContent;
        const numericValue = parseFloat(target.replace(/[^\d.]/g, ''));
        const suffix = target.replace(/[\d.,]/g, '');
        const duration = 2000;
        const increment = numericValue / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < numericValue) {
                if (target.includes('K')) {
                    counter.textContent = (current / 1000).toFixed(1) + 'K';
                } else if (target.includes('$')) {
                    counter.textContent = '$' + Math.floor(current) + 'K';
                } else {
                    counter.textContent = Math.floor(current).toLocaleString();
                }
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Chart simulation
function initChartSimulation() {
    const chartLine = document.querySelector('.chart-line');
    const priceElement = document.querySelector('.stat-value');
    const changeElement = document.querySelector('.stat-value.positive');
    
    if (!chartLine || !priceElement || !changeElement) return;
    
    let price = 0.0023;
    let change = 24.7;
    
    const updateChart = () => {
        // Simulate price fluctuation
        const fluctuation = (Math.random() - 0.5) * 0.0001;
        price = Math.max(0.0001, price + fluctuation);
        
        // Update change percentage
        change = change + (Math.random() - 0.5) * 2;
        change = Math.max(-50, Math.min(100, change));
        
        // Update display
        priceElement.textContent = `$${price.toFixed(4)}`;
        changeElement.textContent = `${change > 0 ? '+' : ''}${change.toFixed(1)}%`;
        changeElement.className = change > 0 ? 'stat-value positive' : 'stat-value negative';
        
        // Animate chart line
        const intensity = Math.abs(change) / 50;
        chartLine.style.boxShadow = `0 0 ${20 + intensity * 30}px rgba(99, 102, 241, ${0.3 + intensity * 0.4})`;
    };
    
    // Update every 3 seconds
    setInterval(updateChart, 3000);
}

// Interactive elements
function initInteractiveElements() {
    // Buy button functionality - Let them work as normal links
    // Removed JavaScript interference - buttons now work as direct links to pump.fun
    
    // Transparency buttons
    const transparencyButtons = document.querySelectorAll('.transparency-card button');
    transparencyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const cardTitle = button.closest('.transparency-card').querySelector('h3').textContent;
            showNotification(`📊 Opening ${cardTitle}...`, 'info');
        });
    });
    
    // Social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = link.classList.contains('telegram') ? 'Telegram' : 
                           link.classList.contains('twitter') ? 'Twitter' : 'Discord';
            showNotification(`🔗 Opening ${platform}...`, 'info');
        });
    });
    
    // Floating houses animation enhancement
    const houses = document.querySelectorAll('.house');
    houses.forEach((house, index) => {
        house.addEventListener('mouseover', () => {
            house.style.transform = 'scale(1.5) rotate(15deg)';
            house.style.opacity = '0.3';
            house.style.transition = 'all 0.3s ease';
        });
        
        house.addEventListener('mouseout', () => {
            house.style.transform = 'scale(1) rotate(0deg)';
            house.style.opacity = '0.1';
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
        color: var(--text-primary);
        box-shadow: var(--shadow-xl);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    // Type-specific styling
    if (type === 'success') {
        notification.style.borderColor = 'var(--success-color)';
        notification.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.3)';
    } else if (type === 'info') {
        notification.style.borderColor = 'var(--primary-color)';
        notification.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.3)';
    }
    
    // Close button styling
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 4 seconds
    const autoRemove = setTimeout(() => {
        removeNotification(notification);
    }, 4000);
    
    // Manual close
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoRemove);
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Add ripple effect styles
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    button {
        position: relative;
        overflow: hidden;
    }
    
    /* Mobile menu styles */
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex !important;
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            height: calc(100vh - 80px);
            background: var(--background-color);
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: var(--spacing-3xl);
            gap: var(--spacing-xl);
            backdrop-filter: blur(20px);
            border-top: 1px solid var(--border-color);
        }
        
        .nav-menu.active .nav-link {
            font-size: var(--font-size-xl);
            padding: var(--spacing-lg);
        }
        
        .nav-menu.active .buy-button {
            margin-top: var(--spacing-xl);
            padding: var(--spacing-lg) var(--spacing-2xl);
            font-size: var(--font-size-lg);
        }
    }
`;

document.head.appendChild(rippleStyles);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const notification = document.querySelector('.notification');
        if (notification) {
            removeNotification(notification);
        }
        
        // Close mobile menu
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// Performance optimization - lazy load animations
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!prefersReducedMotion.matches) {
    // Add parallax effect to floating houses
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const houses = document.querySelectorAll('.house');
        
        houses.forEach((house, index) => {
            const speed = 0.1 + (index * 0.05);
            house.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.01}deg)`;
        });
    });
}

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loader-content"><span class="loader-icon">🏡</span><p>Loading DEED...</p></div>';
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--background-color);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        transition: opacity 0.5s ease;
    `;
    
    const loaderContent = loader.querySelector('.loader-content');
    loaderContent.style.cssText = `
        text-align: center;
        animation: pulse 1.5s ease-in-out infinite;
    `;
    
    const loaderIcon = loader.querySelector('.loader-icon');
    loaderIcon.style.cssText = `
        font-size: 4rem;
        display: block;
        margin-bottom: 1rem;
        animation: float 2s ease-in-out infinite;
    `;
    
    // Remove loader after everything is loaded
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 500);
    }, 1000);
});

// Console message for developers
console.log(`
🏡 DEED Token Website
From Memes to Mansions - Claim Your DEED!

Built with modern web technologies:
- Vanilla JavaScript for performance
- CSS Grid & Flexbox for layout
- CSS Custom Properties for theming
- Intersection Observer for animations
- Responsive design with mobile-first approach

Ready for deployment on Railway! 🚀
`);
