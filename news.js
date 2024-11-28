// JavaScript to toggle the menu visibility
document.getElementById("hamburger").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
  });
  
  
  // JavaScript code for the slider functionality
  document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.slides img');
      let currentSlide = 0;
      
      // Initialize by showing the first slide
      slides[currentSlide].classList.add('active');
    
      function showSlides() {
        // Remove "active" class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Add "active" class to the current slide
        slides[currentSlide].classList.add('active');
        
        // Move to the next slide
        currentSlide = (currentSlide + 1) % slides.length;
      }
    
      // Run the slideshow every 2 seconds
      setInterval(showSlides, 2000);
    });
    
  