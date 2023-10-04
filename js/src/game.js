import { playRound } from "./playRound.js"

export function game() {

    let result
    let totalPlayer = 0
    let totalCPU = 0
    let draw =0
    let message = ""

    const images = document.querySelectorAll('.selection ul li')

    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            const $picture = image.querySelector('img')
            switch ($picture.getAttribute('alt')) {
                case 'rock': $picture.setAttribute('src', './img/rock2.jpeg'); break
                case 'paper': $picture.setAttribute('src', './img/paper2.jpeg'); break
                case 'scissors': $picture.setAttribute('src', './img/scissors2.jpeg'); break
            }
        })

        image.addEventListener('mouseleave', () => {
            const $picture = image.querySelector('img')

            switch ($picture.getAttribute('alt')) {
                case 'rock': $picture.setAttribute('src', './img/rock1.jpeg'); break
                case 'paper': $picture.setAttribute('src', './img/paper1.jpeg'); break
                case 'scissors': $picture.setAttribute('src', './img/scissors1.jpeg'); break
            }
        })

        image.addEventListener('click', ()=> {
            const $play = image.querySelector('img').getAttribute('alt')
            

            if (totalPlayer < 5 && totalCPU < 5) {              
                result = playRound($play)

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
    
                const $totalPlayer = document.querySelector('.hero p')
                const $totalCPU = document.querySelector('.terminator p')

                $totalPlayer.textContent = totalPlayer
                $totalCPU.textContent = totalCPU                
            }
            
        
            if (totalPlayer === 5 || totalCPU === 5) {  
                const $message = document.querySelector('.selection h4')

            
                if (totalPlayer > totalCPU){
                    $message.textContent = "YOU ARE THE WINNER!"
                }
    
                else if (totalCPU > totalPlayer) {
                    $message.textContent = "YOU ARE THE LOSER!"
                }    
            }
        })
    })            
}