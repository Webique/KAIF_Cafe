
// Select Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a'); // Individual navigation links

// Toggle Dropdown Menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the document
    hamburger.classList.toggle('active'); // Animates the hamburger
    navLinks.classList.toggle('active'); // Slides down/up the menu
});

// Close Menu When Clicking a Navigation Link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active'); // Reset hamburger animation
        navLinks.classList.remove('active'); // Close dropdown
    });
});

// Close Menu When Clicking Outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active')) {
        hamburger.classList.remove('active'); // Reset hamburger animation
        navLinks.classList.remove('active'); // Close dropdown
    }
});
