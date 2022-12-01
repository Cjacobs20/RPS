const choices = ["rock", "paper", "scissors"];
const winners = [];

function game(){
  for (let i = 0; i <=4; i++){
    playRound(i);
  }
  logWins();
}

function playRound(round){
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  console.log(playerSelection);
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
  return choices[Math.floor(Math.random()*choices.length)];
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
  let playerWins = winners.filter((item)=>item == 'Win').length;
  let computerWins =  winners.filter((item)=>item =='Loss').length;
  let ties = winners.filter((item)=>item =='Tie').length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "Won the Round");
  console.log("-------------------------------");
}

game();