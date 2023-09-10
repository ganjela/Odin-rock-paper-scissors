function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function capitalize(str){
    str = str.toLowerCase();
    
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function getComputerChoice(){
    let choices  = ["Rock","Paper","Scissors"];
    let randomIndex = getRandomInt(3);

    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    let result = "";

    if(playerSelection === computerSelection){
        result = "It's a Tie";
    }else if(playerSelection==="Rock" && computerSelection==="Paper"){
        result = "You Lose! Paper beats Rock";
    }else if(playerSelection==="Rock" && computerSelection==="Scissors"){
        result = "You Win! Rock beats Scissors";
    }else if(playerSelection=="Paper" && computerSelection==="Rock"){
        result = "You Win! Paper beats Rock";
    }else if(playerSelection=="Paper" && computerSelection==="Scissors"){
        result = "You Lose! Scissors beats Paper";
    }else if(playerSelection=="Scissors" && computerSelection==="Rock"){
        result = "You Lose! Rock beats Scissors";
    }else if(playerSelection=="Scissors" && computerSelection==="Paper"){
        result = "You Win! Scissors beats Paper";
    }else{
        result = "Invalid Input";
    }
    
    return result;
}

function game(){
    let playerSelection = "";
    let computerSelection = "";

    for(i=1;i<=5;i++){
        do{
            let selection = prompt("Rock, Paper, Scissors? :");
            playerSelection = capitalize(selection);
        }
        while(playerSelection!=="Rock" && playerSelection!=="Paper" && playerSelection!="Scissors");

        computerSelection = getComputerChoice();
        console.log("Player Selected: " + playerSelection);
        console.log("Computer Selected: " + computerSelection);

        console.log(`Round ${i}: ` + playRound(playerSelection,computerSelection));
    }
}

game();
