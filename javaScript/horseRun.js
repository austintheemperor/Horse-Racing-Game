let isRunning = false;
const horseImg = document.getElementById('horse01');

runSpeed = 200

//grabs the alt so we can set it to the color we want
const horseName = document.getElementById('horse01').getAttribute('alt');

setInterval(() => {
  // Toggle between the two images
  if (isRunning) {
    horseImg.src = `images/${horseName}Horse.png`;
  } else {
    horseImg.src = `images/${horseName}HorseRun.png`;
  }
  // Flip the state
  isRunning = !isRunning;
}, runSpeed); // Sets the time for the milliseconds

