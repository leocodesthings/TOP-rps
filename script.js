function playRound(playerSelection, computerSelection) {
 //playerSelection = playerSelection.toLowerCase();
    //
    //playerSelection = button.innerText;
    let gameResults = document.querySelector(".results");
    let playerScore = document.querySelector(".player");
    let computerScore = document.querySelector(".computer");

    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock beats scissors! You won!");
        gameResults.textContent = "Rock beats scissors! You won!";
        playerScore.textContent = "player: 1";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors cuts paper! You won!");
        gameResults.textContent = "Scissors cuts paper! You won!";


    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper covers rock! You won!");
        gameResults.textContent = "Paper covers rock! You won!";

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lost! Paper covers rock!");
        gameResults.textContent = "You lost! Paper covers rock!";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lost! Scissors cuts paper!");
        gameResults.textContent = "You lost! Scissors cuts paper!";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lost! Rock beats scissors!");
        gameResults.textContent = "You lost! Rock beats scissors!";

    } else if (playerSelection === computerSelection) {
        console.log("Tie!");
        gameResults.textContent = "Tie!";
    }

}
// function square(number) {
//     return number * number;
// }
//
// square(5);

function getComputerChoice() {
    let range = Math.random();
    range *= 3;
    let rpsChoice = Math.floor(range);
    //let choices = ["rock", "paper", "scissors"]
    //return choices[rpsChoice]
    if (rpsChoice === 0) {
        return "rock";
    } else if (rpsChoice === 1) {
        return "paper";
    } else if (rpsChoice === 2) {
        return "scissors";
    }
}

function game() {
    for (let i = 0; i === 100; i++) {
        let playerInput = prompt("Rock, paper, or scissors?");
        playRound();
    }
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    //console.log(button.innerText);
    button.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        playRound(button.innerText, computerSelection);
        console.log(computerSelection);
    });
});

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

//const rpsChoices = ["rock", "paper", "scissors"]
