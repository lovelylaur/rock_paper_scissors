// When the console is prompted
// Generate a random number greater than or equal to 0 and less than 1
// Equate the number to a specified string
// Print the value of the string

function getComputerChoice() {
   return Math.floor(Math.random() * 3);
}

if (getComputerChoice() === 0) {
   console.log("Rock");
} else if (getComputerChoice() === 1) {
   console.log("Paper");
} else {
   console.log("Scissors");
}