document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slides img");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    let counter = 0;
    let interval;

    function updateSlide(index) {
        slides.forEach((img, i) => img.classList.toggle("active", i === index));
    }

    function slideNext() {
        counter = (counter + 1) % slides.length;
        updateSlide(counter);
    }

    function slidePrev() {
        counter = (counter - 1 + slides.length) % slides.length;
        updateSlide(counter);
    }

    function startAutoSlide() {
        clearInterval(interval); s
        interval = setInterval(slideNext, 4000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    // Button Event Listeners (also restart auto-slide)
    next.addEventListener("click", () => {
        slideNext();
        startAutoSlide();
    });

    prev.addEventListener("click", () => {
        slidePrev();
        startAutoSlide();
    });

    // Pause auto-slide on hover, resume on mouse leave
    document.querySelector(".slide-container").addEventListener("mouseover", stopAutoSlide);
    document.querySelector(".slide-container").addEventListener("mouseout", startAutoSlide);

    startAutoSlide();
});
