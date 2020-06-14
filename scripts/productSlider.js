const productSwiper = function () {
  new Swiper('.product-swiper-container', {
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    spaceBetween: 0,
    effect: 'fade',
    loop: true,
    speed: 950,
    autoplay: {
      delay: 3500,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export default productSwiper;
