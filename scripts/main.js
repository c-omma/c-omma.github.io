/* banner for h2 */
const banner = document.querySelector("h2");
let bannerLetters = Array.from(banner.textContent);
// console.log(bannerLetters);

bannerLetters.forEach((letter, index) => {
    if(index === 0) banner.textContent = letter;
    else banner.textContent += " " + letter;
});