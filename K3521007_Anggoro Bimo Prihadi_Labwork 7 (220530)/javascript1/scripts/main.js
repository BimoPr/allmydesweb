var myImage = document.querySelector('img');

myImage.oneclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute ('src','images/firefox2.png');
	} else {
		myImage.setAttribute ('src','images/firefox-icon.png');
	}
}

var myHeading = document.querySelector('h1');
	myHeading.innerHTML = 'Hello world!';
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}