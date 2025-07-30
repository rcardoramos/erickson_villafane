// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle functionality
const mobileMenuButton = document.querySelector('.md\\:hidden button');
const navLinks = document.querySelector('nav');

if (mobileMenuButton && navLinks) {
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
    });
}

// Form submission to Formcarry with popup success message
const contactForm = document.getElementById('contactForm');
const popup = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const res = await fetch('https://formcarry.com/s/6MRNnPuHOe3', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (res.ok) {
                contactForm.reset();

                if (popup) {
                    popup.classList.remove('hidden');
                    setTimeout(() => popup.classList.add('hidden'), 4000);
                }
            } else {
                alert('Hubo un error al enviar el formulario. Inténtalo nuevamente.');
            }
        } catch (error) {
            alert('Error al enviar el formulario.');
            console.error(error);
        }
    });
}
