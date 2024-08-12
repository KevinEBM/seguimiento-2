
    // Definimos los costos por hora
    const lavadoraGrande = 4000
    const lavadoraPequeña = 3000
    const descuento = 0.03 
let total

let tipoLavadora = prompt("ingrese el tipo de lavadora 1 o 2") 
    
    // Calculamos el costo base dependiendo del tipo de lavadora
    let horasAquiler = prompt("ingrese horas de aquiler ")  ;

    if (tipoLavadora == 1) {
       total = horasAquiler * lavadoraGrande
    } else if (tipoLavadora == 2) {
       total = horasAquiler * lavadoraPequeña ;
    } else {
        console.log("Tipo de lavadora no válido. Usa 1 para lavadora grande o 2 para lavadora pequeña.");
       
    }
let cantidadLavadoras = prompt("ingrese cantidad de lavadoras a aquilar ")

    // Calculamos el costo total sin descuento
    let costoTotal = total * cantidadLavadoras 
    
    
    // Aplicamos el descuento si se alquilan más de 3 lavadoras
   
    if (cantidadLavadoras > 3) {
        costoTotal -= costoTotal * descuento;
    }

    // Mostramos el resultado
    console.log(`costo total de alquiler ${costoTotal}`);


