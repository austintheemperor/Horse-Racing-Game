const horses = document.querySelectorAll('.horse');
let runSpeed = 200;

horses.forEach(horse => {
  let isRunning = false;

  // grab the alt for each horse
  const horseName = horse.getAttribute('alt');

  setInterval(() => {
    if (isRunning) {
      horse.src = `images/${horseName}Horse.png`;
    } else {
      horse.src = `images/${horseName}HorseRun.png`;
    }

    isRunning = !isRunning;
  }, runSpeed);
});


