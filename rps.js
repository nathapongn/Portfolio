
const pickButton = document.querySelectorAll('.pickButton');


pickButton.forEach(function(pickButton) {
    // User Pick
    pickButton.addEventListener('click', function(){
    let userPick = 'You picked ' + pickButton.getAttribute('title');
    console.log(userPick);
    let display = document.querySelector('.display')
    let displayResult = document.querySelector('.displayResult')
    
    // Computer Pick
    let random = Math.random()
    let computerPick = '';
    let result = '';
    
    // Computer Picked Rock
    if (random <= 1/3) {
        computerPick = 'Computer picked Rock.'

        console.log(computerPick);

        if (userPick.includes('Paper')){
            console.log('You Win!');
            result = 'You Win!';
        }
        else if (userPick.includes('Rock')){
            console.log(`It's a Tie!`);
            result = `It's a Tie!`;
        }
        else {
            console.log('You Lose');
            result = 'You Lose';
        }
    }
    // Computer Picked Paper
    else if (random <= 2/3 && random > 1/3) {
        computerPick = 'Computer picked Paper.';
        console.log('Computer picked Paper');
        if (userPick.includes('Scissors')){
            console.log('You Win!')
            result = 'You Win!';
        } 
        else if (userPick.includes('Paper')){
            console.log(`It's a Tie!`)
            result = `It's a Tie!`;
        }
        else {
            console.log('You Lose')
            result = 'You Lose';
        }
    }
    // Computer Picked Scissors
    else {
        computerPick = 'Computer picked Scissors';
        console.log('Computer picked Scissors');
        if (userPick.includes('Paper')){
            console.log('You Win!');
            result = 'You Win!';
        }
        else if (userPick.includes('Scissors')){
            console.log(`It's a Tie!`);
            result = `It's a Tie!`;
        }
        else {
            console.log('You Win!');
            result = 'You Win!';
        }
    }
    display.innerHTML = 'You picked ' + pickButton.getAttribute('title') + '. ' + computerPick + ' ';
    displayResult.innerHTML = result;
})
});
