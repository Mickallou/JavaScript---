let div = document.querySelector(".myDiv");// Get Dic

let par = document.createElement('p');//Creat Element
par.innerHTML = "This this Paragraph";//Add inneerHTML
par.style.color = "pink";//Add Style Color
par.style.fontSize = "3rem";//Add Style FontSize
par.className = "left";//Add Class

div.appendChild(par);//Add par in the Div