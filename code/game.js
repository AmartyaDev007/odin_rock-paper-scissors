
function getComputerChoice() { 
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("rock, paper or scissors?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You won! Your choice: ${humanChoice}; Computer choice: ${computerChoice}.`);
        humanScore += 1;
    }
    else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
        console.log(`You lost! Your choice: ${humanChoice}; Computer choice: ${computerChoice}.`);
        computerScore += 1;
    }
    else {
        console.log("It's a tie for the round.");
    }


}

let humanScore = 0;
let computerScore = 0;

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);
