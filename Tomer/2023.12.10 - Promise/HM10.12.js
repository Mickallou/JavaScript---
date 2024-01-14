const getData = (country) => {
    const myPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        };
        xhr.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
        xhr.send();
    });
    myPromise
        .then((data) => {
            const countries = JSON.parse(data);
            document.getElementById(`theCountry`).innerHTML = countries[0].name.common;
            const theFlag = document.getElementById(`myFlag`);
            theFlag.src = countries[0].flags.png;
        })
        .catch((error) => {
            alert(`Is not a country: ${error}`);
        });
}
const printData = () => {
    let country = prompt(`Please enter a country`);
    getData(country)
}
document.getElementById(`btnload`).addEventListener(`click`, printData);