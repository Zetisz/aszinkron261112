let adatok = [];
const main = document.getElementsByTagName('main')[0];

async function init() {
    const response = await fetch("./colors.json");
    adatok = await response.json();

    setTimeout(() => {
        document.getElementById("welcome").style.display = "none";
        displayColors();
    }, 3000)
}

function displayColors() {
    for (const adat of adatok) {
        const div = document.createElement("div");
        div.style.background = adat.cssValue;
        div.style.width = "200px";
        div.style.height = "100px";
        div.textContent = adat.name;
        div.style.alignContent = "center";
        div.style.textAlign = "center";
        div.classList.add("pointer") // nem mukszik

        if (adat.textColor == "light"){
            div.style.color = "whitesmoke";
        }
        
        div.addEventListener("click", () => {
            adatok.splice(0, 0, adatok.splice(adatok.indexOf(div), 1)[0]);
            main.innerHTML = "";
            displayColors();
        });

        main.appendChild(div);
    }
}

init();

const form = document.getElementById("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newColor = {
        "name": document.getElementById("name").value,
        "cssValue": document.getElementById("value").value,
        "textColor": document.getElementById("color").value
    }
    adatok.push(newColor);

    main.innerHTML = "";
    displayColors();
})