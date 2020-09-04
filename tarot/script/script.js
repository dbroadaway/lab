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
}

function drawCard() {
    i = randomNumber(deck.length);
    var card = deck[i];
    deck.splice(i, 1);
    console.log(deck.length);
    return card;
}

function shuffleDeck() {
    var i;
    var r;
    var newDeck = [];

    for (i = 0; i < 78; i++) {
        r = randomNumber(deck.length);
        newDeck.push(deck[r]);
        deck.splice(r, 1);
    }

    deck = newDeck;
    
}

function displayCard() {
    var card = drawCard();
    document.getElementById("card").innerHTML = '<img src="' + card.file + ' " /><figcaption>' + card.name + '</figcaption>'
}


sortDeck();

shuffleDeck();


