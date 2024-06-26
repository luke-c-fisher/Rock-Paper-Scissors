
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

console.log(getComputerChoice());

// Example usage


// STEP 2: Write the logic to get the human choice

// create a function called "getHumanChoice"
// Make "getHumanChoice" return one of the valid options--"rock","paper", or "scissors"--depending on what the user inputs 
// Test the function using "console.log"


function getHumanChoice() {
    let humanInput = prompt("Pick an option: Rock, Paper, Scissors", '');
    if (humanInput.toLowerCase() === "rock") {
        alert("Rock");
    } else if (humanInput.toLowerCase() === "paper") {
        alert("Paper");
    } else if (humanInput.toLowerCase() === "scissors") {
        alert("Scissors");
    } else {
        alert("Please enter a valid option");
    }
}
console.log(getHumanChoice());

// Call the function to show the alert based on user input
getHumanChoice();







// STEP 3: Declare the players score variables 

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

let humanScore = 0;
let computerScore = 0;

// STEP 4: Write the logic to play a single round 

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.

 function playRound(humanChoice, computerChoice) {
        let choices = ["Rock", "Paper", "Scissors"];
        let indexHum = choices.indexOf(humanChoice);
        let indexCom = choices.indexOf(computerChoice);
        if (indexHum === -1 || indexCom === -1) {
            return "invalid choices";
        }
        if (indexHum === indexCom) {
            return("It's a tie!");
        } else if (indexHum === 0 && indexCom === 2) {
            humanScore++;
            return "You win! Rock beats scissors.";
        } else if (indexHum === 1 && indexCom === 0) {
            humanScore++;
            return "You win! Paper beats rock.";
        } else if (indexHum === 2 && indexCom === 1) {
            humanScore++;
            return "You win! Scissors beats paper.";
        } else {
            computerScore++;
            return "You lose! Computer wins."
        }
    }
    // return humanChoice and computerChoice 
    // Compare choices
    // Create conditions for winning or losing 
    // increment humanScore or computerScore depending on who wins




    // console.log(compare(numA, numB));

    // let bScore = 0;
    // let aScore = 0;  

    // function compare(choiceA, choiceB) {
        // let choices = ["Rock", "Paper", "Scissors"];
        // let indexA = choices.indexOf(choiceA);
        // let indexB = choices.indexOf(choiceB);
        // 
        // if (indexA === -1 || indexB === -1) {
            // return "invalid choices";
        // }
        // if (indexA === indexB) {
            // return("It's a tie!");
        // } else if (indexA === 0 && indexB === 2) {
            // aScore++;
            // return "You win! Rock beats paper";
        //} else if (indexA === 1 && indexB === 0) {
            // aScore
        }

        // }
        // 
        
    // }


    // **Example code**




// create condition for computerChoice 


// playRound(humanSelection, computerSelection);

// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.

// let humanChoice = humanChoice.toLowerCase();

// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

