var deck = [];
var newDeck = [];

function randomNumber(max) {
    var number = Math.random() * 100;

    while (number > max) {
        number = Math.random() * 100;

    }
    number = Math.floor(number);
    return number;
}


function addCard(item) {
    deck.push(item);
}

function sortDeck() {
    deck = [];
    MajorArcana.forEach(addCard);
    Cups.forEach(addCard);
    Pentacles.forEach(addCard);
    Swords.forEach(addCard);
    Wands.forEach(addCard);
    document.getElementById("card").innerHTML = '<img src="img/blank.jpg " /><figcaption>Draw A Card</figcaption>'
}

function drawCard() {
    var card = deck[0];
    deck.splice(0, 1);
    console.log(deck.length);
    console.log(card);
    document.getElementById("card").innerHTML = '<img src="' + card.file + ' " /><figcaption>' + card.name + '</figcaption>'
}

function shuffleDeck() {
    sortDeck();
    var i;
    var r;
    var newDeck = [];
    for (i = 0; i < 78; i++) {
        r = randomNumber(deck.length);
        newDeck.push(deck[r]);
        deck.splice(r, 1);
    }
    deck = newDeck;
    console.log(deck);
    document.getElementById("card").innerHTML = '<img src="img/blank.jpg " /><figcaption>Draw A Card</figcaption>'
}

sortDeck();


