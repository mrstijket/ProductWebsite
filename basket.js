// basket.js
const addToBasketButtons = document.querySelectorAll('.add-to-basket-btn');
const basketItems = document.getElementById('basket-items');
const checkoutButton = document.getElementById('checkout-btn');
const products = [
  { id: 1, name: 'Smartphone XYZ', price: 599.99 },
  { id: 2, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 3, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 4, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 5, name: 'Smartphone ZZZ', price: 199.99 },
  { id: 6, name: 'Smartphone ZZZ', price: 199.99 },
  // Add more products as needed
];
const basket = [];

// Display products in the basket
function displayBasketItems() {
  basketItems.innerHTML = '';
  let totalPrice = 0;

  basket.forEach(product => {
    const item = document.createElement('div');
    item.className = 'basket-item';
    item.innerHTML = `
      <p>${product.name}</p>
      <p>$${product.price.toFixed(2)}</p>
    `;
    basketItems.appendChild(item);
    totalPrice += product.price;
  });

  // Display total price
  const totalItem = document.createElement('div');
  totalItem.className = 'basket-item total';
  totalItem.innerHTML = `
    <p>Total</p>
    <p>$${totalPrice.toFixed(2)}</p>
  `;
  basketItems.appendChild(totalItem);
}

// Handle "Add to Basket" button click
addToBasketButtons.forEach(button => {
  button.addEventListener('click', event => {
    const productId = parseInt(event.target.dataset.productId);
    const productToAdd = products.find(product => product.id === productId);

    if (productToAdd) {
      basket.push(productToAdd);
      displayBasketItems();
      alert(`${productToAdd.name} added to your basket!`);
    }
  });
});

// Handle checkout button click
checkoutButton.addEventListener('click', () => {
  if (basket.length === 0) {
    alert('Your basket is empty. Please add products before proceeding to checkout.');
  } else {
    alert('Redirect to checkout page or proceed to payment!');
  }
});

// Call function to display basket items when the page loads
displayBasketItems();

export {basket};