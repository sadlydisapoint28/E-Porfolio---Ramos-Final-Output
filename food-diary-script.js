// Food Diary JavaScript - With Detailed Food Information

// Food data with detailed information
const foodData = {
    // February 2024
    'feb_monday_breakfast': {
        name: 'Caesar Salad',
        image: 'images/Food Log/Caesar salad.jpg',
        description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese.',
        calories: 320,
        protein: '12g',
        carbs: '18g',
        fat: '24g',
        fiber: '4g'
    },
    'feb_monday_lunch': {
        name: 'Spaghetti',
        image: 'images/Food Log/Spagetti.jpg',
        description: 'Classic Italian pasta with tomato sauce, ground meat, and herbs.',
        calories: 450,
        protein: '18g',
        carbs: '65g',
        fat: '14g',
        fiber: '6g'
    },
    'feb_monday_dinner': {
        name: 'Corned Beef with Rice',
        image: 'images/Food Log/Corned beef with mashed sardines.jpg',
        description: 'Savory corned beef served with steamed white rice.',
        calories: 380,
        protein: '22g',
        carbs: '45g',
        fat: '12g',
        fiber: '2g'
    },
    'feb_monday_others': {
        name: 'Yogurt',
        image: 'images/Food Log/Yogurt.jpg',
        description: 'Creamy Greek yogurt with natural probiotics.',
        calories: 150,
        protein: '15g',
        carbs: '12g',
        fat: '8g',
        fiber: '0g'
    },

    // March 2024
    'monday_breakfast': {
        name: 'Cheesy Corned Beef',
        image: 'images/Food Log/Cheesy corned beef with rice.jpg',
        description: 'Delicious corned beef topped with melted cheese, served with steamed rice. A hearty Filipino breakfast that provides energy for the day.',
        calories: 420,
        protein: '25g',
        carbs: '48g',
        fat: '16g',
        fiber: '3g'
    },
    'monday_snacks1': {
        name: 'Kamotique',
        image: 'images/Food Log/Kamotique.jpg',
        description: 'Traditional Filipino sweet potato snack, naturally sweet and nutritious.',
        calories: 180,
        protein: '4g',
        carbs: '42g',
        fat: '1g',
        fiber: '6g'
    },
    'monday_lunch': {
        name: 'Shells, Fried Fish, Hot Chocolate',
        image: 'images/Food Log/Shells, fried fish, hotdogs, lumpia, gabi, with rice and herbal tea.jpg',
        description: 'A complete meal with pasta shells, crispy fried fish, and warm hot chocolate drink.',
        calories: 520,
        protein: '28g',
        carbs: '58g',
        fat: '20g',
        fiber: '4g'
    },
    'monday_snacks2': {
        name: 'Chocolate',
        image: 'images/Food Log/Chocolate.jpg',
        description: 'Sweet chocolate treat for afternoon energy boost.',
        calories: 200,
        protein: '3g',
        carbs: '24g',
        fat: '12g',
        fiber: '2g'
    },
    'monday_dinner': {
        name: 'Bulalo, Fried Fish and Rice',
        image: 'images/Food Log/Bulalo, fried fish and rice.jpg',
        description: 'Traditional Filipino beef bone marrow soup with fried fish and rice.',
        calories: 480,
        protein: '32g',
        carbs: '45g',
        fat: '18g',
        fiber: '3g'
    },
    'monday_others': {
        name: 'Ice Cream (Corn Flavor)',
        image: 'images/Food Log/Ice cream (corn flavor).jpg',
        description: 'Unique corn-flavored ice cream, a Filipino favorite dessert.',
        calories: 220,
        protein: '4g',
        carbs: '28g',
        fat: '11g',
        fiber: '1g'
    },

    // February Wednesday
    'feb_wednesday_breakfast': {
        name: 'Carbonara',
        image: 'images/Food Log/Carbonara.jpg',
        description: 'Creamy pasta with bacon, eggs, and parmesan cheese.',
        calories: 480,
        protein: '20g',
        carbs: '55g',
        fat: '22g',
        fiber: '3g'
    },
    'feb_wednesday_snacks1': {
        name: 'Waffles',
        image: 'images/Food Log/Waffles.jpg',
        description: 'Sweet Belgian-style waffles, perfect for snacking.',
        calories: 250,
        protein: '6g',
        carbs: '35g',
        fat: '10g',
        fiber: '2g'
    },
    'feb_wednesday_lunch': {
        name: 'Canned Food and Fruit Salad',
        image: 'images/Food Log/Canned food and fruit salad.jpg',
        description: 'Mixed canned goods with fresh fruit salad for a balanced meal.',
        calories: 320,
        protein: '15g',
        carbs: '45g',
        fat: '8g',
        fiber: '5g'
    },
    'feb_wednesday_snacks2': {
        name: 'Fried Flavored Chicken',
        image: 'images/Food Log/Fried Flavored chicken.jpg',
        description: 'Crispy fried chicken with special seasoning.',
        calories: 380,
        protein: '28g',
        carbs: '12g',
        fat: '25g',
        fiber: '1g'
    },
    'feb_wednesday_dinner': {
        name: 'Chocolate',
        image: 'images/Food Log/Chocolate.jpg',
        description: 'Sweet chocolate treat for dessert.',
        calories: 200,
        protein: '3g',
        carbs: '24g',
        fat: '12g',
        fiber: '2g'
    },

    // February Friday
    'feb_friday_breakfast': {
        name: 'Adobong Atay with Veggies & Rice',
        image: 'images/Food Log/Adobong atay with veggies and rice.jpg',
        description: 'Traditional Filipino liver adobo with vegetables and rice.',
        calories: 420,
        protein: '25g',
        carbs: '48g',
        fat: '15g',
        fiber: '4g'
    },
    'feb_friday_lunch': {
        name: 'Fried Chicken with Softdrink',
        image: 'images/Food Log/Fried chicken with softdrink.jpg',
        description: 'Crispy fried chicken served with refreshing soft drink.',
        calories: 520,
        protein: '30g',
        carbs: '35g',
        fat: '28g',
        fiber: '2g'
    },
    'feb_friday_snacks2': {
        name: 'Pancit Canton',
        image: 'images/Food Log/Pancit canton.jpg',
        description: 'Filipino stir-fried noodles with vegetables and meat.',
        calories: 350,
        protein: '12g',
        carbs: '55g',
        fat: '10g',
        fiber: '3g'
    },

    // March Wednesday
    'wednesday_breakfast': {
        name: 'Corned beef with rice and hotdog',
        image: 'images/Food Log/Corned beef with herbal tea and rice.jpg',
        description: 'Savory corned beef with hotdog served with rice and herbal tea.',
        calories: 420,
        protein: '25g',
        carbs: '45g',
        fat: '18g',
        fiber: '3g'
    },
    'wednesday_snacks1': {
        name: 'Pili nut snack',
        image: 'images/Food Log/Pili nut snack.jpg',
        description: 'Traditional Filipino nuts, rich in healthy fats and protein.',
        calories: 180,
        protein: '6g',
        carbs: '8g',
        fat: '16g',
        fiber: '3g'
    },
    'wednesday_lunch': {
        name: 'Bulalo with rice',
        image: 'images/Food Log/Bulalo with rice.jpg',
        description: 'Filipino beef bone marrow soup served with steamed rice.',
        calories: 480,
        protein: '30g',
        carbs: '42g',
        fat: '20g',
        fiber: '4g'
    },
    'wednesday_snacks2': {
        name: 'Toggie',
        image: 'images/Food Log/Togue.jpg',
        description: 'Fresh bean sprouts, a healthy and crunchy vegetable snack.',
        calories: 120,
        protein: '8g',
        carbs: '15g',
        fat: '2g',
        fiber: '6g'
    },
    'wednesday_dinner': {
        name: 'Pancit canton with rice',
        image: 'images/Food Log/Pancit canton with rice.jpg',
        description: 'Stir-fried noodles served with steamed rice.',
        calories: 420,
        protein: '15g',
        carbs: '68g',
        fat: '12g',
        fiber: '4g'
    },
    'wednesday_others': {
        name: 'Kwek-kwek',
        image: 'images/Food Log/Kwek-kwek.jpg',
        description: 'Filipino street food - deep-fried quail eggs in orange batter.',
        calories: 320,
        protein: '14g',
        carbs: '28g',
        fat: '18g',
        fiber: '1g'
    },

    // March Friday
    'friday_breakfast': {
        name: 'Uga with rice and hotdog',
        image: 'images/Food Log/Uga with rice, and herbal tea.jpg',
        description: 'Traditional Filipino vegetable dish with rice and hotdog.',
        calories: 380,
        protein: '20g',
        carbs: '48g',
        fat: '12g',
        fiber: '5g'
    },
    'friday_snacks1': {
        name: 'Siomai and yakult',
        image: 'images/Food Log/Siomai and yakult.jpg',
        description: 'Steamed pork dumplings with probiotic yogurt drink.',
        calories: 280,
        protein: '18g',
        carbs: '25g',
        fat: '12g',
        fiber: '2g'
    },
    'friday_lunch': {
        name: 'Chicken with vegetables',
        image: 'images/Food Log/Chicken with vegetables and fruits as dessert.jpg',
        description: 'Grilled chicken with mixed vegetables and fruits as dessert.',
        calories: 420,
        protein: '32g',
        carbs: '35g',
        fat: '15g',
        fiber: '8g'
    },
    'friday_snacks2': {
        name: 'Bihon batchoy with rice',
        image: 'images/Food Log/Bihon batchoy with coke.jpg',
        description: 'Filipino rice noodle soup with meat and vegetables.',
        calories: 350,
        protein: '18g',
        carbs: '45g',
        fat: '12g',
        fiber: '4g'
    },
    'friday_dinner': {
        name: 'Pinaksiw na isda',
        image: 'images/Food Log/Pinaksiw na isda.jpg',
        description: 'Filipino fish stew cooked in vinegar and spices.',
        calories: 320,
        protein: '28g',
        carbs: '15g',
        fat: '18g',
        fiber: '3g'
    },

    // April data
    'april_monday_breakfast': {
        name: 'Breakfast Combo',
        image: 'images/Food Log/Cheesy corned beef with rice.jpg',
        description: 'Hearty breakfast combination to start the day.',
        calories: 400,
        protein: '22g',
        carbs: '50g',
        fat: '14g',
        fiber: '3g'
    },
    'april_monday_lunch': {
        name: 'Lunch Special',
        image: 'images/Food Log/Bulalo, fried fish and rice.jpg',
        description: 'Complete lunch meal with soup and rice.',
        calories: 520,
        protein: '30g',
        carbs: '48g',
        fat: '20g',
        fiber: '4g'
    },

    // April 2024
    'apr_monday_breakfast': {
        name: 'Ginisang kalabasa with pork and sitaw, longganisa',
        image: 'images/Food Log/Ginisang kalabasa with pork and sitaw, longganisa.jpg',
        description: 'Traditional Filipino vegetable dish with squash, pork, string beans, and longganisa sausage.',
        calories: 420,
        protein: '25g',
        carbs: '35g',
        fat: '18g',
        fiber: '8g'
    },
    'apr_monday_snacks1': {
        name: 'Chocomilk drink and butter coconut biscuit',
        image: 'images/Food Log/Chocomilk drink and butter coconut biscuit.jpg',
        description: 'Sweet chocolate milk drink paired with buttery coconut biscuits.',
        calories: 280,
        protein: '8g',
        carbs: '42g',
        fat: '12g',
        fiber: '3g'
    },
    'apr_monday_lunch': {
        name: 'Tocino & hotdog with potato and kimchi plus rice',
        image: 'images/Food Log/Tocino & hotdog with potato and kimchi plus rice.jpg',
        description: 'Filipino sweet cured pork tocino with hotdog, potatoes, kimchi, and steamed rice.',
        calories: 520,
        protein: '28g',
        carbs: '58g',
        fat: '22g',
        fiber: '4g'
    },
    'apr_monday_snacks2': {
        name: '7-11 Ice cream',
        image: 'images/Food Log/7-11 Ice cream.jpg',
        description: 'Convenient store ice cream for a refreshing afternoon treat.',
        calories: 180,
        protein: '3g',
        carbs: '28g',
        fat: '8g',
        fiber: '0g'
    },
    'apr_monday_dinner': {
        name: 'Egg with rice plus ponkan',
        image: 'images/Food Log/Egg with rice plus ponkan.jpg',
        description: 'Simple fried egg with rice and fresh ponkan citrus fruit.',
        calories: 320,
        protein: '15g',
        carbs: '45g',
        fat: '8g',
        fiber: '3g'
    },
    'apr_monday_others': {
        name: 'Nata de coco',
        image: 'images/Food Log/Nata de coco.jpg',
        description: 'Sweet coconut gel dessert, a popular Filipino treat.',
        calories: 120,
        protein: '1g',
        carbs: '30g',
        fat: '0g',
        fiber: '2g'
    },

    // April Wednesday
    'apr_wednesday_breakfast': {
        name: 'Bistek, Fried egg, and beef loaf with rice.',
        image: 'images/Food Log/Bistek, Fried egg, and beef loaf with rice..jpg',
        description: 'Filipino beef steak with fried egg, beef loaf, and steamed rice.',
        calories: 480,
        protein: '32g',
        carbs: '45g',
        fat: '20g',
        fiber: '3g'
    },
    'apr_wednesday_snacks1': {
        name: 'Pancit canton and Biscuits',
        image: 'images/Food Log/Pancit canton and Biscuits.jpg',
        description: 'Stir-fried noodles with vegetables paired with sweet biscuits.',
        calories: 350,
        protein: '12g',
        carbs: '58g',
        fat: '10g',
        fiber: '4g'
    },
    'apr_wednesday_lunch': {
        name: 'Linagang baboy with ricee',
        image: 'images/Food Log/Linagang baboy with ricee.jpg',
        description: 'Filipino pork soup with vegetables served with rice.',
        calories: 420,
        protein: '28g',
        carbs: '42g',
        fat: '16g',
        fiber: '5g'
    },
    'apr_wednesday_snacks2': {
        name: 'Pandesal with Iced Tea',
        image: 'images/Food Log/Pandesal with Iced tea.jpg',
        description: 'Filipino bread roll with refreshing iced tea.',
        calories: 220,
        protein: '6g',
        carbs: '38g',
        fat: '5g',
        fiber: '2g'
    },
    'apr_wednesday_dinner': {
        name: 'Bangus, hotdog, and sardines',
        image: 'images/Food Log/Bangus, hotdog, and sardines.jpg',
        description: 'Mixed protein meal with milkfish, hotdog, and sardines.',
        calories: 450,
        protein: '35g',
        carbs: '25g',
        fat: '22g',
        fiber: '2g'
    },
    'apr_wednesday_others': {
        name: 'Cold milo',
        image: 'images/Food Log/Cold milo.jpg',
        description: 'Refreshing cold chocolate malt drink.',
        calories: 180,
        protein: '8g',
        carbs: '28g',
        fat: '6g',
        fiber: '1g'
    },

    // April Friday
    'apr_friday_breakfast': {
        name: 'Valenciana and Maja Blanca',
        image: 'images/Food Log/Valenciana and Maja blanka.jpg',
        description: 'Filipino rice dish with mixed vegetables and coconut pudding dessert.',
        calories: 380,
        protein: '15g',
        carbs: '58g',
        fat: '12g',
        fiber: '6g'
    },
    'apr_friday_snacks1': {
        name: 'Pulboron, premium quality',
        image: 'images/Food Log/Pulboron, premium quality.jpg',
        description: 'Traditional Filipino powdered milk candy, premium quality.',
        calories: 150,
        protein: '4g',
        carbs: '25g',
        fat: '5g',
        fiber: '1g'
    },
    'apr_friday_lunch': {
        name: 'Pandesal with Iced Tea',
        image: 'images/Food Log/Pandesal with Iced tea.jpg',
        description: 'Filipino bread roll with refreshing iced tea.',
        calories: 220,
        protein: '6g',
        carbs: '38g',
        fat: '5g',
        fiber: '2g'
    },
    'apr_friday_snacks2': {
        name: 'Soup with Rice',
        image: 'images/Food Log/Soup with rice.jpg',
        description: 'Warm soup served with steamed rice.',
        calories: 280,
        protein: '12g',
        carbs: '45g',
        fat: '8g',
        fiber: '3g'
    },
    'apr_friday_dinner': {
        name: 'Nata de Cocoo',
        image: 'images/Food Log/Nata de cocoo.jpg',
        description: 'Sweet coconut gel dessert, a popular Filipino treat.',
        calories: 120,
        protein: '1g',
        carbs: '30g',
        fat: '0g',
        fiber: '2g'
    }
};

// Modal functionality for food details
function showMealModal(day, meal) {
    const key = `${day}_${meal}`;
    const foodInfo = foodData[key];

    if (!foodInfo) {
        console.log('No data found for:', key);
        return;
    }

    const modal = document.getElementById('mealModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (modal && modalTitle && modalBody) {
        modalTitle.textContent = `${foodInfo.name} - Details`;

        modalBody.innerHTML = `
            <div class="meal-detail">
                <h3><i class="fas fa-utensils"></i> ${foodInfo.name}</h3>
                <img src="${foodInfo.image}" alt="${foodInfo.name}" onclick="enlargeImage('${foodInfo.image}', '${foodInfo.name}')">
                <p><strong>Description:</strong> ${foodInfo.description}</p>

                <div class="nutrition-info">
                    <div class="nutrition-item">
                        <div class="nutrition-value">${foodInfo.calories}</div>
                        <div class="nutrition-label">Calories</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${foodInfo.protein}</div>
                        <div class="nutrition-label">Protein</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${foodInfo.carbs}</div>
                        <div class="nutrition-label">Carbs</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${foodInfo.fat}</div>
                        <div class="nutrition-label">Fat</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${foodInfo.fiber}</div>
                        <div class="nutrition-label">Fiber</div>
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'flex';
        modal.classList.add('show');
        // Force reflow to ensure animation plays
        modal.offsetHeight;
        modal.style.opacity = '1';

        // Ensure modal content is centered with flexbox
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.margin = '0';
        }

        // Add zoom functionality to the modal image
        setTimeout(() => {
            const modalImage = modal.querySelector('.meal-detail img');
            if (modalImage) {
                modalImage.addEventListener('click', function(e) {
                    e.stopPropagation();
                    enlargeImage(this.src, this.alt);
                });
                modalImage.style.cursor = 'zoom-in';
            }
        }, 100);
    }
}

function closeMealModal() {
    const modal = document.getElementById('mealModal');
    if (modal) {
        modal.style.opacity = '0';
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Image enlargement functionality
function enlargeImage(imageSrc, imageAlt) {
    const overlay = document.getElementById('imageOverlay');
    const enlargedImg = document.getElementById('enlargedImage');

    if (overlay && enlargedImg) {
        enlargedImg.src = imageSrc;
        enlargedImg.alt = imageAlt;
        overlay.style.display = 'block';
        overlay.style.opacity = '1';
    }
}

function closeImageOverlay() {
    const overlay = document.getElementById('imageOverlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
}

// Back to main portfolio function
function goBackToMain() {
    window.location.href = 'index.html';
}

// Go to PE Log function
function goToPELog() {
    window.location.href = 'pe-log.html';
}

// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
    // Loading screen management
    const loadingScreen = document.getElementById('loading-screen');
    
    if (loadingScreen) {
        // Hide loading screen quickly
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }

    // Image overlay functionality
    const overlay = document.getElementById('imageOverlay');
    if (overlay) {
        const closeBtn = overlay.querySelector('.close-overlay');

        // Close on overlay click
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeImageOverlay();
            }
        });

        // Close on close button click
        if (closeBtn) {
            closeBtn.addEventListener('click', closeImageOverlay);
        }

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && overlay.style.display === 'block') {
                closeImageOverlay();
            }
        });
    }

    // Add click handlers only to modal images for enlargement (not meal-cell images)
    const modalImages = document.querySelectorAll('.meal-detail img');
    modalImages.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            enlargeImage(this.src, this.alt);
        });

        // Add cursor pointer style
        img.style.cursor = 'zoom-in';
    });

    // Add click functionality to meal cells
    const mealCells = document.querySelectorAll('.meal-cell');
    mealCells.forEach(cell => {
        const day = cell.getAttribute('data-day');
        const meal = cell.getAttribute('data-meal');

        // Only add click handler if the cell has food (has an image)
        if (day && meal && cell.querySelector('img')) {
            cell.addEventListener('click', function(e) {
                // Always show modal when clicking anywhere on the cell
                showMealModal(day, meal);
            });

            // Add cursor pointer to indicate clickable
            cell.style.cursor = 'pointer';

            // Change cursor for images in meal cells to indicate info, not zoom
            const cellImage = cell.querySelector('img');
            if (cellImage) {
                cellImage.style.cursor = 'pointer';
            }
        }

        // Hover effects
        cell.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        cell.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Modal close functionality
    const modal = document.getElementById('mealModal');
    if (modal) {
        const closeBtn = modal.querySelector('.close');

        // Close on close button click
        if (closeBtn) {
            closeBtn.addEventListener('click', closeMealModal);
        }

        // Removed auto-close on background click
        // Modal will only close via X button or Escape key

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeMealModal();
            }
        });
    }

    // Add simple hover effects to day labels
    const dayLabels = document.querySelectorAll('.day-label');
    dayLabels.forEach(label => {
        label.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#4ecdc4';
        });
        
        label.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#2d3436';
        });
    });
});
