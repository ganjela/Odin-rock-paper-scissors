function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function getComputerChoice(){
    let choices  = ["Rock","Paper","Scissors"];
    let randomIndex = getRandomInt(3);

    return choices[randomIndex];
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let end = false;

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click',()=>{
        if(!end){
            playRound(button.textContent,getComputerChoice());
        }
    }));
    
    function playRound(playerSelection, computerSelection){
        let text = "";
    
        if(playerSelection === computerSelection){
            text = "It's a Tie";
        }else if(playerSelection==="Rock" && computerSelection==="Paper"){
            text = "You LOST The Round! Paper beats Rock";
            computerScore++;
        }else if(playerSelection==="Rock" && computerSelection==="Scissors"){
            text = "You WON The Round! Rock beats Scissors";
            playerScore++;
        }else if(playerSelection=="Paper" && computerSelection==="Rock"){
            text = "You WON The Round! Paper beats Rock";
            playerScore++;
        }else if(playerSelection=="Paper" && computerSelection==="Scissors"){
            text = "You LOST The Round! Scissors beats Paper";
            computerScore++;
        }else if(playerSelection=="Scissors" && computerSelection==="Rock"){
            text = "You LOST The Round! Rock beats Scissors";
            computerScore++;
        }else if(playerSelection=="Scissors" && computerSelection==="Paper"){
            text = "You WON The Round! Scissors beats Paper";
            playerScore++;
        }

        const result = document.querySelector('.result');
        const score = document.querySelector('.score');
        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

        if(playerScore==5){
            result.textContent = "CONGRATS! YOU WON THE GAME!";
            end = true;
            return;
        }else if(computerScore==5){
            end = true;
            result.textContent = "YOU LOST THE GAME. TRY AGAIN!";
            return;
        }else{
            result.textContent = text;
        }

        
    

    }

}

game();

