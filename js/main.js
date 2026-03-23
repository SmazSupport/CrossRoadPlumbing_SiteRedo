// Mobile-First Conversion Site JavaScript
// Crossroads Plumbing

// Smooth scroll for anchor links
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

// Track scroll position for sticky bar visibility
let lastScroll = 0;
const stickyBar = document.querySelector('.sticky-call-bar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Show/hide sticky bar based on scroll direction
  if (currentScroll > 100) {
    stickyBar.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});

// Add click tracking for analytics (placeholder)
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Primary CTA clicked:', btn.textContent);
    // Add your analytics tracking here
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all service cards and review cards for animation
document.querySelectorAll('.service-card, .review-card, .gallery-scroll img').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Add loading state for images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('load', () => {
    img.style.opacity = '1';
  });
  img.style.transition = 'opacity 0.3s ease';
});

console.log('Crossroads Plumbing - Mobile Conversion Site Loaded');
