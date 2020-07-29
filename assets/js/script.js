/* JS FOR THE GAME */

const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');

function jump(){

    if ( !character.classList.contains('animate-char') ) {
        character.classList.add('animate-char');

        setTimeout(function(){
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
    }
}

// stops game but doesn't reset score
function stop(){

}

//stops game and resets score
function reset(){

}