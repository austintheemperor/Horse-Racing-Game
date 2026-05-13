// horseRun.js

const horses = document.querySelectorAll('.horse');
let horseIntervals = [];
let speedChart;
let horseSpeeds = {};
let horsePercents = {};

function generateOdds() {

  horseSpeeds = {
    red: 3 + Math.random() * 2,
    blue: 3 + Math.random() * 2,
    green: 3 + Math.random() * 2,
    pink: 3 + Math.random() * 2,
    purple: 3 + Math.random() * 2
  };
  const total = Object.values(horseSpeeds).reduce((a, b) => a + b, 0);
horsePercents = {
    red: (horseSpeeds.red / total) * 100,
    blue: (horseSpeeds.blue / total) * 100,
    green: (horseSpeeds.green / total) * 100,
    pink: (horseSpeeds.pink / total) * 100,
    purple: (horseSpeeds.purple / total) * 100
  };
    updateChart();
    }
    function updateChart() {

  const ctx = document.getElementById("speedChart");
  if (!ctx) return;

  if (speedChart) {
    speedChart.destroy();
  }

  speedChart = new Chart(ctx, {
    type: "bar",

    data: {
      labels: Object.keys(horsePercents),

      datasets: [{
        label: "Win Chance (%)",
        data: Object.values(horsePercents),

        backgroundColor: ["red", "blue", "green", "pink", "purple"]
      }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value.toFixed(1) + "%";
            }
          }
        }
      }
    }
  });
}

function startRace() {
 horseIntervals.forEach(interval => clearInterval(interval));
  horseIntervals = [];



  horses.forEach(horse => {
    let position = 0;
    let isRunning = false;

    const horseName = horse.getAttribute('alt');
    let runSpeed = 700 / horseSpeeds[horseName];
    let speed = horseSpeeds[horseName] || 4;

  const interval = setInterval(() => {
      horse.src = isRunning
        ? `../images/${horseName}Horse.png`
        : `../images/${horseName}HorseRun.png`;
      isRunning = !isRunning;
    }, runSpeed);

        horseIntervals.push(interval);

    function moveHorse() {
      position += speed;
      horse.style.left = position + "px";

     if (position < window.innerWidth) {
        requestAnimationFrame(moveHorse);
      }
    }

    moveHorse();
  });
}
window.addEventListener("load", () => {
  generateOdds();
});


