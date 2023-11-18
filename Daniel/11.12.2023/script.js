const element = document.getElementById('myId')
let flagElement = {
    israel: "flags_images/israel.jpg",
    usa: "flags_images/usa.jpg",
    brazil: "flags_images/brazil.jpg",
    france: "flags_images/france.jpg",
}

function changeUsa() {
    element.src = flagElement.usa
}