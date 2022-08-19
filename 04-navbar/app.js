// Selected navbar toggle (.nav-toggle)
let navToggle = document.querySelector(".nav-toggle");

// Selected navbar links class (.links)
let navLinks = document.querySelector(".links");


//When clicked navbar toggle show links {
/*
navToggle.addEventListener("click",()=>{
    //If contains .links contains show-links remove .show-links class else add .show-links class
    if(navLinks.classList.contains("show-links")){
        navLinks.classList.remove("show-links")
    }else{
        navLinks.classList.add("show-links");
    }
}) */

// Shorter route


//When clicked navbar toggle show links {
navToggle.addEventListener("click",()=>{
    //If contains .links contains show-links remove .show-links class else add .show-links class
    navLinks.classList.toggle("show-links")

})