const polaroid = document.querySelector("img");

polaroid.addEventListener("click", () => {
    const polaroidSrc = polaroid.getAttribute("src");
    if(polaroidSrc === "images/commaSpringClosed.png") {
        polaroid.setAttribute("src", "images/commaSpringOpen.png");
    } else {
        polaroid.setAttribute("src", "images/commaSpringClosed.png");
    }
});

function blink() {
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
}

setInterval(blink, 5000);