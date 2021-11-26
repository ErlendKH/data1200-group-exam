
// Code for the common pages.

var navOnly = document.getElementById("mobile-nav");
var navMenu = document.getElementById("mobile-menubutton");

// Turns off mobile-nav when resized. 
window.onresize = function(){
    if(window.innerWidth > 960){
        navOnly.style.display = "none"
    }
}

// Toggle mobile-nav fade. 
navMenu.addEventListener("click", function(){

    if(navOnly.style.display == "" || navOnly.style.display == "none"){

        navOnly.style.display = "block"
        navOnly.style.animation = "fadeIn 0.5s forwards"

    } else {

        navOnly.style.animation = "fadeOut 0.5s forwards"
        navOnly.addEventListener("animationend", displayOff);

    }
});
  
function displayOff(){

    navOnly.style.display = "none";
    navOnly.removeEventListener("animationend", displayOff); 

}
