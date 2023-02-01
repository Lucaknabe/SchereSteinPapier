import './style.css'

const Schere = document.getElementById("Schere").addEventListener("click", function () {
  playRound(0);
});
const Stein = document.getElementById("Stein").addEventListener("click", function() { 
  playRound(1);
});
const Papier = document.getElementById("Papier").addEventListener("click", function() {
  playRound(2);
});





function playRound(spielerEingabe) {
  var randomNumber = getRandomInt(3);
  console.log(randomNumber);
  if (randomNumber === 0) {
    console.log("Gegner hat Schere gewählt");
    document.getElementById("wahl").innerHTML = "Gegner hat Schere gewählt"
  }
  else if (randomNumber === 1) {
    console.log("Gegner hat Stein gewählt");
    document.getElementById("wahl").innerHTML = "Gegner hat Stein gewählt"
  }

  else if (randomNumber === 2) {
    console.log("Gegner hat Papier gewählt");
    document.getElementById("wahl").innerHTML = "Gegner hat Papier gewählt"
  }

  else {
    console.log("Unerwarteter Fehler");
  }

  if (randomNumber === spielerEingabe){
    console.log("Unentschieden!")
    document.getElementById("gewinner").innerHTML = "Unentschieden"
  }
  else if((randomNumber === 0 && spielerEingabe === 1) || (randomNumber === 1 && spielerEingabe === 2) || (randomNumber === 2 && spielerEingabe === 0)   ) {
    console.log("Du hast gewonnen!");
    document.getElementById("gewinner").innerHTML = "Du hast gewonnen"
  } 
  else {
    console.log("Computer hat gewonnen!")
    document.getElementById("gewinner").innerHTML = "Computer hat gewonnen"
  }
  
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



