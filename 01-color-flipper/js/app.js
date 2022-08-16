//My Colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Select button
const btn = document.getElementById("btn");
// Select color text
const color = document.querySelector(".color");

// Add a new eventListener to button
btn.addEventListener("click",changeBgText);

function changeBgText(){

    let randomNumber = getRandomNumber();

    //Change background color
    document.body.style.backgroundColor = colors[randomNumber];
    //Change text
    color.textContent = colors[randomNumber];


}

function getRandomNumber(){
    // Created random number colors in array length
    let createNumber = Math.floor(Math.random() * colors.length);
    return createNumber;

}