let firstCard = generateRandom()
let secondCard = generateRandom()
let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1]
let isAlive = true
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function startGame(){
   renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards : "

    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum : " + sum

    if(sum < 21){
        message = "You want to Draw a Card"
    }
    else if(sum === 21){
        message = "You won Black Jack Game"
        hasBlackJack = true
    }
    else{
        message = "woops!! You're out of the Game"
        isAlive = false
    }

    messageEl.textContent = message
}


function generateRandom(){

    let randomNum = Math.floor(Math.random() * 13) + 1

    if(randomNum > 10) return 11

    if(randomNum === 1) return 10
    
    else return randomNum
}
function newCards(){

    if(isAlive === true && hasBlackJack === false){
        let newCard = generateRandom()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
