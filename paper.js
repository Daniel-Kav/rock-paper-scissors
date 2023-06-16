
//get computer choice
function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
//compare the two players' choices and display result to user
function compareChoices(playerOne, playerTwo) {
  if (playerOne === "Rock" && playerTwo === "Scissors") {
    alert("You win!");
    } else if (playerOne === "Paper" && playerTwo === "Rocks") {
      alert("You lose");
      } else if (playerOne === "Scissors" && playerTwo === "Paper"){
        alert("You Win!")
        }else{
          alert ("It's a tie.")
          };
        }
//reset game button
function resetGame(){
  location.reload();
  }
