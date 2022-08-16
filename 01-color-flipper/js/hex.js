//My Colors
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


// Select button
const btn = document.getElementById("btn");
// Select color cext
const color = document.querySelector(".color");

btn.addEventListener("click",changeBgText);

function changeBgText(){

    let hexColor = "#";

    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNumber()];
    }

    //Change background color
    document.body.style.backgroundColor = hexColor;
    //Change text
    color.textContent = hexColor;

}

function getRandomNumber(){
    // Created random number colors in array length
    let createNumber =  Math.floor(Math.random() * hex.length);
    return createNumber;

}