import {cart} from './products.js';

const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const clearButton = document.getElementById('clear-cart-button');
const cartModal = document.getElementById('cart-modal');


// Retrieve cart data from localStorage when the page loads
window.addEventListener('load', () => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);
    cart.length = 0; // Clear the existing cart array
    cart.push(...parsedCart); // Push items from parsedCart to cart
    updateCartDisplay();
  }
});

// Update the cart display
function updateCartDisplay() {
  cartItemsElement.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(cartItem);
    total += item.price;
  });

  cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

function clearCart() {
  cart.length = 0; // Empty the cart array
  localStorage.removeItem('cart'); // Remove cart data from localStorage
  updateCartDisplay(); // Update the cart display
}

// Show cart modal when the checkout button is clicked
checkoutButton.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

clearButton.addEventListener('click', () => {
  clearCart();
  cartModal.style.display = 'none';
});



// Close cart modal when clicking outside the modal
window.addEventListener('click', event => {
  if (event.target === cartModal) {
    cartModal.style.display = 'flex';
  }
});