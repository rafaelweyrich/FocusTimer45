import './toggle-mode.js'
import * as FocusTimer from "./FocusTimer/index.js"

FocusTimer.start(45, 0)

function playAudio(audioId) {
  var audioElements = document.getElementsByTagName('audio');

  for (var i = 0; i < audioElements.length; i++) {
    var audio = audioElements[i];
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  var audio = document.getElementById(audioId);
  audio.currentTime = 0; 
  audio.play();
}

document.addEventListener("DOMContentLoaded", function() {
  var forestButton = document.getElementById("forest-button");
  var rainButton = document.getElementById("rain-button");
  var cafeButton = document.getElementById("cafe-button");
  var fireplaceButton = document.getElementById("fireplace-button");

  forestButton.addEventListener("click", function() {
    playAudio("audio-forest");
  });

  rainButton.addEventListener("click", function() {
    playAudio("audio-rain");
  });

  cafeButton.addEventListener("click", function() {
    playAudio("audio-cafe");
  });

  fireplaceButton.addEventListener("click", function() {
    playAudio("audio-fireplace");
  });
});


const muteOnButton = document.getElementById('mute-on-button');
const muteOffButton = document.getElementById('mute-off-button');
const audioElements = document.querySelectorAll('audio');

let isMuted = false;

muteOnButton.addEventListener('click', toggleMute);
muteOffButton.addEventListener('click', toggleMute);

function toggleMute() {
    isMuted = !isMuted;
    if (isMuted) {
        muteOnButton.style.display = 'none';
        muteOffButton.style.display = 'inline-block';
        audioElements.forEach(audio => audio.muted = true);
    } else {
        muteOnButton.style.display = 'inline-block';
        muteOffButton.style.display = 'none';
        audioElements.forEach(audio => audio.muted = false);
    }
}

const minutesElement = document.getElementById("minutes");

document.getElementById("increment-minute").addEventListener("click", function() {
    incrementMinute();
});

document.getElementById("decrement-minute").addEventListener("click", function() {
    decrementMinute();
});

function incrementMinute() {
    let currentMinutes = parseInt(minutesElement.innerText, 10);
    currentMinutes++;
    minutesElement.innerText = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
}

function decrementMinute() {
    let currentMinutes = parseInt(minutesElement.innerText, 10);
    if (currentMinutes > 1) {
        currentMinutes--;
        minutesElement.innerText = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
    }
}