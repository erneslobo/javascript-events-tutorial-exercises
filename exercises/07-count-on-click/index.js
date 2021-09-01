//This is a global variable
var counter = 0;

window.onload = function loadFunction()
{
	//here I set the screen to the initial value when the website is fully loaded.
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
	let button = document.createElement('button');
	button.innerHTML="Decrease";
	document.body.appendChild(button);
	button.addEventListener("click", decreaseCounter);
}

//called when the user clicks
window.increaseCounter = function increaseCounter()
{
	//increase the global counter in one
	counter++;
	//update the screen with the new value
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
}

//called when the user clicks
window.decreaseCounter = function decreaseCounter()
{
	//increase the global counter in one
	counter--;
	//update the screen with the new value
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
}


