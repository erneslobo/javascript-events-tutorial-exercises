window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	document.getElementById("theGreen").addEventListener("click", greenButtonAlert)
};

//the listener function here

function greenButtonAlert (){
	alert("woohoo!");
}
