const inputText = document.getElementById('inputText');
const output = document.getElementById('output');
const submitButton = document.getElementById('submitButton');

// Escucha el evento click del botón
submitButton.addEventListener('click', function() {
    const newText = document.createElement('p'); // Crea un nuevo elemento <p>
    newText.textContent = inputText.value; // Asigna el texto al nuevo elemento
    output.appendChild(newText); // Añade el nuevo párrafo al div de salida
});
