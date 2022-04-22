let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//return interger from 0 - 9 for target number
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    //determine which player wins based on nearest to targetGuess
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference; //if equal or less than computerDifference, human wins
}

//update score depending on the winner 
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

//advanced and update round 
const advanceRound = () => currentRoundNumber++;