(function(){
'use strict';


                          // 1st Attempt
// function updateTime() {
//   var time = new Date();
//   var seconds = time.getSeconds();
//   var secondsContent = document.querySelector(".elapsed-time .seconds");
//   secondsContent.textContent = seconds;
//
//   var minutes = time.getMinutes();
//   var minutesContent = document.querySelector(".elapsed-time .minutes");
//   minutesContent.textContent = minutes;
//
//   var hours = time.getHours();
//   var hoursContent = document.querySelector(".elapsed-time .hours");
//   hoursContent.textContent = hours;
//
//   // document.getItemByClassName('txt')= .hours + ":" + .minutes + ":" + .seconds;
//
//   // hours = ((hours + 11) % 12 + 1);
//   // hours = (hours > 12)? hours -12 : hours;
//
//   console.log('You finally did it!')
//
// }
//
// window.setInterval(updateTime, 1000)


                    // 2nd Attempt

// var time = new Date();
//
// console.log(time.getHours() % 12);
// console.log(time.getMinutes());
// console.log(time.getSeconds());

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


console.log(document.body.style.backgroundColor);
}

window.setInterval(colorClock, 1000)

// clock.textContent = '';

}());
