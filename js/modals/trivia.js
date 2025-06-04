// Health Trivia Modal
function showTriviaModal() {
    currentModalIndex = 5;
    let content = `
        <div class="modal-header">
            <div class="modal-logo">
                <img src="images/LOGO.png" alt="Health Portfolio Logo" class="header-logo">
            </div>
            <h2 class="modal-title">🧠 Health Trivia</h2>
            <p class="modal-subtitle">Test your knowledge with interactive health facts</p>
        </div>

        <div class="modal-section">
            <div class="trivia-intro">
                <h3>🎯 Interactive Health Quiz</h3>
                <p>Challenge yourself with these interesting health facts and questions. Learn while you play!</p>
            </div>

            <div class="quiz-container">
                <div class="quiz-question active" id="question-1">
                    <h4>💧 Daily Water Intake Question</h4>
                    <p class="question-text">How many glasses of water should an average adult drink per day?</p>
                    <div class="quiz-options">
                        <button class="quiz-option" onclick="selectAnswer(1, 'A', false)">A) 4-5 glasses</button>
                        <button class="quiz-option" onclick="selectAnswer(1, 'B', true)">B) 8-10 glasses</button>
                        <button class="quiz-option" onclick="selectAnswer(1, 'C', false)">C) 12-15 glasses</button>
                        <button class="quiz-option" onclick="selectAnswer(1, 'D', false)">D) 2-3 glasses</button>
                    </div>
                    <div class="answer-explanation" id="explanation-1" style="display: none;">
                        <p><strong>Correct!</strong> The recommended daily water intake is 8-10 glasses (about 2-2.5 liters) for optimal hydration and health.</p>
                    </div>
                </div>

                <div class="quiz-question" id="question-2">
                    <h4>🧠 Brain Health Fact</h4>
                    <p class="question-text">What percentage of the human body's total energy does the brain consume?</p>
                    <div class="quiz-options">
                        <button class="quiz-option" onclick="selectAnswer(2, 'A', false)">A) 10%</button>
                        <button class="quiz-option" onclick="selectAnswer(2, 'B', false)">B) 15%</button>
                        <button class="quiz-option" onclick="selectAnswer(2, 'C', true)">C) 20%</button>
                        <button class="quiz-option" onclick="selectAnswer(2, 'D', false)">D) 25%</button>
                    </div>
                    <div class="answer-explanation" id="explanation-2" style="display: none;">
                        <p><strong>Amazing!</strong> The brain uses about 20% of the body's total energy, despite being only 2% of body weight!</p>
                    </div>
                </div>

                <div class="quiz-question" id="question-3">
                    <h4>❤️ Heart Health</h4>
                    <p class="question-text">How many times does the average heart beat per day?</p>
                    <div class="quiz-options">
                        <button class="quiz-option" onclick="selectAnswer(3, 'A', false)">A) 50,000 times</button>
                        <button class="quiz-option" onclick="selectAnswer(3, 'B', true)">B) 100,000 times</button>
                        <button class="quiz-option" onclick="selectAnswer(3, 'C', false)">C) 150,000 times</button>
                        <button class="quiz-option" onclick="selectAnswer(3, 'D', false)">D) 200,000 times</button>
                    </div>
                    <div class="answer-explanation" id="explanation-3" style="display: none;">
                        <p><strong>Excellent!</strong> The heart beats approximately 100,000 times per day, pumping about 2,000 gallons of blood!</p>
                    </div>
                </div>

                <div class="quiz-question" id="question-4">
                    <h4>💤 Sleep Health</h4>
                    <p class="question-text">How many hours of sleep do adults need for optimal health?</p>
                    <div class="quiz-options">
                        <button class="quiz-option" onclick="selectAnswer(4, 'A', false)">A) 5-6 hours</button>
                        <button class="quiz-option" onclick="selectAnswer(4, 'B', true)">B) 7-9 hours</button>
                        <button class="quiz-option" onclick="selectAnswer(4, 'C', false)">C) 10-12 hours</button>
                        <button class="quiz-option" onclick="selectAnswer(4, 'D', false)">D) 4-5 hours</button>
                    </div>
                    <div class="answer-explanation" id="explanation-4" style="display: none;">
                        <p><strong>Perfect!</strong> Adults need 7-9 hours of quality sleep for optimal physical and mental health, memory consolidation, and immune function.</p>
                    </div>
                </div>

                <div class="quiz-question" id="question-5">
                    <h4>🏃‍♂️ Exercise Benefits</h4>
                    <p class="question-text">How many minutes of moderate exercise per day can reduce disease risk significantly?</p>
                    <div class="quiz-options">
                        <button class="quiz-option" onclick="selectAnswer(5, 'A', false)">A) 10 minutes</button>
                        <button class="quiz-option" onclick="selectAnswer(5, 'B', false)">B) 15 minutes</button>
                        <button class="quiz-option" onclick="selectAnswer(5, 'C', true)">C) 30 minutes</button>
                        <button class="quiz-option" onclick="selectAnswer(5, 'D', false)">D) 60 minutes</button>
                    </div>
                    <div class="answer-explanation" id="explanation-5" style="display: none;">
                        <p><strong>Outstanding!</strong> Just 30 minutes of moderate exercise daily can reduce the risk of heart disease, diabetes, and other chronic conditions by up to 50%!</p>
                    </div>
                </div>
            </div>

            <div class="quiz-navigation">
                <button class="quiz-nav-btn" onclick="previousQuestion()" id="prev-btn" disabled>← Previous</button>
                <span class="quiz-counter" id="quiz-counter">1 / 5</span>
                <button class="quiz-nav-btn" onclick="nextQuestion()" id="next-btn">Next →</button>
            </div>

            <div class="health-facts">
                <h3>🌟 Interesting Health Facts</h3>
                <div class="facts-grid">
                    <div class="fact-card">
                        <div class="fact-icon">💤</div>
                        <h4>Sleep Importance</h4>
                        <p>Adults need 7-9 hours of sleep for optimal health and cognitive function.</p>
                    </div>
                    <div class="fact-card">
                        <div class="fact-icon">🦴</div>
                        <h4>Bone Strength</h4>
                        <p>Bones are 4 times stronger than concrete and constantly regenerate throughout life.</p>
                    </div>
                    <div class="fact-card">
                        <div class="fact-icon">🏃‍♂️</div>
                        <h4>Exercise Benefits</h4>
                        <p>Just 30 minutes of daily exercise can reduce disease risk by up to 50%.</p>
                    </div>
                    <div class="fact-card">
                        <div class="fact-icon">🥗</div>
                        <h4>Nutrition Power</h4>
                        <p>Eating colorful fruits and vegetables provides essential antioxidants for health.</p>
                    </div>
                </div>
            </div>

            <div class="health-tips">
                <h3>💡 Daily Health Tips</h3>
                <ul class="tips-list">
                    <li><strong>Stay Hydrated:</strong> Drink water regularly throughout the day</li>
                    <li><strong>Move More:</strong> Take breaks from sitting every 30 minutes</li>
                    <li><strong>Eat Mindfully:</strong> Pay attention to hunger and fullness cues</li>
                    <li><strong>Sleep Well:</strong> Maintain a consistent sleep schedule</li>
                    <li><strong>Manage Stress:</strong> Practice deep breathing or meditation</li>
                    <li><strong>Social Connection:</strong> Maintain relationships for mental health</li>
                </ul>
            </div>
        </div>
    `;

    content = addModalNavigation(content, currentModalIndex);
    openModal(content);
}

// Quiz functionality
let currentQuestion = 1;
let totalQuestions = 5;
let score = 0;

function selectAnswer(questionNum, option, isCorrect) {
    const options = document.querySelectorAll(`#question-${questionNum} .quiz-option`);
    const explanation = document.getElementById(`explanation-${questionNum}`);
    
    // Disable all options
    options.forEach(opt => opt.disabled = true);
    
    // Highlight selected answer
    event.target.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    // Show correct answer if wrong was selected
    if (!isCorrect) {
        options.forEach(opt => {
            if (opt.onclick.toString().includes('true')) {
                opt.classList.add('correct');
            }
        });
    } else {
        score++;
    }
    
    // Show explanation
    explanation.style.display = 'block';
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        document.getElementById(`question-${currentQuestion}`).classList.remove('active');
        currentQuestion++;
        document.getElementById(`question-${currentQuestion}`).classList.add('active');
        updateQuizNavigation();
    } else {
        showQuizResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 1) {
        document.getElementById(`question-${currentQuestion}`).classList.remove('active');
        currentQuestion--;
        document.getElementById(`question-${currentQuestion}`).classList.add('active');
        updateQuizNavigation();
    }
}

function updateQuizNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const counter = document.getElementById('quiz-counter');
    
    prevBtn.disabled = currentQuestion === 1;
    nextBtn.textContent = currentQuestion === totalQuestions ? 'Finish Quiz' : 'Next →';
    counter.textContent = `${currentQuestion} / ${totalQuestions}`;
}

function showQuizResults() {
    const percentage = Math.round((score / totalQuestions) * 100);
    let message = '';
    
    if (percentage >= 80) {
        message = '🎉 Excellent! You have great health knowledge!';
    } else if (percentage >= 60) {
        message = '👍 Good job! Keep learning about health!';
    } else {
        message = '📚 Keep studying! Health knowledge is important!';
    }
    
    alert(`Quiz Complete!\nScore: ${score}/${totalQuestions} (${percentage}%)\n${message}`);
}

// Make function globally accessible
window.showTriviaModal = showTriviaModal;
