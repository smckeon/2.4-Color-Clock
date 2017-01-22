(function(){
	// “use strict”;

function updateTime() {
  var time = new Date();
  var seconds = time.getSeconds();
  var secondsContent = document.querySelector(".elapsed-time .seconds");
  secondsContent.textContent = seconds;

  var minutes = time.getMinutes();
  var minutesContent = document.querySelector(".elapsed-time .minutes");
  minutesContent.textContent = minutes;

  var hours = time.getHours();
  var hoursContent = document.querySelector(".elapsed-time .hours");
  hoursContent.textContent = hours;











  console.log('You finally did it!')

}

window.setInterval(updateTime, 1000)

}());
