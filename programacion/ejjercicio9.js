
    const angulo1 = prompt("Ingrese el primer ángulo en grados:");
    const angulo2 = prompt("Ingrese el segundo ángulo en grados:");
    const angulo3 = prompt("Ingrese el tercer ángulo en grados:");

    // Verificamos si la suma de los ángulos es igual a 180 grados
    const sumaAngulos = angulo1 + angulo2 + angulo3;
    if (sumaAngulos == 180) {
        console.log("Los ángulos forman un triángulo válido.");
    } else {
        console.log("Los ángulos no forman un triángulo válido.");
    }

