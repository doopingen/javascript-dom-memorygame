//Define cards

var cardDiv = document.getElementById("game-board");
var imgIndex = document.getElementsByTagName("img");
var totalMoves = 0;
var totalSuccessPairs = 0;

const cards = [{
    rank: "queen",
    suit: "hearts",
    cardFront: "images/queen-of-hearts.png",
},{
    rank: "queen",
    suit: "diamonds",
    cardFront: "images/queen-of-diamonds.png",
},{
    rank: "king",
    suit: "hearts",
    cardFront: "images/king-of-hearts.png",
},{
    rank: "king",
    suit: "diamonds",
    cardFront: "images/king-of-diamonds.png",
}];

const cardsInPlay = [];

function createBoard(){
    for (i = 0; i < cards.length; i++){
        cardElement(i);
        flipCard(i);
    }
}

function cardElement(num){
    var newImgItem = document.createElement("img");
    newImgItem.setAttribute("src", "images/back.png");
    newImgItem.setAttribute("data-id", num);
    newImgItem.setAttribute("class", "card");
    cardDiv.appendChild(newImgItem);
}

function flipCard(num){
    imgIndex[num].onclick = function(){
        imgIndex[num].src = cards[num].cardFront;
        cardsInPlay.unshift(cards[num].rank);
        totalMoves++;
        checkForMatch()
    }
}

function checkForMatch(){
    if ((totalMoves % 2 === 0) && (cardsInPlay[0] === cardsInPlay[1] && totalSuccessPairs === 0)) {
        alert("It's a match!");
        totalSuccessPairs++;
      } else if (totalMoves % 2 === 0 && cardsInPlay[0] !== cardsInPlay[1]) {
          alert("Sorry, try again");
          imgIndex[0].setAttribute("src", "images/back.png");
          imgIndex[1].setAttribute("src", "images/back.png");    
          imgIndex[2].setAttribute("src", "images/back.png");   
          imgIndex[3].setAttribute("src", "images/back.png"); 
      } else if ((totalMoves % 2 === 0) && (totalSuccessPairs === 1)){
        var newGame = confirm("New Game?");  
        if (newGame == true){
            totalMoves = 0;
            totalSuccessPairs = 0;              
            imgIndex[0].setAttribute("src", "images/back.png");
            imgIndex[1].setAttribute("src", "images/back.png");    
            imgIndex[2].setAttribute("src", "images/back.png");   
            imgIndex[3].setAttribute("src", "images/back.png");  
            shuffle(cards);          
        }else {
            alert("Thanks for Playing! Please refresh browser to play again")
        }
      }
}

function shuffle(arr){
    var arrayLength = arr.length, randomNum, tempArray;
    while (arrayLength !== 0){
      randomNum = Math.floor(Math.random() * arrayLength);
      arrayLength -= 1;
      tempArray = arr[arrayLength];
      arr[arrayLength] = arr[randomNum];
      arr[randomNum] = tempArray;
    }
}

createBoard();
shuffle(cards);












