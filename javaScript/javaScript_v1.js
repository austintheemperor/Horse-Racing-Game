// money + race state
let money = 500;
let raceOver = false;

const menu = document.getElementById("menuOverlay");

// Show winner
function declareWinner(horse) {
    const winnerText = document.getElementById("winnerText");

    const winner = horse.alt;
    const name = winner.charAt(0).toUpperCase() + winner.slice(1);

    winnerText.innerText = name + " horse wins!";
    winnerText.style.display = "block";
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
    closeMenu();
    startRace();            // from horse.js
    checkWinner();          // start checking AFTER race starts
}

function restartGame() {
    location.reload();
}

// open menu on load
openMenu();

// Betting
function bet(betAmount, horse) {
    if (horse == randomHorse) {
        money += betAmount;
    } else {
        money -= betAmount;
    }
}