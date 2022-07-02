function computerPlay(){
    let rPS=["Rock", "Paper", "Scrissors"]
    const randomElement = rPS[Math.floor(Math.random() * rPS.length)];
    return randomElement.toLowerCase();
}


function playRound(player, computer){
    let result
    if(player === computer){
        result= ['Tie','tie'];
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            result = ['You lose! Paper beats Rock', 'loss'];
            

        }else{
            result = ['You won! Rock beats Scrissors','win'];}
        }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result = ['You lose! Rock beats Scrissors', 'loss'];
            
        }else{
            result = ['You win! Scrissors beats paper','win'];
            
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result = ['You lose! Scrissors beats Paper', 'loss'];
           
        }else{
            result = ['You win! Paper beats Rock','win'];
            
    }
    }
    return result;
}

function game(){
    let player = 0;
    let computer = 0;
    for(i=0;i<5;i++){
        
        let choice=prompt("Make your choice!").toLowerCase();
        
        let round =playRound(choice, computerPlay());
        console.log(round[0]);
        if(round[1] === 'win') player++;
            else if(round[1]==='loss') computer++;
           


    }
    if(player>computer) result = "Player won!";
        else if(computer > player) result= "Computer won";
        else result = "It is a tie in the end!";

    return result;
}