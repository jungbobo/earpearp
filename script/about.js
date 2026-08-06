$(function(){
    $(".menu > li").on({
    mouseenter: function () {
      $(this).find(".submenu").stop().fadeIn();
    },
    mouseleave: function () {
      $(this).find(".submenu").stop().fadeOut();
    }
    });

////////////////////////////    
});