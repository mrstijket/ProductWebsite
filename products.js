const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

const products = [
  { id: 1, name: 'Smartphone XYZ', price: 599.99 },
  { id: 2, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 3, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 4, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 5, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 6, name: 'Smartphone ZZZ', price: 199.99 },
  // Add more products as needed
];

const cart = [];

// Retrieve cart data from localStorage when the page loads
window.addEventListener('load', () => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);
    cart.length = 0; // Clear the existing cart array
    cart.push(...parsedCart); // Push items from parsedCart to cart
  }
});

// Handle "Add to Cart" button click
addToCartButtons.forEach(button => {
  button.addEventListener('click', event => {
    const productId = parseInt(event.target.dataset.productId);
    const productToAdd = products.find(product => product.id === productId);

    if (productToAdd) {
      cart.push(productToAdd);
      localStorage.setItem('cart',JSON.stringify(cart));
      alert(`${productToAdd.name} added to your cart!`);
      console.log(cart);
    }
  });
});

export {products, cart};