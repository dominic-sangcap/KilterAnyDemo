// script.js
export function oldScript(varName) {
    varName.addEventListener('DOMContentLoaded', () => {
        const imageInput = varName.getElementById('image-input');
        const editableImage = varName.getElementById('editable-image');
        const brightnessInput = varName.getElementById('brightness');
        const contrastInput = varName.getElementById('contrast');
        const saturationInput = varName.getElementById('saturation');
        const blurInput = varName.getElementById('blur');
        const resetButton = varName.getElementById('reset-button');
        //teset
        const grayScaleInput = varName.getElementById('grayscale');
    
        // Function to apply filters
        const applyFilters = () => {
            const brightness = brightnessInput.value;
            const contrast = contrastInput.value;
            const saturation = saturationInput.value;
            const blur = blurInput.value;

            //try
            const grayscale = grayScaleInput.value;
    
            editableImage.style.filter = `
                brightness(${brightness}%)
                contrast(${contrast}%)
                saturate(${saturation}%)
                blur(${blur}px)

                grayscale(${grayscale}%)
            `;
        };
    
    
        // Event listeners for range inputs
        brightnessInput.addEventListener('input', applyFilters);
        contrastInput.addEventListener('input', applyFilters);
        saturationInput.addEventListener('input', applyFilters);
        blurInput.addEventListener('input', applyFilters);
        //try
        grayScaleInput.addEventListener('input', applyFilters);
    
        // Event listener for reset button
        resetButton.addEventListener('click', () => {
            brightnessInput.value = 100;
            contrastInput.value = 100;
            saturationInput.value = 100;
            blurInput.value = 0;
            //try
            grayScaleInput.value = 0;
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
}

// testing Export a utility function
export function utilityFunction() {
    console.log('This is a utility function being executed.');
  
    //Example: Display the current date and time.
    const now = new Date();
    console.log(`Current date and time: ${now.toLocaleString()}`);
  }