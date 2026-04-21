let money = 1000

horses = ["red", "blue", "green", "purple"]

const randomHorse = horses[Math.floor(Math.random() * horses.length)]


function bet(betAmount, horse) {
    if (horse == randomHorse) {
        money += betAmount
    } else {
        money -= betAmount
    }
}
