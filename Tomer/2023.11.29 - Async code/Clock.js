const tlv = () => {
    const myDate = new Date();
    const hours = myDate.getHours().toString().padStart(2, `0`);
    const minute = myDate.getMinutes().toString().padStart(2, `0`);
    const second = myDate.getSeconds().toString().padStart(2, `0`);
    const theClock = document.getElementById(`tlvTime`);
    theClock.textContent = `${hours}:${minute}:${second}`
}
setInterval(tlv, 1000)
const paris = () => {
    const myDate = new Date();
    const hours = (myDate.getHours().toString().padStart(2, `0`) - 1);
    const minute = myDate.getMinutes().toString().padStart(2, `0`);
    const second = myDate.getSeconds().toString().padStart(2, `0`);

    const theClock = document.getElementById(`parisTime`);
    theClock.textContent = `${hours}:${minute}:${second}`
}
setInterval(paris, 1000)
const ny = () => {
    const myDate = new Date();
    const hours = (myDate.getHours().toString().padStart(2, `0`) - 7);
    const minute = myDate.getMinutes().toString().padStart(2, `0`);
    const second = myDate.getSeconds().toString().padStart(2, `0`);

    const theClock = document.getElementById(`nyTime`);
    theClock.textContent = `${hours}:${minute}:${second}`
}
setInterval(ny, 1000)
const rome = () => {
    const myDate = new Date();
    const hours = (myDate.getHours().toString().padStart(2, `0`) - 1);
    const minute = myDate.getMinutes().toString().padStart(2, `0`);
    const second = myDate.getSeconds().toString().padStart(2, `0`);

    const theClock = document.getElementById(`romeTime`);
    theClock.textContent = `${hours}:${minute}:${second}`
}
setInterval(rome, 1000)