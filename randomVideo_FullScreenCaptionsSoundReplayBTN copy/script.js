// JavaScript Document

const videoPart1 = [
  { src: "videos/clip01.mp4",  caption: "First line of haiku" },
  { src: "videos/clip01b.mp4", caption: "First line of haiku" },
  { src: "videos/clip02.mp4",  caption: "First line of haiku" },
  { src: "videos/clip03.mp4",  caption: "First line of haiku" },
  { src: "videos/clip04.mp4",  caption: "Alternative line of haiku" }
];

const videoPart2 = [
  { src: "videos/clip05.mp4", caption: "Middle passage" },
  { src: "videos/clip06.mp4", caption: "Transition build" },
  { src: "videos/clip07.mp4", caption: "Development section" },
  { src: "videos/clip08.mp4", caption: "Expansion" },
  { src: "videos/clip09.mp4", caption: "Bridge between ideas" }
];

const videoPart3 = [
  { src: "videos/clip10.mp4",        caption: "Closing movement" },
  { src: "videos/clip11_face.mp4",   caption: "Human ending A" },
  { src: "videos/clip12_face.mp4",   caption: "Human ending B" },
  { src: "videos/clip13_face.mp4",   caption: "Human ending C" },
  { src: "videos/clip14_face.mp4",   caption: "Resolution" },
  { src: "videos/clip15_face.mp4",   caption: "Final gesture" },
  { src: "videos/clip16_face.mp4",   caption: "Last look" },
  { src: "videos/clip17_face.mp4",   caption: "Lingering glance" },
  { src: "videos/clip18_face.mp4",   caption: "Drifting away" },
  { src: "videos/clip20_random.mp4", caption: "Unexpected ending" }
];

const musicTracks = [
  "sounds/music01.mp3",
  "sounds/music02.mp3",
  "sounds/music03.mp3"
];


const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); 
const bgMusic = document.getElementById("bgMusic");
const replayBtn    = document.getElementById("replayBtn");

function picker(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log("Picked:", array[randomIndex]);
  return array[randomIndex];	
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {

  titleOverlay.classList.add("playing"); // NEW	
  player.classList.add("fullscreen");
  replayBtn.style.display = "none";	

// START MUSIC
  if (bgMusic) {
    bgMusic.src = picker(musicTracks); // random music pick
    bgMusic.currentTime = 0;
    bgMusic.volume = 1;
    bgMusic.play().catch(err => {
      console.warn("Music play interrupted:", err);
    });
  }
  
  playlist = [
    picker(videoPart1),
    picker(videoPart2),
    picker(videoPart3), 
  ];
	
  currentIndex = 0;
  playCurrent();		
}

function playCurrent() {
  const current = playlist[currentIndex]; // { src: "...", caption: "..." }
  titleText.textContent = current.caption;

  player.src = current.src;
  player.load();
  player.play().catch(err => {
    console.warn("Play interrupted (autoplay policy?):", err);
  });
}

function fadeOutMusic() {
  if (!bgMusic) return;

  const fadeDuration = 3000;          // total fade time in ms
  const steps = 30;                   // number of volume steps
  const stepTime = fadeDuration / steps;
  const volumeStep = bgMusic.volume / steps;

  const fadeInterval = setInterval(() => {
    // Reduce volume but never go below 0
    bgMusic.volume = Math.max(0, bgMusic.volume - volumeStep);

    if (bgMusic.volume <= 0.01) {
      bgMusic.volume = 0;
      bgMusic.pause();
      clearInterval(fadeInterval);
    }
  }, stepTime);
}

// Advance when a video ends
player.addEventListener("ended", () => {
  currentIndex++;
  if (currentIndex < playlist.length) {
    playCurrent();
  } else {
    console.log("All three parts finished.");
    fadeOutMusic();
    replayBtn.style.display = "block";	  
  }
});


