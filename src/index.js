// src/index.js
document.addEventListener("DOMContentLoaded", function(event) {
  const element = document.createElement('h1')
  element.innerHTML = "TEST: \"This is our fucking city\" -- David Ortiz"
  document.body.appendChild(element)
})

/*
const date1 = new Date('04/20/2020');
const date2 = new Date();

const timeDiff = Math.abs(date2 - date1);
console.log(timeDiff);

function msToTime(duration) {
	let ms = duration % 1000; //retrieve milliseconds
	duration = (duration - ms) / 1000; //convert duration to seconds

	let secs = duration % 60; //retrieve seconds
	duration = (duration - secs) / 60; //convert duration to minutes

	let mins = duration % 60; //retrieve minutes
	duration = (duration - mins) / 60; //convert duration to hours

	let hrs = duration % 24; //retrieve hours
	let days = (duration - hrs) / 24; //retrive days

	console.log(`Time elapsed is ${days}:${hrs}:${mins}:${secs}.${ms}`)
}
*/