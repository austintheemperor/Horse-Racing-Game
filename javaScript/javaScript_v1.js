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
    const betAmount = betting.value;
    const selectedValue = horseGamba.value;
    const winner = horse.alt;
    if (selectedValue == winner) {
        money += betAmount;
    } else {
        money -= betAmount;
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
    menu.classList.add("active");
}

function closeMenu() {
    menu.classList.remove("active");
}

// Start button
function startGame() {
    raceOver = false;       // reset race state
 document.getElementById("winnerText").style.display = "none";
    finishBtn.style.display = "none"
    closeMenu();
    startRace();            // from horse.js
    checkWinner();          // start checking AFTER race starts
}


// open menu on load
openMenu();

document.getElementById("money").innerText = "Money: $" + money;
