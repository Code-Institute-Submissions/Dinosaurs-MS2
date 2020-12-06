const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let moves = 0;
let count = 0;
let counter = document.querySelector(".moves-counter");
let counter2 = document.querySelector(".count-counter");

const stars = document.querySelectorAll(".fa-star");
let starsList = document.querySelectorAll(".stars li");
let closeicon = document.querySelector(".close");
let modal = document.getElementById("popup1")

const roar = new Audio("assets/sounds/roar.mp3");
const flip = new Audio("assets/sounds/flip.mp3");
const finish = new Audio("assets/sounds/finish.mp3");

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
    countCounter();
    roar.play();
    resetBoard();
    congratulations();
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
    if (moves > 14 && moves < 22){
      for( i= 0; i < 3; i++){
          if(i > 1){
              stars[i].style.visibility = "collapse";
          }
      }
  }
  else if (moves > 23){
      for( i= 0; i < 3; i++){
          if(i > 0){
              stars[i].style.visibility = "collapse";
          }
      }
  }
    
  }
  
  function countCounter(){
    count++;
    counter2.innerHTML = count;
  }

  function congratulations(){
    if (count == 8){
        modal.classList.add("show");
        roar.pause();
        finish.play();
        var starRating = document.querySelector(".stars").innerHTML;

        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("starRating").innerHTML = starRating;

        closeModal();
    };
  }

  function closeModal(){
  closeicon.addEventListener("click", function(e){
      modal.classList.remove("show");
      restart();
  });
}

  function restart (){

    location.reload();
    return false;
  }


cards.forEach(card => card.addEventListener('click', flipCard));

