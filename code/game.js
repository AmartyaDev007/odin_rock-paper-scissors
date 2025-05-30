let humanScore = 0;
let computerScore = 0;
let humanChoice = null;
let computerChoice = null;
let roundTracker = 1;
let totalRounds = null;

const promptPlayConfirmBtn = document.querySelector("#play-btn");
const roundNumInput = document.querySelector("#roundInput")

const promptGameSection = document.querySelector(".prompt-rounds");
const mainGameSection = document.querySelector(".main-game");

const allPlayerChoices = document.querySelector(".all-buttons");
const pickYourChoiceTxt = document.querySelector(".choice-text");

const resultDisplay = document.querySelector(".results-display");
const playAgainPrompt = document.querySelector(".replay-game");


const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");



promptPlayConfirmBtn.addEventListener("click", () => {
    if (isNaN(Number(roundNumInput.value)) || roundNumInput.value > 10 || roundNumInput.value < 1) {
        alert("Max. allowed rounds is 10.");
        return;
    }

    promptGameSection.style.display = 'none';
    mainGameSection.style.display = 'block';
    totalRounds = parseInt(roundNumInput.value);
    console.log(round);
});






function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        playerScoreSpan.textContent = humanScore;
    }
    else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
        computerScore += 1;
        computerScoreSpan.textContent = computerScore;
    }
    else {
        console.log("It's a tie for the round.");
    }
    console.log(roundTracker);
}


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


function checkRoundOverflow() { 
    if (roundTracker >= round) {
        allPlayerChoices.style.display = 'none';
        pickYourChoiceTxt.style.display = 'none';

        resultDisplay.style.display = 'block';
        playAgainPrompt.style.display = 'block';
        return true;
    }
    return false;
}


function getPlayerChoice(target) {

    switch(target.id) {
        
        case 'rock':
            humanChoice = "rock";
            roundTracker += 1;
            break;

        case 'paper':
            humanChoice = "paper";
            roundTracker += 1;
            break;

        case 'scissors':
            humanChoice = "scissors";
            roundTracker += 1;
            break;
    }
    playRound(humanChoice, computerChoice);
}


allPlayerChoices.addEventListener('click', (event) => {
    
    let target = event.target.closest('button');

    computerChoice = getComputerChoice();

    if (checkRoundOverflow() == false) {
        getPlayerChoice(target);
    }

})

// here is where you will add result reset :) 

// add divs for , current round , total rounds and result of the current round : ) 






