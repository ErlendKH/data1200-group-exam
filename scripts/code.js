
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

window.onresize = function(){
    if(window.innerWidth > 961){
        mobileNav.style.display = "none";
    }
}