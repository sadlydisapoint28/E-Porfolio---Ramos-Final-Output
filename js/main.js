// Main JavaScript - Core Functionality Only
// Health Portfolio by Gabriel Ramos

// Global Variables
let currentModalIndex = 0;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLoading();
    initializeNavigation();
    initializeModalSystem();
    initializeAnimations();
    initializeInteractiveContent();
    handleMissingElements();
});

// Loading Screen
function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    
    if (!loadingScreen) {
        console.warn('Loading screen element not found');
        return;
    }

    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

// Navigation System
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
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
}

// Modal System
function initializeModalSystem() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');

    if (!modal || !modalBody) {
        console.warn('Modal elements not found. Modal functionality will be limited.');
        return;
    }

    // Close modal when clicking X
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }

    // Close modal when clicking outside
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }

    // Make functions globally accessible
    window.openModal = function(content) {
        if (!modal || !modalBody) {
            console.error('Modal elements not available');
            return;
        }

        modalBody.innerHTML = content;
        modal.style.display = 'flex';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // Initialize any interactive elements in the modal
        initializeModalInteractions();
    };

    window.closeModal = closeModal;
}

// Interactive Content System
function initializeInteractiveContent() {
    // Make card links clickable
    document.querySelectorAll('.card-link:not(.about-me-link):not(.advocacy-link):not(.food-log-link):not(.pe-log-link):not(.cosina-link):not(.trivia-link):not(.reflection-link)').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('href').substring(1);
            openDetailedContent(section);
        });
    });
}

// Detailed Content System
function openDetailedContent(section) {
    let content = '';
    
    switch(section) {
        case 'about':
            content = getAboutContent();
            break;
        case 'portfolio':
            content = getPortfolioContent();
            break;
        case 'contact':
            content = getContactContent();
            break;
        default:
            content = '<h2>Content not found</h2><p>The requested content could not be loaded.</p>';
    }
    
    openModal(content);
}

// Content Generators
function getAboutContent() {
    return `
        <div class="modal-header">
            <h2 class="modal-title">About Gabriel Ramos</h2>
            <p class="modal-subtitle">1st Year AB-Political Science Student</p>
        </div>
        <div class="modal-section">
            <p>Hello! I'm Gabriel Ramos, a first-year AB-Political Science student at West Visayas State University. This health portfolio represents my journey towards better wellness and healthy living.</p>
            <p>As someone who spends most of my time reading and studying, I've learned the importance of maintaining a balanced lifestyle that includes proper nutrition, regular physical activity, and mental wellness.</p>
        </div>
    `;
}

function getPortfolioContent() {
    return `
        <div class="modal-header">
            <h2 class="modal-title">Health Portfolio</h2>
            <p class="modal-subtitle">My Journey to Wellness</p>
        </div>
        <div class="modal-section">
            <p>This portfolio showcases my commitment to health and wellness through various activities and tracking systems.</p>
            <ul>
                <li><strong>Food Diary:</strong> Daily meal tracking and nutrition awareness</li>
                <li><strong>PE Log:</strong> Physical activity records and fitness journey</li>
                <li><strong>Health Advocacy:</strong> Promoting healthier school environments</li>
                <li><strong>Cooking Skills:</strong> Learning to prepare nutritious meals</li>
            </ul>
        </div>
    `;
}

function getContactContent() {
    return `
        <div class="modal-header">
            <h2 class="modal-title">Contact Information</h2>
            <p class="modal-subtitle">Get in Touch</p>
        </div>
        <div class="modal-section">
            <div class="contact-info">
                <p><strong>Name:</strong> Gabriel Ramos</p>
                <p><strong>Course:</strong> AB-Political Science</p>
                <p><strong>Year:</strong> 1st Year</p>
                <p><strong>University:</strong> West Visayas State University</p>
            </div>
        </div>
    `;
}

// Animation System
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.card, .section-title, .hero-content').forEach(element => {
        observer.observe(element);
    });
}

// Modal Interactions
function initializeModalInteractions() {
    // Add any modal-specific interactions here
    const modalButtons = document.querySelectorAll('.modal .btn');
    modalButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Handle modal button clicks
            console.log('Modal button clicked:', this.textContent);
        });
    });
}

// Error Handling
function handleMissingElements() {
    const criticalElements = [
        { id: 'modal', type: 'Modal container' },
        { id: 'modal-body', type: 'Modal body' },
        { class: 'close', type: 'Modal close button' }
    ];

    criticalElements.forEach(element => {
        let el;
        if (element.id) {
            el = document.getElementById(element.id);
        } else if (element.class) {
            el = document.querySelector(`.${element.class}`);
        }

        if (!el) {
            console.warn(`Missing element: ${element.type}. Some functionality may be limited.`);
        }
    });
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    console.log(`${type.toUpperCase()}: ${message}`);
    // Simple notification system
    alert(message);
}

// Export functions for use in other files
window.openModal = window.openModal;
window.closeModal = window.closeModal;
