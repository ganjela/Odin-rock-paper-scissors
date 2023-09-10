function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function getComputerChoice(){
    let choices  = ["Rock","Paper","Scissors"];
    let randomIndex = getRandomInt(3);

    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    let text = "";

    if(playerSelection === computerSelection){
        text = "It's a Tie";
    }else if(playerSelection==="Rock" && computerSelection==="Paper"){
        text = "You Lose! Paper beats Rock";
    }else if(playerSelection==="Rock" && computerSelection==="Scissors"){
        text = "You Win! Rock beats Scissors";
    }else if(playerSelection=="Paper" && computerSelection==="Rock"){
        text = "You Win! Paper beats Rock";
    }else if(playerSelection=="Paper" && computerSelection==="Scissors"){
        text = "You Lose! Scissors beats Paper";
    }else if(playerSelection=="Scissors" && computerSelection==="Rock"){
        text = "You Lose! Rock beats Scissors";
    }else if(playerSelection=="Scissors" && computerSelection==="Paper"){
        text = "You Win! Scissors beats Paper";
    }

    const result = document.querySelector('.result');

    result.textContent = text;
}

function game(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click',()=>{
        playRound(button.textContent,getComputerChoice());
    }));    
}

game();

