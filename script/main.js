$(function () {

  $('.menu > li').hover(
    function () {
      $(this).find('.submenu').stop().slideDown(200);
    },
    function () {
      $(this).find('.submenu').stop().slideUp(200);
    }
  );

  $('.header_icon .fa-bars').parent('a').on('click', function (e) {
    e.preventDefault();
    $('.mobile_menu').fadeIn(200);
    $('.mobile_menu_wrap').addClass('active');
    $('body').css('overflow', 'hidden');
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });

  $('.btn_close, .mobile_menu').on('click', function () {
    $('.mobile_menu').fadeOut(200);
    $('.mobile_menu_wrap').removeClass('active');
    $('body').css('overflow', '');
  });

  $('.mobile_nav').on('click', '.btn_toggle', function (e) {
    e.preventDefault();
    
    var $parentLi = $(this).closest('li');
    var $submenu = $parentLi.children('.mobile_submenu');
    var $icon = $(this).children('i');

    if ($submenu.length > 0) {
      $('.mobile_submenu').not($submenu).slideUp(200);
      $('.mobile_nav .btn_toggle i').not($icon).removeClass('fa-chevron-up').addClass('fa-chevron-down');

      $submenu.slideToggle(200);
      $icon.toggleClass('fa-chevron-down fa-chevron-up');
    }
  });

  $('.wish_btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });

  function initProductSlider(sectionSelector) {
    const $section = $(sectionSelector);
    if (!$section.length) return;

    return new Swiper(`${sectionSelector} .swiper`, {
      slidesPerView: 3,
      spaceBetween: 30,
      grabCursor: true,

      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },

      navigation: {
        nextEl: `${sectionSelector} .next_btn`,
        prevEl: `${sectionSelector} .prev_btn`,
      },

      pagination: {
        el: `${sectionSelector} .swiper-pagination`,
        clickable: true,
      },
    });
  }

  initProductSlider('.new');
  initProductSlider('.best');

});