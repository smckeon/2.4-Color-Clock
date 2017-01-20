(function(){
	// “use strict”;



function updateTime() {
  var time = new Date();
  var seconds = time.getSeconds();
  var secondsContent = document.querySelector(".elapsed-time .seconds")
  secondsContent.textContent = seconds;
}

window.setInterval(updateTime, 1000)


}());
