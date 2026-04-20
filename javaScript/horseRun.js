let isRunning = false;
const horseImg = document.getElementById('horse');

setInterval(() => {
  // Toggle between the two images
  if (isRunning) {
    horseImg.src = 'normalHorse.png';
  } else {
    horseImg.src = 'normalHorseRun.png';
  }
  // Flip the state
  isRunning = !isRunning;
}, 200); // Sets the time for the milliseconds

