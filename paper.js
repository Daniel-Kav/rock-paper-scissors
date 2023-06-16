
//get computer choice
function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
//compare the two players' choices and display result to user
function playerSelection(){
  if (userInput === computerSelection){
    alert("Tie");
    document.getElementById('result').innerHTML="You tied!";
    } else if ((computerSelection ==='scissors') && (userInput==='paper')) {
      alert ("Player wins!");
      document.getElementById('result').innerHTML='Player Wins!';
      }else if((computerSelection==="rock")&&(userInput=== "scissor")) {
        alert ('Player loses!');
        document.getElementById('result').innerHTML ='Player Loses!' ;
        }else{
          alert("Player Lose!")
          document.getElementById('result').innerHTML ="Player lose!"

}
//reset game button
function resetGame(){
  location.reload();
  }

  function playRound(playerSelection, computerSelection) {
    // your code here!
    
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
