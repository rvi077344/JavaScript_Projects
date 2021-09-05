const gameArea = document.querySelector('.gameArea');
const btn = document.createElement('button'); //create button
const output = document.createElement('div');

const inWord = document.createElement('input');
inWord.setAttribute('type','text');
inWord.classList.add('myInput');

output.style.textAlign='center'; 

btn.textContent = "Shuru Karo Game !";
output.textContent = 'click the button';
//add to the HTML page

gameArea.append(btn);
gameArea.append(output);
gameArea.append(inWord);
//game start value

const myWords = ['bird', 'zebra','cat', 'dog', 'elephant', 'fox'];
const game = {sel:'', scramble:''};
//console.log(gameArea);

//event listeners
btn.addEventListener('click', (e) => {  
    btn.style.display = 'none';

    myWords.sort(() => {return 0.5 - Math.random()});

    game.sel = myWords[0];

    game.scramble = sorter(game.scramble);
    output.style.fontSize = '3em';

    output.textContent = `${game.sel} is our word `;
    console.log(game.sel,game.scramble);
})
function sorter(val){
    let temp = game.sel.split("");
    temp.sort(() => {return 0.5 - Math.random()});
    temp = temp.join('');
    console.log(temp);

    if( val === temp )
    {
        console.log(val,temp);
        return sorter(val);
    }
    return temp;
}