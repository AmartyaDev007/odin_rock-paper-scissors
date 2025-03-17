
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

let computer_result = getComputerChoice();
let human_result = getHumanChoice();

let humanScore = 0;
let computerScore = 0;