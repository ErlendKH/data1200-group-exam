$(document).ready(function(){

    /* -64 to offset the header bar... */

    $(".nav-antipasti").click(function () {
        $('html,body').animate({
            scrollTop: $(".antipasti").offset().top-64
        },
            'slow');
    });

    $(".nav-main-course").click(function () {
        $('html,body').animate({
            scrollTop: $(".main-course").offset().top-64
        },
            'slow');
    });

    $(".nav-insalata").click(function () {
        $('html,body').animate({
            scrollTop: $(".insalata").offset().top-64
        },
            'slow');
    });

    $(".nav-dolci").click(function () {
        $('html,body').animate({
            scrollTop: $(".dolci").offset().top-64
        },
            'slow');
    });

});