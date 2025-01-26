const polaroid = document.querySelector("img");
let flag = 0;

polaroid.addEventListener("click", () => {
    if (flag == 1) return;
    flag = 1;

    polaroid.setAttribute("src", "images/commaSpringClosed.png");

    setTimeout(() => {
        polaroid.setAttribute("src", "images/commaSpringBent.png");
    }, 100);

    setTimeout(() => {
        polaroid.setAttribute("src", "images/commaSpringWave.png");
    }, 150);

    setTimeout(() => {
        polaroid.setAttribute("src", "images/commaSpringBent.png");
    }, 900);

    setTimeout(() => {
        polaroid.setAttribute("src", "images/commaSpringClosed.png");
    }, 950)

    setTimeout(() => {
        polaroid.setAttribute("src", "images/commaSpringOpen.png");
    }, 1000);

    console.log("waved!");

    flag = 0;
});

function blink() {
    if (flag == 1) return;
    flag = 1;

    polaroid.setAttribute("src", "images/commaSpringBlink.png");

    setTimeout(() => {
        polaroid.setAttribute("src", "images/commaSpringOpen.png");
    }, 200);

    setTimeout(() => {
        polaroid.setAttribute("src", "images/commaSpringBlink.png");
    }, 350);

    setTimeout(() => {
        polaroid.setAttribute("src", "images/commaSpringOpen.png")
    }, 550);

    flag = 0;
}

setInterval(blink, 12000);