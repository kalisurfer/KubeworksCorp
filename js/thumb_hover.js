 $(document).ready(function() {
        $('.work').mouseenter(function(e) {
            $(this).children('a').children('img').animate({ height: '169', left: '0', top: '0', width: '308'}, 100);
            $(this).children('a').children('span').fadeIn(200);
        }).mouseleave(function(e) {
            $(this).children('a').children('img').animate({ height: '195', left: '-5', top: '-5', width: '345'}, 100);
            $(this).children('a').children('span').fadeOut(200);
        });
    });