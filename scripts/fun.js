
/* Code exclusively for the FUN page. */

/* var debug = document.getElementById("debug"); */

var instructions = document.getElementById("instructions-button");
var interact = document.getElementById("interact-container");
var horizontal = document.getElementById("horizontal-prompt-container");

var vid = document.getElementById("vid");
var img = document.getElementById("fallback-img");

var div_16_9 = document.getElementById("div-16-9");
var book = document.getElementById("book");
var pen = document.getElementById("pen");
var smartphone = document.getElementById("smartphone");
var laptop = document.getElementById("laptop");
var coffee = document.getElementById("coffee");
var paper = document.getElementById("paper");

/* 
var sparticles_book = document.querySelector(".sparticles-book"); 
var sparticles_pen = document.querySelector(".sparticles-pen"); 
var sparticles_smartphone = document.querySelector(".sparticles-smartphone"); 
var sparticles_laptop = document.querySelector(".sparticles-laptop"); 
var sparticles_coffee = document.querySelector(".sparticles-coffee"); 
var sparticles_paper = document.querySelector(".sparticles-paper"); 
 */

var dismiss_button = document.getElementById("dismiss-button");
var dynamic_h2 = document.getElementById("dynamic-h2");
var dynamic_h3 = document.getElementById("dynamic-h3");
var dynamic_img = document.getElementById("dynamic-img");
var dynamic_quote0 = document.getElementById("dynamic-quote0");
var dynamic_quote1 = document.getElementById("dynamic-quote1");
var dynamic_quote2 = document.getElementById("dynamic-quote2");

function showImage(){
    debug.textContent += " showImage() triggered!";
    img.style.display = "block";
}

function hideVid(){
    debug.textContent += " hideVid() triggered!";
    vid.style.display = "none";
}

function handleVidError(){
    debug.textContent += " handleVidError() triggered!";

    img.style.display = "block";
    vid.style.display = "none";
}

/* 
$(document).ready(function() {

    // Particle effects from simeydotme at: https://github.com/simeydotme/sparticles

    // BOOK

    let sparticlesBook = new Sparticles( sparticles_book, {count: 25, speed: 5, shape: "random"});

    // Hover events?
    sparticles_book.addEventListener('mouseenter', e => {
        sparticlesBook.destroy();
        setTimeout(function() {
            sparticlesBook = new Sparticles( sparticles_book, {count: 200, speed: 10, shape: "random"});
        }, 50);
      });
      
      sparticles_book.addEventListener('mouseleave', e => {
        sparticlesBook.destroy();
        setTimeout(function() {
            sparticlesBook = new Sparticles( sparticles_book, {count: 25, speed: 5, shape: "random"});
        }, 50);
    });

    // PEN

    let sparticlesPen = new Sparticles( sparticles_pen, {count: 25, speed: 5, shape: "triangle"});

    sparticles_pen.addEventListener('mouseenter', e => {
        sparticlesPen.destroy();
        setTimeout(function() {
            sparticlesPen = new Sparticles( sparticles_pen, {count: 200, speed: 10, shape: "triangle"});
        }, 50);
      });
      
      sparticles_pen.addEventListener('mouseleave', e => {
        sparticlesPen.destroy();
        setTimeout(function() {
            sparticlesPen = new Sparticles( sparticles_pen, {count: 25, speed: 5, shape: "triangle"});
        }, 50);
    });

    // SMARTPHONE

    let sparticlesSmartphone = new Sparticles( sparticles_smartphone, {count: 25, speed: 5, shape: "circle"});

    sparticles_smartphone.addEventListener('mouseenter', e => {
        sparticlesSmartphone.destroy();
        setTimeout(function() {
            sparticlesSmartphone = new Sparticles( sparticles_smartphone, {count: 200, speed: 10, shape: "circle"});
        }, 50);
      });
      
      sparticles_smartphone.addEventListener('mouseleave', e => {
        sparticlesSmartphone.destroy();
        setTimeout(function() {
            sparticlesSmartphone = new Sparticles( sparticles_smartphone, {count: 25, speed: 5, shape: "circle"});
        }, 50);
    });

    // LAPTOP

    let sparticlesLaptop = new Sparticles( sparticles_laptop, {count: 100, speed: 5, shape: "diamond", color: "gold"});

    sparticles_laptop.addEventListener('mouseenter', e => {
        sparticlesLaptop.destroy();
        setTimeout(function() {
            sparticlesLaptop = new Sparticles( sparticles_laptop, {count: 500, speed: 10, shape: "diamond", color: "gold"});
        }, 50);
      });
      
      sparticles_laptop.addEventListener('mouseleave', e => {
        sparticlesLaptop.destroy();
        setTimeout(function() {
            sparticlesLaptop = new Sparticles( sparticles_laptop, {count: 100, speed: 5, shape: "diamond", color: "gold"});
        }, 50);
    });

    // COFFEE

    let sparticlesCoffee = new Sparticles( sparticles_coffee, {count: 25, speed: 5, shape: "random"});

    sparticles_coffee.addEventListener('mouseenter', e => {
        sparticlesCoffee.destroy();
        setTimeout(function() {
            sparticlesCoffee = new Sparticles( sparticles_coffee, {count: 200, speed: 10, shape: "random"});
        }, 50);
      });
      
      sparticles_coffee.addEventListener('mouseleave', e => {
        sparticlesCoffee.destroy();
        setTimeout(function() {
            sparticlesCoffee = new Sparticles( sparticles_coffee, {count: 25, speed: 5, shape: "random"});
        }, 50);
    });

    // PAPER

    let sparticlesPaper = new Sparticles( sparticles_paper, {count: 25, speed: 5, shape: "triangle"});

    sparticles_paper.addEventListener('mouseenter', e => {
        sparticlesPaper.destroy();
        setTimeout(function() {
            sparticlesPaper = new Sparticles( sparticles_paper, {count: 200, speed: 10, shape: "triangle"});
        }, 50);
      });
      
      sparticles_paper.addEventListener('mouseleave', e => {
        sparticlesPaper.destroy();
        setTimeout(function() {
            sparticlesPaper = new Sparticles( sparticles_paper, {count: 25, speed: 5, shape: "triangle"});
        }, 50);
    });

});
 */

/* 
// We use window.onload instead of document.ready because the latter is triggered before all images are downloaded
$(window).on("load", function(){

    // For playing video when done loading. Possibly needed for mobile?
    // Found on Stack Overflow:
    // https://stackoverflow.com/questions/54539689/load-video-only-when-document-is-ready-play-it-when-loaded

    var video_jq = $('#vid'); var video_node = video_jq.get(0);
    video_jq.on("canplaythrough", function(e){
        video_node.play(); // Video is downloaded, trigger playing
    });
    video_node.load(); // All resources are ready, trigger video downloading

});
 */

/* Fun - Clicks: Start */

var background = document.getElementById("popup-background");
var popup = document.getElementById("popup-box");

var debug = document.getElementById("debug");

dismiss_button.addEventListener('click', function() {
    hidePopup();
}, false);

/* BOOK */

book.addEventListener('click', function() {
    /* debug.textContent = "Book clicked!"; */

    dynamic_img.src = "/media/book-surreal.jpg";

    dynamic_h2.textContent = "A Journey Into A Strange World";

    dynamic_h3.textContent = "Erlend";
    dynamic_quote0.textContent = "Do something useful each day. Keep trying. Have a dream.";

    dynamic_quote1.textContent = 'The only impossible journey is the one you never begin. — Tony Robbins';
    dynamic_quote2.textContent = "When you cease to dream you cease to live. —Malcolm Forbes";

    showPopup();
}, false);

/* PEN */

pen.addEventListener('click', function() {
    /* debug.textContent = "Pen clicked!"; */

    dynamic_img.src = "/media/pen.jpg";

    dynamic_h2.textContent = "The Lead Character";

    dynamic_h3.textContent = "Patrick";
    dynamic_quote0.textContent = "Quote...";

    dynamic_quote1.textContent = "Many of life's failures are people who did not realize how close they were to success when they gave up. — Thomas A. Edison";
    dynamic_quote2.textContent = "The way to get started is to quit talking and begin doing. — Walt Disney";

    showPopup();
}, false);

/* SMARTPHONE */

smartphone.addEventListener('click', function() {
    /* debug.textContent = "Smartphone clicked!"; */

    dynamic_img.src = "/media/mobile-fall.jpg";

    dynamic_h2.textContent = "The Fall";

    dynamic_h3.textContent = "Marcin";
    dynamic_quote0.textContent = "Quote...";

    dynamic_quote1.textContent = 'The greatest glory in living lies not in never falling, but in rising every time we fall. — Nelson Mandela';
    dynamic_quote2.textContent = "Keep calm and carry on. — Winston Churchill";

    showPopup();
}, false);

/* LAPTOP */

laptop.addEventListener('click', function() {
    /* debug.textContent = "Laptop clicked!"; */

    dynamic_img.src = "/media/cookie-the-pom-laptop-unsplash.jpg";

    dynamic_h2.textContent = "That's Cute";

    dynamic_h3.textContent = "Pom";
    dynamic_quote0.textContent = "Woof!";

    dynamic_quote1.textContent = "You know you are on the road to success if you would do your job and not be paid for it. — Oprah Winfrey";
    dynamic_quote2.textContent = "Life is like a coin. You can spend it any way you wish, but you only spend it once. — Lillian Dickson";

    showPopup();
}, false);

/* COFFEE */

coffee.addEventListener('click', function() {
    /* debug.textContent = "Coffee clicked!"; */

    dynamic_img.src = "/media/woman-coffee.jpg";

    dynamic_h2.textContent = "A Great Day";

    dynamic_h3.textContent = "Majureka";
    dynamic_quote0.textContent = "Opportunities don't happen. You create them. — Chris Grosser";

    dynamic_quote1.textContent = "I failed my way to success. — Thomas Edison";
    dynamic_quote2.textContent = "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it. — Henry Ford";

    showPopup();
}, false);

/* PAPER */

paper.addEventListener('click', function() {
    /* debug.textContent = "Paper clicked!"; */

    dynamic_img.src = "/media/carolina-garcia-paper.jpg";

    dynamic_h2.textContent = "Beauty";

    dynamic_h3.textContent = "Gulluzar";
    dynamic_quote0.textContent = "Beauty is power; a smile is its sword. — John Ray";


    dynamic_quote1.textContent = "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. — Colin Powell";
    dynamic_quote2.textContent = "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better. — Jim Rohn";

    showPopup();
}, false);

background.addEventListener('click', function() {
    /* debug.textContent = "Background clicked!"; */

    hidePopup();
}, false);

popup.addEventListener('click', function() {
    /* debug.textContent = "Popup clicked!"; */
}, false);

function showPopup() {
    background.style.display = "block";
    popup.style.display = "block";
}

function hidePopup() {
    background.style.display = "none";
    popup.style.display = "none";
}

instructions.addEventListener('click', function() {

    if(interact.style.display == "" || interact.style.display == "none"){
        interact.style.display = "block";
    } else {
        interact.style.display = "none";
    }

}, false);

window.onresize = function(){
    if(window.innerWidth <= 601){
        horizontal.style.display = "block";
    } else {
        horizontal.style.display = "none";
    }
}

window.onload = function(){

    if(window.innerWidth <= 601){
        horizontal.style.display = "block";
    }
    
    vid.play();

};
