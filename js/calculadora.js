let nombre = prompt("Ingrese su nombre");
let altura;
while (true) {
    altura = parseFloat(prompt("Ingrese su altura en metros"));

    if (altura >= 0 && altura <= 2.5) {
        break; // La altura está dentro del rango, sal del bucle
    } else {
        alert("Error: La altura debe estar expresada en metros");
    }
}
let peso = parseFloat(prompt("Ingrese su peso en kilogramos"));

let imc = parseInt(peso / (altura * altura));


if (imc < 18.5) {
    mensaje = "Bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    mensaje = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    mensaje = "Sobrepeso";
} else {
    mensaje = "Obesidad";
}

let resultado = "Hola " + nombre + "\n" + "Tu IMC es " + imc + " lo que indica que tu peso esta en la categoria " + mensaje + " para adultos de tu estatura";

console.log(resultado);

document.querySelector("h2").innerText = resultado
