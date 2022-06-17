const correctAnswers = ["B", "A", "C"];

const formEl = document.querySelector("form");
const scoreBoard = document.querySelector(".score");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [formEl.q1.value, formEl.q2.value, formEl.q3.value];

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 10;
    }
  });

  scoreBoard.classList.remove("d-none");
  scoreBoard.textContent = `Your score : ${score}`;

});
