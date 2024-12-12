// JavaScript to control video and audio playback
document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    var videoPlayer = document.getElementById("videoPlayer");
    var audioPlayer = document.getElementById("audioPlayer");
    var playButton = document.getElementById("playButton");
    var toggleAudioButton = document.getElementById("toggleAudioButton");

    // Audio sources
    var audioSources = ["audio/audio01.mp3", "audio/audio02.mp3"];
    var currentAudioIndex = 0; // Start with the first audio
    var audioTimes = [0, 0]; // Store playback times for both audio files

    // Play video and audio when the play button is clicked
    playButton.addEventListener("click", function () {
        videoPlayer.play();
        audioPlayer.play();
    });

    // Toggle audio source and remember playback time
    toggleAudioButton.addEventListener("click", function () {
        // Save the current playback time of the current audio
        audioTimes[currentAudioIndex] = audioPlayer.currentTime;

        // Switch to the other audio
        currentAudioIndex = 1 - currentAudioIndex; // Toggle between 0 and 1
        audioPlayer.src = audioSources[currentAudioIndex];

        // Set the audio to the previously saved playback time
        audioPlayer.currentTime = audioTimes[currentAudioIndex];

        // Play the new audio
        audioPlayer.play();
    });
});
