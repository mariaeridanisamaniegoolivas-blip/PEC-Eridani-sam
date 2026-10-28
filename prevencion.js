function mostrarMensaje() {
let mensajes = [
    "Cuidar tus emociones es una parte importante de tu bienestar.",
    "Hablar con alguien de confianza puede ayudarte.",
    "No tienes que resolver todo de una sola vez.",
    "Reconocer lo que sientes es un buen comienzo.",
    "Buscar apoyo es una decisión valiente."
    ];
    let numero = Math.floor(Math.random() * mensajes.length);
    document.getElementById("recordatorio").textContent = mensajes[numero];
}