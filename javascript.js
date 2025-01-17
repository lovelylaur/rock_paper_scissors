// When the console is prompted
// Generate a random number greater than or equal to 0 and less than 1
// Equate the number to a specified string
// Print the value of the string

function getComputerChoice() {
   return Math.floor(Math.random() * 3);
}

if (getComputerChoice() === 0) {
   console.log("Computer: Rock");
} else if (getComputerChoice() === 1) {
   console.log("Computer: Paper");
} else {
   console.log("Computer: Scissors");
}

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