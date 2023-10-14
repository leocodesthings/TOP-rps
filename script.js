let computerScoreNumber = 0;
let playerScoreNumber = 0;
function playRound(playerSelection, computerSelection) {
    //playerSelection = playerSelection.toLowerCase();
    //
    //playerSelection = button.innerText;
    let gameResults = document.querySelector(".results");
    let playerScore = document.querySelector(".player");
    let computerScore = document.querySelector(".computer");
    // let computerScoreNumber = 0; // having the number variables within the function will set the initial score number back to 0
    // let playerScoreNumber = 0; //

    //for (let computerScoreNumber = 0; computerScoreNumber <= 100; computerScoreNumber++) {
        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScoreNumber += 1;
            let computerScoreString = String(computerScoreNumber);
            console.log("You lost! Paper covers rock!");
            //refactor: "You lost! (winString) beats (loseString)"
            gameResults.textContent = "You lost! Paper covers rock!";
            computerScore.textContent = "Computer: " + `${computerScoreString}`;

        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScoreNumber += 1;
            let computerScoreString = String(computerScoreNumber);
            console.log("You lost! Scissors cuts paper!");
            gameResults.textContent = "You lost! Scissors cuts paper!";
            computerScore.textContent = "Computer: " + `${computerScoreString}`;

        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScoreNumber += 1;
            console.log("You lost! Rock beats scissors!");
            gameResults.textContent = "You lost! Rock beats scissors!";

            let computerScoreString = String(computerScoreNumber);
            computerScore.textContent = "Computer: " + `${computerScoreString}`;

            //} else

            //for (let playerScoreNumber = 0; playerScoreNumber <= 100; playerScoreNumber++) {
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScoreNumber += 1;
                console.log("Rock beats scissors! You won!");
                gameResults.textContent = "Rock beats scissors! You won!";
                let playerScoreString = String(playerScoreNumber);
                playerScore.textContent = "Player: " + `${playerScoreString}`;

        } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScoreNumber += 1;
                console.log("Scissors cuts paper! You won!");
                gameResults.textContent = "Scissors cuts paper! You won!";
                let playerScoreString = String(playerScoreNumber);
                playerScore.textContent = "Player: " + `${playerScoreString}`;

        } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScoreNumber += 1;
                console.log("Paper covers rock! You won!");
                gameResults.textContent = "Paper covers rock! You won!";

                let playerScoreString = String(playerScoreNumber);
                playerScore.textContent = "Player: " + `${playerScoreString}`;

        } else if (playerSelection === computerSelection) {
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


// //draft refactor of determining winner of round
// function playRound() {
//     if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === ||) {
//         return "winner";
//     }
// }

    // if (playerScoreNumber === 5 || computerScoreNumber === 5) {
    //     let winnerString =
    //     gameResults.textContent = `${winnerString}`+ "won, play again?";
    // }

// function game() {
//     for (let i = 0; i === 100; i++) {
//         //let playerInput = prompt("Rock, paper, or scissors?");
//         playRound();
//     }
// }
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