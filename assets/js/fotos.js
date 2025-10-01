document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.imagen');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Si solo quieres que se active una vez:
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Ajusta el porcentaje de visibilidad necesario
    });

    images.forEach(img => {
      observer.observe(img);
    });
});