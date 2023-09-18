function playRound(playerSelection, computerSelection) {
 //playerSelection = playerSelection.toLowerCase();
    //
    //playerSelection = button.innerText;

    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock beats scissors! You won!");

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors cuts paper! You won!");

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper covers rock! You won!");

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lost! Paper covers rock!");

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lost! Scissors cuts paper!");

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lost! Rock beats scissors!");

    } else if (playerSelection === computerSelection) {
        console.log("Tie!");
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

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    //console.log(button.innerText);
    button.addEventListener('click', (event) => {
        let computerSelection = getComputerChoice();
        playRound(button.innerText, computerSelection);
        console.log(computerSelection);
    });
});

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
