// Array of background images
const backgroundImages = [
    'images/image01.jpg',
    'images/image02.jpg',
    'images/image03.jpg',
    'images/image04.jpg',
    'images/image05.jpg'
];

// Get all the text boxes
const boxes = document.querySelectorAll('.text-box');

// Function to change the background image
function changeBackgroundImage(index) {
    document.body.style.backgroundImage = `url(${backgroundImages[index]})`;
}

// Check for IntersectionObserver support
if ('IntersectionObserver' in window) {
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the box is visible
    };

    function intersectionCallback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(boxes).indexOf(entry.target);
                changeBackgroundImage(index);
            }
        });
    }

    const observer = new IntersectionObserver(intersectionCallback, observerOptions);

    boxes.forEach(box => {
        observer.observe(box);
    });
} else {
    // Fallback for browsers that do not support IntersectionObserver
    document.addEventListener('scroll', function() {
        boxes.forEach((box, index) => {
            const boxRect = box.getBoundingClientRect();
            if (boxRect.top < window.innerHeight && boxRect.bottom > 0) {
                changeBackgroundImage(index);
            }
        });
    });
}

// Initial background setup
changeBackgroundImage(0); // Set initial background image
