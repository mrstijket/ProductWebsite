//const {cart} = require('./products');

const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const cartModal = document.getElementById('cart-modal');

// Update the cart display
function updateCartDisplay() {
  cartItemsElement.innerHTML = '';
  let total = 0;

  products.cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(cartItem);
    total += item.price;
  });

  cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Show cart modal when the checkout button is clicked
checkoutButton.addEventListener('click', () => {
  cartModal.style.display = 'block';
});

// Close cart modal when clicking outside the modal
window.addEventListener('click', event => {
  if (event.target === cartModal) {
    cartModal.style.display = 'none';
  }
});
