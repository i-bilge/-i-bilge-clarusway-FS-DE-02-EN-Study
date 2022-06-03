let score1 = 0;
let score2 = 0;
let winningScore = 5; //document.getElementById("winningNumber");
const btnFirstPlayer = document.getElementById("btnFirstPlayer");
const firstPlayer = document.getElementById("firstPlayer");
const btnSecondPlayer = document.getElementById("btnSecondPlayer");
const secondPlayer = document.getElementById("secondPlayer");

btnFirstPlayer.addEventListener("click", increaseScore1);
function increaseScore1(){
    if(score1 < winningScore)  score1++;
    firstPlayer.innerText = score1;
}

btnSecondPlayer.addEventListener("click", increaseScore2);
function increaseScore2() {
    if (score2 < winningScore) score2++;
    secondPlayer.innerText = score2;
}

if (score1 == winningScore) alert("First Player is winner!");
else if (score2 == winningScore) alert("Second Player is winner!");