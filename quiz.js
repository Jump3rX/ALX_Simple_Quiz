var submitAnswerBtn = document.getElementById("submit-answer");
var feedbackInput = document.getElementById("feedback");
function checkAnswer() {
  let correctAnswer = "4";
  let checkedRadio = document.querySelector("input[name='quiz']:checked");
  let userAnswer = checkedRadio.value;
  if (userAnswer == correctAnswer) {
    feedbackInput.textContent = "Correct! Well done.";
  } else {
    feedbackInput.textContent = "That's incorrect. Try again!";
  }
}
submitAnswerBtn.addEventListener("click", checkAnswer);
