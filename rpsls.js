let computerSelection;
let playerScore = 0;
let BBEGScore = 0;
//Function below randomly choses value from options array above
function computerPlay(){
    let options = ["rock", "paper", "scissors", "lizard", "spock"];
    return (options[Math.floor(Math.random() * options.length)])
  }
function winnerDisplay(){
  if(BBEGScore > playerScore){
    return "You Lose!";
  }
  else if(BBEGScore < playerScore){
    return "You Win!";
  }
  else{
    return "It's a tie!";
  }
}
function resetGame(){
  playerScore = 0;
  BBEGScore = 0;
  document.getElementById("pResults").textContent = "Let's start a new game.";
  document.getElementById("BBEGScore").textContent = BBEGScore; 
  document.getElementById("playerScore").textContent = playerScore; 
  document.getElementById("final").textContent = "";
}
function playGame(){
  computerSelection = computerPlay();
  let result = (playRound(playerSelection,computerSelection));
  document.getElementById("pResults").textContent = result; 
  document.getElementById("BBEGScore").textContent = BBEGScore; 
  document.getElementById("playerScore").textContent = playerScore; 
    if(playerScore >= 5){
     document.getElementById("pResults").textContent = winnerDisplay(); 
     document.getElementById("final").textContent = "FINAL"; 
     setTimeout(resetGame,7000);
    }
}
let input_rock = document.getElementById("input_rock");
//when clicking rock, set that as player selection and play round
  input_rock.addEventListener("click",function(){
      playerSelection = "rock";
      playGame();
  });
//when clicking paper, set that as player selection and play round
let input_paper = document.getElementById("input_paper");
input_paper.addEventListener("click",function(){
    playerSelection = "paper";
    playGame();
});
//when clicking scissors, set that as player selection and play round
let input_scissors = document.getElementById("input_scissors");
input_scissors.addEventListener("click",function(){
    playerSelection = "scissors";
    playGame();
});
//when clicking lizard, set that as player selection and play round
let input_lizard = document.getElementById("input_lizard");
input_lizard.addEventListener("click",function(){
    playerSelection = "lizard";
    playGame();
});
//when clicking spock, set that as player selection and play round
let input_spock = document.getElementById("input_spock");
input_spock.addEventListener("click",function(){
    playerSelection = "spock";
    playGame();
});
//Evaluate result of a single round
function playRound(playerSelection, computerSelection) {
    let a = playerSelection;
    let b = computerSelection;
    switch (playerSelection){
        case "rock":
        a = 0;
        break;
        case "paper":
        a = 1;
        break;
        case "scissors":
        a = 2;
        break;
        case "lizard":
        a = 3;
        break;
        case "spock":
        a = 4;
        break;
    }
    switch (computerSelection){
        case "rock":
        b = 0;
        break;
        case "paper":
        b = 1;
        break;
        case "scissors":
        b = 2;
        break;
        case "lizard":
        b = 3;
        break;
        case "spock":
        b = 4;
        break;
    }
    function upperCaseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
        }
    if (a == b) {
        if( a == 2){
          return ("It's a draw! Two " + playerSelection.toLowerCase() 
        + " are in a mexican standoff.");
        }
        return ("It's a draw! Two " + playerSelection.toLowerCase() 
        + "s are in a mexican standoff.");
    }
    //Scissors cuts paper.
    else if(a == 2 && b == 1){
        playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " cuts " + computerSelection.toLowerCase() + ". Snip snip. +1 point.");
    }
    else if(a == 1 && b == 2){
        BBEGScore++;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " cuts " + playerSelection.toLowerCase() + ". Snip snip. -1 point.");
    }
    //Paper covers rock.
    else if(a == 1 && b == 0){
        playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " covers " + computerSelection.toLowerCase() + ".  Great job, you've blinded a rock.  +1 for effort.");
    }
    else if(a == 0 && b == 1){
        BBEGScore++;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " covers " + playerSelection.toLowerCase() + ".  Congratulations, your rock is blind now.  I hope you're happy.");
    }
    //Rock crushes lizard.
    else if(a == 0 && b == 3){
        playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " crushes " + computerSelection.toLowerCase() + ". I hope this point was worth that mental image. +1 point.");
    }
    else if(a == 3 && b == 0){
        BBEGScore++;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " crushes " + playerSelection.toLowerCase() + ". He's dead.  Why would you send an innocent lizard into this madhouse? Poor lizard.");
    }
    //Lizard Poisons Spock.
    else if(a == 3 && b == 4){
        playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " poisons " + computerSelection.toLowerCase() + ".  The universe has lost a great mind.  And you have gained + 1 point for killing him.");
    }
    else if(a == 4 && b == 3){
        BBEGScore++;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " poisons " + playerSelection.toLowerCase() + ".  You sent him out into the universe, and he did not live long.");
    }
    //Spock smashes scissors.
    else if(a == 4 && b == 2){
        playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " smashes " + computerSelection.toLowerCase() + ".  With his... hands? I guess?  Good job Spock. +1 point.");
    }
    else if(a == 2 && b == 4){
        BBEGScore++;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " smashes " + playerSelection.toLowerCase() + ". Ha! Take that scissors! Wait... you chose SCISSORS!?!  Eww.  You can't sit with us.");
    }
    //Scissors decapitates lizard.
    else if(a == 2 && b == 3){
        playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " decapitates " + computerSelection.toLowerCase() + ". Score! +1 point and a lizard head.  I'm sure you can get that taxidermied somewhere.");
    }
    else if(a == 3 && b == 2){
        BBEGScore++;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " decapitates " + playerSelection.toLowerCase() + ".  HOLY CRAP!  That's a little extreme.  Poor guy...");
    }
    //Lizard eats paper.
    else if(a == 3 && b == 1){
        playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " eats " + computerSelection.toLowerCase() + ".  Good lizard!");
    }
    else if(a == 1 && b == 3){
        BBEGScore++;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " eats " + playerSelection.toLowerCase() + ".  Stupid lizard!");
    }
    //Paper disproves spock.
    else if(a == 1 && b == 4){
        playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " disproves " + computerSelection.toLowerCase() + ".  The whole universe has imploded, but you got a point for it so... worth it? +1 point.");
    }
    else if(a == 4 && b == 1){
        BBEGScore++;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " disproves " + playerSelection.toLowerCase() + ".  This is still up for debate, but regardless, you've made Spock sad.");
    }
    //Spock vaporizes rock.
    else if(a == 4 && b == 0){
        playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " disproves " + computerSelection.toLowerCase() + ".  MUAHAHAHA! It's a powerful feeling to destroy inanimate objects!  +1 point.");
    }
    else if(a == 0 && b == 4){
        BBEGScore++;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " vaporizes " + playerSelection.toLowerCase() + ". Well that was sudden. -1 point.");
    }
    //Rock crushes scissors.
    else if(a == 0 && b == 2){
        playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " crushes " + computerSelection.toLowerCase() + ".  HULK SMASH!");
    }
    else if(a == 2 && b == 0){
        BBEGScore++;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " crushes " + playerSelection.toLowerCase() + ".  HULK SMASH");
    }
    //If Error
    else {
        return (upperCaseFirstLetter(playerSelection) + 
        " is not a recognized member of the Rock, Paper, Scissors, Lizard, Spock Alliance.");
    }
}