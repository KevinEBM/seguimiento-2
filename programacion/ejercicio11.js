const emitePitido = prompt("tu pc emite pitido? si/no") 
const discoGira = prompt("el disco esta girando? si/no")

if (emitePitido == "si" && discoGira == "si" ) { 
    console.log("Póngase en contacto con el técnico de apoyo.") ;
} else if (emitePitido == "si" && discoGira == "no") {
    console.log ("Verificar contactos de la unidad") ;
} else if (emitePitido === "no" && discoGira === "sí")  {
    console.log("Compruebe las conexiones de altavoces.");
} else if (emitePitido === "no" && discoGira === "no") {
    console.log("Traiga la computadora para repararla en la central.");
} else {
    console.error("Respuesta no válida. Por favor, ingrese 'sí' o 'no'.");
}