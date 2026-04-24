let money = 1000

horses = ["red", "blue", "green", "purple", "pink"]

const randomHorse = horses[Math.floor(Math.random() * horses.length)]
const rect = horses.getBoundingClientRect();
const hitRight = rect.right >= window.innerWidth;

function bet(betAmount, horse) {
    if (horse == randomHorse) {
        money += betAmount
    } else {
        money -= betAmount
    }
}
