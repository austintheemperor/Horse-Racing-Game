// horseRun.js

const horses = document.querySelectorAll('.horse');
let horseIntervals = [];
function startRace() {
 horseIntervals.forEach(interval => clearInterval(interval));
  horseIntervals = [];
  const horseSpeeds = {
    red: 3 + Math.random() * 2,
    blue: 3 + Math.random() * 2,
    green: 3 + Math.random() * 2,
    pink: 3 + Math.random() * 2,
    purple: 3 + Math.random() * 2
  };

  horses.forEach(horse => {
    let position = 0;
    let isRunning = false;

    const horseName = horse.getAttribute('alt');
    let runSpeed = 700 / horseSpeeds[horseName];
    let speed = horseSpeeds[horseName] || 4;

  const interval = setInterval(() => {
      horse.src = isRunning
        ? `images/${horseName}Horse.png`
        : `images/${horseName}HorseRun.png`;
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


