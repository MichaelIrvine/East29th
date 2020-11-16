const anchorLinks = () => {
  function activeLink() {
    const whoSection = document.querySelector('.who-we-are--wrapper');
    const missionSection = document.querySelector('.mission--wrapper');
    // const founderSection = document.querySelector('.founder--wrapper');
    const whoLink = document.getElementById('who-link');
    const missionLink = document.getElementById('mission-link');
    // const founderLink = document.getElementById('founder-link');

    const windowBottom = window.scrollY + window.innerHeight;
    const whoSectionBottom = whoSection.offsetTop + whoSection.clientHeight;
    const missionSectionBottom =
      missionSection.offsetTop + missionSection.clientHeight;
    // const founderSectionBottom =
    //   founderSection.offsetTop + founderSection.clientHeight;

    // Who We Are
    if (
      windowBottom >= whoSection.offsetTop &&
      windowBottom < whoSectionBottom
    ) {
      whoLink.classList.add('active');
    } else {
      whoLink.classList.remove('active');
    }

    // Missions And Values
    if (
      windowBottom >= missionSection.offsetTop &&
      windowBottom < missionSectionBottom
    ) {
      missionLink.classList.add('active');
    } else {
      missionLink.classList.remove('active');
    }

    // if (
    //   windowBottom >= founderSection.offsetTop &&
    //   windowBottom < founderSectionBottom
    // ) {
    //   founderLink.classList.add('active');
    // } else {
    //   founderLink.classList.remove('active');
    // }
  }

  window.addEventListener('scroll', activeLink);
};

export default anchorLinks;
