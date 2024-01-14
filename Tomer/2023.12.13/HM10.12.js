function getData(countryName) {
    const myPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        };
        xhr.open(`GET`, `https://restcountries.com/v3.1/name/${countryName}`);
        xhr.send();
    });

    return myPromise;
}

function printData() {
    const cName = prompt(`Please enter a country name`);
    const p = getData(cName);//p is a promise
    p.then((data) => { console.log(JSON.parse(data)); }).catch((error) => { console.log(error); });
}

document.getElementById(`btnload`).addEventListener(`click`, printData);