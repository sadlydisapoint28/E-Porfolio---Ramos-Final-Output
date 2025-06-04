// Advocacy Modal
function showAdvocacyModal() {
    currentModalIndex = 1;
    let content = `
        <div class="modal-header">
            <div class="modal-logo">
                <img src="images/LOGO.png" alt="Health Portfolio Logo" class="header-logo">
            </div>
            <h2 class="modal-title">📢 Health Advocacy</h2>
            <p class="modal-subtitle">Fueling Our Futures: A Call for Healthier School Canteens</p>
        </div>

        <div class="modal-section">
            <div class="advocacy-intro">
                <h3>🏫 My Advocacy Essay</h3>
                <p class="essay-subtitle"><em>"Fueling Our Futures: A Call for Healthier School Canteens"</em></p>
            </div>

            <div class="essay-content">
                <p>As students, we spend a significant portion of our day on campus, making the school canteen our primary source of nutrition during these crucial hours. However, many school canteens prioritize convenience and profit over nutritional value, offering students limited healthy options. This essay advocates for the transformation of school canteens into spaces that promote health, wellness, and academic success.</p>

                <h4>🍎 The Current State of School Nutrition</h4>
                <p>Walking through most school canteens, students are greeted with an abundance of fried foods, sugary drinks, and processed snacks. While these options may be affordable and appealing, they contribute to poor dietary habits that can affect concentration, energy levels, and long-term health. The lack of fresh fruits, vegetables, and balanced meal options forces students to make unhealthy choices or seek alternatives outside campus.</p>

                <h4>💡 The Impact on Student Performance</h4>
                <p>Research consistently shows that proper nutrition directly impacts cognitive function, memory, and academic performance. Students who consume balanced meals with adequate nutrients demonstrate better concentration, improved mood stability, and enhanced learning capacity. Conversely, diets high in processed foods and sugar can lead to energy crashes, difficulty focusing, and decreased academic achievement.</p>

                <h4>🌟 Vision for Healthier School Canteens</h4>
                <p>Imagine school canteens that offer:</p>
                <ul class="vision-list">
                    <li><strong>Fresh, locally-sourced ingredients</strong> that support both student health and local farmers</li>
                    <li><strong>Balanced meal options</strong> that include vegetables, lean proteins, and whole grains</li>
                    <li><strong>Affordable pricing</strong> that makes healthy choices accessible to all students</li>
                    <li><strong>Educational displays</strong> that teach students about nutrition and healthy eating</li>
                    <li><strong>Variety and cultural sensitivity</strong> that respects diverse dietary needs and preferences</li>
                </ul>

                <h4>🚀 Practical Steps for Implementation</h4>
                <ol class="implementation-steps">
                    <li><strong>Policy Development:</strong> Establish nutritional guidelines for all food sold on campus</li>
                    <li><strong>Vendor Partnerships:</strong> Work with suppliers who prioritize fresh, healthy ingredients</li>
                    <li><strong>Student Involvement:</strong> Create student committees to provide feedback and suggestions</li>
                    <li><strong>Gradual Transition:</strong> Implement changes progressively to allow adaptation</li>
                    <li><strong>Education Programs:</strong> Offer workshops on nutrition and healthy cooking</li>
                    <li><strong>Monitoring and Evaluation:</strong> Regularly assess the impact of changes on student health and satisfaction</li>
                </ol>

                <h4>💰 Addressing Economic Concerns</h4>
                <p>One common objection to healthier school canteens is cost. However, investing in student health yields long-term benefits including reduced healthcare costs, improved academic performance, and better overall campus culture. Schools can explore partnerships with local farms, government nutrition programs, and health organizations to make healthy options financially viable.</p>

                <h4>🤝 Building a Community of Health</h4>
                <p>Transforming school canteens is not just about changing menus—it's about creating a culture that values health and wellness. When schools prioritize nutritious food options, they send a powerful message that student well-being matters. This creates a ripple effect that extends beyond campus, influencing families and communities to make healthier choices.</p>

                <h4>🎯 Call to Action</h4>
                <p>As students, we have the power to advocate for change. We can:</p>
                <ul class="action-list">
                    <li>Voice our concerns and suggestions to school administration</li>
                    <li>Support healthy food vendors when available</li>
                    <li>Organize awareness campaigns about nutrition and health</li>
                    <li>Share our experiences and advocate for policy changes</li>
                    <li>Lead by example in our own food choices</li>
                </ul>

                <div class="conclusion">
                    <h4>🌈 Conclusion</h4>
                    <p>The transformation of school canteens represents an investment in our collective future. By providing students with nutritious, affordable, and appealing food options, schools can support academic success, promote lifelong healthy habits, and create environments where students thrive. The time for change is now—let's work together to fuel our futures with the nutrition we deserve.</p>
                </div>
            </div>
        </div>
    `;

    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Make function globally accessible
window.showAdvocacyModal = showAdvocacyModal;
