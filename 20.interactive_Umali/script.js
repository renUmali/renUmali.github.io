document.getElementById('cat-image').addEventListener('click', function() {
    const textBox = document.getElementById('text-box');
    if (textBox.classList.contains('hidden')) {
        textBox.classList.remove('hidden');
        textBox.style.display = 'block';
    } else {
        textBox.classList.add('hidden');
        textBox.style.display = 'none';
    }
});
// JavaScript Document