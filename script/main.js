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

  function initProductSlider(sectionSelector) {
    const $section = $(sectionSelector);
    const $list = $section.find('.product_list');
    const $cards = $section.find('.product_card');
    const $prevBtn = $section.find('.prev_btn');
    const $nextBtn = $section.find('.next_btn');

    if (!$cards.length) return;

    const cardWidth = $cards.outerWidth();
    const gap = 40;
    const moveDistance = cardWidth + gap;

    let currentIndex = 0;
    const visibleCards = 3;
    const maxIndex = $cards.length - visibleCards;

    function updateButtons() {
      $prevBtn.prop('disabled', currentIndex <= 0);
      $nextBtn.prop('disabled', currentIndex >= maxIndex);
    }

    $nextBtn.on('click', function () {
      if (currentIndex < maxIndex) {
        currentIndex++;
        $list.stop().animate({
          marginLeft: -moveDistance * currentIndex + 'px'
        }, 400);
        updateButtons();
      }
    });

    $prevBtn.on('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
        $list.stop().animate({
          marginLeft: -moveDistance * currentIndex + 'px'
        }, 400);
        updateButtons();
      }
    });

    updateButtons();
  }

  initProductSlider('.new');
  initProductSlider('.best');

///////////////////////////////////  
});