const toggle = document.querySelector('.toggle');
const hourEle = document.querySelector('.hour');
const minEle = document.querySelector('.min');
const secEle = document.querySelector('.sec');
const timeEle = document.querySelector('.time');
const dateEle = document.querySelector('.date');


//lets make array of days and months
const daysArr = ['mon','tue','wed','thru','fri','sat','sun'];
const monthsArr = ['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec'];

//toggle
toggle.addEventListener('click', (e) => {
    let html = document.querySelector('html');
    if(html.classList.contains('dark'))
    {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
        minEle.add.style
    }
    else{
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
})


setInterval(() => {
    const time = new Date();
    const months = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const date = time.getDate();
    

    const modeAMPM = hours >= 12 ? 'PM' : 'AM';

    hourEle.style.transform = `translate(-50% ,-100%) rotate(${map(hoursForClock,0,11,0,360)}deg)`;
    minEle.style.transform = `translate(-50% ,-100%) rotate(${map(minutes,0,59,0,360)}deg)`;
    secEle.style.transform = `translate(-50% ,-100%) rotate(${map(seconds,0,59,0,360)}deg)`;

    timeEle.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`:minutes} ${modeAMPM}`;
    dateEle.innerHTML = `${daysArr[day]}, ${monthsArr[months]} <span class="circle">${date}</span>`;

}, 1000);

//function for mapping num range onto another range

function map( x,in_min, in_max,  out_min, out_max){
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}