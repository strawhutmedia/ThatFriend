// Particle Animation
class ParticleEffect {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 100;
        this.init();
        this.animate();
    }

    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 107, 53, ${particle.opacity})`;
            this.ctx.fill();

            // Draw connections
            for (let j = index + 1; j < this.particles.length; j++) {
                const dx = this.particles[j].x - particle.x;
                const dy = this.particles[j].y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(255, 107, 53, ${0.1 * (1 - distance / 100)})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        });

        requestAnimationFrame(() => this.animate());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}

// Initialize Particles
const particleCanvas = document.getElementById('particles');
const particleEffect = new ParticleEffect(particleCanvas);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Credits Edit Mode
let editMode = false;

function toggleEditMode() {
    editMode = !editMode;
    const editableElements = document.querySelectorAll('.credit-editable');
    const button = document.querySelector('.add-credits-btn');

    editableElements.forEach(element => {
        element.contentEditable = editMode;
        if (editMode) {
            element.style.background = 'rgba(255, 107, 53, 0.1)';
            element.style.padding = '0.5rem';
            element.style.borderRadius = '5px';
            element.style.outline = '2px dashed rgba(255, 107, 53, 0.5)';
        } else {
            element.style.background = '';
            element.style.padding = '';
            element.style.borderRadius = '';
            element.style.outline = '';
        }
    });

    button.textContent = editMode ? 'Save Credits' : 'Edit Credits';
    button.classList.toggle('btn-primary');
}

// Window Resize Handler
window.addEventListener('resize', () => {
    particleEffect.resize();
});

// Poster Image Error Handler
const poster = document.getElementById('poster');
poster.addEventListener('error', function() {
    // Create a placeholder if image fails to load
    this.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'poster-placeholder';
    placeholder.style.cssText = `
        width: 400px;
        max-width: 100%;
        aspect-ratio: 2/3;
        background: linear-gradient(135deg, rgba(255, 107, 53, 0.3), rgba(247, 147, 30, 0.3));
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Bebas Neue', cursive;
        font-size: 3rem;
        letter-spacing: 4px;
        border: 2px dashed rgba(255, 107, 53, 0.5);
        margin: 0 auto;
    `;
    placeholder.innerHTML = `
        <div>THAT FRIEND</div>
        <div style="font-size: 1rem; font-family: 'Montserrat', sans-serif; margin-top: 1rem; opacity: 0.7;">
            Poster Coming Soon
        </div>
    `;
    this.parentElement.insertBefore(placeholder, this);
});

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Interactive Cast Cards
document.querySelectorAll('.cast-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// News Card Animations
document.querySelectorAll('.news-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Custom Cursor Effect (Optional Enhancement)
const createCursorGlow = () => {
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    cursorGlow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 107, 53, 0.6), transparent);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease;
        display: none;
    `;
    document.body.appendChild(cursorGlow);

    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.display = 'block';
        cursorGlow.style.left = e.clientX - 10 + 'px';
        cursorGlow.style.top = e.clientY - 10 + 'px';
    });

    // Make cursor glow larger on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cast-card, .news-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorGlow.style.transform = 'scale(2.5)';
        });
        element.addEventListener('mouseleave', () => {
            cursorGlow.style.transform = 'scale(1)';
        });
    });
};

// Initialize cursor glow (only on desktop)
if (window.innerWidth > 768) {
    createCursorGlow();
}

// Preload hero animations
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial animations
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    }, 100);

    // Add stagger effect to hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach((btn, index) => {
        btn.style.animationDelay = `${0.5 + index * 0.2}s`;
        btn.style.animation = 'fadeInUp 0.6s ease-out forwards';
        btn.style.opacity = '0';
    });
});

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);

    if (konamiCode.join('').includes(konamiSequence.join(''))) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Fun animation when Konami code is entered
    document.body.style.animation = 'rainbow 2s infinite';

    // Add rainbow animation to CSS dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Show message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 2rem 3rem;
        border-radius: 15px;
        font-size: 1.5rem;
        z-index: 10000;
        text-align: center;
        animation: fadeInUp 0.5s ease-out;
    `;
    message.innerHTML = `
        <div style="font-family: 'Bebas Neue', cursive; font-size: 2rem; margin-bottom: 1rem;">
            YOU FOUND THE SECRET!
        </div>
        <div>That Friend appreciates you exploring!</div>
    `;
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
        document.body.style.animation = '';
    }, 3000);
}

// Loading Screen
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Log a fun message to console
console.log('%c🎬 That Friend - Official Website', 'font-size: 20px; font-weight: bold; color: #ff6b35;');
console.log('%cProduced by Straw Hut Media', 'font-size: 14px; color: #f7931e;');
console.log('%cTry the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'font-size: 12px; color: #b0b0b0;');
