let dias = prompt("ingrese cantidad de dias que deseas pagar 15 dias, 30 dias o 90 dias")

let costoMensualidad
if (dias == 15 ) {
    costoMensualidad = 18000 
} else if (dias == 30 ) {
    costoMensualidad = 35000
} else (dias == 90 ) ; {

} 
if (costoMensualidad) {
    console.log(`El costo de la mensualidad por ${dias} días es: ${costo} pesos.`);
}