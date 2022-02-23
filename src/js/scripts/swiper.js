import Swiper, { FreeMode, Navigation,  Thumbs } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const mySwiper = new Swiper(".mySwiper", {
  modules: [FreeMode ],
  spaceBetween: 10,
  
  slidesPerView:3,
  
  freeMode: true,
});
  const swiper = new Swiper('.swiperOne', {
    modules: [Navigation, Thumbs ],
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: mySwiper,
    },
  });

  const swiperBot = new Swiper('.product__menu--swiper', {
    modules: [Navigation],
    spaceBetween:20,
    slidesPerView:5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  })