let vowelCount = document.getElementById('vowelcount');

function countVowel(str){
    str = str.toLowerCase();
    let vowelArr = ['a','i','e','o','u'];

    let counter = 0 ; 

    for(let letter of str)
    {
        if(vowelArr.includes(letter))
        {
            counter ++ ;
            vowelCount.classList.add('blink');
        }
        else{
            vowelCount.classList.remove('blink');
        }
    }
    vowelCount.innerHTML = counter ;
}