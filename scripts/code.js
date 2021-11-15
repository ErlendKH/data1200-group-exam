
/* Elements: Start */

var debug = document.getElementById("debug");

var vid = document.getElementById("vid");
var img = document.getElementById("fallback-img");

var book = document.getElementById("book");
var pen = document.getElementById("pen");
var smartphone = document.getElementById("smartphone");
var laptop = document.getElementById("laptop");
var coffee = document.getElementById("coffee");
var paper = document.getElementById("paper");

/* Elements: End */

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

$(document).ready(function() {
/*     console.log("Ready!");
    debug.textContent = "Document ready!"; */

/*     let myElement = document.getElementById("book");
    let mySparticles = new Sparticles(myElement, { count: 100 }, 400); */

    /* let container = document.querySelector(".sparticles-container"); */
    /* let mySparticles = new Sparticles( container, { count: 25 }); */
    /* let mySparticles = new Sparticles( container, { count: 100 }, 400); */

    // Particle effects from simeydotme at: https://github.com/simeydotme/sparticles

    let container = document.querySelector(".sparticles-book"); 
    let sparticlesBook = new Sparticles( container, {count: 25, speed: 5, shape: "random"});

    container = document.querySelector(".sparticles-pen");
    let sparticlesPen = new Sparticles( container, {count: 25, speed: 5, shape: "triangle"});

    container = document.querySelector(".sparticles-smartphone");
    let sparticlesSmartphone = new Sparticles( container, {count: 25, speed: 5, shape: "circle"});

    container = document.querySelector(".sparticles-laptop");
    let sparticlesLaptop = new Sparticles( container, {count: 100, speed: 5, shape: "diamond", color: "gold"});

    container = document.querySelector(".sparticles-coffee");
    let sparticlesCoffee = new Sparticles( container, {count: 25, speed: 5, shape: "random"});

    container = document.querySelector(".sparticles-paper");
    let sparticlesPaper = new Sparticles( container, {count: 25, speed: 5, shape: "triangle"});

});

// We use window.onload instead of document.ready because the latter is triggered before all images are downloaded
$(window).on("load", function(){

    debug.textContent = "Ready!";

    // Test for Mac:
    var isMac = false;
    isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0; // Obsolete!

    var os = "";
    if (navigator.appVersion.indexOf("Mac") != -1) os = "MacOS"; // Obsolete!

    if(isMac || os == "MacOS"){
        debug.textContent += " On a Mac?";
        /* handleVidError(); */
    }

    // Tests for Safari browser are found on: 
    // https://stackoverflow.com/questions/7944460/detect-safari-browser

    // Initial test that is supposed to work only for Safari on macOS:
    var isItSafari = window.safari !== undefined;
    if (isItSafari){
        /* console.log("Safari, yeah!"); */
        debug.textContent = "Initially, it is Safari.";
        /* handleVidError(); */
    }

    // Check browser...
    var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;
    
    if(isSafari){
        debug.textContent = "You are browsing with Safari.";
        /* handleVidError(); */
    } else {
        debug.textContent = "You are not using Safari.";
    }

    /* Checking device/screen resolution (another thing to fix): */
    var width = screen.width;
    var height = screen.height;
    var ratio = width / height;
    var ratio_rounded = Math.round((ratio + Number.EPSILON) * 100) / 100;
    /* var ratio = Math.round((width / height) * 100) / 100; */

    debug.textContent += " w: " + width + ", h: " + height + ", ratio: " + ratio_rounded;
    // w: 1536, h: 864, ratio: 1.78 (this is 16:9, 1920x1080)

    // Ex. how to handle 1440x900 with ratio 1.6?
    // Book: Need more height
    // Laptop: Need more height
    // Pen: Need higher top
    // Smartphone: Need higher top
    // Coffee: Need higher top
    // Paper: Need higher top

    // If ratio is 1.78, no need to do anything.
    // However, if it is less:

    if (ratio_rounded < 1.78) {

        var ratio_diff = 1.6 / 1.78;
        var ratio_diff_percent = 1 - ratio_diff;
        // var ratio_diff_percent = (1.78 / ratio_rounded) - 1;

        // In the case of 1.6 / 1.78, ratio_diff_percent will be around 0,1012 / 10%.
        // debug.textContent += ", ratio_diff_percent: " + ratio_diff_percent;

        // Book: Height
        var get_book_height = parseFloat(window.getComputedStyle(book).height);
        var book_height_to_add = get_book_height * ratio_diff_percent;
        book.style.height = get_book_height + book_height_to_add + "px";

        // debug.textContent += ", get_book_height: " + get_book_height + ", book_height_to_add: " + book_height_to_add;

        // Laptop: Height
        var get_laptop_height = parseFloat(window.getComputedStyle(laptop).height);
        var laptop_height_to_add = get_laptop_height * ratio_diff_percent;
        laptop.style.height = get_laptop_height + laptop_height_to_add + "px";

        // Pen: Top
        var get_pen_top = parseFloat(window.getComputedStyle(pen).top);
        var pen_top_to_add = get_pen_top * ratio_diff_percent;
        pen.style.top = get_pen_top + pen_top_to_add + "px";

        // Smartphone: Top
        var get_smartphone_top = parseFloat(window.getComputedStyle(smartphone).top);
        var smartphone_top_to_add = get_smartphone_top * ratio_diff_percent;
        smartphone.style.top = get_smartphone_top + smartphone_top_to_add + "px"

        // Coffee: Top
        var get_coffee_top = parseFloat(window.getComputedStyle(coffee).top);
        var coffee_top_to_add = get_coffee_top * ratio_diff_percent;
        coffee.style.top = get_coffee_top + coffee_top_to_add + "px"

        // Paper: Top
        var get_paper_top = parseFloat(window.getComputedStyle(paper).top);
        var paper_top_to_add = get_paper_top * ratio_diff_percent;
        paper.style.top = get_paper_top + paper_top_to_add + "px"

    }

/*     
    // For playing video when done loading.
    // Found on Stack Overflow:
    // https://stackoverflow.com/questions/54539689/load-video-only-when-document-is-ready-play-it-when-loaded

    var video_jq = $('#vid');
    var video_node = video_jq.get(0);

    video_jq.on("canplaythrough", function(e){
        video_node.play(); // Video is downloaded, trigger playing
    });

    video_node.load(); // All resources are ready, trigger video downloading
 */

    /* TEST */
/*     let container = document.querySelector(".sparticles-container");
    let mySparticles = new Sparticles( container, { count: 100 }, 400); */

/*     let myElement = document.getElementById("book");
    let mySparticles = new Sparticles(myElement, { count: 100 }, 400); */

});

/* Fun - Clicks: Start */

var background = document.getElementById("popup-background");
var popup = document.getElementById("popup-box");

var debug = document.getElementById("debug");

book.addEventListener('click', function() {
    debug.textContent = "Book clicked!";

    showPopup();
}, false);

pen.addEventListener('click', function() {
    debug.textContent = "Pen clicked!";

    showPopup();
}, false);

smartphone.addEventListener('click', function() {
    debug.textContent = "Smartphone clicked!";

    showPopup();
}, false);

laptop.addEventListener('click', function() {
    debug.textContent = "Laptop clicked!";

    showPopup();
}, false);

coffee.addEventListener('click', function() {
    debug.textContent = "Coffee clicked!";

    showPopup();
}, false);

paper.addEventListener('click', function() {
    debug.textContent = "Paper clicked!";

    showPopup();
}, false);

background.addEventListener('click', function() {
    debug.textContent = "Background clicked!";

    hidePopup();
}, false);

popup.addEventListener('click', function() {
    debug.textContent = "Popup clicked!";
}, false);

function showPopup() {
    background.style.display = "block";
    popup.style.display = "block";
}

function hidePopup() {
    background.style.display = "None";
    popup.style.display = "None";
}

/* Fun - Clicks: End */

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