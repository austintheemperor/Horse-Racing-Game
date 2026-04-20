let isRunning = false;
const horseImg = document.getElementById('horse');

setInterval(() => {
  // Toggle between the two images
  if (isRunning) {
    horseImg.src = 'images/normalHorse.png';
  } else {
    horseImg.src = 'images/normalHorseRun.png';
  }
  // Flip the state
  isRunning = !isRunning;
}, 200); // Sets the time for the milliseconds

