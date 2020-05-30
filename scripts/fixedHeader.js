const fixedHeader = () => {
  const header = document.querySelector('.header__main');
  const scrollLogo = document.querySelector('#east29-logo__fixed');

  function fixed() {
    if (window.scrollY >= 5) {
      document.body.classList.add('fixed-header');
    } else {
      document.body.classList.remove('fixed-header');
    }
  }

  window.addEventListener('scroll', fixed);
};

export default fixedHeader;
