//grayscale.js
document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('image-input');
    const photo = document.getElementById('photo');
    const grayscaleButton = document.getElementById('grayscale-button');

    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                photo.src = event.target.result;
                photo.classList.remove('grayscale'); // Remove grayscale when a new image is loaded
            };
            reader.readAsDataURL(file);
        }
    });


    grayscaleButton.addEventListener('click', () => {
        photo.classList.toggle('grayscale'); // Toggle grayscale class on the image
    });
});