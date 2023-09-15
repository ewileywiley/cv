//Menu toggle-button for small screens
$(document).ready(function (){
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

//Scrolling Effect for nav
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});

$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});
