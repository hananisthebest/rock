const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

const smoothScroll = (element, amount, duration) => {
    let startTime = null;
    const startScroll = element.scrollLeft;

    const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Apply easing function (ease-out)
        element.scrollLeft = startScroll + amount * (1 - Math.pow(1 - progress, 3));

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
};

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    // Adjust scroll speed by changing this value
    const scrollSpeed = 0.3 * containerWidth; // Change 0.3 for slower or faster scrolling
    const scrollDuration = 500; // Adjust duration for smoother effect (in ms)

    nxtBtn[i].addEventListener('click', () => {
        smoothScroll(item, scrollSpeed, scrollDuration);
    });

    preBtn[i].addEventListener('click', () => {
        smoothScroll(item, -scrollSpeed, scrollDuration);
    });
});
