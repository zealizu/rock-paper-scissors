let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses :0,
    ties : 0
}


// if(!score){
//     score = {
//         wins: 0,
//         loses :0,
//         ties : 0
//     }
// }
let winner = document.querySelector('#winner');
let gameEvent = document.querySelector('#gameEvent');
let winsTxt = document.querySelector('#winsTxt');
let losesTxt = document.querySelector('#losesTxt');
let tiesTxt = document.querySelector('#tiesTxt');
let scoreTxt = document.querySelector('#scoreTxt')

updateScore();

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';
    if (playerMove === 'scissors'){
        if ( computerMove === 'rock'){
        result = 'You lose'
        } else if ( computerMove === 'paper') {
        result = 'You win';
        }
        else if( computerMove === 'scissors') {
        result = 'Tie';
    };


     } else if (playerMove === 'paper'){
        if ( computerMove === 'rock'){
            result = 'You win'
        } else if ( computerMove === 'paper') {
            result = 'Tie';
        }
        else if( computerMove === 'scissors') {
            result = 'You lose'; };


    } else if (playerMove === 'rock'){
            if ( computerMove === 'rock'){
            result = 'Tie'
            } else if ( computerMove === 'paper') {
                result = 'You lose';
            }
            else if( computerMove === 'scissors') {
                result = 'You win';
            };
    }
    
    if (result === 'You win'){
        score.wins = score.wins += 1;
    } else if ( result === 'You lose'){
        score.loses = score.loses += 1;
    } else if ( result === 'Tie') {
        score.ties = score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    winner.textContent = result;
    gameEvent.innerHTML = `You <img src="images/${playerMove}-emoji.png"> <img src="images/${computerMove}-emoji.png">Computer`;

    updateScore();
   


   
//             alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.  
// Wins ${score.wins}, losses ${score.loses}, Ties ${score.ties}`);
}

function updateScore(){
   scoreTxt.innerHTML = `Wins ${score.wins}: losses ${score.loses}: Ties ${score.ties}`
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber <1/3) {  computerMove = 'rock';}

    else if (randomNumber >= 1/3 && randomNumber < 2/3) { computerMove = 'paper';}

    else { computerMove = 'scissors';}

    return computerMove;
};
