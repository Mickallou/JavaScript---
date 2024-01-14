import Timer from './HM.js';

function eventHandler() {
    const tIsreal = new Timer(0);
    const tEst = new Timer(-8);
    const tUk = new Timer(-2);

    tIsreal.displayTimerInDiv('clock1');
    tEst.displayTimerInDiv('clock2');
    tUk.displayTimerInDiv('clock3');

}

document.getElementById('btnStart').addEventListener('click', eventHandler);