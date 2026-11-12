let adatok = [];

async function init() {
    const response = await fetch("./colors.json");

    adatok = await response.json();
}

function megjelenit() {

}

function displayColors() {

}

init();