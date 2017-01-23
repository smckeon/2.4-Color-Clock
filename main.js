(function(){
'use strict';

var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

function colorClock() {
  var time = new Date();
  // ASK ABOUT MOD 12 ON MONDAY
  var hours = (time.getHours() % 12);
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  // ASK ABOUT .LENGTH
// if (minutes.length < 2) {
//   minutes = '0' + minutes;
// }

var clockStr = hours + ':' + minutes + ':' + seconds;
var hexColorStr = '#' + hours + minutes + seconds;

clock.textContent = clockStr;
hexColor.textContent = hexColorStr;


var timeLine = seconds / 60 * 100;
document.getElementById('bar').style.width = timeLine + "%";
document.body.style.backgroundColor = hexColorStr;

              // HOVER
    var hover = document.getElementById('clock');
      function isInside(node, target) {
        for (; node != null; node = node.parentNode)
          if (node == target) return true;
      }
      hover.addEventListener("mouseover", function(event) {
        if (!isInside(event.relatedTarget, hover))
          document.getElementById('clock').innerText = hexColorStr;
      });
      hover.addEventListener("mouseout", function(event) {
        if (!isInside(event.relatedTarget, hover))
          document.getElementById('clock').innerText = clockStr;
      });

      console.log('working as intended..');


}
      window.setInterval(colorClock, 1000)


}());
