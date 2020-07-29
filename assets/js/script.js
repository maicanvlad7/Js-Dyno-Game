/* JS FOR THE GAME */


//the sprite and obstacle definition
//TODO random sprite generator
const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');

var score = document.getElementById('score');
var scorePoints = 0;

var highHtml = document.getElementById('high');
//storing a local highscore
var highScore = 0;


//############# PLAYER CONTROL ######################//
//jump on SPACE press
document.addEventListener('keydown', event => {
    if(event.keyCode === 32) {
        jump();
    }

    
})

//function that checks for collision
var checkDead = setInterval(() => {

    if( character.offsetTop > obstacle.offsetLeft){
        stop();
        highscore( parseInt(score.innerHTML) );
        alert('crash');
        reset();
    }
    
    if(gameState) {
        updateScore();
    }
     
}, 10);


//binding of jumping animation
function jump(){

    if ( !character.classList.contains('animate-char') ) {
        character.classList.add('animate-char');

        setTimeout( ()=> {
            character.classList.remove('animate-char');
        },1000)
    }
}

//############# SCORE UPDATE ######################//

//live update of score
function updateScore(){
    scorePoints += 1;
    score.innerHTML = scorePoints;
}

//updating and setting highScores
function highscore(currentScore) {

    if( currentScore > highScore ) {
        highScore = currentScore;
        highHtml.innerHTML = highScore; 
    }
}

//################## GAME STATE ######################//

//0 = stopped, 1 = started
var gameState = 0;

//starts game
function start(){
    if (!gameState) {
        obstacle.classList.add('block');
        gameState = 1;
    }
}

// stops game but doesn't reset score
function stop(){
    if (gameState) {
        obstacle.classList.remove('block');
        gameState = 0;
    }
}

//stops game and resets score
function reset(){

    obstacle.classList.remove('block');
    scorePoints = 0;
    gameState = 0;
    score.innerHTML = scorePoints;
    
}