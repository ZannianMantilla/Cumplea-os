document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia al elemento de audio
    var audio = document.getElementById('audio');

    // Obtener referencia al elemento "cake"
    var cake = document.querySelector('.cake');

    // Agregar evento de clic al elemento "cake"
    cake.addEventListener('click', function () {
        // Reproducir el audio
        audio.play();

        // Lanzar lluvia de confeti con dispersión más natural y menos partículas
        const confettiInterval = setInterval(function () {
            confetti({
                particleCount: 90,          // Menos partículas por explosión
                spread: Math.random() * 90 + 60, // Ángulo de dispersión entre 60 y 150 grados para un efecto más suave
                origin: { x: 0.5, y: 0.5 }, // Origen en el centro de la pantalla
                scalar: Math.random() * 1 + 0.5, // Escala aleatoria para las partículas
                shapes: ['circle', 'square'], // Formas variadas para un efecto más natural
                colors: ['#ffcc00', '#ff69b4', '#32cd32', '#00bfff', '#ff6347'] // Colores vibrantes
            });
        }, 200); // Lanzar confeti cada 200 ms para hacerlo menos denso

        // Detener la lluvia de confeti después de 4 segundos
        setTimeout(function () {
            clearInterval(confettiInterval); // Detener el intervalo de confeti
        }, 4000); // Después de 4000 ms (4 segundos)
    });

    // También controlamos las velas
    document.getElementById('flame1').addEventListener('click', flameToggle);
    document.getElementById('flame2').addEventListener('click', flameToggle);

    function flameToggle() {
        this.classList.toggle('lit');
        this.classList.toggle('out');
    }
});
