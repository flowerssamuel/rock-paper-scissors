let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = "Rock";
    } else if (randomNumber === 1) {
        computerChoice = "Paper";
    } else 
        computerChoice = "Scissors";
    return computerChoice;
};

let getHumanChoice = () => {
    userInput = prompt("Enter Rock, Paper or Scissors");
    return userInput;
};
