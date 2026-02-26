// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
});

// ============================================
// ACTIVE NAV LINK
// ============================================

const currentLocation = location.pathname;
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation || 
        (currentLocation === '/' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate form
        if (!contactForm.checkValidity() === false) {
            e.stopPropagation();
        }
        
        contactForm.classList.add('was-validated');
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                contactForm.style.display = 'none';
                successMessage.style.display = 'block';
            }
            
            // Reset form after 3 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                contactForm.style.display = 'block';
                successMessage.style.display = 'none';
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 3000);
        } catch (error) {
            console.error('Form submission error:', error);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.service-card, .values-card, .stat-item').forEach(el => {
    observer.observe(el);
});

// ============================================
// NAVBAR COLLAPSE ON LINK CLICK
// ============================================

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
        }
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button functionality
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('[onclick="scrollToTop()"]');
    if (scrollBtn) {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

// ============================================
// FORM VALIDATION
// ============================================

(() => {
    'use strict';
    window.addEventListener('load', () => {
        let forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms).forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// ============================================
// ACTIVE TAB HANDLING FOR SERVICES
// ============================================

const serviceTabs = document.querySelectorAll('[data-bs-toggle="tab"]');
serviceTabs.forEach(tab => {
    tab.addEventListener('show.bs.tab', function() {
        document.querySelectorAll('[data-bs-toggle="tab"]').forEach(t => {
            t.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// ============================================
// MOBILE MENU OVERLAY
// ============================================

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
            navbarToggler.click();
        }
    }
});

// ============================================
// LAZY LOADING IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// PAGE READY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('EXERON website loaded successfully');
    
    // Add any initialization code here
    initializeAnimations();
});

function initializeAnimations() {
    // Add animation classes to elements
    document.querySelectorAll('.hero-content').forEach(el => {
        el.classList.add('animate-slide-up');
    });
}

// ============================================
// UTILITY: GET CURRENT YEAR FOR FOOTER
// ============================================

function updateYear() {
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
}

updateYear();
