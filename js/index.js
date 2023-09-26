const selection = ["Rock", "Paper", "Scissors"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

getComputerChoice = function() {
    const move = getRandomInt(3)
    return move
}

playerSelection = function() {
  while(true) {
    let move = window.prompt("Write Rock, Paper or Scissors")
    move = move.toLowerCase()
    move = move.split("")
    move[0] = move[0].toUpperCase()
    move = move.join("")

    for(i=0;i<selection.length;i++) {
        if (selection[i] === move) {
            return i
        }                   
    }

    window.alert("That's not a valid move")
  }
}

playRound = function() {
    const cpu = getComputerChoice()
    const player = playerSelection()

    console.log(cpu)
    console.log(player)

    if (cpu === player) {
        console.log(`Draw, both got ${selection[player]}`)
        return 0
    }

    if (player-cpu === 1 || player-cpu === -2) {
        console.log(`You win, ${selection[player]} beats ${selection[cpu]}`)
        return 1
    }

    if (player-cpu === -1 || player-cpu === 2) {
        console.log(`You lose, ${selection[cpu]} beats ${selection[player]}`)
        return -1
    }
}

game = function() {
    let totalPlayer = 0
    let totalCPU = 0
    let draw =0

    for(let i=0; i<5; i++){
        let result = playRound()
        console.log(`I'm in the loop ${i}`)
        switch (result) {
            case 1: 
                totalPlayer++;
                break;
            case -1: 
                totalCPU++
                break;
            case 0: 
                draw++;
                break;

        }
    }

    let message = ""
    if (totalPlayer > totalCPU){
        message = "YOU ARE THE WINNER"
    }

    else if (totalCPU > totalPlayer) {
        message = "YOU ARE THE LOSER"
    }

    else {
        message = "WE HAVE A DRAW"
    }

    console.log(`The final score is:
                Player: ${totalPlayer}
                CPU: ${totalCPU}
                Draws: ${draw}
                
                ${message}`)
}


game()