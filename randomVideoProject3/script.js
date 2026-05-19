const threeBridges =[
	   {src: "videos/3B_Video1.mp4", caption:"Three Bridges Park - Milwaukee, WI"},
	   {src: "videos/3B_Video2.mp4", caption:"Three Bridges Park - Milwaukee, WI"},
	   {src: "videos/3B_Video3.mp4", caption:"Three Bridges Park - Milwaukee, WI"},
	   {src: "videos/3B_Video4.mp4", caption:"Three Bridges Park - Milwaukee, WI"},
	  ];

const eauClaire = [
	   {src: "videos/EC_Video1.mp4", caption:"Eau Claire, WI"},
	   {src: "videos/EC_Video2.mp4", caption:"Eau Claire, WI"},
	   {src: "videos/EC_Video3.mp4", caption:"Eau Claire, WI"},
	   {src: "videos/EC_Video4.mp4", caption:"Eau Claire, WI"},
	  ];

const MKE = [
	   {src: "videos/MKE_Video1.mp4", caption:"Milwaukee, WI"},
	   {src: "videos/MKE_Video2.mp4", caption:"Milwaukee, WI"},
	   {src: "videos/MKE_Video3.mp4", caption:"Milwaukee, WI"},
	   {src: "videos/MKE_Video4.mp4", caption:"Milwaukee, WI"}
	  ];

const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText");
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex]);
	return array[randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
	titleOverlay.classList.add("playing");
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";

	playlist = [
		picker(threeBridges),
		picker(eauClaire),
		picker(MKE),
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

// Advance when a video ends
player.addEventListener("ended", () => {
	currentIndex++;
	if (currentIndex < playlist.length) {
		playCurrent();
	} else {
		console.log("All three parts finished.");
		replayBtn.style.display = "block";

	}
});