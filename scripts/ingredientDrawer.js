const ingredientDrawer = () => {
  const ingredientsDrawerOpen = document.querySelector('.ingredients-toggle');
  const ingredientsDrawerClose = document.querySelector(
    '.close-ingredients-drawer'
  );

  function openMenu() {
    document.querySelector('.ingredients-drawer').classList.add('open');
  }
  function closeMenu() {
    document.querySelector('.ingredients-drawer').classList.remove('open');
  }

  ingredientsDrawerOpen.addEventListener('click', openMenu);
  ingredientsDrawerClose.addEventListener('click', closeMenu);
};

export default ingredientDrawer;
