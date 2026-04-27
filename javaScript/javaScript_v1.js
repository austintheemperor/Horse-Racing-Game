money = 500


let raceOver = false;
// Show winner
function declareWinner(horse) {
    const winnerText = document.getElementById("winnerText");

    const winner = horse.alt; // actual winning horse

    const name = winner.charAt(0).toUpperCase() + winner.slice(1);
    winnerText.innerText = name + " horse wins!";
    winnerText.style.display = "block";
}

// Check for winner
function checkWinner() {
    if (raceOver) return;

    const allHorses = document.querySelectorAll(".horse");
    const screenWidth = window.innerWidth;

    for (let horse of allHorses) {
        const rect = horse.getBoundingClientRect();

        if (rect.right >= screenWidth) {
            raceOver = true;
            declareWinner(horse);
            return;
        }
    }

    requestAnimationFrame(checkWinner);
}

// Start checking
checkWinner();

const menu = document.getElementById("menuOverlay");

function openMenu() {
  menu.classList.add("active");
}

function closeMenu() {
  menu.classList.remove("active");
}

function resumeGame() {
    closeMenu();
}

function restartGame() {
    location.reload();
}
openMenu()

function bet(betAmount, horse) {
    if (horse == randomHorse) {
        money += betAmount
    } else {
        money -= betAmount
    }
}