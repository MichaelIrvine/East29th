document.addEventListener('DOMContentLoaded', function () {
  let elementsToFadeIn;
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };

  if ('IntersectionObserver' in window) {
    elementsToFadeIn = document.querySelectorAll(
      '.will-fade-in, .will-fade-up-in'
    );
    let elementObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          let el = entry.target;
          el.classList.add('fade-in');

          elementObserver.unobserve(el);
        }
      });
    });
    elementsToFadeIn.forEach(function (el) {
      elementObserver.observe(el);
    });
  } else {
    // Fallback if browser does not support IntersectionObserver
    elementsToFadeIn = document.querySelectorAll('.will-fade-in');

    elementsToFadeIn.forEach((el) => {
      el.classList.add('fade-in');
    });
  }
});
