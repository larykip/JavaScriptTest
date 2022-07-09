let playersScore, activePlayer, turnScore, gameStillPlaying, previousDice1, previousDice2;
newGame();
document.querySelector('.btn-roll').addEventListener('click', function(){
    

    //here is where we pass the rules
    if(gameStillPlaying) {
        //We create a random number for the two dices
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        console.log(dice1 + ' : ' + dice2)
        //here we make the dices selected visible in image form
        document.querySelector('#dice-1').style.display = 'block';
        document.querySelector('#dice-2').style.display = 'block';
        //here we pass the random dices selected to select the appropriate dice image selected
        document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
        document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png';
        if(previousDice1 === 6 && dice1 === 6 && previousDice2 ===6 && dice2 === 6){
            playersScore[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = playersScore[activePlayer];
        }
        else if(dice1 !== 1 && dice2 !== 1){
            turnScore += dice1 + dice2;
            document.querySelector('#current-' +activePlayer).textContent = turnScore;
        } else{
            nextPlayer();
        }

        previousDice1 = dice1;
        previousDice2 = dice2;
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameStillPlaying){
        //when we click the hold button, we save the points got to the player
        playersScore[activePlayer] += turnScore;
        document.querySelector('#score-' + activePlayer).textContent = playersScore[activePlayer];
        let finalScore = document.querySelector('.maxwin').value;
        let defaultScore = 100;
        if(finalScore){
            defaultScore = finalScore;
        }
        else{
            defaultScore
        }

        if(playersScore[activePlayer] >= defaultScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('#dice-1').style.display = 'none'
            document.querySelector('#dice-2').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('#current-0').textContent = '0';
            document.querySelector('#current-1').textContent = '0';
            gameStillPlaying = false;
        }
        else {
            nextPlayer();
        }
    }
    
});

document.querySelector('.btn-new').addEventListener('click', function(){
    newGame();
});
function newGame(){
    playersScore = [0,0],
    activePlayer = 0;
    turnScore = 0;
    gameStillPlaying = true
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    turnScore = 0;
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    
}