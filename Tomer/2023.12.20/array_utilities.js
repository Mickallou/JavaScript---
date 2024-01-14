export const name = `Mickael Jackson`;
const age = 23;

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(`output`).innerHTML += `${i + 1}. ${arr[i]}<br>`;
    }
}
export default printArray;
