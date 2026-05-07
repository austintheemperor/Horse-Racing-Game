// money + race state
let money = localStorage.getItem("userMoney");
let raceOver = false;
const menu = document.getElementById("menuOverlay");
const finishBtn = document.getElementById("restartRace");
const homeButton = document.getElementById("homeButton");
if (homeButton) {
    homeButton.onclick = function () {
        window.location.href = "Homepage.html";
    };
}


if (money == 0) {
    money = 500; // default starting money
} else {
    money = Number(money);
}


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

    // save AFTER updating
    localStorage.setItem("userMoney", money);

    const name = winner.charAt(0).toUpperCase() + winner.slice(1);

    winnerText.innerText = name + " horse wins!";
    winnerText.style.display = "block";
    if (money != 0) {
    finishBtn.style.display = "block";
    }
    homeButton.style.display = "block";
    document.getElementById("money").innerText = "Money: $" + money;
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
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
    const winnerText = document.getElementById("winnerText");

    if (winnerText) {
        winnerText.style.display = "none";
    }

    if (finishBtn) {
        finishBtn.style.display = "none";
    }

    if (homeButton) {
    homeButton.style.display = "none";
    }

    if (menu) {
        menu.classList.add("active");
    }
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

//save
localStorage.setItem("userMoney", money);

    document.getElementById("money").innerText = "Money: $" + money;

    raceOver = false;       // reset race state
    closeMenu();
    startRace();            // from horse.js
    checkWinner();          // start checking AFTER race starts
}


// open menu on load
// only run on the race page
if (document.body.id === "index") {
    openMenu();

    document.getElementById("money").innerText = "Money: $" + money;
}


document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'Escape'
    if (event.key === 'Escape') {
        // Redirect to your homepage URL
        window.location.href = 'Homepage.html';
    }
});
