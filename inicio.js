document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const button = document.getElementById("continue-button");

    // Efecto de hover en la carta
    card.addEventListener("mouseover", () => {
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.6)";
        card.style.transform = "scale(1.0)"; // Hace que la carta crezca un poco
    });

    card.addEventListener("mouseout", () => {
        card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.5)";
        card.style.transform = "scale(1)"; // Vuelve a su tamaño normal
    });

    // Redirigir al hacer clic en el botón "Continuar"
    button.addEventListener("click", function () {
        window.location.href = "show.html"; // Cambia "otro.html" por la página a la que quieres redirigir
    });
});
