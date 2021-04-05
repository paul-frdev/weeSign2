$(function () {

  $(".header__menu a").on("click", function (b) {
    b.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.header__menu-item').on('click', function () {
    $('.header__menu-item').removeClass('header__menu-item--active');
    $(this).addClass('header__menu-item--active');
  });

  $(".portfolio-content__item-images").each((function (t, e) {
    new Parallax(e, {
      hoverOnly: !0,
      relativeInput: !0,
      inputElement: $(e).parents(".portfolio-content__item-image-parent")[0],
      calibrateX: !0,
      calibrateY: !0
    })
  }));

  $(".top-banner__images").each((function (t, e) {
    new Parallax(e, {
      hoverOnly: !0,
      relativeInput: !0,
      inputElement: $(e).parents(".top-banner__box")[0],
      calibrateX: !0,
      calibrateY: !0
    })
  }));

  $(".questions__images").each((function (t, e) {
    new Parallax(e, {
      hoverOnly: !0,
      relativeInput: !0,
      inputElement: $(e).parents(".questions__box")[0],
      calibrateX: !0,
      calibrateY: !0
    })
  }));

  $('.grid-items').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 570,
    gutter: 25
  });

  $('.reviews-content').masonry({
    // options
    itemSelector: '.reviews-content__item',
    columnWidth: 570,
    gutter: 25
  });

  $('.questions-content__item-title').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('questions-content__item-title--active');
  });

  $('.owl-carousel').owlCarousel({
    margin: 10,
    loop: true,
    dots: false,
    autoWidth: true,
    items: 3,
    nav: true,
    navText: ["", ""],
    margin: 30,
    rewind: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });
});



let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

let body = document.querySelector('body');
if (isMobile.any()) {
  body.classList.add('touch')
} else {
  body.classList.add('mouse')
}