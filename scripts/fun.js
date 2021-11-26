
// Code exclusively for the FUN page.

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

var dismiss_button = document.getElementById("dismiss-button");
var dynamic_h2 = document.getElementById("dynamic-h2");
var dynamic_h3 = document.getElementById("dynamic-h3");
var dynamic_img = document.getElementById("dynamic-img");
var dynamic_quote0 = document.getElementById("dynamic-quote0");
var dynamic_quote1 = document.getElementById("dynamic-quote1");
var dynamic_quote2 = document.getElementById("dynamic-quote2");


var background = document.getElementById("popup-background");
var popup = document.getElementById("popup-box");

dismiss_button.addEventListener('click', function() {
    hidePopup();
}, false);

// BOOK 

book.addEventListener('click', function() {

    dynamic_img.src = "/media/fun/book-surreal.jpg";

    dynamic_h2.textContent = "A Journey Into A Strange World";

    dynamic_h3.textContent = "The Book";
    dynamic_quote0.textContent = "It unveils our lives in print. Thoughts, feelings, plans, regrets, dreams. It lets the stranger in to a different world.";

    dynamic_quote1.textContent = 'The only impossible journey is the one you never begin. — Tony Robbins';
    dynamic_quote2.textContent = "When you cease to dream you cease to live. —Malcolm Forbes";

    showPopup();
}, false);

// PEN 

pen.addEventListener('click', function() {

    dynamic_img.src = "/media/fun/pen.jpg";

    dynamic_h2.textContent = "The Lead Character";

    dynamic_h3.textContent = "The Pen";
    dynamic_quote0.textContent = "The pen is the most important thing in the world. Without the pen, we wouldn't exist. — A wise man";

    dynamic_quote1.textContent = "Many of life's failures are people who did not realize how close they were to success when they gave up. — Thomas A. Edison";
    dynamic_quote2.textContent = "The way to get started is to quit talking and begin doing. — Walt Disney";

    showPopup();
}, false);

// SMARTPHONE 

smartphone.addEventListener('click', function() {

    dynamic_img.src = "/media/fun/mobile-fall.jpg";

    dynamic_h2.textContent = "Imagine";

    dynamic_h3.textContent = "The Smartphone";
    dynamic_quote0.textContent = "Let`s go invent tomorrow instead of worrying about what happend yesterday. — Steve Jobs";

    dynamic_quote1.textContent = "The greatest glory in living lies not in never falling, but in rising every time we fall. — Nelson Mandela";
    dynamic_quote2.textContent = "Keep calm and carry on. — Winston Churchill";

    showPopup();
}, false);

// LAPTOP 

laptop.addEventListener('click', function() {

    dynamic_img.src = "/media/fun/cookie-the-pom-laptop-unsplash.jpg";

    dynamic_h2.textContent = "That's Cute";

    dynamic_h3.textContent = "Pom";
    dynamic_quote0.textContent = "Woof!";

    dynamic_quote1.textContent = "You know you are on the road to success if you would do your job and not be paid for it. — Oprah Winfrey";
    dynamic_quote2.textContent = "Life is like a coin. You can spend it any way you wish, but you only spend it once. — Lillian Dickson";

    showPopup();
}, false);

// COFFEE 

coffee.addEventListener('click', function() {

    dynamic_img.src = "/media/fun/woman-coffee.jpg";

    dynamic_h2.textContent = "A Great Day";

    dynamic_h3.textContent = "Cup of Coffee";
    dynamic_quote0.textContent = "Life is like a cup of coffee. It`s all about how you make it. — Melli O'Brien";

    dynamic_quote1.textContent = "I failed my way to success. — Thomas Edison";
    dynamic_quote2.textContent = "Opportunities don't happen. You create them. — Chris Grosser";

    showPopup();
}, false);

// PAPER 

paper.addEventListener('click', function() {

    dynamic_img.src = "/media/fun/carolina-garcia-paper.jpg";

    dynamic_h2.textContent = "Beauty";

    dynamic_h3.textContent = "The Note";
    dynamic_quote0.textContent = "Beauty is power; a smile is its sword. — John Ray";


    dynamic_quote1.textContent = "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. — Colin Powell";
    dynamic_quote2.textContent = "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better. — Jim Rohn";

    showPopup();
}, false);

background.addEventListener('click', function() {
    hidePopup();
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

// Text recommending the user to switch to horizontal view on small devices. 
window.onresize = function(){
    if(window.innerWidth <= 601){
        horizontal.style.display = "block";
    } else {
        horizontal.style.display = "none";
    }
}

// Run once on load. 
window.onload = function(){

    if(window.innerWidth <= 601){
        horizontal.style.display = "block";
    }

    vid.play();

    // Fix for playing the video on Mac. 
    var vids = document.getElementsByTagName('video');
    vids.item(0).play();

};
