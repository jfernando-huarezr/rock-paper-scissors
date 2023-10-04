import { getComputerChoice } from "./computerChoice.js"
import { playerSelection } from "./playerChoice.js"

export function playRound(play) {

    const cpu = getComputerChoice()
    const player = playerSelection(play)
    const selection = ["Rock", "Paper", "Scissors"]
    const $message = document.querySelector('.selection h4')    
    console.log(cpu)
    console.log(player)

    if (cpu === player) {
        $message.textContent = `Draw! Both got ${selection[player]}`
        return 0
    }

    if ((player-cpu) === 1 || (player-cpu) === -2) {
        $message.textContent = `You win this round! ${selection[player]} beats ${selection[cpu]}`
        return 1
    }

    if ((player-cpu) === -1 || (player-cpu) === 2) {
        $message.textContent = `You lose this round! ${selection[cpu]} beats ${selection[player]}`
        return -1
    }
}