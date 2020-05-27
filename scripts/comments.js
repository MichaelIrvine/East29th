const commentSwiper = function () {
  new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 100,
    autoplay: true,
    speed: 1000,
    effect: 'slide',
    grabCursor: true,

    //Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<div class="custom-bullet ${className}"></div>`;
      },
    },

    // breakpoints
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });
};

export default commentSwiper;
