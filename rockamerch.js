const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    // Set the scroll speed to a fraction of the container width (e.g., 0.3 for slower scroll)
    const scrollSpeed = 0.2 * containerWidth; // Change 0.3 to a smaller or larger value as needed

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += scrollSpeed;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= scrollSpeed;
    });
});
