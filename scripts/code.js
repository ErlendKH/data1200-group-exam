
var debug = document.getElementById("debug");

/* var my_vid = $('#vid');
var fallback_img = $('#fallback-img'); */

var vid = document.getElementById("vid");
var img = document.getElementById("fallback-img");

function showImage(){
    debug.textContent += " showImage() triggered!";

    /* vid.style.display = "none"; */
    img.style.display = "block";

    /* vid.style.display = "none"; */

/*     document.getElementById("fallback-img").style.display = "block";
    document.getElementById("vid").style.display = "none"; */

    // Check if image it exists: On a second note, surely the img works, right...
    // if (typeof(img) != 'undefined' && element != null)
    // {
    //     img.style.display = "block";
    // }
}

/* In separate functions as the vid may not even appear on Safari, causing error? */
function hideVid(){
    debug.textContent += " hideVid() triggered!";

    vid.style.display = "none";

    // Check if vid element exists: DOESN'T WORK?
/*     if (typeof(vid) != 'undefined' && element != null)
    {
        vid.style.display = "none";
    } */
}

/* Sigh... */
function handleVidError(){
    debug.textContent += " handleVidError() triggered!";

    //  Hopefully, it'll work?
    img.style.display = "block";

    vid.style.display = "none";

/*     if (typeof(vid) != 'undefined' && element != null)
    {
        vid.style.display = "none";
    } */
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

/* 
$(window).on("load", function(){

    debug.textContent = "Document ready!";

    // test
/*     showImage();
    hideVid(); */

    // Test for Mac:
    var isMac = false;
    isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0; // Obsolete!

    var os = "";
    if (navigator.appVersion.indexOf("Mac") != -1) os = "MacOS"; // Obsolete!

    if(isMac || os == "MacOS"){
        debug.textContent += " On a Mac?";
        handleVidError();
    }

    // Tests for Safari browser are found on: 
    // https://stackoverflow.com/questions/7944460/detect-safari-browser

    // Initial test that is supposed to work only for Safari on macOS:
    var isItSafari = window.safari !== undefined;
    if (isItSafari){
        /* console.log("Safari, yeah!"); */
        debug.textContent = "Initially, it is Safari.";
        /* showImage();
        hideVid(); */
        handleVidError();
    }

    // Check browser...
    var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;
    
    if(isSafari){
        debug.textContent = "You are browsing with Safari.";
        /* showImage();
        hideVid(); */
        handleVidError();
    } else {
        debug.textContent = "You are not using Safari.";
    }

    // For playing video when done loading.

    var video_jq = $('#vid');
    var video_node = video_jq.get(0);

    video_jq.on("canplaythrough", function(e){

    // var video_jq = $('#vid');
    // var video_node = video_jq.get(0);
    var video_node = vid.get(0);

    vid.on("canplaythrough", function(e){
        video_node.play(); // Video is downloaded, trigger playing
    });

    // All resources are ready, trigger video downloading
    video_node.load();
     

});

*/


/* var root = document.documentElement;
root.classList.add('has-js');
 */


var navOnly = document.getElementsByClassName("nav-only");
var menuButton = document.getElementById("mobile-menubutton");
var Main = document.getElementsByClassName("textbox");

menuButton.addEventListener("click", function(){

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
 
  window.onresize = function(){
    if(window.innerWidth > 960){
        navOnly[0].style.display = "block";
    } else {
        navOnly[0].style.display = "none";
        Main[0].style.opacity = "1";

    }
      
  }