const menuButton = document.getElementById('menu-button');
const menuDropdown = document.getElementById('menu-dropdown');

menuButton.addEventListener('click', () => {
  if (menuDropdown.style.display === 'block') {
    menuDropdown.style.display = 'none';
  } else {
    menuDropdown.style.display = 'block';
  }
});