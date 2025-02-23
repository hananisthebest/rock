const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    // Adjust scroll speed
    const scrollSpeed = 0.5 * containerWidth; // Adjust this for faster/slower scrolling

    // Instantly scroll when button is clicked (no animation delay)
    nxtBtn[i].addEventListener('click', () => {
        item.scrollBy({ left: scrollSpeed, behavior: 'smooth' });
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollBy({ left: -scrollSpeed, behavior: 'smooth' });
    });
});
