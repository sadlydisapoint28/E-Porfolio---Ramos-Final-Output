// Food Log Modal
function showFoodLogModal() {
    currentModalIndex = 2;
    let content = `
        <div class="modal-header">
            <div class="modal-logo">
                <img src="images/LOGO.png" alt="Health Portfolio Logo" class="header-logo">
            </div>
            <h2 class="modal-title">🍽️ Food Diary</h2>
            <p class="modal-subtitle">Track your daily nutrition and eating habits</p>
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

            <div class="food-insights">
                <h3>🎯 Key Insights from Food Logging</h3>
                <div class="insights-grid">
                    <div class="insight-card">
                        <div class="insight-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h4>Meal Timing</h4>
                        <p>Regular meal times help maintain energy levels throughout study sessions</p>
                    </div>
                    <div class="insight-card">
                        <div class="insight-icon">
                            <i class="fas fa-apple-alt"></i>
                        </div>
                        <h4>Balanced Nutrition</h4>
                        <p>Including fruits and vegetables improves concentration and mood</p>
                    </div>
                    <div class="insight-card">
                        <div class="insight-icon">
                            <i class="fas fa-tint"></i>
                        </div>
                        <h4>Hydration</h4>
                        <p>Staying hydrated is crucial for cognitive function and alertness</p>
                    </div>
                    <div class="insight-card">
                        <div class="insight-icon">
                            <i class="fas fa-camera"></i>
                        </div>
                        <h4>Visual Documentation</h4>
                        <p>Taking photos helps develop awareness of portion sizes and food choices</p>
                    </div>
                </div>
            </div>

            <div class="nutrition-goals">
                <h3>🥗 Nutrition Goals & Achievements</h3>
                <div class="goals-list">
                    <div class="goal-item achieved">
                        <i class="fas fa-check-circle"></i>
                        <span>Eat at least 3 servings of vegetables daily</span>
                    </div>
                    <div class="goal-item achieved">
                        <i class="fas fa-check-circle"></i>
                        <span>Include protein in every meal</span>
                    </div>
                    <div class="goal-item in-progress">
                        <i class="fas fa-clock"></i>
                        <span>Reduce processed food consumption</span>
                    </div>
                    <div class="goal-item achieved">
                        <i class="fas fa-check-circle"></i>
                        <span>Drink 8 glasses of water daily</span>
                    </div>
                    <div class="goal-item in-progress">
                        <i class="fas fa-clock"></i>
                        <span>Try new healthy recipes weekly</span>
                    </div>
                </div>
            </div>

            <div class="food-reflection">
                <h3>💭 Personal Reflection on Food Logging</h3>
                <blockquote>
                    "Keeping a food log was a joyful endeavor. Taking pics every time I have something to eat. Not only do I record what my body intakes, but I also slowly got to develop a good photography skill in a close up shot, for the foods to be looking more enticing he-he. On the other hand, making a physical log became a reflective time to me. Checking what I have done to be in this state, and knowing what things I can still do for the rest of the day. <em>Logging changed the lagging behind of my health 😉.</em>"
                </blockquote>
            </div>

            <div class="food-tips">
                <h3>💡 Tips for Successful Food Logging</h3>
                <ul class="tips-list">
                    <li><strong>Be consistent:</strong> Log meals immediately after eating</li>
                    <li><strong>Take photos:</strong> Visual records help with portion awareness</li>
                    <li><strong>Note feelings:</strong> Track how foods affect your energy and mood</li>
                    <li><strong>Plan ahead:</strong> Use logs to plan healthier meals</li>
                    <li><strong>Be honest:</strong> Include everything, even snacks and drinks</li>
                    <li><strong>Review regularly:</strong> Look for patterns and areas for improvement</li>
                </ul>
            </div>
        </div>
    `;

    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Make function globally accessible
window.showFoodLogModal = showFoodLogModal;
