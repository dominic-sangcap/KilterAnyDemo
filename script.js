// script.js
document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('image-input');
    const editableImage = document.getElementById('editable-image');
    const brightnessInput = document.getElementById('brightness');
    const contrastInput = document.getElementById('contrast');
    const saturationInput = document.getElementById('saturation');
    const blurInput = document.getElementById('blur');
    const resetButton = document.getElementById('reset-button');

    // Function to apply filters
    const applyFilters = () => {
        const brightness = brightnessInput.value;
        const contrast = contrastInput.value;
        const saturation = saturationInput.value;
        const blur = blurInput.value;

        editableImage.style.filter = `
            brightness(${brightness}%)
            contrast(${contrast}%)
            saturate(${saturation}%)
            blur(${blur}px)
        `;
    };


    // Event listeners for range inputs
    brightnessInput.addEventListener('input', applyFilters);
    contrastInput.addEventListener('input', applyFilters);
    saturationInput.addEventListener('input', applyFilters);
    blurInput.addEventListener('input', applyFilters);

    // Event listener for reset button
    resetButton.addEventListener('click', () => {
        brightnessInput.value = 100;
        contrastInput.value = 100;
        saturationInput.value = 100;
        blurInput.value = 0;
        applyFilters();
    });

    // Event listener for image upload
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                editableImage.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Set a default image for initialization
    editableImage.src = "placeholder.jpg";
    applyFilters(); // Apply default values on load
});