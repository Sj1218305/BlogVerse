var overlay= document.getElementById('overlay');
var vid= document.getElementById('v');
vid.ontimeupdate = function() {myFunction()};

function myFunction() {
  // Display the current position of the video in a p element with id="demo"
   
   if(vid.currentTime < 3) {
    overlay.classList.add("animate__flipOutY");
   }else{
   
   }
}