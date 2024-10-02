const inputText = document.getElementById('inputText');
const output = document.getElementById('output');
const submitButton = document.getElementById('submitButton');

// Escucha el evento click del botón
submitButton.addEventListener('click', function() {
    // Create a new paragraph element for the text
    const newText = document.createElement('p');
    newText.textContent = inputText.value;
    newText.style.border = "1px solid white";  
    newText.style.padding = "10px";  
    newText.style.marginTop = "10px";  
    newText.style.borderRadius = "20px";
    newText.style.marginLeft = "15px";
    newText.style.width = "890px";

    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = "img1.jpg";  // Replace with the actual image URL or path
    newImage.alt = "Comment Image";
    newImage.style.width = "50px";   // Customize size as needed
    newImage.style.height = "auto";   // Maintain aspect ratio
    newImage.style.borderRadius = "30px";

    // Create a "like" button
    const likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.style.marginBottom = '10px'; // Space between the text and like button
    likeButton.className = 'btn btn-outline-light'; // Bootstrap styling (optional)

    // Create a span to hold the like count
    const likeCount = document.createElement('span');
    likeCount.textContent = ' 0'; // Initial like count

    // Handle the "like" button click
    let count = 0; // Initialize the like count
    likeButton.addEventListener('click', function() {
        count++;
        likeCount.textContent = ' ' + count; // Update the like count
    });

    // Create a container for the text and image
    const container = document.createElement('div');
    container.style.display = "flex";  // Aligns text and image in a row
    container.style.alignItems = "center";  // Centers the image vertically with the text
    container.appendChild(newImage);
    container.appendChild(newText);

    // Create a new div for the like button and count below the container
    const likeContainer = document.createElement('div');
    likeContainer.style.marginLeft = "5px"; // Align it with the text
    likeContainer.appendChild(likeButton);
    likeContainer.appendChild(likeCount);

    // Append the container to the output div
    output.appendChild(container);
    output.appendChild(likeContainer);

    // Optionally, clear the input field after submitting
    inputText.value = '';
});
