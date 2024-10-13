document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const panelNumber = this.dataset.panel;
        randomColor(panelNumber);
    });
});

function randomColor(panelNumber) {
    const hexCode = generateRandomHex();
    document.getElementById(`hex-code${panelNumber}`).textContent = hexCode;
    document.getElementById(`panel${panelNumber}`).style.background = `#${hexCode}`;
}

function generateRandomHex() {
    const hexNumbers = "0123456789ABCDEF";
    let hexCode = "";
    for (let i = 0; i < 6; i++) {
        hexCode += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
    }
    return hexCode;
}
