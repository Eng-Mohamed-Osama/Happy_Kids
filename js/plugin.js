$(document).ready(function() {

  //Nav Bar Scrolling Effect

  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= $('nav').height()) {
      $(".navbar").addClass("scrolling").removeClass('bg');
      $(".dropdown-menu").removeClass('dropdown-menu-fix');
    } else {
      $(".navbar").addClass("bg").removeClass('scrolling');
      $(".dropdown-menu").addClass('dropdown-menu-fix');
    }
  });

  //Nav Bar menu Toggle Effect

  $('.dropdown a').each(function() {
    $(this).on('click', function() {
      var currentcontent = $(this).siblings('.dropdown-menu');
      currentcontent.slideToggle();
      $('.dropdown-menu').not(currentcontent).slideUp();
    });
  });
  $(window).on('click', function() {
    $('.dropdown-menu').slideUp(200);
    $('.navbar-toggler').addClass('collapsed');
    $('.navbar-collapse').removeClass('show');
  });
});
