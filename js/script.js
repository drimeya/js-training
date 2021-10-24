// timer 

//логика таймера 
// создаем переменную дедлайна в виде строки, 
//создаем фунцию которая определяем разницу между нынешним временем и дедлайном, запарсить переменную дедлайна, минус нью дейт
//в функци превращаем в переменные часы, дни и тд. округление Math.floor();
//days = t/ 1000*60*60*24, hours = t/(1000*60*60) % 24, minutes = t/ 1000/60 % 60, sec = t/ 1000 % 60;
//вернуть значения в объекте 
//создаем функцию установления часовов. внутри нее ищем таймер, блоки чинут, часов и тд
//внутри нее функия обновления часов, первая функия внутри, элем.иннерхтмл, сдеть сетинтервал 1000 с функцией обновлением часов. 
// сделать чтобы если  тотал меньше 0 таймер останавивался!!!! 
// если дней меньше 10 то подставить нолик

const deadline = '2021-10-30';

function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / (1000 / 60) % 60),
          seconds = Math.floor(t / 1000 % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function addZero(i){
    if ( i >= 0 && i < 10) {
        return `0${i}`;
    } else {
        return i;
    }
}

function setTime(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(refreshTime, 1000);

    refreshTime();

    function refreshTime() {
        const t = getTime(endtime);

        days.innerHTML = addZero(t.days);
        hours.innerHTML = addZero(t.hours);
        minutes.innerHTML = addZero(t.minutes);
        seconds.innerHTML = addZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            days.innerHTML = 0;
            hours.innerHTML = 0;
            minutes.innerHTML = 0;
            seconds.innerHTML = 0;
        }
    }
}

setTime('.timer', deadline);
