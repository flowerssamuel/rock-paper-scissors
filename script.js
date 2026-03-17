const game = document.querySelector("#game");
const results = document.querySelector("#results");
const playerScore = document.createElement("div");
const comScore = document.createElement("div");

let humanScore = 0;
let computerScore = 0;
let displayResults = () => {
    playerScore.textContent= `The Player's Score is ${humanScore}`;
    comScore.textContent= `The Computer's Score is ${computerScore}`;
    results.appendChild(playerScore);
    results.appendChild(comScore); 
};

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

let playRound = (humanChoice, computerChoice) => {    
    if(humanScore === 5) {
        computerScore = 0;
        humanScore = 0;
        results.textContent = "You win!";
    } else if (computerScore === 5) {
        computerScore = 0;
        humanScore = 0;
        results.textContent = "You lose!";
    } else {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        results.textContent = "You win! Rock beats Scissors";
        ++humanScore;
        displayResults();
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        results.textContent = "You win! Paper beats Rock";
        ++humanScore;
        displayResults();      
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        results.textContent = "You win! Scissors beats Paper";
        ++humanScore;
        displayResults();      
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        results.textContent = "You lose! Rock beats Scissors";
        ++computerScore;
        displayResults();      
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        results.textContent = "You lose! Paper beats Rock";
        ++computerScore; 
        displayResults();      
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        results.textContent = "You lose! Scissors beats Paper";
        ++computerScore;
        displayResults();      
    } else if (humanChoice === computerChoice) {
        results.textContent = "It's a draw!";
        displayResults();      
    }}
};


let playGame = game.addEventListener("click", (event) => {
    let target = event.target;
    let playerSelection; 
    let computerSelection = getComputerChoice();

    switch(target.id) {
        case 'Rock':
            playerSelection = "Rock";
            playRound (playerSelection, computerSelection);
            playerScore.textContent= `The Player's Score is ${humanScore}`;
            comScore.textContent= `The Computer's Score is ${computerScore}`;
            break;
        case 'Paper':
            playerSelection = "Paper";
            playRound (playerSelection, computerSelection);
            playerScore.textContent= `The Player's Score is ${humanScore}`;
            comScore.textContent= `The Computer's Score is ${computerScore}`;
            break;
        case 'Scissors':
            playerSelection = "Scissors";
            playRound (playerSelection, computerSelection);
            playerScore.textContent= `The Player's Score is ${humanScore}`;
            comScore.textContent= `The Computer's Score is ${computerScore}`;
            break;
    };
});



    


