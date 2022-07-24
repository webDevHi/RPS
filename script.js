let rpsSelection = ['rock', 'paper', 'scissors'];
function getComputerChoice(rpsSelection){
    let ranNumber = Math.floor(Math.random() * 3);
    return rpsSelection[ranNumber];
};

function playRound(computerChoice, playerChoice){
    console.log('???');
    console.log(playerChoice)
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
           alert('you lose, scissors beats paper...')
            console.log(8)};
};

function game(playRound){
    for (let i = 0; i < 5; i++ ){
        let computerChoice = getComputerChoice(rpsSelection);
        let playerChoice = prompt("Rock, paper, or scissors: ").toLowerCase();
        playRound(computerChoice, playerChoice);
    };
};

game(playRound);