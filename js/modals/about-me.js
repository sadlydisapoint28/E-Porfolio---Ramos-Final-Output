// About Me Modal
function showAboutMeModal() {
    currentModalIndex = 0;
    let content = `
        <div class="modal-header">
            <div class="modal-logo">
                <img src="images/LOGO.png" alt="Health Portfolio Logo" class="header-logo">
            </div>
            <h2 class="modal-title">👋 About Me</h2>
            <p class="modal-subtitle">Gabriel Ramos - Health & Wellness Journey</p>
        </div>

        <div class="modal-section">
            <div class="about-intro">
                <h3>🎓 Student Profile</h3>
                <div class="profile-info">
                    <p><strong>Name:</strong> Gabriel Ramos</p>
                    <p><strong>Course:</strong> AB-Political Science</p>
                    <p><strong>Year Level:</strong> 1st Year</p>
                    <p><strong>University:</strong> West Visayas State University</p>
                </div>
            </div>

            <div class="about-content">
                <h3>📚 My Journey from Sedentary to Active</h3>
                <p>Hello! I'm Gabriel, a first-year Political Science student at WVSU. Like many students, I used to spend most of my time buried in books and academic materials. While I've always been passionate about reading and learning, I realized that my sedentary lifestyle was affecting my overall well-being.</p>
                
                <p>This health portfolio represents a significant turning point in my life. What started as a simple class requirement became a transformative journey toward better health and wellness. Through consistent food logging and physical activity tracking, I've developed habits that support both my academic performance and personal health goals.</p>

                <h3>🌱 Personal Growth & Development</h3>
                <p>Creating this website and maintaining these health logs has taught me valuable lessons about:</p>
                <ul class="growth-list">
                    <li><strong>Self-awareness:</strong> Understanding my eating patterns and activity levels</li>
                    <li><strong>Consistency:</strong> Building sustainable daily habits</li>
                    <li><strong>Balance:</strong> Managing academic demands while prioritizing health</li>
                    <li><strong>Technology skills:</strong> Learning web development for the first time</li>
                    <li><strong>Advocacy:</strong> Recognizing the importance of healthy environments</li>
                </ul>

                <h3>🎯 Goals & Aspirations</h3>
                <p>As I continue my academic journey in Political Science, I'm committed to maintaining the healthy lifestyle habits I've developed. My goals include:</p>
                <ul class="goals-list">
                    <li>Continuing regular physical activity despite busy academic schedules</li>
                    <li>Maintaining mindful eating habits and proper nutrition</li>
                    <li>Advocating for healthier campus environments</li>
                    <li>Sharing my wellness journey to inspire fellow students</li>
                    <li>Integrating health policy interests with my political science studies</li>
                </ul>

                <h3>💭 Personal Philosophy</h3>
                <blockquote class="philosophy-quote">
                    "Health is not just about what you're eating. It's also about what you're thinking and saying."
                </blockquote>
                <p>I believe that true wellness encompasses physical, mental, and social well-being. This portfolio reflects my commitment to a holistic approach to health that supports my academic success and personal growth.</p>
            </div>
        </div>
    `;

    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Make function globally accessible
window.showAboutMeModal = showAboutMeModal;
