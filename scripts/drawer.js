const drawer = () => {
  const menuOpen = document.querySelector('.nav-toggle');
  const menuClose = document.querySelector('.close-nav');
  const cartOpen = document.querySelector('.cart-toggle');
  const cartClose = document.querySelector('.close-cart');

  function openMenu() {
    document.querySelector('.nav-drawer').classList.add('open');
  }
  function closeMenu() {
    document.querySelector('.nav-drawer').classList.remove('open');
  }
  function openCart() {
    document.querySelector('.cart-drawer').classList.add('open');
  }
  function closeCart() {
    document.querySelector('.cart-drawer').classList.remove('open');
  }

  menuOpen.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  cartOpen.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
};

export default drawer;
