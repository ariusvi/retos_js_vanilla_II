/*
1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los
valores necesarios para calcular el área. Para ello has de crear un método por cada figura
para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
Aquí te mostramos que necesita cada figura:
• Circulo: (radio^2)*PI
• Triangulo: (base * altura) / 2
• Cuadrado: lado * lado
*/

let figura = prompt(
    "Elija una figura para calcular el área: circulo, cuadrado o triangulo:"
);
// pide al usuario que elija una figura

const PI = 3.1415;

if (figura === "circulo") {
    let radio = parseFloat(prompt("Escribe el radio del círculo aquí"));
    let areaCirculo = PI * radio ** 2;

    console.log("El área del círculo es:" + areaCirculo);
} else if (figura === "cuadrado") {
    let lado = parseFloat(prompt("Escribe el lado del cuadrado aquí"));
    let areaCuadrado = lado * lado;
    console.log("El área del cuadrado es:" + areaCuadrado);
} else if (figura === "triangulo") {
    let base = parseFloat(prompt("Escribe la base del triángulo aquí"));

    let altura = parseFloat(prompt("Escribe la altura del triángulo aquí"));
    let areaTriangulo = (base * altura) / 2;

    console.log("El área del triangulo es :" + areaTriangulo);
}
