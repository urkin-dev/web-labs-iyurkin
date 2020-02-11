let
    firstScreen  = document.querySelector(`.first-slide`),
    secondScreen = document.querySelector(`.second-slide`),
    screenWidth  = document.body.clientWidth,
    tsStatus     = true, // true when screens aren't moving
    rsStatus     = false; // window resize status

window.onload = function() {
    document.body.classList.remove(`preload`);
}

if (screenWidth > 768) {

    secondScreen.style.transform = `translateX(${screenWidth}px) scale(.8)`;

    window.onresize = function(e) {
        window.location = window.location.href;
    }

    document.addEventListener("wheel", e => {

        let delta = e.deltaY;

        if (delta > 0 && tsStatus == true) {
            secondScreen.style.transform = `translateX(0) scale(1)`;
            firstScreen.style.transform = `translateX(-${screenWidth}px) scale(.8)`;
            tsStatus = false;
            secondScreen.ontransitionend = (e) => { tsStatus = true }
        } else if (delta < 0 && tsStatus == true) {
            secondScreen.style.transform = `translateX(${screenWidth}px) scale(.8)`;
            firstScreen.style.transform = `translateX(0) scale(1)`;
            tsStatus = false;
            secondScreen.ontransitionend = (e) => { tsStatus = true }
        }
    });
}