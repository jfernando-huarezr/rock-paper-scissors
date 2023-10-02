export function playerSelection(play) {
    const selection = ["rock", "paper", "scissors"]
    
      for(let i=0;i<selection.length;i++) {
          if (selection[i] === play) {
              return i
          }                   
      }
}