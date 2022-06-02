let score1 = 0;
let winningScore = 5;

const btnFirstPlayer = document.getElementById("btnFirstPlayer");
const firstPlayer = document.getElementById("firstPlayer");

btnFirstPlayer.addEventListener("click", increaseScore1);


function increaseScore1(){
    if(score1 < winningScore)  score1++;
    firstPlayer.innerText = score1;
}