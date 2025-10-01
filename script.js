
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





