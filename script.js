let rpsSelection = ['rock', 'paper', 'scissors'];
const playerChoice = window.prompt("Rock, paper, or scissors: ");
function getComputerChoice(rpsSelection){
    let ranNumber = Math.floor(Math.random() * 3);
    return rpsSelection[ranNumber];
};

let computerChoice = getComputerChoice(rpsSelection);

function playRps(computerChoice, playerChoice){
        if (computerChoice == playerChoice){
            alert('tie!')}
         else if (computerChoice == 'rock' && playerChoice == 'scissors'){
            alert('you lose, rock beats scissors..')}
        else if (computerChoice == 'scissors' && playerChoice == 'rock'){
            alert('you win! rock beats scissors')}
        else if(computerChoice == 'paper' && playerChoice == 'scissors'){
            alert('you win! scissors beats paper!')}
        else if (computerChoice == 'rock' && playerChoice == 'paper'){
            alert('you win! Paper beats rock')}
        else if (computerChoice == 'paper' && playerChoice == 'rock'){
            alert('you lose, paper beats rock...')}
        else (computerChoice == 'rock' && playerChoice == 'scissors'){
            alert('you lose, rock beats scissors...')};
};
playRps(computerChoice, playerChoice);


