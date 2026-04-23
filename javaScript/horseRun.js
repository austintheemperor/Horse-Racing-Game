const horses = document.querySelectorAll('.horse');
let runSpeed = 200; // controls how fast legs animate

// You can control the speeds of each horse here how fast they move across the screen
const horseSpeeds = {
  red: 3,
  blue: 4,
  green: 2.5,
  pink: 3.5,
  purple: 4.5
};

horses.forEach(horse => {
  let position = 0;
  let isRunning = false;

  const horseName = horse.getAttribute('alt');
  let speed = horseSpeeds[horseName] || 3;

  // Animation (image swapping)
  setInterval(() => {
    if (isRunning) {
      horse.src = `images/${horseName}Horse.png`;
    } else {
      horse.src = `images/${horseName}HorseRun.png`;
    }
    isRunning = !isRunning;
  }, runSpeed);

  // Movement. also this where we can randomize the speed at all that i think. Perchance.
  function moveHorse() {
    position += speed;
    horse.style.left = position + "px";

    if (position < window.innerWidth) {
      requestAnimationFrame(moveHorse);
    }
  }

  moveHorse();
});

