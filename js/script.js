$(function() {

  /* mainvisual slick */ 
  $('.mv-image').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    slidesToshow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1800,
  });

  /* berger menu */ 
  $('.berger-btn').click(function() {
    $(this).toggleClass('open');
    $('nav').toggleClass('open');
  });

  /* scroll fade in */ 
  $(window).scroll(function() {
    $('.fadein').each(function() {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 100) {
        $(this).addClass('appearance');
      }
    });
  });















});