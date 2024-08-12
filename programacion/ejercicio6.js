
    // Pedimos al usuario que ingrese tres números
    const numero1 = prompt("Ingrese el primer número:");
    const numero2 = prompt("Ingrese el segundo número:");
    const numero3 = prompt("Ingrese el tercer número:");

    // Encontramos el número mayor usando Math.max
    const numeroMayor = Math.max(numero1, numero2, numero3);

    // Mostramos el resultado al usuario
    alert(`El número mayor entre ${numero1}, ${numero2} y ${numero3} es ${numeroMayor}.`); 


