const polaroid = document.querySelector("img");

polaroid.addEventListener("click", function () {
    const polaroidSrc = polaroid.getAttribute("src");
    if(polaroidSrc === "images/commaSpringClosed.png") {
        polaroid.setAttribute("src", "images/commaSpringOpen.png");
    } else {
        polaroid.setAttribute("src", "images/commaSpringClosed.png");
    }
});

let button = document.querySelector("button");
let heading = document.querySelector("h1");