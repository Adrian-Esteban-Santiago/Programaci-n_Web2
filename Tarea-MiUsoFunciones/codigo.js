function jugarAdivinanza() {
    const numeroMaquina = Math.floor(Math.random() * 10) + 1;
    let numoUSer;
    const vidas = 3;

    for (let intentos = 0; intentos < vidas; intentos++) {
        numUSer = parseInt(prompt("Ingresa un número del 1 al 10:"));

        if (numeroMaquina === numUSer) {
            alert("¡Ganaste, felicidades uwu!");
            return;
        }

        if (intentos < vidas - 1) {
            alert(`Incorrecto. Te quedan ${vidas - intentos - 1} vidas. Intenta nuevamente.`);
        }
    }

    console.log(`Perdiste, el número era: ${numeroMaquina}`);
}

jugarAdivinanza();