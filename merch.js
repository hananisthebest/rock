const products = [
  { id: 0, image: 'pink-hoodie-front.png', title: 'Logo Pink Pullover Hoodie', price: 45 },
  { id: 1, image: 'graphictee1.png', title: 'Ride The Lightning Graphic T-Shirt', price: 25 },
  { id: 2, image: 'graphictee3.png', title: 'Celestial Guardian Graphic T-Shirt', price: 25 },
  { id: 3, image: 'graphictee2.png', title: 'Interstellar Graphic T-Shirt', price: 25 },
  { id: 4, image: 'black-crewneck-front.png', title: 'Black Slogan Graphic Crewneck', price: 40 },
  { id: 5, image: 'black-mug-front.png', title: 'Black Stage Fright Mug', price: 10 },
  { id: 6, image: 'black-zipup-front.png', title: 'Black Stage Fright Zip-Up', price: 50 },
  { id: 7, image: 'bucket-hat-front.png', title: 'Stage Fright Bucket Hat', price: 15 },
  { id: 8, image: 'stagefrightshirt.png', title: 'Pink Stage Fright T-Shirt', price: 25 },
  { id: 9, image: 'navy-zipup-front.png', title: 'Navy Stage Fright Zip-Up', price: 50 },
  { id: 10, image: 'pink-crewneck-front.png', title: 'Pink Slogan Crewneck', price: 35 },
  { id: 11, image: 'black-hoodie-front.png', title: 'Black Stage Fright Hoodie', price: 40 },
  { id: 12, image: 'purple-mug-front.png', title: 'Purple Stage Fright Mug', price: 10 },
  { id: 13, image: 'trucker-hat-front.png', title: 'Stage Fright Trucker Hat', price: 20 },
  { id: 14, image: 'white-crewneck-front.png', title: 'White Slogan Crewneck', price: 35 },
];


const root = document.getElementById('root');
const cartItem = document.getElementById('cartItem');
const totalElement = document.getElementById('total');
let cart = [];

function displayProducts() {
  root.innerHTML = products
    .map(
      (item, i) => `
      <div class="product-card">
        <div class="product-image">
          <img class="product-thumb" src="${item.image}" alt="${item.title}" />
        </div>
        <div class="product-info">
          <p class="product-short-description">${item.title}</p>
          <span class="price">$${item.price}</span>
          <button onclick="addToCart(${i})">Add to cart</button>
        </div>
      </div>`
    )
    .join('');
}

displayProducts();

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  let total = 0;
  cartItem.innerHTML = cart.length
    ? cart
        .map((item, i) => {
          total += item.price;
          return `
              <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" />
                <p>${item.title}</p>
                <h2>$${item.price}.00</h2>
                <i class="fa-solid fa-trash" onclick="removeFromCart(${i})"></i>
              </div>`;
        })
        .join('')
    : 'Your cart is empty';
  totalElement.innerHTML = `$${total}.00`;
}

// Adjust margin-top of container based on top image height
document.addEventListener("DOMContentLoaded", function() {
  const topImage = document.querySelector(".top-image");
  const container = document.querySelector(".container");
  function adjustMargin() {
    if (topImage && container) {
      const imageHeight = topImage.offsetHeight;
      container.style.marginTop = imageHeight + "px";
    }
  }
  adjustMargin();
  window.addEventListener("resize", adjustMargin);
});
