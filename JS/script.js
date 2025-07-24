// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle functionality
const mobileMenuButton = document.querySelector('.md\\:hidden button');
const navLinks = document.querySelector('nav');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});

// Form submission handling
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Here you would typically send the form data to a server
    alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
    contactForm.reset();
});