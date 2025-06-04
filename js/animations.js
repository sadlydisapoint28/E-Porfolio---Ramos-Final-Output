// 🌟 SPECTACULAR ANIMATIONS FOR HEALTH E-PORTFOLIO 🌟

class SpectacularAnimationController {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.init();
    }

    init() {
        this.createSpectacularParticles();
        this.initializeScrollTriggers();
        this.initializeSpectacularHoverEffects();
        this.initializeFloatingElements();
        this.initializeProgressBars();
        this.initializeTextAnimations();
        // this.initializeMouseTrail(); // Removed - pangit
        // this.initializeMagneticEffects(); // Removed - pangit
        this.initializeParallaxEffects();
        this.initializeHealthParticles();
        this.initializeRippleEffects();
        this.startContinuousAnimations();
    }

    // Create spectacular floating particles
    createSpectacularParticles() {
        this.createHealthParticles();
        this.createFloatingShapes();
        this.createMagicDust();
    }

    // Create health-themed particles (hearts, plus signs, etc.)
    createHealthParticles() {
        const particleCount = 30;
        const healthIcons = ['❤️', '💊', '🏃‍♂️', '🥗', '💪', '🧘‍♀️', '⚡', '🌟'];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'health-particle';
            particle.innerHTML = healthIcons[Math.floor(Math.random() * healthIcons.length)];
            particle.style.cssText = `
                position: fixed;
                font-size: ${Math.random() * 20 + 15}px;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                pointer-events: none;
                z-index: 1;
                opacity: ${Math.random() * 0.3 + 0.1};
                animation: healthFloat ${Math.random() * 20 + 15}s linear infinite;
                animation-delay: ${Math.random() * 10}s;
            `;
            document.body.appendChild(particle);
        }

        // Add health particle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes healthFloat {
                0% {
                    transform: translateY(100vh) rotate(0deg) scale(0.5);
                    opacity: 0;
                }
                10% {
                    opacity: 0.7;
                    transform: scale(1);
                }
                90% {
                    opacity: 0.7;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg) scale(0.5);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Create floating geometric shapes
    createFloatingShapes() {
        const shapeCount = 15;
        const shapes = ['circle', 'square', 'triangle', 'hexagon'];

        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            shape.className = `floating-shape ${shapeType}`;

            const size = Math.random() * 40 + 20;
            shape.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                pointer-events: none;
                z-index: 1;
                opacity: ${Math.random() * 0.2 + 0.1};
                animation: shapeFloat ${Math.random() * 25 + 20}s linear infinite;
                animation-delay: ${Math.random() * 15}s;
            `;

            this.styleShape(shape, shapeType);
            document.body.appendChild(shape);
        }
    }

    // Style different shapes
    styleShape(element, type) {
        const colors = ['#4ecdc4', '#ff6b9d', '#55a3ff', '#ffa726', '#ab47bc'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        switch(type) {
            case 'circle':
                element.style.borderRadius = '50%';
                element.style.background = `linear-gradient(45deg, ${color}, transparent)`;
                break;
            case 'square':
                element.style.background = `linear-gradient(45deg, ${color}, transparent)`;
                element.style.transform = 'rotate(45deg)';
                break;
            case 'triangle':
                element.style.width = '0';
                element.style.height = '0';
                element.style.borderLeft = '15px solid transparent';
                element.style.borderRight = '15px solid transparent';
                element.style.borderBottom = `30px solid ${color}`;
                break;
            case 'hexagon':
                element.style.background = color;
                element.style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
                break;
        }
    }

    // Initialize scroll-triggered animations
    initializeScrollTriggers() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerElementAnimation(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll('.content-card, .detail-item, .trivia-card, .reflection-item, .section-header').forEach(el => {
            observer.observe(el);
        });
    }

    // Trigger specific animations based on element type
    triggerElementAnimation(element) {
        if (element.classList.contains('content-card')) {
            this.animateCard(element);
        } else if (element.classList.contains('detail-item')) {
            this.animateDetailItem(element);
        } else if (element.classList.contains('trivia-card')) {
            this.animateTriviaCard(element);
        } else if (element.classList.contains('reflection-item')) {
            this.animateReflectionItem(element);
        } else if (element.classList.contains('section-header')) {
            this.animateSectionHeader(element);
        }
    }

    // Animate content cards
    animateCard(card) {
        const index = Array.from(card.parentNode.children).indexOf(card);
        card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
        
        // Add hover glow effect
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 20px 40px rgba(78, 205, 196, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    }

    // Animate detail items
    animateDetailItem(item) {
        const index = Array.from(item.parentNode.children).indexOf(item);
        item.style.animation = `scaleIn 0.6s ease-out ${index * 0.15}s both`;
        
        // Add icon pulse animation
        const icon = item.querySelector('.detail-icon');
        if (icon) {
            setTimeout(() => {
                icon.style.animation = 'pulse 2s ease-in-out infinite';
            }, (index * 150) + 600);
        }
    }

    // Animate trivia cards
    animateTriviaCard(card) {
        const index = Array.from(card.parentNode.children).indexOf(card);
        card.style.animation = `flipInY 0.8s ease-out ${index * 0.1}s both`;
        
        // Add random floating animation
        setTimeout(() => {
            card.style.animation += `, float ${3 + Math.random() * 2}s ease-in-out infinite`;
        }, (index * 100) + 800);
    }

    // Animate reflection items
    animateReflectionItem(item) {
        const index = Array.from(item.parentNode.children).indexOf(item);
        item.style.animation = `slideInLeft 0.8s ease-out ${index * 0.2}s both`;
        
        // Animate the number
        const number = item.querySelector('.reflection-number');
        if (number) {
            setTimeout(() => {
                number.style.animation = 'bounceIn 0.6s ease-out';
            }, (index * 200) + 400);
        }
    }

    // Animate section headers
    animateSectionHeader(header) {
        const title = header.querySelector('.section-title');
        const subtitle = header.querySelector('.section-subtitle');
        
        if (title) {
            title.style.animation = 'fadeInDown 0.8s ease-out';
        }
        
        if (subtitle) {
            subtitle.style.animation = 'fadeInUp 0.8s ease-out 0.2s both';
        }
    }

    // Initialize spectacular hover effects
    initializeSpectacularHoverEffects() {
        // Enhanced card hover effects
        document.querySelectorAll('.content-card').forEach((card, index) => {
            card.addEventListener('mouseenter', (e) => {
                this.addSpectacularHoverEffect(card, e);
                this.createHoverParticles(e.clientX, e.clientY);
            });

            card.addEventListener('mouseleave', () => {
                this.removeSpectacularHoverEffect(card);
            });

            // Removed magnetic effect - pangit
        });

        // Enhanced icon hover effects
        document.querySelectorAll('.card-icon, .detail-icon, .icon-item').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.2) rotate(15deg)';
                icon.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                icon.classList.add('animate-health-pulse');
                this.createIconGlow(icon);
            });

            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.classList.remove('animate-health-pulse');
                this.removeIconGlow(icon);
            });
        });

        // Enhanced navigation link effects
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-3px) scale(1.05)';
                link.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                link.style.boxShadow = '0 5px 15px rgba(78, 205, 196, 0.3)';
            });

            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0) scale(1)';
                link.style.boxShadow = 'none';
            });
        });
    }

    // Add spectacular hover effect
    addSpectacularHoverEffect(element, event) {
        element.style.transform = 'translateY(-20px) scale(1.03) rotateX(5deg)';
        element.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        element.style.zIndex = '10';
        element.classList.add('animate-spectacular-glow');
    }

    // Remove spectacular hover effect
    removeSpectacularHoverEffect(element) {
        element.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        element.style.zIndex = '1';
        element.classList.remove('animate-spectacular-glow');
    }

    // Add hover effect helper
    addHoverEffect(element, transform) {
        element.style.transform = transform;
        element.style.transition = 'all 0.3s ease';
        element.style.zIndex = '10';
    }

    // Remove hover effect helper
    removeHoverEffect(element) {
        element.style.transform = 'scale(1) translateY(0)';
        element.style.zIndex = '1';
    }

    // Initialize floating elements
    initializeFloatingElements() {
        document.querySelectorAll('.icon-item').forEach((icon, index) => {
            icon.style.animation = `float ${3 + index}s ease-in-out infinite`;
            icon.style.animationDelay = `${index * 0.5}s`;
        });

        // Floating shapes in header
        document.querySelectorAll('.shape').forEach((shape, index) => {
            shape.style.animation = `floatRotate ${6 + index * 2}s ease-in-out infinite`;
            shape.style.animationDelay = `${index * 2}s`;
        });
    }

    // Initialize progress bars (if any)
    initializeProgressBars() {
        const progressBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width');
                    
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 500);
                    
                    observer.unobserve(bar);
                }
            });
        });

        progressBars.forEach(bar => observer.observe(bar));
    }

    // Initialize text animations
    initializeTextAnimations() {
        // Animate welcome title
        const welcomeTitle = document.querySelector('.welcome-title');
        if (welcomeTitle) {
            this.typeWriterEffect(welcomeTitle, 50);
        }

        // Animate section titles on scroll
        document.querySelectorAll('.section-title').forEach(title => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateTextReveal(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            });
            observer.observe(title);
        });
    }

    // Typewriter effect
    typeWriterEffect(element, speed = 100) {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid #4ecdc4';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 1000);
            }
        }, speed);
    }

    // Text reveal animation
    animateTextReveal(element) {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.animation = `fadeIn 0.1s ease-out ${index * 0.05}s both`;
            element.appendChild(span);
        });
    }

    // Scroll-based parallax effect
    initializeParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            // Parallax for header background
            const header = document.querySelector('.header');
            if (header) {
                header.style.transform = `translateY(${scrolled * 0.5}px)`;
            }

            // Parallax for floating shapes
            document.querySelectorAll('.shape').forEach((shape, index) => {
                const speed = 0.2 + (index * 0.1);
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });
    }

    // Enhanced mouse trail effect with health particles
    initializeMouseTrail() {
        const trail = [];
        const trailLength = 15;
        const healthIcons = ['❤️', '⚡', '🌟', '💫'];

        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            trail.push({
                x: e.clientX,
                y: e.clientY,
                time: Date.now(),
                icon: healthIcons[Math.floor(Math.random() * healthIcons.length)]
            });

            if (trail.length > trailLength) {
                trail.shift();
            }

            this.updateSpectacularTrail(trail);
        });
    }

    updateSpectacularTrail(trail) {
        // Remove old trail elements
        document.querySelectorAll('.spectacular-trail').forEach(el => {
            if (Date.now() - parseInt(el.dataset.time) > 1000) {
                el.remove();
            }
        });

        trail.forEach((point, index) => {
            if (index % 3 === 0) { // Create trail every 3rd point for performance
                const trailElement = document.createElement('div');
                trailElement.className = 'spectacular-trail';
                trailElement.dataset.time = point.time;

                const size = 15 - (index * 0.8);
                const opacity = (trail.length - index) / trail.length;

                trailElement.style.cssText = `
                    position: fixed;
                    left: ${point.x}px;
                    top: ${point.y}px;
                    width: ${size}px;
                    height: ${size}px;
                    background: radial-gradient(circle, rgba(78, 205, 196, ${opacity}), rgba(255, 107, 157, ${opacity * 0.5}));
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    transform: translate(-50%, -50%);
                    animation: trailFade 1s ease-out forwards;
                    box-shadow: 0 0 ${size}px rgba(78, 205, 196, ${opacity * 0.5});
                `;
                document.body.appendChild(trailElement);
            }
        });
    }

    // Create magic dust particles
    createMagicDust() {
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% chance every interval
                this.createMagicParticle();
            }
        }, 200);
    }

    createMagicParticle() {
        const particle = document.createElement('div');
        particle.className = 'magic-dust';

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 4 + 2;

        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            animation: magicSparkle 3s ease-out forwards;
        `;

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 3000);
    }

    // Initialize magnetic effects for cards
    initializeMagneticEffects() {
        document.querySelectorAll('.content-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                this.updateMagneticEffect(card, e);
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            });
        });
    }

    // Update magnetic effect based on mouse position
    updateMagneticEffect(element, event) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (event.clientX - centerX) * 0.1;
        const deltaY = (event.clientY - centerY) * 0.1;

        element.style.transform = `translateY(-20px) scale(1.03) rotateX(5deg) translate(${deltaX}px, ${deltaY}px)`;
    }

    // Initialize parallax effects
    initializeParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            // Parallax for header
            const header = document.querySelector('.header');
            if (header) {
                header.style.transform = `translateY(${scrolled * 0.3}px)`;
            }

            // Parallax for floating shapes
            document.querySelectorAll('.floating-shape').forEach((shape, index) => {
                const speed = 0.1 + (index * 0.05);
                const currentTransform = shape.style.transform;
                shape.style.transform = `${currentTransform} translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Create hover particles
    createHoverParticles(x, y) {
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'hover-particle';

            const angle = (i / 8) * Math.PI * 2;
            const distance = Math.random() * 50 + 30;
            const endX = x + Math.cos(angle) * distance;
            const endY = y + Math.sin(angle) * distance;

            particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: 6px;
                height: 6px;
                background: radial-gradient(circle, rgba(78, 205, 196, 0.8), transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                animation: particleExplode 0.8s ease-out forwards;
            `;

            document.body.appendChild(particle);

            // Animate particle
            particle.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                { transform: `translate(${endX - x - 3}px, ${endY - y - 3}px) scale(1)`, opacity: 0.5 },
                { transform: `translate(${endX - x - 3}px, ${endY - y - 3}px) scale(0)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'ease-out'
            });

            setTimeout(() => {
                particle.remove();
            }, 800);
        }
    }

    // Create icon glow effect
    createIconGlow(icon) {
        const glow = document.createElement('div');
        glow.className = 'icon-glow-effect';
        glow.style.cssText = `
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            border-radius: 50%;
            background: inherit;
            filter: blur(15px);
            opacity: 0.6;
            z-index: -1;
            animation: glowPulse 1s ease-in-out infinite alternate;
        `;
        icon.appendChild(glow);
    }

    // Remove icon glow effect
    removeIconGlow(icon) {
        const glow = icon.querySelector('.icon-glow-effect');
        if (glow) {
            glow.remove();
        }
    }

    // Initialize ripple effects
    initializeRippleEffects() {
        document.querySelectorAll('.content-card, .btn-primary').forEach(element => {
            element.addEventListener('click', (e) => {
                this.createRippleEffect(e, element);
            });
        });
    }

    // Create ripple effect
    createRippleEffect(event, element) {
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('div');
        const size = Math.max(rect.width, rect.height);

        ripple.style.cssText = `
            position: absolute;
            left: ${event.clientX - rect.left - size / 2}px;
            top: ${event.clientY - rect.top - size / 2}px;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(78, 205, 196, 0.3), transparent);
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
            z-index: 1;
        `;

        element.style.position = 'relative';
        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Start continuous animations
    startContinuousAnimations() {
        // Ensure animations persist after page refresh
        this.applyPersistentAnimations();

        // Animate header icons continuously
        document.querySelectorAll('.icon-item').forEach((icon, index) => {
            icon.style.animation = `float 3s ease-in-out infinite`;
            icon.style.animationDelay = `${index * 0.5}s`;
        });

        // Create periodic magic particles
        setInterval(() => {
            if (Math.random() < 0.1) {
                this.createMagicParticle();
            }
        }, 1000);

        // Restart card animations periodically to prevent loss
        setInterval(() => {
            this.refreshCardAnimations();
        }, 30000); // Refresh every 30 seconds
    }

    // Apply persistent animations that won't disappear
    applyPersistentAnimations() {
        // Re-apply all animation classes
        document.querySelectorAll('.content-card').forEach((card, index) => {
            card.classList.add('gpu-accelerated');

            // Ensure hover effects are always active
            card.addEventListener('mouseenter', (e) => {
                this.addSpectacularHoverEffect(card, e);
                this.createHoverParticles(e.clientX, e.clientY);
            });

            card.addEventListener('mouseleave', () => {
                this.removeSpectacularHoverEffect(card);
            });
        });

        // Re-apply icon animations
        document.querySelectorAll('.card-icon').forEach(icon => {
            if (!icon.style.animation) {
                const animationClass = icon.className.match(/animate-[\w-]+/);
                if (animationClass) {
                    icon.style.animation = this.getAnimationFromClass(animationClass[0]);
                }
            }
        });
    }

    // Get animation CSS from class name
    getAnimationFromClass(className) {
        const animations = {
            'animate-morph': 'morphShape 4s ease-in-out infinite',
            'animate-health-pulse': 'healthPulse 2s ease-in-out infinite',
            'animate-spectacular-glow': 'spectacularGlow 4s ease-in-out infinite',
            'animate-float': 'float 3s ease-in-out infinite',
            'animate-holographic': 'holographic 5s linear infinite',
            'animate-rainbow-border': 'rainbowBorder 3s linear infinite',
            'animate-heartbeat': 'heartbeat 1.5s ease-in-out infinite',
            'animate-neon-glow': 'neonGlow 2s ease-in-out infinite alternate'
        };
        return animations[className] || '';
    }

    // Refresh card animations to prevent disappearing
    refreshCardAnimations() {
        document.querySelectorAll('.card-icon').forEach(icon => {
            const currentAnimation = icon.style.animation;
            if (currentAnimation) {
                icon.style.animation = 'none';
                setTimeout(() => {
                    icon.style.animation = currentAnimation;
                }, 10);
            }
        });
    }
}

// Initialize spectacular animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SpectacularAnimationController();
});

// Add spectacular CSS animations
const spectacularStyles = document.createElement('style');
spectacularStyles.textContent = `
    /* Spectacular new animations */
    @keyframes shapeFloat {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
        }
        50% {
            transform: translateY(-50px) rotate(180deg);
            opacity: 0.3;
        }
    }

    @keyframes magicSparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
    }

    @keyframes particleExplode {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
    }

    @keyframes glowPulse {
        0% {
            opacity: 0.3;
            transform: scale(1);
        }
        100% {
            opacity: 0.8;
            transform: scale(1.1);
        }
    }

    @keyframes rippleEffect {
        0% {
            transform: scale(0);
            opacity: 0.6;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    /* Enhanced existing animations */
    @keyframes flipInY {
        from {
            transform: perspective(400px) rotateY(90deg);
            opacity: 0;
            filter: blur(5px);
        }
        40% {
            transform: perspective(400px) rotateY(-20deg);
            filter: blur(2px);
        }
        60% {
            transform: perspective(400px) rotateY(10deg);
            opacity: 1;
            filter: blur(1px);
        }
        80% {
            transform: perspective(400px) rotateY(-5deg);
            filter: blur(0px);
        }
        to {
            transform: perspective(400px);
            opacity: 1;
            filter: blur(0px);
        }
    }

    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.8) rotate(-10deg);
            filter: blur(3px);
        }
        to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0px);
        }
    }

    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale(0.3) rotate(-180deg);
            filter: blur(5px);
        }
        50% {
            opacity: 1;
            transform: scale(1.05) rotate(0deg);
            filter: blur(1px);
        }
        70% {
            transform: scale(0.9) rotate(5deg);
            filter: blur(0px);
        }
        100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0px);
        }
    }

    /* Utility classes for performance */
    .gpu-accelerated {
        transform: translateZ(0);
        will-change: transform, opacity;
    }

    .smooth-transition {
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
`;
document.head.appendChild(spectacularStyles);
