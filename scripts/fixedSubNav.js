const fixedSubNav = () => {
  const subNavBar = document.querySelector('.about-page-nav-bar');
  const subNavBarHeight = subNavBar.clientHeight;
  const topSubNav = subNavBar.offsetTop;
  const bumpedSection = document.querySelector('.who-we-are--wrapper');

  function fixed() {
    if (window.scrollY >= 200) {
      const headerBar = document.querySelector('.header__main');
      const headerHeight = headerBar.offsetHeight;

      if (window.scrollY >= topSubNav - headerHeight - 2) {
        bumpedSection.style.paddingTop = `${subNavBarHeight}px`;
        document.body.classList.add('fixed-sub-nav');
        subNavBar.style.top = `${headerHeight}px`;
      } else {
        document.body.classList.remove('fixed-sub-nav');
        subNavBar.style.top = 0;
        bumpedSection.style.paddingTop = 0;
      }
    }
  }

  window.addEventListener('scroll', fixed);
};

export default fixedSubNav;
