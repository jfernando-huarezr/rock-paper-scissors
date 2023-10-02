import { getComputerChoice } from "./computerChoice.js"
import { playerSelection } from "./playerChoice.js"

export function playRound(play) {

    const cpu = getComputerChoice()
    const player = playerSelection(play)
    const selection = ["Rock", "Paper", "Scissors"]

    //console.log(cpu)
    //console.log(player)

    if (cpu === player) {
        console.log(`Draw!, both got ${selection[player]}`)
        return 0
    }

    if (player-cpu === 1 || player-cpu === -2) {
        console.log(`You win this round!, ${selection[player]} beats ${selection[cpu]}`)
        return 1
    }

    if (player-cpu === -1 || player-cpu === 2) {
        console.log(`You lose this round!, ${selection[cpu]} beats ${selection[player]}`)
        return -1
    }
}