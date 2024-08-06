// script.js

document.addEventListener('DOMContentLoaded', () => {
    const setupCarousel = (carouselId) => {
        const carousel = document.getElementById(carouselId);
        const items = carousel.querySelectorAll('.karusel-item');
        let currentItem = 0;
        const intervalTime = 5000; // Change image every 3 seconds

        const showItem = index => {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
        };

        const prevItem = () => {
            currentItem = (currentItem === 0) ? items.length - 1 : currentItem - 1;
            showItem(currentItem);
        };

        const nextItem = () => {
            currentItem = (currentItem === items.length - 1) ? 0 : currentItem + 1;
            showItem(currentItem);
        };

        carousel.querySelector('.tombol-prev').addEventListener('click', prevItem);
        carousel.querySelector('.tombol-next').addEventListener('click', nextItem);

        // Automatically change image
        setInterval(nextItem, intervalTime);

        // Display the first item initially
        showItem(currentItem);
    };

    setupCarousel('karusel1');
    setupCarousel('karusel2');
});
