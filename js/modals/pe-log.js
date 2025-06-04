// PE Log Modal - Redirect to dedicated page
function showPELogModal() {
    // Redirect to dedicated PE log page instead of showing modal
    window.open('pe-log.html', '_blank');
    return;
}

// Make function globally accessible
window.showPELogModal = showPELogModal;
