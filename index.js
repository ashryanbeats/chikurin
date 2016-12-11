/*
	UI ELEMENTS
*/
// Containers
var body = document.querySelector("body");
var drumpadContainer = document.getElementById("drumpad-container");

// Drumpads
var drumpads = drumpadContainer.children;
var keyA = document.getElementById("key-a");
var keyS = document.getElementById("key-s");
var keyD = document.getElementById("key-d");
var keyF = document.getElementById("key-f");
var keyG = document.getElementById("key-g");
var keyH = document.getElementById("key-h");
var keyJ = document.getElementById("key-j");
var keyK = document.getElementById("key-k");
var keyL = document.getElementById("key-l");

// Class for applying style
var playingClass = " playing";

// Audio
var soundBoom = new Audio("sounds/boom.wav");
var soundClap = new Audio("sounds/clap.wav");
var soundHihat = new Audio("sounds/hihat.wav");
var soundKick = new Audio("sounds/kick.wav");
var soundOpenhat = new Audio("sounds/openhat.wav");
var soundRide = new Audio("sounds/ride.wav");
var soundSnare = new Audio("sounds/snare.wav");
var soundTink = new Audio("sounds/tink.wav");
var soundTom = new Audio("sounds/tom.wav");


/*
	EVENT INITIALIZATION
*/
// Add mouse handlers to drumpads
for (var i = 0; i < drumpads.length; i++) {

	(function attachMouseHandlers(i) {
		var keyCode = parseInt(drumpads[i].dataset.key, 10);
		drumpads[i].addEventListener("mousedown", function(){toggleKey(keyCode, true)}, false);
		drumpads[i].addEventListener("mouseup", function(){toggleKey(keyCode, false)});
	})(i);

}

// Trigger play on keyboard keydown
body.onkeydown = function(e) {

	if (!e.metaKey) {
		e.preventDefault();

		var keyCode = e.keyCode;
		toggleKey(keyCode, true);
	}
}

// Reset play status on keyboard keyup
body.onkeyup = function(e) {

	var keyCode = e.keyCode;
	toggleKey(keyCode, false);
}


/*
	HELPER FUNCTIONS
*/
// Logic for play handling
function toggleKey(keyCode, play) {

	switch (keyCode) {
		case 65:
			if (play) {
				addPlayingClass(keyA);
				playSound(soundBoom);
			}
			else {
				removePlayingClass(keyA);
			}
			break;

		case 83:
			if (play) {
				addPlayingClass(keyS);
				playSound(soundClap);
			}
			else {
				removePlayingClass(keyS);
			}
			break;
		
		case 68:
			if (play) {
				addPlayingClass(keyD);
				playSound(soundHihat);
			}
			else {
				removePlayingClass(keyD);
			}
			break;
		
		case 70:
			if (play) {
				addPlayingClass(keyF);
				playSound(soundKick);
			}
			else {
				removePlayingClass(keyF);
			}
			break;
		
		case 71:
			if (play) {
				addPlayingClass(keyG);
				playSound(soundOpenhat);
			}
			else {
				removePlayingClass(keyG);
			}
			break;
		
		case 72:
			if (play) {
				addPlayingClass(keyH);
				playSound(soundRide);
			}
			else {
				removePlayingClass(keyH);
			}
			break;
		
		case 74:
			if (play) {
				addPlayingClass(keyJ);
				playSound(soundSnare);
			}
			else {
				removePlayingClass(keyJ);
			}
			break;
		
		case 75:
			if (play) {
				addPlayingClass(keyK);
				playSound(soundTink);
			}
			else {
				removePlayingClass(keyK);
			}
			break;

		case 76:
			if (play) {
				addPlayingClass(keyL);
				playSound(soundTom);
			}
			else {
				removePlayingClass(keyL);
			}
			break;

		default:
			break;
	}
}

function addPlayingClass(key) {
	key.className += playingClass;
}

function removePlayingClass(key) {
	var classNames = key.className.split(" ");

	// Removes all instances of playingClass that may have been added on long key presses
	while (classNames.indexOf(playingClass.trim()) > 0) {
		key.className = key.className.replace(playingClass, "");
		classNames = key.className.split(" ");
	}
}

function playSound(sound) {
	if (!sound.paused) sound.pause();
	sound.currentTime = 0;
	sound.play();
}