$(document).ready(function(){
  
  $(window).on('load resize',function(){
        if($(window).width() < 950){
            window.location = "https://codepen.io/okmaxlegroom/full/EEGNBR/"
        }
    });
  
  $('ul').on('click', 'li a', function() {
    $('ul li a.active').removeClass('active');
    $(this).addClass('active');
});
  
});