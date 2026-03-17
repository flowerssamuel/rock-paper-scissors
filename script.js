const game = document.querySelector("#game");
const results = document.querySelector("#results");
let playerScore = document.querySelector("#playerScore");
let comScore = document.querySelector("#comScore");

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
    let humanChoice = prompt("Enter Rock, Paper or Scissors");
    humanChoice = humanChoice.toUpperCase();
    return humanChoice;
};

let playGame = () => {
    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === "Rock" && computerChoice === "Scissors") {
            results.textContent = "You win! Rock beats Scissors";
            ++humanScore;
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            results.textContent = "You win! Paper beats Rock";
            ++humanScore;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            results.textContent = "You win! Scissors beats Paper";
            ++humanScore;
        } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
            results.textContent = "You lose! Rock beats Scissors";
            ++computerScore;
        } else if (computerChoice === "Paper" && humanChoice === "Rock") {
            results.textContent = "You lose! Paper beats Rock";
            ++computerScore; 
        } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
            results.textContent = "You lose! Scissors beats Paper";
            ++computerScore;
        } else if (humanChoice === computerChoice) {
            results.textContent = "It's a draw!";
        }
    };

    console.log(`The Player's Score is ${humanScore}`);
    console.log(`The Computer's Score is ${computerScore}`);
};

playGame();
