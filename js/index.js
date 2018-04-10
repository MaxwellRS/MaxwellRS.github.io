$(document).ready(function(){
  
  $('ul').on('click', 'li a', function() {
    $('ul li a.active').removeClass('active');
    $(this).addClass('active');
});
  
});