const choices = ["rock", "paper", "scissors"];
const winner = [];

function game(){
  for (let i = 0; i <=5; i++){
    playRound();
  }
  logWins();
}

function playRound(){
  const playerSelection = playerChoice();
  console.log(playerChoice);
  const computerSelection = computerChoice();
  const winner = checkWinner;
  winners.push(winner);
}

function playerChoice(){
  let input = prompt('Enter Rock, Paper, or Scissors');
  while(input == null){
    input = prompt('Enter Rock, Paper, or Scissors');
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false){
    input = prompt(
      'Type rock, paper, or scissors, spelling matters, capitalization does not!'
    );
    while (input == null){
      input = prompt("Enter rock, paper, or scissors");
    } 
    input = input.toLowerCase
    check = validateInput(input);
  }
 return(input);
}

function computerChoice(){
  return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
  if (choices.includes(choice));
  }

  function checkWinner(plChoice, coChoice){
    if(plChoice === coChoice){
      return 'Tie';
      }else if((plChoice === 'rock' && coChoice === 'scissors') ||
      (plChoice === 'scissors' && coChoice === 'paper') ||
      (plChoice === 'paper' && coChoice === 'rock')) {
      return 'Win';
      }else{
        return 'Loss'
      }
    }

function logWins(){
  console.log(winners);
}

game();