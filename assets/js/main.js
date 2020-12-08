// Variable to select cards on game
const cards = document.querySelectorAll('.memory-card');
// Variables for card status and to stop cards being flipped again once matched
let hasFlippedCard = false;
let lockBoard = false;
// Card Variables
let firstCard,
    secondCard;
// Moves and Count variables to saim at the counters on the game page to show the user how many moves and matches
let moves = 0;
let count = 0;
let counter = document.querySelector(".moves-counter");
let counter2 = document.querySelector(".count-counter");
// Stars variable to show the users star rating as playing
const stars = document.querySelectorAll(".fa-star");
let starsList = document.querySelectorAll(".stars li");
// Variables for Modal when game is complete
let closeicon = document.querySelector(".close");
let modal = document.getElementById("popup1")
// Sound Variables
const roar = new Audio("assets/sounds/roar.mp3");
const flip = new Audio("assets/sounds/flip.mp3");
const finish = new Audio("assets/sounds/finish.mp3");
// Store in Local Storage variable to pull back information when required
const getMoves = localStorage.getItem('moves')+1
// Function when the card is flipped, checks to see if the card has already been flipped, if its the first card and adds the class flip.
// Then runs the the match against the the second card flip and increases the move counter which are both seprate fucntions that are called.
function flipCard() {
    if (lockBoard) 
        return;
    if (this === firstCard) 
        return;
    flip.play();
    this
        .classList
        .add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
    moveCounter();

}
// Checks both cards for a match
function checkForMatch() {

    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch
        ? disableCards()  // Disables the cards if they have been matched
        : unflipCards(); // turns the cards back round if they dont match

}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    countCounter(); // increases the match counter by one when the cards match
    roar.play(); // Plays the dinosaur roar when there is a match
    resetBoard(); // Disables both cards from being turned again
    localStorage.setItem = ('moves')+1  // sets scored in local storage
    congrats(); // when 8 matches have been completed bring up the congrats modal
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard
            .classList
            .remove('flip');
        secondCard
            .classList
            .remove('flip');
        resetBoard();
    }, 1200);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 16); // Maths for shuffling the cards for each game
        card.style.order = ramdomPos;
    });
})();

function moveCounter() { // moves counter increases by one for each turn of two cards
    moves++;
    counter.innerHTML = moves;
    if (moves > 14 && moves < 22) { // stars rating based on 14 and below 3 stars, 15 and 22 moves two stars and over 23 moves 1 star
        for (i = 0; i < 3; i++) {
            if (i > 1) {
                stars[i].style.visibility = "collapse";
            }
        }
    } else if (moves > 23) {
        for (i = 0; i < 3; i++) {
            if (i > 0) {
                stars[i].style.visibility = "collapse";
            }
        }
    }

}

function countCounter() { // counts the matches to work out when the modal should be displayed
    count++;
    counter2.innerHTML = count;
}

function congrats() { // congrats modal, displays when matches = 8
    if (count == 8) {
        modal
            .classList
            .add("show");
        roar.pause();
        finish.play();
        

        var starRating = document
            .querySelector(".stars")
            .innerHTML;

        document
            .getElementById("finalMove")
            .innerHTML = moves + 1; // moves was showing 1 less on the board compared to modal so i added 1 to match.
        document
            .getElementById("starRating")
            .innerHTML = starRating;

        closeModal();
    };
}

function closeModal() { // close modal button
    closeicon.addEventListener("click", function (e) {
        modal
            .classList
            .remove("show");
        restart();
    });
}

function restart() { // reloads the page to reset all settings on click of restart button

    location.reload();
    return false;
}

cards.forEach(card => card.addEventListener('click', flipCard));
