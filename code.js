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

function toggle(it) {
    if (it.height == 200)
      {
        it.style.width = "400px" ;
         it.style.height = "400px";
         it.style.cursor = "zoom-out";
        }
    else
      {
        it.style.width = "200px"; 
        it.style.height = "200px";
        it.style.cursor = "zoom-in";
    }
  }