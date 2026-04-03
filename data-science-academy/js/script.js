// Main Script - Script.js
// AOS Initialization
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Global Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Loading Screen
window.addEventListener('load', () => {
  const loading = document.querySelector('.loading');
  if (loading) {
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
    }, 500);
  }
});

// Form Submission (Frontend only)
document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    this.reset();
  });
});

// Counter Animation (for stats)
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.floor(current) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + '+';
      }
    };
    updateCounter();
  });
}

// Trigger counters on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('.stats-section').forEach(el => observer.observe(el));

// Testimonials Carousel (Bootstrap handled)

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', function() {
  // Load chatbot if script present
  // Chatbot initialized in chatbot.js
});

