document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
        snapOnRelease: true
      }
    });
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.
    });
  
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        const activeItem = document.querySelector('.accordion-item.active');
        if (activeItem && activeItem !== item) {
          const activeItemContent = activeItem.querySelector('.accordion-content');
          activeItem.classList.remove('active');
          activeItemContent.style.maxHeight = 0;
        }
        if (!isActive) {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          item.classList.remove('active');
          content.style.maxHeight = 0;
        }
      });
    });
  });
  