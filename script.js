// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.hero-content, .service-card, .resource-card, .intro-section, .featured-content, .philosophy-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
});

// Hide/show nav on scroll
let lastScroll = 0;
const nav = document.querySelector('.nav-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    } else {
        nav.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});

// Expandable philosophy cards functionality
document.querySelectorAll('.col').forEach(col => {
    col.addEventListener('click', function() {
        const container = this.querySelector('.card-container');
        
        // Close all other cards
        document.querySelectorAll('.card-container').forEach(otherContainer => {
            if (otherContainer !== container) {
                otherContainer.classList.remove('expanded');
            }
        });
        
        // Toggle current card
        container.classList.toggle('expanded');
        
        // Smooth scroll to card if expanding
        if (container.classList.contains('expanded')) {
            setTimeout(() => {
                const offset = 100;
                const targetPosition = this.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    });
});

// Expandable service cards functionality
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't expand if clicking on a link
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            return;
        }
        
        // Close all other service cards
        document.querySelectorAll('.service-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });
        
        // Toggle current card
        card.classList.toggle('expanded');
        
        // Smooth scroll to card if expanding
        if (card.classList.contains('expanded')) {
            setTimeout(() => {
                const offset = 100;
                const targetPosition = this.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    });
});