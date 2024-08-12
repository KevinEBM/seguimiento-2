let genero = prompt("Ingrese género");
let edad = prompt("Ingrese edad");

// Definimos las tarifas de ayuda según el género y la edad
const ayudaFemeninoMayor50 = 120000;
const ayudaFemenino30a50 = 100000;
const ayudaMasculino = 40000;
let ayudaMensual = 0 

if (genero === 'femenino') {
    if (edad > 50) {
        ayudaMensual = ayudaFemeninoMayor50;
    } else if (edad >= 30 && edad <= 50) {
        ayudaMensual = ayudaFemenino30a50;
    } else {
        ayudaMensual = 0; // No se especifica ayuda para mujeres menores de 30 años
    }
} else if (genero === 'masculino') {
    ayudaMensual = ayudaMasculino;
} else {
    console.log("Género no válido. Usa 'femenino' o 'masculino'.");
}

// Mostramos el resultado
if (ayudaMensual > 0) {
    console.log(`Tu ayuda mensual es: ${ayudaMensual}`);
}
