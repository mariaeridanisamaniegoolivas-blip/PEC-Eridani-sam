function mostrarMensaje() {
let mensajes = [
    "Todas tus emociones son importantes.",
    "Está bien no sentirse bien todo el tiempo.",
    "Recuerda cuidar de ti.",
    "Hablar de lo que sentimos puede ayudarnos.",
    "Tú también mereces sentirte bien."
    ];
let numero = Math.floor(Math.random() * mensajes.length);
document.getElementById("mensaje").textContent = mensajes[numero];
}