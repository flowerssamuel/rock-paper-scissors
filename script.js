let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = "ROCK";
    } else if (randomNumber === 1) {
        computerChoice = "PAPER";
    } else 
        computerChoice = "SCISSORS";
    return computerChoice;
};

let getHumanChoice = () => {
    let humanChoice = prompt("Enter Rock, Paper or Scissors");
    humanChoice = humanChoice.toUpperCase();
    return humanChoice;
};

let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
            console.log("You win! Rock beats Scissors");
            ++humanScore;
        } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
            console.log("You win! Paper beats Rock");
            ++humanScore;
        } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
            console.log("You win! Scissors beats Paper");
            ++humanScore;
        } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS"){
            console.log("You lose! Rock beats Scissors");
            ++computerScore;
        } else if (computerChoice === "PAPER" && humanChoice === "ROCK"){
            console.log("You lose! Paper beats Rock");
            ++computerScore; 
        } else if (computerChoice === "SCISSORS" && humanChoice === "PAPER"){
            console.log("You lose! Scissors beats Paper");
            ++computerScore;
        } else if (humanChoice === computerChoice) {
            console.log("It's a draw!");
        }
    };

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
};

playGame();
