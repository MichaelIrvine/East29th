const anchorLinksBeautyPage = () => {
  function activeLink() {
    const movementSection = document.querySelector('.clean-movement');
    const greenSection = document.querySelector('.clean-green-beauty');
    const veganSection = document.querySelector('.clean-vegan--wrapper');
    const serumsSection = document.querySelector('.clean-serums');

    const movementLink = document.getElementById('clean-beauty-link');
    const greenLink = document.getElementById('green-beauty-link');
    const veganLink = document.getElementById('vegan-link');
    const serumsLink = document.getElementById('serums-link');

    const windowBottom = window.scrollY + window.innerHeight;
    const movementSectionBottom =
      movementSection.offsetTop + movementSection.clientHeight;
    const greenSectionBottom =
      greenSection.offsetTop + greenSection.clientHeight;
    const veganSectionBottom =
      veganSection.offsetTop + veganSection.clientHeight;
    const serumsSectionBottom =
      serumsSection.offsetTop + serumsSection.clientHeight;

    // Clean Movement
    if (
      windowBottom >= movementSection.offsetTop &&
      windowBottom < movementSectionBottom
    ) {
      movementLink.classList.add('active');
    } else {
      movementLink.classList.remove('active');
    }

    // Green Beauty
    if (
      windowBottom >= greenSection.offsetTop &&
      windowBottom < greenSectionBottom
    ) {
      greenLink.classList.add('active');
    } else {
      greenLink.classList.remove('active');
    }
    // Vegan
    if (
      windowBottom >= veganSection.offsetTop &&
      windowBottom < veganSectionBottom
    ) {
      veganLink.classList.add('active');
    } else {
      veganLink.classList.remove('active');
    }
    // Serums
    if (
      windowBottom >= serumsSection.offsetTop &&
      windowBottom < serumsSectionBottom
    ) {
      serumsLink.classList.add('active');
    } else {
      serumsLink.classList.remove('active');
    }
  }

  window.addEventListener('scroll', activeLink);
};

export default anchorLinksBeautyPage;
