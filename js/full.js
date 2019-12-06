function requestFullscreen() {
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if (document.body.mozRequestFullScreen) {
    document.body.mozRequestFullScreen();
  } else if (document.body.webkitRequestFullscreen) {
    document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  } else if (document.body.msRequestFullscreen) {
    document.body.msRequestFullscreen();
  }
   $('#fs-btn').remove();
   $('#start0').remove();
   fsss = 1;
}
function removeFullscreen() {
	if (fsss == 1){
	if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if (document.body.mozRequestFullScreen) {
    document.body.mozRequestFullScreen();
  } else if (document.body.webkitRequestFullscreen) {
    document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  } else if (document.body.msRequestFullscreen) {
    document.body.msRequestFullscreen();
  }
  fsss=0;
} else {
if (document.exitFullscreen) {
    document.exitFullscreen();
} else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
} else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
 }
 fsss=1;
 }
}
var fsss = 0;
var button = document.getElementById("fs-btn");
var button1 = document.getElementById("fs-btn1");
button.addEventListener("click", requestFullscreen);
button1.addEventListener("click", removeFullscreen);

function touchEvent(e) {
  if (e.target == button) return;
  e.preventDefault();
  e.stopPropagation();
  return false;
}

var target = document.getElementsByTagName('canvas')[0];
var target = document.body;
var target = window;

target.addEventListener("touchstart", touchEvent, {capture: true, passive: false});
target.addEventListener("touchmove", touchEvent, {capture: true, passive: false});
target.addEventListener("touchend", touchEvent, {capture: true, passive: false});
target.addEventListener("touchcancel", touchEvent, {capture: true, passive: false});
