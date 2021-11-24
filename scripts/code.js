
/* Code for the common pages. */

var menuButton = document.getElementById("mobile-menubutton");
var mobileNav = document.getElementById("mobile-nav");

menuButton.addEventListener('click', function() {

    if(mobileNav.style.display == "" || mobileNav.style.display == "none"){
        mobileNav.style.display = "block";
    } else {
        mobileNav.style.display = "none";
    }

}, false);

$(document).ready(function() {

    /* Displaying the nav list with a change event listener to capture screen size changes.
    https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent */

    /* Triggers everytime the screenwidth reaches 961px. */
    const desktopQuery = window.matchMedia('(min-width : 961px)');

    desktopQuery.addEventListener('change', (e) => {
        mobileNav.style.display = "none";
    });

});

window.onresize = function(){
    if(window.innerWidth > 960){
        navOnly[0].style.display = "block";
    } else {
        navOnly[0].style.display = "none";
        Main[0].style.opacity = "1";

    }
      
  }