
var returnHome = document.getElementById("return-home");
var videoContainer = document.getElementById("video-container");
var funVideo = document.getElementById("fun-video");

funVideo.onmouseover = function(){mouseOver()};

function mouseOver() {
    returnHome.focus();
}

funVideo.onmouseover = function(){
    returnHome.focus();
}

/* videoContainer.addEventListener("mouseover", function( event ) {



    returnHome.focus();
}); */

