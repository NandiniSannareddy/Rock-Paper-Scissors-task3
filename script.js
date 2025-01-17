document.getElementById('startGame').addEventListener('click', () => {
  const playerName = document.getElementById('playerName').value.trim();
  if (playerName) {
    document.getElementById('greeting').textContent = `Welcome, ${playerName}!`;
    document.getElementById('gameBoard').classList.remove('hidden');
    document.querySelector('.input-section').classList.add('hidden');
  } else {
    alert('Please enter your name!');
  }
});

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice').forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('playerChoice').src = `${playerChoice}.jpg`;
    document.getElementById('computerChoice').src = `${computerChoice}.jpg`;

    let resultMessage = '';
    if (playerChoice === computerChoice) {
      resultMessage = "It's a Draw!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultMessage = 'You Win!';
      playerScore++;
    } else {
      resultMessage = 'You Lose!';
      computerScore++;
    }

    document.getElementById('resultMessage').textContent = resultMessage;
    document.getElementById('playerScore').textContent = `Player Score: ${playerScore}`;
    document.getElementById('computerScore').textContent = `Computer Score: ${computerScore}`;
  });
});

document.getElementById('replay').addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('playerScore').textContent = 'Player Score: 0';
  document.getElementById('computerScore').textContent = 'Computer Score: 0';
  document.getElementById('resultMessage').textContent = '';
  document.getElementById('playerChoice').src = '';
  document.getElementById('computerChoice').src = '';
});
