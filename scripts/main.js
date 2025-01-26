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

function setUserName() {
    const name = prompt("who are you?");
    localStorage.setItem("name", name);
    heading.textContent = 'Comma\'s for ${name}';
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }