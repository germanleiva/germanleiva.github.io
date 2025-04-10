document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');
  
    carousels.forEach(carousel => {
      const container = carousel.querySelector('.carousel-images');
      const images = container.querySelectorAll('img');
      let index = 0;
  
      const updateCarousel = () => {
        const offset = -index * 100;
        container.style.transform = `translateX(${offset}%)`;
      };
  
      carousel.querySelector('.carousel-prev').addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        updateCarousel();
      });
  
      carousel.querySelector('.carousel-next').addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateCarousel();
      });
  
      updateCarousel();
    });
  });
  