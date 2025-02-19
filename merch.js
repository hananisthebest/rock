const products = [
  {
    id: 0,
    image: 'pink-hoodie-front.png',
    title: 'Pink Hoodie',
    price: 45,
  },
  {
    id: 1,
    image: 'graphictee1.png',
    title: 'Graphic Tee 1',
    price: 25,
  },
  {
    id: 2,
    image: 'graphictee3.png',
    title: 'Graphic Tee 3',
    price: 30,
  },
  {
    id: 3,
    image: 'graphictee2.png',
    title: 'Graphic Tee 2',
    price: 30,
  },
];

const root = document.getElementById('root');
const cartItem = document.getElementById('cartItem');
const totalElement = document.getElementById('total');
let cart = [];

function displayProducts() {
  root.innerHTML = products
    .map(
      (item, i) => `
      <div class="box">
        <div class="img-box">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <div class="bottom">
          <p>${item.title}</p>
          <h2>$${item.price}.00</h2>
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
        .map(
          (item, i) => {
            total += item.price;
            return `
              <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" />
                <p>${item.title}</p>
                <h2>$${item.price}.00</h2>
                <i class="fa-solid fa-trash" onclick="removeFromCart(${i})"></i>
              </div>`;
          }
        )
        .join('')
    : 'Your cart is empty';
  totalElement.innerHTML = `$${total}.00`;
}