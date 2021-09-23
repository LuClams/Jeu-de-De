var rollDice = Math.round(Math.random() * (6 - 1) + 1);
const btnRoll = document.getElementById('add');
var resultRound = document.getElementById('round');
const btnHold = document.getElementById('hold');
var resultGlobal = document.getElementById('global');
var resultRounded = document.getElementById('rounded');
var resultGlobaled = document.getElementById('globaled');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');


$( "#hold" ).click(function() {
  $( "#player1" ).toggle();
    $( "#player2" ).toggle();
});

function add(){

  if(player1.style.display==="inline-block"){
    let round = parseInt(resultRound.textContent);
      let rollDice = (Math.round(Math.random() * (6 - 1) + 1));
        if(rollDice!=1){
          let roundTotal = round + rollDice;
          resultRound.textContent = roundTotal;
        } else{
          resultRound.textContent = 0;
          btnHold.click();
        }
  } else if(player2.style.display==="inline-block") {
      let rounded = parseInt(resultRounded.textContent);
      let rollDice = (Math.round(Math.random() * (6 - 1) + 1));
        if(rollDice!=1){
          let roundedTotal = rounded + rollDice;
          resultRounded.textContent = roundedTotal;
        } else{
          resultRounded.textContent = 0;
          btnHold.click();
        }
     
  }else if(player1.style.display==="none"){
    let rounded = parseInt(resultRounded.textContent);
      let rollDice = (Math.round(Math.random() * (6 - 1) + 1));
        if(rollDice!=1){
          let roundedTotal = rounded + rollDice;
          resultRounded.textContent = roundedTotal;
        } else{
          resultRounded.textContent = 0;
          btnHold.click();
        }
      
  }else{
    let round = parseInt(resultRound.textContent);
      let rollDice = (Math.round(Math.random() * (6 - 1) + 1));
        if(rollDice!=1){
          let roundTotal = round + rollDice;
          resultRound.textContent = roundTotal;
        } else{
          resultRound.textContent = 0;
          btnHold.click();
        }
      
  }
}

function hold(){
  if(player1.style.display==="inline-block"){
    let a = parseInt(resultGlobal.textContent);
      let b = a + eval(resultRound.textContent);
      resultGlobal.textContent = b;
      (resultRound.textContent) = "0";
        if(b >= 100){
          $('#de').html('<div>PLAYER 1 WINNER !!<div>').css('font-size', '4rem').css('color', 'red');
          btnRoll.removeEventListener("click", add);
          
        } else {
        }
     
  }else if(player2.style.display==="none") {
    let a = parseInt(resultGlobaled.textContent);
      let b = a + eval(resultRounded.textContent);
      resultGlobaled.textContent = b;
      resultRounded.textContent = "0";
        if(b >= 100){
          $('#de').html('<div>PLAYER 2 WINNER !!<div>').css('font-size', '4rem').css('color', 'red');
          btnRoll.removeEventListener("click", add);
          
        } else {
          
        }
    
  }else if(player2.style.display==="inline-block")
  {
    let a = parseInt(resultGlobaled.textContent);
      let b = a + eval(resultRounded.textContent);
      resultGlobaled.textContent = b;
      resultRounded.textContent = "0";
       
        if(b >= 100){
          $('#de').html('<div>PLAYER 2 WINNER !!<div>').css('font-size', '4rem').css('color', 'red');
          btnRoll.removeEventListener("click", add);
          
        } else {
         
        }
  }else {
    let a = parseInt(resultGlobal.textContent);
      let b = a + eval(resultRound.textContent);
      resultGlobal.textContent = b;
      (resultRound.textContent) = "0";
        if(b >= 100){
          $('#de').html('<div>PLAYER 1 WINNER !!<div>').css('font-size', '4rem').css('color', 'red');
          btnRoll.removeEventListener("click", add);
          
        } else {
       
        }
  }
}
btnRoll.addEventListener("click", add)
btnHold.addEventListener("click", hold)


const newGame = document.getElementById('new-game');

function New() {
  var r = confirm('Voulez-vous vraiment recommencer la partie ? Tous les compteurs seront remis à 0');
  if (r == true) {
    location.reload();
  } else {
    
  }
}
newGame.addEventListener("click", New);

