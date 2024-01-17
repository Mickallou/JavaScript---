"use strict";
var _a, _b, _c;
function getOrShowData(dataKey) {
    let data;
    const storedAge = localStorage.getItem(dataKey);
    if (storedAge == null) {
        data = prompt(`Enter your ${dataKey} :`);
        // Save to local storage
        localStorage.setItem(dataKey, data);
    }
    else {
        alert(`Your saved ${dataKey} is: ${storedAge}`);
    }
}
function deleteStorage() {
    localStorage.clear();
}
(_a = document.getElementById('btnStart')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    getOrShowData('age');
    getOrShowData('name');
    getOrShowData('city');
});
function addArray() {
    const grade = prompt('Add your grade :');
    // 1. Get array from local storage
    let strFormLS = localStorage.getItem('arrGrades');
    let arrGrades = JSON.parse(strFormLS);
    console.log(arrGrades);
    //1.1 Check if array is null
    // if so, create an empty array
    if (arrGrades == null) {
        arrGrades = [];
    }
    // 2. Push the new value to local storage
    arrGrades.push(grade);
    // 3. Save the array back into local storage
    let strToLS = JSON.stringify(arrGrades);
    localStorage.setItem('arrGrades', strToLS);
}
;
function displayArray() {
}
;
(_b = document.getElementById('btnRemove')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', deleteStorage);
//Handling potential Null values
//Option 1
let btn = document.getElementById('addGrade');
if (btn != null) {
    btn.addEventListener('click', addArray);
}
else {
    alert('Button not found');
}
//Option 2
try {
    (_c = document.getElementById('addGrade')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', addArray);
}
catch (error) {
    alert('Button not found');
}
