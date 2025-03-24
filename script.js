// Animation de la barre de navigation au scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(255, 105, 180, 0.2)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animation des sections au scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Animation des icônes Minimoy
const minimoyIcons = document.querySelectorAll('.minimoy-decoration i');
minimoyIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.2}s`;
});

// Effet de survol sur les cartes de passions
document.querySelectorAll('.passion-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Gestion du formulaire de contact avec animation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animation du bouton
        const button = contactForm.querySelector('button');
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
        
        // Message magique
        const message = document.createElement('div');
        message.className = 'magic-message';
        message.innerHTML = '✨ Message magique envoyé ! ✨';
        contactForm.appendChild(message);
        
        // Suppression du message après 3 secondes
        setTimeout(() => {
            message.remove();
        }, 3000);
        
        contactForm.reset();
    });
}

// Ajout d'étoiles magiques au survol
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) { // 10% de chance de créer une étoile
        const star = document.createElement('div');
        star.className = 'magic-star';
        star.style.left = e.pageX + 'px';
        star.style.top = e.pageY + 'px';
        document.body.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 1000);
    }
}); 