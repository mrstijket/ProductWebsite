let basket = require('basket.js');
const addToBasketButtons = document.querySelectorAll('.add-to-basket-btn');

const products = [
  { id: 1, name: 'Smartphone XYZ', price: 599.99 },
  { id: 2, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 3, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 4, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 5, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 6, name: 'Smartphone ZZZ', price: 199.99 },
  // Add more products as needed
];

// Handle "Add to Basket" button click
addToBasketButtons.forEach(button => {
  button.addEventListener('click', event => {
    const productId = parseInt(event.target.dataset.productId);
    const productToAdd = products.find(product => product.id === productId);

    if (productToAdd) {
      basket.push(productToAdd);
      alert(`${productToAdd.name} added to your basket!`);
    }
  });
});