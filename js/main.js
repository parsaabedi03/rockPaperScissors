const shapes = ["paper", "rock", "scissors"];

let computerScore = 0;
let userScore = 0;

const checkWinner = (userInput, computer) => {
  if (userInput === computer) {
    return "Draw";
  } else if (userInput === "rock") {
    return computer === "scissors" ? "Win" : "Lose";
  } else if (userInput === "paper") {
    return computer === "rock" ? "Win" : "Lose";
  } else {
    return computer === "paper" ? "Win" : "Lose";
  }
};

const checkResult = (result) => {
  switch (result) {
    case "Draw":
      return "It's Draw";
    case "Win":
      userScore++;
      return "You Win 😀";
    default:
      computerScore++;
      return "You Lose 😪";
  }
};

const play = () => {
  const userInput = prompt("choose between Rock, Paper, Scissors", "Rock")
    ?.toLowerCase()
    .trim();

  const randomNumber = Math.floor(Math.random() * 3);
  const computer = shapes[randomNumber];

  if (!userInput || !shapes.includes(userInput)) {
    console.log("You Cheated !!!");
    return;
  } else {
    console.log(`You Choose: ${userInput}`);
    console.log(`Computer Choose: ${computer}`);
    const result = checkWinner(userInput, computer);
    console.log(checkResult(result));
    console.log(`Computer Score : ${computerScore}`);
    console.log(`Your Score : ${userScore}`);
    console.log(".....................");
  }
  if (userScore < 5 && computerScore < 5) play();
};
play();
