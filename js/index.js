const seleccion = ["Piedra", "Papel", "Tijera"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const jugada = getRandomInt(3)
    switch (jugada) {
        case 0: return "Piedra"
        case 1: return "Papel"
        case 2: return "Tijera"
    }
}

function playerSelection() {

    let jugada = window.prompt("Escribe piedra, papel o tijera")
    jugada = jugada.toLowerCase()
    jugada = jugada.split("")
    jugada[0] = jugada[0].toUpperCase()
    jugada = jugada.join("")

    for(i=0;i<seleccion.length;i++) {
        if (seleccion[i] === jugada) {
            return jugada
        }                   
    }
    
    return "Jugada invalida"
}

