/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
var diceDOM = document.querySelector(".dice");
var btnRoll = document.querySelector(".btn-roll");
var btnHold = document.querySelector(".btn-hold");

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// document.querySelector("#current-" + activePlayer).innerHTML =
//   "<em>" + dice + "</em>";

document.querySelector(".dice").style.display = "none";

//Button 'ROLL DICE' functionality
btnRoll.addEventListener("click", () => {
  //Random number from 1 to 6

  var dice = Math.floor(Math.random() * 6) + 1;
  var currentScore = document.getElementById("current-" + activePlayer);

  //Display the result

  currentScore.textContent = dice;
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  //Update the round score only IF the dice is bigger than 1
  if (dice > 1) {
    //Add score to the global score
    roundScore += dice;
    currentScore.textContent = roundScore;
  } else {
    //Set the gobal score of the player that rolls to zero
    //  if(activePlayer === 0){
    //      activePlayer = 1;
    //  }else{
    //      activePlayer = 0;
    //  }
    // The next line does the same as the previous if statement it's called ternary operator
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDOM.style.display = "none";
  }
});
