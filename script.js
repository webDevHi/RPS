let rpsSelection = ['rock', 'paper', 'scissors'];
function getComputerChoice(rpsSelection){
    let ranNumber = Math.floor(Math.random() * 3);
    return rpsSelection[ranNumber];
};

let computerChoice = getComputerChoice(rpsSelection);

const playerChoice = window.prompt("Rock, paper, or scissors: ");

function playRps(computerChoice, playerChoice){
    console.log('???')
    if (computerChoice == playerChoice){
            alert('tie!')
            console.log(1)}
        else if (computerChoice == 'rock' && playerChoice == 'scissors'){
            alert('you lose, rock beats scissors..')
            console.log(2)}
        else if (computerChoice == 'scissors' && playerChoice == 'rock'){
            alert('you win! rock beats scissors')
            console.log(3)}
        else if(computerChoice == 'paper' && playerChoice == 'scissors'){
            alert('you win! scissors beats paper!')
            console.log(4)}
        else if (computerChoice == 'rock' && playerChoice == 'paper'){
            alert('you win! Paper beats rock')
            console.log(5)}
        else if (computerChoice == 'paper' && playerChoice == 'rock'){
            alert('you lose, paper beats rock...')
            console.log(6)}
        else if (computerChoice == 'rock' && playerChoice == 'scissors'){
            alert('you lose, rock beats scissors...')
            console.log(7)}
        else if (computerChoice == 'scissors' && playerChoice == 'paper'){
           alert('you lose, scissors beats rock...')
            console.log(8)};
};
playRps(computerChoice, playerChoice);


