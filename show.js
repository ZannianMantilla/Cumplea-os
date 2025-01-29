const audios = [
    new Audio('audio1.wav'),
    new Audio('audio2.wav'),
    new Audio('audio3.wav'),
    new Audio('audio4.wav'),
    new Audio('audio5.wav'),
    new Audio('audio6.wav')
];

const personajes = [
    {name: 'Mordecai', profilePic: 'mord.jpg'},
    {name: 'Rigby', profilePic: 'rig.jpg'},
    {name: 'Mordecai', profilePic: 'mord.jpg'},
    {name: 'Rigby', profilePic: 'rig.jpg'},
    {name: 'Mordecai', profilePic: 'mord.jpg'},
    {name: 'Benson', profilePic: 'muchacho.jpg'}
];

const mensajes = [
    "Mapache mapache no me lo vas a creer",  // Audio 1 - Mordecai
    "Que pasa mordo",                       // Audio 2 - Rigby
    "Ya es la fecha especial hermano",      // Audio 3 - Mordecai
    "Es el día de volverte rubiocai?",      // Audio 4 - Rigby
    "Mejor cállate mapache, y no es eso, hoy es el cumple de él", // Audio 5 - Mordecai
    "¿Cómo tan muchacho? feliz cumpleaños william, ay si." // Audio 6 - Rigby
];

const chatBox = document.getElementById('chat-box');
const continueContainer = document.getElementById('continue-container');
let currentAudio = 0;

audios.forEach((audio, index) => {
    audio.onended = () => {
        if (index < audios.length - 1) {
            currentAudio++;
            playAudio(currentAudio);
        } else {
            showContinueButton();  // Mostrar el botón de continuar cuando termine el último audio
        }
    };
});

function playAudio(index) {
    const audio = audios[index];
    const personaje = personajes[index];

    // Crear mensaje con el personaje correspondiente
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'received');
    
    const header = document.createElement('div');
    header.classList.add('message-header');
    
    const profilePic = document.createElement('img');
    profilePic.src = personaje.profilePic;
    profilePic.alt = personaje.name;
    profilePic.classList.add('profile-pic');
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = personaje.name;
    
    header.appendChild(profilePic);
    header.appendChild(nameSpan);

    const textP = document.createElement('p');
    textP.textContent = mensajes[index]; // Usamos el mensaje correspondiente para cada audio
    
    messageDiv.appendChild(header);
    messageDiv.appendChild(textP);
    
    chatBox.appendChild(messageDiv);
    
    // Reproducir el siguiente audio
    audio.play();
}

// Función para mostrar el botón de continuar
function showContinueButton() {
    continueContainer.style.display = 'block'; // Mostrar el contenedor del botón
}

// Redirigir a otro HTML
function redirect() {
    window.location.href = 'carta2.html'; // Cambia 'otroArchivo.html' por la URL del archivo al que quieras redirigir
}

// Iniciar con el primer audio
playAudio(currentAudio);
