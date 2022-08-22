// Select elements

let buttons = document.querySelectorAll(".question-btn");


//It loops over each button
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let showText = e.currentTarget.parentElement.parentElement;
        showText.classList.toggle("show-text");
    });
})