
var debug = document.getElementById("debug");

/* var my_vid = $('#vid');
var fallback_img = $('#fallback-img'); */

var vid = document.getElementById("vid");
var img = document.getElementById("fallback-img");

function showImage(){
    vid.style.display = "none";
    img.style.display = "block";
}

/* vid.onerror = function(){

} */

/* $(document).ready(function() {
    console.log("Ready!");

    debug.textContent = "Document ready!";

    
}); */

/* var tempDebug = document.getElementById("temp-debug");
var menuButton = document.getElementById("mobile-menubutton");

var navOnly = document.getElementsByClassName("nav-only");

menuButton.addEventListener('click', function() {
    tempDebug.textContent = "menuButton clicked!";

    if(navOnly[0].style.display == "" || navOnly[0].style.display == "none"){
        navOnly[0].style.display = "block";
    } else {
        navOnly[0].style.display = "none";
    }

}, false);

function displayOff(){
    navOnly[0].style.display = "none";
    navOnly[0].removeEventListener("animationend", displayOff); 
} */

/* $(window).resize(function () {

    tempDebug.textContent = "Resizing screen!";

    if($(window).width() >= 960){
        navOnly[0].style.display = "block";

        tempDebug.textContent = "Resizing screen + window width over 960!";
    }
}); */

// We use window.onload instead of document.ready because the latter is triggered before all images are downloaded
$(window).on("load", function(){

    debug.textContent = "Document ready!";

    // Initial test that is supposed to only for for Safari on macOS:
    var isItSafari = window.safari !== undefined;
    if (isItSafari){
        console.log("Safari, yeah!");
        showImage();
        debug.textContent = "Initially, it is Safari.";
    }
     

    // Check browser...
    var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;
    
    if(isSafari){
        showImage();
        debug.textContent = "You are browsing with Safari.";
    } else {
        debug.textContent = "You are not using Safari.";
    }


    // For playing video when done loading.
/* 
    var video_jq = $('#vid');
    var video_node = video_jq.get(0);

    video_jq.on("canplaythrough", function(e){

        // Video is downloaded, trigger playing
        video_node.play();

    });

    // All resources are ready, trigger video downloading
    video_node.load();
     */

});


/* var root = document.documentElement;
root.classList.add('has-js');

function showMenu() {
    var navBar = document.getElementsByClassName("nav-only");

    if(navBar[0].classList.contains("mobile-nav-on")){

        navBar[0].classList.toggle("mobile-nav-off");

    } else 
    {    
        navBar[0].classList.toggle("mobile-nav-on");
    }

} */

/* 
var navOnly = document.getElementsByClassName("nav-only");
var menuButton = document.getElementById("mobile-menubutton");
var Main = document.getElementsByClassName("textbox");

menuButton.addEventListener("click", function(){

    tempDebug.textContent = "menuButton clicked!";

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