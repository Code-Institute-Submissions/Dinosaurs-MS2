const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let moves = 0;
let counter = document.querySelector(".moves-counter");

const roar = new Audio("assets/sounds/roar.mp3");
const flip = new Audio("assets/sounds/flip.mp3");

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  flip.play();
  this.classList.add('flip');
  

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
    }
 
    secondCard = this;
    
    checkForMatch();
    moveCounter();
    
    
  }
 
  function checkForMatch() {
      
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
    
  }
 
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    roar.play();
    resetBoard();
  }
 
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetBoard();
    }, 1000);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 16);
      card.style.order = ramdomPos;
    });
  })();

  function moveCounter(){
    moves++;
    counter.innerHTML = moves;
  }


  function restart (){

    location.reload();
    return false;
  }


cards.forEach(card => card.addEventListener('click', flipCard));