/*
	UI ELEMENTS
*/
// Containers
var body = document.querySelector("body");
var appContainer = document.getElementById("app");
var loadSoundsContainer = document.getElementById("load-sounds-container");
var drumpadContainer = document.getElementById("drumpad-container");
var drumpadRows = drumpadContainer.children;

// Drumpads
var keyA = document.getElementById("key-a");
var keyS = document.getElementById("key-s");
var keyD = document.getElementById("key-d");
var keyF = document.getElementById("key-f");
var keyG = document.getElementById("key-g");
var keyH = document.getElementById("key-h");
var keyJ = document.getElementById("key-j");
var keyK = document.getElementById("key-k");
var keyL = document.getElementById("key-l");

// Buttons
var birdsButton = document.getElementById("button-birds");
var waterButton = document.getElementById("button-water");
var loadSoundsButton = document.getElementById("load-sounds-button");

// Class for applying style
var playingClass = " playing";

// Audio
var bamboo1 = new Audio("sounds/bamboo-1.mp3");
var bamboo2 = new Audio("sounds/bamboo-2.mp3");
var bamboo3 = new Audio("sounds/bamboo-3.mp3");
var bamboo4 = new Audio("sounds/bamboo-4.mp3");
var bamboo5 = new Audio("sounds/bamboo-5.mp3");
var bamboo6 = new Audio("sounds/bamboo-6.mp3");
var bamboo7 = new Audio("sounds/bamboo-7.mp3");
var bamboo8 = new Audio("sounds/bamboo-8.mp3");
var bamboo9 = new Audio("sounds/bamboo-9.mp3");

var birds = new Audio("sounds/birds.mp3");
var water = new Audio("sounds/water.mp3");
water.volume = 0.2;


/*
	INITIALIZATION FOR IOS
*/
(function initIOS() {

	if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
		appContainer.style.display = "none";
	}
	else {
		loadSoundsContainer.style.display = "none";		
	}
})();

/*
	EVENT INITIALIZATION
*/
// Add mouse handlers to drumpads
for (var i = 0; i < drumpadRows.length; i++) {

	for (var j = 0; j < drumpadRows[i].children.length; j++) {

		var drumpad = drumpadRows[i].children[j];

		(function attachMouseHandlers(i) {
			var keyCode = parseInt(drumpad.dataset.key, 10);
			// Play start
			drumpad.addEventListener("mousedown", function(){toggleKey(keyCode, true)}, false);
			
			// Play end
			drumpad.addEventListener("mouseup", function(){toggleKey(keyCode, false)});
		})(i);
	}
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

// Click handers for background audio buttons
birdsButton.addEventListener("click", toggleBirds, false);
waterButton.addEventListener("click", toggleWater, false);
loadSoundsButton.addEventListener("click", loadSounds, false);

// Audio events
birds.addEventListener("ended", endBirds, false);
water.addEventListener("ended", endWater, false);


/*
	HELPER FUNCTIONS
*/
// Logic for play handling
function toggleKey(keyCode, play) {

	switch (keyCode) {
		case 65:
			if (play) {
				addPlayingClass(keyA);
				playSound(bamboo1);
			}
			else {
				removePlayingClass(keyA);
			}
			break;

		case 83:
			if (play) {
				addPlayingClass(keyS);
				playSound(bamboo2);
			}
			else {
				removePlayingClass(keyS);
			}
			break;
		
		case 68:
			if (play) {
				addPlayingClass(keyD);
				playSound(bamboo3);
			}
			else {
				removePlayingClass(keyD);
			}
			break;
		
		case 70:
			if (play) {
				addPlayingClass(keyF);
				playSound(bamboo4);
			}
			else {
				removePlayingClass(keyF);
			}
			break;
		
		case 71:
			if (play) {
				addPlayingClass(keyG);
				playSound(bamboo5);
			}
			else {
				removePlayingClass(keyG);
			}
			break;
		
		case 72:
			if (play) {
				addPlayingClass(keyH);
				playSound(bamboo6);
			}
			else {
				removePlayingClass(keyH);
			}
			break;
		
		case 74:
			if (play) {
				addPlayingClass(keyJ);
				playSound(bamboo7);
			}
			else {
				removePlayingClass(keyJ);
			}
			break;
		
		case 75:
			if (play) {
				addPlayingClass(keyK);
				playSound(bamboo8);
			}
			else {
				removePlayingClass(keyK);
			}
			break;

		case 76:
			if (play) {
				addPlayingClass(keyL);
				playSound(bamboo9);
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

function toggleBirds() {
	
	if (!birds.paused) {
		birdsButton.innerHTML = "Play Birds";

		birds.pause();
		birds.currentTime = 0;
	}
	else {
		birdsButton.innerHTML = "Stop Birds";
		birds.play();
	}
}

function toggleWater() {
	
	if (!water.paused) {
		waterButton.innerHTML = "Play Water";

		water.pause();
		water.currentTime = 0;
	}
	else {
		waterButton.innerHTML = "Stop Water";
		water.play();
	}
}

function endBirds() {

	birdsButton.innerHTML = "Play Birds";
}

function endWater() {

	waterButton.innerHTML = "Play Water"
}

function loadSounds() {

	bamboo1.load();
	bamboo2.load();
	bamboo3.load();
	bamboo4.load();
	bamboo5.load();
	bamboo6.load();
	bamboo7.load();
	bamboo8.load();
	bamboo9.load();

	appContainer.style.display = "initial";
	loadSoundsContainer.style.display = "none";
}