const seleccion = ["Piedra", "Papel", "Tijera"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

getComputerChoice = function() {
    const jugada = getRandomInt(3)
    return jugada
}

playerSelection = function() {
  while(true) {
    let jugada = window.prompt("Escribe piedra, papel o tijera")
    jugada = jugada.toLowerCase()
    jugada = jugada.split("")
    jugada[0] = jugada[0].toUpperCase()
    jugada = jugada.join("")

    for(i=0;i<seleccion.length;i++) {
        if (seleccion[i] === jugada) {
            return i
        }                   
    }

    window.alert("no ha ingresado una jugada valida")
  }
}

playRound = function() {
    const cpu = getComputerChoice()
    const player = playerSelection()

    console.log(cpu)
    console.log(player)

    if (cpu === player) {
        console.log(`Empate, ambos sacaron ${seleccion[player]}`)
        return 0
    }

    if (player-cpu === 1 || player-cpu === -2) {
        console.log(`Ganaste, ${seleccion[player]} le gana a ${seleccion[cpu]}`)
        return 1
    }

    if (player-cpu === -1 || player-cpu === 2) {
        console.log(`Perdiste, ${seleccion[cpu]} le gana a ${seleccion[player]}`)
        return -1
    }
}

game = function() {
    let totalJugador = 0
    let totalCPU = 0
    let empate =0

    for(let i=0; i<5; i++){
        let resultado = playRound()
        console.log(`estoy en el loop ${i}`)
        switch (resultado) {
            case 1: 
                totalJugador++;
                break;
            case -1: 
                totalCPU++
                break;
            case 0: 
                empate++;
                break;

        }
    }

    console.log(`El resultado final es:
                JUGADOR: ${totalJugador}
                CPU: ${totalCPU}
                Empates: ${empate}`)
}


game()