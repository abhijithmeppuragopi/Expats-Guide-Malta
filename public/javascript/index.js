document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    document.querySelector('.carousel-button.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-button.prev').addEventListener('click', prevSlide);

    showSlide(currentSlide);

        // FAQ toggle functionality
        const faqItems = document.querySelectorAll('.faq-item h3');
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                const content = item.nextElementSibling;
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            });
        });
    
        // Sliding news feed functionality
        const newsFeed = document.querySelector('.news-feed');
        let startScrollPos = 0;
        let isMouseDown = false;
    
        newsFeed.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            startScrollPos = e.pageX - newsFeed.offsetLeft;
            newsFeed.style.cursor = 'grabbing';
        });
    
        newsFeed.addEventListener('mouseleave', () => {
            isMouseDown = false;
            newsFeed.style.cursor = 'grab';
        });
    
        newsFeed.addEventListener('mouseup', () => {
            isMouseDown = false;
            newsFeed.style.cursor = 'grab';
        });
    
        newsFeed.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - newsFeed.offsetLeft;
            const scroll = x - startScrollPos;
            newsFeed.scrollLeft -= scroll;
        });
    });

    // <,,,,,,,,,,Hamburger..........>
    document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
    
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    });

    
    // ......................

    //<......scroll down animation.....>

  // Define the callback function that will be executed when visibility changes
const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Element is in view!');
        // Perform any additional actions here
        entry.target.classList.add('show');
  
      }
    });
  };
  
  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(callback);
  
  // Target the element to observe
  const target = document.querySelectorAll('.hidden');
  
  // Start observing the target element
  target.forEach((entries)=>{
    observer.observe(entries);
  })