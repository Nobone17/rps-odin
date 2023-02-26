// Define variables for player score and computer score
let playerScore = 0;
let computerScore = 0;
let roundScore = 0;

// Define function to get the computer's random choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Define function to play a round
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let result;

  // Determine winner or tie
  if (playerChoice === computerChoice) {
    result = 'Tie!';
    roundScore ++;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
    playerScore++;
    roundScore ++;
  } else {
    result = 'You lose!';
    computerScore++;
    roundScore ++;
  }

  // Display result and scores in HTML
  const resultText = document.createElement('p');
  resultText.textContent = `Round ${roundScore}: You chose ${playerChoice}, computer chose ${computerChoice}. ${result} The score is ${playerScore} to ${computerScore}.`;
  document.body.appendChild(resultText);

  // Check if the game is over and display winner
  if (playerScore === 5) {
    const endText = document.createElement('h1');
    endText.textContent = 'Congratulations, you beat the computer!';
    document.body.appendChild(endText);
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;
      document.querySelectorAll('p').forEach((p) => p.remove());
      endText.remove();
      playAgainButton.remove();
      const buttons = document.querySelectorAll('.Weapon');
      buttons.forEach((button) => (button.disabled = false));
    });
    document.body.appendChild(playAgainButton);
    disableButtons();
  } else if (computerScore === 5) {
    const endText = document.createElement('h1');
    endText.textContent = 'Sorry, you lost to the computer!';
    document.body.appendChild(endText);
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;
      document.querySelectorAll('p').forEach((p) => p.remove());
      endText.remove();
      playAgainButton.remove();
      const buttons = document.querySelectorAll('.Weapon');
      buttons.forEach((button) => (button.disabled = false));
    });
    document.body.appendChild(playAgainButton);
    disableButtons();
  }
}

// Disable buttons after game over
function disableButtons() {
  const buttons = document.querySelectorAll('.Weapon');
  buttons.forEach((button) => (button.disabled = true));
}

// Attach click event listeners to buttons
const buttons = document.querySelectorAll('.Weapon');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id.toLowerCase());
  });
});
