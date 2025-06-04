// COSINA Modal
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

            <div class="cooking-tips">
                <h3>💡 Cooking Tips</h3>
                <ul class="tips-list">
                    <li><strong>Rice paper handling:</strong> Don't over-soak the rice paper - just a quick dip in warm water</li>
                    <li><strong>Heat control:</strong> Use medium heat to ensure even cooking without burning</li>
                    <li><strong>Filling distribution:</strong> Spread filling evenly for consistent texture</li>
                    <li><strong>Crispiness secret:</strong> Let one side get golden before flipping</li>
                    <li><strong>Serving suggestion:</strong> Cut into wedges and serve with dipping sauce</li>
                </ul>
            </div>
        </div>
    `;

    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Make function globally accessible
window.showCosinaModal = showCosinaModal;
