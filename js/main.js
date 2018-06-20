
$(document).ready(function () {
    $(document).on("scroll", onScroll);

//sticky at top
$(window).scroll(function() {
  if ($(this).scrollTop() > 255) {
        $('.nav, #menu').addClass('fix');
        $('.logo-fix > img').show();
        $('.logo-fix > img').css( {
            transition: 'opacity 0.5s linear',
            opacity: 1
        } );
    } else {
        $('.nav, #menu').removeClass('fix');
        $('.logo-fix > img').css( {
        transition: 'opacity 0.25s linear',
        opacity: 0
    } );
    //  $('.logo-fix > img').hide();
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
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
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
      if (refElement.position().top-70 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#menu ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}
