let firstCard = 10
let secondCard =11

let sum = firstCard + secondCard
let message = ""
let messageEl = document.getElementById("message-el")

function startGame(){
    if(sum < 21){
        message = "You want to Draw a Card"
        messageEl.textContent = message
    }
    else if(sum === 21){
        message = "You won Black Jack Game"
        messageEl.textContent = message
    }
    else{
        message = "woops!! You're out of the Game"
        messageEl.textContent = message
    }
    
}
