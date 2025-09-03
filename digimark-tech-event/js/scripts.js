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

      // Gallery data (assets/Event images)
        let galleryData = [
          { src: 'assets/Event/5886741605816324302.jpg' },
          { src: 'assets/Event/5886741605816324303.jpg' },
          { src: 'assets/Event/5886741605816324306.jpg' },
          { src: 'assets/Event/5886741605816324307.jpg' },
          { src: 'assets/Event/5886741605816324322.jpg' },
          { src: 'assets/Event/5886741605816324325.jpg' },
          { src: 'assets/Event/5886741605816324326.jpg' },
          { src: 'assets/Event/5886741605816324327.jpg' },
          { src: 'assets/Event/5886741605816324331.jpg' },
          { src: 'assets/Event/5886741605816324332.jpg' },
          { src: 'assets/Event/5886741605816324333.jpg' },
          { src: 'assets/Event/5886741605816324334.jpg' },
          { src: 'assets/Event/5886741605816324335.jpg' },
          { src: 'assets/Event/5886741605816324340.jpg' },
          { src: 'assets/Event/5886741605816324341.jpg' },
          { src: 'assets/Event/5886741605816324345.jpg' },
          { src: 'assets/Event/5886741605816324350.jpg' },
          { src: 'assets/Event/5886741605816324351.jpg' },
          { src: 'assets/Event/5886741605816324356.jpg' },
          { src: 'assets/Event/5886741605816324357.jpg' },
          { src: 'assets/Event/5886741605816324358.jpg' },
          { src: 'assets/Event/5886741605816324359.jpg' },
          { src: 'assets/Event/5886741605816324360.jpg' },
          { src: 'assets/Event/5886741605816324363.jpg' },
          { src: 'assets/Event/5886741605816324365.jpg' },
          { src: 'assets/Event/5886741605816324366.jpg' },
          { src: 'assets/Event/5886741605816324367.jpg' },
          { src: 'assets/Event/5886741605816324369.jpg' },
          { src: 'assets/Event/5886741605816324373.jpg' },
          { src: 'assets/Event/5886741605816324379.jpg' },
          { src: 'assets/Event/5886741605816324381.jpg' },
          { src: 'assets/Event/5886741605816324382.jpg' },
          { src: 'assets/Event/5886741605816324383.jpg' },
          { src: 'assets/Event/5886741605816324404.jpg' },
          { src: 'assets/Event/5886741605816324408.jpg' },
          { src: 'assets/Event/5886741605816324412.jpg' },
          { src: 'assets/Event/5886741605816324413.jpg' },
          { src: 'assets/Event/5886741605816324414.jpg' },
          { src: 'assets/Event/5886741605816324418.jpg' },
          { src: 'assets/Event/5886741605816324422.jpg' },
          { src: 'assets/Event/5886741605816324423.jpg' },
          { src: 'assets/Event/5886741605816324425.jpg' },
          { src: 'assets/Event/5886741605816324429.jpg' },
          { src: 'assets/Event/5886741605816324440.jpg' },
          { src: 'assets/Event/5886741605816324441.jpg' },
          { src: 'assets/Event/5886741605816324444.jpg' },
          { src: 'assets/Event/5886741605816324450.jpg' },
          { src: 'assets/Event/5886741605816324457.jpg' },
          { src: 'assets/Event/5886741605816324458.jpg' },
          { src: 'assets/Event/5886741605816324460.jpg' },
          { src: 'assets/Event/5886741605816324464.jpg' },
          { src: 'assets/Event/5886741605816324469.jpg' },
          { src: 'assets/Event/5886741605816324470.jpg' },
          { src: 'assets/Event/5886741605816324475.jpg' },
          { src: 'assets/Event/5886741605816324478.jpg' },
          { src: 'assets/Event/5886741605816324483.jpg' },
          { src: 'assets/Event/5886741605816324484.jpg' },
          { src: 'assets/Event/5886741605816324487.jpg' },
          { src: 'assets/Event/5886741605816324493.jpg' },
          { src: 'assets/Event/5886741605816324494.jpg' },
          { src: 'assets/Event/5886741605816324782.jpg' },
          { src: 'assets/Event/5886741605816324786.jpg' },
          { src: 'assets/Event/5886741605816324787.jpg' },
          { src: 'assets/Event/5886741605816324793.jpg' },
          { src: 'assets/Event/5886741605816324796.jpg' },
          { src: 'assets/Event/5886741605816324805.jpg' },
          { src: 'assets/Event/5886741605816324810.jpg' },
          { src: 'assets/Event/5886741605816324811.jpg' },
          { src: 'assets/Event/5886741605816324821.jpg' },
          { src: 'assets/Event/5886741605816324822.jpg' },
          { src: 'assets/Event/5886741605816324823.jpg' },
          { src: 'assets/Event/5886741605816324824.jpg' },
          { src: 'assets/Event/5886741605816324825.jpg' },
          { src: 'assets/Event/5886741605816324827.jpg' },
          { src: 'assets/Event/5886741605816324830.jpg' },
          { src: 'assets/Event/5886741605816324848.jpg' },
          { src: 'assets/Event/5886741605816324850.jpg' },
          { src: 'assets/Event/5886741605816324851.jpg' },
          { src: 'assets/Event/5886741605816324852.jpg' },
          { src: 'assets/Event/5886741605816324854.jpg' },
          { src: 'assets/Event/5886741605816324856.jpg' },
          { src: 'assets/Event/5886741605816324857.jpg' },
          { src: 'assets/Event/5886741605816324858.jpg' },
          { src: 'assets/Event/5886741605816324865.jpg' },
          { src: 'assets/Event/5886741605816324866.jpg' },
          { src: 'assets/Event/5886741605816324870.jpg' },
          { src: 'assets/Event/5886741605816324872.jpg' },
          { src: 'assets/Event/5886741605816324873.jpg' },
          { src: 'assets/Event/5886741605816324874.jpg' },
          { src: 'assets/Event/5886741605816324875.jpg' },
          { src: 'assets/Event/5886741605816324876.jpg' },
          { src: 'assets/Event/5886741605816324882.jpg' },
          { src: 'assets/Event/5886741605816324883.jpg' },
          { src: 'assets/Event/5886741605816324886.jpg' },
          { src: 'assets/Event/5886741605816324890.jpg' },
          { src: 'assets/Event/5886741605816324891.jpg' },
          { src: 'assets/Event/5886741605816324900.jpg' },
          { src: 'assets/Event/5886741605816324901.jpg' },
          { src: 'assets/Event/5886741605816324904.jpg' },
          { src: 'assets/Event/5886741605816324906.jpg' },
          { src: 'assets/Event/5886741605816324908.jpg' },
          { src: 'assets/Event/5886741605816324909.jpg' },
          { src: 'assets/Event/5886741605816324914.jpg' },
          { src: 'assets/Event/5886741605816324915.jpg' },
          { src: 'assets/Event/5886741605816324917.jpg' },
          { src: 'assets/Event/5886741605816324918.jpg' },
          { src: 'assets/Event/5886741605816324921.jpg' },
          { src: 'assets/Event/5886741605816324927.jpg' },
          { src: 'assets/Event/5886741605816324929.jpg' },
          { src: 'assets/Event/5886741605816324931.jpg' },
          { src: 'assets/Event/5886741605816324933.jpg' },
          { src: 'assets/Event/5886741605816324935.jpg' },
          { src: 'assets/Event/5886741605816324936.jpg' },
          { src: 'assets/Event/5886741605816324937.jpg' },
          { src: 'assets/Event/5886741605816324940.jpg' },
          { src: 'assets/Event/5886741605816324942.jpg' },
          { src: 'assets/Event/5886741605816324943.jpg' },
          { src: 'assets/Event/5886741605816324947.jpg' },
          { src: 'assets/Event/5886741605816324948.jpg' },
          { src: 'assets/Event/5886741605816324949.jpg' },
          { src: 'assets/Event/5886741605816324950.jpg' },
          { src: 'assets/Event/5886741605816324951.jpg' },
          { src: 'assets/Event/5886741605816324952.jpg' },
          { src: 'assets/Event/5886741605816324953.jpg' },
          { src: 'assets/Event/5886741605816324954.jpg' },
          { src: 'assets/Event/5886741605816324955.jpg' },
          { src: 'assets/Event/5886741605816324956.jpg' },
          { src: 'assets/Event/5886741605816324957.jpg' },
          { src: 'assets/Event/5886741605816324958.jpg' },
          { src: 'assets/Event/5886741605816324959.jpg' },
          { src: 'assets/Event/5886741605816324961.jpg' },
          { src: 'assets/Event/5886741605816324962.jpg' },
          { src: 'assets/Event/5886741605816324963.jpg' },
          { src: 'assets/Event/5886741605816324965.jpg' },
          { src: 'assets/Event/5886741605816324967.jpg' },
          { src: 'assets/Event/5886741605816324968.jpg' },
          { src: 'assets/Event/5886741605816324970.jpg' },
          { src: 'assets/Event/5886741605816324971.jpg' },
          { src: 'assets/Event/5886741605816324972.jpg' },
          { src: 'assets/Event/5886741605816324973.jpg' },
          { src: 'assets/Event/5886741605816324975.jpg' },
          { src: 'assets/Event/5886741605816324976.jpg' },
          { src: 'assets/Event/5886741605816324978.jpg' },
          { src: 'assets/Event/5886741605816324980.jpg' },
          { src: 'assets/Event/5886741605816324981.jpg' },
          { src: 'assets/Event/5886741605816324982.jpg' },
          { src: 'assets/Event/5886741605816324983.jpg' },
          { src: 'assets/Event/5886741605816324985.jpg' },
          { src: 'assets/Event/5886741605816324986.jpg' },
          { src: 'assets/Event/5886741605816324987.jpg' },
          { src: 'assets/Event/5886741605816324988.jpg' },
          { src: 'assets/Event/5886741605816324990.jpg' },
          { src: 'assets/Event/5886741605816324991.jpg' },
          { src: 'assets/Event/5886741605816324993.jpg' },
          { src: 'assets/Event/5886741605816324994.jpg' },
          { src: 'assets/Event/5886741605816324996.jpg' },
          { src: 'assets/Event/5886741605816324997.jpg' },
          { src: 'assets/Event/5886741605816324999.jpg' },
          { src: 'assets/Event/5886741605816325001.jpg' },
          { src: 'assets/Event/5886741605816325002.jpg' },
          { src: 'assets/Event/5886741605816325004.jpg' },
          { src: 'assets/Event/5886741605816325005.jpg' },
          { src: 'assets/Event/5886741605816325006.jpg' },
          { src: 'assets/Event/5886741605816325008.jpg' },
          { src: 'assets/Event/5886741605816325011.jpg' },
          { src: 'assets/Event/5886741605816325014.jpg' },
          { src: 'assets/Event/5886741605816325016.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0026.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0033.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0036.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0038.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0040.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0043.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0049.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0051.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0054.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0057.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0061.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0062.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0064.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0065.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0066.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0105.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0107.jpg' },
          { src: 'assets/Event/IMG-20240602-WA0109.jpg' },
          { src: 'assets/Event/IMG-20240809-WA0016.jpg' },
          { src: 'assets/Event/IMG-20240809-WA0017.jpg' },
          { src: 'assets/Event/IMG-20240809-WA0019.jpg' },
          { src: 'assets/Event/IMG-20240809-WA0021.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0081.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0082.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0091.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0095.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0103.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0105.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0107.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0113.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0116.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0117.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0119.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0120.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0121.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0122.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0123.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0124.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0125.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0126.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0127.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0128.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0129.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0130.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0135.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0137.jpg' },
          { src: 'assets/Event/IMG-20240818-WA0138.jpg' },
          { src: 'assets/Event/IMG-20240828-WA0023.jpg' },
          { src: 'assets/Event/IMG-20240828-WA0025.jpg' },
          { src: 'assets/Event/IMG-20240828-WA0029.jpg' },
          { src: 'assets/Event/IMG-20240828-WA0034.jpg' },
          { src: 'assets/Event/IMG-20240828-WA0038.jpg' },
          { src: 'assets/Event/IMG-20240828-WA0043.jpg' },
          { src: 'assets/Event/IMG-20240828-WA0051.jpg' },
          { src: 'assets/Event/IMG-20240828-WA0056.jpg' },
          { src: 'assets/Event/IMG-20240828-WA0058.jpg' },
          { src: 'assets/Event/IMG-20250130-WA0062.jpg' },
          { src: 'assets/Event/IMG-20250130-WA0063.jpg' },
          { src: 'assets/Event/IMG-20250131-WA0001.jpg' },
          { src: 'assets/Event/IMG-20250131-WA0002.jpg' },
          { src: 'assets/Event/IMG-20250131-WA0003.jpg' },
          { src: 'assets/Event/IMG-20250131-WA0006.jpg' },
          { src: 'assets/Event/IMG-20250131-WA0007.jpg' },
          { src: 'assets/Event/IMG-20250223-WA0042.jpg' },
          { src: 'assets/Event/IMG-20250223-WA0047.jpg' },
          { src: 'assets/Event/IMG-20250223-WA0049.jpg' },
          { src: 'assets/Event/IMG-20250223-WA0050.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0147.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0148.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0152.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0156.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0158.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0159.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0163.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0165.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0169.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0187.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0194.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0195.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0208.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0210.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0220.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0224.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0225.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0230.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0234.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0237.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0239.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0247.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0249.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0250.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0251.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0253.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0256.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0261.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0262.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0265.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0269.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0272.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0276.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0277.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0281.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0285.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0292.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0293.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0297.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0298.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0299.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0300.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0302.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0303.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0308.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0310.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0315.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0319.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0324.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0327.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0330.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0332.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0339.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0341.jpg' },
          { src: 'assets/Event/IMG-20250225-WA0344.jpg' },
          { src: 'assets/Event/IMG-20250604-WA0059.jpg' },
          { src: 'assets/Event/IMG-20250604-WA0062.jpg' },
          { src: 'assets/Event/IMG-20250604-WA0063.jpg' },
          { src: 'assets/Event/IMG-20250604-WA0066.jpg' },
          { src: 'assets/Event/IMG-20250604-WA0069.jpg' },
          { src: 'assets/Event/IMG-20250604-WA0072.jpg' },
          { src: 'assets/Event/IMG-20250604-WA0074.jpg' },
          { src: 'assets/Event/IMG-20250604-WA0078.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0034.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0035.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0037.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0039.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0041.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0042.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0043.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0044.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0046.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0053.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0055.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0058.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0060.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0061.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0069.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0075.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0076.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0079.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0081.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0082.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0083.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0085.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0086.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0090.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0091.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0097.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0099.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0100.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0101.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0103.jpg' },
          { src: 'assets/Event/IMG-20250712-WA0104.jpg' },
          { src: 'assets/Event/IMG-20250818-WA0079.jpg' },
          { src: 'assets/Event/IMG-20250818-WA0081.jpg' },
          { src: 'assets/Event/PXL_20240719_161029199.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240722_104241542.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240722_104427181.PORTRAIT~3.jpg' },
          { src: 'assets/Event/PXL_20240722_104437954.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240729_164306075.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240809_124734708.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240809_131858822.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240809_132241659.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_115250397.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_115256650.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_115327363.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_115837093.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_115852740.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_115927333.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_142146674.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_142221477.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_142351887.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240817_142355491.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240817_142410082.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240817_142738480.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240817_142742056.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240817_142808589.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240817_142826980.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240817_143025588.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240817_143129006.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_143207738.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_143648671.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240817_143701468.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240817_144345486.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240817_144352523.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_155611921.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_155935733.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_160012530.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_160026498.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_160704873.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_160722208.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_161055763.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_161143872.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240817_161153908.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240828_170557227.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20240829_130300379.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240903_161558161.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240903_161654205.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20240903_161751423.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20241001_155619842.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20241001_155630423.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20241001_155644236.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20241001_155658927.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20241001_155700708.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20241001_155702442.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20241001_155802827.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20241001_155807545.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20241005_164838177.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250127_095044944.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250127_095115511.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250127_095121051.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250127_095132369.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20250127_095309726.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20250127_100503441.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250127_100553345.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250127_100603252.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250127_100616132.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20250127_122539278.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20250127_122549332.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20250127_122702527.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20250130_094035881.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250130_094110321.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250130_094132287.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250130_094213587.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20250130_094636599.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250130_094824006.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20250130_094826466.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20250130_094847296.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20250130_094849321.PORTRAIT.jpg' },
          { src: 'assets/Event/PXL_20250130_094927922.NIGHT.jpg' },
          { src: 'assets/Event/PXL_20250131_090631386.jpg' },
          { src: 'assets/Event/PXL_20250131_090714172.jpg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.05.34.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.13.21.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.13.24.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.13.31.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.13.35.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.13.44.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.13.55.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.13.59.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.14.00.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.14.08.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.14.13.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-23 at 20.14.16.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.16 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.16.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.17.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.18.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.19 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.19.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.20.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.21.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.22.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.23 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.23.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.24.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.25.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.26.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.27 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.27.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.28.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.49.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.56.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.57.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.00.59.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.00.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.01.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.03 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.03.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.04.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.05.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.07.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.09.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.10.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.11.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.13.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.15.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.17 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.17.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.19.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.23.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.27.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.31.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.35.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.36.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.41.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.42.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.43.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.44.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.01.45.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.02.57 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.02.57.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.02.58.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.02.59 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.02.59.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.00 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.00.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.01 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.01.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.02.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.03 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.03.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.04.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.30.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.31.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.35.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.36.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.37.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.39.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.40.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.41.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.43.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.44.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.45.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.48.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.49.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.50.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.52 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.52.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.53.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.55.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.56.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.57.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.03.59.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.00.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.02 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.02.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.05.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.06.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.07.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.08.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.09.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.10.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.12.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.13.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.15 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.15.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.16.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.18.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.20.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.04.21.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.05.51 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.05.51.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.05.52.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.05.53 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.05.53.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.05.54.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.05.55.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.05.56.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.01.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.02.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.03.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.37.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.39.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.40 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.40.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.42.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.43.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.44.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.46.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.48.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.50.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.51.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.52.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.53.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.55.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.57.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.06.59.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.00.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.01.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.02 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.02.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.04.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.06.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.07.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.08.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.10.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.11.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.12.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.13.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.16.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.18 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.18.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.22.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.23.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.24 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.24.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.25.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.26 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 18.07.26.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.24.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.25 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.25.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.26.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.27 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.27.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.28.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.29 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.29.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.30.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.31.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.32.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.33.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.07.35.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.01.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.02.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.04 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.04.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.06.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.07.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.10 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.10.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.11.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.12.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.13.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.14.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.17.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.18 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.18.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.20.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.21.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.22.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.25.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.28.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.31.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.35.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.36.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.42.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.43.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.46 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.47.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.49.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.51.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.52.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.08.59.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.12.53.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.12.55.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.12.56 (1).jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 20.12.57.jpeg' },
          { src: 'assets/Event/WhatsApp Image 2025-08-22 at 21.23.49.jpeg' }
        ];

        // Videos data (populate videos section from code similar to photos grid)
        const videosData = [
          // Featured video (keeps autoplay/preview behavior) - title removed as requested
          {
            src: 'assets/videos/opening keynote.mp4',
            views: '2.3K',
            likes: 156,
            featured: true
          },

          // Other event videos - titles removed
          { src: 'assets/videos/EKOMANE PROJETS  INNOVANTS(1).mp4' },
          { src: 'assets/videos/PXL_20240809_131913500.mp4' },
          { src: 'assets/videos/PXL_20250822_115757693.TS.mp4' },
          { src: 'assets/videos/VID-20230623-WA0031.mp4' },
          { src: 'assets/videos/VID-20230623-WA0032.mp4' },
          { src: 'assets/videos/VID-20230623-WA0033.mp4' },
          { src: 'assets/videos/VID-20230627-WA0017.mp4' },
          { src: 'assets/videos/VID-20230703-WA0035.mp4' },
          { src: 'assets/videos/VID-20230710-WA0014.mp4' },
          { src: 'assets/videos/VID-20230719-WA0009.mp4' },
          { src: 'assets/videos/VID-20230808-WA0048.mp4' },
          { src: 'assets/videos/VID-20230808-WA0049.mp4' },
          { src: 'assets/videos/VID-20240818-WA0088.mp4' },
          { src: 'assets/videos/VID-20240818-WA0089.mp4' },
          { src: 'assets/videos/VID-20240818-WA0098.mp4' },
          { src: 'assets/videos/VID-20240818-WA0099.mp4' },
          { src: 'assets/videos/VID-20240830-WA0020.mp4' },
          { src: 'assets/videos/VID-20240830-WA0021.mp4' },
          { src: 'assets/videos/VID-20241117-WA0112.mp4' },
          { src: 'assets/videos/VID-20250224-WA0006.mp4' },
          { src: 'assets/videos/VID-20250225-WA0007.mp4' },
          { src: 'assets/videos/VID-20250225-WA0018.mp4' },
          { src: 'assets/videos/VID-20250225-WA0019.mp4' },
          { src: 'assets/videos/VID-20250225-WA0020.mp4' },
          { src: 'assets/videos/VID-20250225-WA0021.mp4' },
          { src: 'assets/videos/VID-20250225-WA0023.mp4' },
          { src: 'assets/videos/VID-20250225-WA0024.mp4' },
          { src: 'assets/videos/VID-20250225-WA0025.mp4' },
          { src: 'assets/videos/VID-20250225-WA0026.mp4' },
          { src: 'assets/videos/VID-20250818-WA0001.mp4' }
        ];

        // Initialize WOW.js if available
        if (typeof WOW !== 'undefined') {
          new WOW().init();
        }

        // Photo Gallery logic
        document.addEventListener('DOMContentLoaded', () => {
          const grid = document.getElementById('gallery-grid');
          const loadMoreBtn = document.getElementById('load-more');
          const exploreBtn = document.querySelector('.carousel-cta .btn-primary');

          // Smooth scroll to gallery from CTA
          if (exploreBtn) {
            exploreBtn.addEventListener('click', (e) => {
              e.preventDefault();
              const gallerySection = document.getElementById('gallery');
              gallerySection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
          }

          if (!grid) return; // no gallery on the page

          const PAGE_SIZE = 8;
          let displayed = 0;

          function createCard(item, idx) {
            const card = document.createElement('div');
            card.className = 'gallery-item overflow-hidden';

            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt || `Gallery image ${idx + 1}`;
            img.loading = 'lazy';
            img.className = 'w-full h-56 object-cover';
            img.onerror = () => {
              // Hide broken image gracefully
              img.classList.add('opacity-0');
              img.alt = 'Image unavailable';
            };

            card.appendChild(img);
            card.addEventListener('click', () => openModal(item.src, img.alt));
            return card;
          }

          function renderNext(count) {
            const end = Math.min(displayed + count, galleryData.length);
            const frag = document.createDocumentFragment();
            for (let i = displayed; i < end; i++) {
              frag.appendChild(createCard(galleryData[i], i));
            }
            grid.appendChild(frag);
            displayed = end;

            if (displayed >= galleryData.length && loadMoreBtn) {
              loadMoreBtn.style.display = 'none';
            }
          }

          // Lightweight modal viewer
          let modal, modalImg, modalClose;

          function ensureModal() {
            if (modal) return;
            modal = document.createElement('div');
            modal.id = 'gallery-modal';
            modal.className = 'modal';
            modal.innerHTML = `
              <div class="max-w-5xl w-[90%] mx-auto relative">
                <button class="absolute top-2 right-2 bg-white/90 text-gray-800 px-3 py-1 rounded-full font-semibold hover:bg-white" aria-label="Close">&times;</button>
                <img class="w-full max-h-[80vh] object-contain rounded-lg" alt="Expanded image"/>
              </div>
            `;
            document.body.appendChild(modal);
            modalImg = modal.querySelector('img');
            modalClose = modal.querySelector('button');

            modal.addEventListener('click', (e) => {
              if (e.target === modal) closeModal();
            });
            modalClose.addEventListener('click', closeModal);
            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
            });
          }

          function openModal(src, alt) {
            ensureModal();
            modalImg.src = src;
            modalImg.alt = alt || 'Expanded image';
            modal.classList.add('active');
          }

          function closeModal() {
            modal.classList.remove('active');
            modalImg.src = '';
          }

          if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => renderNext(PAGE_SIZE));
          }

          // Expose helper to append uploaded images to gallery and avoid duplicates
          const existing = new Set(galleryData.map(i => i.src));
          function addImagesToGallery(urls) {
            const fresh = [];
            (urls || []).forEach(u => {
              if (!existing.has(u)) {
                galleryData.push({ src: u });
                existing.add(u);
                fresh.push(u);
              }
            });
            if (fresh.length) {
              renderNext(fresh.length);
            }
          }
          // Attach globally so upload logic can call it
          window.addImagesToGallery = addImagesToGallery;

          // Initial render
          renderNext(PAGE_SIZE);

          // Load previously uploaded images (if server is running)
          fetch('/api/uploads').then(r => r.ok ? r.json() : { files: [] }).then(data => {
            if (data && Array.isArray(data.files)) addImagesToGallery(data.files);
          }).catch(() => { /* ignore if offline */ });
        });

        // Videos Section logic (populate and handle playback)
        document.addEventListener('DOMContentLoaded', () => {
          const featuredWrap = document.getElementById('featured-video');
          const videosGrid = document.getElementById('videos-grid');
          const loadMoreVideosBtn = document.getElementById('load-more-videos');
          if (!featuredWrap && !videosGrid) return;

          const list = Array.isArray(videosData) ? videosData.filter(v => v && v.src) : [];
          if (!list.length) return;

          const featured = list.find(v => v.featured) || list[0];
          const others = list.filter(v => v !== featured);

          function createPlayer(src, opts = {}) {
            const video = document.createElement('video');
            video.src = src;
            video.controls = true;
            video.playsInline = true;
            video.className = 'w-full h-full object-cover';
            if (opts.autoplay) {
              if (opts.muted) video.muted = true;
              video.autoplay = true;
              // Best-effort start
              setTimeout(() => { video.play().catch(() => {}); }, 0);
            }
            return video;
          }

          // Create a centered play icon overlay (no gradient background)
          function createPlayOverlay(size = 'md') {
            const overlay = document.createElement('div');
            overlay.className = 'pointer-events-none absolute inset-0 flex items-center justify-center';
            const icon = document.createElement('i');
            icon.className = `fas fa-play-circle ${size === 'lg' ? 'text-6xl' : 'text-4xl'} text-white drop-shadow`;
            overlay.appendChild(icon);
            return overlay;
          }

          // Generate a thumbnail image from the first frame of a video
          function generateVideoThumbnail(src) {
            return new Promise((resolve) => {
              try {
                const video = document.createElement('video');
                video.src = src;
                video.preload = 'metadata';
                video.muted = true;
                video.playsInline = true;
                const onReady = () => {
                  // Seek a bit into the video to avoid black frames
                  const seekTo = Math.min(0.1, video.duration ? Math.max(0, video.duration * 0.01) : 0.1);
                  const onSeeked = () => {
                    const width = video.videoWidth || 640;
                    const height = video.videoHeight || 360;
                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, width, height);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                    resolve(dataUrl);
                    cleanup();
                  };
                  video.currentTime = seekTo;
                  video.addEventListener('seeked', onSeeked, { once: true });
                };
                const onError = () => {
                  resolve('');
                  cleanup();
                };
                const cleanup = () => {
                  video.removeEventListener('loadeddata', onReady);
                  video.removeEventListener('error', onError);
                };
                video.addEventListener('loadeddata', onReady, { once: true });
                video.addEventListener('error', onError, { once: true });
                // In case loadeddata doesn't fire (rare), fallback after timeout
                setTimeout(onError, 4000);
              } catch (e) {
                resolve('');
              }
            });
          }

          function renderFeatured(item) {
            if (!featuredWrap) return;
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-orange-500 overflow-hidden';

            const container = document.createElement('div');
            container.className = 'video-container';

            const img = document.createElement('img');
            img.alt = item.title || 'Featured video';
            img.className = 'w-full h-full object-cover';
            // Load thumbnail async
            generateVideoThumbnail(item.src).then((thumb) => {
              if (thumb) img.src = thumb;
            });
            container.appendChild(img);
            container.appendChild(createPlayOverlay('lg'));

            container.addEventListener('click', (e) => {
              e.preventDefault();
              const player = createPlayer(item.src, { autoplay: true });
              container.innerHTML = '';
              container.appendChild(player);
            });

            const meta = document.createElement('div');
            meta.className = 'p-6';
            meta.innerHTML = `
              <h3 class="font-semibold text-xl mb-2 text-gray-800">${item.title || 'Featured Video'}</h3>
              ${item.description ? `<p class="text-gray-600 mb-4">${item.description}</p>` : ''}
              <div class="flex items-center text-sm text-gray-500">
                ${item.duration ? `<span><i class=\"fas fa-clock mr-2\"></i> ${item.duration}</span>` : ''}
                ${item.views ? `<span class=\"ml-4\"><i class=\"fas fa-eye mr-2\"></i> ${item.views} views</span>` : ''}
                ${item.likes ? `<span class=\"ml-4\"><i class=\"fas fa-thumbs-up mr-2\"></i> ${item.likes} likes</span>` : ''}
              </div>
            `;

            card.appendChild(container);
            card.appendChild(meta);
            featuredWrap.appendChild(card);
          }

          function renderCard(item) {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-orange-500 overflow-hidden';

            const container = document.createElement('div');
            container.className = 'video-container relative h-56 bg-black';

            const img = document.createElement('img');
            img.alt = item.title || 'Event video';
            img.className = 'w-full h-full object-cover';
            generateVideoThumbnail(item.src).then((thumb) => {
              if (thumb) img.src = thumb;
            });
            container.appendChild(img);
            container.appendChild(createPlayOverlay('md'));

            container.addEventListener('click', (e) => {
              e.preventDefault();
              const player = createPlayer(item.src, { autoplay: true });
              container.innerHTML = '';
              container.appendChild(player);
            });

            const meta = document.createElement('div');
            meta.className = 'p-4';
            meta.innerHTML = `
              <h4 class="font-semibold mb-2 text-gray-800">${item.title || 'Event Video'}</h4>
              ${item.subtitle ? `<p class="text-gray-600 text-sm mb-2">${item.subtitle}</p>` : ''}
              ${item.duration ? `<div class="text-xs text-gray-500"><i class=\"fas fa-clock mr-1\"></i> ${item.duration}</div>` : ''}
            `;

            card.appendChild(container);
            card.appendChild(meta);
            return card;
          }

          // Render featured and grid with pagination
          renderFeatured(featured);
          if (videosGrid) {
            const PAGE_SIZE = 8;
            let displayed = 0;

            function renderNextVideos(count) {
              const end = Math.min(displayed + count, others.length);
              const frag = document.createDocumentFragment();
              for (let i = displayed; i < end; i++) {
                frag.appendChild(renderCard(others[i]));
              }
              videosGrid.appendChild(frag);
              displayed = end;
              if (loadMoreVideosBtn && displayed >= others.length) {
                loadMoreVideosBtn.style.display = 'none';
              }
            }

            if (loadMoreVideosBtn) {
              loadMoreVideosBtn.addEventListener('click', () => renderNextVideos(PAGE_SIZE));
            }

            renderNextVideos(PAGE_SIZE);
          }
        });

// // Upload logic: send images to server and update gallery
// document.addEventListener('DOMContentLoaded', () => {
//   const uploadArea = document.getElementById('upload-area');
//   const fileInput = document.getElementById('file-input');
//   const browseBtn = document.getElementById('browse-btn');
//   const uploadProgress = document.getElementById('upload-progress');
//   const progressBar = document.getElementById('progress-bar');
//   const progressText = document.getElementById('progress-text');
//   const uploadSuccess = document.getElementById('upload-success');

//   if (!uploadArea || !fileInput || !browseBtn) return;

//   browseBtn.addEventListener('click', () => fileInput.click());
//   fileInput.addEventListener('change', (e) => {
//     const files = Array.from(e.target.files || []);
//     if (files.length) uploadImages(files);
//   });

//   uploadArea.addEventListener('dragover', (e) => {
//     e.preventDefault();
//     uploadArea.classList.add('dragover');
//   });
//   uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
//   uploadArea.addEventListener('drop', (e) => {
//     e.preventDefault();
//     uploadArea.classList.remove('dragover');
//     const files = Array.from(e.dataTransfer.files || []);
//     if (files.length) uploadImages(files);
//   });

//   function uploadImages(files) {
//     // Filter to images only (server also enforces this)
//     const images = files.filter(f => f && f.type && f.type.startsWith('image/'));
//     if (!images.length) {
//       alert('Please select image files (jpg, png, gif, webp).');
//       return;
//     }

//     const form = new FormData();
//     images.forEach(f => form.append('files', f));

//     // Use XHR to track progress
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', '/api/upload');

//     uploadProgress.classList.remove('hidden');
//     uploadSuccess.classList.add('hidden');
//     progressBar.style.width = '0%';
//     progressText.textContent = '0%';

//     xhr.upload.onprogress = (e) => {
//       if (e.lengthComputable) {
//         const pct = Math.round((e.loaded / e.total) * 100);
//         progressBar.style.width = pct + '%';
//         progressText.textContent = pct + '%';
//       }
//     };

//     xhr.onerror = () => {
//       uploadProgress.classList.add('hidden');
//       alert('Upload failed. Please make sure the server is running (npm start).');
//     };

//     xhr.onload = () => {
//       uploadProgress.classList.add('hidden');
//       try {
//         const resp = JSON.parse(xhr.responseText || '{}');
//         if (Array.isArray(resp.files) && resp.files.length) {
//           if (window.addImagesToGallery) window.addImagesToGallery(resp.files);
//           uploadSuccess.classList.remove('hidden');
//           setTimeout(() => uploadSuccess.classList.add('hidden'), 3000);
//         } else {
//           alert('No files were returned from the server.');
//         }
//       } catch (err) {
//         alert('Unexpected server response.');
//       }
//     };

//     xhr.send(form);
//   }
// });
