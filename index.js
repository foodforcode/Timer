const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const circumference = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', circumference);

let duration = durationInput.value 
 
durationInput.addEventListener('change', () => {
  duration = durationInput.value
})

const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart() {
	},
	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', 
			circumference * timeRemaining / duration - circumference
		);
	},
	onComplete(totalDuration) {
		circle.setAttribute('stroke-dashoffset', totalDuration);
		circle.setAttribute('stroke', '#f54242');
	}
});