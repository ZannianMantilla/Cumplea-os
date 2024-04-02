document.getElementById('flame').addEventListener('click', flameToggle);

function flameToggle() {
    this.classList.toggle('lit');
    this.classList.toggle('out');
}

document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia al elemento de audio
    var audio = document.getElementById('audio');

    // Obtener referencia al elemento "cake"
    var cake = document.querySelector('.cake');

    // Agregar evento de clic al elemento "cake"
    cake.addEventListener('click', function () {
        // Reproducir el audio
        audio.play();
    });
});
