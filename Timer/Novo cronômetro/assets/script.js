// Variáveis globais
let count;
let hh = 0;
let mm = 0;
let ss = 0;
let isCounting = false;

// Pegando elementos
const display = document.querySelector('.display');
const btnStart = document.querySelector('#start');
const btnPause = document.querySelector('#pause');
const btnReset = document.querySelector('#reset');

// Escutadores de evento
btnStart.addEventListener('click', startCount);
btnPause.addEventListener('click', pauseCount);
btnReset.addEventListener('click', resetCount);

// Funções
function startCount() {
    if(isCounting) return;
    isCounting = true;
    count = setInterval(doCount, 1000);
    console.log('Contagem iniciada');
}

function pauseCount() {
    clearInterval(count);
    isCounting = false;
    console.log('Contagem pausada');
}

function resetCount() {
    clearInterval(count);
    isCounting = false;

    hh = 0;
    mm = 0;
    ss = 0;

    display.innerHTML = '00:00:00';
    console.log('Contagem zerada');
}

function doCount() {
    const format = `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`;

    ss = ss + 1;

    if (ss >= 60) {
        ss = 0;
        mm++
        if (mm >= 60) {
            mm = 0;
            hh++;
        }
    }

    display.innerHTML = format;

}