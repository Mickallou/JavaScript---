const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const userName = prompt(`Please enter your name`);
        if (userName !== `-1`) {
            resolve(userName);
        } else {
            reject(userName);
        }
    }, 3000)
});
myPromise
    .then((data) => {
        alert(`Hello ${data}`)
    })
    .catch((error) => {
        alert(`You have canceled the operation`)
    });