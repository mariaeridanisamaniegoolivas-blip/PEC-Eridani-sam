function mostrarConsejo() {
let consejos = [
    "Tómate un momento para respirar y relajarte.",
    "Habla con alguien de confianza cuando lo necesites.",
    "Date tiempo para entender lo que estás sintiendo.",
    "Realiza alguna actividad que disfrutes.",
    "Recuerda que pedir ayuda está bien."
    ];
let numero = Math.floor(Math.random() * consejos.length);
document.getElementById("consejo").textContent = consejos[numero];
}