let cart = [];
let cartCount = document.getElementById('cartCount');
let cartItemCount = document.getElementById('cartItemCount');
let cartItems = document.getElementById('cartItems');
let cartTotal = document.getElementById('cartTotal');

// Sample product data
const products = [
  { id: 1, name: 'T-shirt', price: 20 },
  { id: 2, name: 'Hat', price: 15 },
  { id: 3, name: 'Mug', price: 10 }
];

// Add products to the page (example)
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

// Open the cart modal
function openCart() {
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = 'block';
  updateCart();
}

// Close the cart modal
function closeCart() {
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = 'none';
}

// Add item to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

// Remove item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Update the cart display
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
