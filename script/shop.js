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

  $('.category_list li a').on('click', function (e) {
    e.preventDefault();
    $('.category_list li').removeClass('active');
    $(this).parent('li').addClass('active');
  });

  $('.sort_btn').on('click', function (e) {
    if (window.matchMedia('(max-width: 500px)').matches) {
      e.stopPropagation();
      $('.sort_dropdown').toggleClass('active');
      $('.sort_options').stop().slideToggle(200);
    }
  });

  $('.sort_options li button').on('click', function () {
    var selectedText = $(this).text();
    $('.sort_btn span').text(selectedText);

    $('.sort_options li').removeClass('active');
    $(this).parent('li').addClass('active');

    if (window.matchMedia('(max-width: 500px)').matches) {
      $('.sort_dropdown').removeClass('active');
      $('.sort_options').slideUp(200);
    }
  });

  $(document).on('click', function (e) {
    if (window.matchMedia('(max-width: 500px)').matches && !$(e.target).closest('.sort_dropdown').length) {
      $('.sort_dropdown').removeClass('active');
      $('.sort_options').slideUp(200);
    }
  });


///////////////////////////////////////////////////  
});