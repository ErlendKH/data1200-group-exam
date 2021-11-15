
var debug = document.getElementById("debug");

var vid = document.getElementById("vid");
var img = document.getElementById("fallback-img");

function showImage(){
    debug.textContent += " showImage() triggered!";
    img.style.display = "block";
}

function hideVid(){
    debug.textContent += " hideVid() triggered!";
    vid.style.display = "none";
}

/* Sigh... */
function handleVidError(){
    debug.textContent += " handleVidError() triggered!";

    img.style.display = "block";
    vid.style.display = "none";
}

/* $(document).ready(function() {
    console.log("Ready!");
    debug.textContent = "Document ready!";
}); */

// We use window.onload instead of document.ready because the latter is triggered before all images are downloaded
$(window).on("load", function(){

    debug.textContent = "Document ready!";

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
        handleVidError();
    }

    // Check browser...
    var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;
    
    if(isSafari){
        debug.textContent = "You are browsing with Safari.";
        handleVidError();
    } else {
        debug.textContent = "You are not using Safari.";
    }

    // For playing video when done loading.
    // Found on Stack Overflow:
    // https://stackoverflow.com/questions/54539689/load-video-only-when-document-is-ready-play-it-when-loaded

    var video_node = vid.get(0);

    vid.on("canplaythrough", function(e){
        video_node.play(); // Video is downloaded, trigger playing
    });

    video_node.load(); // All resources are ready, trigger video downloading

});

/* 
Menu Button
 */

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