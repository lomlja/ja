// Function to copy image address to clipboard
function copyImageAddress() {
    // Get the image element with the "myImage" id
    var imageElement = document.getElementById('myImage');

    // Check if the image element exists
    if (imageElement) {
        // Get the image source (URL)
        var imageUrl = imageElement.src;

        // Create a temporary input element
        var tempInput = document.createElement('input');
        tempInput.value = imageUrl;

        // Append the input element to the body
        document.body.appendChild(tempInput);

        // Select the input content
        tempInput.select();

        // Copy the selected content to the clipboard
        document.execCommand('copy');

        // Remove the temporary input element
        document.body.removeChild(tempInput);

        // Optionally, you can provide feedback to the user
        alert('Image address copied to clipboard: ' + imageUrl);
    }
}

// Attach the click event listener to the image with the "myImage" id
var imageElement = document.getElementById('myImage');
if (imageElement) {
    imageElement.addEventListener('click', copyImageAddress);
}