//grayscale.js
export function grayscaleCall(varName) {
    varName.addEventListener('DOMContentLoaded', () => {
        const imageInput = varName.getElementById('image-input');
        const photo = varName.getElementById('photo');
        const grayscaleButton = varName.getElementById('grayscale-button');
    
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
}

//maybe, can just add to others from previous code
export function testGrayscale(docVar) {
    docVar.addEventListener('DOMContentLoaded', () => {
        const imageInput = docVar.getElementById('image-input');
        const grayScaleInput = docVar.getElementById('grayscale');
        const editableImage = docVar.getElementById('editable-image');
        const gsResetButton = docVar.getElementById('reset-button-gs');

        const applyFilters = () => {
            const grayscale = grayScaleInput.value;

            editableImage.style.filter = `
                grayscale(${grayscale}%)
            `;
        }

        grayScaleInput.addEventListener('input', applyFilters);

        gsResetButton.addEventListener('click', () => {
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