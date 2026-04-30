// money + race state
let money = 500;
let raceOver = false;
const menu = document.getElementById("menuOverlay");
const finishBtn = document.getElementById("restartRace");

// Show winner
function declareWinner(horse) {
    const winnerText = document.getElementById("winnerText");
    const horseGamba = document.getElementById("horseGamba");
    const betting = document.getElementById("betAmount");
    const betAmount = Number(betting.value);
    const selectedValue = horseGamba.value;
    const winner = horse.alt;
    if (selectedValue == winner) {
        money += betAmount * 2;
    }

    const name = winner.charAt(0).toUpperCase() + winner.slice(1);

    winnerText.innerText = name + " horse wins!";
    winnerText.style.display = "block";
    finishBtn.style.display = "block"
    document.getElementById("money").innerText = "Money: $" + money;
}

// Check winner
function checkWinner() {
    if (raceOver) return;

    const allHorses = document.querySelectorAll(".horse");

    for (let horse of allHorses) {
        const rect = horse.getBoundingClientRect();

        if (rect.right >= window.innerWidth) {
            raceOver = true;
            declareWinner(horse);
            return;
        }
    }

    requestAnimationFrame(checkWinner);
}

// Menu
function openMenu() {
    document.getElementById("winnerText").style.display = "none";
    finishBtn.style.display = "none";
    menu.classList.add("active");
}

function closeMenu() {
    menu.classList.remove("active");
}

// Start button
function startGame() {
const betting = document.getElementById("betAmount");
    const betAmount = Number(betting.value);

if (money <= 0) {
alert("You have no money left");
return;
}

if (betAmount > money) {
alert("You don't have enough money");
return;
}

money -= betAmount;
    document.getElementById("money").innerText = "Money: $" + money;

    raceOver = false;       // reset race state
    closeMenu();
    startRace();            // from horse.js
    checkWinner();          // start checking AFTER race starts
}


// open menu on load
openMenu();

document.getElementById("money").innerText = "Money: $" + money;
