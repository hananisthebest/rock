let cart = [];
const cartCount = document.getElementById('cartCount');
const cartItemCount = document.getElementById('cartItemCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartSidebar = document.getElementById('cartSidebar');
const checkoutBtn = document.getElementById('checkoutBtn');

const products = [
  { id: 1, name: 'T-shirt', price: 20 },
  { id: 2, name: 'Hat', price: 15 },
  { id: 3, name: 'Mug', price: 10 }
];

const root = document.getElementById('root');
products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('box');
  productDiv.innerHTML = `
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  root.appendChild(productDiv);
});

function openCart() {
  cartSidebar.classList.add('active');
  updateCart();
}

function closeCart() {
  cartSidebar.classList.remove('active');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.length;
  cartItemCount.textContent = cart.length;
  cartItems.innerHTML = '';
  
  let total = 0;
  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <p>${item.name} - $${item.price}</p>
      <p class="remove" onclick="removeFromCart(${index})">Remove</p>
    `;
    cartItems.appendChild(cartItem);
    total += item.price;
  });
  
  cartTotal.textContent = total.toFixed(2);
}

checkoutBtn.addEventListener('click', () => {
  alert('We cannot take orders right now.');
});