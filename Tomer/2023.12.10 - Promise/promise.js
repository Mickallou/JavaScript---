// function getNumber() {
//     setTimeout(() => {
//         const myNum = Math.random();
//         if (myNum > 0.5) {
//             mySuccess(myNum);
//         } else {
//             myError(myNum);
//         }
//     }, 2000);
// }
// function mySuccess(myNum) {
//     document.getElementById("app").innerHTML = `${myNum}: success`;
// }

// function myError(myNum) {
//     document.getElementById("app").innerHTML = `${myNum}: error`;
// }

function getNumber() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const myNum = Math.random();
            if (myNum > 0.5) {
                resolve(myNum);
            } else {
                reject(myNum);
            }
        }, 1000);
    });

    myPromise
        .then((data) => {
            document.getElementById("app").innerHTML = `${data}: Success`;
        })

        .catch((error) => {
            document.getElementById("app").innerHTML = `${error}: Error`;
        });
}

document.getElementById(`start`).addEventListener(`click`, getNumber);