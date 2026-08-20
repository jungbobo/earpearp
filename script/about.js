$(function(){
  
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

  $(document).ready(function() {
    $('.btn_en_accordion').on('click', function() {
        $(this).toggleClass('active');
        $('.brand_story .en').slideToggle(300);
    });

    $(window).on('resize', function() {
        if ($(window).width() > 550) {
            $('.brand_story .en').removeAttr('style');
            $('.btn_en_accordion').removeClass('active');
        }
    });
});

////////////////////////////    
});