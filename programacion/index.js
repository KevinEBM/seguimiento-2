    const baseFare = 30000;
    const extraFare = 33000;

    let totalPayout= 0;
    workedHours = prompt("Input your worked hours (Only Numbers): ) ");

    if (workedHours <= 10) {
       totalPayout = workedHours * baseFare;
    } else {
        totalPayout = 10 * baseFare;
        totalPayout += (workedHours -10) * extraFare;
    }
    userName = prompt("Input your user name:  ")


    // Mostramos el mensaje con los resultados
    alert(`Señor(a) ${userName}, el número de horas es ${workedHours} y su salario equivale a ${totalPayout}`);

