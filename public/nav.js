$(window).on('load',function(){

  $('.hamburger-nav').on('click', function(){

    $('.menu').fadeToggle('slow').toggleClass('menu-hide');
    $('.menu').animate({
      // height: 'toggle'
    });

  });

});
