(function ($) {
  jQuery.fn.slidebox = function() {
    var slidebox = this;
    var originalPosition = slidebox.css('right');
    var open = false;
    var boxAnimations;

    if (Modernizr.cssanimations) {
      boxAnimations = {
        open:  function() { slidebox.addClass('open'); },
        close: function() { slidebox.removeClass('open'); },
      }
    } else {
      boxAnimations = {
        open: function() {
          slidebox.animate({
            'left': '0px'
          }, 300);
        },
        close: function() {
          slidebox.stop(true).animate({
            'left': originalPosition
          }, 100);
        }
      }
    }

    $(window).scroll(function() {
      var distanceTop = $('.last').offset().top - $(window).height();

      if ($(window).scrollTop() > distanceTop) {
        if (!open) {
          open = true;
          boxAnimations.open();
          track("Open");
        }
      } else {
        open = false;
        boxAnimations.close();
      }
    });

    
  }

  $(function() {
    $('#slidebox').slidebox();
  });
})(jQuery);