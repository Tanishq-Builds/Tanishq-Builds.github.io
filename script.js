// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinkElements = document.querySelectorAll('.nav-links a');
navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply observer to elements
document.querySelectorAll('.project-card, .skill-category, .about-content').forEach(el => {
    observer.observe(el);
});

// Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (name && email && message) {
            // Create mailto link
            const subject = `New message from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoLink = `mailto:potetanishq@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your default email client will open now.');
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinkElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect on hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// Add scroll animation to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
});

// Project links - you can update these with your actual project URLs
document.addEventListener('DOMContentLoaded', () => {
    // Update project links if needed
    const projectLinks = document.querySelectorAll('.link-btn');
    projectLinks.forEach((link, index) => {
        // You can update these with your actual GitHub and live URLs
        if (link.innerHTML.includes('Code')) {
            link.href = `https://github.com/Tanishq-Builds`;
            link.target = '_blank';
        } else if (link.innerHTML.includes('Live')) {
            link.href = '#projects'; // Update with your actual project URL
        }
    });
});

// Typing animation for hero title (optional)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    const textArray = text.split('');
    heroTitle.textContent = '';
    let index = 0;
    
    const typeWriter = () => {
        if (index < textArray.length) {
            heroTitle.textContent += textArray[index];
            index++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Uncomment the line below to enable typing animation
    // typeWriter();
}

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Log GitHub user activity (optional)
async function fetchGitHubProfile() {
    try {
        const response = await fetch('https://api.github.com/users/Tanishq-Builds');
        const data = await response.json();
        console.log('GitHub Profile:', data);
        // You can use this data to display on your portfolio
    } catch (error) {
        console.log('GitHub API:', error);
    }
}

// Call on page load
fetchGitHubProfile();

// Smooth reveal animation on load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press '/' to focus search or navigate
    if (e.key === '/') {
        e.preventDefault();
        // Add your keyboard shortcut logic here
    }
});
