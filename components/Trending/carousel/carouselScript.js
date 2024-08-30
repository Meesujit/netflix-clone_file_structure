document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    let currentIndex = 0;

    nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= track.children.length - 4) currentIndex = 0;
        track.style.transform = `translateX(-${currentIndex * 25}%)`;
    });

    prevButton.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = track.children.length - 4;
        track.style.transform = `translateX(-${currentIndex * 25}%)`;
    });
});
