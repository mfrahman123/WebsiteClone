

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      speed: 400,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
   delay: 4000,
 },
    });


window.onscroll = function changeNav(){
var navBar = document.getElementById('navBar'),
      aboutSection = document.getElementById('secondSection'),
      secondSectionTop = aboutSection.getBoundingClientRect().top,
      navBarHeight = navBar.getBoundingClientRect().height;


if(secondSectionTop <= navBarHeight) {
      navBar.className = ('navbar-brand-alt');
} else if(secondSectionTop >= navBarHeight) {
     navBar.className = ('navbar-brand');
}

};
