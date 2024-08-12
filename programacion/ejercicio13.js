const operador = prompt("ingrese al operador que pertenece tigo, claro o movistar")
let minutosInternacionales = prompt("ingrese cantidad de minutos consumidos")

let cargoFijo, valorMinutoInternacional, valorPaqueteDatos;

if (operador == "tigo") {
    cargoFijo = 45000
    valorMinutoInternacional = 200 
    valorPaqueteDatos = 12000
} else if (operador == "claro") { 
    cargoFijo = 30000
    valorMinutoInternacional = 100
    valorPaqueteDatos = 18000
} else if (operador == "movistar") { 
    cargoFijo = 40000
    valorMinutoInternacional = 250
    valorPaqueteDatos = 18000
} else { 
    console.log ("datos erroneos ingresar de nuevo") ; 
    return
}
const costoMinutosInternacionales = valorMinutoInternacional * minutosInternacionales;
const costoTotal = cargoFijo + costoMinutosInternacionales;

console.log (`Operador es ${operador}, Costo fijo ${cargoFijo} ,Costo por minutos internacionales es ${costoMinutosInternacionales} ,internacionales Costo total seria: ${costoTotal}`)