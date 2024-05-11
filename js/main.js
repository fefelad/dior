const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});




const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//отслеживает клик пользователя
// при клике пользователя мы добавляем класс актив на элемент и блок станвоится виден
document.querySelectorAll('.accordeon__triger').forEach((item) =>{
  item.addEventListener('click' , () => {
    item.parentNode.classList.toggle('accordeon__item--active')
  })
});
