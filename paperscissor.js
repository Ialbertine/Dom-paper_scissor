const Btns = document.querySelectorAll("button");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const result = document.querySelector("#result");

let userScoreNumber = 0;
let computerScoreNumber = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

Btns.forEach((button) => {
    button.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        const userChoice = button.id;
        const resultSticker = playRound(userChoice, computerChoice);
        result.textContent = resultSticker;
    });
});

function playRound(userSelection, computerSelection) {
    const choicesText = {
        "rock": "rock",
        "paper": "paper",
        "scissors": "scissors"
    };
    
    const userChoiceText = choicesText[userSelection];
    const computerChoiceText = choicesText[computerSelection];
    
    if (userSelection === computerSelection) {
        return "It's a tie! Both chose " + userChoiceText + ".";
    } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")
    ) {
        userScoreNumber++;
        userScore.textContent = userScoreNumber;
        return "You win! You chose " + userChoiceText + " and computer chose " + computerChoiceText + ".";
    } else {
        computerScoreNumber++;
        computerScore.textContent = computerScoreNumber;
        return "You lose! You chose " + userChoiceText + " and computer chose " + computerChoiceText + ".";
    }
}



















/*const Btns = document.querySelectorAll("button");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const result = document.querySelector("#result");

let userScoreNumber = 0;
let computerScoreNumber = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

Btns.forEach((button) => {
    button.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        const resultSticker = playRound(button.id, computerChoice);
        result.textContent = resultSticker;
    });
});

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")
    ) {
        userScoreNumber++;
        userScore.textContent = userScoreNumber;
        return "You win! " + userSelection + " beats " + computerSelection;
    } else {
        computerScoreNumber++;
        computerScore.textContent = computerScoreNumber;
        return "You lose! " + computerSelection + " beats " + userSelection;
    }
}
*/
