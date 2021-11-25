
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
    if(window.innerWidth < 601){
        mobileNav.style.display = "none";
    }
}

/* var navOnly = document.getElementsByClassName("nav-only");
var navMenu = document.getElementById("mobile-menubutton");
var Main = document.getElementsByClassName("textbox");

navMenu.addEventListener("click", function(){

    if(navOnly[0].style.display == "" || navOnly[0].style.display == "none"){
        navOnly[0].style.display = "block"
        navOnly[0].style.animation = "fadeIn 0.5s forwards"
        Main[0].style.animation = "fadeOut 0.5s forwards"
       

    } else {
        navOnly[0].style.animation = "fadeOut 0.5s forwards"
        navOnly[0].addEventListener("animationend", displayOff);
        Main[0].style.animation = "fadeIn 0.5s forwards"

    }
});

  function displayOff(){
    navOnly[0].style.display = "none";
    navOnly[0].removeEventListener("animationend", displayOff); 
}
*/