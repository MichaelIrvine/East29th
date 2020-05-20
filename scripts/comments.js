const commentSwiper = function () {
  new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 100,
    autoplay: true,
    speed: 1000,
    effect: 'slide',
    // initialSlide: 1,

    //Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<div class="custom-bullet ${className}"></div>`;
      },
    },
  });
};

export default commentSwiper;
