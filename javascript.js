// When the console is prompted
// Generate a random number greater than or equal to 0 and less than 1
// Equate the number to a specified string
// Print the value of the string

let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
   return choices[Math.trunc(Math.random() * choices.length)];
}

console.log(getComputerChoice());

// When prompted to input a string
// The user will input "rock, "paper," or "scissors"
// Equate each input option to a console value
// Return the user's value in the console

let text = prompt("Choose rock, paper, or scissors!");

function getHumanChoice() {
   return text.toLowerCase();
}

if (getHumanChoice() === "rock") {
   console.log("You: Rock");
} else if (getHumanChoice() === "paper") {
   console.log("You: Paper");
} else if (getHumanChoice() === "scissors") {
   console.log("You: Scissors");
}

let humanScore = 0;
let computerScore = 0;

// Write a function to indicate a round played on refresh
// When the human or computer choice variable is true, incrememnt their score value by 1

function playRound(humanChoice, computerChoice) {
   //code
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

if (computerSelection === "rock" && humanSelection === "paper") {
   console.log("You win! Paper beats rock!");
} else if (computerSelection === "rock" && humanSelection === "scissors") {
   console.log("You lose! Rock beats scissors!");
} else if (computerSelection === "paper" && humanSelection === "rock") {
   console.log("You lose! Paper beats rock!");
} else if (computerSelection === "paper" && humanSelection === "scissors") {
   console.log("You win! Scissors beats paper!");
} else if (computerSelection === "scissors" && humanSelection === "rock") {
   console.log("You win! Rock beats scissors!");
} else if (computerSelection === "scissors" && humanSelection === "paper") {
   console.log("You lose! Scissors beats paper!");
} else if (computerSelection === "rock" && humanSelection === "rock") {
   console.log("Tie!");
} else if (computerSelection === "paper" && humanSelection === "paper") {
   console.log("Tie!");
} else if (computerSelection === "scissors" && humanSelection === "scissors") {
   console.log("Tie!");
}


playRound(humanSelection, computerSelection);