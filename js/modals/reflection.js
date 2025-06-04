// Reflection Modal
function showReflectionModal() {
    currentModalIndex = 6;
    let content = `
        <div class="modal-header">
            <div class="modal-logo">
                <img src="images/LOGO.png" alt="Health Portfolio Logo" class="header-logo">
            </div>
            <h2 class="modal-title">💭 Personal Reflection</h2>
            <p class="modal-subtitle">My journey towards better health and wellness</p>
        </div>

        <div class="modal-section">
            <div class="reflection-intro">
                <h3>🌱 My Health Journey Reflection</h3>
                <p>Creating this health portfolio has been a transformative experience that has fundamentally changed how I approach wellness, nutrition, and physical activity. Here are my personal reflections on this journey.</p>
            </div>

            <div class="reflection-content">
                <div class="reflection-item">
                    <h4>📊 Food Logging Experience</h4>
                    <blockquote>
                        "Keeping a food log was a joyful endeavor. Taking pics every time I have something to eat. Not only do I record what my body intakes, but I also slowly got to develop a good photography skill in a close up shot, for the foods to be looking more enticing he-he. On the other hand, making a physical log became a reflective time to me. Checking what I have done to be in this state, and knowing what things I can still do for the rest of the day. <em>Logging changed the lagging behind of my health 😉.</em>"
                    </blockquote>
                    <p>The food logging process taught me mindfulness in eating. Before this project, I often ate without thinking about nutritional value or portion sizes. Now, I'm more conscious of what I consume and how it affects my energy levels and overall well-being.</p>
                </div>

                <div class="reflection-item">
                    <h4>🏃‍♂️ Physical Activity Insights</h4>
                    <p>As someone who spent most of my time reading and studying, incorporating regular physical activity was initially challenging. However, tracking my PE activities helped me realize that even small amounts of exercise can make a significant difference in my energy levels and mood.</p>
                    <p>The most surprising discovery was how much I enjoyed morning walks around the CPU campus. What started as a requirement became a cherished part of my daily routine that helps me clear my mind and prepare for the day ahead.</p>
                </div>

                <div class="reflection-item">
                    <h4>🍳 Cooking and Nutrition Awareness</h4>
                    <p>Learning to prepare healthy meals like the rice paper kimchi pancakes opened my eyes to the creative possibilities in healthy cooking. I discovered that nutritious food doesn't have to be boring or tasteless. The COSINA project taught me that cooking can be both fun and educational.</p>
                    <p>Understanding the nutritional benefits of different ingredients has made me more intentional about my food choices. I now look for ways to incorporate more vegetables, lean proteins, and whole grains into my meals.</p>
                </div>

                <div class="reflection-item">
                    <h4>📢 Health Advocacy Development</h4>
                    <p>Writing about healthier school canteens made me realize how much our environment influences our health choices. This project sparked my interest in health policy and advocacy, which I hope to explore further in my Political Science studies.</p>
                    <p>I've become more aware of the health challenges facing students and young people, and I feel motivated to be part of the solution through advocacy and education.</p>
                </div>

                <div class="reflection-item">
                    <h4>💻 Technology and Health Integration</h4>
                    <p>Creating this digital portfolio taught me valuable technical skills while serving a meaningful purpose. I learned that technology can be a powerful tool for health tracking, education, and motivation when used thoughtfully.</p>
                    <p>The process of building this website from scratch gave me confidence in my ability to learn new skills and apply them to real-world challenges.</p>
                </div>
            </div>

            <div class="key-learnings">
                <h3>🎯 Key Learnings and Insights</h3>
                <div class="learnings-grid">
                    <div class="learning-card">
                        <div class="learning-icon">🔄</div>
                        <h4>Consistency Over Perfection</h4>
                        <p>Small, consistent changes in diet and exercise are more sustainable than dramatic overhauls.</p>
                    </div>
                    <div class="learning-card">
                        <div class="learning-icon">📱</div>
                        <h4>Technology as a Tool</h4>
                        <p>Digital tracking and documentation can enhance awareness and motivation for healthy behaviors.</p>
                    </div>
                    <div class="learning-card">
                        <div class="learning-icon">🤝</div>
                        <h4>Community Impact</h4>
                        <p>Individual health choices can inspire others and contribute to broader community wellness.</p>
                    </div>
                    <div class="learning-card">
                        <div class="learning-icon">⚖️</div>
                        <h4>Balance is Key</h4>
                        <p>Sustainable health practices require balancing academic demands with self-care and wellness.</p>
                    </div>
                </div>
            </div>

            <div class="future-goals">
                <h3>🚀 Future Health Goals</h3>
                <div class="goals-timeline">
                    <div class="goal-item">
                        <div class="goal-period">Short-term (1-3 months)</div>
                        <ul>
                            <li>Continue daily food logging and photo documentation</li>
                            <li>Maintain regular morning walks and exercise routine</li>
                            <li>Try one new healthy recipe each week</li>
                            <li>Increase water intake to 10 glasses daily</li>
                        </ul>
                    </div>
                    <div class="goal-item">
                        <div class="goal-period">Medium-term (3-12 months)</div>
                        <ul>
                            <li>Expand physical activities to include swimming and cycling</li>
                            <li>Learn more about nutrition science and meal planning</li>
                            <li>Advocate for healthier food options on campus</li>
                            <li>Share health knowledge with fellow students</li>
                        </ul>
                    </div>
                    <div class="goal-item">
                        <div class="goal-period">Long-term (1+ years)</div>
                        <ul>
                            <li>Integrate health policy studies with Political Science curriculum</li>
                            <li>Develop leadership skills in health advocacy</li>
                            <li>Maintain lifelong healthy eating and exercise habits</li>
                            <li>Inspire positive health changes in my community</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="gratitude-section">
                <h3>🙏 Gratitude and Acknowledgments</h3>
                <p>I'm grateful for this opportunity to focus on my health and wellness in such a structured way. This project has shown me that taking care of my body and mind is not selfish—it's essential for being able to serve others and pursue my academic and personal goals effectively.</p>
                <p>Thank you to my instructors for creating this meaningful assignment that goes beyond academic requirements to promote real-world wellness skills. This experience has truly been life-changing.</p>
            </div>

            <div class="final-thoughts">
                <h3>💫 Final Thoughts</h3>
                <blockquote class="final-quote">
                    "Health is not just about what you're eating. It's also about what you're thinking and saying. This portfolio has taught me that true wellness encompasses physical, mental, and social well-being. As I continue my journey in Political Science, I carry with me the knowledge that personal health and community health are interconnected, and that small individual actions can contribute to larger positive changes in society."
                </blockquote>
            </div>
        </div>
    `;

    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Make function globally accessible
window.showReflectionModal = showReflectionModal;
