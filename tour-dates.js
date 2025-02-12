document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel-image");
    const textElement = document.querySelector(".carousel-info");
    const originalText = "TIME • DATE";
    let index = 0;

    function moveCarousel() {
        index = (index + 1) % images.length; 
        track.style.transform = `translateX(-${index * 100}%)`;
        startScramble();
    }

    function startScramble() {
        let scrambleDuration = 500; // Total scramble time in milliseconds
        let intervalSpeed = 200; // How fast the text changes
        let elapsedTime = 0;

        const scrambleInterval = setInterval(() => {
            textElement.textContent = scrambleText();
            elapsedTime += intervalSpeed;

            if (elapsedTime >= scrambleDuration) {
                clearInterval(scrambleInterval);
                textElement.textContent = originalText; // Reset to original text
            }
        }, intervalSpeed);
    }

    function scrambleText() {
        const chars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";
        return Array.from(originalText).map(char => 
            char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]
        ).join("");
    }

    setInterval(moveCarousel, 3000);
});
