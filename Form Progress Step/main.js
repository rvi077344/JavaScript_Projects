const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const rounds = document.querySelectorAll('.round');

let currentActive = 1 ;

next.addEventListener('click', () => {
    currentActive ++ ;

    //round gives the node list ..so that we 
    //can treat this like array
    if(currentActive > rounds.length)
    {
        currentActive = rounds.length ;
    }
    update();
})

prev.addEventListener('click' , () => {

    currentActive -- ;
    if(currentActive < 1)
    {
        currentActive =  1 ;
    }
    update() ;
})

function update()
{
    rounds.forEach((rounds,i) => {
        if(i < currentActive)
        {
            rounds.classList.add('active');
        }
        else{
            rounds.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length -1) / (rounds.length - 1)*100 + '%' ; 
    
    if(currentActive === 1)
    {
        prev.disabled = true ;
    }
    else if(currentActive === rounds.length)
    {
        next.disabled = true ;
    }
    else
    {
        prev.disabled = false;
        next.disabled = false;
    }
}