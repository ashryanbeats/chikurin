var body = document.querySelector('body');

var keyA = document.getElementById("key-a");
var keyS = document.getElementById("key-s");
var keyD = document.getElementById("key-d");
var keyF = document.getElementById("key-f");
var keyG = document.getElementById("key-g");
var keyH = document.getElementById("key-h");
var keyJ = document.getElementById("key-j");
var keyK = document.getElementById("key-k");
var keyL = document.getElementById("key-l");

var playingClass = " playing";

var soundBoom = new Audio("sounds/boom.wav");
var soundClap = new Audio("sounds/clap.wav");
var soundHihat = new Audio("sounds/hihat.wav");
var soundKick = new Audio("sounds/kick.wav");
var soundOpenhat = new Audio("sounds/openhat.wav");
var soundRide = new Audio("sounds/ride.wav");
var soundSnare = new Audio("sounds/snare.wav");
var soundTink = new Audio("sounds/tink.wav");
var soundTom = new Audio("sounds/tom.wav");

body.onkeydown = function(e) {

	if (!e.metaKey) {
		e.preventDefault();
	}

	var keyCode = e.keyCode;

	switch (keyCode) {
		case 65:
			addPlayingClass(keyA);
			playSound(soundBoom);
			break;

		case 83:
			addPlayingClass(keyS);
			playSound(soundClap);
			break;
		
		case 68:
			addPlayingClass(keyD);
			playSound(soundHihat);
			break;
		
		case 70:
			addPlayingClass(keyF);
			playSound(soundKick);
			break;
		
		case 71:
			addPlayingClass(keyG);
			playSound(soundOpenhat);
			break;
		
		case 72:
			addPlayingClass(keyH);
			playSound(soundRide);
			break;
		
		case 74:
			addPlayingClass(keyJ);
			playSound(soundSnare);
			break;
		
		case 75:
			addPlayingClass(keyK);
			playSound(soundTink);
			break;

		case 76:
			addPlayingClass(keyL);
			playSound(soundTom);
			break;

		default:
			break;
	}
}


body.onkeyup = function(e) {

	var keyCode = e.keyCode;

	switch (keyCode) {
		case 65:
			removePlayingClass(keyA);
			break;

		case 83:
			removePlayingClass(keyS);
			break;
		
		case 68:
			removePlayingClass(keyD);
			break;
		
		case 70:
			removePlayingClass(keyF);
			break;
		
		case 71:
			removePlayingClass(keyG);
			break;
		
		case 72:
			removePlayingClass(keyH);
			break;
		
		case 74:
			removePlayingClass(keyJ);
			break;
		
		case 75:
			removePlayingClass(keyK);
			break;

		case 76:
			removePlayingClass(keyL);
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