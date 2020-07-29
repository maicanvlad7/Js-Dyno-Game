/* JS FOR THE GAME */

const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');

document.addEventListener('keydown', event => {
    if(event.keyCode === 32) {
        jump();
    }
})

function jump(){

    if ( !character.classList.contains('animate-char') ) {
        character.classList.add('animate-char');

        setTimeout( ()=> {
            character.classList.remove('animate-char');
        },1000)
    }
}

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

}