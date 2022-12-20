var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    effect: "slide",
    allowTouchMove: false,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    autoplay: {
        
        delay: 5500,
        slidesPerView: 5,
        disableOnInteraction: false,
    },
  });
