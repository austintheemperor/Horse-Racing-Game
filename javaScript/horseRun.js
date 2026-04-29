// horseRun.js

const horses = document.querySelectorAll('.horse');

function startRace() {
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

        setInterval(() => {
            horse.src = isRunning
                ? `images/${horseName}Horse.png`
                : `images/${horseName}HorseRun.png`;
            isRunning = !isRunning;
        }, runSpeed);

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


