document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const actualTotalSlides = totalSlides;

    let currentIndex = 0;
    let isTransitioning = false;
    let rotateInterval;

    function showSlide(index) {
        if (!isTransitioning) {
            isTransitioning = true;

            slides.forEach((slide, i) => {
                const scale = i === index ? 1.1 : 1;
                slide.style.transition = 'transform 0.5s ease, filter 0.5s ease';
                slide.style.transform = `scale(${scale})`;
                slide.style.filter = `brightness(${i === index ? 1 : 0.7})`;
            });

            setTimeout(() => {
                isTransitioning = false;
            }, 100);

            currentIndex = index;
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const nextSlide = slides[currentIndex];

        // ScrollIntoView sem mudar a visibilidade na página
        nextSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        const prevSlide = slides[currentIndex];

        // ScrollIntoView sem mudar a visibilidade na página
        prevSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        showSlide(currentIndex);
    }

    // function rotateCarousel() {
    //     rotateInterval = setInterval(() => {
    //         nextSlide();
    //     }, 3000);
    // }

    function stopRotateCarousel() {
        clearInterval(rotateInterval);
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
        nextSlide();
        stopRotateCarousel(); // Pare a rotação quando o usuário clicar manualmente
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        prevSlide();
        stopRotateCarousel(); // Pare a rotação quando o usuário clicar manualmente
    });

    // Rode o carousel automaticamente
    rotateCarousel();
});