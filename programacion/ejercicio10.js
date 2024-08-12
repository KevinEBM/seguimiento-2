
const numeroCopias = prompt("Ingrese el número de copias que desea imprimir:") ;

// Definir las tarifas según el rango de copias
let precioPorCopia;
if (numeroCopias < 0) {
    console.log("El número de copias no puede ser negativo.");
} else if (numeroCopias <= 499) {
    precioPorCopia = 120;
} else if (numeroCopias <= 749) {
    precioPorCopia = 100;
} else if (numeroCopias <= 999) {
    precioPorCopia = 80;
} else {
    precioPorCopia = 50;
}

// Calcular el precio total
const precioTotal = precioPorCopia * numeroCopias;

// Mostrar los resultados al usuario
console.log(`Número de copias: ${numeroCopias}`);
console.log(`Precio por copia: ${precioPorCopia}`);
console.log(`Precio total: $${precioTotal}`);
