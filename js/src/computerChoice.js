export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getComputerChoice () {
    const move = getRandomInt(3)
    return move
}
