/* ==========================================================================
   VIVEKANANDA COLLEGE OF EDUCATION - JAVASCRIPT INTERACTION LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Sticky Scroll Effect
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Active Page Navigation Highlight
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      // If inside a dropdown, highlight parent nav item
      const parentDropdown = link.closest('.nav-item.dropdown');
      if (parentDropdown) {
        const parentLink = parentDropdown.querySelector('.nav-link');
        parentLink?.classList.add('active');
      }
    }
  });

  // 3. Mobile Navigation Drawer & Accordion
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  mobileToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    }
  });

  // Mobile Dropdown Accordion
  const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    link?.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('active');
      }
    });
  });

  // 4. Stats Counter Animation
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const animateStats = () => {
      statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const count = +stat.innerText.replace(/[^0-9]/g, '');
        const speed = target / 30; // speed divider
        
        if (count < target) {
          const suffix = stat.getAttribute('data-suffix') || '';
          stat.innerText = Math.ceil(count + speed) + suffix;
          setTimeout(animateStats, 30);
        } else {
          const suffix = stat.getAttribute('data-suffix') || '';
          stat.innerText = target + suffix;
        }
      });
    };
    
    // Trigger when stats section in view
    let statsTriggered = false;
    window.addEventListener('scroll', () => {
      const statsSection = document.querySelector('.stats-banner');
      if (statsSection && !statsTriggered) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          animateStats();
          statsTriggered = true;
        }
      }
    });
  }

  // 5. Gallery Lightbox Modal
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (galleryItems.length > 0 && lightboxModal && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'Gallery Image';
          lightboxModal.classList.add('active');
        }
      });
    });

    lightboxClose?.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // 6. Inquiry / Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending Message...`;
      
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Show success alert
        alert('Thank you! Your message has been sent successfully. The Vivekananda College of Education admissions team will contact you shortly.');
        contactForm.reset();
      }, 1200);
    });
  }
});
