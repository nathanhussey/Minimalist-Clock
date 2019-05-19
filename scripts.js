let displayTime = document.querySelector("#clock")

let clockIsUpdating;

function currentClockTime() {
	let currentTime = new Date();
	let	currentSecond = currentTime.getSeconds();
	let	currentMinute = currentTime.getMinutes();
	let	currentHour = currentTime.getHours();
	if (currentMinute < 10){
		currentMinute = "0" + currentMinute;
	}
	if (currentSecond < 10){
		currentSecond = "0" + currentSecond;
	}

	printTime =` ${currentHour} : ${currentMinute} : ${currentSecond}`;
	displayTime.innerText = printTime

};
	
setInterval(currentClockTime, 1000);


