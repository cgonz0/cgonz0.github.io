// console.log('hey');
// alert("hello javascript");


$(document).ready(function () {
    $(document).on("scroll", onScroll);

//sticky at top
$(window).scroll(function() {
  if ($(this).scrollTop() > 255) {
              $('.nav, #menu').addClass('fix');
      } else {
          $('.nav, #menu').removeClass('fix');
      }
});

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
          nav = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top-75
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#menu ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}