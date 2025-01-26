const banners = document.querySelectorAll(".banner");
console.log(banners);

banners.forEach((banner) => {
    const string = Array.from(banner.innerText);
    console.log(string);

    banner.innerHTML = "";
    string.forEach((letter) => {
        banner.innerHTML += `
            <div class="flag">
                <div class="character">${letter}</div>
            </div>
        `;
    });
});