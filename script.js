var rollDice = Math.round(Math.random() * (6 - 1) + 1);
const btnRoll = document.getElementById('add');
var resultRound = document.getElementById('round');
const btnHold = document.getElementById('hold');
var resultGlobal = document.getElementById('global');
var resultRounded = document.getElementById('rounded');
var resultGlobaled = document.getElementById('globaled');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

//Changement de joueur symbolisé par le point rouge
$( "#hold" ).click(function() {
  $( "#player1" ).toggle();
    $( "#player2" ).toggle();
});

//Lancé du dé et affectation de la valeur de sortie au score courant pour chaque joueur 
function add(){

  if(player1.style.display==="inline-block"){
    let round = parseInt(resultRound.innerText);
      let rollDice = (Math.round(Math.random() * (6 - 1) + 1));
        if(rollDice!=1){
          let roundTotal = round + rollDice;
          resultRound.innerText = roundTotal;
        } else{
          resultRound.innerText = 0;
          btnHold.click();
        }
  } else if(player2.style.display==="inline-block") {
      let rounded = parseInt(resultRounded.innerText);
      let rollDice = (Math.round(Math.random() * (6 - 1) + 1));
        if(rollDice!=1){
          let roundedTotal = rounded + rollDice;
          resultRounded.innerText = roundedTotal;
        } else{
          resultRounded.innerText = 0;
          btnHold.click();
        }
     
  }else if(player1.style.display==="none"){
    let rounded = parseInt(resultRounded.innerText);
      let rollDice = (Math.round(Math.random() * (6 - 1) + 1));
        if(rollDice!=1){
          let roundedTotal = rounded + rollDice;
          resultRounded.innerText = roundedTotal;
        } else{
          resultRounded.innerText = 0;
          btnHold.click();
        }
      
  }else{
    let round = parseInt(resultRound.innerText);
      let rollDice = (Math.round(Math.random() * (6 - 1) + 1));
        if(rollDice!=1){
          let roundTotal = round + rollDice;
          resultRound.innerText = roundTotal;
        } else{
          resultRound.innerText = 0;
          btnHold.click();
        }
      
  }
}

//Affectation de la valeur du score courant au score global pour chaque joueur lorsqu'il appuie sur le bouton Hold. Une fois les 100 points atteint on affiche le gagnant.
function hold(){
  if(player1.style.display==="inline-block"){
    let a = parseInt(resultGlobal.innerText);
      let b = a + eval(resultRound.innerText);
      resultGlobal.innerText = b;
      (resultRound.innerText) = "0";
        if(b >= 100){
          $('#de').html('<div>PLAYER 1 WINNER !!<div>').css('font-size', '4rem').css('color', 'red');
          btnRoll.removeEventListener("click", add);
          
        } else {
        }
     
  }else if(player2.style.display==="none") {
    let a = parseInt(resultGlobaled.innerText);
      let b = a + eval(resultRounded.innerText);
      resultGlobaled.innerText = b;
      resultRounded.innerText = "0";
        if(b >= 100){
          $('#de').html('<div>PLAYER 2 WINNER !!<div>').css('font-size', '4rem').css('color', 'red');
          btnRoll.removeEventListener("click", add);
          
        } else {
          
        }
    
  }else if(player2.style.display==="inline-block")
  {
    let a = parseInt(resultGlobaled.innerText);
      let b = a + eval(resultRounded.innerText);
      resultGlobaled.innerText = b;
      resultRounded.innerText = "0";
       
        if(b >= 100){
          $('#de').html('<div>PLAYER 2 WINNER !!<div>').css('font-size', '4rem').css('color', 'red');
          btnRoll.removeEventListener("click", add);
          
        } else {
         
        }
  }else {
    let a = parseInt(resultGlobal.innerText);
      let b = a + eval(resultRound.innerText);
      resultGlobal.innerText = b;
      (resultRound.innerText) = "0";
        if(b >= 100){
          $('#de').html('<div>PLAYER 1 WINNER !!<div>').css('font-size', '4rem').css('color', 'red');
          btnRoll.removeEventListener("click", add);
          
        } else {
       
        }
  }
}
btnRoll.addEventListener("click", add)
btnHold.addEventListener("click", hold)

// Recommencer une nouvelle partie
const newGame = document.getElementById('new-game');

function New() {
  var r = confirm('Voulez-vous vraiment recommencer la partie ? Tous les compteurs seront remis à 0');
  if (r == true) {
    location.reload();
  } else {
    
  }
}
newGame.addEventListener("click", New);