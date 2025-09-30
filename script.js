
// STEP 1: Write the logic to get the computer code
// create a function called "getComputerChoice"
// Make "getComputerChoice" randomly return the following string values: "rock", "paper", or "scissors"
// Use "console log" to test the results

function getComputerChoice() {
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
// create a function called "getHumanChoice"
// Make "getHumanChoice" return one of the valid options--"rock","paper", or "scissors"--depending on what the user inputs 
// Test the function using "results.textContent"


// function getHumanChoice() {
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
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.



//  function playRound(humanChoice, computerChoice) {

//         if (humanChoice === 'rock' && computerChoice === 'scissors') {
//             humanScore++;
//             results.textContent(`You win! Rock beats Scissors. Score:${humanScore}:${computerScore}`);
//         } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
//             humanScore++;
//             results.textContent(`You win! Scissors beats Paper. Score:${humanScore}:${computerScore}`);
//         } else if (humanChoice === 'paper' && computerChoice ==='rock') {
//             humanScore++;
//             results.textContent(`You win! Paper beats Rock. Score:${humanScore}:${computerScore}`);
//         } else {
//             computerScore++;
//             results.textContent(`You lose! The computer wins. Score:${humanScore}:${computerScore}`);
            
//         }
//     };


// create condition for computerChoice 

// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;

//     for(i = 1; i <= 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
// }
// if (humanScore == 3 && computerScore == 2){
//     results.textContent('You win this round!');
//     } else if (humanScore == 3 && computerScore == 1){
//         results.textContent('You win this round!');
//     } else if (humanScore == 3 && computerScore == 0){
//         results.textContent('You win this round!');
//     } else {
//         results.textContent("You lose! Computer wins.")
//     }
// };

// playGame(humanScore, computerScore);


// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to results.textContent a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 1; i <= 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         const result = playRound(humanSelection, computerSelection);

//         // Assuming playRound returns 'win', 'lose', or 'draw'
//         if (result === 'win') {
//             humanScore++;
//         } else if (result === 'lose') {
//             computerScore++;
//         }
//     }

//     const results = document.getElementById('results'); // Assuming there's an element with id="results"

//     if (humanScore === 3 && computerScore <= 2) {
//         results.textContent = 'You win this round!';
//     } else {
//         results.textContent = 'You lose! Computer wins.';
//     }
// }



const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const container = document.getElementById("container")
container.style.cssText = "color: red; background: black";


rock.style.cssText = "color: yellow; background: black;";
paper.style.cssText = "color: orange; background: black;";
scissors.style.cssText = "color: red; background: black;";

let humanScore = 0;
let computerScore = 0;

 function playRound(humanChoice, computerChoice) {
    const results = document.createElement("div");

        if (humanChoice === computerChoice){
            results.textContent = "it's a tie!";
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
            results.textContent = `You win! Rock beats Scissors. Score:${humanScore}:${computerScore}`;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            results.textContent = `You win! Scissors beats Paper. Score:${humanScore}:${computerScore}`;
        } else if (humanChoice === 'paper' && computerChoice ==='rock') {
            humanScore++;
            results.textContent = `You win! Paper beats Rock. Score:${humanScore}:${computerScore}`;
        } else {
            computerScore++;
            results.textContent = `You lose! The computer wins. Score:${humanScore}:${computerScore}`;
            
        }

    container.appendChild(results);
};

// function playGame (){
//     const decision = document.createElement("div");

//     for (let i = 0; i <= 5; i++){
//         let userScore = 0
//         let compScore = 0
//         playRound(humanSelection, computerSelection);

//         if (userScore === 3 && compScore <= 2) {
//             decision.textContent = 'You win this round!';
//         } else {
//             decision.textContent = 'You lose! Computer wins.';
//         }
//     };

//     container.appendChild(decision);
// }

for (let i = 0; i <= 5; i++){
    rock.addEventListener("click", function() {
        let humanSelection = "rock";
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    });
};

paper.addEventListener("click", function() {
    let humanSelection = "paper";
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});

scissors.addEventListener("click", function() {
    let humanSelection = "scissors";
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});


