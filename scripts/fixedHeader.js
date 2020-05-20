const fixedHeader = () => {
  const header = document.querySelector('.header__main');

  function fixed() {
    if (window.scrollY >= 1) {
      document.body.classList.add('fixed-header');
    } else {
      document.body.classList.remove('fixed-header');
    }
  }

  window.addEventListener('scroll', fixed);
};

export default fixedHeader;
