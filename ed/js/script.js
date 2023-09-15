const menuIcon = document.querySelector('.menu-icon');
const barsIcon = document.querySelector('.fa-bars');
const xIcon = document.createElement('i');
xIcon.classList.add('fa', 'fa-times', 'fa-2x');
menuIcon.addEventListener('click', function() {
  if (menuIcon.contains(barsIcon)) {
    menuIcon.replaceChild(xIcon, barsIcon);
  } else {
    menuIcon.replaceChild(barsIcon, xIcon);
  }
});


// Get the arrow element
const arrow = document.querySelector('.arrow');

// Add an event listener to the arrow
arrow.addEventListener('click', () => {
  // Smooth scroll to the element with id "abt"
  document.querySelector('#abt').scrollIntoView({
    behavior: 'smooth'
  });
});


//Menu toggle-button for small screens
$(document).ready(function (){
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

$(document).ready(function() {
  $(".clk").on("click", function(e) {
      e.preventDefault();
      $("nav ul").toggleClass("showing");
      $(this).find("i").toggleClass("fa fa-bars fa-2x fas fa-times fa-2x");
  });

  $(window).on("scroll", function() {
      if ($(window).scrollTop()) {
          $("nav").addClass("black");
      } else {
          $("nav").removeClass("black");
      }

      if ($(window).scrollTop() > 50) {
          $(".nav").addClass("active");
      } else {
          $(".nav").removeClass("active");
      }
  });

  $(".smoothScroll").click(function() {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
              $("html,body").animate({
                  scrollTop: target.offset().top
              }, 100);
              return false;
          }
      }
  });
});