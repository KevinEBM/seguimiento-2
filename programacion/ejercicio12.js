
    // Lista de modelos defectuosos
    const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

    // Solicitar al usuario el número de modelo
    const numeroModelo = prompt("Ingrese el número de modelo de su automóvil:");

    // Verificar si el número de modelo es un número válido
    if (isNaN(numeroModelo)) {
        console.error("Por favor, ingrese un número de modelo válido.");
        return;
    }

    // Verificar si el número de modelo está en la lista de defectuosos
    if (modelosDefectuosos.includes(numeroModelo)) {
        console.log("El automóvil está defectuoso, llevar a garantía.");
    } else {
        console.log("Su automóvil no está defectuoso.");
    }

// Llamar a la función para ejecutar la aplicación
verificarModeloDefectuoso();