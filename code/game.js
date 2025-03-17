
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
        console.log(`You won! Your choice: ${humanChoice}; Computer's choice: ${computerChoice}.`);
        humanScore += 1;
    }
    else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
        console.log(`You lost! Your choice: ${humanChoice}; Computer's choice: ${computerChoice}.`);
        computerScore += 1;
    }
    else {
        console.log("It's a tie for the round.");
    }
}


function playGame() {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
}

let humanScore = 0;
let computerScore = 0;


// for loop that calls playgame 5 times
for (let n = 0; n < 5; n++) {
    playGame()
}

if (humanScore > computerScore) {
    console.log(`You won the game!
        Your score: ${humanScore}
        Computer's score: ${computerScore}`)
}
else if (humanScore < computerScore) {
    console.log(`You lost the game!
        Your score: ${humanScore}
        Computer's score: ${computerScore}`)
}
else {
    console.log(`Game drawn
        Your score: ${humanScore}
        Computer's score: ${computerScore}`)
}