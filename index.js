let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let player = {
    name : "Dilip",
    chips : 160
}
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

function generateRandom(){

    let randomNum = Math.floor(Math.random() * 13) + 1

    if(randomNum > 10) return 10

    if(randomNum === 1) return 11
    
    else return randomNum
}

function startGame(){

    playerEl.textContent = player.name + " : $" + player.chips
    isAlive = true
    let firstCard = generateRandom()
    let secondCard = generateRandom()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
        playerEl.textContent = player.name + " Congrats 🥳 Click Start Game Button to Continue"
        hasBlackJack = true
    }
    else{
        message = "woops!! You're out of the Game"
        playerEl.textContent = player.name + " Lost ☹️ Click Start Game Button to Continue"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCards(){

    if(isAlive === true && hasBlackJack === false){
        let newCard = generateRandom()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
