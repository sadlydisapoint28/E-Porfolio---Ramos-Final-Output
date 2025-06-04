// Health E-Portfolio JavaScript

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeLoading();
    initializeGSAPAnimations();
    initializeNavigation();
    initializeScrollAnimations(); // Re-enabled for scroll-triggered animations
    initializeMobileMenu();
    initializeCardAnimations();
    initializeSmoothScrolling();
    initializeModalSystem();
    initializeInteractiveContent();
    initializeFoodDiary();
    initializeQuiz();
    initializeCosina();
    initializeParticleEffects();

    // Initialize additional features
    initializeTypingAnimation();
    initializeParallax();
    initializeCounters();
    initializeFormHandling();

    // Add error handling for missing elements
    handleMissingElements();
});

// GSAP Animations
function initializeGSAPAnimations() {
    // Hide loading screen immediately and start animations
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
    // Start animations immediately
    startMainAnimations();
}

function startMainAnimations() {
    // Animate header entrance with spectacular effect
    gsap.fromTo('.header',
        {
            y: -200,
            opacity: 0,
            scale: 0.8,
            rotationX: -30,
            rotationY: 15
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            duration: 1.5,
            ease: "back.out(2)"
        }
    );

    // Animate logo with bounce and glow
    gsap.fromTo('.logo-container',
        {
            scale: 0,
            rotation: -180,
            opacity: 0,
            filter: "blur(10px)"
        },
        {
            scale: 1,
            rotation: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.2,
            delay: 0.3,
            ease: "elastic.out(1, 0.5)"
        }
    );

    // Animate header title with typewriter effect
    gsap.fromTo('.header-title',
        {
            y: -100,
            opacity: 0,
            scale: 0.5,
            rotationX: 90
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            delay: 0.5,
            ease: "back.out(1.7)"
        }
    );

    // Animate subtitle with slide effect
    gsap.fromTo('.header-subtitle',
        {
            y: 50,
            opacity: 0,
            x: -100
        },
        {
            y: 0,
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.8,
            ease: "power2.out"
        }
    );

    // Animate header icons with spectacular entrance
    gsap.fromTo('.icon-item',
        {
            scale: 0,
            rotation: 360,
            opacity: 0,
            y: -100,
            filter: "blur(5px)"
        },
        {
            scale: 1,
            rotation: 0,
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            delay: 1,
            stagger: 0.3,
            ease: "elastic.out(1, 0.8)"
        }
    );

    // Animate welcome section with wave effect
    gsap.fromTo('.welcome-title',
        {
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotationY: 45
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            delay: 1.3,
            ease: "back.out(1.7)"
        }
    );

    gsap.fromTo('.welcome-description',
        {
            y: 50,
            opacity: 0,
            x: 100
        },
        {
            y: 0,
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 1.5,
            ease: "power2.out"
        }
    );

    // Animate cards with spectacular staggered entrance
    gsap.fromTo('.content-card',
        {
            y: 150,
            opacity: 0,
            scale: 0.6,
            rotation: 15,
            rotationY: 45,
            filter: "blur(5px)"
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            rotationY: 0,
            filter: "blur(0px)",
            duration: 1,
            delay: 1.8,
            stagger: 0.2,
            ease: "back.out(1.7)"
        }
    );

    // Add scroll-triggered animations for other sections
    initializeScrollTriggerAnimations();
}

// Scroll Trigger Animations
function initializeScrollTriggerAnimations() {
    // Animate sections on scroll
    gsap.utils.toArray('.section-detail').forEach((section, index) => {
        gsap.fromTo(section,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Animate detail items
    gsap.utils.toArray('.detail-item').forEach((item, index) => {
        gsap.fromTo(item,
            {
                y: 50,
                opacity: 0,
                scale: 0.9
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                delay: index * 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Animate modal content when it appears (scroll-triggered)
    ScrollTrigger.create({
        trigger: '.modal',
        start: 'top 80%',
        onEnter: () => {
            gsap.fromTo('.modal-content',
                { scale: 0.8, opacity: 0, y: 50 },
                { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }
            );
        }
    });

    // Animate footer when scrolled to
    ScrollTrigger.create({
        trigger: '.footer',
        start: 'top 90%',
        onEnter: () => {
            gsap.fromTo('.footer-left',
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
            );
            gsap.fromTo('.footer-right',
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power2.out" }
            );
        }
    });

    // Animate reflection items
    gsap.utils.toArray('.reflection-item').forEach((item, index) => {
        gsap.fromTo(item,
            {
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

// Particle Effects
function initializeParticleEffects() {
    // Create floating particles
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            left: ${Math.random() * window.innerWidth}px;
            top: ${window.innerHeight + 10}px;
        `;

        document.body.appendChild(particle);

        gsap.to(particle, {
            y: -window.innerHeight - 100,
            x: `+=${Math.random() * 200 - 100}`,
            rotation: 360,
            duration: Math.random() * 10 + 10,
            ease: "none",
            onComplete: () => {
                document.body.removeChild(particle);
            }
        });
    }

    // Create particles periodically
    setInterval(createFloatingParticle, 2000);

    // Add click particle effect
    document.addEventListener('click', function(e) {
        if (e.target.closest('.content-card') || e.target.closest('.icon-item')) {
            createClickParticles(e.clientX, e.clientY);
        }
    });
}

function createClickParticles(x, y) {
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #4ecdc4, #44a08d);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${x}px;
            top: ${y}px;
        `;

        document.body.appendChild(particle);

        const angle = (i / 12) * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;

        gsap.to(particle, {
            x: endX - x,
            y: endY - y,
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                document.body.removeChild(particle);
            }
        });
    }
}

// Loading Screen
function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    
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

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile menu toggle
function initializeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                bar.style.transform = navMenu.classList.contains('active') 
                    ? `rotate(${index === 0 ? 45 : index === 1 ? 0 : -45}deg) translate(${index === 1 ? '100px' : '0'}, ${index === 0 ? '6px' : index === 2 ? '-6px' : '0'})`
                    : 'none';
                bar.style.opacity = navMenu.classList.contains('active') && index === 1 ? '0' : '1';
            });
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            });
        });
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Skip if href is just "#" or empty
            if (href === '#' || !href || href.length <= 1) {
                return;
            }
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                
                // Special animations for different elements
                if (entry.target.classList.contains('content-card')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    entry.target.style.animationDelay = `${delay}ms`;
                }
                
                if (entry.target.classList.contains('detail-item')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 200;
                    entry.target.style.animationDelay = `${delay}ms`;
                }
                
                if (entry.target.classList.contains('trivia-card')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 150;
                    entry.target.style.animationDelay = `${delay}ms`;
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.content-card, .detail-item, .trivia-card, .reflection-item, .advocacy-card').forEach(el => {
        observer.observe(el);
    });
}

// Card hover animations
function initializeCardAnimations() {
    const cards = document.querySelectorAll('.content-card, .trivia-card, .detail-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Special animation for advocacy card
    const advocacyCard = document.querySelector('.advocacy-card');
    if (advocacyCard) {
        advocacyCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(-5deg) scale(1.05)';
        });
        
        advocacyCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg) scale(1)';
        });
    }
}

// Typing animation for header
function initializeTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        typingElement.style.borderRight = '2px solid #4ecdc4';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    typingElement.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 1500);
    }
}

// Parallax effect for header
function initializeParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            const rate = scrolled * -0.5;
            header.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Counter animation for statistics
function initializeCounters() {
    const counters = document.querySelectorAll('[data-target]');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// Form validation and submission
function initializeFormHandling() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            showNotification('Message sent successfully!', 'success');
            form.reset();
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#4ecdc4' : type === 'error' ? '#ff6b6b' : '#333'};
        color: white;
        border-radius: 5px;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Remove duplicate DOMContentLoaded - these functions are now called in the main initialization

// Modal System - Enhanced version is implemented later in the file

// Interactive Content System
function initializeInteractiveContent() {
    // Make card links clickable (except modal links which have their own onclick handlers)
    document.querySelectorAll('.card-link:not(.about-me-link):not(.advocacy-link):not(.food-log-link):not(.pe-log-link):not(.cosina-link):not(.trivia-link):not(.reflection-link)').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('href').substring(1);
            openDetailedContent(section);
        });
    });

    // Make section headers clickable too
    document.querySelectorAll('.section-header').forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            const section = this.closest('section').id;
            if (section) {
                openDetailedContent(section);
            }
        });
    });
}

function openDetailedContent(section) {
    let content = '';

    switch(section) {
        case 'food-activity':
            content = getFoodActivityContent();
            break;
        case 'advocacy':
            content = getAdvocacyContent();
            break;
        case 'pathfit':
            content = getPathfitContent();
            break;
        case 'trivia':
            content = getTriviaContent();
            break;
        default:
            content = '<p>Content not found.</p>';
    }

    openModal(content);
}

function getFoodActivityContent() {
    return `
        <div class="modal-header">
            <h2 class="modal-title">Food & Physical Activity</h2>
            <p class="modal-subtitle">My comprehensive approach to nutrition and fitness</p>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-apple-alt"></i>Nutrition Tracking</h3>
            <div class="modal-grid">
                <div class="modal-card">
                    <h4>Daily Calorie Goals</h4>
                    <p>I maintain a balanced 2000-calorie diet with proper macronutrient distribution.</p>
                </div>
                <div class="modal-card">
                    <h4>Meal Planning</h4>
                    <p>Weekly meal prep focusing on whole foods, lean proteins, and complex carbohydrates.</p>
                </div>
                <div class="modal-card">
                    <h4>Hydration</h4>
                    <p>Drinking 8-10 glasses of water daily to maintain optimal hydration levels.</p>
                </div>
            </div>

            <div class="progress-container">
                <div class="progress-label">
                    <span>Weekly Nutrition Goals</span>
                    <span>85%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" data-width="85"></div>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-running"></i>Exercise Routine</h3>
            <ul class="tips-list">
                <li><strong>Monday & Thursday:</strong> Cardio workouts (30-45 minutes)</li>
                <li><strong>Tuesday & Friday:</strong> Strength training (45-60 minutes)</li>
                <li><strong>Wednesday:</strong> Yoga and flexibility exercises</li>
                <li><strong>Weekend:</strong> Outdoor activities like hiking or cycling</li>
                <li><strong>Daily:</strong> 10,000 steps minimum</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-chart-line"></i>Progress Tracking</h3>
            <div class="modal-grid">
                <div class="modal-card">
                    <h4>Fitness Apps</h4>
                    <p>Using MyFitnessPal for nutrition and Strava for exercise tracking.</p>
                </div>
                <div class="modal-card">
                    <h4>Weekly Weigh-ins</h4>
                    <p>Monitoring weight and body composition every Sunday morning.</p>
                </div>
                <div class="modal-card">
                    <h4>Performance Metrics</h4>
                    <p>Tracking improvements in strength, endurance, and flexibility.</p>
                </div>
            </div>
        </div>
    `;
}

function getAdvocacyContent() {
    return `
        <div class="modal-header">
            <div class="modal-logo">
                <img src="images/LOGO.png" alt="Health Portfolio Logo" class="header-logo">
            </div>
            <h2 class="modal-title">📢 Health Advocacy</h2>
            <p class="modal-subtitle">Fueling Our Futures: A Call for Healthier School Canteens</p>
        </div>

        <div class="modal-section">
            <div class="advocacy-essay">
                <p>Okay, so, let's be real. School is tough. Between tests, homework, trying to figure out what's for dinner, and love life full of sacrifices, it's easy to forget about taking care of ourselves. But like, what if I told you that being healthy actually helps with all that stuff? I'm talking about physical health – eating right, getting enough sleep, and moving our bodies. It's way more important than we usually think.</p>

                <p>Let's be honest, school cafeterias aren't exactly known for their gourmet, healthy options. Pizza, fries, sugary drinks – it's easy to grab something quick and convenient, but these choices aren't exactly fueling our brains or bodies for success. This isn't just about weight; it's about having the energy and focus to learn, participate, and thrive in school and in overall life! As a student, whose breakfasts, lunches, and sometimes even dinners are bought and consumed in the school. We need a serious upgrade to our school canteens, the literal lowkey "key" that can actually change students eating lifestyle.</p>

                <p>Right now, many school canteens offer limited healthy options, and the unhealthy stuff is often cheaper and more readily available. This creates an environment where making healthy choices feels difficult, if not impossible. We're bombarded with processed foods, sugary drinks, and high-fat options that leave us feeling sluggish and lacking in energy. This directly impacts our ability to concentrate in class, participate in activities, and even just make it through the day feeling good. The access to healthy food is a huge deal. School needs to be a place where taking care of yourself is cool. We need to also change the vibe, you know? Instead of feeling judged for choosing a salad, we should be celebrating healthy choices. It's about creating a supportive environment where everyone feels comfortable prioritizing their health.</p>

                <p>So, what's the solution? It's time for a canteen revolution! We need more fresh fruits and vegetables, whole grains, lean proteins, and healthier drink options. Think vibrant salads, delicious whole-wheat wraps, and grilled chicken or fish. Imagine having access to fresh fruit instead of just candy bars. This isn't about deprivation; it's about offering delicious and nutritious alternatives that actually taste good. Make this a trend!</p>

                <p>But making these changes requires more than just good intentions. We need to involve students in the process. Surveys and taste tests can help determine what healthy foods students actually want to eat. Maybe even student-led initiatives to create a school garden could provide fresh produce for the canteen! Involving us in the decision-making process will ensure that the changes are sustainable and appealing.</p>

                <p>Furthermore, pricing needs to be considered. Healthy options shouldn't be a luxury; they should be affordable and accessible to all students. Subsidies or creative pricing strategies could help make healthy choices more appealing and financially feasible for everyone.</p>

                <p>Finally, education is key. Alongside the change in food options, we need educational campaigns to help students understand the importance of healthy eating and how food choices impact their overall well-being. This could be integrated into health classes or through fun, engaging initiatives in the canteen itself.</p>

                <p><strong>Transforming our school canteens into havens of healthy food is an investment in our future. It's about empowering us to make informed choices, providing us with the energy we need to succeed, and promoting a culture of well-being within our schools. Let's work together to make this happen. Let's fuel our futures with healthy food!</strong></p>
            </div>
        </div>
    `;
}

function getPathfitContent() {
    return `
        <div class="modal-header">
            <h2 class="modal-title">PATHFIT Reflection</h2>
            <p class="modal-subtitle">My personal journey through the PATHFIT program</p>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-dumbbell"></i>Physical Transformation</h3>
            <div class="modal-grid">
                <div class="modal-card">
                    <h4>Strength Improvements</h4>
                    <p>Increased my bench press by 30% and improved overall muscle endurance significantly.</p>
                </div>
                <div class="modal-card">
                    <h4>Cardiovascular Health</h4>
                    <p>Reduced resting heart rate from 75 to 62 BPM through consistent cardio training.</p>
                </div>
                <div class="modal-card">
                    <h4>Flexibility & Mobility</h4>
                    <p>Enhanced range of motion and reduced muscle stiffness through regular stretching.</p>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-target"></i>Goal Setting & Achievement</h3>
            <ul class="tips-list">
                <li>Set SMART fitness goals with specific timelines and measurable outcomes</li>
                <li>Learned to break down large goals into smaller, manageable milestones</li>
                <li>Developed consistency in tracking progress and adjusting plans</li>
                <li>Built mental resilience through challenging workout sessions</li>
                <li>Created sustainable habits that extend beyond the program</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3><i class="fas fa-brain"></i>Mental & Emotional Growth</h3>
            <div class="modal-grid">
                <div class="modal-card">
                    <h4>Stress Management</h4>
                    <p>Exercise became my primary tool for managing academic and personal stress.</p>
                </div>
                <div class="modal-card">
                    <h4>Self-Confidence</h4>
                    <p>Physical achievements boosted overall confidence and self-esteem.</p>
                </div>
                <div class="modal-card">
                    <h4>Mental Resilience</h4>
                    <p>Developed stronger mental toughness through challenging workouts.</p>
                </div>
            </div>

            <div class="progress-container">
                <div class="progress-label">
                    <span>Overall Program Satisfaction</span>
                    <span>95%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" data-width="95"></div>
                </div>
            </div>
        </div>
    `;
}

function getTriviaContent() {
    return `
        <div class="modal-header">
            <h2 class="modal-title">Health Trivia</h2>
            <p class="modal-subtitle">Test your health knowledge</p>
        </div>

        <div class="modal-section">
            <div class="trivia-container">
                <div class="trivia-question">
                    <h3>Did you know?</h3>
                    <ul class="trivia-list">
                        <li>The human body has over 650 muscles</li>
                        <li>Your heart beats about 100,000 times per day</li>
                        <li>You can burn calories while sleeping</li>
                        <li>Exercise boosts brain power</li>
                        <li>Laughter is a great ab workout</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function showCosinaModal() {
    const content = `
        <div class="modal-header">
            <h2 class="modal-title">🍳 COSINA</h2>
            <p class="modal-subtitle">Cooking Videos & Recipes</p>
        </div>

        <div class="modal-section">
            <div class="video-container">
                <video controls width="100%">
                    <source src="video/Videoo.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>

            <div class="recipe-section">
                <h3>Featured Recipes</h3>
                <div class="recipe-grid">
                    <div class="recipe-card">
                        <h4>Healthy Breakfast Bowl</h4>
                        <p>Start your day right with this nutritious and delicious breakfast bowl.</p>
                    </div>
                    <div class="recipe-card">
                        <h4>Power Lunch Salad</h4>
                        <p>A protein-packed salad perfect for maintaining energy throughout the day.</p>
                    </div>
                    <div class="recipe-card">
                        <h4>Balanced Dinner Plate</h4>
                        <p>Create the perfect balanced dinner with this simple guide.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    openModal(content);
}

// Initialize Quiz functionality
function initializeQuiz() {
    let currentQuestion = 0;
    const questions = [
        {
            question: "How much water should you drink daily?",
            options: ["2-3 glasses", "4-5 glasses", "8-10 glasses", "15+ glasses"],
            correct: 2
        },
        {
            question: "Which is not a macronutrient?",
            options: ["Protein", "Vitamins", "Carbohydrates", "Fats"],
            correct: 1
        },
        {
            question: "How many hours of sleep is recommended for adults?",
            options: ["4-5 hours", "6-7 hours", "7-9 hours", "10-12 hours"],
            correct: 2
        }
    ];

    function showQuestion(index) {
        const quizContainer = document.querySelector('.quiz-container');
        if (!quizContainer) return;

        const question = questions[index];
        quizContainer.innerHTML = `
            <div class="quiz-question">
                <h3>${question.question}</h3>
                <div class="quiz-options">
                    ${question.options.map((option, i) => `
                        <button class="quiz-option" onclick="selectAnswer(${i}, ${i === question.correct})">${option}</button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    window.selectAnswer = function(index, correct) {
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(option => option.disabled = true);
        
        options[index].classList.add(correct ? 'correct' : 'incorrect');
        if (!correct) {
            options[questions[currentQuestion].correct].classList.add('correct');
        }

        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion(currentQuestion);
            } else {
                showQuizComplete();
            }
        }, 1500);
    };

    function showQuizComplete() {
        const quizContainer = document.querySelector('.quiz-container');
        if (quizContainer) {
            quizContainer.innerHTML = `
                <div class="quiz-complete">
                    <h3>Quiz Complete!</h3>
                    <p>Great job testing your health knowledge!</p>
                    <button onclick="restartQuiz()">Try Again</button>
                </div>
            `;
        }
    }

    window.restartQuiz = function() {
        currentQuestion = 0;
        showQuestion(0);
    };
}

// Initialize Cosina functionality
function initializeCosina() {
    // Add video player controls and recipe interaction
    const videoPlayer = document.querySelector('.video-container video');
    if (videoPlayer) {
        videoPlayer.addEventListener('play', function() {
            console.log('Video started playing');
        });

        videoPlayer.addEventListener('pause', function() {
            console.log('Video paused');
        });
    }

    // Add recipe card interactions
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', function() {
            // Show recipe details
            const recipeTitle = this.querySelector('h4').textContent;
            showRecipeDetails(recipeTitle);
        });
    });
}

function showRecipeDetails(title) {
    // Implementation for showing detailed recipe information
    console.log(`Showing details for recipe: ${title}`);
}

function getTriviaContent() {
    return `
        <div class="modal-header">
            <div class="modal-logo">
                <img src="images/LOGO.png" alt="Health Portfolio Logo" class="header-logo">
            </div>
            <h2 class="modal-title">Health Trivia Challenge</h2>
            <p class="modal-subtitle">Test your knowledge with interactive health facts</p>
        </div>

        <div class="modal-section">
            <div class="quiz-container">
                <div class="quiz-question">
                    <i class="fas fa-question-circle" style="color: #4ecdc4; margin-right: 10px;"></i>
                    How much water should an average adult drink per day?
                </div>
                <div class="quiz-options">
                    <button class="quiz-option" data-answer="false">
                        <i class="fas fa-glass-water" style="margin-right: 8px;"></i>
                        4-5 glasses
                    </button>
                    <button class="quiz-option" data-answer="true">
                        <i class="fas fa-glass-water" style="margin-right: 8px;"></i>
                        8-10 glasses
                    </button>
                    <button class="quiz-option" data-answer="false">
                        <i class="fas fa-glass-water" style="margin-right: 8px;"></i>
                        12-15 glasses
                    </button>
                    <button class="quiz-option" data-answer="false">
                        <i class="fas fa-glass-water" style="margin-right: 8px;"></i>
                        2-3 glasses
                    </button>
                </div>
                <div class="quiz-result">
                    <i class="fas fa-check-circle" style="color: #28a745; margin-right: 8px;"></i>
                    <strong>Correct!</strong> Adults should drink 8-10 glasses (about 2-2.5 liters) of water daily for optimal hydration and health.
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3 style="text-align: center; font-size: 2.2rem; color: #333; margin-bottom: 2rem;">
                <i class="fas fa-brain" style="color: #4ecdc4; margin-right: 10px;"></i>
                Amazing Health Facts
            </h3>
            <div class="modal-grid">
                <div class="modal-card">
                    <h4>🧠 Brain Power</h4>
                    <p>Your brain uses 20% of your body's energy despite being only 2% of your body weight! It's like a supercomputer that never stops working.</p>
                </div>
                <div class="modal-card">
                    <h4>❤️ Heart Facts</h4>
                    <p>Your heart beats about 100,000 times per day, pumping 2,000 gallons of blood through your body. That's enough to fill a small swimming pool!</p>
                </div>
                <div class="modal-card">
                    <h4>😴 Sleep Science</h4>
                    <p>During sleep, your brain clears toxins and consolidates memories for better learning. Quality sleep is like a nightly brain detox session.</p>
                </div>
                <div class="modal-card">
                    <h4>💧 Hydration</h4>
                    <p>Even 2% dehydration can significantly affect your mood, energy, and cognitive function. Stay hydrated to keep your body and mind sharp!</p>
                </div>
                <div class="modal-card">
                    <h4>🦴 Bone Health</h4>
                    <p>Your bones are constantly rebuilding themselves - you get a completely new skeleton every 10 years! Regular exercise helps keep them strong.</p>
                </div>
                <div class="modal-card">
                    <h4>🏃‍♂️ Exercise Benefits</h4>
                    <p>Just 30 minutes of exercise can boost your mood for up to 12 hours afterward thanks to endorphins - your body's natural happiness chemicals!</p>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3 style="text-align: center; font-size: 2.2rem; color: #333; margin-bottom: 2rem;">
                <i class="fas fa-lightbulb" style="color: #ff6b9d; margin-right: 10px;"></i>
                Daily Health Tips
            </h3>
            <ul class="tips-list">
                <li>Take the stairs instead of elevators to boost daily activity and strengthen your legs</li>
                <li>Eat a rainbow of fruits and vegetables for diverse nutrients and antioxidants</li>
                <li>Practice deep breathing for 5 minutes daily to reduce stress and improve focus</li>
                <li>Get 7-9 hours of sleep for optimal physical and mental health recovery</li>
                <li>Stand up and stretch every hour if you work at a desk to prevent stiffness</li>
                <li>Wash your hands for 20 seconds to prevent illness and stay healthy</li>
            </ul>
        </div>
    `;
}

// Modal Interactions
function initializeModalInteractions() {
    // Animate progress bars
    document.querySelectorAll('.progress-fill').forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 300);
    });

    // Enhanced Quiz functionality
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function() {
            // Prevent multiple clicks
            if (this.disabled) return;

            // Remove previous selections and disable all options
            document.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
                opt.disabled = true;
                opt.style.pointerEvents = 'none';
            });

            // Add selected class with animation
            this.classList.add('selected');

            // Show result after a short delay
            setTimeout(() => {
                const isCorrect = this.getAttribute('data-answer') === 'true';
                const resultDiv = document.querySelector('.quiz-result');

                if (isCorrect) {
                    this.classList.add('correct');
                    if (resultDiv) {
                        resultDiv.classList.add('show');
                        resultDiv.style.background = 'linear-gradient(135deg, #d4edda, #c3e6cb)';
                        resultDiv.style.color = '#155724';
                        resultDiv.style.border = '2px solid #28a745';
                    }
                } else {
                    this.classList.add('incorrect');
                    // Show correct answer
                    const correctOption = document.querySelector('.quiz-option[data-answer="true"]');
                    if (correctOption) {
                        correctOption.classList.add('correct');
                    }
                    if (resultDiv) {
                        resultDiv.classList.add('show');
                        resultDiv.style.background = 'linear-gradient(135deg, #f8d7da, #f5c6cb)';
                        resultDiv.style.color = '#721c24';
                        resultDiv.style.border = '2px solid #dc3545';
                        resultDiv.innerHTML = '<i class="fas fa-times-circle" style="color: #dc3545; margin-right: 8px;"></i><strong>Incorrect!</strong> The correct answer is 8-10 glasses. Adults should drink 8-10 glasses (about 2-2.5 liters) of water daily for optimal hydration and health.';
                    }
                }

                // Add completion animation
                setTimeout(() => {
                    if (resultDiv) {
                        resultDiv.style.transform = 'scale(1.02)';
                        setTimeout(() => {
                            resultDiv.style.transform = 'scale(1)';
                        }, 200);
                    }
                }, 100);

            }, 500);
        });
    });
}

// Food Diary functionality - Enhanced version is implemented later in the file

// Modal Navigation System
const modalOrder = [
    { name: 'About Me', function: 'showAboutMeModal' },
    { name: 'Advocacy', function: 'showAdvocacyModal' },
    { name: 'Food Log', function: 'showFoodLogModal' },
    { name: 'PE Log', function: 'showPELogModal' },
    { name: 'COSINA', function: 'showCosinaModal' },
    { name: 'Health Trivia', function: 'showTriviaModal' },
    { name: 'Reflection', function: 'showReflectionModal' }
];

let currentModalIndex = 0;

function addModalNavigation(content, modalIndex) {
    const prevModal = modalIndex > 0 ? modalOrder[modalIndex - 1] : null;
    const nextModal = modalIndex < modalOrder.length - 1 ? modalOrder[modalIndex + 1] : null;

    const navigation = `
        <div class="modal-navigation">
            <button class="nav-btn prev-btn" onclick="navigateToModal(${modalIndex - 1})" ${!prevModal ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> ${prevModal ? 'Previous' : 'Previous'}
            </button>
            <div class="section-indicator">
                <span class="current-section">${modalIndex + 1}</span> / <span class="total-sections">${modalOrder.length}</span>
            </div>
            <button class="nav-btn next-btn" onclick="navigateToModal(${modalIndex + 1})" ${!nextModal ? 'disabled' : ''}>
                ${nextModal ? 'Next' : 'Next'} <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;

    // Insert navigation after modal header
    return content.replace('</div>', '</div>' + navigation);
}

function navigateToModal(index) {
    if (index >= 0 && index < modalOrder.length) {
        currentModalIndex = index;
        const modalFunction = modalOrder[index].function;
        window[modalFunction]();
    }
}

// Show About Me Modal with Navigation
function showAboutMeModal() {
    currentModalIndex = 0;
    let content = `
        <div class="modal-header">
            <div class="modal-logo">
                <img src="images/LOGO.png" alt="Health Portfolio Logo" class="header-logo">
            </div>
            <h2 class="modal-title">About Me</h2>
            <p class="modal-subtitle">Introduction</p>
        </div>

        <div class="modal-section">
            <div class="about-intro-modal">
                <div class="about-profile">
                    <div class="profile-image-large">
                        <img src="images/Gab.jpg" alt="Gabriel Ramos" class="profile-photo-large">
                    </div>
                    <div class="profile-info">
                        <h3>👋 Hello, Welcome to my website!</h3>
                        <p>I'm <strong>Gabriel Ramos</strong>, a 1st year student in West Visayas State University. I am currently taking <strong>AB-Political Science</strong> as my course.</p>

                        <p>As a student that focuses more in theoretical knowledge, my physical health is hardly being monitored. Sit and read, eat and read, and before sleep I read. With a lot of readings (not even counting the other distraction factors such as social media he-he 😆), I easily neglect doing a walk, run, and more physical activities that cannot be done with reading at the same time.</p>

                        <p>With the help of this website though, food log and physical activity log, it helped me develop a record and pattern for <strong>Healthy Living!</strong></p>

                        <p><strong>I hope you get inspired reading my journey to Better Health!</strong></p>
                    </div>
                </div>
            </div>

            <div class="about-roles">
                <div class="role-card">
                    <h4>📚 Student Life</h4>
                    <p>1st year AB-Political Science student at West Visayas State University, balancing academic excellence with health awareness.</p>
                </div>
                <div class="role-card">
                    <h4>📖 Academic Focus</h4>
                    <p>Dedicated to theoretical knowledge and research, constantly reading and learning about political science and social issues.</p>
                </div>
                <div class="role-card">
                    <h4>💪 Health Journey</h4>
                    <p>Learning to balance sedentary study habits with physical activity and proper nutrition for better overall wellness.</p>
                </div>
                <div class="role-card">
                    <h4>🎯 Personal Growth</h4>
                    <p>Using this health portfolio to track progress, develop healthy patterns, and inspire others on their wellness journey.</p>
                </div>
            </div>

            <div class="health-goals-section">
                <h3>🎯 My Health Goals</h3>
                <ul class="tips-list">
                    <li>Balance study time with regular physical activities like walking and running</li>
                    <li>Develop consistent meal planning and nutrition tracking habits</li>
                    <li>Create a sustainable exercise routine that fits my academic schedule</li>
                    <li>Monitor and improve my daily health patterns through this portfolio</li>
                    <li>Inspire fellow students to prioritize their health alongside academics</li>
                    <li>Build healthy habits that will support my long-term academic and personal success</li>
                </ul>
            </div>
        </div>
    `;

    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Make navigation function globally accessible
window.navigateToModal = navigateToModal;

// Show Advocacy Modal
function showAdvocacyModal() {
    currentModalIndex = 1;
    let content = getAdvocacyContent();
    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Show Food Log Modal
function showFoodLogModal() {
    currentModalIndex = 2;
    let content = `
        <div class="modal-header">
            <div class="modal-logo">
                <img src="images/LOGO.png" alt="Health Portfolio Logo" class="header-logo">
            </div>
            <h2 class="modal-title">🍽️ Food Log</h2>
            <p class="modal-subtitle">My Daily Nutrition Journey</p>
        </div>

        <div class="modal-section">
            <div class="food-log-intro">
                <h3>📊 My Food Tracking Experience</h3>
                <p>As a student who spends most of my time reading and studying, I realized I needed to pay more attention to what I eat. This food log helps me track my daily meals and develop better eating habits that support my academic performance and overall health.</p>

                <div class="food-log-actions">
                    <a href="food-diary.html" class="btn-primary">
                        <i class="fas fa-external-link-alt"></i> View My Food Diary
                    </a>
                </div>
            </div>

            <div class="modal-grid">
                <div class="modal-card enhanced">
                    <div class="card-icon-modal">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <h4>📈 Daily Meal Tracking</h4>
                    <p>I record all my meals - breakfast, lunch, dinner, and snacks. This helps me see patterns in my eating habits and identify areas for improvement.</p>
                    <div class="card-stats">
                        <span class="stat-badge">Meals Logged: 90+</span>
                    </div>
                </div>

                <div class="modal-card enhanced">
                    <div class="card-icon-modal">
                        <i class="fas fa-calculator"></i>
                    </div>
                    <h4>🔢 Calorie Awareness</h4>
                    <p>Learning to understand portion sizes and caloric content helps me maintain energy levels throughout long study sessions.</p>
                    <div class="card-stats">
                        <span class="stat-badge">Target: 2000-2200 cal/day</span>
                    </div>
                </div>

                <div class="modal-card enhanced">
                    <div class="card-icon-modal">
                        <i class="fas fa-chart-pie"></i>
                    </div>
                    <h4>🥗 Balanced Nutrition</h4>
                    <p>Tracking proteins, carbs, and healthy fats ensures my brain gets the nutrients it needs for optimal academic performance.</p>
                    <div class="card-stats">
                        <span class="stat-badge">Goal: Balanced Macros</span>
                    </div>
                </div>

                <div class="modal-card enhanced">
                    <div class="card-icon-modal">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h4>⏰ Meal Timing</h4>
                    <p>Regular meal times help maintain consistent energy and focus during classes and study periods.</p>
                    <div class="card-stats">
                        <span class="stat-badge">3 Main + 2 Snacks</span>
                    </div>
                </div>
            </div>

            <div class="food-gallery">
                <h3>📸 Sample Food Photos from My Diary</h3>
                <div class="food-photos-grid">
                    <div class="food-photo-card">
                        <img src="images/Food Log/Cheesy corned beef with rice.jpg" alt="Cheesy Corned Beef" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
                        <p>Cheesy Corned Beef with Rice</p>
                    </div>
                    <div class="food-photo-card">
                        <img src="images/Food Log/Bulalo, fried fish and rice.jpg" alt="Bulalo with Fried Fish" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
                        <p>Bulalo with Fried Fish & Rice</p>
                    </div>
                    <div class="food-photo-card">
                        <img src="images/Food Log/Kamotique.jpg" alt="Kamotique" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
                        <p>Kamotique (Sweet Potato Snack)</p>
                    </div>
                    <div class="food-photo-card">
                        <img src="images/Food Log/Ice cream (corn flavor).jpg" alt="Corn Ice Cream" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
                        <p>Corn Flavored Ice Cream</p>
                    </div>
                    <div class="food-photo-card">
                        <img src="images/Food Log/Pancit canton with rice.jpg" alt="Pancit Canton" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
                        <p>Pancit Canton with Rice</p>
                    </div>
                    <div class="food-photo-card">
                        <img src="images/Food Log/Siomai and yakult.jpg" alt="Siomai and Yakult" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
                        <p>Siomai and Yakult</p>
                    </div>
                    <div class="food-photo-card">
                        <img src="images/Food Log/Valenciana and Maja blanka.jpg" alt="Valenciana and Maja Blanca" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
                        <p>Valenciana and Maja Blanca</p>
                    </div>
                    <div class="food-photo-card">
                        <img src="images/Food Log/Kwek-kwek.jpg" alt="Kwek-kwek" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px;">
                        <p>Kwek-kwek</p>
                    </div>
                </div>
            </div>

            <div class="food-insights">
                <h3>🎯 Key Insights from My Food Journey</h3>
                <ul class="insights-list">
                    <li><strong>Breakfast matters:</strong> Eating a proper breakfast significantly improves my morning focus</li>
                    <li><strong>Hydration is key:</strong> Drinking enough water helps prevent afternoon energy crashes</li>
                    <li><strong>Snack smart:</strong> Healthy snacks between meals keep my energy stable during long study sessions</li>
                    <li><strong>Planning helps:</strong> Meal planning prevents impulsive unhealthy food choices</li>
                </ul>
            </div>
        </div>
    `;

    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Show PE Log Modal - Redirect to dedicated page
function showPELogModal() {
    // Redirect to dedicated PE log page instead of showing modal
    window.open('pe-log.html', '_blank');
    return;
}

// Show Trivia Modal
function showTriviaModal() {
    currentModalIndex = 5;
    let content = getTriviaContent();
    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Show COSINA Modal
function showCosinaModal() {
    currentModalIndex = 4;
    let content = `
        <div class="modal-header">
            <div class="modal-logo">
                <img src="images/LOGO.png" alt="Health Portfolio Logo" class="header-logo">
            </div>
            <h2 class="modal-title">🍳 COSINA</h2>
            <p class="modal-subtitle">Rice Paper Kimchi Pancakes Recipe</p>
        </div>

        <div class="modal-section">
            <div class="recipe-intro">
                <h3>🥞 Rice Paper Kimchi Pancakes</h3>
                <p>A healthy and delicious fusion snack that combines Korean flavors with crispy rice paper texture. Perfect for students looking for a nutritious and easy-to-make meal!</p>
            </div>

            <div class="recipe-section">
                <h3>🛒 Ingredients and Condiments</h3>
                <ul class="ingredients-list">
                    <li><strong>Kimchi</strong> - fermented cabbage for probiotics and flavor</li>
                    <li><strong>Cheese</strong> - adds protein and creamy texture</li>
                    <li><strong>Spring onions</strong> - fresh flavor and vitamins</li>
                    <li><strong>Carrots</strong> - vitamins A and C, natural sweetness</li>
                    <li><strong>Rice paper</strong> - low-calorie wrapper</li>
                    <li><strong>Sesame oil</strong> - healthy fats and authentic flavor</li>
                    <li><strong>Corn starch</strong> - natural binder for ingredients</li>
                </ul>
            </div>

            <div class="recipe-section">
                <h3>👨‍🍳 Preparation Method</h3>
                <ol class="preparation-steps">
                    <li><strong>Prep the ingredients:</strong> We sliced the ingredients needed for the pancake: kimchi, carrots, cheese, and spring onions.</li>
                    <li><strong>Mix the filling:</strong> In a bowl we mixed the sliced ingredients with cornstarch and sesame oil. The cornstarch served as a binder for the ingredients.</li>
                    <li><strong>Prepare rice paper:</strong> We heat the pan. While the pan is heating, we prepared the rice paper by dipping it in water for a few seconds. Once the pan was heated, we placed 2 rice papers then layered it with a thin amount of the mixture. After placing the mixture, we topped it off with another 2 layers of rice paper.</li>
                    <li><strong>Cook until crispy:</strong> Cooked until crispy on both sides for perfect texture.</li>
                    <li><strong>Serve:</strong> Serve hot and enjoy your healthy creation!</li>
                </ol>
            </div>

            <div class="recipe-section">
                <h3>🍽️ Nutritional Benefits</h3>
                <div class="nutrition-info">
                    <p>Rice paper kimchi pancakes can be a relatively healthy snack food if made with nutritional awareness. Comprised of mainly rice paper and kimchi, these pancakes are generally low to medium-calorie foods, including this <strong>150 to 200 calories per serving</strong> dish, which is typically acceptable if you are counting calories to lose weight.</p>

                    <p><strong>Kimchi</strong>, a fermented food, offers the advantage of probiotics, which help gut health and digestion. Additionally, with the use of veggies like carrots and spring onions which provides <strong>vitamins B and C</strong> that can help with digestion and can increase immunity.</p>

                    <p>When pan-fried with minimal oil or air-fried, these pancakes remain <strong>low in fat</strong>, which further enhances their appeal as a healthier snack alternative.</p>
                </div>
            </div>

            <div class="video-section">
                <h3>🎥 Cooking Video</h3>
                <div class="video-container">
                    <video controls width="100%" style="border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.15);">
                        <source src="video/Videoo.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <p style="margin-top: 1rem; color: #666; text-align: center;">Watch me prepare Rice Paper Kimchi Pancakes step by step!</p>
                </div>
            </div>
        </div>
    `;

    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Show Reflection Modal
function showReflectionModal() {
    currentModalIndex = 6;
    let content = `
        <div class="modal-header">
            <div class="modal-logo">
                <img src="images/LOGO.png" alt="Health Portfolio Logo" class="header-logo">
            </div>
            <h2 class="modal-title">💭 Personal Reflection</h2>
            <p class="modal-subtitle">My Journey Through Health and Wellness</p>
        </div>

        <div class="modal-section">
            <div class="reflection-intro">
                <h3 style="text-align: center; font-size: 2.2rem; color: #333; margin-bottom: 2rem;">
                    <i class="fas fa-seedling" style="color: #4ecdc4; margin-right: 10px;"></i>
                    My Health Portfolio Journey
                </h3>
                <div class="reflection-item featured">
                    <h4>🌟 A First-Time Experience</h4>
                    <p>This website project was a fun experience. Making a website was a first time to me. I found it hard at the start but got to enjoy it as I input my workings later on. This semester has been a real eye-opener when it comes to my health. Initially, I approached the assignments on food logging, physical activity tracking, and health advocacy with a bit of skepticism. Honestly, I thought it was just another school project. But as I little by little complete it, I realize it was actually more than just a task. <strong>It was me changing for the better.</strong></p>
                </div>
            </div>

            <div class="reflection-section">
                <h3 style="text-align: center; font-size: 2rem; color: #333; margin: 2.5rem 0 2rem 0;">
                    <i class="fas fa-camera" style="color: #ff6b9d; margin-right: 10px;"></i>
                    Food Logging Adventures
                </h3>
                <div class="reflection-item">
                    <h4>📸 Developing New Skills</h4>
                    <p>Keeping a food log was a joyful endeavor. Taking pics every time I have something to eat. Not only do I record what my body intakes, but I also slowly got to develop a good photography skill in a close up shot, for the foods to be looking more enticing he-he. On the other hand, making a physical log became a reflective time to me. Checking what I have done to be in this state, and knowing what things I can still do for the rest of the day. <em>Logging changed the lagging behind of my health 😉.</em></p>
                </div>
            </div>

            <div class="reflection-section">
                <h3 style="text-align: center; font-size: 2rem; color: #333; margin: 2.5rem 0 2rem 0;">
                    <i class="fas fa-bullhorn" style="color: #4ecdc4; margin-right: 10px;"></i>
                    Advocacy & School Environment
                </h3>
                <div class="reflection-item">
                    <h4>🏫 School Canteen Insights</h4>
                    <p>Making an advocacy enhanced my will to be healthy. Learning about the simple geographic relationship to health, and its impacts made me realize that we can actually influence others greatly with the alteration of food access such as the school canteen. If we want students to be healthy, then make the canteen healthy as it is the number one source of food for students when they are in the school. Especially thinking that students are in school for the whole weekdays. I eat my breakfast at school, and surely my lunch, unless I decided to eat outside, but that is rare.</p>
                </div>

                <div class="reflection-item">
                    <h4>💰 The Reality of Pricing</h4>
                    <p>Though I must say that have observed that college school canteens cost a lot compared to outside food shops. A piece of banana cost 20 pesos in our canteen, which I only bought twice in this whole school year. That is the case, considering I love eating bananas. That is why it would be even better if we could do something with the pricing. Our family is our 1st home, and food there is free. School is our 2nd home, but food pricing there is rather unhomely, some will just say that kariderya was actually our 2nd home (well just in food pricing he-he).</p>
                </div>
            </div>

            <div class="reflection-section">
                <h3 style="text-align: center; font-size: 2rem; color: #333; margin: 2.5rem 0 2rem 0;">
                    <i class="fas fa-brain" style="color: #ff6b9d; margin-right: 10px;"></i>
                    Mental & Physical Wellness
                </h3>
                <div class="reflection-item quote-highlight">
                    <div class="quote-icon">
                        <i class="fas fa-quote-left"></i>
                    </div>
                    <blockquote>
                        <p><strong>"A healthy outside starts from the inside"</strong> - Robert Urich</p>
                    </blockquote>
                    <p>Mental health is just as important as physical health. Internal factors greatly affects how we perform to make our physique healthy as we want. It is crucial to know that to be healthy, we also need to like its idea and enjoy the process. That is why as much as possible, every Saturday or any day with my friends or loved ones, I participate in sports or recreational activities.</p>
                </div>
            </div>

            <div class="reflection-section">
                <h3 style="text-align: center; font-size: 2rem; color: #333; margin: 2.5rem 0 2rem 0;">
                    <i class="fas fa-balance-scale" style="color: #4ecdc4; margin-right: 10px;"></i>
                    Wealth vs Health Balance
                </h3>
                <div class="reflection-item">
                    <h4>💎 The Real Perspective</h4>
                    <p>We know that health is important, but some just yet to realize the depth of this reality. There is a misconception about the wealth that is always compared to health. Wealth vs Health, what's to pick? The right answer? It's <strong>BOTH!</strong></p>
                </div>

                <div class="reflection-item quote-highlight">
                    <div class="quote-icon">
                        <i class="fas fa-quote-left"></i>
                    </div>
                    <blockquote>
                        <p><strong>"So many people spend their health gaining wealth, and then have to spend their wealth to regain their health."</strong> - A.J. Reb Materi</p>
                    </blockquote>
                    <p>Instead of that, why not sought a balance. Extreme wealth without health is ultimately unsatisfying, while prioritizing health without considering financial well-being can create unnecessary stress. Here comes the concept of sustainable approach.</p>
                </div>

                <div class="reflection-item featured">
                    <h4>🎯 Final Realization</h4>
                    <p>This final output of ours is to teach that to us, striving for a balance that allows for both physical and financial well-being. Through this health portfolio journey, I've learned that sustainable wellness isn't just about perfect nutrition or intense workouts—it's about creating a lifestyle that supports both our health goals and our life aspirations.</p>
                </div>
            </div>
        </div>
    `;

    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Fix missing functions referenced in food diary
function showMealInfo(day, meal) {
    // Redirect to food diary page with specific meal
    window.location.href = `food-diary.html#${day}-${meal}`;
}

function showDayInfo(day) {
    // Redirect to food diary page with specific day
    window.location.href = `food-diary.html#${day}`;
}

// Error handling for missing elements
function handleMissingElements() {
    // Check for critical elements and provide fallbacks
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

// Enhanced modal system with better error handling
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

    // Close modal when clicking outside (but not inside modal content)
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

    // Make closeModal globally accessible
    window.closeModal = closeModal;

    // Make modal globally accessible with error handling
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

    // Make modal functions globally accessible
    window.showAboutMeModal = showAboutMeModal;
    window.showAdvocacyModal = showAdvocacyModal;
    window.showFoodLogModal = showFoodLogModal;
    window.showPELogModal = showPELogModal;
    window.showCosinaModal = showCosinaModal;
    window.showTriviaModal = showTriviaModal;
    window.showReflectionModal = showReflectionModal;
}

// Enhanced initialization functions with null checks
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

// Enhanced food diary initialization with error handling
function initializeFoodDiary() {
    // Add click listeners to meal cells in the embedded food log
    const mealCells = document.querySelectorAll('.meal-cell');
    const dayLabels = document.querySelectorAll('.day-label');

    if (mealCells.length === 0 && dayLabels.length === 0) {
        // Not on food diary page, skip initialization
        return;
    }

    mealCells.forEach(cell => {
        cell.addEventListener('click', function() {
            const day = this.dataset.day;
            const meal = this.dataset.meal;
            if (day && meal) {
                showMealInfo(day, meal);
            }
        });

        // Add hover effects
        cell.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.borderColor = '#4ecdc4';
        });

        cell.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.borderColor = 'transparent';
        });
    });

    dayLabels.forEach(label => {
        label.addEventListener('click', function() {
            const day = this.dataset.day;
            if (day) {
                showDayInfo(day);
            }
        });

        // Add hover effects
        label.addEventListener('mouseenter', function() {
            this.style.background = '#4ecdc4';
        });

        label.addEventListener('mouseleave', function() {
            this.style.background = '#2d3436';
        });
    });
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
        border-radius: 8px;
        padding: 15px 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialize missing functions that might be called
function initializeTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing-text');
    if (typingElements.length === 0) return;

    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        // Start typing animation when element comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(element);
    });
}

function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 200;
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        setTimeout(updateCounter, 10);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

function initializeParticleEffects() {
    // Simple particle effect for background
    const particleContainer = document.querySelector('.particle-container');
    if (!particleContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(78, 205, 196, 0.3);
            border-radius: 50%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particleContainer.appendChild(particle);
    }
}
