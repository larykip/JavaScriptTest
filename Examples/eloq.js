// let overallScore = 0;
// let individualScore = [0, 0];
// let activePlayer = 0
// //let initialScore = 0;
// document.querySelector('.dice').style.display = 'none';
// document.querySelector('#score-0').textContent = 0;
// document.querySelector('#score-1').textContent = 0;
// document.querySelector('#current-0').textContent = '0';
// document.querySelector('#current-1').textContent = '0';
let overallScore, individualScore, activePlayer, gameIsOn;
newGame();
let previousRoll;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gameIsOn){
        //this generates a random number(dice) between 1-6
        let myRandomPick = Math.floor(Math.random() * 6) + 1;
        console.log(myRandomPick);

        //This displays the dice picked in form of image
        diceDom = document.querySelector('.dice')
        diceDom.style.display = 'block';
        diceDom.src = 'dice-'+myRandomPick+'.png';

        if(myRandomPick === 6 && previousRoll === 6){
            individualScore[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }
        else if(myRandomPick !== 1){
            overallScore += myRandomPick
            document.getElementById('current-' + activePlayer).textContent = overallScore
        }
        else {
            nextPlayer();
        }
        previousRoll = myRandomPick;
    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    let maxScore = document.querySelector('.maxwin').value
    let defaultScore = 100;
    if(maxScore){
        defaultScore = maxScore
    } else {
        defaultScore;
    }
    
    if(gameIsOn) {
        individualScore[activePlayer] += overallScore;
        document.querySelector('#score-' + activePlayer).textContent = individualScore[activePlayer];
        if(individualScore[activePlayer] >= maxScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gameIsOn = false;
        }
        else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', function(){
    newGame();
})

function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        overallScore = 0;
        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'

        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle ('active')
}

function newGame() {
    overallScore = 0;
    individualScore = [0, 0];
    activePlayer = 0;
    gameIsOn = true;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

