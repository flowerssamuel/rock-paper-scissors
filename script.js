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
    return humanChoice;
};

let playGame = () => {
    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log("You win! Rock beats Scissors");
            ++humanScore;
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You win! Paper beats Rock");
            ++humanScore;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log("You win! Scissors beats Paper");
            ++humanScore;
        } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
            console.log("You lose! Rock beats Scissors");
            ++computerScore;
        } else if (computerChoice === "Paper" && humanChoice === "Rock") {
            console.log("You lose! Paper beats Rock");
            ++computerScore; 
        } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
            console.log("You lose! Scissors beats Paper");
            ++computerScore;
        } else if (humanChoice === computerChoice) {
            console.log("It's a draw!");
        }
    };
    console.log(`The Player's Score is ${humanScore}`);
    console.log(`The Computer's Score is ${computerScore}`);
};

playGame();
