$(window).on('load',function(){
  console.log('first')

  $('.hamburger-nav').on('click', function(){
    console.log('second')

    $('.menu').fadeToggle('slow').toggleClass('menu-hide');
    $('.menu').animate({
      height: 'toggle'

    });

  });

});
