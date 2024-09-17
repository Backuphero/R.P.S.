const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput
} else {
    console.log ('Error, please select Rock, Paper or Scisors');
    }
}
// console.log (getUserChoice('rock'));

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() *3);
switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
 }
};

// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return "Booms always win!! (/-.-)/"
    }

    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, Computer won!';
        } else {
            return "You Won!";
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, Computer won!';
        } else {
            return "You Won!";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, Computer won!';
        } else {
            return "You Won!";
        }
    }

};

// console.log(determineWinner('rock', 'scissors'));

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('you used: ' + userChoice);
    console.log('Computer used: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));

};

playGame();
