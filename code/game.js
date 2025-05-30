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

const currentRoundDisplay = document.querySelector("#display-crnt-rnd");
const totalRoundDisplay = document.querySelector("#display-total-rnd");

const resultFinal = document.querySelector("#results-final");

const replayButton = document.querySelector("#replay-button");

promptPlayConfirmBtn.addEventListener("click", () => {
    if (isNaN(Number(roundNumInput.value)) || roundNumInput.value > 10 || roundNumInput.value < 1) {
        alert("Max. allowed rounds is 10.");
        return;
    }

    promptGameSection.style.display = 'none';
    mainGameSection.style.display = 'block';

    totalRounds = parseInt(roundNumInput.value);

    totalRoundDisplay.textContent = totalRounds;

});


const currentRoundWinner = document.querySelector("#who-won");

function displayResult() { 
    if (humanScore > computerScore) {
        resultFinal.textContent = "Congratulations! You won the game!";
    }
    else if (humanScore < computerScore) {
        resultFinal.textContent = "You lost the game!";
    }
    else {
        resultFinal.textContent = "Game Drawn!";
    }
}

function playRound(humanChoice, computerChoice) {


    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        playerScoreSpan.textContent = humanScore;
        currentRoundWinner.textContent = "YOU WON THE ROUND!";
    }
    else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
        computerScore += 1;
        computerScoreSpan.textContent = computerScore;
        currentRoundWinner.textContent = "YOU LOST THE ROUND!";
    }
    else {
        console.log("It's a tie for the round.");
        currentRoundWinner.textContent = "It's a tie for the round.";
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

allPlayerChoices.addEventListener('click', (event) => {

    let target = event.target.closest('button');

    let playerActualChoice;
    switch(target.id) {
        case 'rock':
            playerActualChoice = "rock";
            break;
        case 'paper':
            playerActualChoice = "paper";
            break;
        case 'scissors':
            playerActualChoice = "scissors";
            break;
        default:
            return; 
    }

    humanChoice = playerActualChoice; 

    computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice); 

    if (roundTracker >= totalRounds) {

        allPlayerChoices.style.display = 'none';
        pickYourChoiceTxt.style.display = 'none';
        resultDisplay.style.display = 'block';
        playAgainPrompt.style.display = 'block';
        displayResult();
    } else {
        roundTracker++;
        currentRoundDisplay.textContent = roundTracker;
    }
});

replayButton.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    humanChoice = null;
    computerChoice = null;
    roundTracker = 1;
    totalRounds = null;

    playerScoreSpan.textContent = '0';
    computerScoreSpan.textContent = '0';
    currentRoundDisplay.textContent = '1';
    totalRoundDisplay.textContent = '';
    currentRoundWinner.textContent = 'Pick your choice:';
    resultFinal.textContent = '';

    roundNumInput.value = '';


    resultDisplay.style.display = 'none';
    playAgainPrompt.style.display = 'none';
    promptGameSection.style.display = 'block';
    mainGameSection.style.display = 'none';
    allPlayerChoices.style.display = 'block';
    pickYourChoiceTxt.style.display = 'block';

})