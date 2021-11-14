
var video = document.getElementsByName("vid");

var debug = document.getElementById("debug");

/* $(document).ready(function() {
    console.log("Ready!");

    debug.textContent = "Document ready!";

    
}); */

// We use window.onload instead of document.ready because the latter is triggered before all images are downloaded
$(window).on("load", function(){

    debug.textContent = "Document ready!";

    var video_jq = $('#vid')
    var video_node = video_jq.get(0);

    video_jq.on("canplaythrough", function(e){

        // Video is downloaded, trigger playing
        video_node.play();

    });

    // All resources are ready, trigger video downloading
    video_node.load();

});


var root = document.documentElement;
root.classList.add('has-js');

function showMenu() {
    var navBar = document.getElementsByClassName("nav-only");

    if(navBar[0].classList.contains("mobile-nav-on")){

        navBar[0].classList.toggle("mobile-nav-off");

    } else 
    {    
        navBar[0].classList.toggle("mobile-nav-on");
    }

}