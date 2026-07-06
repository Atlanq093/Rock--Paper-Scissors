const choices = ["rock", "paper", "scissors"];
const playerDisplay =document.getElementById ("playerDisplay")
const computerDisplay = document.getElementById ("computerDisplay")
const resultDisplay =document.getElementById("reseultDisplay")

function playGame(playerChoice){
    const computerChoice = choices [Math.floor(Math.random()*3)];
    let result = ""
     if (playerChoice ===computerChoice){
        result = "It's a tie"
     }else{ 
        switch(playerChoice){
            case "rock ":
            result = (computerChoice=="scissors") ? "You WIN" : "You loose"
            break ;
            case "paper":
            result = (computerChoice=="rock") ? "You WIN" : "You loose"
            break ;
             case "scissors":
            result = (computerChoice=="paper") ? "You WIN" : "You loose"
            break ;
        }

    }

playerDisplay.textContent = `Player: ${playerChoice}`;
computerDisplay.textContent = `Computer: ${computerChoice}`;
resultDisplay.textContent = result ;
}