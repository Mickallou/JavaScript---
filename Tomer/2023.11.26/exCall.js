function the1() {
    alert(`Mickael`);
};

const the2 = function () {
    // const container = document.querySelector(`.container`);
    // container.textContent = `Mickael`
    document.body.innerHTML = `Mickael`
};

function theCallback_f(callBack) {
    alert(`This my name ...`)
    console.log(callBack);
    callBack()
};

theCallback_f(the1);
theCallback_f(the2);