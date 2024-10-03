// Array to store the image paths
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

// Start at the first image
let currentImageIndex = 0;

// Get the image element
const slideshowImage = document.getElementById('slideshow');

// Function to cycle through images
function cycleImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Increment and loop back to the first image
    slideshowImage.src = images[currentImageIndex];
}

// Add event listener to change the image on click
slideshowImage.addEventListener('click', cycleImage);
