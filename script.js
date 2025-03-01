// Fecha en la que se verán
const fechaDestino = new Date("2025-07-12"); // Modificá con la fecha real

function actualizarContador() {
    const ahora = new Date();
    const diferencia = fechaDestino - ahora;

    if (diferencia <= 0) {
        document.getElementById("contador").innerText = "¡Hoy la ves! 💖";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerText = dias + " días";
}

actualizarContador();
setInterval(actualizarContador, 1000 * 60 * 60); // Actualiza cada hora
