
// STEP 1: Write the logic to get the computer code
// create a function called "getComputerChoice"
// Make "getComputerChoice" randomly return the following string values: "rock", "paper", or "scissors"
// Use "console log" to test the results

function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 0.33) {
        return "Rock";
    } else if (randomNum < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// STEP 2: Write the logic to get the human choice
// create a function called "getHumanChoice"
// Make "getHumanChoice" return one of the valid options--"rock","paper", or "scissors"--depending on what the user inputs 
// Test the function using "console.log"


function getHumanChoice() {
    let humanInput = prompt("Pick an option: Rock, Paper, Scissors", '');
    if (humanInput === "rock") {
        return "Rock";
    } else if (humanInput === "paper") {
        return "Paper";
    } else if (humanInput === "scissors") {
        return "Scissors";
    } else {
        return "Please enter a valid option";
    }
}

// STEP 3: Declare the players score variables 
// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.


// STEP 4: Write the logic to play a single round 
// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.

let humanScore = 0;
let computerScore = 0;

 function playRound(humanChoice, computerChoice) {
        let humanChoiceLow = humanChoice.toLowerCase();
        if (humanChoiceLow === 'Rock' && computerChoice === 'Paper') {
            humanScore++;
            return `You win! Rock beats paper. Score:${humanScore}:${computerScore}`;
        } else if (humanChoice === 'Scissors' && computerChoice === 'Paper')
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

    


    // return humanChoice and computerChoice 
    // Compare choices
    // Create conditions for winning or losing 
    // increment humanScore or computerScore depending on who wins





// create condition for computerChoice 


// playRound(humanSelection, computerSelection);

// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.

// let humanChoice = humanChoice.toLowerCase();

// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

