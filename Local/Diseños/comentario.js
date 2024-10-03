const inputText = document.getElementById('inputText');
const output = document.getElementById('output');
const submitButton = document.getElementById('submitButton');

// Escucha el evento click del botón
submitButton.addEventListener('click', function() {
    // Create a new paragraph element for the text
    const newText = document.createElement('p');
    newText.textContent = inputText.value;
    newText.style.border = "none";  
    newText.style.padding = "10px";  
    newText.style.marginTop = "10px";  
    newText.style.borderRadius = "10px";
    newText.style.marginLeft = "20px";
    newText.style.width = "90%";
    newText.style.background = "#340631";
    newText.style.textIndent = "10px";

    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = "multimedia/img1.jpg";  // Replace with the actual image URL or path
    newImage.alt = "Comment Image";
    newImage.style.width = "50px";   // Customize size as needed
    newImage.style.height = "auto";   // Maintain aspect ratio
    newImage.style.borderRadius = "30px";

    // Create a "like" button
    const likeButton = document.createElement('button');
    likeButton.textContent = 'Like 0';  // Button starts with "Like 0"
    likeButton.style.marginBottom = '10px'; // Space between the text and like button
    likeButton.className = 'btn btn-outline-light'; // Bootstrap styling (optional)
    likeButton.style.background = "#a6179d";
    likeButton.style.color = "#ffffff";
    likeButton.style.border = "none";

    // Handle the "like" button click (toggle logic)
    let liked = false; // Initial state is "not liked"
    likeButton.addEventListener('click', function() {
        liked = !liked; // Toggle the "liked" state
        likeButton.textContent = liked ? 'Like 1' : 'Like 0'; // Update the button text accordingly
    });

    // Create a container for the text and image
    const container = document.createElement('div');
    container.style.display = "flex";  // Aligns text and image in a row
    container.style.alignItems = "center";  // Centers the image vertically with the text
    container.appendChild(newImage);
    container.appendChild(newText);

    // Append the container and like button to the output div
    output.appendChild(container);
    output.appendChild(likeButton);

    // Optionally, clear the input field after submitting
    inputText.value = '';
});
