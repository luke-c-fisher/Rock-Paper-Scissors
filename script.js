
// STEP 1: Write the logic to get the computer code

// create a function called "getComputerChoice"
// Make "getComputerChoice" randomly return the following string values: "rock", "paper", or "scissors"
// Use "console log" to test the results

function getComputerChoice() {
    return Math.random();
}

if (getComputerChoice() > 0.5) {
    alert("Rock");
} else if (getComputerChoice < 0.5) {
    alert("Paper");
} else {
    alert("Scissors");
}

// STEP 2: Write the logic to get the human choice

// create a function called "getHumanChoice"
// Make "getHumanChoice" return one of the valid options--"rock","paper", or "scissors"--depending on what the user inputs 
// Test the function using "console.log"

let humanInput = prompt("Pick an option", 1);

if (humanInput > 1) {
    function getHumanChoice() {
        alert("Rock");
    } 
}  else if (humanInput < 1) {
        function getHumanChoice() {
            alert("Paper");
        }
    } else {
            function getHumanChoice() {
            alert("Scissors");
            }
        }

console.log(getHumanChoice(1));



// STEP 3: Declare the players score variables 

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

// STEP 4: Write the logic to play a single round 

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.