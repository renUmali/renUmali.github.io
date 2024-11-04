// JavaScript to toggle videos and remember playback positions
document.addEventListener("DOMContentLoaded", function () {
    // Select the video element and the text box
    var videoPlayer = document.getElementById("videoPlayer");
    var textBox = document.getElementById("textBox");

    // Array of video sources for toggling
    var videoSources = ["videos/video01.mp4", "videos/video02.mp4"];
    
    // Current video index, starting with the first video
    var currentVideoIndex = 0;
    
    // Array to store the playback time for each video
    var videoTimes = [0, 0];

    // Function to toggle between the two videos
    function toggleVideo() {
        // Save the current playback time of the active video
        videoTimes[currentVideoIndex] = videoPlayer.currentTime;
        
        // Toggle to the other video (0 to 1, or 1 to 0)
        currentVideoIndex = 1 - currentVideoIndex;
        
        // Set the new video's source and load it
        videoPlayer.src = videoSources[currentVideoIndex];
        videoPlayer.load();

        // Restore the saved playback time for the new video
        videoPlayer.currentTime = videoTimes[currentVideoIndex];
        
        // Play the new video from the saved time
        videoPlayer.play();
    }

    // Add a click event to the text box to switch videos
    textBox.addEventListener("click", toggleVideo);
});
