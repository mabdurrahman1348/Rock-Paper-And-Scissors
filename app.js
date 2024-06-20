// These two varibales keep track of the user and comp score
let userScore = 0;
let compScore = 0;
// This is to know which choice rock,paper or scissor is selected
const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //Generate computer choice
  const compChoice = genComputerChoice();
  console.log("comp choice = ", compChoice);
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
