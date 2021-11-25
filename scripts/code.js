
/* Code for the common pages. */
/*
var menuButton = document.getElementById("mobile-menubutton");
var mobileNav = document.getElementById("mobile-nav");

menuButton.addEventListener('click', function() {

    if(mobileNav.style.display == "" || mobileNav.style.display == "none"){
        mobileNav.style.display = "block";
    } else {
        mobileNav.style.display = "none";
    }

}, false);

*/
var navOnly = document.getElementById("mobile-nav");
var navMenu = document.getElementById("mobile-menubutton");
var Main = document.getElementById("main");

window.onresize = function(){
    if(window.innerWidth > 960){
        navOnly.style.display = "none"
        Main.style.animation = "fadeIn 0.5s forwards"
    }
}

navMenu.addEventListener("click", function(){

    if(navOnly.style.display == "" || navOnly.style.display == "none"){
        navOnly.style.display = "block"
        navOnly.style.animation = "fadeIn 0.5s forwards"
        Main.style.animation = "fadeOut 0.5s forwards"
       

    } else {
        navOnly.style.animation = "fadeOut 0.5s forwards"
        navOnly.addEventListener("animationend", displayOff);
        Main.style.animation = "fadeIn 0.5s forwards"

    }
});

  function displayOff(){
    navOnly.style.display = "none";
    navOnly.removeEventListener("animationend", displayOff); 
}
