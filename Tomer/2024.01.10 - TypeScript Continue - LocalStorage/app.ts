function getOrShowData(dataKey: string) {
    let data: string | null;
    const storedAge = localStorage.getItem(dataKey);

    if (storedAge == null) {
        data = prompt(`Enter your ${dataKey} :`);
        // Save to local storage
        localStorage.setItem(dataKey, data as string);
    } else {
        alert(`Your saved ${dataKey} is: ${storedAge}`)
    }
}

function deleteStorage() {
    localStorage.clear();
}



document.getElementById('btnStart')?.addEventListener('click', () => {
    getOrShowData('age');
    getOrShowData('name');
    getOrShowData('city');
});

function addArray() {
    const grade: string = prompt('Add your grade :') as string;

    // 1. Get array from local storage
    let strFormLS: string = localStorage.getItem('arrGrades') as string;
    let arrGrades: string[] = JSON.parse(strFormLS);
    console.log(arrGrades);

    //1.1 Check if array is null
    // if so, create an empty array
    if (arrGrades == null) {
        arrGrades = [];
    }

    // 2. Push the new value to local storage
    arrGrades.push(grade);

    // 3. Save the array back into local storage
    let strToLS: string = JSON.stringify(arrGrades);
    localStorage.setItem('arrGrades', strToLS);
};

function displayArray() {

};

document.getElementById('btnRemove')?.addEventListener('click', deleteStorage);
//Handling potential Null values
//Option 1
let btn = document.getElementById('addGrade') as HTMLButtonElement;
if (btn != null) {
    btn.addEventListener('click', addArray);
} else {
    alert('Button not found');
}

//Option 2
try {
    document.getElementById('addGrade')?.addEventListener('click', addArray);
} catch (error) {
    alert('Button not found');
}