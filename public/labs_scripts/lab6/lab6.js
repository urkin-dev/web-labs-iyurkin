let
    preloader   = document.querySelector('.preloader'),
    mainVideo   = document.querySelector('.hyperspace'),
    goBtn       = document.querySelector('.go-btn'),
    space       = document.querySelector('.space-stuff'),
    orbit       = document.querySelector('.orbit-stuff'),
    missedField = document.querySelector('.missed'),
    pointsField = document.querySelector('.points'),
    xWing       = document.querySelector('.x-wing2'),
    xWing2      = document.querySelector('.x-wing'),
    screenWidth = document.body.clientWidth,
    missed      = 0;

var
    locationStatus  = 'Space',
    points          = 0,
    timeout;

function loadData() {

    document.querySelector('main').style.display = 'none';

    xWing.addEventListener('animationend', (e) => { xWing.style.display = 'none' })

    xWing2.addEventListener('animationend', (e) => { xWing2.style.display = 'none' })

    window.onresize = function (e) {
        window.location = window.location.href;
    }

    // Button that change location and start play background video
    goBtn.addEventListener('click', (e) => {
        clearInterval(timeout);
        mainVideo.play();
        locationStatus == 'Space' ? locationStatus = 'Orbit' : locationStatus = 'Space';
        mainVideo.style.zIndex = 1000; // Show video above container
        mainVideo.onended = (e) => {
            update(locationStatus)
            mainVideo.style.zIndex = 999;
        }
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (screenWidth < 1045) {
                reject();
            } else {
                resolve();
            }
        }, 5000);
    });
}

loadData()
    .then(() => {
        document.querySelector('main').style.display = 'block';
        preloader.classList.add('hidden');
        preloader.classList.remove('visible');
    })
    .then(() => {
        startGame(2000);
    })
    .catch(() => {
        let error = preloader.querySelector('.error');
        error.style.display = 'block';
    });

/**
 * Start interval
 * @param {Integer} time time for spawn interval
 */
function startGame(time) {
    timeout = setInterval(() => {
        spawnShips();
    }, time);
}

/**
 * Spawn random ships, add event to every ship
 */
function spawnShips() {
    let container = document.querySelector('.mobs');

    let ship = document.createElement('img');
    ship.classList.add('tie-fighter');
    ship.src = './img/lab6/tf1.png';

    ship.style.top = `${randomIntFromInterval(10, 80)}%`;
    ship.style.left = `${randomIntFromInterval(10, 70)}%`;

    ship.addEventListener('animationend', () => {
        ship.style.display = `none`;
        
        missed++;
        missedField.textContent = missed;
    });

    ship.addEventListener('click', (e) => {
        ship.style.animationPlayState = `paused`; // Stop css animation
        
        points+=10;
        pointsField.textContent = points;

        ship.style.display = `none`;
        checkPoints(points);
    });

    container.prepend(ship);
}

/**
 * points: 100 -> time = 1500, 200 -> time = 1000, 300 -> time = 500
 * @param {Integer} points points
 */
function checkPoints(points) {
    switch (points) {
        case 100:
            clearInterval(timeout);
            startGame(1500);
            break;
        
        case 200:
            clearInterval(timeout);
            startGame(1000);
            break;
        
        case 700:
            clearInterval(timeout);
            startGame(500);
            break;
    }
}

/**
 * Change one location to another
 * @param {String} locationStatus Name of location
 */
function update(locationStatus) {
    if (locationStatus == 'Space') {
        space.style.display = 'block';
        orbit.style.display = 'none';
        startGame(2000);
    } else {
        space.style.display = 'none';
        xWing.style.display = 'block';
        xWing.style.animationPlayState = 'running';
        xWing2.style.display = 'block';
        xWing2.style.animationPlayState = 'running';
        orbit.style.display = 'block';
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}