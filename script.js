const cardsArray = document.querySelectorAll('.card');

for (let card of cardsArray) {
    card.value = Math.floor(Math.random() * 9);
    card.innerText = card.value; //for test purposes ONLY!!!
}

card.addEventListener('click', select); //ERROR

function select() {
    card.classList.add('cardSelected');

}