/* Start Navbar */

$(function () {
    $('.bars').click(function () {
        $('.sm-ul').slideToggle();
        $(this).toggleClass('bars-toggle')
    });
});

$(function () {
    $('.sm-ul .products-li').click(function () {
        $('.sm-ul .products-li .nested-ul').toggle();
    });
});

/* End Navbar */



/* Start Scrolling to top */
$(document).ready(function () {
    $('.scrolltop').click(function() {
        $('html, body').animate({
            scrollTop : $('#top').offset().top
        }, 1000);
    });
});
/* End Scrolling To top */