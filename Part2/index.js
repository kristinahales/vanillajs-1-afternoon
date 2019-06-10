const input = document.getElementById('idInput');
const color = document.getElementById('colorInput');


function setCard() {
    let card = document.getElementById(idInput.value);
    console.log(card);
    card.style.color = colorInput.value;
}

function reset() {
    let diamonds = document.getElementById('diamonds');
    let hearts = document.getElementById('hearts');
    let spades = document.getElementById('spades');
    let clubs = document.getElementById('clubs');
    diamonds.style.color = 'grey';
    hearts.style.color = 'grey';
    spades.style.color = 'grey';
    clubs.style.color = 'grey';
}
