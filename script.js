let digitalElement = document.querySelector('.digital');

let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');





function updateClock(){
    let now = new Date() //DATE USADO PARA MANIPULÇÃO DE DATA, HORA, SEGUNDO ETC...
    let hour = now.getHours();
    let minute = now.getMinutes();
    let secund = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)} ${fixZero(minute)} ${fixZero(secund)}`;//RELÓGIO DIGITAL

    let sDeg =  ((360 / 60) * secund) -90; // PONTEIRO DE SEGUNDOS
    let mDeg =  ((360 / 60) * minute) -90; // PONTEIRO DE MINUTOS
    let hDeg = ((360 / 12) * hour) -90 // PONTEIRO DE HORAS
    
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}


function fixZero(time) {

    return time < 10 ? `0${time}` : time; //? É = SE FOR VERDADEIRO : SIGNIFICA = SE NÃO;
}


setInterval(updateClock, 1000);
updateClock();