
// STEP 1: Write the logic to get the computer code
// create a function called "getcompChoice"
// Make "getcompChoice" randomly return the following string values: "rock", "paper", or "scissors"
// Use "console log" to test the outcomes

function getcompChoice() {
    let randomNum = Math.random();
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// STEP 2: Write the logic to get the human choice
// create a function called "getuserChoice"
// Make "getuserChoice" return one of the valid options--"rock","paper", or "scissors"--depending on what the user inputs 
// Test the function using "outcomes.textContent"


// function getuserChoice() {
//     let humanInput = prompt("Pick an option: Rock, Paper, Scissors", '');

//     if (humanInput) {
//         let humanInputLow = humanInput.toLowerCase();
//         if (humanInput === "rock") {
//             return "rock";
//         } else if (humanInput === "paper") {
//             return "paper";
//         } else if (humanInput=== "scissors") {
//             return "scissors";
//         } else {
//             return "Please enter a valid option";
//         }
//         return humanInput;
//     };
// }

// STEP 3:  the players score variables 
// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.


// STEP 4: Write the logic to play a single round 
// Create a new function named playRound.
// Define two parameters for playRound: userChoice and compChoice. Use these two parameters to take the human and computer choices as arguments.



//  function playRound(userChoice, compChoice) {

//         if (userChoice === 'rock' && compChoice === 'scissors') {
//             humanScore++;
//             outcomes.textContent(`You win! Rock beats Scissors. Score:${humanScore}:${computerScore}`);
//         } else if (userChoice === 'scissors' && compChoice === 'paper') {
//             humanScore++;
//             outcomes.textContent(`You win! Scissors beats Paper. Score:${humanScore}:${computerScore}`);
//         } else if (userChoice === 'paper' && compChoice ==='rock') {
//             humanScore++;
//             outcomes.textContent(`You win! Paper beats Rock. Score:${humanScore}:${computerScore}`);
//         } else {
//             computerScore++;
//             outcomes.textContent(`You lose! The computer wins. Score:${humanScore}:${computerScore}`);
            
//         }
//     };


// create condition for compChoice 

// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;

//     for(i = 1; i <= 5; i++) {
//         const humanSelection = getuserChoice();
//         const computerSelection = getcompChoice();
//         playRound(humanSelection, computerSelection);
// }
// if (humanScore == 3 && computerScore == 2){
//     outcomes.textContent('You win this round!');
//     } else if (humanScore == 3 && computerScore == 1){
//         outcomes.textContent('You win this round!');
//     } else if (humanScore == 3 && computerScore == 0){
//         outcomes.textContent('You win this round!');
//     } else {
//         outcomes.textContent("You lose! Computer wins.")
//     }
// };

// playGame(humanScore, computerScore);


// Make your function’s userChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to outcomes.textContent a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 1; i <= 5; i++) {
//         const humanSelection = getuserChoice();
//         const computerSelection = getcompChoice();
//         const result = playRound(humanSelection, computerSelection);

//         // Assuming playRound returns 'win', 'lose', or 'draw'
//         if (result === 'win') {
//             humanScore++;
//         } else if (result === 'lose') {
//             computerScore++;
//         }
//     }

//     const outcomes = document.getElementById('outcomes'); // Assuming there's an element with id="outcomes"

//     if (humanScore === 3 && computerScore <= 2) {
//         outcomes.textContent = 'You win this round!';
//     } else {
//         outcomes.textContent = 'You lose! Computer wins.';
//     }
// }



const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const container = document.getElementById("container")
container.style.cssText = "color: red; background: black";

const result = document.getElementById("result");
result.style.cssText = "color: gold; background: black";


rock.style.cssText = "color: yellow; background: black;";
paper.style.cssText = "color: orange; background: black;";
scissors.style.cssText = "color: red; background: black;";

// let humanScore = 0;
// let computerScore = 0;


// Find a way to iterate over the playRound function such that the game ends when the score hits 5

// Method 1: Store all of the textContent outcomes—that iterate the scores—into a variable to be called on later
// Method 2: Create parameters for the score variables to be iterated over 5 rounds. Alter the userChoice and compChoice
// parameters such they are only declared when the buttons are pressed and not in the actual function itself

let humanScore = 0;
let computerScore = 0;


function playRound(userChoice, compChoice) {
    const outcomes = document.createElement("div");
    const decision = document.createElement("div");

    if (userChoice === compChoice){
        outcomes.textContent = "it's a tie!";
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        humanScore++;
        outcomes.textContent = `You win! Rock beats Scissors. Score:${humanScore}:${computerScore}`;
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        humanScore++;
        outcomes.textContent = `You win! Scissors beats Paper. Score:${humanScore}:${computerScore}`;
    } else if (userChoice === 'paper' && compChoice ==='rock') {
        humanScore++;
        outcomes.textContent = `You win! Paper beats Rock. Score:${humanScore}:${computerScore}`;
    } else {
        computerScore++;
        outcomes.textContent = `You lose! The computer wins. Score:${humanScore}:${computerScore}`;
    }

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            decision.textContent = 'You win the game!';
        } else if (computerScore > humanScore) {
            decision.textContent = 'Computer wins the game!';
        } else {
            decision.textContent = 'It\'s a tie!';
        }
            
    };
    container.appendChild(outcomes);
    result.appendChild(decision);
};
    


rock.addEventListener("click", function() {
    const computerSelection = getcompChoice();
    playRound("rock", computerSelection);    
});

paper.addEventListener("click", function() {
    const computerSelection = getcompChoice();
    playRound("paper", computerSelection);
});

scissors.addEventListener("click", function() {
    const computerSelection = getcompChoice();
    playRound("scissors", computerSelection);
});





