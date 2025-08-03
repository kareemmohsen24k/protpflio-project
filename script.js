// Typing effect
new Typed('#role', {
    strings: ['UI/UX Designer', 'Web Developer', 'Freelancer', 'Creative Coder', 'Digital Artist'],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
});

// Animate skill progress bars when they come into view
const animateSkills = () => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
};

// Animate project cards when they come into view
const animateProjects = () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
};

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check for saved theme preference or use default light theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Toggle theme function
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update icon and save preference
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Scroll reveal effect
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skills when skills section comes into view
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
                
                // Animate projects when projects section comes into view
                if (entry.target.id === 'projects') {
                    animateProjects();
                }
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
    
    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;
        const width = (scrollTop / scrollHeight) * 100;
        scrollIndicator.style.width = width + '%';
    });

    // Add parallax effect to hero image
    const heroImage = document.querySelector('.hero-image');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        heroImage.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`;
    });
});

// Active nav link on scroll
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});