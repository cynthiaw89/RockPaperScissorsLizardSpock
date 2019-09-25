//declare some global variables
let playerSelection;
let playerScore = 0;
let options = ["rock", "paper", "scissors", "lizard", "spock"];
//Function below randomly choses value from options array above
function computerPlay(){
    return (options[Math.floor(Math.random() * options.length)])
}
//Function below uppercases first letter of a string, will be used for result output.
function upperCaseFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}
let computerSelection = computerPlay();
//when clicking rock, set that as player selection
let input_rock = document.getElementById("input_rock");
input_rock.addEventListener("click",function(){
    playerSelection = "rock";
    console.log(playerSelection);
});
//when clicking paper, set that as player selection
let input_paper = document.getElementById("input_paper");
input_paper.addEventListener("click",function(){
    playerSelection = "paper";
    console.log(playerSelection);
});
//when clicking scissors, set that as player selection
let input_scissors = document.getElementById("input_scissors");
input_scissors.addEventListener("click",function(){
    playerSelection = "scissors";
    console.log(playerSelection);
});
//when clicking lizard, set that as player selection
let input_lizard = document.getElementById("input_lizard");
input_lizard.addEventListener("click",function(){
    playerSelection = "lizard";
    console.log(playerSelection);
});
//when clicking spock, set that as player selection
let input_spock = document.getElementById("input_spock");
input_spock.addEventListener("click",function(){
    playerSelection = "spock";
    console.log(playerSelection);
});
 //Function below calculates result of RPSLS and increases relevant score
function playRound(playerSelection, computerSelection){
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
    if (a == b) {
        return ("It's a draw! Two " + playerSelection.toLowerCase() 
        + "'s are in a mexican standoff.");
    }
    //Scissors cuts paper.
    else if(a == 2 && b == 1){
        playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " cuts " + computerSelection.toLowerCase() + ". Snip snip. +1 point.");
    }
    else if(a == 1 && b == 2){
      playerScore--;
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
      playerScore--;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " covers " + playerSelection.toLowerCase() + ".  Congratulations, your rock is blind now.  I hope you're happy. -1 point.");
    }
    //Rock crushes lizard.
    else if(a == 0 && b == 3){
      playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " crushes " + computerSelection.toLowerCase() + ". I hope this point was worth that mental image. +1 point.");
    }
    else if(a == 3 && b == 0){
      playerScore--;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " crushes " + playerSelection.toLowerCase() + ". He's dead.  Why would you send an innocent lizard into this madhouse? -1 point. Poor lizard.");
    }
    //Lizard Poisons Spock.
    else if(a == 3 && b == 4){
      playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " poisons " + computerSelection.toLowerCase() + ".  The universe has lost a great mind.  And you have gained + 1 point for killing him.");
    }
    else if(a == 4 && b == 3){
      playerScore--;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " poisons " + playerSelection.toLowerCase() + ".  You sent him out into the universe, and he did not live long.  -1 point.");
    }
    //Spock smashes scissors.
    else if(a == 4 && b == 2){
      playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " smashes " + computerSelection.toLowerCase() + ".  With his... hands? I guess?  Good job Spock. +1 point.");
    }
    else if(a == 2 && b == 4){
      playerScore--;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " smashes " + playerSelection.toLowerCase() + ". Ha! Take that scissors! Wait... you chose SCISSORS!?!  Eww.  You can't sit with us. -1 point.");
    }
    //Scissors decapitates lizard.
    else if(a == 2 && b == 3){
      playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " decapitates " + computerSelection.toLowerCase() + ". Score! +1 point and a lizard head.  I'm sure you can get that taxidermied somewhere.");
    }
    else if(a == 3 && b == 2){
      playerScore--;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " decapitates " + playerSelection.toLowerCase() + ".  HOLY CRAP!  That's a little extreme.  Poor guy... -1 point.");
    }
    //Lizard eats paper.
    else if(a == 3 && b == 1){
      playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " eats " + computerSelection.toLowerCase() + ".  Good lizard!");
    }
    else if(a == 1 && b == 3){
      playerScore--;
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
      playerScore--;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " disproves " + playerSelection.toLowerCase() + ".  This is still up for debate, but regardless, you've made Spock sad so... -1 point.");
    }
    //Spock vaporizes rock.
    else if(a == 4 && b == 0){
      playerScore++;
        return ("You Win! " + upperCaseFirstLetter(playerSelection) + 
        " disproves " + computerSelection.toLowerCase() + ".  MUAHAHAHA! It's a powerful feeling to destroy inanimate objects!  +1 point.");
    }
    else if(a == 0 && b == 4){
      playerScore--;
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
      playerScore--;
        return ("You Lose! " + upperCaseFirstLetter(computerSelection) + 
        " crushes " + playerSelection.toLowerCase() + ".  HULK SMASH");
    }
    //If Error
    else {
        return (upperCaseFirstLetter(playerSelection) + 
        " is not a recognized member of the Rock, Paper, Scissors, Lizard, Spock Alliance.");
    }
}
console.log(playRound(playerSelection,computerSelection));
/*
      //Function below iterates 5 rounds of RPSLS, keeps score, and reports winner.
      function game(){
        let i;
        for (i = 0; i < 5; i++) {
          let computerSelection = computerPlay();
          let playerSelection = prompt("Please choose: Rock, Paper, Scissors, Lizard, or Spock.");

          
            }
          }
        console.log(game());
        console.log("Your final score is " + (playerScore + 5) + " out of 10.");*/