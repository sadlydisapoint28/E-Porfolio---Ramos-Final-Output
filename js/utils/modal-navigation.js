// Modal Navigation Utilities

// Modal navigation data
const modalData = [
    { name: 'About Me', function: 'showAboutMeModal' },
    { name: 'Advocacy', function: 'showAdvocacyModal' },
    { name: 'Food Log', function: 'showFoodLogModal' },
    { name: 'PE Log', function: 'showPELogModal' },
    { name: 'COSINA', function: 'showCosinaModal' },
    { name: 'Health Trivia', function: 'showTriviaModal' },
    { name: 'Reflection', function: 'showReflectionModal' }
];

// Add navigation to modal content
function addModalNavigation(content, currentIndex) {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
    const nextIndex = currentIndex < modalData.length - 1 ? currentIndex + 1 : null;
    
    const navigation = `
        <div class="modal-navigation">
            <button class="nav-btn" onclick="${prevIndex !== null ? modalData[prevIndex].function + '()' : ''}" 
                    ${prevIndex === null ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> ${prevIndex !== null ? modalData[prevIndex].name : 'Previous'}
            </button>
            
            <span class="modal-counter">${currentIndex + 1} / ${modalData.length}</span>
            
            <button class="nav-btn" onclick="${nextIndex !== null ? modalData[nextIndex].function + '()' : ''}" 
                    ${nextIndex === null ? 'disabled' : ''}>
                ${nextIndex !== null ? modalData[nextIndex].name : 'Next'} <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;
    
    return content + navigation;
}

// Navigate to specific modal
function navigateToModal(index) {
    if (index >= 0 && index < modalData.length) {
        const modalFunction = modalData[index].function;
        if (window[modalFunction]) {
            window[modalFunction]();
        }
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('modal');
    if (modal && modal.classList.contains('show')) {
        if (event.key === 'ArrowLeft' && currentModalIndex > 0) {
            navigateToModal(currentModalIndex - 1);
        } else if (event.key === 'ArrowRight' && currentModalIndex < modalData.length - 1) {
            navigateToModal(currentModalIndex + 1);
        }
    }
});

// Make functions globally accessible
window.addModalNavigation = addModalNavigation;
window.navigateToModal = navigateToModal;
