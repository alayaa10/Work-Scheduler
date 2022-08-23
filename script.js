const date = new Date();

date.setDate(1);

console.log(date.getDay());

const monthDays = document.querySelection('.days')

const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0)
.getDate();
console.log(lastDay);

const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0)
.getDate();

const firstDayIndex=date.getDay

const month = [
    "January"
    "February"
    "March"
    "April"
    "May"
    "June"
    "July"
    "August"
    "September"
    "October"
    "November"
    "December"
];

document.querySelector('date h1').innerHTML=
months[date.getMonth()];

document.querySelector('.date p').innerHTML= 
date.toDateString();

let days = "";

for(let x=firstDayIndex;x>0;x++){
    days ++'<div class="prev-date">$
    {prevLastDay=x}</div>';
}

for(let i=1;;1<=lastDay;i++){
   days +='<div>${i}</div>';
   monthDays.innerHTML = days;
}