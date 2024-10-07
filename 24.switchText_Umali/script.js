// Array to store sentences
const sentences = [
    "The cat is ready to play ball!",
    "This is a Topps collectible card!",
    "Strike three, you're out!",
    "A home run hit by the cat!",
    "Baseball cats are legends!"
];

// Start at the first sentence
let currentSentenceIndex = 0;

// Get the text element
const displayText = document.getElementById('display-text');

// Get the image element
const fullScreenImage = document.getElementById('full-screen-image');

// Function to change the text
function changeText() {
    // Update the text to the next sentence
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    displayText.textContent = sentences[currentSentenceIndex];
}

// Add event listener to change the text on image click
fullScreenImage.addEventListener('click', changeText);
