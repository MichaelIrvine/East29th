const anchorLinksBeautyPage = () => {
  function activeLink() {
    const movementSection = document.querySelector('.who-we-are--wrapper');
    const greenSection = document.querySelector('.mission--wrapper');
    const veganSection = document.querySelector('.mission--wrapper');
    const serumSection = document.querySelector('.mission--wrapper');

    const whoLink = document.getElementById('who-link');
    const missionLink = document.getElementById('mission-link');

    const windowBottom = window.scrollY + window.innerHeight;
    const movementSectionBottom =
      movementSection.offsetTop + movementSection.clientHeight;
    const greenSectionBottom =
      greenSection.offsetTop + greenSection.clientHeight;

    // Who We Are
    if (
      windowBottom >= movementSection.offsetTop &&
      windowBottom < movementSectionBottom
    ) {
      whoLink.classList.add('active');
    } else {
      whoLink.classList.remove('active');
    }

    // Missions And Values
    if (
      windowBottom >= greenSection.offsetTop &&
      windowBottom < greenSectionBottom
    ) {
      missionLink.classList.add('active');
    } else {
      missionLink.classList.remove('active');
    }
  }

  window.addEventListener('scroll', activeLink);
};

export default anchorLinks;
