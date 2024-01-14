function randomNumber(numUser) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const theNum = Math.floor(Math.random() * numUser);
            resolve(theNum);
        }, 500);
    });
}
async function main() {
    try {
        const userNum = prompt(`Enter a number`);
        const num = await randomNumber(userNum);
        document.getElementById(`memo`).textContent = `${num}`
    } catch (error) {
        console.log(error);
    }
}
main();
