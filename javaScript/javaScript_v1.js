let money = 500

horses = ["red", "blue", "green", "purple"]

function horseWinner() {
    const randomHorse = horses[Math.floor(Math.random() * horses.length)]
    return randomHorse
}

function bet(betAmount, horse) {
    if (horse == horseWinner()) {
        money += betAmount
    } else {
        money -= betAmount
    }
}
