$(function() {
    function slidePanel( newPanel, direction ) {
        // define the offset of the slider obj, vis a vis the document
        var offsetLeft = $slider.offset().left;

        // offset required to hide the content off to the left / right
        var hideLeft = -1 * ( offsetLeft + $slider.width() );
        var hideRight = $(window).width() - offsetLeft;

        // change the current / next positions based on the direction of the animation
        if ( direction == 'left' ) {
            currPos = hideLeft;
            nextPos = hideRight;
        }
        else {
            currPos = hideRight;
            nextPos = hideLeft;
        }

        // slide out the current panel, then remove the active class
        $slider.children('.slide-panel.active').animate({
            left: currPos
        }, 500, function() {
            $(this).removeClass('active');
        });

        // slide in the next panel after adding the active class
        $( $sliderPanels[newPanel] ).css('left', nextPos).addClass('active').animate({
            left: 0
        }, 500 );
    }

    var $slider = $('#promos');
    var $sliderPanels = $slider.children('.slide-panel');

    var $navWrap = $('<div id="arrow_controls"></div>').appendTo( $slider );
    var $navLeft = $('<a href="#" id="prev">next</a>').appendTo( $navWrap );
    var $navRight = $('<a href="#" id="next">prev</a>').appendTo( $navWrap );

    var currPanel = 0;

    $navLeft.click(function() {
        currPanel--;

        // check if the new panel value is too small
        if ( currPanel < 0 ) currPanel = $sliderPanels.length - 1;

        slidePanel(currPanel, 'right');
    });

    $navRight.click(function() {
        currPanel++;

        // check if the new panel value is too big
        if ( currPanel >= $sliderPanels.length ) currPanel = 0;

        slidePanel(currPanel, 'left');
    });
});