let money = 500

horses = ["red", "blue", "green", "purple"]

function bet(betAmount, horse) {

}

function horseWinner() {
    const randomHorse = horses[Math.floor(Math.random() * horses.length)]
    alert(`The ${randomHorse} horse Wins`)
}
