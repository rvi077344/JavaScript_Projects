const player1Score = document.querySelector('#player1score');
const player2Score = document.querySelector('#player2score');
const reset = document.querySelector('#reset');
const btnP1 = document.querySelector('#p1');
const btnP2 = document.querySelector('#p2');

let currScoreP1 = 0;
let currScoreP2 = 0;
let flag = 1 ;
const targetval = 50;

reset.addEventListener('click', function(){
    currScoreP1 = 0;
    currScoreP2 = 0;
    player1Score.textContent = currScoreP1;
    player2Score.textContent = currScoreP2;
    flag = 1;
    hide('wrongplayer');
    hide('resultbox');
});

btnP1.addEventListener('click' ,function(){
    if(!flag)
    {
        show('wrongplayer');
        return ;
    }
    hide('wrongplayer');
    flag = 0;
    currScoreP1 += Math.trunc(Math.random()*10)+1 ;
    player1Score.textContent = currScoreP1 ; 
    if(currScoreP1 >= targetval){
        show('resultbox');
        document.getElementById('resultbox').innerHTML =
          `<p>Player 1 won with score ${currScoreP1}</p>`;
    }
} );

btnP2.addEventListener('click',function(){
    if(flag)
    {
        show('wrongplayer');
        return;
    }
    flag = 1 ;
    currScoreP2 += Math.trunc(Math.random()*10)+1 ;
    player2Score.textContent = currScoreP2;
    if(currScoreP2 >= targetval)
    {
        //alert(`player 2 has won with score ${currScoreP2}`);
        show('resultbox');
        document.getElementById('resultbox').innerHTML = `<p>Player 2 won with score ${currScoreP2}</p>`;
    }
});

function show(Id){
    document.getElementById(Id).style.display='block';

}
function hide(Id){
    document.getElementById(Id).style.display ='none';
}

