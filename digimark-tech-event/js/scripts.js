/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });



});

// Carousel functionality
      document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector('.carousel-container');
        const carouselSlides = Array.from(document.querySelectorAll('.carousel-slide'));
        const carouselDots = Array.from(document.querySelectorAll('.carousel-dot'));
        const nextBtn = document.getElementById('next-slide');
        const prevBtn = document.getElementById('prev-slide');

        if (!carouselSlides.length) {
          return;
        }

        let currentSlide = carouselSlides.findIndex(s => s.classList.contains('active'));
        if (currentSlide === -1) currentSlide = 0;
        const totalSlides = carouselSlides.length;
        const INTERVAL = 5000; // 5 seconds
        let carouselInterval = null;

        function showSlide(index) {
          const newIndex = (index + totalSlides) % totalSlides;
          carouselSlides[currentSlide].classList.remove('active');
          carouselDots[currentSlide]?.classList.remove('active');
          carouselDots[currentSlide]?.setAttribute('aria-selected', 'false');

          currentSlide = newIndex;

          carouselSlides[currentSlide].classList.add('active');
          carouselDots[currentSlide]?.classList.add('active');
          carouselDots[currentSlide]?.setAttribute('aria-selected', 'true');
        }

        function nextSlide() {
          showSlide(currentSlide + 1);
        }

        function prevSlide() {
          showSlide(currentSlide - 1);
        }

        function restartInterval() {
          if (carouselInterval) clearInterval(carouselInterval);
          carouselInterval = setInterval(nextSlide, INTERVAL);
        }

        // Arrow listeners (if present)
        if (nextBtn) {
          nextBtn.addEventListener('click', () => {
            nextSlide();
            restartInterval();
          });
        }
        if (prevBtn) {
          prevBtn.addEventListener('click', () => {
            prevSlide();
            restartInterval();
          });
        }

        // Dots navigation + accessibility
        carouselDots.forEach((dot, i) => {
          dot.setAttribute('role', 'button');
          dot.setAttribute('tabindex', '0');
          dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
          dot.setAttribute('aria-selected', i === currentSlide ? 'true' : 'false');

          dot.addEventListener('click', () => {
            showSlide(i);
            restartInterval();
          });
          dot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              showSlide(i);
              restartInterval();
            }
          });
        });

        // Pause on hover
        if (container) {
          container.addEventListener('mouseenter', () => {
            if (carouselInterval) clearInterval(carouselInterval);
          });
          container.addEventListener('mouseleave', () => {
            restartInterval();
          });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
          const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
          if (tag === 'input' || tag === 'textarea' || e.isComposing) return;
          if (e.key === 'ArrowLeft') { prevSlide(); restartInterval(); }
          if (e.key === 'ArrowRight') { nextSlide(); restartInterval(); }
        });

        // Touch swipe for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        const SWIPE_THRESHOLD = 50;
        if (container) {
          container.addEventListener('touchstart', (e) => {
            if (e.changedTouches && e.changedTouches.length > 0) {
              touchStartX = e.changedTouches[0].clientX;
            }
          }, { passive: true });
          container.addEventListener('touchend', (e) => {
            if (e.changedTouches && e.changedTouches.length > 0) {
              touchEndX = e.changedTouches[0].clientX;
              const dx = touchEndX - touchStartX;
              if (Math.abs(dx) > SWIPE_THRESHOLD) {
                if (dx > 0) prevSlide(); else nextSlide();
                restartInterval();
              }
            }
          });
        }

        // Ensure initial state and start auto-play
        carouselSlides.forEach((s, i) => { if (i !== currentSlide) s.classList.remove('active'); });
        carouselDots.forEach((d, i) => {
          if (i === currentSlide) d.classList.add('active'); else d.classList.remove('active');
          d.setAttribute('aria-selected', i === currentSlide ? 'true' : 'false');
        });

        restartInterval();
      });

      // Initialize WOW.js if available
      if (typeof WOW !== 'undefined') {
        new WOW().init();
      }