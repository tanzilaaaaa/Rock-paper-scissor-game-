const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    userChoiceDisplay.textContent = `You chose: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
    winnerDisplay.textContent = winner;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}