
//get computer choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

function checkwinner(playerselection , computerselection){
  if (computerselection === playerselection) {
    console.log('tie');
  }
  else if{
    //check winner
    (playerselection == "Rock" && computerselection == "Scissors") ||
    (playerselection == "Paper" && computerselection == "Rock") ||
    (playerselection == "Scissors" && computerselection == "Paper");
    return "Player"
  }
  else{
    return "Computer"
  }

}

function playround(playerselection ,computerselection){
  const result = checkwinner(playerselection,computerselection)
  if (result == "Tie"){
    return "It is a Tie"
  }
  else if(result == 'Player'){
    return 'You Win!'
  }
  else{
    return 'You Lose'
  }

console.log(getComputerChoice())
console.log ('run')
