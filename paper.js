
//get computer choice
function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }


console.log(getComputerChoice())
console.log ('run')