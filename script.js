// script.js

// Add hover effects or additional interactivity if needed
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.1)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});
