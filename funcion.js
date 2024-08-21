document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex === 0) {
            currentIndex = images.length - 1;  // Si está en la primera imagen, ir a la última.
        } else {
            currentIndex--;
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex === images.length - 1) {
            currentIndex = 0;  // Si está en la última imagen, ir a la primera.
        } else {
            currentIndex++;
        }
        updateCarousel();
    });

    updateCarousel();
});


