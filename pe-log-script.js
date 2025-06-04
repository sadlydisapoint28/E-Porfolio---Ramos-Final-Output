// PE Log JavaScript

// PE Activity Data
const peActivities = [
    {
        date: 'March 24, Monday',
        time: '6-7am',
        activity: '🚶‍♂️ Walk around CPU',
        description: 'Morning walk around the Central Philippine University campus. Fresh air and light exercise to start the day energized.',
        image: 'images/PE Log/Pic 1.jpg',
        duration: '1 hour',
        intensity: 'Light',
        location: 'CPU Campus',
        calories: '150-200'
    },
    {
        date: 'March 26, Wednesday',
        time: '10pm',
        activity: '🏃‍♂️ Jogging from CPU to Jaro Plaza',
        description: 'Evening jogging from CPU to Jaro Plaza and back to CPU again. Long-distance cardio workout for endurance building.',
        image: 'images/PE Log/Pic 2.jpg',
        duration: '1.5 hours',
        intensity: 'High',
        location: 'CPU to Jaro Plaza',
        calories: '400-500'
    },
    {
        date: 'March 28, Friday',
        time: '7am',
        activity: '🚶‍♂️ Walk for almost 1hr',
        description: 'Morning walk session lasting almost one hour. Great way to start the day with light cardio exercise.',
        image: 'images/PE Log/Pic 3.jpg',
        duration: '1 hour',
        intensity: 'Light',
        location: 'Local Area',
        calories: '200-250'
    },
    {
        date: 'March 29, Saturday',
        time: '5-6am',
        activity: '🏀 Basketball',
        description: 'Early morning basketball session. Team sport that combines cardio, agility, and coordination training.',
        image: 'images/PE Log/Pic 4.jpg',
        duration: '1 hour',
        intensity: 'High',
        location: 'Basketball Court',
        calories: '350-450'
    },
    {
        date: 'March 31, Monday',
        time: '9pm',
        activity: '🚶‍♂️ Walk to Jaro Plaza',
        description: 'Evening walk to Jaro Plaza. Relaxing end-of-day exercise to unwind and stay active.',
        image: 'images/PE Log/Pic 5.jpg',
        duration: '45 minutes',
        intensity: 'Light',
        location: 'Jaro Plaza',
        calories: '150-200'
    },
    {
        date: 'April 2, Wednesday',
        time: '9pm',
        activity: '🏃‍♂️ Jogging in Jaro Plaza',
        description: 'Evening jogging session in Jaro Plaza. Good cardio workout in a scenic location.',
        image: 'images/PE Log/Pic 6.jpg',
        duration: '1 hour',
        intensity: 'Moderate',
        location: 'Jaro Plaza',
        calories: '300-400'
    },
    {
        date: 'April 4, Friday',
        time: '7am',
        activity: '🚶‍♂️ Walk in Jaro Plaza',
        description: 'Morning walk in Jaro Plaza. Peaceful start to the day with light exercise in a beautiful setting.',
        image: 'images/PE Log/Pic 7.jpg',
        duration: '1 hour',
        intensity: 'Light',
        location: 'Jaro Plaza',
        calories: '150-200'
    },
    {
        date: 'April 7, Monday',
        time: '7-9:30am',
        activity: '🏃‍♂️ Jogging in Esplanade',
        description: 'Extended morning jogging session in Esplanade. Long cardio workout for endurance and stamina building.',
        image: 'images/PE Log/Pic 8.jpg',
        duration: '2.5 hours',
        intensity: 'High',
        location: 'Esplanade',
        calories: '600-800'
    },
    {
        date: 'April 9, Wednesday',
        time: '6-7pm',
        activity: '🏃‍♂️ Jogging in Brgy. Dungon Rd',
        description: 'Evening jogging session in Barangay Dungon Road. Exploring different routes for variety in exercise routine.',
        image: 'images/PE Log/Pic 9.jpg',
        duration: '1 hour',
        intensity: 'Moderate',
        location: 'Brgy. Dungon Road',
        calories: '300-400'
    },
    {
        date: 'April 11, Friday',
        time: '8-10pm',
        activity: '🏃‍♂️ Jogging at Diversion',
        description: 'Night jogging session at Diversion Road. Extended cardio workout in a well-lit urban area.',
        image: 'images/PE Log/Pic 10.jpg',
        duration: '2 hours',
        intensity: 'High',
        location: 'Diversion Road',
        calories: '500-650'
    },
    {
        date: 'April 14, Monday',
        time: '6-7am',
        activity: '🚶‍♂️ Walking to Talipapa',
        description: 'Morning walk to Talipapa market. Combining exercise with daily errands for practical fitness.',
        image: 'images/PE Log/Pic 11.jpg',
        duration: '1 hour',
        intensity: 'Light',
        location: 'Talipapa',
        calories: '150-200'
    },
    {
        date: 'April 16, Wednesday',
        time: '7-8pm',
        activity: '🏃‍♂️ Jogging in Jaro Plaza',
        description: 'Evening jogging session in Jaro Plaza. Consistent routine in a familiar and comfortable location.',
        image: 'images/PE Log/Pic 12.jpg',
        duration: '1 hour',
        intensity: 'Moderate',
        location: 'Jaro Plaza',
        calories: '300-400'
    },
    {
        date: 'April 18, Friday',
        time: '5-6pm',
        activity: '🏃‍♂️ Jogging in Jaro Plaza',
        description: 'Afternoon jogging session in Jaro Plaza. Regular exercise routine for maintaining fitness consistency.',
        image: 'images/PE Log/Pic 13.jpg',
        duration: '1 hour',
        intensity: 'Moderate',
        location: 'Jaro Plaza',
        calories: '300-400'
    },
    {
        date: 'April 21, Monday',
        time: '4-6am',
        activity: '🏃‍♂️ Jogging in Jaro Plaza',
        description: 'Early morning jogging session in Jaro Plaza. Extended 2-hour cardio workout to start the week strong.',
        image: 'images/PE Log/Pic 14.jpg',
        duration: '2 hours',
        intensity: 'High',
        location: 'Jaro Plaza',
        calories: '500-650'
    },
    {
        date: 'April 23, Wednesday',
        time: '8-9pm',
        activity: '🏃‍♂️ Jogging in Jaro Plaza',
        description: 'Evening jogging session in Jaro Plaza. Maintaining regular exercise schedule despite busy academic demands.',
        image: 'images/PE Log/Pic 15.jpg',
        duration: '1 hour',
        intensity: 'Moderate',
        location: 'Jaro Plaza',
        calories: '300-400'
    },
    {
        date: 'April 25, Friday',
        time: '8-10pm',
        activity: '🏃‍♂️ Jogging in Diversion Road',
        description: 'Extended night jogging session in Diversion Road. Challenging 2-hour workout to end the week with high intensity.',
        image: 'images/PE Log/Pic 16.jpg',
        duration: '2 hours',
        intensity: 'High',
        location: 'Diversion Road',
        calories: '500-650'
    }
];

// DOM Elements
let exerciseTimeline;

// Preload images function
function preloadImages() {
    console.log('Preloading PE activity images...');
    peActivities.forEach((activity, index) => {
        const img = new Image();
        img.onload = () => console.log(`Image ${index + 1} loaded:`, activity.image);
        img.onerror = () => console.error(`Failed to load image ${index + 1}:`, activity.image);
        img.src = activity.image;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('PE Log script loaded');
    console.log('Number of activities available:', peActivities.length);

    // Preload images immediately
    preloadImages();

    // Initialize components immediately
    initializeNavigation();

    // Load activities immediately - no delay
    loadPEActivities();

    // Hide loading screen immediately
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }

    // Quick fallback check after 500ms
    setTimeout(() => {
        const timeline = document.getElementById('exerciseTimeline');
        if (timeline && timeline.children.length === 0) {
            console.log('No activities loaded, trying immediate fallback...');
            forceLoadActivities();
        }
    }, 500);

    // NO ANIMATIONS - Pictures should show immediately
    // initializeAnimations(); // Removed to make pictures visible instantly
});

// Also initialize on window load as backup
window.addEventListener('load', function() {
    console.log('Window fully loaded, checking activities...');
    const timeline = document.getElementById('exerciseTimeline');
    if (timeline && timeline.children.length === 0) {
        console.log('Window load: No activities found, loading now...');
        loadPEActivities();
    }
});

// Navigation functionality
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
}

// Load PE Activities
function loadPEActivities() {
    console.log('Loading PE Activities...');

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        console.log('DOM still loading, waiting...');
        document.addEventListener('DOMContentLoaded', loadPEActivities);
        return;
    }

    exerciseTimeline = document.getElementById('exerciseTimeline');

    if (!exerciseTimeline) {
        console.error('Exercise timeline element not found!');
        // Try again after a short delay
        setTimeout(loadPEActivities, 100);
        return;
    }

    console.log('Found exercise timeline element');
    console.log('Number of activities:', peActivities.length);

    // Clear any existing content
    exerciseTimeline.innerHTML = '';

    // Add activities one by one
    peActivities.forEach((activity, index) => {
        console.log(`Creating activity ${index + 1}:`, activity.activity);
        try {
            const activityElement = createActivityElement(activity, index);
            exerciseTimeline.appendChild(activityElement);
        } catch (error) {
            console.error(`Error creating activity ${index + 1}:`, error);
        }
    });

    console.log('All activities loaded successfully');

    // Trigger a custom event to indicate activities are loaded
    document.dispatchEvent(new CustomEvent('activitiesLoaded'));
}

// Force load activities function
function forceLoadActivities() {
    console.log('Force loading activities...');
    const timeline = document.getElementById('exerciseTimeline');

    if (!timeline) {
        console.error('Timeline element not found!');
        return;
    }

    // Clear timeline
    timeline.innerHTML = '';

    // Add a test message first
    timeline.innerHTML = '<div style="text-align: center; padding: 2rem; color: #666;">Loading PE activities...</div>';

    // Load activities after a short delay
    setTimeout(() => {
        timeline.innerHTML = '';

        // Manually create activities if peActivities is empty or undefined
        if (!peActivities || peActivities.length === 0) {
            console.error('No activities data found!');
            timeline.innerHTML = '<div style="text-align: center; padding: 2rem; color: #ff4757;">No activities found. Please check the data.</div>';
            return;
        }

        peActivities.forEach((activity, index) => {
            const activityElement = createActivityElement(activity, index);
            timeline.appendChild(activityElement);
        });

        console.log('Force load completed with', peActivities.length, 'activities');
    }, 500);
}

// Fallback function to load activities
function loadPEActivitiesFallback() {
    console.log('Loading PE Activities with fallback method...');
    const timeline = document.getElementById('exerciseTimeline');

    if (!timeline) {
        console.error('Timeline element still not found in fallback!');
        return;
    }

    // Clear any existing content
    timeline.innerHTML = '';

    // Create a simple test activity first
    const testActivity = document.createElement('div');
    testActivity.className = 'exercise-entry';
    testActivity.innerHTML = `
        <div class="exercise-date">Test Activity</div>
        <div class="exercise-time">Loading...</div>
        <div class="exercise-activity">
            <h4>🔄 Loading Activities...</h4>
            <p>Please wait while we load your PE activities.</p>
        </div>
    `;
    timeline.appendChild(testActivity);

    // Then try to load real activities
    setTimeout(() => {
        timeline.innerHTML = '';
        peActivities.forEach((activity, index) => {
            const activityElement = createActivityElement(activity, index);
            timeline.appendChild(activityElement);
        });
    }, 1000);
}

// Create Activity Element
function createActivityElement(activity, index) {
    try {
        const activityDiv = document.createElement('div');
        activityDiv.className = 'exercise-entry';
        // Remove animation delay to show pictures immediately
        // activityDiv.style.animationDelay = `${index * 0.2}s`;

        activityDiv.innerHTML = `
            <div class="exercise-date">${activity.date}</div>
            <div class="exercise-time">${activity.time}</div>
            <div class="exercise-activity">
                <div class="exercise-image">
                    <img src="${activity.image}" alt="${activity.activity}" class="pe-activity-image"
                         onerror="console.log('Image failed to load: ${activity.image}'); this.style.display='none';">
                </div>
                <h4>${activity.activity}</h4>
                <p>${activity.description}</p>
                <div class="exercise-details">
                    <span class="detail-badge"><i class="fas fa-clock"></i> ${activity.duration}</span>
                    <span class="detail-badge"><i class="fas fa-tachometer-alt"></i> ${activity.intensity}</span>
                    <span class="detail-badge"><i class="fas fa-map-marker-alt"></i> ${activity.location}</span>
                    <span class="detail-badge"><i class="fas fa-fire"></i> ${activity.calories} cal</span>
                </div>
            </div>
        `;

        return activityDiv;
    } catch (error) {
        console.error('Error creating activity element:', error);
        return document.createElement('div');
    }
}

// Initialize Animations - DISABLED TO SHOW PICTURES IMMEDIATELY
/*
function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.pe-log-intro, .exercise-records, .activity-summary, .pe-reflection').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Animate exercise entries
    setTimeout(() => {
        document.querySelectorAll('.exercise-entry').forEach((entry, index) => {
            entry.style.opacity = '0';
            entry.style.transform = 'translateX(-30px)';
            entry.style.transition = 'all 0.6s ease-out';

            setTimeout(() => {
                entry.style.opacity = '1';
                entry.style.transform = 'translateX(0)';
            }, index * 200);
        });
    }, 500);
}
*/

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

// Add hover effects to activity images
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('pe-activity-image')) {
        // Create modal for image viewing
        createImageModal(e.target.src, e.target.alt);
    }
});

// Create Image Modal
function createImageModal(imageSrc, imageAlt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(255, 71, 87, 0.1));
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
        animation: modalFadeIn 0.3s ease-out;
    `;

    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
        position: relative;
        max-width: 95%;
        max-height: 95%;
        padding: 20px;
        background: linear-gradient(135deg, #ff4757, #ff6b35, #f7931e, #2a5298);
        border-radius: 25px;
        box-shadow: 0 30px 80px rgba(255, 71, 87, 0.4);
        animation: imageZoomIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = imageAlt;
    img.style.cssText = `
        width: 100%;
        height: 100%;
        max-width: 1200px;
        max-height: 800px;
        object-fit: contain;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1) contrast(1.1) saturate(1.2);
    `;

    const closeButton = document.createElement('div');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
        position: absolute;
        top: -10px;
        right: -10px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #ff4757, #ff6b35);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 10px 25px rgba(255, 71, 87, 0.4);
        transition: all 0.3s ease;
    `;

    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.transform = 'scale(1.1) rotate(90deg)';
        closeButton.style.boxShadow = '0 15px 35px rgba(255, 71, 87, 0.6)';
    });

    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.transform = 'scale(1) rotate(0deg)';
        closeButton.style.boxShadow = '0 10px 25px rgba(255, 71, 87, 0.4)';
    });

    imageContainer.appendChild(img);
    imageContainer.appendChild(closeButton);
    modal.appendChild(imageContainer);
    document.body.appendChild(modal);

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes imageZoomIn {
            from { transform: scale(0.5) rotate(-5deg); opacity: 0; }
            to { transform: scale(1) rotate(0deg); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Close modal functions
    const closeModal = () => {
        modal.style.animation = 'modalFadeIn 0.3s ease-out reverse';
        setTimeout(() => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        }, 300);
    };

    // Close modal on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on close button click
    closeButton.addEventListener('click', closeModal);

    // Close modal on escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Add loading animation to images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.pe-activity-image');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.display = 'none';
            // Show placeholder or fallback
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.style.cssText = `
                width: 100%;
                max-width: 400px;
                height: 250px;
                background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #666;
                font-size: 1.2rem;
                border: 3px solid #ddd;
            `;
            placeholder.innerHTML = '<i class="fas fa-image"></i> Image not available';
            this.parentNode.replaceChild(placeholder, this);
        });
    });
});
