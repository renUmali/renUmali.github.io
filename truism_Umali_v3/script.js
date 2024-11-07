// JavaScript to randomly switch between videos and remember playback positions
document.addEventListener("DOMContentLoaded", function () {
    // Reference to the video player and text box
    var videoPlayer = document.getElementById("videoPlayer");
    var textBox = document.getElementById("textBox");

    // Array of video sources
    var videoSources = ["videos/video01.mp4", "videos/video02.mp4", "videos/video03.mp4"];
    
    // Array to store playback time for each video, initialized to zero
    var videoTimes = [0, 0, 0];

    // Store the index of the currently playing video
    var currentVideoIndex = 0;

    // Track if sound has been enabled
    var soundEnabled = false;

    // Function to switch to a random video and save the current video time
    function switchToRandomVideo() {
        // Enable sound after the first click
        if (!soundEnabled) {
            videoPlayer.muted = false;
            soundEnabled = true;
        }

        // Save the current playback time of the currently playing video
        videoTimes[currentVideoIndex] = videoPlayer.currentTime;

        // Pick a random index that is different from the current one
        let newVideoIndex;
        do {
            newVideoIndex = Math.floor(Math.random() * videoSources.length);
        } while (newVideoIndex === currentVideoIndex); // Ensure it’s not the same video

        // Update the video source to the new random video
        currentVideoIndex = newVideoIndex;
        videoPlayer.src = videoSources[currentVideoIndex];
        
        // Load the video at the saved playback time and play
        videoPlayer.currentTime = videoTimes[currentVideoIndex];
        videoPlayer.play();
    }

    // Add click event listener to the text box to switch videos
    textBox.addEventListener("click", switchToRandomVideo);
});
