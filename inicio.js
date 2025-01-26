document.getElementById("continue-button").addEventListener("click", function () {
    // Reproducir el audio
    var audio = document.getElementById("audio");
    audio.play();

    // Cambiar la imagen de la carta
    var cardFront = document.getElementById("card-front");
    cardFront.classList.add("change-image");

    // Cambiar la imagen de nuevo después de cierto tiempo (sin volver a la anterior)
    setTimeout(function () {
        cardFront.classList.remove("change-image");
        cardFront.style.background = "url('don.jpg') center/cover no-repeat"; // Aquí puedes poner la siguiente imagen que deseas mostrar
    }, 7500); // 7.5 segundos para que la primera imagen esté visible antes de cambiar

    // Redirigir después de unos segundos más
    setTimeout(function () {
        window.location.href = "carta2.html";
    }, 15000); // 15 segundos en total (7.5 segundos para el cambio de imagen + 7.5 segundos adicionales)
});

// Optional: Añadir animaciones sutiles a la carta al hacer hover
const card = document.querySelector(".card");
card.addEventListener("mouseover", () => {
    card.style.transition = "transform 0.6s, box-shadow 0.3s";
    card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.6)";
});
card.addEventListener("mouseout", () => {
    card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.5)";
});
