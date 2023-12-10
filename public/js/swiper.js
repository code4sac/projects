import Swiper from '/node_modules/swiper/swiper.mjs';

/**
 * Carousel Slider
 */
function initSwiper() {
  const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      observer: true,
      observeParents: true
    },
  })
}

export default initSwiper
