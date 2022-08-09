let rpsSelection = ['rock', 'paper', 'scissors'];

function getComputerChoice(rpsSelection){
    let ranNumber = Math.floor(Math.random() * 3);
    return rpsSelection[ranNumber];
};

function playRound(computerChoice, playerChoice){
    const container = document.querySelector('.results')
    if (computerChoice == playerChoice){
            const content = document.createElement('div')
            content.textContent = 'tie!'
            console.log(1)
            container.appendChild(content)
            }
        else if (computerChoice == 'rock' && playerChoice == 'scissors'){
            const content = document.createElement('div')
            content.textContent = 'you lose, rock beats scissors..'
            container.appendChild(content)
            console.log(2)
            }
        else if (computerChoice == 'scissors' && playerChoice == 'rock'){
            const content = document.createElement('div')
            content.textContent = 'you win, rock beats scissors!'
            container.appendChild(content)
            console.log(3)
            }
        else if(computerChoice == 'paper' && playerChoice == 'scissors'){
            const paragraph = document.createElement('div')
            paragraph.textContent = 'you win! scissors beats paper!'
            container.appendChild(paragraph)
            console.log(4)
            }
        else if (computerChoice == 'rock' && playerChoice == 'paper'){
            const paragraph = document.createElement('div')
            paragraph.textContent = 'you win! Paper beats rock'
            container.appendChild(paragraph)
            console.log(5)
            }
        else if (computerChoice == 'paper' && playerChoice == 'rock'){
            const paragraph = document.createElement('div')
            paragraph.textContent = 'you lose Paper beats rock...'
            container.appendChild(paragraph)
            console.log(6)
            }
        else if (computerChoice == 'rock' && playerChoice == 'scissors'){
            const paragraph = document.createElement('p')
            paragraph.textContent = 'you lose, rock beats scissors...'
            container.appendChild(paragraph)
            console.log(7)
            }
        else if (computerChoice == 'scissors' && playerChoice == 'paper'){
            const paragraph = document.createElement('div')
            paragraph.textContent = 'you lose, scissors beats paper'
            container.appendChild(paragraph)
            console.log(8)
            };
};

function findPlayerChoice() {
    const rock = document.querySelector('#rock');
        rock.addEventListener('click', () => {playRound(getComputerChoice(rpsSelection), 'rock')})
    const scissors = document.querySelector('#scissors')
        scissors.addEventListener('click', () => {playRound(getComputerChoice(rpsSelection), 'scissors')})
    const paper = document.querySelector('#paper')
        paper.addEventListener('click', () => {playRound(getComputerChoice(rpsSelection), 'paper')})
};

/*function game(playRound){
    for (let i = 0; i < 5; i++ ){
        let computerChoice = getComputerChoice(rpsSelection);
        playerChoice = findPlayerChoice()
        console.log(playerChoice)
        playRound(computerChoice, playerChoice);
    };
};
*/
findPlayerChoice()